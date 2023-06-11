import { useState } from 'react';

export function Prueba() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {

    console.log("Ok - Peticion - Glyvest")

    if (selectedFile) {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      fetch('url_de_tu_api', {
        method: 'POST',
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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Foto</button>
    </div>
  )
}