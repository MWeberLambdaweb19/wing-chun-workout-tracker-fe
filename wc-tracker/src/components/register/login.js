import React from 'react';

function Login() {
    return(
        <div>
            <p>*Must be filled</p>
            <p>**Your email is not shared, sold, or otherwise distributed</p>
            <form>
                <label for="email">Email* **</label>
                <input></input>
                <label for="first name">First Name</label>
                <input></input>
                <label for="last name">Last Name (Or Initial)</label>
                <input></input>
                <label for="username">Username</label>
                <input></input>
                <label for="password">Password</label>
                <input></input>
                <label for="verify password">Verify Password</label>
                <button></button>
            </form>
        </div>
    )
}

export default Login;