import React from 'react';

function SignedUp(props) {
    return ( 
    <div>
        <h1>{props.data.username}</h1>
        <p>Name: {props.data.first} {props.data.last}</p>
        <p>Email: {props.data.email}</p>
    </div>
    )
} 

export default SignedUp