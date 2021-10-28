import React, { useState, useCallback } from "react"

/* import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'; */

import { useDispatch } from "react-redux"
import { addToCart } from "../../features/CartSlice"

import { useTheme } from "../../context/context"

import useFetch from "../../hooks/useFetch"
import NavBar from "../navBar/NavBar"

import "./CountryTable.scss"


function CountryTable() {
    const[search, setSearch] = useState('')
    const dispatch = useDispatch()
    const { theme } = useTheme()

    const handleAddToCart = (n: any) => {
        dispatch(addToCart(n))
    }

    const [data, loading, error ] = useFetch(
        "https://restcountries-v2.herokuapp.com/all"
      );

      const handleChange = useCallback(
          (e) => {
            setSearch(e.target.value)
          },
          [],
      )

      if(error) return <h3>404</h3>
    return (
        <>
        <NavBar
         placeholder='Search country by the name...'
         handleChange={handleChange}
         />
        <table>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Population</th>
                    <th>Language</th>
                    <th>Region</th>
                    <th>ADD</th>
                </tr> 
            </thead>
            {loading ? <h3 style={{marginTop: '40px' }}>Loading...</h3>: data.filter((val) => {
                if(search === ''){
                    return val
                } else if (val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((n, idx) => (
                <tbody>
                    <tr key={idx}>
                        <td>
                            <img width={'150px'} src={n.flag} alt={n.name} />
                        </td>
                        <td>{n.name}</td>
                        <td>{n.population}</td>
                        <td>{n.languages.map((l) => (
                            <li>{l.name}</li>
                        ))}</td>
                        <td>{n.region}</td>
                        <td>
                            <button style={{backgroundColor: theme}} onClick={() => handleAddToCart(n)}>ADD</button>
                        </td>
                    </tr>
                </tbody>
            )).slice(0, 10)}
             {/*  <Stack className="pagination" spacing={2}>
                 <Pagination count={10} color="secondary"/>
              </Stack> */}
        </table>
        </>
    )
}

export default CountryTable
