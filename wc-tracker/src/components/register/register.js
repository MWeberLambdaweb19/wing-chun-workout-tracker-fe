import React from 'react';
import SignedUp from './signedup';

class Register extends React.Component {
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
            this.setState({[target]: event.target.value})
            // DO NOT FORGET: [] AROUND A VARIABLE MAKE IT A DYNAMIC KEY
        }

        // You need this if you don't write the function in the constructor
        this.handleSubmit = this.handleSubmit.bind(this)
        this.passwordAuth = this.passwordAuth(this)
    }
    
        handleSubmit(event) {
            this.passwordAuth(event, this.state.password, this.state.verifypassword)
            alert('Thank you for registering! ' + this.state.username)
            event.preventDefault();
        }

        passwordAuth(event, pass, ver) {
            event.preventDefault();
            if (pass === ver) {
                return
            } else if (pass !== ver) {
                alert('Your passwords do not match!')
                return
            }
        }

    render() {
        return(
            <div>
                <p>*Must be filled</p>
                <p>**Your email is not shared, sold, or otherwise distributed</p>
                <form onSubmit={() => this.handleSubmit()}>
                    <label for="email">Email* **</label>
                    <input name="email" type="email" value={this.state.value} onChange={this.handleChanges}></input>
                    <label for="first">First Name</label>
                    <input name="first" type="text" value={this.state.value} onChange={this.handleChanges}></input>
                    <label for="last">Last Name (Or Initial)</label>
                    <input name="last" type="text" value={this.state.value} onChange={this.handleChanges}></input>
                    <label for="username">Username*</label>
                    <input name="username" value={this.state.value} onChange={this.handleChanges} type="text"></input>
                    <label for="password">Password</label>
                    <input name="password" type="password" value={this.state.value} onChange={this.handleChanges}></input>
                    <label for="verify password">Verify Password</label>
                    <input name="verify password" type="password" value={this.state.value} onChange={this.handleChanges}></input>
                    <input type="submit" name="submit" value="Submit"></input>
                </form>
            <SignedUp data={this.state} />
            </div>
        )
    }
}

export default Register;