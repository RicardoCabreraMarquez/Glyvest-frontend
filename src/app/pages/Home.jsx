import { Foto } from '../components/Foto';
import { MenuDerecha } from '../components/MenuDerecha';
import { MenuIzquierda } from '../components/MenuIzquierda';
import { Nav } from '../components/Nav';
import { Video } from '../components/Video';

export function Home() {
  return(
    <>
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