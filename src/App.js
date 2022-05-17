import { BrowserRouter } from 'react-router-dom';
import Main from "./component/Main"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
