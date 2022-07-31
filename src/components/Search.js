import React from 'react'
import { Box } from '@mui/material'

const Search = ({setInput, input}) => {
  return (
    <Box display="flex" mb="5px" sx={{height:{md:'70px', xs:'50px'}}} alignItems="center" justifyContent="center" width="100%" className='searchBox'>
      <form action="">
        <input 
        placeholder='Search Currency' 
        type="text"
        onChange={(e)=> setInput(e.target.value)}  />
      </form>
    </Box>
  )
}

export default Search