/** Login react componenet contains login details **/

import '../styles/Login.css';
import React from  'react';

export default class  Login extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state={
         email:'',
         password:''
      }
   }

   render()
   {
      return(
         <div className="login-page-div">
        <div className="login-page-forms">
          
          <h5>Log into your account</h5>
          <input
            type="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleEmail}
          />
           <input
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handlePassword}
          />
          <button onClick={this.submitLoginRequest}>Continue</button>
        </div>
        <div className="login-page-content">
          <span>
            <a href="https://www.w3schools.com"> can't log in ?</a>
          </span>
          <span>
            <a href="https://www.w3schools.com"> sign up for an account</a>
          </span>
         </div>
      </div>
      )
   }

}