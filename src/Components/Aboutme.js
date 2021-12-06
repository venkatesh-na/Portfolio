import React, { useEffect } from "react"
import "./Aboutme.css"
import Aboutdata from "./Aboutdata";
import AOS from "aos"
import resume from "../portfolioVN.pdf"
const Aboutme = ()=>{
    useEffect(()=>{
        AOS.init({offset:100,duration:500,easing:"ease-out"})
    },[])
    return (
        <>
        <div style = {{color:"white"}} className = "Aboutme">
            <h1 className = "about-title">About Me</h1>
            {
                Aboutdata.map((data)=>{
                    const {id,image,name,mail,phoneno,skills,story,social} = data
                    return (
            <section key = {id}>
                <div data-aos = "fade-right" className = "my-image">
                    <img src = {image} alt = {name}/>
                </div>
                <div data-aos = "fade-left" className = "contact">
                    <h1>{name}</h1>
                    <a href =  {`mailto:${mail}`} title = "call to venkatesh">naikvenkatesh723@gmail.com</a>
                    <a href = {`tel:${phoneno}`} title = "mail to venkatesh">+917718025346</a>
                </div>
                <div data-aos = "fade-up" className = "skills">
                    <h1>Skills</h1>
                    <ul>
                        {skills.map((skill,i)=>
                        {
                            return (
                        <li key = {i}>
                            <p className = "icon">{skill.icon}</p>
                            <p>{skill.name}</p>
                        </li>)
                        })}
                    </ul>
                </div>
                <div data-aos =  "fade-left" className = "story">
                    <h1>Story</h1>
                    <p>{story}</p>
                </div>
                <div data-aos = "fade-up" className = "resume">
                    <h1>Resume</h1>
                    <a href = {resume} download>download</a>
                </div>
                <div data-aos = "fade-left" className = "social">
                        <h1>Social</h1>
                        <ul>
                            {social.map((s,i)=><li key = {i}><a href = {s.link}>{s.icon}</a></li>)}
                        </ul>
                </div>
            </section>
                    )
                })
            }
        </div>
        </>
    )
}
export default Aboutme;