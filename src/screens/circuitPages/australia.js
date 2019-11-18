import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

class AustraliaScreen extends React.Component {
    static navigationOptions = {
        title: 'Australia',
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
            .doc(circuit.document).orderBy('desc')
            .get();
        this.setState({rawData: documentSnapshot.data()});
    }

    render() {
        const circuit = this.props.navigation.getParam('circuit');
        return (
            <ImageBackground source={require('../../images/wallpaper2.jpg')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={styles.container}>
                    {Object.keys(this.state.rawData).map((objctjed, index) => {
                        return (<Text key={index}
                                      style={styles.login}>{objctjed + ': ' + this.state.rawData[objctjed]}</Text>);
                    })}
                    <Text>
                        {circuit.document}
                    </Text>
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

export default AustraliaScreen;


