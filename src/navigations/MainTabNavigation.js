import * as React from 'react';
import { Settings, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Pomodoro from '../screens/Pomodoro';
import Setting from '../screens/Pomodoro';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Pomodoro" component={Pomodoro} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;