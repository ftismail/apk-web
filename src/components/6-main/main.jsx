import React from 'react';
import Item from '../7-item/item'
import './main.scss'
const Main = ({title,imagurl}) => {
    return ( 
        <div className='main' >
            <Item title={title} imagurl = {imagurl} />
            <Item title={title} imagurl = {imagurl} />
            <Item title={title} imagurl = {imagurl} />
            <Item title={title} imagurl = {imagurl} />
            <Item title={title} imagurl = {imagurl} />
            <Item title={title} imagurl = {imagurl} />
            <Item title={title} imagurl = {imagurl} />
        </div>
     );
}
 
export default Main;