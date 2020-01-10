import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class F1header extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require ('../images/f1.png')} style={styles.logo}/>
                    <Text style={styles.title}>LEADERBOARD</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    logo: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Formula1-Display-Regular',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 25,
        // marginLeft: 20,
    }
});

export default F1header;

