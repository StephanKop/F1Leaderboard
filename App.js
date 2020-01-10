import React, {Component} from "react";
import Routes from "./routes";
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

console.disableYellowBox = true;

firebase.auth()
    .signInAnonymously()
    .then(credential => {
        if (credential) {
            console.log('default app user ->', credential.user.toJSON());
        }
    });

const App = () => <Routes/>
export default App;
