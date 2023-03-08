import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "tom", password: '123',  }


export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    }

  }
});
 //actions to access outside
export const {login, logout} = userSlice.actions;

//reducer
export default userSlice.reducer;