import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Reducers/Auth.Reducer';

const Store = configureStore({
    reducer: {
        auth: AuthReducer
    }
})

export default Store;