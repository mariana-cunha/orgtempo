import React from 'react';
import './App.scss';
import MenuBar from './components/MenuBar';
import Portugues from './pages/Portugues';
import Espanhol from './pages/Espanhol';
import Ingles from './pages/Ingles'
import Alemao from './pages/Alemao'
import Frances from './pages/Frances'
import NotFound from './pages/NotFound'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Images from './components/Images';

function App() {


  return (
    <div className="layout-principal">

      


      {/* <div> */}
        <MenuBar />
          <Routes>
          <Route path='/' index element={<Portugues />} />
          <Route path='ingles' element={<Ingles />}  />
          <Route path='espanhol' element={<Espanhol />} />
          <Route path='frances' element={<Frances />} />
          <Route path='alemao' element={<Alemao />} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      
      {/* </div> */}

      <Images />

      <div className='contact'>
        <span><a href='https://www.instagram.com/tempobr/'>@tempobr</a></span>
        <span>contato@orgtempo.com</span>
      </div>
      
    </div>
  );
}

export default App;
