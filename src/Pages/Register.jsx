import React from "react";
import { useState } from "react";
import "./Register.css"


const Register = ({ changeUserState }) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: userName,
            password: password
          }
        })
      });
      const result = await response.json();
      // You can log ▲▲▲ the result
      // here ▼▼▼ to view the json object before returning it
      console.log(result)
      changeUserState(result)
      window.location.href = '/login';
      return result
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="register">
      <form onSubmit={registerUser}>
        <div>
          <input value={userName} onChange={(event) => (setUserName(event.target.value))} placeholder="Username"></input>
        </div>
        <div>
          <input value={password} onChange={(event) => (setPassword(event.target.value))} placeholder='Password'></input>
        </div>
        <button >Register</button>
      </form>
    </div>
  )

}



export default Register;