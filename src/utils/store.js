import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchKeywordSlice from "./searchKeywordSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        searcKeyword: searchKeywordSlice,
    }
})
export default store;
