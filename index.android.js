/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import CreateRootNavigator from './navigation/navigation';


AppRegistry.registerComponent('Wrapper', () => CreateRootNavigator(false));
