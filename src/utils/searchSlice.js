import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name: "search",
    // we use object data structure to store and not the array bcoz search complexity would be more 
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
            // state = { ...state,...action.payload }
            // console.log(state);
        },
    },  
});

export const { cacheResults } = searchSlice.actions

export default searchSlice.reducer;
