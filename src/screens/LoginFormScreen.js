import React from "react";
import * as Promise from "bluebird";
import LoginForm from "../components/LoginForm";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import CenteredPaper from "../components/CenteredPaper";
import NotificationBox from "../components/NotificationBox";
import { generateUser } from "../util/Util";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    button: {
        margin: '20px'
    },
    checkIcon: {
        backgroundColor: green[500],
        marginBottom: theme.spacing(3)
    },
}));

function LoginFormScreen() {

    const delayTime = 1000;
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [signInSuccess, setsignInSuccess] = React.useState(undefined);

    const handleSubmit = (e, username, password) => {
        e.preventDefault();
        return Promise.delay(delayTime)
        .then(() => {
            return new Promise(function(resolve, reject) {
                if (users.some(u => (u.username === username && u.password === password))) {
                    console.log("Good login.");
                    setsignInSuccess(true);
                    resolve()
                }
                else {
                    console.log("Bad login.");
                    setsignInSuccess(false);
                    reject(new Error('Incorrect username or password'))
                }
            })
        });
    };

    const appendRandomUser = () => {
        const user = generateUser();
        setUsers(users.concat([user]))
    };

    // Login hasn't occurred yet
    let mainPaper = <CenteredPaper>
        <LoginForm
            handleSubmit={handleSubmit}
        />
    </CenteredPaper>;

    let userCreationPaper = <CenteredPaper>
        <Typography>Existing Users</Typography>
        <Button
            onClick={appendRandomUser}
            variant="contained"
            color="primary"
            className={classes.button}
        >
            Add User
        </Button>

        <CenteredPaper elevation={1} id={'jsonText'}>
            <pre>{JSON.stringify(users, null, 2) }</pre>
        </CenteredPaper>
    </CenteredPaper>;

    return (
        <div className={classes.root} id={'pageRoot'}>

            { signInSuccess ? <NotificationBox/> : mainPaper }
            { userCreationPaper }
        </div>
    )
}

export default LoginFormScreen

