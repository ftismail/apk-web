import React from 'react';
import Items from '../8-items/items'
import './main.scss'

const Main = ({info}) => {
    return ( 
        <div className='main'>
            <Items info={info} />
        </div>
     );
}
 
export default Main;
// const Main = ({title,imagurl}) => {
//     return ( 
//         <div className='main' >
//             <Item title={title} imagurl = {imagurl} />
//         </div>
//      );
// }
 
// export default Main;