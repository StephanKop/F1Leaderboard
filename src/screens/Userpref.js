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

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        const { currentUser } = this.state;
        return (
            <ImageBackground source={require ('../images/wallpaper2.jpg')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView>
                    <F1header/>
                    <View style={styles.container}>
                        {/*<Text style={styles.login}>User preferences</Text>*/}
                        {this.state.errorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
                        <Text style={styles.login}>Hi, {currentUser && currentUser.email}! Fill in your user preferences below.</Text>
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder="username"
                            placeholderTextColor="gray"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.username}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Button color={'red'} title="Continue" onPress={this.handleSignUp} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color={'gray'} title="Back" onPress={() => this.props.navigation.navigate('Register')} />
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

export default UserPref;

