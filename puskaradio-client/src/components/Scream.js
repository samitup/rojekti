import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'

const styles = (theme) => ({
    ...theme.spread
})

class Scream extends Component {
    render() {
        const { classes, scream : { body, createdAt, userHandle } } = this.props
        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" color="primary">
                        {userHandle}
                        </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format('DD.MM.YYYY @ HH:mm')}
                    </Typography>
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Scream);
