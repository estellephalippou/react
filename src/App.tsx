import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BeerList from './components/BeerList';

function Home() {
  const [beers, setBeers] = useState<string[]>([
    'Coreff',
    'Corona',
    'Mort Subite',
  ]);
  const [newBeer, setNewBeer] = useState('');

  function addBeer(e: React.FormEvent) {
    e.preventDefault();
    if (!newBeer.trim()) return;
    setBeers((s) => [...s, newBeer.trim()]);
    setNewBeer('');
  }

  function removeBeer(id: number) {
    setBeers((s) => s.filter((_, i) => i !== id));
  }

  return (
    <div>
      <h1>Mes bières préférées</h1>
      <form onSubmit={addBeer} style={{ marginBottom: 12 }}>
        <input
          value={newBeer}
          onChange={(e) => setNewBeer(e.target.value)}
          placeholder="Ajouter une bière"
        />
        <button type="submit" style={{ marginLeft: 8 }}>
          Ajouter
        </button>
      </form>
      <BeerList beers={beers} onRemove={removeBeer} />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <nav>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

