import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export  function RoundedBtn({style,textStyle,size,...props}) {
    const defaultStyle = styles(size);
  return (
      <TouchableOpacity style={[defaultStyle.radius, style]} onPress={props.onPress} disabled={props.disabled}>
              <Text style={[defaultStyle.text,textStyle]}>{props.title}</Text>
        </TouchableOpacity>
  )
}

const styles = (size) => StyleSheet.create({
        radius: {
            borderRadius: size/2,
            height: size,
            width: size,
            borderWidth: 1,
            borderColor: '#fff',
            justifyContent: 'center'
        },
        text:  
        {
            fontSize: size/1.5,
            color: "#fff",
            textAlign: 'center',
        }

})