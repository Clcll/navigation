import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MyNavScreen from '../MyNavScreen';

/*Profile*/
const ProfileScreen = ({ navigation }) => (
    <MyNavScreen banner="Profile Screen" navigation={navigation} />
);

const FavoritesScreen = ({ navigation }) => (
    <MyNavScreen banner="Favorites Screen" navigation={navigation} />
);
/*Profile End*/

export default StackNavigator({
    Profile: {
        screen: ProfileScreen,
        path: '/',
        navigationOptions: {
            title: 'Profile',
        },
    },
    Favorites: {
        screen: FavoritesScreen,
        path: '/favorites',
        navigationOptions: {
            title: 'Favorites',
        },
    },
});