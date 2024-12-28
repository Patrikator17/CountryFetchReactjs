import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

const CountriesContainer = ({query}) => {
    const [countriesData, setCountriesData] = useState([])
    
    // fetch('https://restcountries.com/v3.1/all')
    // .then((res) => res.json())
    // .then((data) => {
    //     countriesData = data
    //     console.log(countriesData);
    // })
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
            setCountriesData(data)
            console.log(countriesData)
        })
    },[])

  return (
    <>
        <div className='countries-container'>
            {
                countriesData.filter((country) => country.name.common.toLowerCase().includes(query))
                .map((country) => {
                    return(
                        <CountryCard
                            key={country.name.common}
                            name={country.name.common}
                            flag={country.flags.svg}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default CountriesContainer