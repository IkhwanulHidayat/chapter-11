import React, { useState,useEffect } from "react";
import style from '../../styles/register.module.css';
import Router from "next/router";
// import { Divider } from '@mui/material'
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import GoogleIcon from '@mui/icons-material/Google';
// import axios from "../utility/axios";
import { useDispatch } from 'react-redux';
import { doRegister } from "../../src/store/actions/authActions";
import Link from "next/link";

function Register() {
  const [contact, setContact] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
    const dispatch=useDispatch()
    
  const [password, setView] = useState(true)

  const handleChange = (name) => (e) => {
    setContact({ ...contact, [name]: e.target.value });
  };

  const fetchRegister = async () => {
    const data = {
      name: contact.name,
      username: contact.username,
      email:contact.email,
      password: contact.password,
    }
    await doRegister(data)
  }

  useEffect(() => {
    document.body.classList.add(style.regis);

    return function cleanup() {
      document.body.classList.remove(style.regis);
    };
  }, []);

  return (
    <div className={style.container}>
      <div>
      <h1>Hello {contact.Name}</h1>
      <input
          className={style.input}
          onChange={handleChange('name')}
          name="name"
          placeholder="Name"
        />
        <input
          className={style.input}
          onChange={handleChange('username')}
          name="username"
          placeholder="Username"
        />
        <input
          className={style.input}
          onChange={handleChange('email')}
          name="email"
          placeholder="Email"
        />
        <div className="password">
        <input
          className={style.input}
          name="password"
          onChange={handleChange('password')}
          placeholder="Password"
          type= 'password'
        /> 
        </div>
        <button className={style.button} onClick={fetchRegister}>Sign me up!</button>
      </div>
      
      <h6 className={style.h6}><Link href="/auth/login">Login</Link> if you have an account!!!</h6>
      

      {/* <Divider color='gold' /> */}
      {/* <GoogleIcon sx={{ fontSize: 50 }}/ > */}
    </div>
  );
}

export default Register;