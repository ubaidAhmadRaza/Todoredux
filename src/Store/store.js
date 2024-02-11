import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./FeautreSlice"
export const store=configureStore({
    
    reducer: todoReducer})