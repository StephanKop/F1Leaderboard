import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, Image, TextInput, TouchableOpacity,} from 'react-native';
import F1header from '../components/f1header';
import firebase from "@react-native-firebase/app";
import SplashScreen from 'react-native-splash-screen'

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
        header: null
    };
    state = { email: 'nee@nee.nl', password: 'NeeNee123', errorMessage: null };
    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Slider'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    // componentDidMount() {
    //     // do stuff while splash screen is shown
    //     // After having done stuff (such as async tasks) hide the splash screen
    //     SplashScreen.hide();
    // }

    render() {
        return (
            <ImageBackground source={require ('../images/background.gif')} style={{width: '100%', height: '100%'}}>
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
                        placeholderTextColor="white"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Button color={'white'} title="Login" onPress={this.handleLogin} />
                    </TouchableOpacity>
                        <Button color={'white'} title="Or register here" onPress={() => this.props.navigation.navigate('Register')} />
                </View>
            </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginTop: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    login: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Formula1-Display-Regular',
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
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 18,
    },
    button: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'white',
        // backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 5,
        width: 150,
    }
});

export default LoginScreen;


