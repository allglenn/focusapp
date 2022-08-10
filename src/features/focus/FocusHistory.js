import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Surface } from 'react-native-paper'
import { fontSize, marginSize, paddingSize } from '../../utils/sizes'
import { colorTheme } from '../../utils/colors'
import { RoundedBtn } from '../../components/RoundedBtn'

const HistoryItem = ({ item, index }) => {
    return(
        <View style={{padding: paddingSize.medium}}>

        <Surface style={styles.surface} elevation={1}>
            <Text style={{ width: "100%"}} >{item.focusSubject}</Text>
        </Surface>
        </View>

    )
}
export function FocusHistory({ focusHistory, onClearFocusHistory }) {

    const onClear = () => {
        onClearFocusHistory()
    }
    return (
        <SafeAreaView style={{ flex: 0.8}}>
            <Text style={{
                fontSize: fontSize.large,
                fontWeight: 'bold',
                color: '#fff',
                underlineColor: '#fff',
                paddingLeft: 10,

            }}>This is our focus history</Text>
            <FlatList
                style={{
                    flex: 0.8
                }}
                contentContainerStyle={{
                    flex: 1,
                    alignItems: "center"
                }}
                data={focusHistory}
                renderItem={HistoryItem}
            />
            <View style={styles.clearBtn}>
            <RoundedBtn style={{ fontSize: 10 }} title={"Clear"} size={80} onPress={() => onClear()}
                textStyle={{ fontSize: fontSize.large }} />
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    surface: {
        flexDirection:"row",
        padding: paddingSize.xsmall,
        height: 60,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",
    },
    clearBtn: {
        alignItems: "center",
        marginBottom: marginSize.large
    }
})