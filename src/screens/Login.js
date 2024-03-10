import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);
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
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Log In</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels} >Enter email</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} 
        value={email} onChange={e => handleEmail(e)}/>
      </View>
      {email.length < 1 ? null : emailVerify ? (<Feather name='check-circle' color='green' size={20}/>) : 
      (<Feather name='alert-triangle' size={20} color='red'/>)}

      <View style={styles.inputContainer} >
        <Text style={styles.labels} >Enter Your Password</Text>
        <TextInput style={styles.inputStyle} autoCapitalize='none'autoCorrect={false} secureTextEntry={true}
        value={password} onChange={e=> handlePassword(e)}/>
      </View>
      {password.length < 1 ? null : passwordVerify ? (<Feather name='check-circle' color='green' size={20}/>) : 
      (<Feather name='alert-triangle' size={20} color='red'/>)}

      <TouchableOpacity style={[styles.buttonStyle ,{backgroundColor: "#463"} ]}
      onPress={() => {
        handleSubmit()
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