import {useEffect, useState} from "react";
import axios, {Axios} from "axios";
import App from "../App";
import Navbar from "./Navbar";
import {Route} from "react-router-dom";

export default function Stocks() {
    const [stocks, setStocks] = useState([])
    const [search,setSearch] = useState('');

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false\n"
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setStocks(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    console.log(stocks)

    // const filterArr = stocks.filter((e)=> (
    //     e.companyName.toLowerCase().includes(search.toLowerCase())
    // ))

    const filterArr = stocks.filter((e)=>{
        return e.name.toLowerCase().includes(search.toLowerCase())
    })


    return(
        <div>
            <Navbar/>
            <div className='input'>
                <input className='searchCrypto' type="text" onChange={(e)=>{
                    setSearch(e.target.value)
                }} placeholder='search you crypto'/>
            </div>
            <div className='allCoins'>
                <h3>Coin</h3>
                <h3>Market Cap</h3>
                <h3>Current Price</h3>
                <h3>Lowest in last 24h</h3>
                <h3>Highest in  last 24h</h3>
            </div>
            {filterArr.map((e)=>(
                <div className='allCoins' key={e.id}>
                    <div className='coin-arrange'>
                        <div className='a'>
                            <h5> {<img style={{width: "25px", height : "25px"}} src={e.image} alt=""/>} </h5>
                        </div>
                        <div className='b'>
                            <h5>{e.name}</h5>
                        </div>
                    </div>
                    <h5>#{e.market_cap_rank}</h5>
                    <h5>{e.current_price} $</h5>
                    <h5>{e.low_24h} $</h5>
                    <h5>{e.high_24h} $</h5>
                </div>

            ))}
        </div>
    )
}