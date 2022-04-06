import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <div className='app__body'></div> */}
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={6}>
            <Feed />
          </Grid>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;