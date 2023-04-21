import { createSlice } from "@reduxjs/toolkit"
import { OFFSET_LIVE_CHAT } from "./constants";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {

            state.messages.splice(OFFSET_LIVE_CHAT,1);
            // removes one message after 10 messages
            state.messages.unshift(action.payload);
            // unshift will push new element to the front and not at the last 
        },
    },
})

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

