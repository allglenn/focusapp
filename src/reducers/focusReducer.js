import React from 'react'

export const focusInittialState = {
    focusSubject: "",
    focusList: [],
}


export function focusReducer(state = inittialState, action) {
    switch (action.type) {
        case "ADD_FOCUS_SUBJECT":
            return {
                ...state,
                focusSubject: action.payload,
                focusList: [...state.focusList, {
                    focusSubject: action.payload,
                    startTime: new Date(),
                    status: "active",
                }]
            }
        case "CLEAR_ALL_FOCUS_SUBJECTS":
            return {
                ...state,
                focusSubject: null,
                focusList: []
            }

        case "RESET_FOCUS_SUBJECT":
            return {
                ...state,
                focusSubject: action.payload,
                
            }
        case "CLEAR_FOCUS_SUBJECT":
            return {
                ...state,
                focusSubject: action.payload,
            }


        case "SET_FOCUS_LIST":
            return {
                ...state,
                focusList: action.payload,
            }
        default:
            return state
    }
}

