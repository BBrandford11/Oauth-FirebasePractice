
import { useState } from 'react';
import './App.css';
import Auth from './components/Authentication';
import { auth } from './firebase/firebase-config';
import {  onAuthStateChanged, signOut} from "firebase/auth";
import { Button } from '@mui/material';
import { async } from 'q';
 
function App() {
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="App">

    <Auth />
    <p>user logged in</p>
    {user?.password}
    <Button onClick={logout}>Log out</Button>
    </div>
  );
}

export default App;
