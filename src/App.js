import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import RegistrationWindow from './Components/registration/registrationwindow';
import Modalwindow from './Components/modalwindow';


const PAGE_PRODUCTS = 'products';
const PAGE_REGISTRATION = 'Registration';


function App() {

  const [page, setPage] = useState(); 

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
 <>
      <header>
          <div className='link'>
              <button onClick={() => navigateTo(PAGE_REGISTRATION)}>Registration</button>
          </div>
          <div className='link'>
              <button onClick={() => navigateTo(PAGE_PRODUCTS)}>view products</button>
          </div>
      </header>
        
        { page === PAGE_REGISTRATION && (
           <RegistrationWindow />
           )}
       { page === PAGE_PRODUCTS && (
          <Modalwindow />)}
</>
  );
}

export default App;
























