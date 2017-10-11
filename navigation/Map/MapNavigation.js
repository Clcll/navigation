import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MyNavScreen from '../MyNavScreen';

/*Map*/
const MapScreen = ({ navigation }) => (
    <MyNavScreen banner="Map Screen" navigation={navigation} />
);

/*Map End*/

export default StackNavigator({
    Map: {
        screen: MapScreen,
        path: '/',
        navigationOptions: {
            title: 'Map',
        },
    },
});