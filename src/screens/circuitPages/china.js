import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, Image, TextInput, TouchableOpacity,} from 'react-native';
import firebase from "@react-native-firebase/app";

class ChinaScreen extends React.Component {
    static navigationOptions = {
        title: 'China',
        header: null
    };
    render() {
        return (
            <ImageBackground source={require ('../../images/wallpaper2.jpg')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={styles.container}>
                    <Text>china</Text>
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
});

export default ChinaScreen;


