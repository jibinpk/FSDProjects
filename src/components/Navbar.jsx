import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                &nbsp;
                <br /><br /><br />
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>Blogs</Typography>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/add'>Add Blog</Link>
                </Button>
                &nbsp;
                
                &nbsp;
            
                
                &nbsp;
                
                &nbsp;
               
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/'>Home</Link>
                </Button>
               

                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar