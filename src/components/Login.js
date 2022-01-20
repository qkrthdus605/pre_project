import React, { useState } from "react";

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { value_e, email } = e.target;
    const { value_pw, password } = e.target;
    setInput({
      ...input,
      [email]: value_e,
      [password]: value_pw,
    })
  }

  const onSubmit = (e) => {
    
  };

  return(
    <form>
      <p>Email</p>
      <input name="email" value="" />
      <p>Password</p>
      <input name="password" type="password" value="" />
      <br/>
      <br/>
      <button type="submit" onClick={onSubmit}>Submit</button>
      <p>Email or password cannot be empty</p>
    </form>
  );
};

export default Login;