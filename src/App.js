import BotonHola from './components/BotonHola';

import './App.css';
import ListaPersonajes from './components/ListaPersonajes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{textAlign: 'center',marginTop: '50px'}}>
          <h1>Hola Mundo desde react!🚀</h1>
          <BotonHola />
        </div>
      </header>
      <ListaPersonajes />
    </div>
  );
}

export default App;
