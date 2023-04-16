import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';


import 'react-router-dom';

import Dashboard from './Dashboard';



function App() {

  return (
    <>
<div className="App">


      


   

  <BrowserRouter>
<HeaderArea/>
      <Routes>
    <Route path='/'  element={<LoginPage/>}></Route>
    {/* <Route path='/home' element={<home/>}></Route> */}
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    
    {/* /* <Route path='/HeaderArea' element={<HeaderArea/>} />   */}
               </Routes>
      </BrowserRouter>
</div> 
   
    

    
    
     
    
      </>


    
    
     
    
   
  
  
    
  );
}

export default App;
