import React from 'react';
import Box from '@material-ui/core/Box';
import logo from "../img/img-pokemonlogo.png";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bannercontainer: {
        background: '#313131',
        height: 250,
        overflow: 'hidden',
        // marginBottom: '50px !important'
    },
});

const Banner = () => {

    const classes = useStyles();

    return (
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          className={classes.bannercontainer}  
        >
            <Box color="text.primary" clone>
                <img src={logo} alt="logo pokemon" style={{width: '40%'}}/>
            </Box>
        </Grid> 
     );
}
 
export default Banner;