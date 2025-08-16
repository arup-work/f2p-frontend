import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isAuthenticated: false,
    user: { email: '', name: '' },
    rememberMe: false
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login(state, action) {
            const { token, user } = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            state.isAuthenticated = true;
            state.auth = { token, user }
        }
    }
})

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;