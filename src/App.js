import './App.css'
import Mapper from './assets/mapper';
import Exterior from './components/exterior';
import Interior from './components/interior'
import AppRouter from './config/router';

function App() {

  return (
    <div className="App">
    <AppRouter/>
    </div>
  );
}

export default App;
