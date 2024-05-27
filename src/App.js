import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Route,Routes, NavLink } from 'react-router-dom'
import Contact from './component/Contact';
import MainHeader from './component/MainHeader';
import { useState ,useEffect, useContext, createContext} from 'react';
import News from './component/News';
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';
import { Provider } from 'react-redux';

import { store } from './component/counter/countReducer';


export const gender=createContext();

function App() {


const [num, setnum] = useState(0);
const [api, setapi] = useState(process.env.REACT_APP_MY_API);
  const count=() => {
    setnum(num+1);

  }
//


/* State For Dark/light mode */

const [mode, setmode] = useState("light");
//state for load top bar
const [progresses, setprogresses] = useState(0);


let setprogress=(text)=>{
  setprogresses(text);
}



//fn toggle mode 
const togglemode=()=>{


if(mode=="light"){
  setmode("dark");
  document.body.style.backgroundColor="gray";
}
else{
  setmode("light");
  document.body.style.backgroundColor="white";
}
}





//set  scrollX,scrollY

window.addEventListener("scroll",()=>{
      if (window.scrollY>0) {
        sessionStorage.setItem(window.location.pathname,window.scrollY);
      }
})




  return (
    <>
    <Provider store={store}>

 
 <LoadingBar
        color='#f11946'
        progress={progresses}

      />


  <gender.Provider value={"Male"}>

 <BrowserRouter>
  
        <Routes>
        <Route path='/' exact element={<MainHeader mode={mode} togglemode={togglemode}/>} >
          
        <Route index exact element={<News api={api}  setprogress={setprogress}  key="TOP Heading" sub="Top Heading" mode={mode} category="" pagesize={12} />}/>        
          <Route path='/business'  exact element={<News api={api}  setprogress={setprogress}  key="Business" sub="Business"  mode={mode} category="business" pagesize={12} />}/>
          <Route path='/entertainment' exact element={<News api={api}  setprogress={setprogress}  key="Entertainment" sub="Entertainment"  mode={mode} category="entertainment" pagesize={12} />}/>
          <Route path='/science'  exact element={<News api={api}  setprogress={setprogress}  key="Science" sub="Science"  mode={mode} category="science" pagesize={12} />}/>
          <Route path='/sports'  exact element={<News api={api}  setprogress={setprogress}  key="Sports" sub="Sports"  mode={mode} category="sports" pagesize={12} />}/>
          <Route path='/technology' exact element={<News api={api}  setprogress={setprogress}   key="Technology" sub="Technology"  mode={mode} category="technology" pagesize={12} />}/>
          <Route path='/about' mode={mode}  exact element={<About mode={mode} />} />
          

          </Route>

        </Routes>
      
      </BrowserRouter>

      </gender.Provider>
          
    </Provider>
</>);
}

export default App;
