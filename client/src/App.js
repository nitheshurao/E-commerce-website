

import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Appp from './Appp';


function App() {

  const user = null;
  return (
    <Router >
      <Navbar />
      <Appp />
      <switch>
        {/* <Route path='/' exact component={Home} /> */}

        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />

      </switch>
    </Router>
    // <div className="App">
    //   <Navbar />

    //   <Footer />
    // </div>
  );
}

export default App;
