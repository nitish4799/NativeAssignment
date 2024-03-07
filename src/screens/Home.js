import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
    return(
    <View style={styles.mainContainer}> 
      <View style={styles.homeTop}>
        <Image style={styles.headerImage} source={require("../../assets/logo.jpg")}
        resizeMode='contain'/>
        <Text style={[styles.mainHeader , {
          fontSize: 33, color: "#4c5dab"
        }]}>Welcome to Home Page</Text>
      </View>
   </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      backgroundColor: "#fff",
      textAlign: "center,"
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