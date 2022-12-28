import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/post/:postId' element={<Post/>}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
