import React from 'react'

const PizzaItem = ({name, image, price}) => {
  return (
    <div className='pizzaItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price} Ft</p>
    </div>
  )
}

export default PizzaItem