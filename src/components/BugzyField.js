import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import Error from '@material-ui/icons/Error';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    error: {
        color: theme.palette.error.main
    }
}));


export default function BugzyField(props) {

    const classes = useStyles();

    const adornment = <InputAdornment position="start" className={'field-error'}>
            <Tooltip className={classes.error} title={props.errorMessages} placement="right-end">
                <Error />
            </Tooltip>
        </InputAdornment>;


    return(
        <FormControl
            id={props.id}
            fullWidth={props.fullWidth}
            error={props.errorMessages.length > 0  || props.error}
            disabled={props.disabled}
            className={props.className}
        >
            <InputLabel htmlFor="component-error">{props.label}</InputLabel>
            <Input
                id="component-error"
                value={props.value}
                onChange={props.onChange}
                type={props.type || 'text'}
                aria-describedby="component-error-text"
                endAdornment={props.errorMessages.length > 0 ? adornment : <></>}
            />
        </FormControl>
    )
}