import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const btnIncrease = () => setCount(count + 1);
  const btnDecrease = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={btnIncrease} className="btn">Increase</button>
      <button onClick={btnDecrease} className="btn">Decrease</button>
    </div>
  )
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
