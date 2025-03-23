import React from 'react';

function Mapa() {
  return (
    <div className="bg-green-200 h-screen relative">
      
      {/* Informações do usuário */}
      <div className="absolute top-4 left-4 bg-orange-300 p-4 rounded-lg shadow-md">
        <h2 className="font-bold text-lg">Olá Bernardo!</h2>
        <p>Level 1 - Desenvolvimento Javascript</p>
        <p>Bronze</p>
      </div>

      {/* Elementos do mapa */}
      <img src="../src/assets/livro.png" alt="Livro JS" className="absolute top-20 left-20 w-16 h-16" />
      <img src="../src/assets/casa.png" alt="Casa" className="absolute bottom-20 right-20 w-32 h-32" />
      <img src="../src/assets/vetor.png" alt="Pegadas" className="absolute bottom-40 left-40 w-12 h-12" />

      {/* Outros elementos */}
      <img src="src/assets/house.png" alt="casa" className="absolute bottom-40 left-40 w-12 h-12" />

      {/* Adicione árvores, lago e outros objetos usando imagens */}
  );
};

export default Mapa;
