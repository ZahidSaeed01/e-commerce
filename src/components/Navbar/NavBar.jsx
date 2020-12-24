import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,Typography,MenuItem,Menu} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyle from './style';
import logo from '../../assets/logo.jpg';
const NavBar = ({totalItems}) => {
    const classes=useStyle();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show card items..." color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default NavBar
