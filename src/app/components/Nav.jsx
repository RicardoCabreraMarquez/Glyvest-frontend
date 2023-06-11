import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Nav() {

    const [datosUsuarios, setDatosUsuarios] = useState({});

    useEffect(() => {
      setDatosUsuarios(JSON.parse(localStorage.getItem('Datos')));
    }, [])

    const [ formulario, setFormulario ] = useState({
        username: '',
    });

    const handleChange = (x) => {
        setFormulario({...formulario, [x.target.name]: x.target.value})
    };

    const navigate = useNavigate();

    const changeName = (x) => {

        x.preventDefault();

        try{
            fetch('https://glyvest.onrender.com/user/edit', {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${datosUsuarios.token}`,
            },
            body: JSON.stringify({
                name: datosUsuarios.name,
                username: formulario.username,
                email: datosUsuarios.email,
                password: datosUsuarios.password,
            })
            })
            .then((response) => response.json())
            .then((data) => {
            alert('Se ha cambiado el usuario correctamente, vuelve a iniciar sesion');
            navigate('/')
            console.log(data);
            })
            .catch((error) => {
            console.error(error);
            });
        } catch(err){
            alert('usuario incorrecto');
        }  
    }

    const menuPerfilMovil = () => {
        const perfil = document.getElementById('menuperfil');
        const fondo = document.getElementById('editfondo');
        const nav = document.getElementById('nav');
        const scroll = document.getElementById('scroll');

        if (perfil.classList.contains('hidden')) {
            perfil.classList.remove('hidden');
            fondo.classList.remove('hidden');
            nav.classList.remove('z-20');
            nav.classList.add('z-40');
            scroll.classList.add('overflow-hidden')
        } else {
            perfil.classList.add('hidden');
            fondo.classList.add('hidden');
            nav.classList.add('z-20');
            nav.classList.remove('z-40');
            scroll.classList.remove('overflow-hidden')
        }
    }

    const menuHamburguesaMovil = () => {
        const menuhamburguesa = document.getElementById('menuderecha');
        const fondo = document.getElementById('editfondo');
        const nav = document.getElementById('nav');
        const scroll = document.getElementById('scroll');

        if (menuhamburguesa.classList.contains('hidden')) {
            menuhamburguesa.classList.remove('hidden');
            fondo.classList.remove('hidden');
            nav.classList.remove('z-20');
            nav.classList.add('z-40');
            scroll.classList.add('overflow-hidden')
        } else {
            menuhamburguesa.classList.add('hidden');
            fondo.classList.add('hidden');
            nav.classList.add('z-20');
            nav.classList.remove('z-40');
            scroll.classList.remove('overflow-hidden')
        }
    }

    const editarPerfilmovil = () => {
        const perfil = document.getElementById('menuperfil');
        const edit = document.getElementById('editdiv');
        perfil.classList.add('hidden');
        edit.classList.remove('hidden');
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
            <div id="editfondo" className="bg-fondo w-full h-screen fixed z-30 hidden"></div>

            <nav id="nav" className={`w-full h-12 bg-principal fixed inline-flex items-center z-20 Mitr`}>
                <img src="./image/Logo3.png" className="w-56 ml-5 fixed hidden lg:block"/>

                
                <div className="container mx-auto justify-center hidden lg:flex">
                    <div className="flex rounded-xl">
                        <button className="flex items-center justify-center px-4 border-r rounded-l-xl bg-white">
                            <svg className="w-6 h-6 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                        </button>
                        <input type="text" className="h-8 w-80 rounded-r-xl pl-3" placeholder="Search..."/>
                    </div>
                </div>
                
                
                <div className="flex items-center lg:hidden">
                    <img onClick={menuPerfilMovil} className="w-9 border fixed left-4 border-black rounded-full cursor-pointer" src="./image/photoprofile.jpg"/>

                    <div className="flex justify-center w-screen">
                        <img className="w-48" src="./image/Logo3.png"/>
                    </div>
                    

                    <button className="text-white fixed right-4" aria-label="Menu" onClick={menuHamburguesaMovil}>
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 5h20a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 7h20a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm0 7h20a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z"/>
                        </svg>
                    </button>

                </div> 
            </nav>

            <div id="menuderecha" className="h-screen w-96 fixed bg-white z-30 float-right right-0 hidden">
                <ul className="mt-80 ml-10 text-xl">
                    <a href="#"><li className="w-screen mb-3 mt-3 hover:text-principal cursor-pointer"><i className="fa-solid fa-house mr-3"></i>Inicio</li></a>
                    <hr />
                    <a href="perfil.html"><li className="mb-3 mt-3 hover:text-principal cursor-pointer"><i className="fa-solid fa-address-card mr-3"></i>Mi Perfil</li></a>
                    <hr />
                    <a href="sugerencia.html"><li className="mb-3 mt-3 hover:text-principal cursor-pointer"><i className="fa-solid fa-users mr-3"></i>Sugerencias</li></a>
                    <hr />
                    <li className="mb-3 mt-3 hover:text-principal cursor-pointer"><i className="fa-solid fa-image mr-3"></i>Subir Foto/Video</li>
                </ul>
            </div>

            <div id="menuperfil" className="h-96 w-96 fixed bg-white float-left left-4 border z-30 mt-12 rounded-b-xl hidden">
                <div className="flex justify-center">
                    <img className="w-28 mt-5 rounded-full border border-black" src="./image/photoprofile.jpg" />
                </div>
                <p className="mt-3 text-center text-lg">@{datosUsuarios.user}</p>
                <p className="mt-5 text-center text-lg"><span className="font-bold">0</span> Siguiendo | <span className="font-bold">0</span> seguidores</p>
                <div className="flex justify-center m-10">
                    <button type="button" onClick={editarPerfilmovil} className="w-32 h-8 bg-principal rounded-xl text-white">Editar perfil</button>&nbsp;&nbsp;&nbsp;
                    <a href="./login.html"><button type="button" className="w-32 h-8 bg-principal rounded-xl text-white">Cerrar sesion</button></a>
                </div>
            </div>

            <div id="editdiv" className="w-weditsmall h-login fixed bg-white z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl hidden md:w-wedit sm:w-weditmovil">
                <i id="cerrar" onClick={cerrar} className="fa-solid fa-xmark text-xl text-red-500 mt-2 ml-3 fixed cursor-pointer"></i>
                <p className="text-center text-xl mt-2">Editar perfil</p>
                <hr className="mt-2 border-gray-300" />
                <p className="mt-3 text-lg text-center font-bold underline decoration-solid">Foto del perfil</p>
                <img id="imagen" src="./image/photoprofile.jpg" className="w-36 m-auto mt-5 rounded-full border border-black" />
                <div className="flex justify-center mt-7">
                    <label htmlFor="input-file" className="cursor-pointer bg-principal hover:bg-red-700 text-white py-2 px-6 rounded-xl">
                        Cambiar Foto
                        <input id="input-file" type="file" className="hidden" />
                    </label>   
                </div>
                <p className="mt-10 text-lg text-center font-bold underline decoration-solid">Nombre de usuario</p>
                <div className="flex justify-center mt-7">
                    <form onSubmit={changeName}>
                    <label htmlFor="input" className="mr-2">Nombre de usuario: &nbsp; &nbsp;</label>
                    <input className="border border-black w-60 h-8 rounded-lg focus:outline-none icon" type="text" placeholder={`@${datosUsuarios.user}`} 
                    name="username" onChange={handleChange} value={formulario.username} required/>
                    <div className="flex justify-center mt-12">
                        <button type="submit" className="w-40 h-10 bg-principal rounded-xl text-white transform duration-300 hover:scale-105">Guardar Cambios</button>
                    </div>
                    </form>
                </div>
                <p className="text-center mt-3">¿Quieres cambiar tu contraseña? <span onClick={contraseña} className="underline cursor-pointer">Pinche aqui</span></p>   
            </div>

            <div id="mensaje" className="w-contraseña h-52 bg-white fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl hidden">
                <i id="contraseña" onClick={cerrarMensaje} className="fa-solid fa-xmark text-xl text-red-500 mt-2 ml-3 fixed cursor-pointer"></i>
                <p className="text-center text-lg mt-1"><i>¡ALERTA!</i></p>
                <hr className="mt-1 border-gray-300" />
                <p className="text-center mt-12 text-lg">Se ha enviado un correo con un enlace <br />para cambiar la contraseña.</p>
            </div>
        </div>
    )
}