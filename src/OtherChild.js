import React,{useContext} from 'react'
import { GlobalInfo } from './App'

const OtherChild = () => {
    const {appColor}=useContext(GlobalInfo)
  return (
    <div>
        <h3 style={{color:appColor}}>SuperChild</h3>
    </div>
  )
}

export default OtherChild