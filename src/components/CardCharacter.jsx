import React from 'react'
import useCharacterApi from '../hooks/useCharacterApi'


const CardCharacter = ({resident}) => {

  // console.log(resident)
const character = useCharacterApi(resident)

// console.log(character)

  return (
   <article className='card'>
    <img src={character?.image} alt="" />
    <h2>{character?.name}</h2><hr />
    
    <p><span>Status: </span>  {character?.status}</p>
    <p><span>Origin: </span> {character?.origin.name}</p>
    <p><span>Episodes: </span> {character?.episode.length}</p>


   </article>
  )
  
}

export default CardCharacter