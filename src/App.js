import Sidebar from './routes/Sidebar';
import Income from './routes/income';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Expenses from './routes/Expenses';
import logo from './logo.svg';
import { useState } from 'react';


function App() {
  
  return (
    <Routes>

      <Route path="/" element={<Sidebar/>}>
        <Route index element={<Home/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="expenses" element={<Expenses/>}/>
      </Route>
    </Routes>
  );
}

export default App;
