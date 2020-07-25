import React from 'react';
import './item.scss';
const Item = ({title,imagurl}) => {
    return ( 
        
            <div className="item">
                <div className="card">
                    <img className='card-img' src={`${imagurl}`} alt={title} />
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>

     );
}
 
export default Item;