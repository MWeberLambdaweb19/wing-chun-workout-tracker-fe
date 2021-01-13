import React from 'react';

function Login() {
    return(
        <div>
            <p>*Must be filled</p>
            <p>**Your email is not shared, sold, or otherwise distributed</p>
            <form>
                <label for="email">Email* **</label>
                <input name="email" type="email"></input>
                <label for="first name">First Name</label>
                <input name="first name" type="text"></input>
                <label for="last name">Last Name (Or Initial)</label>
                <input name="last name" type="text"></input>
                <label for="username">Username*</label>
                <input name="username" type="text"></input>
                <label for="password">Password</label>
                <input name="password" type="password"></input>
                <label for="verify password">Verify Password</label>
                <input name="verify password" type="password"></input>
                <input type="button" name="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Login;