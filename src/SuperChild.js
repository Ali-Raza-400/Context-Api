import React,{useContext} from 'react'
import { GlobalInfo } from './App'

const SuperChild = () => {
    const {appColor,getday}=useContext(GlobalInfo)
    const day='sunday'
  return (
    <div>
        <h3 style={{color:appColor}}>SuperChild</h3>
        <button onClick={()=>getday(day)}>Click me to show the day</button>
    </div>
  )
}

export default SuperChild