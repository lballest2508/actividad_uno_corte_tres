// src/App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';
import UserDelete from './components/UserDelete';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (userId) => {
    setSelectedUser(users.find((user) => user.id === userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setSelectedUser(null);
  };

  return (
    <Router>
      <div className="container">
        <h1>CRUD de Usuarios</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Lista de Usuarios</Link>
            </li>
            <li>
              <Link to="/add">Registrar Usuario</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UserList users={users} deleteUser={deleteUser} editUser={editUser} />}/>
          <Route path="/add" element={<UserForm addUser={addUser} />} />
          <Route path="/edit" element={selectedUser && <UserEdit user={selectedUser} updateUser={updateUser} />}/>
          <Route path="/delete" element={selectedUser && <UserDelete user={selectedUser} deleteUser={deleteUser} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
