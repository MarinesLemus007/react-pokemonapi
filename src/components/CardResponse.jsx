import React,{ useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core/';
import axios from 'axios';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        minWidth: 205,
        margin: 'auto'
    },
    media: {
        height: 205,
        backgroundSize: 150,
        backgroundColor: '#f2f2f2'
    },
    textcapitalize:{
        textTransform: 'capitalize'
    }
});


const CardResponse = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const [page, setPage] = useState(20);

    const nextPage = () =>{
        setPage(page + 20)
    }

    useEffect(() => {
        const getResponse = async () =>{
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${page}`)
                // console.log(response.data.results)
                setData(response.data.results)
            }
            catch(error){
                console.log(error);
            }
        }
        getResponse();
    }, [page])

    return (
        <>
            {data.map((item, index) =>(
                <Grid key={index} item xs={12} sm={4} md={3} lg={3} xl={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`https://pokeres.bastionbot.org/images/pokemon/${ index + 1 }.png`}
                                title={item.name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    N.º {index + 1}
                                </Typography>

                                <Typography gutterBottom variant="h5" component="h2" className={classes.textcapitalize}>
                                    {item.name}
                                </Typography>
                    
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            <Button
                color="default"
                className={classes.button}
                endIcon={<KeyboardArrowRight />}
                onClick={() =>{nextPage()}}
            >
                SEE MORE
            </Button>
        </>
    )
}

export default CardResponse;
