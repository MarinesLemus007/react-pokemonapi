import Grid from '@material-ui/core/Grid'
import Banner from './components/Banner';
import CardResponse from './components/CardResponse';

function App() {
  return (
    <>
    <Banner/>
    <Grid container spacing={1}>
      <CardResponse/>
    </Grid>
    </>
  );
}

export default App;
