import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  font: ['Roboto'],
  borderColor: 'rgb(204, 204, 204)',
  palette: {
    primary: {
      main: '#00ffffcc',
    },
    secondary: {
      main: '#FFFFF9',
    },
    textSecondary: {
      main: '#ABABAB',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
      '&:first-letter': {
        textTransform: 'capitalize',
      },
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
    },
  },
})
theme = responsiveFontSizes(theme)
export default theme
