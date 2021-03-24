import React,{ useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Box } from '@material-ui/core/';
import axios from 'axios';
import Visibility from '@material-ui/icons/Visibility';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { amber } from '@material-ui/core/colors';

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
    }
}));

const theme = createMuiTheme({
    palette: {
      primary: amber
    },
  });


const CardResponse = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const [page, setPage] = useState(20);

    const [open, setOpen] = useState(false);

    const nextPage = () =>{
        setPage(page + 20)
    }

    useEffect(() => {
        const getResponse = async () =>{
            try{
                setOpen(true)
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${page}`)
                // console.log(response.data.results)
                setData(response.data.results)
            }
            catch(error){
                console.log(error);
            }
            finally{
                setOpen(false);
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
            <Grid
                container
                xs={12}
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
                            onClick={() =>{nextPage()}}
                        >
                            SEE MORE
                        </Button>
                    </ThemeProvider>
                </Box>
            </Grid>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default CardResponse;
