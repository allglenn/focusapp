import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colorTheme } from '../../utils/colors'
import { fontSize, paddingSize } from '../../utils/sizes'
import Board from '../Board/Board'
import { RoundedBtn } from '../../components/RoundedBtn'

export function Timer({ focusSubject, onTimerEnd, clearSubject }) {
    const [start,setStart] = useState(false)
    const [countinMin,setCountMin] = useState(20)
  return (
    <View style={styles.container}>
          <View style = {styles.board}>
              <Board countinMin={countinMin} isPaused={!start} onTimerEnd={onTimerEnd} />
          </View>
          <Text style={styles.uptitle}>We are focusing on: </Text>
          <Text style={ styles.title}>{focusSubject}</Text>
          <View style={ styles.countMinChoices}>
              <View style={styles.choice}>
              <RoundedBtn size={80} style={styles.btn} title="10" onPress={() => setCountMin(10)} />
              </View>
              <View style={styles.choice}>
              <RoundedBtn size={80} style={styles.btn} title="15" onPress={() => setCountMin(15)} />
              </View>
              <View style={styles.choice}>
              <RoundedBtn size={80} style={styles.btn} title="20" onPress={() => setCountMin(20)} />
              </View>

          </View>
          <View style={ styles.start }>
              <RoundedBtn style={{ fontSize: 10 }} title={start? "Pause" : "Start"} size={120} onPress={() => setStart(!start)} 
              textStyle={{ fontSize: fontSize.large}}
              />
          </View>
          <View style={styles.cancelBtn}>
              <RoundedBtn style={{ fontSize: 10 }} title={"-"} size={40} onPress={() => clearSubject()}
                  textStyle={{ fontSize: fontSize.medium }}
              />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : paddingSize.large,
        alignItems:"center",
        backgroundColor: colorTheme.bg,
    },
    title: {
        fontSize: 20,
        color: colorTheme.white,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom : paddingSize.xlarge
    },
    uptitle :{
        color : colorTheme.white,
    },
    board: {
        paddingBottom : paddingSize.xlarge,
    }
    ,
    start: {
        paddingTop: paddingSize.xlarge,

    },
    countMinChoices : {
        flexDirection: "row",
        paddingTop: paddingSize.xlarge,
        borderTopWidth: 2,
        borderTopColor: colorTheme.white

    },
    choice: {
        padding: paddingSize.small
    },
    cancelBtn :
    {
        flexDirection: "row",
        paddingTop: paddingSize.xlarge,
        alignItems: 'flex-start',
    }

})