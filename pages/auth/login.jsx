import React, { useState,useEffect  } from 'react'
import styles from '../../styles/login.module.css'
import { Divider } from '@mui/material'
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import axios from '../../../utility/axios'
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import Router from 'next/router';
import { doLogin } from '../../src/store/actions/authActions';
import { useDispatch } from 'react-redux';
import { Password } from '@mui/icons-material';
import Button from '@mui/material/Button';



function Login() {
  const [contact, setContact] = useState({
    username_email: '',
    password: '',
  });
  const dispatch=useDispatch()

  const handleChange = (name) => (e) => {
    setContact({ ...contact, [name]: e.target.value });
  };

  const fetchLogin = async () => {
    const data = {
      username_email: contact.username,
      password: contact.password,
    };
    await doLogin(data)
  };

  const [password, setView] = useState(true)


  function showHide() {
    setView((current) => !current)
  };

  return (
    <div className={styles.container}>
      <div className={styles.bglogin}>
        <input
          className={styles.input}
          onChange={handleChange('username_email')}
          name='Name'
          placeholder='Email/username'
        />
        <div className={styles.bglogin}>
          <input
            className={styles.input}
            name='password'
            onChange={handleChange('password')}
            placeholder='Password'
            type= 'password'
          >
          </input>
        </div>

        <Button onClick={fetchLogin}>Login</Button>

        <p className={styles.text}>Need an Account?</p>

        <Divider color='gold' />
        <Link href="/auth/register" className={styles.btnRegist} >Register</Link>
      </div>
    </div>
  )
}
export default Login;
