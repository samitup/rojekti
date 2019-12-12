import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import NavbarKirjauduttua from "../components/NavBarKirjauduttua";
import Scream from "../components/Scream";
import AppIcon from "../images/puskalogo.jpeg";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
 
const styles = theme => ({
  ...theme.spread
})
 
class puskaradio extends Component {
  constructor(){
    super()
    this.state = {
        body: '',
        credentials: '',
        loading: false,
        errors: {},
        screams: null
    }
}
  componentDidMount() {
    axios
      .get('/screams')
      .then(res => {
        this.setState({
          screams: res.data
        });
      })
      .catch(err => console.log(err));
 
    this.checkUserhandle()
  }
 
  checkUserhandle = () => {
    const token = localStorage.FBIdToken
    axios
      .get('/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
      .then(res => {
        this.setState({
          credentials: res.data.credentials.handle
        })
      })
      .catch(err => console.log(err))
  }
 
  handleSubmit = (event) => {
    const token = localStorage.FBIdToken
    event.preventDefault()
    this.setState({
        loading: true
    })
    const newScream = {
        body: this.state.body
    }
    axios
    .post('/scream', newScream, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    .then((res) => {
        this.setState({
            loading: false
        })
        this.props.history.push('/')
        this.componentDidMount()
    })
    .catch((err) => {
        this.setState({
            errors: err.response.data,
            loading: false
        })
    })
    this.setState({
      body:''
    })
  }
 
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
  }
 
  render() {
    const { classes } = this.props
    const { errors, loading } = this.state
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <p>Ladataan puskahuutoja...</p>
    )
    const token = localStorage.FBIdToken
    const showUsername = this.state.credentials
    let userMarkup  
    if (token) {
      userMarkup =
        <div>
          <p>Tervetuloa {showUsername}!</p>
          <p>Täällä voit huutaa puskasta.</p>
        </div>
    } else {
      userMarkup = <Redirect to ='/sisaankirjautuminen'/>
    }
 
    return (
      <div>
        <NavbarKirjauduttua />
        <Grid container>
          <Grid item sm/>
          <Grid item sm>
          <div>
              <img src={AppIcon} alt="Puskaradio" className={classes.image} />
              <Card className={classes.cardUser}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" color="primary">
                    {userMarkup}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
                id="body"
                name="body"
                type="text"
                label="Uusi puskahuuto..."
                variant="outlined"
                className={classes.puskahuuto}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.body}
                onChange={this.handleChange}
                fullWidth/>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.huutobutton}
                disabled={loading}
                >
                Huuda
            </Button>
            </form>
            {loading && (
              <LinearProgress color="secondary"/>
            )}
            {recentScreamsMarkup}
          </Grid>
          <Grid item sm>
          </Grid>
        </Grid>
      </div>
    );
  }
}
 
puskaradio.propTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(puskaradio);