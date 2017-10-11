/**
 * Created by admin on 11/10/2017.
 */
import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MyNavScreen from '../MyNavScreen';

/*Cases*/
const CasesScreen = ({ navigation }) => (
    <MyNavScreen banner="Cases Screen" navigation={navigation} />
);
const CaseScreen = ({ navigation }) => (
    <MyNavScreen banner="Case Screen" navigation={navigation} />
);
/*Cases End*/


export default StackNavigator({
    Cases: {
        screen: CasesScreen,
        path: '/',
        navigationOptions: {
            title: 'Cases',
        },
    },
    Case: {
        screen: CaseScreen,
        path: '/stock',
        navigationOptions: {
            title: 'Single Case',
        },
    },
});