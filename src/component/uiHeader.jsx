import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/actions/authActions'
import { color } from '@mui/system'
import Link from 'next/link'

export default function Header() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.authReducer.profile)
  let ignore = false
  React.useEffect(() => {
    if (!ignore) fetchData()
    return () => {
      ignore = true
    }
  }, [])
  const fetchData = async () => {
    await dispatch(getProfile())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/homepage' style={{textDecoration:'none', color:'black'}}>Wakanda</Link>
          </Typography>
          <Button color='inherit'>{profile?.username_email}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
