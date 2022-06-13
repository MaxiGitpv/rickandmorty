import React, { useState } from 'react'



const InputSearch = ({setSearchLocation}) => {

    // const [locationSearch, setLocationSearch] = useState ()

    const searchLocation = e => {

        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }


  return (
    <form onSubmit={searchLocation} className="form">
      <input type="text" className='form_input'/>
      <button className='form_btn'>Search</button>
    </form>
  )
}

export default InputSearch