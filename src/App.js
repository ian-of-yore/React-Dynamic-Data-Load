import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <div className="user-container">
      <h1>External Users: {users.length}</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: "2px solid maroon", borderRadius: "10px", margin: "10px", backgroundColor: "white" }}>
      <h3>Name: {props.name}</h3>
      <h5>Email: {props.email} </h5>
    </div>
  )
}


export default App;
