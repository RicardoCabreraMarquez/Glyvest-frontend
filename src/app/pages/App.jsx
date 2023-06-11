import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioSesion } from './InicioSesion';
import { Registrate } from './Registrate';
import { Home } from './Home';

export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <InicioSesion /> }/>
        <Route path="/registrate" element={ <Registrate /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}