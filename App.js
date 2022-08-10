import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { Focus } from './src/features/focus/Focus'
import { focusInittialState, focusReducer } from './src/reducers/focusReducer';
import { paddingSize } from './src/utils/sizes';
import { colorTheme } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function App() {

  const [focusSubject, setFocusSubject] = useState(null);
  const [state, dispatch] = useReducer(focusReducer, focusInittialState);
  const {  setItem :  saveList , getItem : retrieveList } = useAsyncStorage("@key_focus_list");
  const [focusList, setFocusList] = useState([]);

  const readListFromStorage = async () => {
    let list  = await retrieveList();
    return JSON.parse(list);
  }

   const writeListToStorage = async (newList) => {
    await saveList(JSON.stringify(newList));

  }
  useEffect(() => {
  
    setFocusSubject(state.focusSubject);
  }, [state.focusSubject]);

  useEffect(() => {
    setFocusList([...state.focusList]);
    writeListToStorage([...state.focusList]).then(() => {
      readListFromStorage();
    }).catch(err => {
      console.log(err);
    }
    );
  }, [state.focusList]);

  useEffect(() => {
    readListFromStorage().then(list => {
      dispatch({ type: "SET_FOCUS_LIST", payload: list });
    }).catch(err => {
      console.log(err);
    });
  } , []);

  const onTimerEnd = () => {
    dispatch({ type: 'RESET_FOCUS_SUBJECT', payload: null });
  }

  const clearSubject = () => {
    dispatch({ type: 'CLEAR_FOCUS_SUBJECT', payload: null });
  }
  const onClearFocusHistory = () => {
    dispatch({ type: 'CLEAR_ALL_FOCUS_SUBJECTS', payload: [] });
  }
  return (
    <View style={styles.container} >
      {
        focusSubject ? (
            <Timer focusSubject={focusSubject} onTimerEnd={onTimerEnd} clearSubject={clearSubject} />
        ) : (
          <>
        <Focus dispatch={dispatch} />
        <FocusHistory onClearFocusHistory={onClearFocusHistory} focusHistory={focusList} />
          </>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.bg,
    padding: paddingSize.large
  },
})