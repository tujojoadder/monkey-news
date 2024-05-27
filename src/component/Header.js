import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header(props) {

  // State for update modetext
  const [mode, setmode] = useState("DarkMode Enable");
  const updatemodetext = () => {
    if (props.mode == 'light') {
      setmode("Lightmode Enable")
    }
    else {
      setmode("DarktMode Enable ")
    }

  }

  return (
    <>



      <nav style={{  color: props.mode == 'light' ? 'black' : 'white',borderBottom:"2px solid red"}} className={`fixed-top navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
        <div className="container-fluid " >
          <a className="navbar-brand" href="#" style={{ color: props.mode == 'light' ? 'red' : 'white' }}><b> Monkey News </b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">


              <li className="nav-item">
                <NavLink to="/" style={{ color: props.mode == 'light' ? 'black' : 'white' }}> Home </NavLink></li>

              <li className="nav-item"><NavLink to="/business" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>Business</NavLink></li>
              <li className="nav-item"><NavLink to="/entertainment" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>Entertainment</NavLink></li>
              <li className="nav-item"><NavLink to="/science" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>Science</NavLink></li>
              <li className="nav-item"><NavLink to="/sports" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>Sports</NavLink></li>
              <li className="nav-item"><NavLink to="/technology" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>Technology</NavLink></li>
              <li className="nav-item"><NavLink to="/about" style={{ color: props.mode == 'light' ? 'black' : 'white' }}>About</NavLink></li>


              <li><div className="form-check form-switch">
                <input onClick={props.togglemode} onChange={updatemodetext} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>








    </>
  )
}
