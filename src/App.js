
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Restview from './Pages/Restview';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restview/:id' element={<Restview />} />

      
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
