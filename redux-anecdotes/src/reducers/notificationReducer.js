import { createSlice } from "@reduxjs/toolkit";

const initialState = {text: ''}
let timeoutId


const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotificationText(state, action) {
            const notificationText = action.payload
            state.text = notificationText
        },
        removeNotification(state, action) {
            state.text = ''
        }

    }
})

export const { removeNotification, setNotificationText } = notificationSlice.actions

export const setNotification = (content, timeoutInSeconds) => {
    return async dispatch => {
      dispatch(setNotificationText(content))
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        dispatch(removeNotification())
      }, timeoutInSeconds * 1000)
    }
  }


export default notificationSlice.reducer