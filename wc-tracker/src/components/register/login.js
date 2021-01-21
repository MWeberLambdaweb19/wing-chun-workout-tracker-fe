import React from 'react';
import {handleSubmit} from '../functions/handleSubmit.js'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email:"",
            first:"",
            last:"",
            username:"",
            password:"",
            verifypassword:""
        }
        

        this.handleChanges = (event) => {
            const target = event.target.name
            this.setState({...this.state, [target]: event.target.value})
            // DO NOT FORGET: [] AROUND A VARIABLE MAKE IT A DYNAMIC KEY
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    
        // handleSubmit(event) {
        //     console.log(this.state.username)
        //     alert('Thank you for registering! ' + this.state.username)
        //     event.preventDefault();
        // }

    render() {
        return(
            <div>
                <p>*Must be filled</p>
                <p>**Your email is not shared, sold, or otherwise distributed</p>
                <form onSubmit={(event) => handleSubmit(event, this.state.username)}>
                    <label for="email">Email* **</label>
                    <input name="email" type="email"></input>
                    <label for="first name">First Name</label>
                    <input name="first name" type="text"></input>
                    <label for="last name">Last Name (Or Initial)</label>
                    <input name="last name" type="text"></input>
                    <label for="username">Username*</label>
                    <input name="username" value={this.state.value} onChange={this.handleChanges} type="text"></input>
                    <label for="password">Password</label>
                    <input name="password" type="password"></input>
                    <label for="verify password">Verify Password</label>
                    <input name="verify password" type="password"></input>
                    <input type="submit" name="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Login;