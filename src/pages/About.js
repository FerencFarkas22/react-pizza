import React from 'react';
import AboutBackground from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
import {motion} from "framer-motion"

const About = () => {
  return (
    <motion.div 
    className='about'
    initial={{opacity:0}} 
     animate={{opacity: 1}}
    >
      <div className="aboutTop" style={{ backgroundImage: `url(${AboutBackground})` }}></div>


      <div className="aboutContainer">
        <div className="aboutLeft">
        <h1>Rólunk</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugit nihil aut iusto, neque, id recusandae maiores vel incidunt saepe, quaerat qui atque culpa officia deleniti aliquid dicta minus molestiae cum expedita assumenda. Reprehenderit, veritatis excepturi distinctio repudiandae quisquam ipsum? Earum doloremque non perspiciatis exercitationem laboriosam est mollitia aliquid autem, dolore, neque velit iure tenetur quasi optio itaque deleniti odio vero recusandae, amet illum quos ut ex! Veritatis vero necessitatibus rerum impedit deserunt, reiciendis rem delectus! Ipsum, expedita atque dolor ducimus odio suscipit vero repellat? In cupiditate, nostrum debitis odio, aut deserunt inventore ratione maiores nobis assumenda est a velit?</p>
        </div>
      <hr className='line'/>
        <div className="aboutRight">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li><hr />
            <li>Lorem ipsum dolor sit amet.</li><hr />
            <li>Lorem ipsum dolor sit amet.</li><hr />
            <li>Lorem ipsum dolor sit amet.</li><hr />
          </ul>
        </div>

      </div>

    </motion.div>
  )
}

export default About