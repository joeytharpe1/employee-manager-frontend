import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
      primary: {
          main: '#000000', //black
          light: '' //green
      },
      secondary: {
          main: '#097969' //green
      },
      warning: {
          main: '#fff'
      }
  },
  typography: {
      fontFamily: 'Garamond'
  }
})


const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route path="/"><Home /></Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
