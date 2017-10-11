import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import StocksTab from './Stocks/StocksNavigation';
import CasesTab from './Cases/CasesNavigation';
import MapTab from './Map/MapNavigation';
import ProfileTab from './Profile/ProfileNavigation';

import MyNavScreen from './MyNavScreen';

/*Stocks*/
const SignUp = ({ navigation }) => (
    <MyNavScreen banner="SignUp Screen" navigation={navigation} />
);

const SignIn = ({ navigation }) => (
    <MyNavScreen banner="SignIn Screen" navigation={navigation} />
);
/*Stocks End*/

const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
        }
    },
});

const SignedIn = TabNavigator(
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

export default (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
                screen: SignedIn,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};
