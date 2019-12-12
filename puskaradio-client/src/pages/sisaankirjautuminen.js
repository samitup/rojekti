import React, { Component } from 'react'
import NavbarKirjautumatta from '../components/NavbarKirjautumatta'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppIcon from '../images/puskalogo.jpeg'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = (theme) => ({
    ...theme.spread
})

class sisaankirjautuminen extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
        this.logout()
    }

    logout = () => {
        localStorage.clear("token")
      }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        axios
        .post('/login', userData)
        .then((res) => {
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
            this.setState({
                loading: false
            })
            this.props.history.push('/')
        })
        .catch((err) => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
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
        return (
            <div>
                <NavbarKirjautumatta />
                <Grid container className={classes.form}>
                    <Grid item sm/>
                    <Grid item sm>
                        <img src={AppIcon} alt="Puskaradio" className={classes.image2}/>
                        <Typography variant="h4" className={classes.pageTitle}>
                            Kirjaudu sisään
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField 
                            id="email" 
                            name="email" 
                            type="email" 
                            label="Sähköposti" 
                            variant="outlined" 
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            fullWidth/>
                            <TextField 
                            id="password" 
                            name="password" 
                            type="password" 
                            label="Salasana" 
                            variant="outlined" 
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            fullWidth/>
                            {errors.general && (
                                <Typography variant="body2" className={classes.customError}>
                                    {errors.general}
                                </Typography>
                            )}
                            {loading && (
                                    <LinearProgress color="secondary"/>
                                )}
                            <Button 
                            type="submit" 
                            variant="contained" 
                            color="secondary" 
                            className={classes.button}
                            disabled={loading}
                            >
                                Kirjaudu sisään
                            </Button>
                            <br></br>
                            <small>Ei käyttäjätunnusta? <Link to="/rekisteroityminen">Rekisteröidy</Link>.</small>
                        </form>
                    </Grid>
                    <Grid item sm/>
                </Grid>
            </div>
        )
    }
}

sisaankirjautuminen.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(sisaankirjautuminen)
