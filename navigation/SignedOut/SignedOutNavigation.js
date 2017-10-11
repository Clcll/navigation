import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import MyNavScreen from '../MyNavScreen';

/*Login*/
const SignUp = ({ navigation }) => (
    <MyNavScreen banner="SignUp Screen" navigation={navigation} />
);

const SignIn = ({ navigation }) => (
    <ScrollView>
        <Button
            onPress={() => {

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'SignedIn'})
                ],
                key: null
            });
            navigation.dispatch(resetAction);
            // navigation.navigate('SignedIn')
        }}
            title="SignIN"
        />
        <Button
            onPress={() => navigation.navigate('SignUp', { tab: 'Online' })}
            title="Registration"
        />
    </ScrollView>

);
/*Login End*/

export default StackNavigator({
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