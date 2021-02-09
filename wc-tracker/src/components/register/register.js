import { useState } from "react";
import React from "react";
import { Button } from "@material-ui/core";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  return (
    <div>
      <form>
        <input
          name="email"
          type="email"
          label="Email"
          onChange={(event) => {
            event.preventDefault();
            setEmail;
          }}
        />
        <Button color="primary">SCatmit</Button>
      </form>
    </div>
  );
}

export default Register;
