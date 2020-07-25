import React from 'react';
import Input from '../3-input/input'
import Button from '../4-custom-btn/btn'
import './hero.scss'
const HeroSection = (props) => {
    return ( 
        <div className='hero'>
            <form className='form' onSubmit={props.handelSubmit}>
                <Input name = 'Search' type='search' placeholder='Search..' handelChange={props.handelChanges} />
                <Button add='btn-form' type='submit'>Search</Button>
            </form>
        </div>
     );
}
 
export default HeroSection;