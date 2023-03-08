import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { username: "", password: "", }
const defaultpassword = "admin"

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            if (state.value.password === defaultpassword) {
                alert("password is correct")
            }
        },

        logout: (state) => {
            state.value = initialStateValue;
        }

    }
});
//actions to access outside
export const { login, logout } = userSlice.actions;

//reducer
export default userSlice.reducer;