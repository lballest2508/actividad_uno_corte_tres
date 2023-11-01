// src/components/UserEdit.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserEdit({ user, updateUser }) {
  const [name, setName] = useState(user.name);
  const [apellido, setApellido] = useState(user.apellido);

    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && apellido) {
      updateUser({ id: user.id, name, apellido });
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="apellido"
          placeholder="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default UserEdit;
