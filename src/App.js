import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './services/firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User Is Logged I
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl
        }))
      } else {
        // User Is Logged Out
        dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={6}>
              <Feed />
            </Grid>
            <Grid item xs={3}>
              <Widgets />
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default App;