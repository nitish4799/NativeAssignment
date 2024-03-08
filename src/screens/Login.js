import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Log In</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels} >Enter Username</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} 
        value={userName} onChangeText={(currentData) => setUserName(currentData)}/>
      </View>
      <View style={styles.inputContainer} >
        <Text style={styles.labels} >Enter Your Password</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} secureTextEntry={true}
        value={password} onChangeText={(currentPass) => setPassword(currentPass)}/>
      </View>
      <TouchableOpacity style={[styles.buttonStyle ,{backgroundColor: "#463"} ]}
      onPress={() => {
        navigation.navigate('Home');
      }}>
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#fff"
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        // fontFamily: "bold",
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        // fontFamily: "regular",
    },
    inputStyle: {
        borderWidth: 1,
        // borderBlockColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 15,
        // fontFamily: "regular"
        fontSize: 18,
    },
    buttonStyle:{
        marginTop: 20,
        height: 40,
        borderRadius: 15
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        marginTop: 7,
        fontSize: 18
    }
})