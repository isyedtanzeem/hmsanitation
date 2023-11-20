import { Link } from "react-router-dom";
import './Home.css';  // Import your CSS file

function Home() {
  return (
    <div className="container">
      <Link to='/HMSInvoice' className="button-fav blue-button">Invoice</Link>
      <Link to='/HMSDelivery' className="button-fav red-button">Delivery</Link>
    </div>
  );
}

export default Home;
