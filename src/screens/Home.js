import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
  <LinearGradient style={{ flex: 1 }} colors={['#0072C6', '#002060']}>
        <View style={{flex:1}}>
            <View>
                <Image source={require('../../assets/logo3.webp')}
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
                <Image source={require('../../assets/logo2.jpg')}
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
                <Image source={require('../../assets/logo1.jpg')}
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
                <Image source={require('../../assets/logo.jpg')}
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
                    fontSize: 44,
                    fontWeight: 800,
                    color: "#FFFFFF"
                }}>
                    Dear User,
                </Text>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: "#FFFFFF"
                }}>
                    Welcome Back!
                </Text>

            </View>
        </View>
    </LinearGradient>
  );
};

export default Home;