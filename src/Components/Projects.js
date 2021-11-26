import "./project.css"
import Data from "./Data"
import {FaGithub,FaEye} from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Projects = ()=>{
    useEffect(()=>{
        AOS.init({offset:100,duration:1000})
    },[])
    return (
    <div className = "projects">
        <h1>Projects</h1>
        <section className = "projects-container">
            {
                Data.map((data)=>{
                    const {id,name,stack,image,website,githubrepo,description} = data
                    return (
                        <article data-aos = "fade-up" className = "project-card" key = {id}>
                            <div className = "glass">
                                <div className = "img-container">
                                        <img src = {image} alt = {name}/>
                                </div>
                                    <p>{name}</p>
                                    <ul>
                                        {stack.map((list,index)=>{
                                            return <li key = {index}>{list}</li>
                                        })}
                                    </ul>
                                    <p>{description}</p>
                                    <div className = "btn-container">
                                        <a href = {website} target = "_blank" rel = "noopener noreferrer"><FaEye className = "preview"/>Preview</a>
                                        <a href = {githubrepo} target = "_blank" rel = "noopener noreferrer"><FaGithub className = "repo"/>Github repo</a>
                                    </div>
                            </div>
                        </article>
                    )
                })
            }
        </section>
</div>
    )
}
export default Projects;