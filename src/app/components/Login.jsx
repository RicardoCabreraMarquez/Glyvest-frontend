import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {

  const [ formulario, setFormulario ] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (x) => {
    setFormulario({...formulario, [x.target.name]: x.target.value});
  };

  const handleSubmit = async (x) => {
    x.preventDefault();

    try {
      const response = await fetch('https://glyvest.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formulario)
      });

      if (response.ok) {

        navigate('/home')

        const datos = await response.json();
        
        localStorage.setItem('Datos', JSON.stringify(datos));
      } else {
        alert('usuario y/o contraseña incorrecto')
      }
    } catch (error) {
      console.error('Error:', error);
      // Maneja el error de manera adecuada.
      navigate('/')
    }
  };

  return(
    <div className="flex justify-center items-center h-screen ">
      <div className="login w-login h-login bg-white rounded-2xl shadow-login flex flex-col">
          <h1 className="Mitr text-2xl mt-20 self-center font-bold">Bienvenido a</h1>

          <div className="flex justify-center items-center">
              <img src="./image/Logo2.png" className="w-64 mt-2" />
          </div>

          <form className="self-center" onSubmit={handleSubmit}>
              <div className="container">
                <input className="border-b border-black w-80 h-8 mt-16 focus:outline-none icon" type="text" placeholder="&#xf007;  
                Nombre de usuario*" name="username" value={formulario.username} onChange={handleChange} required /><br />
                <input className="border-b border-black w-80 h-8 mt-5 focus:outline-none icon" type="password" placeholder="&#xf023;  
                Contraseña*" name="password" value={formulario.password} onChange={handleChange} required /><br />
                <p className="text-xs mt-2 Mitr font-bold">¿Has olvidado tu contraseña?</p>
                <div className="text-center mt-12">
                    <button className="bg-principal w-44 h-10 rounded-full text-white transform duration-300 hover:scale-105" type="submit">INICIAR SESION</button><br />
                </div>
                <p className="text-xs mt-10 text-center Mitr font-bold">¿No tienes una cuenta? <Link to="/registrate" ><a className="underline">Registrate</a></Link></p>
              </div>
          </form>
      </div>
    </div>
  )
}