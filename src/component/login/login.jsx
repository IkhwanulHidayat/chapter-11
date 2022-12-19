import React, { useState } from 'react'
import styles from './login.module.css'
import { Divider } from '@mui/material'
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import axios from '../../../utility/axios'
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import Router from 'next/router';



function Login() {
  const [contact, setContact] = useState({
    Name: '',
    password: '',
  })

  const [signIn, toggle] = useState(true)

  const [password, setView] = useState(true)

  function handleChange(event) {
    const { name, value } = event.target
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const handleLogin = () => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALdKmRLqIDuIBwb5gzkp1c6LFcgBXM2oM", {
      method: 'POST',
      body: JSON.stringify({
        email: contact.Name,
        password: contact.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then((data) => {
          // console.log(data)
          let errMsg = 'Authentication Failed'
          
          throw new Error(errMsg)
        })
      }
    }).then((data) => {
      localStorage.setItem('token',data.idToken)
      Router.push('/homepage')
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  function showHide() {
    setView((current) => !current)
  }

  console.log(signIn)
  return (
    
    <div className={styles.container}>
      <div className={styles.bglogin}>
        <input
          className={styles.input}
          onChange={handleChange}
          name='Name'
          value={contact.Name}
          placeholder='Email'
        />
        <div className={styles.bglogin}>
          <input
            className={styles.input}
            name='password'
            onChange={handleChange}
            value={contact.password}
            placeholder='Password'
            type={password ? 'password' : 'text'}
          />
          <i
            title='Show and Hide Password'
            className={styles.seePassword}
            onClick={showHide}>
            {/* <RemoveRedEyeOutlinedIcon sx={{ fontSize: "2em" }}/> */}
          </i>
        </div>
        <button className={styles.btnLogin} onClick={handleLogin}>
          Sign in
        </button>
        <p className={styles.text}>Need an Account?</p>

        <Divider Color='gold' />
        <Link href="/register" className={styles.btnRegist} >Register</Link>
      </div>
    </div>
  )
}
export default Login
