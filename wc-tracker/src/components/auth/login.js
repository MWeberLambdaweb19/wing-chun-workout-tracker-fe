import { useState } from "react";
import { Button } from "@material-ui/core";

function Login() {
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("You have logged in!");
        }}
      >
        <label htmlFor="emailUsername">Your Email or Username</label>
        <input
          name="emailUsername"
          placeholder="Your email or username"
          onChange={(e) => setEmailUser(e.target.value)}
        />
        <label htmlFor="password">Your Password</label>
        <input
          name="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Login;
