import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Nav} from './components/Nav'
import {HomeScreen} from './components/Screens/HomeScreen'

import {SignUpScreen} from './components/Screens/SignUpScreen'
import {SignInScreen} from './components/Screens/SignInScreen'
import {Footer} from './components/Footer'



function App() {
  return (
    <Router>
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" component={HomeScreen} exact={true}/>
        <Route path="/login" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen } />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
