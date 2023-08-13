import logo from './logo.svg';
import './App.css';
import DatabaseEntry from './Components/DatabaseEntry';
import AlbumDatabase from './Components/AlbumDatabase';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Album Database</h1>
      </header>
      <AlbumDatabase />
    </div>
  );
}

export default App;
