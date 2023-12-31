import { Helmet } from 'react-helmet';

import { Foto } from '../components/Foto';
import { MenuDerecha } from '../components/MenuDerecha';
import { MenuIzquierda } from '../components/MenuIzquierda';
import { Nav } from '../components/Nav';
import { Video } from '../components/Video';

export function Home() {
  return(
    <>
      <Helmet>
        <title>Glyvest - Home</title>
      </Helmet>
      <Nav />
      <MenuIzquierda />
      <div className='h-screen flex flex-col'>
        <Foto />
        <Video />
      </div>
      <MenuDerecha />
    </>
    
  )
}