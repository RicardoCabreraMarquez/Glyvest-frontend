import { useState, useEffect } from 'react';

export function MenuDerecha() {

  const [datosUsuarios, setDatosUsuarios] = useState({});

  useEffect(() => {
    setDatosUsuarios(JSON.parse(localStorage.getItem('Datos')));
  }, [])

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {

    console.log("Ok - Peticion - Glyvest")

    if (selectedFile) {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      fetch('https://glyvest.onrender.com/file', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Authorization': `Bearer ${datosUsuarios.token}`,
          },
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manejar la respuesta de la API después de subir la foto
        console.log(data);
      })
      .catch(error => {
        // Aquí puedes manejar cualquier error que ocurra durante la petición
        console.error(error);
      });
    }
  };

  return(
    <div className="h-screen w-setting fixed top-0 right-0 border-l border-principal hidden lg:block">
        <ul className="mt-96 ml-14 text-xl Mitr">
            <a href="#"><li className="mb-4 mt-4 hover:text-principal cursor-pointer duration-300 transition-all hover:ml-3"><i className="fa-solid fa-house mr-3"></i>Inicio</li></a>
            <a href="perfil.html"><li className="mb-4 mt-4 hover:text-principal cursor-pointer duration-300 transition-all hover:ml-3"><i className="fa-solid fa-address-card mr-3"></i>Mi Perfil</li></a>
            <a href="sugerencia.html"><li className="mb-4 mt-4 hover:text-principal cursor-pointer duration-300 transition-all hover:ml-3"><i className="fa-solid fa-users mr-3"></i>Sugerencias</li></a>
            <li>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Subir Foto</button>
            </li>
        </ul>
    </div>
  )
}