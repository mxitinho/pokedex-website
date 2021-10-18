import { useState } from 'react';

import { Pokedex } from './pages/Pokedex';

import './styles/pokedex.scss';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="pokedex-app">
      <div className="search-box">
        <input 
          type="text" 
          id="search" 
          placeholder="Pesquise um pokémon específico" 
          onChange={event => setSearch(event.target.value)}
          value={search}
        />
      </div>
      <Pokedex search={search}/>
    </div>
  );
}

export default App;