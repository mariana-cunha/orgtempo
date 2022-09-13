import React from 'react';
import './App.scss';
import MenuBar from './components/MenuBar';
import Portugues from './pages/Portugues';
import Espanhol from './pages/Espanhol';
import Ingles from './pages/Ingles'
import Alemao from './pages/Alemao'
import Frances from './pages/Frances'
import {
  Routes,
  Route
} from "react-router-dom";
import Images from './components/Images';
import Footer from './components/Footer';

function App() {
  return (
    <div className="layout-principal">
      <MenuBar />
      <Routes>
        <Route path='/' index element={<Portugues />} />
        <Route path='/ingles' element={<Ingles />}  />
        <Route path='/espanhol' element={<Espanhol />} />
        <Route path='/frances' element={<Frances />} />
        <Route path='/alemao' element={<Alemao />} />
      </Routes>
      <Images />
      <Footer />
    </div>
  );
}

export default App;
