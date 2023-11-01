// src/components/UserForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && apellido) {
      addUser({ name, apellido });
      setName('');
      setApellido('');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default UserForm;
