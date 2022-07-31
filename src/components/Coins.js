import React from 'react'
import { Typography} from '@mui/material'
import millify from "millify";
import Grid from '@mui/material/Grid';




const coins = ({name, symbol, marketCap, iconUrl, price, volume}) => {
    const num = parseInt(marketCap)
    let marketCapApprox = millify(num, {
        precision: 3,
    });

    const slicedName = name.slice(0, 15)

  return (
    <Grid className='coin' cursor="pointer" sx={{height:{xs:'45px', md:'70px'}}} container borderBottom={2} borderColor="#3CC8C8" alignItems="center">

      <Grid justifyItems="center" container  md={4} lg={3} xs={6}>

        <Grid  alignItems="center" gap={1} item container md={6} xs={9}>
          <img className='image' src={iconUrl} alt="" />
          <Typography sx={{fontSize:{xs:'0.7rem', sm:'1rem'}}} textOverflow="true" >{slicedName}</Typography>
        </Grid>

        <Grid  alignItems="center" item justifyContent="left" container md={6} xs={3}>
         <Typography sx={{fontSize:{xs:'0.6rem', sm:'1rem'}}}  >{symbol}</Typography>
        </Grid>

    
      </Grid>
      
      <Grid  container justifyContent="center" 
      alignItems="center" md={2} lg={3} xs={3}  >
        <Typography sx={{fontSize:{xs:'0.6rem', sm:'1rem'}}}>{'$'}{marketCapApprox}</Typography>
   
      </Grid>

      <Grid container justifyContent="center" 
      alignItems="center"  md={2} lg={3} xs={3}>
      <Typography textAlign="center" sx={{fontSize:{xs:'0.6rem', sm:'1rem'}}}  >{'$'}{price}</Typography>
      </Grid>

      <Grid  className='price' sx={{display:{xs:'none', md:'block'}}}  container justifyContent="center"  md={3} xs={3}>
      <Typography pt="10px" textAlign="center" >{'$'}{volume}</Typography>
      </Grid>

    </Grid>


  )
}

export default coins