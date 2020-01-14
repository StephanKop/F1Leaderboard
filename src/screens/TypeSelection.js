import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
    TouchableOpacity,
    Image, ImageBackground,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {circs} from '../utils/circuitData';
import Nolineslider from './nolineslider';
import Slider from './slider';

class WeatherSelector extends React.Component {
    static navigationOptions = {
        title: 'Weather selector',
        header: null,
    };

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.buttoncontainer}>
                    <Text style={styles.title}>With racing line</Text>
                    <TouchableOpacity style={styles.link} onPress={() => this.props.navigation.navigate('Slider')}>
                        <Image style={styles.linkImg} source={require('../images/racingline.gif')}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Without racing line</Text>
                        <TouchableOpacity style={styles.link} onPress={() => this.props.navigation.navigate('Nolineslider')}>
                            <Image style={styles.linkImg} source={require('../images/noracingline.gif')} />
                        </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#333333',
    },

    buttoncontainer: {
    marginTop: 10,
    },

    link: {
        // backgroundColor: 'gray',
        // marginTop: 10,
        // padding: 20,
        alignItems: 'center',
        // width: '80%',
        height: 330,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        color: 'white',
    },

    linkImg: {
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: 20,
        // marginBottom: 5,
    },

    text: {
        color: 'white',
        fontSize: 20,
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Formula1-Display-Regular',
    },
});

export default WeatherSelector;

