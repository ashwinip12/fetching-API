import React from 'react'

function List() {
    const name=["ashwini","amulya","aish","moulya"]
  return (
    <div>
   {/* <h2>{name[0]}</h2>
    <h2>{name[1]}</h2>
    <h2>{name[2]}</h2>
    <h2>{name[3]}</h2>} */
    
    name.map(name => <h2>{name}</h2>)
   }
    </div>
  )
}

export default List