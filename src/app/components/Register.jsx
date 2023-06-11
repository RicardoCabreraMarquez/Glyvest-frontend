import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Register() {

  const [ formulario, setFormulario ] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (x) => {
    setFormulario({...formulario, [x.target.name]: x.target.value})
  };

  const handleSubmit = (x) => {

    x.preventDefault()

    if (formulario.password === formulario.repeatPassword) {

      delete formulario.repeatPassword;

      fetch('https://glyvest.onrender.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formulario)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate('/')
        })
        .catch((error) => {
          console.error(error);
      });
    } else {
      alert('La contraseña no coincide');
    }
  };

  return(
    <div className="flex justify-center items-center h-screen">
      <div className="login w-login h-login bg-white rounded-2xl shadow-login flex flex-col">
          <h1 className="Mitr text-2xl mt-20 self-center font-bold">Registrate en</h1>

          <div className="flex justify-center items-center">
              <img src="./src/assets/image/Logo2.png" className="w-64 mt-2" />
          </div>
        
          <form className="self-center" onSubmit={handleSubmit}>
            <div className="container">
                <input className="border-b border-black w-80 h-8 mt-16 focus:outline-none icon" 
                type="text" placeholder="&#xf508;  Nombre*" name="name" value={formulario.name} onChange={handleChange} required /><br />
                <input className="border-b border-black w-80 h-8 mt-5 focus:outline-none icon" 
                type="text" placeholder="&#xf007;  Nombre de usuario*" name="username" value={formulario.username} onChange={handleChange} required /><br />
                <input className="border-b border-black w-80 h-8 mt-5 focus:outline-none icon" 
                type="email" placeholder="&#xf0e0;  Email*" name="email" value={formulario.email} onChange={handleChange} required /><br />
                <input className="border-b border-black w-80 h-8 mt-5 focus:outline-none icon" 
                type="password" placeholder="&#xf023;  Contraseña*" name="password" value={formulario.password} onChange={handleChange} required /><br />
                <input className="border-b border-black w-80 h-8 mt-5 focus:outline-none icon" 
                type="password" placeholder="&#xf023;  Repite la Contraseña*" name="repeatPassword" value={formulario.repeatPassword} onChange={handleChange} required /><br />
                <div className="text-center mt-12">
                  <button className="bg-principal w-44 h-10 rounded-full text-white" type="submit">REGISTRATE</button><br />
                </div>
            </div>
          </form>
      </div>
    </div>
  )
}