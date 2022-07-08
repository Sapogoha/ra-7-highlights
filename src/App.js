import React, { useState } from 'react';

import './App.css';

import List from './components/List';
import data from './data';

function App() {
  const [list] = useState(data);
  return <List list={list} />;
}

export default App;
