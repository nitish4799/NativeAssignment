import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
  //   <View style={[styles.mainContainer, styles.blueBackground]}>
  //     <View style={styles.homeTop}>
  //       <Image style={styles.headerImage} source={require("../../assets/logo.jpg")}
  //         resizeMode='contain'/>
  //       <Text style={[styles.mainHeader , {
  //         fontSize: 33, color: "#000000"
  //       }]}>Welcome to Home Page</Text>
  //     </View>
  //  </View>
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

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  blueBackground: {
    backgroundColor: "#87ceeb",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display:"flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase"
  }
});

export default Home;