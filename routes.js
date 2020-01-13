import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/Register";
import MainScreen from "./src/screens/main";
import UserPref from './src/screens/Userpref';
import Slider from './src/screens/slider';
import Nolineslider from './src/screens/nolineslider';
import WeatherSelector from './src/screens/TypeSelection';
import CircuitTimeScreen from './src/screens/circuitTime';
import CircuitTimeScreenNoLine from './src/screens/circuitTimeNoLine';

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
    Slider: {
        screen: Slider
    },
    Nolineslider: {
        screen: Nolineslider
    },
    WeatherSelector: {
        screen: WeatherSelector
    },

    CircuitTime: {
        screen: CircuitTimeScreen
    },

    CircuitTimeNoLine: {
        screen: CircuitTimeScreenNoLine
    }



});
export default createAppContainer(F1Nav);
