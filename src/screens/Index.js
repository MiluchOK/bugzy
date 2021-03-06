import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />
}

function Index() {
    const classes = useStyles();
    const navigations = [
        {
            name: "LoginFormScreen",
            link: "forms",
            icon: <DraftsIcon/>
        },
        {
            name: "Buttons",
            link: "buttons",
            icon: <InboxIcon/>
        }
    ];

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {navigations.map(n => {
                    return (
                        <ListItemLink href={n.link}>
                            <ListItemIcon>
                                {n.icon}
                            </ListItemIcon>
                            <ListItemText primary={n.name} />
                        </ListItemLink>
                    )
                })}
            </List>
        </div>
    )
}

export default Index

