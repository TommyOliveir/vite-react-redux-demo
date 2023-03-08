import React from 'react'
import {login, logout} from "../features/user"

function Login() {

  const [username, setUsername] = ('')

  function handleInputChange() {
    setUsername(username)
  }

  return (
    <div>
       <label>
        Username
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleInputChange} />
      </label>
       <label>
        password
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleInputChange} />
      </label>
      <button
        onClick={() => {
          dispatch(login({ name: username, password: password }));
        }}
      >
        Login
      </button>
      {username}
    </div>
  )
}

export default Login
