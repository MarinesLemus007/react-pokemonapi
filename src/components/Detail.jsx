import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
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
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));

const Detail = () => {

    const classes = useStyles();

    const {id} = useParams()

    const [detailById, setDetailById] = useState([])
    
    useEffect(() => {

        const getResponseById = async () =>{
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                console.log(response.data)
                setDetailById(response.data)
            }
            catch(error){
                console.log(error)
            }         
        }
        getResponseById()

    }, [id])

    return ( 
        <>
        
                <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                                title={detailById.name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    N.º {detailById.id}
                                </Typography>

                                <Typography gutterBottom variant="h5" component="h2" className={classes.textcapitalize}>
                                    {detailById.name}
                                </Typography>
                    
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
          
        </>
     );
}
 
export default Detail;