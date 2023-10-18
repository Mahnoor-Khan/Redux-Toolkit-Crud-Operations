import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

function App() {
  const [ name, setName] = useState("")
  const [ username, setUsername] = useState("")
  const [ newUsername, setNewUsername] = useState("")
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)
  return (
    <div className="App">
      <div className='addUser'>
        <input type='text' placeholder='Name...' onChange={(e) => setName(e.target.value)}/>
        <input type='text' placeholder='Username...' onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={() => {dispatch(addUser({id: uuidv4(),name:name ,username:username }))}}>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList?.map((user) => (<div>
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          <input type='text' placeholder='New Username...' onChange={
            (e) => setNewUsername(e.target.value)}
            />
            <button onClick={() => {dispatch(updateUsername({id: user.id, username: newUsername}))}}>Update Username</button>
            <button onClick={() => {dispatch(deleteUser({id : user.id}))}}>Delete User</button>
          </div>))}
      </div>
    </div>
  );
}

export default App;
