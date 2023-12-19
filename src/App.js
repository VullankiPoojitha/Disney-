import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import axios from 'axios';
import Details from './components/Details';
import ComponentFooter from './components/ComponentFooter';
import Sample from './components/Sample';
function App() {

  return (
    <div className="App">
      {/* <Login /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/detail/:id' element={<Details />} />


        </Routes>
      </Router>
      <ComponentFooter />
      {/* <Sample /> */}
    </div>
  );
}

export default App;
