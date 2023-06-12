import { Register } from "../components/Register";
import { Helmet } from 'react-helmet';

export function Registrate() {
  return(
    <div className="bg-login h-screen w-screen bg-cover bg-center">
      <Helmet>
        <title>Glyvest - Registrate</title>
      </Helmet>
      <Register />
    </div>
  )
}