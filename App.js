import React from 'react';
import { Button, ScrollView, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <SampleText banner={banner}/>
        <Button
            onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
            title="Open profile screen"
        />
        <Button
            onPress={() => navigation.navigate('NotifSettings')}
            title="Open notifications screen"
        />
        <Button
            onPress={() => navigation.navigate('SettingsTab')}
            title="Go to settings tab"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);

const StocksScreen = ({ navigation }) => (
    <MyNavScreen banner="Stocks Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}s Profile`}
        navigation={navigation}
    />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const MainTab = StackNavigator({
    Stocks: {
        screen: StocksScreen,
        path: '/',
        navigationOptions: {
            title: 'Stocks',
        },
    },
    Profile: {
        screen: MyProfileScreen,
        path: '/people/:name',
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}'s Profile!`,
        }),
    },
});

const SettingsTab = StackNavigator({
    Settings: {
        screen: MySettingsScreen,
        path: '/',
        navigationOptions: () => ({
            title: 'Settings',
        }),
    },
    NotifSettings: {
        screen: MyNotificationsSettingsScreen,
        navigationOptions: {
            title: 'Notifications',
        },
    },
});

const StacksInTabs = TabNavigator(
    {
        MainTab: {
            screen: MainTab,
            path: '/',
            navigationOptions: {
                tabBarLabel: 'Stocks',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        style={{width: 26, height: 26}}
                        source={require('./stocks.png')}
                    />
                ),
            },
        },
        SettingsTab: {
            screen: SettingsTab,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        style={{width: 26, height: 26}}
                        source={require('./online.png')}
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

export default StacksInTabs;