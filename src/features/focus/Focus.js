import { StyleSheet, Text, View } from 'react-native'
import React, {  useState } from 'react'
import { TextInput } from 'react-native-paper'
import { style } from '@mui/system'
import { RoundedBtn } from '../../components/RoundedBtn'
import { focusInittialState, focusReducer } from '../../reducers/focusReducer'
import { fontSize, paddingSize } from '../../utils/sizes'

export function Focus({ dispatch }) {

 const [focusSubject,setFocusSubject] = useState("");

 
  return (
    <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.textTitle} >What is your focus subject ? </Text>
              <View style={styles.inputContainer}>
                  <View style={styles.boxContainer}>
                     <TextInput placeholder={"Clean my bedroom..."} selectionColor={"#FF8FB1"}
                          activeUnderlineColor={"#FF8FB1"} onChangeText={(text) => setFocusSubject(text)} />
                </View>
                <View style={styles.btnRd}>
                      <RoundedBtn title={"+"} size={45} onPress={() => dispatch({ type: 'ADD_FOCUS_SUBJECT', payload:  focusSubject  })} />
                </View>
              </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        paddingTop: paddingSize.xlarge,

    },
    titleContainer: {
        flex: 0.5,
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: '#fff',
        underlineColor: '#fff',
        paddingLeft : 10,
    },
    inputContainer:{
        flexDirection: 'row',
        paddingTop: paddingSize.small,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boxContainer : {
        flex: 1, 
        paddingRight: paddingSize.xsmall, 
    },
    btnRd : {
    }
    

})