import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Trilhas from './pages/Trilhas';
import Comunidade from './pages/Comunidade';
import Chat from './pages/Chat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="trilhas" element={<Trilhas />} />
          <Route path="comunidade" element={<Comunidade />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);