import React,{useContext} from 'react'
import { GlobalInfo } from './App'
import SuperChild from './SuperChild'

const Child = () => {
    const {appColor}=useContext(GlobalInfo)
    console.warn("Color we are getting",appColor);
  return (
    <div>
        <h2 style={{color:appColor}}>I am Child</h2>
        <SuperChild/>
    </div>
  )
}

export default Child