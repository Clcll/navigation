import React from 'react';
import { StackNavigator} from 'react-navigation';

import SignedIn from './SignedIn/SignedInNavigation'
import SignedOut from './SignedOut/SignedOutNavigation'

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
