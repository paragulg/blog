import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';

import './App.css';

function App() {
  const [inputName, setInputName] = React.useState('');
  const [inputText, setInputText] = React.useState('');

  const [cards, setCards] = React.useState([{ name: inputName, text: inputText }]);

  const publish = () => {
    setCards([...cards, { name: inputName, text: inputText }]);
  };

  return (
    <div className="App">
      <Header />
      <Posts
        inputName={inputName}
        setInputName={setInputName}
        inputText={inputText}
        setInputText={setInputText}
        publish={publish}
        cards={cards}
      />
    </div>
  );
}

export default App;
