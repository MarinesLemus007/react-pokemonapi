import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, LinearProgress, Button } from '@material-ui/core/';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles/';
import Chip from '@material-ui/core/Chip';
import { amber } from '@material-ui/core/colors';
import {Link, useHistory} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
        backgroundColor: '#302d31',
        color: '#cecece'
    },
    media: {
        height: 245,
        backgroundSize: 240,
        backgroundColor: '#696969'
    },
    cardshadowless:{
        boxShadow: 'none'
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
    textalign:{
        textAlign: 'center'
    }
}));

const theme = createMuiTheme({
    palette: {
      primary: amber
    },
  });

const Detail = () => {

    const classes = useStyles();

    let history = useHistory();

    const { id } = useParams()

    const [detailById, setDetailById] = useState([])

    const [loading, setLoading] = useState(false);

    const [nextName, setNextName] = useState('');

    const [previousName, setPreviousName] = useState('');

    useEffect(() => {

        const getResponseById = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                // console.log(response.data)
                setDetailById(response.data)
            }
            catch (error) {
                console.log(error)
            }finally{
                setLoading(true)
            }
        }
        getResponseById()

        const getNamePaginationNext = async () =>{

            let nextPagById = parseInt(id) + 1

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nextPagById}`)
                setNextName(response.data.name)
            }
            catch (error) {
                console.log(error)
            }
        }
        getNamePaginationNext()

        const getNamePaginationPrevious = async() =>{

            let previousPagById = parseInt(id) - 1

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${previousPagById}`)
                setPreviousName(response.data.name)
            }
            catch (error) {
                console.log(error)
            }
        }
        getNamePaginationPrevious()

    }, [id])

    const nextClick = () => {
        history.push(`/react-pokemonapi/detail/${parseInt(id) + 1}`);
    }

    const previousClick = () => {
        history.push(`/react-pokemonapi/detail/${parseInt(id) - 1}`);
    }

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
                    
                    { parseInt(id) <= 1 ? 
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            startIcon={<ChevronLeftIcon/>}
                            onClick={()=>{previousClick()}}
                            disabled>
                            N.º{parseInt(id) - 1}
                        </Button>
                        :
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            startIcon={<ChevronLeftIcon/>}
                            onClick={()=>{previousClick()}}
                        >
                            N.º{parseInt(id) - 1} {previousName}
                        </Button>
                    }

                    </Grid>
                        <Grid item xs={6} md={4}>
                        
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            endIcon={<ChevronRightIcon/>}
                            onClick={()=>{nextClick()}}
                        >
                            N.º{parseInt(id) + 1} {nextName}
                        </Button>
                        
                        </Grid>
                    </ThemeProvider>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardshadowless}>
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

                            <div className="d-flex">
                                <div>
                                    <Typography variant="body2" component="p">
                                        Height:  
                                    </Typography>
                                    <Chip label={detailById.height / 10 + "m"} color="default" size="small"/>
                                </div>

                                <div>
                                    <Typography variant="body2" component="p">
                                        Weight:
                                    </Typography>
                                    <Chip label={detailById.weight / 10 + "Kg"} color="default" size="small"/>
                                </div>

                                <div>
                                <Typography variant="body2" component="p">
                                    Types:
                                </Typography>
                                    {   
                                        detailById.types.length > 1 ?
                                        detailById.types.map((el, index)=>{ 
                                            return <Chip key={index} label={el.type.name} color="secondary" size="small"/> })
                                        :                                 
                                        <Chip label={detailById.types[0].type.name} color="secondary" size="small"/>
                                    }
                                </div>
                            </div>

                            <div className="d-flex">
                            <Typography variant="body2" component="p">
                                Abilities:
                            </Typography>
                                {   
                                    detailById.abilities.length > 1 ?
                                    detailById.abilities.map((el, index)=>{
                                        return <Chip key={index} label={el.ability.name} color="primary" size="small" />})
                                    :
                                    <Chip label={detailById.abilities[0].ability.name} color="primary" size="small" />
                                }
                            </div>
                            <div>
                            <Typography variant="body2" component="p">
                                Stats:
                            </Typography>
                                {
                                detailById.stats.map((el, index) =>{ 
                                
                                return <div className="barprogress" key={index}><p>{el.stat.name}:</p><BorderLinearProgress variant="determinate" value={el.base_stat}/></div>
                                
                                })
                                }
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} className={classes.textalign}>
                    <Link className="anchor-goback" to="/react-pokemonapi/">
                        GO BACK
                    </Link>
                </Grid>

            </Grid>
        : null  }
        </>
    );
}

export default Detail;