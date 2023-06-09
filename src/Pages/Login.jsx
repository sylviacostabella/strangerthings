import React from "react";
import { useState } from "react";
import "./login.css"


const LoginUser = ({ changeUserState }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const Login = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    user: {
                        username: userName,
                        password: password

                    }
                })
            });
            const result = await response.json();
            changeUserState(result);
            localStorage.setItem('auth_token', result.data.token);
            window.location.href = '/';
            return result
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="login">
            <form onSubmit={Login}>
                <div>
                    <input value={userName} onChange={(event) => (setUserName(event.target.value))} placeholder="Username"></input>
                </div>
                <div>
                    <input value={password} onChange={(event) => (setPassword(event.target.value))} placeholder='Password'></input>
                </div>
                <button >Login</button>
            </form>
        </div>
    )

}



export default LoginUser;