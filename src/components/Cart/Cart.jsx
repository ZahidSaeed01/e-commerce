import React from 'react';
import {Container, Button,Typography, Grid} from '@material-ui/core';
import useStyles from './style';

const Cart = ({cart}) => {
    const classes=useStyles();

    const EmptyCart=()=>(
        <Typography variant="subtitle1" >You have no item in the Shoping Cart, start adding some</Typography>
    );

    const FilledCart=()=>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item key={item.id} xm={12} sm={4} >
                        <div> {item.name}</div>
                    </Grid>
                    
                ))};
            </Grid>
            <div className={classes.cardDetails} >  
                    <Typography variant="h4"> Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    );
    if(!cart.line_items) return  "Lodding....";
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography variant="h3" className={classes.title}>Your Shoping Card</Typography>
            {!cart.line_items.length? <EmptyCart />:<FilledCart/>}
        </Container>
    )
}

export default Cart
