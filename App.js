
import './App.css';
import Index from './components/Index.jsx';
import Characters from './components/Characters.jsx';
import Planets from './components/Planets.jsx';
import {Router, navigate} from '@reach/router';
import {useState} from 'react';

function App() {
  const [myType, setMyType] = useState("people");
  const [myId, setMyId] = useState(1);
  const findOption = form => {
    setMyType(form.Type);
    setMyId(form.Id);
    
  }
  return (
    <div className="App">
      <Index findOption = {findOption}/>
      <Router>
        <Characters path="/people" Id={myId}/>
        <Planets path="/planets" Id={myId}/>
      </Router>  
    </div>
  );
}

export default App;
