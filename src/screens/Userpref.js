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
// import firestore from '@react-native-firebase/firestore';

class UserPref extends React.Component {
    static navigationOptions = {
        title: 'Registratie',
        header: null
    };

    state = { username: '', avatar: '', currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    // handleSignUp = () => {
    //     firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //         .then(() => this.props.navigation.navigate('Main'))
    //         .catch(error => this.setState({ errorMessage: error.message }))
    // };

    render() {
        const { currentUser } = this.state;
        return (
            <ImageBackground source={require ('../images/background.gif')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView>
                    <F1header/>
                    <View style={styles.container}>
                        {/*<Text style={styles.login}>User preferences</Text>*/}
                        {this.state.errorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
                        <Text style={styles.login}>Hi, {currentUser && currentUser.email}! Thank you for registering!</Text>
                        {/*<TextInput*/}
                        {/*    secureTextEntry*/}
                        {/*    style={styles.input}*/}
                        {/*    autoCapitalize="none"*/}
                        {/*    placeholder="username"*/}
                        {/*    placeholderTextColor="gray"*/}
                        {/*    onChangeText={password => this.setState({ password })}*/}
                        {/*    value={this.state.username}*/}
                        {/*/>*/}
                        <TouchableOpacity style={styles.button}>
                            <Button color={'red'} title="Back to login" onPress={() => this.props.navigation.navigate('Login')} />
                        </TouchableOpacity>
                        {/*<TouchableOpacity>*/}
                        {/*    <Button color={'gray'} title="Back" onPress={() => this.props.navigation.navigate('Register')} />*/}
                        {/*</TouchableOpacity>*/}
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

export default UserPref;

