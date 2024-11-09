import React from 'react'
import cssStyle from "./about.module.css"

console.log(cssStyle,"CSS-Style")

const AboutPage = () => {
  return (
    <div>
        <h2 className={cssStyle.black}>About Me </h2>
      <p className={cssStyle.blue}>
      Hello! I am Umair Dilshad, a passionate web developer specializing in front-end
       technologies. My journey in web development has equipped me with a solid
        foundation in HTML, CSS, and JavaScript, alongside proficiency in frameworks 
        like React. I thrive on crafting beautiful and responsive websites that deliver
         exceptional user experiences, ensuring that every detail contributes to the 
         overall functionality and aesthetics.</p>
      
      <p className={cssStyle.blue}>
      I believe in the power of continuous learning and am dedicated to staying updated 
      with the latest trends and technologies in the ever-evolving web landscape. This
       commitment to growth allows me to create innovative solutions that not only meet 
       client needs but also drive business success online. My goal is to harness
        my skills to build impactful websites that resonate with users and elevate brands.</p>

      <p className={cssStyle.blue}> Beyond coding, I have a keen interest in design principles, which I integrate 
      into my projects to enhance their visual appeal. When I am not immersed in 
      development, you can find me exploring the latest tech trends, watching tutorial 
      videos, or enjoying quality time with family and friends. I am excited to connect 
      and collaborate on projects that push the boundaries of whats possible in 
      web development!
        </p>
    </div>
  )
}

export default AboutPage