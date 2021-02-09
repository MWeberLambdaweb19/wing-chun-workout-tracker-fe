import { useState } from "react";
import React from "react";
import { Button } from "@material-ui/core";

// function handleSubmit() {
//   console.log();
// }

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  // const [verifyPassword, setVerifyPassword] = useState("");

  const state = [email, username, firstName, lastName, password];

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ state });
        }}
      >
        <label for="email">Email</label>
        <input
          placeholder="email"
          name="email"
          type="text"
          label="Email"
          value={email}
          onChange={() => {
            setEmail();
          }}
        />
        <label for="username">Username</label>
        <input
          placeholder="username"
          name="username"
          type="text"
          label="Username"
          value={username}
          onChange={() => {
            setUsername();
          }}
        />
        <label for="firstName">First Name</label>
        <input
          placeholder="first name"
          name="firstName"
          type="text"
          label="First Name"
          value={firstName}
          onChange={() => {
            setFirstName();
          }}
        />
        <label for="lastName">Last Name</label>
        <input
          placeholder="last name"
          name="lastName"
          type="text"
          label="Last Name"
          value={lastName}
          onChange={() => {
            setLastName();
          }}
        />
        <label for="password">Password</label>
        <input
          placeholder="password"
          name="password"
          type="text"
          label="password"
          value={password}
          onChange={() => {
            setPassword();
          }}
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Register;
