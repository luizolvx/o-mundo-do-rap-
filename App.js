// App.js
import React, { useState } from 'react';

import TelaDeSplash from './components/TelaDeSplash';
import TelaDeLogin from './components/TelaDeLogin';
import TelaHome from './components/TelaHome';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('splash');

  const lidarComSplashConcluido = () => {
    setTelaAtual('login');
  };

  const lidarComLoginSucesso = () => {
    setTelaAtual('home');
  };

  switch (telaAtual) {
    case 'splash':
      return <TelaDeSplash aoConcluir={lidarComSplashConcluido} />;
    case 'login':
      return <TelaDeLogin aoLogin={lidarComLoginSucesso} />;
    case 'home':
      return <TelaHome />;
    default:
      return null;
  }
}
