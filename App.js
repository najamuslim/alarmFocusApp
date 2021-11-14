import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './src/navigations/MainTabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
