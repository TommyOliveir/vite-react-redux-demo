import React, { useState } from 'react'
import { login, logout } from "../features/user"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  console.log(formData.username)
  console.log(formData.password)
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  function handleInputChange(event) {
    console.log(event)
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div>
      <label>
        Username
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange} />
         
      </label>
      <label>
        password
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange} />
      </label>
      <button
        onClick={() => {
          dispatch(login({ username: formData.username, password: formData.password }));

        }}
      >
        Login
      </button>

      {user.isLogin === true && <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>}


    </div>
  )
}

export default Login
