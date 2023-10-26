import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./Slices/CatSlice";

const store = configureStore ({
    reducer : {
        cats : catSlice
    }
})
export default store