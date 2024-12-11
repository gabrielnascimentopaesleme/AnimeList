import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="border-b-2 flex flex-col justify-center w-screen h-96 text-center text-slate-200 bg-no-repeat bg-cover bg-top bg-[url('/images/bg_1.png')]">
        <h1 className="text-8xl font-bold">Animoteca</h1>
        <h2 className="text-6xl">Biblioteca de Animes</h2>
      </div>
    </div>
  );
};

export default Header;
