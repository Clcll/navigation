import React from 'react';
import { Button, ScrollView, Image, Text } from 'react-native';
import SampleText from './SampleText';

export default ({ navigation, banner }) => (
    <ScrollView>
        <SampleText banner={banner}/>

        <Button
            onPress={() => navigation.navigate('SignUp', { tab: 'Online' })}
            title="Registration"
        />
        <Button
            onPress={() => navigation.navigate('Favorites', { tab: 'Online' })}
            title="Favorites in PROFILE tab"
        />
        <Button
            onPress={() => navigation.navigate('Stock', { id: 1262 })}
            title="Single STOCK screen"
        />
        <Button
            onPress={() => navigation.navigate('Case', { id: 28 })}
            title="Single CASE screen"
        />

        <Text style={{textAlign: 'center', fontSize: 24}}>{'/* TABS */'}</Text>
        <Button
            onPress={() => navigation.navigate('StocksTab')}
            title="Go to stocks tab"
        />
        <Button
            onPress={() => navigation.navigate('CasesTab')}
            title="Go to cases tab"
        />
        <Button
            onPress={() => navigation.navigate('MapTab')}
            title="Go to map tab"
        />
        <Button
            onPress={() => navigation.navigate('ProfileTab')}
            title="Go to profile tab"
        />
        <Text style={{textAlign: 'center', fontSize: 24}}>{'/* BACK */'}</Text>
        
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);