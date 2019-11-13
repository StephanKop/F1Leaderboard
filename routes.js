import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/Register";
import MainScreen from "./src/screens/main";
import UserPref from './src/screens/Userpref';
import AustraliaScreen from './src/screens/circuitPages/australia';
import BahrainScreen from './src/screens/circuitPages/bahrain';
import ChinaScreen from './src/screens/circuitPages/china';
import AzerbijanScreen from './src/screens/circuitPages/azerbijan';

const F1Nav = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    },
    Main: {
        screen: MainScreen
    },
    UserPref: {
        screen: UserPref
    },
    //circuitpages
    Australia: {
        screen: AustraliaScreen
    },
    Bahrain: {
        screen: BahrainScreen
    },
    China: {
        screen: ChinaScreen
    },
    Azerbijan: {
        screen: AzerbijanScreen
    },



});
export default createAppContainer(F1Nav);
