
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MakePizza from './components/MakePizza';
import Cart from './components/Cart';
import Orders from './components/Orders';
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MakePizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
      
     </div>
  );
}

export default App;
