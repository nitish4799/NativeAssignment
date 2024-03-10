import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from './components/Button';

const Login = () => {

    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const navigation = useNavigation();

    const handleEmail = ((e)=>{
      const emailVar = e.nativeEvent.text;
      setEmail(emailVar);
      if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)){
        setEmail(emailVar);
        setEmailVerify(true);
      }
    })

    const handlePassword = ((e) =>{
      const passwordVar = e.nativeEvent.text; 
      setPassword(passwordVar);
      setPasswordVerify(false);
      if ( passwordVar.length > 6){
        setPasswordVerify(true);
      }
    })

    const handleSubmit =  ((e) => {
      // navigation.navigate('Home')
      const userData = {email , password};

      if ( emailVerify && passwordVerify){
        axios
        .post("http://192.168.53.156:5000/login" , userData)
        .then(res =>{
          if ( res.data === "User doesn't exist" ){
            Alert.alert(res.data);
            navigation.navigate('Signup');
          }
          else{
            if ( res.data.status === "Login Successfull"){
              navigation.navigate('Home');
            }
            else{
              Alert.alert(res.data.status);
            }
          }
        })
        .catch(e => console.log(e));
      }
    })

  return (
    <SafeAreaView style={{ flex:1 , backgroundColor: "white"}}>
      <View style={{flex:1, marginHorizontal:22}}>
        <View style={{marginVertical: 22}}>
          <Text style={{fontSize:22, fontWeight: 'bold', marginVertical: 12, color: 'black'}}>Welcome Back!</Text>
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
              secureTextEntry={isPasswordShown} style={{width:'100%'}} value={password} onChange={e=> handlePassword(e)}/>
              <TouchableOpacity style={{position:'absolute', right:12}}>
                {isPasswordShown ? <Ionicons name='eye-off' size={24} color='black' onPress={()=> setIsPasswordShown(false)}/> :
                <Ionicons name='eye' size={24} color='black' onPress={()=> setIsPasswordShown(true)}/>}
              </TouchableOpacity>
          </View>
        </View>

        <Button title='Log In' filled style={{marginTop:18, marginBottom:4}}  onPress={() => {handleSubmit()}}/>

        <View style={{flexDirection:'row', justifyContent:'center', marginVertical: 22}}>
          <Text style={{fontSize:16, color:'black'}}>Don't have an account?</Text>
          <Pressable onPress={()=> navigation.navigate('Signup')}>
            <Text style={{fontSize: 16, color:"#0072C6", fontWeight:'bold', marginLeft:6}}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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