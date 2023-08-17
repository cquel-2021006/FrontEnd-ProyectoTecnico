import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListaUsuario } from './Usuario/components/ListaUsuario';
import { CreateUsuario } from './Usuario/components/CreateUsuario';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuario></ListaUsuario>}></Route>
          <Route path='/agregarUsuario' element={<CreateUsuario></CreateUsuario>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
