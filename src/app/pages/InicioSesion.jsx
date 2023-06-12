import { Login } from '../components/Login';
import { Helmet } from 'react-helmet';


export function InicioSesion() {
  return(
    <div className="bg-login h-screen w-screen bg-cover bg-center">
      <Helmet>
        <title>Glyvest - Iniciar Sesion</title>
      </Helmet>
      <Login />
    </div>
  )
}