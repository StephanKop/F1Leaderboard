import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, Image, TextInput, TouchableOpacity,} from 'react-native';
import F1header from '../components/f1header';
import firebase from "@react-native-firebase/app";

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
        header: null
    };
    state = { email: '', password: '', errorMessage: null }
    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <ImageBackground source={require ('../images/wallpaper2.jpg')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView>
                <F1header/>
                <View style={styles.container}>
                    <Text style={styles.login}>Login</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder="Email"
                        placeholderTextColor="gray"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder="Password"
                        placeholderTextColor="gray"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Button color={'red'} title="Login" onPress={this.handleLogin} />
                    </TouchableOpacity>
                        <Button color={'gray'} title="Or register here" onPress={() => this.props.navigation.navigate('Register')} />
                </View>
            </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        marginTop: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    login: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    },
    input: {
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        borderBottomWidth: 1,
        color: 'black',
        fontSize: 18,
    },
    button: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        width: 150,
    }
});

export default LoginScreen;


