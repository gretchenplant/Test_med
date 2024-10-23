import React, { useContext, useState }  from 'react';
import './Login.css';
const Login = (props) => {
    return (<div className="container" style={{ marginTop: "5%" }}>
  <div className="login-grid">
    <div className="login-text">
      <h1>Login</h1>
    </div>
    <div className="login-text1" style={{ textAlign: "center" }}>
      Are you a new member?{" "}
      <span>
        <a href="../Sign_Up/Sign_Up.html" style={{ color: "#127369" }}>
          Sign Up Here
        </a>
      </span>
    </div>
    <div className="login-form">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required=""
            className="form-control"
            placeholder="Enter your email"
            aria-describedby="helpId"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            required=""
            className="form-control"
            placeholder="Enter your password"
            aria-describedby="helpId"
          />
        </div>
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
          >
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-danger mb-2 waves-effect waves-light"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};
export default Login;