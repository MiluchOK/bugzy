import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {green, pink} from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import BugzyField from "../components/BugzyField";


const useStyles = makeStyles(theme => ({
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        maxWidth: 300
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    wrapper: {
        marginTop: '20px',
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    avatar: {
        color: '#fff',
        backgroundColor: pink[500],
        marginBottom: theme.spacing(3)
    },
    spinner: {
        marginBottom: theme.spacing(3)
    }
}));

function LoginForm(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        username: {value: '', errors: []},
        password: {value: '', errors: []}
    });

    const [loading, setLoading] = React.useState(false);
    const [globalErrors, setGlobalErrors] = React.useState([]);

    const handleChange = name => event => {
        let err = [];
        if ( name === 'username' ) {
            if (! /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value) ) {
                err = ['Not a valid email']
            }
        }
        setValues({ ...values, [name]: { value: event.target.value, errors: err } });
        setGlobalErrors([])
    };

    const renderedErrors = globalErrors.map((error) =>
        (<Typography className={"error-message"} color={'error'} variant={'caption'}> {error} </Typography>)
    );

    let topCircle =  <Avatar className={classes.avatar}>
        <AccountCircle />
    </Avatar>;

    return (
        <>
            { loading ? <CircularProgress className={classes.spinner} /> : topCircle}
            { loading ? "" : renderedErrors}
            <form className={classes.formWrapper}
                  onSubmit={(e) => {
                      if ( !props.brokenLoadingLock ) {
                          setLoading(true)
                      }
                      props.handleSubmit(e, values.username.value, values.password.value)
                      .then(() => {
                          console.log("Successful resolution");
                          setLoading(false)
                      })
                      .catch((error) => {
                          console.log("Unsuccessful resolution");
                          setLoading(false);
                          setGlobalErrors([error.message])
                      })
                  }}
            >
                <BugzyField
                    id="username-field"
                    label="Username"
                    fullWidth={true}
                    error={globalErrors.length > 0}
                    errorMessages={props.brokenEmailVerification ? [] : values.username.errors}
                    disabled={loading}
                    className={classes.textField}
                    value={values.username.value}
                    onChange={handleChange('username')}
                    margin="normal"
                />

                <BugzyField
                    id="password-field"
                    label="Password"
                    type={props.brokenPasswordField ? 'text' : 'password'}
                    fullWidth={true}
                    error={globalErrors.length > 0}
                    errorMessages={values.password.errors}
                    disabled={loading}
                    className={classes.textField}
                    value={values.password.value}
                    onChange={handleChange('password')}
                    margin="normal"
                />

                <div className={classes.wrapper}>
                    <Button
                        id={'login-button'}
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        className={classes.button}
                        type="submit"
                    >
                        Login
                    </Button>
                </div>
            </form>
        </>
    )
}

export default LoginForm

