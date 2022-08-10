import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, userRef } from 'react'
import { colorTheme } from '../../utils/colors'
import { fontSize, paddingSize } from '../../utils/sizes'

const convertMinMils = (min) => {
  return  min * 60 * 1000;
};
const converTminutes = (count) => { 

    return  Math.floor(count / 1000 / 60) % 60
}

const convertSeconds = (count) => {
    return  Math.floor(count / 1000) % 60
}
 const formatTime = (time) => {
    if(time < 10) {
        return `0${time}`
}
    return time;
}



const Board = ({ countinMin ,isPaused ,onTimerEnd  }) => {
    const interval = React.useRef(null);
    const [count, setCount] = useState(convertMinMils(countinMin));
    const [minutes, setMinutes] = useState(converTminutes(convertMinMils(countinMin)));
    const [seconds, setSeconds] = useState(convertSeconds(convertMinMils(countinMin)));

    const onEnd = () => {
        onTimerEnd()
    }
    useEffect(() => {
        let interval = setInterval(() => {
            if (!isPaused) {
            setCount(lastCount => {
                
                setMinutes(converTminutes(lastCount));
                setSeconds(convertSeconds(lastCount));
                lastCount <= 0 && clearInterval(interval);
                if(lastCount <= 0) {
                    onEnd();
                }
                return lastCount - 1000
            })
            }
        }
        , 1000) 
        return () => clearInterval(interval)
    }, [isPaused]);

    useEffect(() => {
        setCount(convertMinMils(countinMin));
        setMinutes(converTminutes(convertMinMils(countinMin)));
        setSeconds(convertSeconds(convertMinMils(countinMin)));
    }, [countinMin])

    return (
        <View>
            <View style={styles.rectangle}>
                <Text style={styles.titleCount}>{formatTime(minutes)} : {formatTime(seconds)}</Text>
            </View>
        </View>
    )
}

export default Board

const styles = StyleSheet.create({
    titleCount: {
        padding: paddingSize.medium,
        fontSize: fontSize.max,
        color: colorTheme.white,
        fontWeight: 'bold',
        backgroundColor: colorTheme.teinted
    }

})