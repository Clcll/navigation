import React from 'react';
import { Button, ScrollView, Image, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import StocksTab from '../Stocks/StocksNavigation';
import CasesTab from '../Cases/CasesNavigation';
import MapTab from '../Map/MapNavigation';
import ProfileTab from '../Profile/ProfileNavigation';

export default TabNavigator(
    {
        StocksTab: {
            screen: StocksTab,
            path: '/stocks',
            navigationOptions: {
                tabBarLabel: 'Stocks',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        style={{width: 26, height: 26}}
                        source={require('./sales.jpg')}
                    />
                ),
            },
        },
        CasesTab: {
            screen: CasesTab,
            path: '/cases',
            navigationOptions: {
                tabBarLabel: 'Cases',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        style={{width: 26, height: 26}}
                        source={require('./online.png')}
                    />
                ),
            },
        },
        MapTab: {
            screen: MapTab,
            path: '/map',
            navigationOptions: {
                tabBarLabel: 'Places',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        style={{width: 26, height: 26}}
                        source={require('./places.png')}
                    />
                ),
            },
        },
        ProfileTab: {
            screen: ProfileTab,
            path: '/profile',
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        style={{width: 26, height: 26}}
                        source={require('./profile.png')}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);