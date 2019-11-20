import React from 'react';
import Counter from './Components/Counter';
import TodoContainer from './Components/ToDo/TodoContainer';
import './App.scss';

type AppProps = {
  text: string
}

const App: React.FC<AppProps> = ({text}) => {
  return <div className="App">
    {text}
    <Counter />
    <TodoContainer />
  </div>;
}

export default App;
