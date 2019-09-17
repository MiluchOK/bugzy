import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        marginTop: '5%',
        marginBottom: '5%',
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(5)
    },
}));

export default function CenteredPaper(props) {

    const classes = useStyles();

    return(
        <Paper className={ classes.paper } id={ props.id || 'paper' } elevation={ props.elevation || 3 }>
            {props.children}
        </Paper>
    )
}
