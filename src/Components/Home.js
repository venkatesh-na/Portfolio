import React, {useRef, useEffect} from "react"
import Rellax from "rellax"
import {Power3,TimelineLite} from "gsap"
import "./Home.css"

const Home = ()=>{
    let text = useRef()
    useEffect(()=>{
        new Rellax(".rellax") 
        let t = new TimelineLite()
            const h1 = text.firstElementChild;
            const p = h1.nextSibling
            const button = p.nextSibling
            const extra = text.lastElementChild
            t
            .from(h1,1,{opacity:0,y:40,ease:Power3.easeOut})
            .from(p,1.2,{opacity:0,y:40,ease:Power3.easeOut},.3)
            .from(button,1.6,{opacity:0,y:40,ease:Power3.easeOut},.6)
            .from(extra,1,{opacity:0,x:-40,ease:Power3.easeOut},.9)
        },[])
        const handleMail = ()=>{
            window.location = "mailto:naikvenkatesh723@gmail.com"
        }
    return (
       <div className= "Home">
           <div ref = {el => text=el} className  = "text rellax" data-rellax-speed = "1">
                <h1>I'M VENKATESH NAIK</h1>
                <p>A Self thought Frontend web developer</p>
                <button onClick = {handleMail}>Contact me</button>
                <div className = "extra-text"></div>
           </div>
            <div className = "float one rellax" data-rellax-speed = "7">
                <div></div>
            </div>
            <div className = "float two rellax" data-rellax-speed = "7">
                <div></div>
            </div>
            <div className = "float three rellax" data-rellax-speed = "7">
                <div></div>
            </div>
            <div className =  "four rellax" data-rellax-speed = "3"></div>
            <div className =  "five rellax" data-rellax-speed = "3"></div>
            <div className = "six rellax" data-rellax-speed = "3"></div>
       </div>
    )
}
export default Home;