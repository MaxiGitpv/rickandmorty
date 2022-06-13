import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'


const RickAndMortyApp = () => {

const [searchLocation, setSearchLocation] = useState()

const location = useLocationApi(searchLocation)

    // console.log(location)
    
    
    return (
    <div className='Rick'>
        <InputSearch setSearchLocation={setSearchLocation}/>
        <LocationInfo location={location}/>
        <div className='cards'>
          {location?.residents.map(resident => (
            <CardCharacter 
            resident={resident}
            key={resident}
            />
          ))}
        </div>
    
    </div>
  )
}

export default RickAndMortyApp