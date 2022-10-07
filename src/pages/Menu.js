import React from 'react'
import PizzaItem from '../components/PizzaItem';
import {PizzaList} from '../PizzaList';
import "../styles/Menu.css"
import {motion, useTransform, useViewportScroll,} from "framer-motion"


const Menu = () => {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 0.9]);

  return (
    <motion.div 
    initial={{opacity:0}} 
     animate={{opacity: 1, backgroundColor: ['#fff', '#242629'], transition:{duration:1}}}
    className='menu'>

      <div className="menuTitle">Étlap</div>

      <motion.div style={{ scale }} 
      className="menuList">
        {PizzaList.map((pizza)=>{
          return(
            <PizzaItem 
            name={pizza.name}
            image={pizza.image}
            price={pizza.price}/>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Menu