import React, { Component } from 'react';
import SideBar from '../../components/5-side-bar/side-bar'
import Main from '../../components/6-main/main'
import './home.scss'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'app',
            imag:'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',

         }
    }
    render() { 
        return ( 
            <div className='home'>
                <Main title={this.state.title} imagurl={this.state.imag} />
                <SideBar/>
            </div>
         );
    }
}
 
export default Home;