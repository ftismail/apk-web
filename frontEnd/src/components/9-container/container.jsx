import React from 'react';
import Main from '../6-main/main'
import Side from '../5-side-bar/side-bar';
import './container.scss'
const Container = (props) => {
    return ( 
        <div className="container">
            <Main info={props.info}/>
            <Side/>
        </div>
     );
}
 
export default Container;