import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './components/Button';


const Signup = () => {

    const [name, setName] = useState("");
    const [nameVerify , setNameVerify] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(true);
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
    });

  return (
    <SafeAreaView style={{ flex:1 , backgroundColor: "white"}}>
      <View style={{flex:1, marginHorizontal:22}}>
        <View style={{marginVertical: 22}}>
          <Text style={{fontSize:22, fontWeight: 'bold', marginVertical: 12, color: 'black'}}>Create Account</Text>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={{fontSize: 16, fontWeight:400, marginVertical:8}} >Name</Text>
          <View style={{width:'100%', height:48, borderColor: 'black', borderWidth: 1, borderRadius:8,
            alignItems:'center', justifyContent:'center', paddingLeft:22}}>
              <TextInput placeholder='Enter your name' placeholderTextColor='grey' 
              style={{width:'100%'}} value={name} onChange={e => handleName(e)}/>
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={{fontSize: 16, fontWeight:400, marginVertical:8}} >Email address</Text>
          <View style={{width:'100%', height:48, borderColor: 'black', borderWidth: 1, borderRadius:8,
            alignItems:'center', justifyContent:'center', paddingLeft:22}}>
              <TextInput placeholder='Enter your email address' placeholderTextColor='grey' 
              keyboardType='email-address' style={{width:'100%'}} value={email} onChange={e => handleEmail(e)}/>
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={{fontSize: 16, fontWeight:400, marginVertical:8}} >Password</Text>
          <View style={{width:'100%', height:48, borderColor: 'black', borderWidth: 1, borderRadius:8,
            alignItems:'center', justifyContent:'center', paddingLeft:22}}>
              <TextInput placeholder='Enter your password' placeholderTextColor='grey' 
              secureTextEntry={isPasswordShown} style={{width:'100%'}} value={password} onChange={e => handlePassword(e)}/>
              <TouchableOpacity style={{position:'absolute', right:12}}>
                {isPasswordShown ? <Ionicons name='eye-off' size={24} color='black' onPress={()=> setIsPasswordShown(false)}/> :
                <Ionicons name='eye' size={24} color='black' onPress={()=> setIsPasswordShown(true)}/>}
              </TouchableOpacity>
          </View>
        </View>

        <Button title='Sign Up' filled style={{marginTop:18, marginBottom:4}} onPress={()=>{handleSubmit()}}/>

        <View style={{flexDirection:'row', justifyContent:'center', marginVertical: 22}}>
          <Text style={{fontSize:16, color:'black'}}>Already have an account?</Text>
          <Pressable onPress={()=> navigation.navigate('Login')}>
            <Text style={{fontSize: 16, color:"#0072C6", fontWeight:'bold', marginLeft:6}}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup;