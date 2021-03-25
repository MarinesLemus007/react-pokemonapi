import Grid from '@material-ui/core/Grid'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import CardResponse from './components/CardResponse';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

function App() {
  return (
    <>
    <Banner/>
    <Navbar/>
    <Grid container spacing={1}>
      <CardResponse/>
    </Grid>
    <ScrollUpButton/>
    </>
  );
}

export default App;
