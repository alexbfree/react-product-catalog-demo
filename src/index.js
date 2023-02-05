import React from 'react';
import ReactDOM from 'react-dom';
import ProductCatalog from './components/ProductCatalog'
import ProductData from '../data/products';
import RalewayTTF from './fonts/Raleway-Light.ttf';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Raleway Light'), local('Raleway-Light'), url(${RalewayTTF}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductCatalog products={ProductData} />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

