import React,{ Component, useState } from'react';
import './content.css';

function Content ({ items,data }) {

    return items.filter((val)=>{
        if(data==''){

            return val
        }
        else if(val.name.toLowerCase().includes(data.toLowerCase())){
            return val
        }
      
    }


    ).map(item => (
        
       <div >
          
        <ul className='nav'>
            <li>{item.name} </li></ul>
            
        </div>
    ));
}



export default  Content;