import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavBar from './components/NavBar';

const App = () => {

  const handleClick = () => {
    console.log('clicked')
  }
  return (<div>
   <NavBar />
  </div>
    
  )
}

export default App