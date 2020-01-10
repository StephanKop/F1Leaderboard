import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
    TouchableOpacity,
    Image, ImageBackground,ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {circs} from '../utils/circuitData';
import Swiper from 'react-native-swiper';
import moment from 'moment';

class Slider extends React.Component {
    static navigationOptions = {
        title: 'Main',
        header: null,
    };

    constructor() {
        super();
        this.state = {
            data: [],
            rawData: {},
        };
    }

    async componentDidMount() {

        const circuit = this.props.navigation.getParam('circuit');
        const documentSnapshot = await firestore()
            .collection('Times')
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

    render() {
        return (
            <View style={styles.mainContainer} removeClippedSubviews={false}>
                        <View style={styles.scrollContainer} removeClippedSubviews={false}>
                            <Swiper loop={false} showsButtons={false} activeDotColor={'white'} removeClippedSubviews={false}>
                            {circs.map((circuit, index) => {
                                return (
                                    <ImageBackground style={styles.cardImage} source={circuit.img} blurRadius={5}>
                                    <TouchableOpacity key={index} style={styles.button} onPress={() => this.props.navigation.navigate(circuit.link, {circuit: circuit})}>
                                        <Text style={styles.login}>{circuit.title}</Text>
                                        <Text style={styles.subHeader}>{circuit.circuitName}</Text>
                                            <Image style={styles.circuitImage} source={circuit.circuitMap}/>
                                    </TouchableOpacity>
                                        <ScrollView>
                                        <View key={index} style={styles.timeContainer}>
                                            <Text style={styles.name}>Stephan</Text>
                                            <Text style={styles.time}>1.21.190</Text>
                                        </View>
                                        <View key={index} style={styles.timeContainer}>
                                            <Text style={styles.name}>Stephan</Text>
                                            <Text style={styles.time}>1.21.190</Text>
                                        </View>
                                        <View key={index} style={styles.timeContainer}>
                                            <Text style={styles.name}>Stephan</Text>
                                            <Text style={styles.time}>1.21.190</Text>
                                        </View>
                                        </ScrollView>
                                    </ImageBackground>
                                );
                            })}
                            </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 50,
        fontFamily: 'Formula1-Display-Regular',
    },
    subHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10,
        fontFamily: 'Formula1-Display-Regular',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardText: {
        padding: 5,
        fontWeight: '500',
        fontSize: 15,
        color: 'black',
    },
    cardTextSub: {
        color: 'gray',
        paddingLeft: 5,
    },
    circuitTitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        // paddingTop: 5,
        // marginBottom: 5,
        fontSize: 30,
    },
    mainContainer: {
        height: '100%',
        backgroundColor: 'black',
        // backgroundColor: '#333333',
    },
    scrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // paddingTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        // width: '90%',
    },
    circuitImage: {
        marginTop: -80,
        width: '80%',
        height: '80%',
        // opacity: 0.8,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'contain',
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        // borderWidth: 2,
        // borderColor: 'black',
        borderRadius: 10,
        // width: 150,
        // height: 100,
        width: '100%',
        height: '100%',
        marginBottom: 30,
        justifyContent: 'flex-start',
        // backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 20,
    },
    cardDescriptionWrapper: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,

    },
    cardDescriptionText: {
        flexDirection: 'column',
    },

    time: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 10,
        color: 'gray',
        fontFamily: 'Formula1-Display-Regular',

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

    name: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Formula1-Display-Regular',
    },
});

export default Slider;

