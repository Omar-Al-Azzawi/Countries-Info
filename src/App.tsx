
import CountryTable from "./components/CountryTable/CountryTable"
import Cart from "./components/cart/cart"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/">
              <CountryTable />
           </Route>
           <Route path="/">
              <Cart />
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
