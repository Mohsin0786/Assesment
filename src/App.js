import './App.css';
import React, {useState } from 'react'
import Header from './Header'
import CardContent from './CardContent'
function App() {
  const [cardData, setcardData] = useState(null)
  const [spinner, setspinner] = useState(false)
  return (
    <div className="App">
      <Header setcardData={setcardData} setspinner={setspinner} />
      <CardContent spinner={spinner} cardData={cardData} />
    </div>
  );
}

export default App;
