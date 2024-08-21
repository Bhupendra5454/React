import logo from './logo.svg';
import Home from './Main/Components/Home';
import About from './Main/Components/About';
import Contact from './Main/Components/Contact';
import Tap from './Main/Components/Tap';

import Login from './Membership/Components/Login';
import Register from './Membership/Components/Register';

import List from './Catalog/Components/List';
import Details from './Catalog/Components/Details';

import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Dashboard from './BI/Components/Dashboard';
import LineChart from './BI/Components/Charts/LineChart';

import BarChart from './BI/Components/Charts/BarChart';
import PieChart from './BI/Components/Charts/PieChart';


function App() {
  return (
    <div>

    <div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>Transflower</h1>
      <p>A learning experience!</p> 
    </div>
      
    <div class="container mt-5">
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Flowers</Link>|
          <Link to="/dashboard">Dashboard</Link>|<Link to="/about">About</Link>|
          <Link to="/contact">Contact</Link>|<Link to="/login">Login</Link> 
          <Link to="/register">Register</Link> |<Link to="/tap">Tap</Link>
        </nav>
        <hr/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tap" element={<Tap />} />
          <Route path="products" element={<List />}/>
          <Route path="products/:productId" element={<Details />} />
          <Route path="dashboard" element={<Dashboard />}>
                 {/* Nested Routing   */}
                   <Route path="line" element={<LineChart/>}></Route>
                  <Route path="bar" element={<BarChart/>}></Route>
                  <Route path="pie" element={<PieChart/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
</div>
  );
}

export default App;
