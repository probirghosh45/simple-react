
import './App.css';
import Auction from './components/Auction/Auction';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
         <Header></Header>
         <Auction></Auction>
    </div>
  );
}

export default App;
