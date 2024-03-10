import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = (props) => {

    const filledBgColor = props.color || "#0072C6";
    const bg = props.filled ? filledBgColor : "#FFFFFF" ;
    const textColor = props.filled ? "#FFFFFF" : "#0072C6";

  return (
    <TouchableOpacity onPress={props.onPress} style={{
        ...styles.button,
        ...{backgroundColor: bg},
        ...props.style
    }}>
        <Text style={{fontSize: 18, ...{color: textColor}}} >{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        paddingBottom:16,
        paddingVertical: 10,
        borderColor: "#0072C6",
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})