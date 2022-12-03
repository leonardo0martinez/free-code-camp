import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PROJECTS 
import { RandomQuoteMachine } from "./random-quote-machine/app";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root'>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/login' element={ <Login/> } />
              <Route path='/register' element={ <Register/> } />
              <Route path='/dashboard' element={ <Dashboard/> } />
          </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
