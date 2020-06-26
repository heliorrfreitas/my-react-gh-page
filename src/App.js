import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './Home';
import Hello from './Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1>App Test</h1>

        <HashRouter basename='/'>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>              
              <li><Link to="/hello">Hello</Link></li>              
            </ul>
            
            
            </div>
        </HashRouter>
      </header>
      <main>
          <HashRouter>
            <Route exact path="/" component={Home} />            
            <Route exact path="/hello" component={Hello} />            
          </HashRouter>
      </main>

    </div>
  );
}

export default App;
