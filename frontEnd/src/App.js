import React from 'react';
import axios from 'axios'
import {Switch,Route} from 'react-router-dom';
import Header from './components/1-header/header';
import HeroSection from './components/2-hero-secion/hero';
import Container from './components/9-container/container';
import Details from './components/10-item-details/details';
import './app.scss'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      info:[],
      search:''
     }
  }
  componentDidMount(){
    axios.get('/db').then(res=>{
      this.setState({info:res.data})
    })
  }
  handelChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value},()=>console.log(this.state))
  }
  render() {
    const {info,search} = this.state
    const filter = info.filter(element=>element.title.toLowerCase().includes(search.toLowerCase()))
     const Home = ()=>{
      return(<Container info={filter}/>)
     }
     const Games = ()=>{
       let games = filter.filter(e=>e.categories === "games" && filter)
       return(<Container info={games}/>)
     }
    
    return ( 
      <div className='app'>
        <Header/>
        <HeroSection handelChanges={this.handelChange}/>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/games' component={Games} />
            <Route  path='/app/:id' component={Details} />
        </Switch> 
      </div>
     );
  }
}
export default App;
