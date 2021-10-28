import React, { useState } from "react"
import CountryTable from "./components/CountryTable/CountryTable"
import Cart from "./components/cart/cart"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeContext, Theme } from "./context/context"

import './App.css';


function App() {
  const [theme, setTheme] = useState(Theme.Blue)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
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
    </ThemeContext.Provider>
  );
}

export default App;
