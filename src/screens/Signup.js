import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
// import AppLoading from "expo-app-loading";
// import {useFonts} from "expo-font";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
// const handleName = (() =>{
//   console.log("handle name on change");
// })

const Signup = () => {

    const [name, setName] = useState("");
    const [nameVerify , setNameVerify] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);
    const navigation = useNavigation();

    const handleSubmit = ((e) =>{

      const userData = {name:name , email:email, password: password};

      if ( nameVerify && emailVerify && passwordVerify){
        axios
        .post("http://192.168.53.156:5000/signup",userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status === "User already exist"){
            navigation.navigate('Login');
          }
          if ( res.data.status === "ok"){
            Alert.alert("Sign up Successfull!");
            navigation.navigate('Login');
          }
          else{
            Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch(e=> console.log(e));
      }
      else{
        Alert.alert('Fill mandatory details');
      }
    })

    const handleName = ((e) =>{
      const nameVar = e.nativeEvent.text;
      setName(nameVar);
      setNameVerify(false);
      {nameVar.length >= 1 ? setNameVerify(true) : setNameVerify(false) }
      // console.log(e.nativeEvent.text);
    })

    const handleEmail = ((e) =>{
      const emailVar = e.nativeEvent.text;
      setEmail(emailVar);
      setEmailVerify(false);
      if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)){
        setEmail(emailVar);
        setEmailVerify(true);
      }
    })

    const handlePassword = ((e) => {
      const passwordVar = e.nativeEvent.text;
      setPassword(passwordVar);
      // console.log(passwordVar);
      setPasswordVerify(false);
      if ( passwordVar.length > 6){
        setPasswordVerify(true);
      }
    })

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels} >Enter Your name</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} 
        value={name} onChange={e => handleName(e)}/>
        {name.length < 1 ? null : nameVerify ? <Feather name='check-circle' color='green' size={20}/> :
         <Feather name='alert-triangle' size={20} color='red'/>}
      </View>
      {name.length < 1 ? null : nameVerify ? null : (
        <Text>Required Field</Text>
      )}

      <View style={styles.inputContainer}>
        <Text style={styles.labels} >Enter Your Email</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} 
        value={email} onChange={e => handleEmail(e)}/>
      </View>
      {email.length<1 ? null : emailVerify ? (<Feather name='check-circle' color='green' size={20}/>) :
       (<Feather name='alert-triangle' size={20} color='red'/>)}

      {/* <View style={styles.inputContainer}>
        <Text style={styles.labels} >Enter Your Phone Number</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} 
        value={ph_number} />
      </View> */}

      <View style={styles.inputContainer} >
        <Text style={styles.labels} >Enter Your Password</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} secureTextEntry={true}
        value={password} onChange={e => handlePassword(e)}/>
      </View>
      {password.length<1 ? null : passwordVerify ? (<Feather name='check-circle' color='green' size={20}/>) :
       (<Feather name='alert-triangle' size={20} color='red'/>)}

      <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor: "#463"}]}
        onPress={() => {
          handleSubmit()
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  )
}

export default Signup;

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