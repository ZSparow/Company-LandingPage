import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Footer, Navbar, About, Services, Contact } from './contianer'
function App() {
  return (
    <main style={{backgroundColor:"#f0f0f0"}}>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
