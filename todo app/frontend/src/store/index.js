import {createSlice, configureStore} from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{user:"",isLoggedIn:false},
    reducers:{login: (state, action) => 
        {
        state.isLoggedIn = true;
        },
}});

export const authActions=authSlice.actions;
export const store=configureStore({
    reducer: authSlice.reducer,
});
export default authSlice;