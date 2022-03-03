import './App.css'
import Mapper from './assets/mapper';
import Exterior from './components/exterior';
import Interior from './components/interior'

function App() {

  return (
    <div className="App">
      {/* <Mapper /> */}
      <Exterior />
      <Interior/>

    </div>
  );
}

export default App;
