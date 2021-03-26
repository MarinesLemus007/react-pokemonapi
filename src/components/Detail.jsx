import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, LinearProgress, Button } from '@material-ui/core/';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles/';
import Chip from '@material-ui/core/Chip';
import { amber } from '@material-ui/core/colors';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      width: "70%",
      marginTop: 11.2
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f9db80',
    },
    media: {
        height: 205,
        backgroundSize: 150,
        backgroundColor: '#f2f2f2'
    },
    textcapitalize: {
        textTransform: 'capitalize'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    buttongroup:{
        marginTop: '100px !important',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
}));

const theme = createMuiTheme({
    palette: {
      primary: amber
    },
  });

const Detail = () => {

    const classes = useStyles();

    const { id } = useParams()

    const [detailById, setDetailById] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getResponseById = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                console.log(response.data)
                setDetailById(response.data)
            }
            catch (error) {
                console.log(error)
            }finally{
                setLoading(true)
            }
        }
        getResponseById()

    }, [id])

    return (
        <>{loading === true ?

            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                // wrap="nowrap"
            >
                <Grid container spacing={1}  className={classes.buttongroup}>
                    <ThemeProvider theme={theme}>
                    <Grid item xs={6} md={4}>
                    
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            // endIcon={}
                            // onClick={}
                        >
                            1SEE MORE
                        </Button>
                    
                    </Grid>
                        <Grid item xs={6} md={4}>
                        
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            // endIcon={}
                            // onClick={}
                        >
                            2SEE MORE
                        </Button>
                        
                        </Grid>
                    </ThemeProvider>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                            title={detailById.name}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.root}>
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2" className={classes.textcapitalize}>
                                {detailById.name}
                            </Typography>

                            <Typography variant="body2" component="p">
                                Height:  
                            </Typography>
                            <Chip label={detailById.height / 10 + "m"} color="default" size="small"/>

                            <Typography variant="body2" component="p">
                                Weight:
                            </Typography>
                            <Chip label={detailById.weight / 10 + "Kg"} color="default" size="small"/>

                            <div>
                                Types: {detailById.types.length > 1 ?
                                    detailById.types.map((el, index)=>{ 
                                        return <Chip key={index} label={el.type.name} color="secondary" size="small"/> })
                                    :
                                    detailById.types
                                    }
                            </div>
                            <div>
                            
                                Abilities: {detailById.abilities.length > 1 ?
                                    detailById.abilities.map((el, index)=>{
                                        return <Chip key={index} label={el.ability.name} color="primary" size="small" />})
                                    :
                                    detailById.abilities
                                    }
                            </div>
                            <div>
                                Stats:
                                {
                                detailById.stats.map((el, index) =>{ 
                                
                                return <div className="barprogress" key={index}><p>{el.stat.name}:</p><BorderLinearProgress variant="determinate" value={el.base_stat}/></div>
                                
                                })
                                }
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        : null  }
        </>
    );
}

export default Detail;