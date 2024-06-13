import React, { useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { NavLink, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


let b1 = {
  border : "5px solid red"
}
let b2 = {
  border : "5px solid blue"
}

let b3 = {
  border : "5px solid green"
}

let b4 = {
  border : "5px solid purple"
}

function Error() {
    return (
      <>
      <Header />
      <div className='min-h-[90vh]'>
        <div className='min-h-[90vh] flex justify-center items-center flex-col'>
        <p className='text-blue-500 font-bold text-[2rem]'>Error 404 , Page not Found.</p>
        <p className='text-gray-500 pb-[5%]'>You may have entered an invalid URL or the page does not exist.</p>
        
        <Stack spacing={2} direction="row">
        <NavLink to={"/"}><Button variant="outlined">Go to Dashboard</Button></NavLink>
        </Stack>
        </div>
      </div>
      </>
)

}

export {Error}