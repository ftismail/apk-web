import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './components/1-header/header';
import HeroSection from './components/2-hero-secion/hero';
import Home from './pages/home-page/home'
import './app.scss'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='app'>
        <Header/>
        <HeroSection/>
        <Switch>
        <Route exact path='/' component={Home} />
        </Switch>
      </div>
     );
  }
}
export default App;
