import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Link } from "react-router-dom";
function Sign() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    
    const userData = database.find((user) => user.username === uname.value);

    
    if (userData) {
      if (userData.password !== pass.value) {
      
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    <div id="tabs">
    <p id="lt" class="tabs" onclick="loginTabFun()">Log in</p>
    <p id="rt" class="tabs" onclick="regTabFun()">Register</p>

    <div id="clear"></div>
</div>

  const renderForm = (
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
        <Link to="/Forget" >Forget Password?</Link>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      
      </form>
    </div>
  );

  return (

    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  
  );
}

export default Sign;