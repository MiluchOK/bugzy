import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: '20px'
    },
}));

export default function LoginFormScreen(props) {

    const classes = useStyles();
    const buttonsNumber = 10
    let buttons = []
    for(let i=0; i<buttonsNumber; i++){
        buttons.push(<Button variant="contained" color="primary" className={classes.button}>Button {i+1}</Button>)
    }
    return <div class='buttons-container'>
        {buttons}
    </div>
}