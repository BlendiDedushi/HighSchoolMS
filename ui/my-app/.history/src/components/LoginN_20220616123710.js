import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function LoginN() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "a@student.com",
      password: "Pass12345",
    },
    {
      username: "b@student.com",
      password: "Pass12345",
    },
    {
      username: "c@student.com",
      password: "Pass12345",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import "../styles/login.css";
  
  function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "a@prof.com",
        password: "Pass12345",
      },
      {
        username: "b@prof.com",
        password: "Pass12345",
      },
      {
        username: "c@prof.com",
        password: "Pass12345",
      },
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password",
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
      <img src="https://e7.pngegg.com/pngimages/265/858/png-clipart-computer-icons-teacher-professor-education-lecturer-teacher-angle-logo.png" alt="Girl in a jacket" width="160" height="100"></img>
  
        <form onSubmit={handleSubmit}>
          <div className="group">
          <input type="text"  required/>
            <label>Username </label>
            <span class="highlight"></span>
            <span class="bar"></span>
            {renderErrorMessage("uname")}
          </div>
          <div className="group">
          <input type="password" required />
          <span class="highlight"></span>
        <span class="bar"></span>
            <label>Password </label>
            
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
          
            <input type="submit" />
            <Link to="/signup" className="signu">Click to SignUp</Link>
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="applog">
        <div className="login-form">
          <div className="title">LogIn Profesor</div>
          {isSubmitted ? (
            <div>
            <p>You are successfully logged in</p>
              <Link to="/Lenda">Click to proceed</Link>
            </div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    );
  }
  
  export default Login;
  
    <div className="form">
    <img src="https://e7.pngegg.com/pngimages/41/862/png-clipart-student-higher-education-study-skills-learning-products-people-logo.png" alt="Girl in a jacket" width="150" height="90"></img>

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
        <div className="button-container">
        
          <input type="submit" className="ls" />
          <Link to="/signup" className="signu">Click to SignUp</Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="applog">
      <div className="login-form">
        <div className="title">LogIn Student</div>
        {isSubmitted ? (
          <div>
            <p>You are successfully logged in</p>
            <Link to="/Lenda">Click to proceed</Link>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default LoginN;