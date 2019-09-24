import React from "react";
import * as Promise from "bluebird";
import LoginForm from "../components/LoginForm";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string'
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

function LoginFormScreen(props) {

    const delayTime = 1000;
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [signInSuccess, setsignInSuccess] = React.useState(undefined);
    const queryParams = queryString.parse(props.location.search);

    const brokenPasswordField = queryParams.bug === '1';
    const brokenEmailVerification = queryParams.bug === '2';
    const brokenLoadingLock = queryParams.bug === '3';
    const brokenAddUser = queryParams.bug === '4';
    const cantLogin = queryParams.bug === '5';
    const loginEveryone = queryParams.bug === '6';

    // Turn all the bugs on when it is shitshow time
    // const shitshowMode = queryParams.shitshow === 'true';

    const handleSubmit = (e, username, password) => {
        e.preventDefault();
        return Promise.delay(delayTime)
        .then(() => {
            return new Promise(function(resolve, reject) {
                if (loginEveryone || (users.some(u => (u.username === username && u.password === password)) && !cantLogin)) {
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
            brokenPasswordField={brokenPasswordField}
            brokenEmailVerification={brokenEmailVerification}
            brokenLoadingLock={brokenLoadingLock}

        />
    </CenteredPaper>;

    let userCreationPaper = <CenteredPaper>
        <Typography>Existing Users</Typography>
        <Button
            id={'add-user'}
            onClick={brokenAddUser ? () => {} : appendRandomUser}
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

