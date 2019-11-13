import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Button,
    ImageBackground,
} from 'react-native';
import F1header from '../components/f1header';
import firebase from "@react-native-firebase/app";

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Registratie',
        header: null
    };

    state = { email: '', password: '', errorMessage: null }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('UserPref'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <ImageBackground source={require ('../images/wallpaper2.jpg')} style={{width: '100%', height: '100%'}}>
            <SafeAreaView>
                <F1header/>
                <View style={styles.container}>
                    <Text style={styles.login}>Register</Text>
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
                        <Button color={'red'} title="Sign Up" onPress={this.handleSignUp} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Button color={'gray'} title="Back to login" onPress={() => this.props.navigation.navigate('Login')} />
                    </TouchableOpacity>
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
        // paddingLeft: 5,
        marginTop: 10,
        borderBottomWidth: 1,
        // borderBottomColor: 'gray',
        // borderRadius: 5,
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

export default RegisterScreen;

