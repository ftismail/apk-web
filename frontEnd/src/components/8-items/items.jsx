import React from 'react';
import Item from '../7-item/item'
import './items.scss'
const Items = (props) => {
    return ( 
        <React.Fragment>
            {props.info.map((element)=>(
                <Item key={element._id} title={element.title} imagurl={element.imagurl} id={element._id} />
            ))}
        </React.Fragment>
     );
}
 
export default Items;