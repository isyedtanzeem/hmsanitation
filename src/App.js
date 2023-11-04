import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import './App.css';
import HMSQuote from './Pages/HMSQuote';
import Home from './Pages/Home';
import HMSInvoice from './Pages/HMSInvoice';

function App() {
  return (
    <div className="App">
      <HMSInvoice />

    </div>
  );
}

export default App;
