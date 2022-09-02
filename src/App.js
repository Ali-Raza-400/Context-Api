import './App.css';
import Child from './Child';
import React, { createContext, useState } from 'react';
import OtherChild from './OtherChild';
export const GlobalInfo=createContext();
function App() {
  const[day,setDay]=useState("Monday")
  const getday=(item)=>{
    setDay(item)
    console.warn(item);
  }
  const[color,setColor]=useState('green')
  return (
   <GlobalInfo.Provider value={{appColor:color,getday:getday}}>
     <div className='App'>
      <h1>I am Parent {day}</h1>
      <Child />
      <OtherChild/>
    </div>
   </GlobalInfo.Provider>
  );
}

export default App;
