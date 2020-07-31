import React from 'react';
import axios from 'axios'
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            info:{}
         }
    }
    componentDidMount(){
        axios.get('/db').then(res=>{
          this.setState({info:res.data.filter(e=>e._id===this.props.match.params.id)[0]},()=>{console.log(this.state)})
        })
      }
    render() { 
        const {info} = this.state
        return ( 
            <div>
                <h1>{info.title}</h1>
            </div>
         );
    }
}
 
export default Details;