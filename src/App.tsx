import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import List from './Pages/List'
import LocalWedding from './Pages/LocalWedding'

function App() {
  return (
    <>
    <Router>
    
 
    <Navbar />
    <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact} />
    <Route path="/list" component={List} />
    <Route path='/localwedding' component={LocalWedding}/>
    </Switch>
    </Router>
    </>

    )
}

export default App;
