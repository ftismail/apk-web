import React from 'react';
import {Link} from 'react-router-dom'
import './item.scss';
const Item = ({title,imagurl,id}) => {
    return ( <Link to = {`app/${id}`}>
            <div className="item">
                
                <div className="card">
                    <img className='card-img' src={`${imagurl}`} alt={title} />
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
            </Link>
     );
}
 
export default Item;