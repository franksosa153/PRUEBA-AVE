

import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Ejecicio1 from './ejercicios/ejercicio1';
import Ejecicio2 from './ejercicios/ejercicio2';
import Ejecicio3 from './ejercicios/ejercicio3';

function App() {
  
  

  return (
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Ejecicio1/>}/>
     
      <Route path="/2" element={<Ejecicio2/>}/>
      <Route path="/3" element={<Ejecicio3/>} />
      </Route>
      </Routes>
      
     </BrowserRouter>
  );
}

export default App;
