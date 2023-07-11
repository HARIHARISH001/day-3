import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      usergmail:"727722euai501@gmail.com",
      password: "pass1"
    },
    {
      username: "user2",
      usergmail:"22leai020@gmail.com",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    ugmail: "invalid ugmail",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, ugmail, pass } = document.forms[0];

    
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


  const renderForm = (
    
    
    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="ugmail" required />
          {renderErrorMessage("ugmail")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
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
        <div className="title">Registration</div>
        {isSubmitted ? <div>User is successfully registration </div> : renderForm}
      </div>
    </div>
  
  );
}

export default App;