import React from 'react'

const LocationInfo = ({location}) => {

// console.log(location)

  return (
    <div className='header_location'>
        <h2>Rick And Morty</h2>
        <ul>
            <li><span>Nombre: </span>{location?.name}</li>
            <li><span>Tipo: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo