
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import CardResponse from './components/CardResponse';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path="/react-pokemonapi/detail/:id">
            <Detail />
          </Route>

          <Route path="/react-pokemonapi/" exact>
            <Banner />
            <Navbar />     
            <CardResponse /> 
            <ScrollUpButton />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
