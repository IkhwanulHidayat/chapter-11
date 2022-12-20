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
import Button from '@mui/material/Button';
import { Container } from '@mui/system';


function Login() {
  const [contact, setContact] = useState({
    username_email: '',
    password: '',
  });

  const [password, setView] = useState(true)
  const dispatch=useDispatch()

  const handleChange = (name) => (e) => {
    setContact({ ...contact, [name]: e.target.value });
  };

  const fetchLogin = async () => {
    try {
      const data = {
      username_email: contact.username_email,
      password: contact.password,
    } ; 
    await doLogin(data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    document.body.classList.add(styles.regis);

    return function cleanup() {
      document.body.classList.remove(styles.regis);
    };
  }, []);

  function showHide() {
    setView((current) => !current)
  };

  return (
    <Container>
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
          <Button className={styles.btnLogin} variant="contained" onClick={fetchLogin}>Login</Button>
        </div>

        <p className={styles.text}>Need an Account?</p>

        <Divider color='gold' />
        <Link href="/auth/register" className={styles.btnRegist} >Register</Link>
      </div>
    </div>
    </Container>
  )
}
export default Login;
