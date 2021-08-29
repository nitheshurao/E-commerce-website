

import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Appp from './Appp';

import Formm from './components/Home/Form/Formm';


function App() {

  const user = null;
  return (
    <Router >
      {/* <Navbar /> */}
      {/* <Appp /> */}
      <Formm />
      <switch>
        <Route path='/' exact component={Appp} />
        <Router path='/form' exact component={Formm} />


        {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}

      </switch>
    </Router>

  );
}

export default App;
