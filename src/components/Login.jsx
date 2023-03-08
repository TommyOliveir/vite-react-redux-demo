import React, { useState } from 'react'
import { login, logout } from "../features/user"

function Login() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function handleInputChange(event) {
    console.log(event)
        const {name, value, type, checked} = event.target
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
        // onClick={() => {
        //   dispatch(login({ name: formData.username, password: formData.password }));
        // }}
      >
        Login
      </button>
   
    </div>
  )
}

export default Login
