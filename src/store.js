import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/RootReducer";

export const myStore=configureStore({reducer:rootReducer});