import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchData, searchOptions } from './utils/fetchData'
import Coins from './components/Coins'
import { Typography, Grid} from '@mui/material'
import Search from './components/Search'

const App = () => {
    const [coinData, setcoinData] = useState([])
    const [input, setInput] = useState("")

    // const [filterData, setFilteData] = useState([])

    const filterData = coinData.filter(item=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
    });
    console.log(input);




    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'

    useEffect(() => {

        const fetchCryptoData = async()=>{
            const data = await fetchData(url, searchOptions);


            setcoinData(Object.entries(data)[1][1].coins);
            console.log(data);
            // console.log(Object.entries(data)[1][1].coins);
        }
        fetchCryptoData();
        
    }, []);
  return (
      <div>
          <Search setInput={setInput} input={input}/>

            <Grid  container  borderBottom={2}>
                <Grid  container  md={4} lg={3} xs={6}>

                <Grid  alignItems="center" gap={1} item container md={6} xs={9}>
                    <Typography sx={{fontSize:{xs:'0.7rem', sm:'1rem'}}} textOverflow="true" >Name</Typography>
                </Grid>

                <Grid  alignItems="center" item justifyContent="left" container md={6} xs={3}>
                <Typography sx={{fontSize:{xs:'0.6rem', sm:'1rem'}}}>Symbol</Typography>
                </Grid>


                </Grid>

                <Grid  container justifyContent="center" 
                alignItems="center" md={2} lg={3} xs={3}  >
                <Typography sx={{fontSize:{xs:'0.6rem', sm:'1rem'}}}>Market Cap.</Typography>

                </Grid>

                <Grid container justifyContent="center" 
                alignItems="center"  md={2} lg={3} xs={3}>
                <Typography textAlign="center" sx={{fontSize:{xs:'0.6rem', sm:'1rem'}}} >Price</Typography>
                </Grid>

                <Grid  className='price' sx={{display:{xs:'none', md:'block'}}}  container justifyContent="center"  md={3} xs={3}>
                <Typography pt="10px" textAlign="center">Volume</Typography>
                </Grid>

            </Grid>

          {filterData.map((item, key)=> (
              <Coins marketCap={item.marketCap} key={key} symbol={item.symbol} name={item.name} iconUrl={item.iconUrl} price={item.price} volume={Object.entries(item)[14][1]}/>
          ))}
      </div>
  )
}

export default App