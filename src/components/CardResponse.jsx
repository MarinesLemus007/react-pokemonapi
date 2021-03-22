import React,{ useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core/';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        minWidth: 205,
        margin: 'auto'
    },
    media: {
        height: 205,
        backgroundSize: 'contain',
        backgroundColor: '#f2f2f2'
    },
});


const CardResponse = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        console.log(response.data.results)
        setData(response.data.results)
    }, [])

    return (
        data.map((item, index) =>(
            <Grid key={index} item xs={12} sm={4} md={3} lg={3} xl={2}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                N.º {index + 1}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ))
    )
}

export default CardResponse;
