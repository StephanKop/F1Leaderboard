import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, ImageBackground, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import Swiper from 'react-native-swiper';

class CircuitTimeScreenNoLine extends React.Component {
    static navigationOptions = {
        title: 'Circuit Time',
        header: null
    };

    constructor() {
        super();
        this.state = {
            data: [],
            rawData: {},
            newName: '',
            newTime: '',
        };
    }


    async componentDidMount() {

        const circuit = this.props.navigation.getParam('circuit');
        const documentSnapshot = await firestore()
            .collection('TimesNoLine')
            .doc(circuit.document)
            .get();

        const keys = Object.keys(documentSnapshot.data());
        let array = keys.map((key) => {
            const testTime = documentSnapshot.data()[key].split('.');

            let x = 0;

            x += Number(testTime[0]) * 60 * 1000;
            x += Number(testTime[1]) * 1000;
            x += Number(testTime[2]);

            return {name: key, time: x};
        });

        array = array.sort(function (a, b) {
            return a.time - b.time;
        });
        console.log(array);
        this.setState({data: array})
    }

    async insertData() {
        const newTime = this.state.newTime;
        const newName = this.state.newName;
        const circuit = this.props.navigation.getParam('circuit');

        const data = {};
        data[newName]= newTime;
        const documentSnapshot = await firestore()
            .collection('Times')
            .doc(circuit.document)
            .update(data);
    }

    render() {
        const circuit = this.props.navigation.getParam('circuit');
        const {data} = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>{circuit.title}</Text>
                <ScrollView>
                    {data.map((object, index) => {
                        return (<View key={index} style={styles.timeContainer}>
                                <Text style={styles.name}>{index + 1 + '. '}{object.name}</Text>
                                <Text style={styles.time}>{moment(object.time).format('mm:ss.SSS')}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
                <KeyboardAvoidingView style={styles.inputContainer} behavior="padding" enabled>
                    <View style={styles.textWrapper}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder="Name"
                            placeholderTextColor="gray"
                            onChangeText={(newName) =>{this.setState({newName: newName})}}
                            value={this.state.newName}
                            clearButtonMode='always'
                        />
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder="Time"
                            placeholderTextColor="gray"
                            textContentType="oneTimeCode"
                            onChangeText={(newTime) =>{this.setState({newTime: newTime})}}
                            value={this.state.newTime}
                            clearButtonMode='always'
                        />
                    </View>
                    <View style={styles.buttonwrapper}>
                        <TouchableOpacity style={styles.button} onPress={() => {this.insertData(); this.componentDidMount().documentSnapshot; Keyboard.dismiss()}}>
                            <Image style={styles.buttonImage} source={require('../images/addbw.png')}/>
                            {/*<Button title={'Add'} color={'red'} onPress={() => this.insertData()}/>*/}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Formula1-Display-Regular',
    },
    time: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 10,
        color: 'gray',
        fontFamily: 'Formula1-Display-Regular',

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        paddingTop: 10,
    },
    textWrapper: {
        flexDirection: 'column',
        width: '60%',
    },
    input: {
        marginBottom: 10,
        borderBottomColor: 'red',
        fontSize: 18,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        color: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
    },

    name: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Formula1-Display-Regular',
    },
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    timeContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    button: {
        marginTop: 5,
        borderRadius: 50,
        height: 60,
        width: 60,
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    buttonImage: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: "#000",
    }
});

export default CircuitTimeScreenNoLine;


