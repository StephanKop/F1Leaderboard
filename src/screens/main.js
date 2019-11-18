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

class MainScreen extends React.Component {
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
        const documentSnapshot = await firestore()
            .collection('Times')
            .doc('Spa')
            .get();
        this.setState({rawData: documentSnapshot.data()});
    };

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    <ScrollView>
                        <Text style={styles.login}>Circuits</Text>
                        <View style={styles.scrollContainer}>
                            {circs.map((circuit, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.button} onPress={() => this.props.navigation.navigate(circuit.link, {circuit: circuit})}>
                                        <Image style={styles.cardImage} source={circuit.img}/>
                                        <View style={styles.cardDescriptionWrapper}>
                                            <View style={styles.cardDescriptionText}>
                                                <Text style={styles.cardText}>Length:</Text>
                                                <Text style={styles.cardTextSub}>10km</Text>
                                                <Text style={styles.cardText}>Fastest lap:</Text>
                                                <Text style={styles.cardTextSub}>1:19.119</Text>
                                            </View>
                                            {/*<Text style={styles.circuitTitle}>{circuit.title}</Text>*/}
                                            <Image style={styles.circuitImage} source={circuit.circuitMap}/>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 36,
        marginLeft: 30,
    },
    cardImage: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardText: {
        padding: 5,
        fontWeight: '500',
        fontSize: 15,
        color: 'red',
    },
    cardTextSub: {
        color: 'gray',
        paddingLeft: 5,
    },
    circuitTitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 5,
        marginBottom: 5,
        fontSize: 20,
    },
    mainContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
    },
    circuitImage: {
        width: '80%',
        height: '80%',
        opacity: 0.8,
        marginTop: 10,
        marginLeft: 50,
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
        width: '95%',
        height: 220,
        marginBottom: 30,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardDescriptionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    cardDescriptionText: {
        flexDirection: 'column',
    }
});

export default MainScreen;

