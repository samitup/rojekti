import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import themeFile from './util/theme'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import jwtDecode from 'jwt-decode'
import AuthRoute from './util/AuthRoute'
import axios from "axios";

//Sivut
import puskaradio from './pages/puskaradio'
import sisaankirjautuminen from './pages/sisaankirjautuminen'
import rekisteroityminen from './pages/rekisteroityminen'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = 'https://europe-west1-socialape-80e0b.cloudfunctions.net/api'

let authenticated
const token = localStorage.FBIdToken
if(token) {
  const decodedToken = jwtDecode(token)
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/'
    authenticated = false
  } else {
    authenticated = true
  }
}

class App extends Component {
    render() {
        return (
          <MuiThemeProvider theme={theme}>
              <div>
               <Router>
                  <div>
                    <Switch>
                        <AuthRoute exact path="/" component={puskaradio} authenticated={authenticated}/>
                        <Route exact path="/sisaankirjautuminen" component={sisaankirjautuminen}/>
                        <Route exact path="/rekisteroityminen" component={rekisteroityminen}/>
                    </Switch>
                  </div>
                </Router> 
            </div>
          </MuiThemeProvider>
        )
    }
}

export default App;
