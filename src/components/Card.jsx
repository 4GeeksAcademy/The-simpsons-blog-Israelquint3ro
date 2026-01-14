import React from 'react'

function Card() {
       const URL_BASE = ('https://thesimpsonsapi.com/api')

     const carta = async(()=>{
      try {
        const response = await fetch('${URL_BASE}/characters')
        if(!response.ok){
            throw new Error("no se pudieron obtener los personajes")
        }
      } catch (error) {
        
      }

     })
    <div>
      
    </div>
  return (
  
  )
}

export default Card
