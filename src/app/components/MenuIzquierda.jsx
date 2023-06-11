import { useState, useEffect } from 'react';

export function MenuIzquierda() {

  const [datosUsuarios, setDatosUsuarios] = useState({});

  useEffect(() => {
    setDatosUsuarios(JSON.parse(localStorage.getItem('Datos')));
  }, [])

;

  const editarPerfil = () => {
    const edit = document.getElementById('editdiv');
    const fondo = document.getElementById('editfondo');
    const scroll = document.getElementById('scroll');
    edit.classList.remove('hidden');
    fondo.classList.remove('hidden');
    scroll.classList.add('overflow-hidden');
  }

  const cerrar = () => {
    const edit = document.getElementById('editdiv');
    const fondo = document.getElementById('editfondo');
    const scroll = document.getElementById('scroll');
    edit.classList.add('hidden');
    fondo.classList.add('hidden');
    scroll.classList.remove('overflow-hidden');
  }

  const contraseña = () => {
    const edit = document.getElementById('editdiv');
    const mensaje = document.getElementById('mensaje');
    edit.classList.add('hidden');
    mensaje.classList.remove('hidden');
  }

  const cerrarMensaje = () => {
    const mensaje = document.getElementById('mensaje');
    const fondo = document.getElementById('editfondo');
    const scroll = document.getElementById('scroll');
    mensaje.classList.add('hidden');
    fondo.classList.add('hidden');
    scroll.classList.remove('overflow-hidden');
  }

  return(
    <div id="scroll">
      <div className="h-screen w-setting Mitr fixed top-0 left-0 border-r border-principal hidden lg:block ">
        <img src="./src/assets/image/photoprofile.jpg" className="w-32 m-auto mt-20 rounded-full border border-black" />
        <p className="text-center text-lg mt-3">@{datosUsuarios.user}</p>
        <p className="text-center text-lg mt-3"><span className="font-bold">0</span> Siguiendo | <span className="font-bold">0</span> Seguidores</p>
        <div className="centra-boton flex justify-center mt-6">
            <button type="button" onClick={editarPerfil} className="w-32 h-8 bg-principal rounded-xl text-white transform duration-300 hover:scale-105">Editar perfil</button>
        </div>
        <div className="centra-boton flex justify-center mt-96">
            <a href="./login.html"><button type="button" className="w-32 h-8 mt-32 bg-principal rounded-xl text-white transform duration-300 hover:scale-105">Cerrar sesion</button></a>
        </div>
      </div>

      <div id="editdiv" className="w-weditsmall h-login fixed bg-white z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl hidden md:w-wedit sm:w-weditmovil">
        <i id="cerrar" onClick={cerrar} className="fa-solid fa-xmark text-xl text-red-500 mt-2 ml-3 fixed cursor-pointer"></i>
        <p className="text-center text-xl mt-2">Editar perfil</p>
        <hr className="mt-2 border-gray-300" />
        <p className="mt-3 text-lg text-center font-bold underline decoration-solid">Foto del perfil</p>
        <img id="imagen" src="./src/assets/image/photoprofile.jpg" className="w-36 m-auto mt-5 rounded-full border border-black" />
        <div className="flex justify-center mt-7">
            <label htmlFor="input-file" className="cursor-pointer bg-principal hover:bg-red-700 text-white py-2 px-6 rounded-xl">
                Cambiar Foto
                <input id="input-file" type="file" className="hidden" />
            </label>   
        </div>
        <p className="mt-10 text-lg text-center font-bold underline decoration-solid">Nombre de usuario</p>
        <div className="flex justify-center mt-7">
            <label htmlFor="input" className="mr-2">Nombre de usuario: &nbsp; &nbsp;</label>
            <input className="border border-black w-60 h-8 rounded-lg focus:outline-none icon" type="text" placeholder="hola" name="uname" required />
        </div>
        <div className="flex justify-center mt-12">
            <button type="button" onClick={cerrar} className="w-40 h-10 bg-principal rounded-xl text-white transform duration-300 hover:scale-105">Guardar Cambios</button>
        </div>
        <p className="text-center mt-3">¿Quieres cambiar tu puta contraseña? <span onClick={contraseña} className="underline cursor-pointer">Pinche aqui</span></p>
      </div>

      <div id="editfondo" className="bg-fondo w-full h-screen fixed z-30 hidden"></div>

      <div id="mensaje" className="w-contraseña h-52 bg-white fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl hidden">
        <i id="contraseña" onClick={cerrarMensaje} className="fa-solid fa-xmark text-xl text-red-500 mt-2 ml-3 fixed cursor-pointer"></i>
        <p className="text-center text-lg mt-1"><i>¡ALERTA!</i></p>
        <hr className="mt-1 border-gray-300" />
        <p className="text-center mt-12 text-lg">Se ha enviado un correo con un enlace <br />para cambiar la contraseña.</p>
      </div>

    </div>
  )
}