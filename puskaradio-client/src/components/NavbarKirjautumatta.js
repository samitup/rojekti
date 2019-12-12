import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//MUI importit
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class NavbarKirjautumatta extends Component {
  render() {
    return (
        <AppBar position="static">
            <Toolbar className="nav-container">
                <Button color="inherit" component={Link} to="/sisaankirjautuminen">Kirjaudu sisään</Button>
                <Button color="inherit" component={Link} to="/rekisteroityminen">Rekisteröidy</Button>
            </Toolbar>
        </AppBar>
    );
  }
}

export default NavbarKirjautumatta;
