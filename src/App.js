import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App dark:text-gray-100 dark:bg-slate-900">
      <header className="dark:text-gray-100 dark:bg-slate-900">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
