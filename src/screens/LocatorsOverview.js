import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Brightness1Icon from '@material-ui/icons/Brightness1';

const useStyles = makeStyles(theme => ({
    elem: {
        margin: '20px'
    },
    root: {
        margin: '50px'
    },
    inputControlls: {
        display: 'flex',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        marginTop: '20%',
        marginRight: '30px',
        marginLeft: '30px',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
}));

export default function LoginFormScreen(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const StyledPointIcon = styled(Brightness1Icon)({
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        color: 'red'
    })

    const classes = useStyles();
    const buttonsNumber = 10

    let buttons = []
    for(let i=0; i<buttonsNumber; i++){
        buttons.push(<Button variant="contained" color="primary" className={classes.elem}>Button {i+1}</Button>)
    }
    return ( 
        <div className={classes.root}>
            <div className={classes.inputControlls}>
                <TextField className={classes.elem} variant="outlined" label="X" defaultValue={x} onChange={e => setX(e.target.value)} />
                <TextField className={classes.elem} variant="outlined" label="Y" defaultValue={y} onChange={e => setY(e.target.value)} />
            </div>
            <div className={classes.container}>
                {buttons}
                <StyledPointIcon />
            </div>
        </div>
    )
}