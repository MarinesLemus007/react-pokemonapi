import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getResponse, getResponseSearch} from '../redux/Ducks';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button,
Box, CardActions, Backdrop, CircularProgress } from '@material-ui/core/';
import Visibility from '@material-ui/icons/Visibility';
import { amber } from '@material-ui/core/colors';
import {Link} from "react-router-dom";

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
    textalign:{
        textAlign: 'center'
    }
}));

const theme = createMuiTheme({
    palette: {
      primary: amber
    },
  });

const CardResponse = (inputSearch) => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const open = useSelector(store => store.pokemonData.open)

    const page = useSelector(store => store.pokemonData.page)

    const data = useSelector(store => store.pokemonData.data)

    const loading = useSelector(store => store.pokemonData.loading)

    const loadingSearch = useSelector(store => store.pokemonData.loadingSearch)

    useEffect(() => {

        if(inputSearch.inputSearch !== ''){
            dispatch(getResponseSearch(inputSearch.inputSearch))
        }else{
            dispatch(getResponse())
        }

      }, [dispatch, page, inputSearch.inputSearch])

    const nextPage = () =>{
        dispatch(getResponse(20))
    }

    const refresh = () => {
        window.location.reload();
    }

    return (
        <>
        <Grid container spacing={1}>
            {
                loading === true && inputSearch.inputSearch === ''? data.map((element, index) =>( 
                    <Grid item xs={12} sm={4} md={3} lg={3} xl={2} key={index}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://pokeres.bastionbot.org/images/pokemon/${ index + 1 }.png`}
                                    title={element.name}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        N.º {index + 1}
                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="h2" className={classes.textcapitalize}>
                                        {element.name}
                                    </Typography>
                        
                                </CardContent>

                                <CardActions>
                                    <Typography>
                                        <Link className="anchor" to={`/react-pokemonapi/detail/${index + 1}`}>
                                            GO TO
                                        </Link>
                                    </Typography>
                                </CardActions>

                            </CardActionArea>

                        </Card>
                    </Grid>
                ))
                :
                ''
            }

            {
                loadingSearch === true ?
                
                    data.name === undefined  || data.name === null || data.name === ''?
                    <>
                    <Grid item xs={12} >
                        <Typography gutterBottom variant="h5" component="h2">
                            Not found
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textalign}>
                        <ThemeProvider theme={theme}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={() =>{refresh()}}
                            >
                                GO BACK
                            </Button>
                        </ThemeProvider>
                    </Grid> 
                    </>
                    :
                    <>
                    <Grid item xs={12} sm={4} md={3} lg={3} xl={2} >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
                                    title={data.name}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        N.º {data.id}
                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="h2" className={classes.textcapitalize}>
                                        {data.name}
                                    </Typography>
                        
                                </CardContent>

                                <CardActions>
                                    <Typography>
                                        <Link className="anchor" to={`/react-pokemonapi/detail/${data.id}`}>
                                            GO TO
                                        </Link>
                                    </Typography>
                                </CardActions>

                            </CardActionArea>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.textalign}>
                        <ThemeProvider theme={theme}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={() =>{refresh()}}
                            >
                                GO BACK
                            </Button>
                        </ThemeProvider>
                    </Grid>
                    </>
        
                :''
            }                
        </Grid>

        {
            loading === true && loadingSearch === false?

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
            >
                <Box  my={6}>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            endIcon={<Visibility />}
                            onClick={()=>{nextPage()}}
                        >
                            SEE MORE
                        </Button>
                    </ThemeProvider>
                </Box>
            </Grid>
            :
            ''    
        }          
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit" />
        </Backdrop>
        </>
    )
}

export default CardResponse;