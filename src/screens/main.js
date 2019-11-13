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
    Image,
} from 'react-native';
import {withNavigation} from 'react-navigation';
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

    // async getData() {
    // const documentSnapshot = await firestore()
    //     .collection('Times')
    //     .doc('Spa')
    //     .get();
    //     let data = documentSnapshot.data();
    //     this.setState({rawData: documentSnapshot.data()});
    //     Object.keys(data).map((key)=> {
    //         // console.log(key + ' ' + data[key]);
    //         this.setState({data: key + data[key]});
    //     });
    //     console.log(this.state.rawData.Stephan);
    // };

    async componentDidMount() {
        const documentSnapshot = await firestore()
            .collection('Times')
            .doc('Spa')
            .get();
        let data = documentSnapshot.data();
        this.setState({rawData: documentSnapshot.data()});

        // Object.keys(data).map((key)=> {
        //     this.setState({data: `${key} ${data[key]}`});
        // });
        // console.log(this.state.data);
    };


    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    {/*{Object.keys(this.state.rawData).map((objctjed) => {*/}
                    {/*    return (<Text style={styles.login}>{objctjed + ': ' + this.state.rawData[objctjed]}</Text>);*/}
                    {/*})}*/}
                    <ScrollView>
                        <Text style={styles.login}>Circuits</Text>
                        <View style={styles.scrollContainer}>
                            {/*<Button color={'red'} title="get the data" onPress={() => this.getData()} />*/}
                            {/*<Text style={styles.login}>{this.state.rawData.Stephan}</Text>*/}

                            {circs.map((circuit, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.button} onPress={() => this.props.navigation.navigate(circuit.link)}>
                                        <Text>{circuit.title}</Text>
                                        <Image style={styles.circuitImage} source={circuit.img}/>
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
    mainContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 30,
    },
    circuitImage: {
        width: 80,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'contain',
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        width: 150,
        height: 100,
        marginBottom: 10,
        justifyContent: 'flex-start',
    },
});

export default MainScreen;

