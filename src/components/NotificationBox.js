import CenteredPaper from "./CenteredPaper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CheckIcon from '@material-ui/icons/Check';
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core";
import {green, red} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    checkIcon: {
        backgroundColor: green[500],
        marginBottom: theme.spacing(3)
    },
}));

export default function NotificationBox() {

    const classes = useStyles();

    return (
        <CenteredPaper>
            <Avatar className={classes.checkIcon}>
                <CheckIcon/>
            </Avatar>
            <Typography> Success </Typography>
        </CenteredPaper>
    )
}

