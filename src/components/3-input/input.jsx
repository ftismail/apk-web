import React from 'react';
import './input.scss'
const Form = ({handelChange,...otherProps}) => {
    return ( 
        <div className='group'>
                <input className='input' onChange={handelChange} {...otherProps} />
            </div>
     );
}
 
export default Form;