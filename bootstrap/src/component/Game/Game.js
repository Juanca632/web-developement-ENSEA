import { useState } from 'react';
import React from 'react';
import './Game.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Game = ({ name, img, year }) => {
  // Estado local para manejar los valores del juego
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newImg, setNewImg] = useState(img);
  const [newYear, setNewYear] = useState(year);

  // Función para abrir el modal de imagen
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal de imagen
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para abrir el modal de edición
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  // Función para cerrar el modal de edición
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Función para manejar el formulario de edición
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Actualizar los valores del juego con los nuevos datos
    setNewName(newName); // Actualiza el nombre del juego
    setNewImg(newImg);   // Actualiza la imagen del juego
    setNewYear(newYear); // Actualiza el año del juego
    closeEditModal();    // Cerrar el modal después de guardar
  };

  return (
    <React.Fragment>
      <div className="game">
        <div className="card-game">
          {/* Frente de la tarjeta */}
          <div className="front">
            <img src={newImg} alt={newName} />
            <div className="text">
              <p className='name'>{newName}</p>
              <p className='year'>{newYear}</p>
            </div>
          </div>

          {/* Reverso de la tarjeta */}
          <div className="back">
            <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
            </div>
            <div className='buttons-back'>
                <Button variant="light" onClick={openModal}>View</Button>
                <Button variant="dark" onClick={openEditModal}>Edit</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar la imagen a pantalla completa */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <img src={newImg} alt={newName} className="modal-img" />
        </div>
      )}

      {/* Modal de edición */}
      {isEditModalOpen && (
        <div className="modal-overlay" onClick={closeEditModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Game</h2>
            <form onSubmit={handleEditSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)} // Actualiza el nombre
                />
              </div>
              <div>
                <label htmlFor="img">Image URL:</label>
                <input
                  type="text"
                  id="img"
                  value={newImg}
                  onChange={(e) => setNewImg(e.target.value)} // Actualiza la imagen
                />
              </div>
              <div>
                <label htmlFor="year">Year:</label>
                <input
                  type="text"
                  id="year"
                  value={newYear}
                  onChange={(e) => setNewYear(e.target.value)} // Actualiza el año
                />
              </div>
              <div>
                <Button variant="primary" type="submit">Save Changes</Button>
                <Button variant="secondary" onClick={closeEditModal}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { Game };
