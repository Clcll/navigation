import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MyNavScreen from '../MyNavScreen';

/*Stocks*/
const StocksScreen = ({ navigation }) => (
    <MyNavScreen banner="Stocks Screen" navigation={navigation} />
);

const StockScreen = ({ navigation }) => (
    <MyNavScreen banner="Stocks Screen" navigation={navigation} />
);
/*Stocks End*/

export default StackNavigator({
    Stocks: {
        screen: StocksScreen,
        path: '/',
        navigationOptions: {
            title: 'Stocks',
        },
    },
    Stock: {
        screen: StockScreen,
        path: '/stock',
        navigationOptions: {
            title: 'Single Stock',
        },
    },
    // Profile: {
    //     screen: MyProfileScreen,
    //     path: '/people/:name',
    //     navigationOptions: ({ navigation }) => ({
    //         title: `${navigation.state.params.name}'s Profile!`,
    //     }),
    // },
});