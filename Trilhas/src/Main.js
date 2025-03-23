import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tiffles from './pages/Tiffles';
import Comunidade from './pages/Comunidade';
import Chat from './pages/Chat';
import Bernando from './pages/Bernando';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tiffles" element={<Tiffles />} />
          <Route path="comunidade" element={<Comunidade />} />
          <Route path="chat" element={<Chat />} />
          <Route path="bernando" element={<Bernando />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);