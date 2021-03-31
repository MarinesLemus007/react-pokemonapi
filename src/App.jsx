
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import generateStore from "./redux/store";

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <Switch>

          <Route path="/react-pokemonapi/detail/:id">
            <Detail />
          </Route>

          <Route path="/react-pokemonapi/" exact>
            <Banner />
            <Navbar/>     
            {/* <CardResponse inputSearch={inputSearch}/>  */}
            <ScrollUpButton />
          </Route>
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
