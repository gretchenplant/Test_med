import React, { useContext, useState }  from 'react';
import './Navbar.css';
const Navbar = (props) => {
    return (

    <div className="nav_logo">
  <a hfrem="/"> </a>
  <span className="nav_logo">StayHealthy</span>
  <svg xmlns="http://www.w3.org/2000/svg" height={26} width={26} viewBox="0 0 448 512">
    <g>
      <path
        fill="#127369" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z">
        {" "}
      </path>
    </g>
  </svg>
  <span>.</span>
  <div>
    <div className="nav__icon" onclick="{handleClick}">
      <svg xmlns="http://www.w3.org/2000/svg" height={26} width={26} viewBox="0 0 448 512">
        <g>
          <path
            fill="#127369"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z">
          </path>
        </g>
      </svg>
    </div>
  </div>
  <div>
    <ul className="nav__links active">
      <li className="link">
        <a href="../Landing_Page/LandingPage.html">Home</a>
      </li>
      <li className="link">
        <a href="#">Appointments</a>
      </li>
      <li className="link">
        <a href="../Sign_Up//Sign_Up.html">
          <button className="navBtn">Sign Up</button>
        </a>
      </li>
      <li className="link">
        <a href="../Login/Login.html">
          <button className="navBtn">Login</button>
        </a>
      </li>
    </ul>
  </div>
</div>

    );
};
export default Navbar;