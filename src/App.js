import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import './App.css';
import HMSQuote from './Pages/HMSQuote';
import Home from './Pages/Home';
import HMSInvoice from './Pages/HMSInvoice';
import HMSDelivery from './Pages/HmsDelivery';

function App() {
  return (
    <div className="App">
    
      <Router>
       
       <Routes >
         <Route path="/hmsanitation" element={<Home />} />
         <Route path="/HmsInvoice" element={<HMSInvoice />} />
         <Route path="/HmsDelivery" element={<HMSDelivery />} />
         <Route path="/HmsQuote" element={<HMSQuote />} />
        
       </Routes>
 
   </Router>
    </div>
  );
}

export default App;
