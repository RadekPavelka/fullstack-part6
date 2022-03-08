import { createSlice } from "@reduxjs/toolkit";

const initialState = {text: 'Hello user!'}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            const notificationText = action.payload
            state.text = notificationText
        },
        removeNotification(state, action) {
            state.text = ''
        }

    }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer