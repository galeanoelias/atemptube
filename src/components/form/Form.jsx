// import React, { useState } from 'react';

// const VideoDownloader = () => {
//   const [url, setUrl] = useState('');
//   const [message, setMessage] = useState('');

//   const handleDownload = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/download', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url }),
//       });

//       if (!response.ok) {
//         throw new Error('Error en la descarga');
//       }

//       setMessage('Descarga exitosa, revisa tu carpeta de descargas.');
//     } catch (error) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded shadow-lg">
//       <h1 className="text-xl font-bold mb-4">Descargador de Videos de YouTube</h1>
//       <form onSubmit={handleDownload}>
//         <label className="block mb-2">
//           <span className="text-gray-700">URL del Video:</span>
//           <input
//             type="text"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             required
//             className="block w-full p-2 mt-1 border border-gray-300 rounded"
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//         >
//           Descargar Video
//         </button>
//       </form>
//       {message && <p className="mt-4 text-red-500">{message}</p>}
//     </div>
//   );
// };

// export default VideoDownloader;
// src/components/VideoDownloader.jsx

import React, { useState } from 'react';

const VideoDownloader = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),  // Enviar como JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en la descarga');
      }

      setMessage('Descarga exitosa, revisa tu carpeta de descargas.');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">Descargador de Videos de YouTube</h1>
      <form onSubmit={handleDownload}>
        <label className="block mb-2">
          <span className="text-gray-700">URL del Video:</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Descargar Video
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default VideoDownloader;
