// Theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#FBAD33', // Your custom primary color
    },
    secondary: {
      main: '#233759', // Your custom secondary color
      dark: '#17253f', // Your custom primary color
    },
    white:{
      main:'FFFFFF',
      opacity9:'rgba(255, 255, 255, 0.9)',
      opacity7:'rgba(255, 255, 255, 0.7)',
      opacity5:'rgba(255, 255, 255, 0.5)',
    }
    // Other palette customizations
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
