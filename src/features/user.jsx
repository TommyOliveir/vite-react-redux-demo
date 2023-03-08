import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { username: "", password: "", isLogin: false }
const defaultUsername = "admin"
const defaultPassword = "admin"


export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            if (state.value.password === defaultPassword && state.value.username === defaultUsername) {
                // alert("credetial correct")
                    
                state.value = {
                ...state.value,
                isLogin: true
                }            
               console.log(state.value)
           
            } else {
                // alert("password incorrect")
                return state.value = initialStateValue
               
            }
          
        },
      
        logout: (state) => {
            state.value = initialStateValue;
        },

     

    }
});
//actions to access outside
export const { login, logout } = userSlice.actions;

//reducer
export default userSlice.reducer;