import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaSass,FaGithub,FaLinkedin,FaGithubSquare,FaCodepen} from "react-icons/fa"
const Aboutdata = [
    {
        id:1,
        image:"images2/me.jpg",
        name:"Venkatesh Naik",
        mail:"naikvenkatesh723@gmail.com",
        phoneno:"+917718025346",
        skills:[
            {
                name:"HTML",
                icon:<FaHtml5 className = "icon"/>
            },
            {
                name:"CSS",
                icon:<FaCss3Alt className = "icon"/>
            },
            {
                name:"JS",
                icon:<FaJs className = "icon"/>
            },
            {
                name:"REACTJS",
                icon:<FaReact className = "icon"/>
            },
            {
                name:"SCSS",
                icon:<FaSass className = "icon"/>
            },
            {
                name:"GITHUB",
                icon:<FaGithub className = "icon"/>
            }
        ],
        resume:"",
        story:"Story begin on 1st june of 2021 where i decided to drop out of college. becuase, even after completing my two year of bscit i cant code well and i know why, becuase i'm not building anything and im not coding anything from myself so after drop out i started learning html,css, and js well so that i can build something interesting ,which will interact with the user. and then i learned reactjs which makes things easier to build and then i started enjoying it and i build more projects to build up a confidence in react and javascript and im still building and exploring things",
        social:[
            {
                icon:<FaCodepen className = "icon"/>,
                link:"https://codepen.io/560_venkatesh"
            },
            {
                icon:<FaLinkedin className = "icon"/>,
                link:"https://www.linkedin.com/in/venkatesh-naik-1270b3215/"
            },
            {
                icon:<FaGithubSquare className = "icon"/>,
                link:"https://github.com/venkatesh-na?tab=repositories"
            }
        ]
    }
]
export default Aboutdata;