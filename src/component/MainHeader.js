import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function MainHeader(props) {
  return (
   <>
 
  <Header mode={props.mode} togglemode={props.togglemode}/>
  
<Outlet  mode={props.mode} />
 


 
   </>
  )
}
