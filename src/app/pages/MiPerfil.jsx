import { Helmet } from 'react-helmet';

import { Nav } from '../components/Nav';
import { Perfil } from '../components/Perfil';
import { MenuDerecha } from '../components/MenuDerecha';


export function MiPerfil() {
  return(
    <>
      <Helmet>
        <title>Glyvest - Mi Perfil</title>
      </Helmet>
      <Nav />
      <Perfil />
      <MenuDerecha />
    </>
  )
}