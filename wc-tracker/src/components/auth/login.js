import { logins } from "../dummyData/dummyData.js";
import { useState } from "react";

function Login() {
  const [emailUser, setEmailUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (true) {
      if (emailUser == logins["email"] || emailUser == logins["user]"]) {
        return true;
      }
      if (password == logins["password"]) {
        return true;
      } else {
        return false;
      }
      console.log("You have logged in!");
    } else {
    }
  }
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

export default Login;
