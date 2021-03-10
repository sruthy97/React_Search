
import { render } from '@testing-library/react';
import React,{ Component, useState } from 'react';
import './App.css';
import './content.css';
import  Content  from './Content';



function App() {

    
return (

  <div className="App">
      <header className="App-header">
        <h1>Kerala District</h1>
      </header>
    
 <div  className='content'>
 <Find />
        

</div>
</div>

  );

}

function Find(){
  const [searchValue,setSearch]=useState('');
    const myItems = [{ name:'Alappuzha'},
  { name:'Ernakulam'},
  { name:'Idukki'},
  { name:'Kannur'},
  { name:'Kasaragod'},
  { name:'Kollam'},
  { name:'Kottayam'},
  { name:'Kozhikode'},
  { name:'Malappuram'},
  { name:'Palakkad'},
  { name:'Pathanamthitta'},
  { name:'Thiruvananthapuram'},
  { name:'Thrissur'},
  { name:'Wayanad'}
  ];

 
function getData(val){

  setSearch(val.target.value)
 
}
  
  return(
<div className='div'>
<input className='no-outline'  type='text' placeholder='Search...'
onChange={getData}

></input>


<Content items={myItems} data={searchValue}>  </Content>

  </div>
  
    );
 
   
}

export default App;
