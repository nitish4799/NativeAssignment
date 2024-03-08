import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "transparent"
                },
                headerTintColor: "#987e64",
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            >
                <Stack.Screen name='Signup' component={Signup}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;