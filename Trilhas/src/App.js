import React from 'react';
import Header from './components/Header';
import Mapa from './components/Mapa';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Mapa />
      </main>
      <Footer />
    </div>
  );
}

export default App;