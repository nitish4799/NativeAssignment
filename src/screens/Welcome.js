import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
// import COLORS from '../../Constants/Colors';
import Button from './components/Button';
import { useNavigation } from '@react-navigation/native';

const Welcome = ( ) => {

    const navigation = useNavigation();
    
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#0072C6', '#002060']}>
        <View style={{flex:1}}>
            <View>
                <Image source={require('../../assets/logo.jpg')}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    position: "absolute",
                    top:10,
                    transform: [
                        {translateX: 20},
                        {translateY :50},
                        {rotate: "-15deg"}
                    ]
                }}/>
                <Image source={require('../../assets/logo1.jpg')}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    position: "absolute",
                    top: -30,
                    left: 100,
                    transform: [
                        {translateX: 50},
                        {translateY: 50},
                        {rotate: "5deg"}
                    ]
                }}/>
                <Image source={require('../../assets/logo3.webp')}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    position: "absolute",
                    top: 130,
                    left: -50,
                    transform: [
                        {translateX: 50},
                        {translateY: 50},
                        {rotate: "15deg"}
                    ]
                }}/>
                <Image source={require('../../assets/logo2.jpg')}
                style={{
                    height: 200,
                    width: 200,
                    borderRadius: 20,
                    position: "absolute",
                    top : 110,
                    left: 100,
                    transform: [
                        {translateX: 50},
                        {translateY: 50},
                        {rotate: "-15deg"}
                    ]
                }}/>
            </View>

            <View style={{
                paddingHorizontal: 22,
                position: "absolute",
                top: 400,
                width: "100%"
            }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 800,
                    color: "#FFFFFF"
                }}>
                    Let's get
                </Text>
                <Text style={{
                    fontSize: 46,
                    fontWeight: 800,
                    color: "#FFFFFF"
                }}>
                    Started
                </Text>

                <View style={{marginVertical: 22}}>
                    <Text style={{
                        fontSize: 16,
                        color: "#ffffff",
                        marginVertical: 4
                    }}>
                        Connect with the world,
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: "#ffffff"
                    }}>
                        Discover Yourself
                    </Text>
                </View>

                <Button title="Join Now"style={{marginTop: 22, width: "100%"}} 
                onPress = {() => navigation.navigate('Signup')}/>

                <View style={{flexDirection: "row", marginTop: 12, justifyContent: 'center'}}>
                    <Text style={{fontSize: 16, color: "white" }}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={{fontSize:16, color:"white", fontWeight: 'bold', marginLeft: 4}}>LogIn</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </LinearGradient>
  )
}

export default Welcome

// const styles = StyleSheet.create({})