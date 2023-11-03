// src/App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'; // Importa componentes de React-Bootstrap
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';
import UserDelete from './components/UserDelete';
import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () => {
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
      <Container>
        <Navbar bg="light" expand="lg"> {/* Aplica un estilo de fondo */}
          <Navbar.Brand>CRUD de Usuarios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Lista de Usuarios</Nav.Link> {/* Utiliza Nav.Link para enlaces */}
              <Nav.Link as={Link} to="/add">Registrar Usuario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<UserList users={users} deleteUser={deleteUser} editUser={editUser} />} />
          <Route path="/add" element={<UserForm addUser={addUser} />} />
          <Route path="/edit" element={selectedUser && <UserEdit user={selectedUser} updateUser={updateUser} />} />
          <Route path="/delete" element={selectedUser && <UserDelete user={selectedUser} deleteUser={deleteUser} />} />
        </Routes>
      </Container>
    </Router>
  );
}