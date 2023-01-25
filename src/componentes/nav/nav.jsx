import styles from "./styles/nav.module.css"
import logo from "./styles/logo.png"
import { useState } from "react"

function Nav(){
    const [backgroundColor, setBackgroundColor] = useState("#131313")
    const [position, setPosition] = useState("relative")
    const [transition, setTransition] = useState("1s")

    function scrollTechnologies(){
        window.scroll(0, 1975)
    }
    function scrollProyects(){
        window.scroll(0, 900)
    }
    function scrollContact(){
        window.scroll(0, 3090)
    }
    function scrollTop(){
        window.scroll(0, 0)
    }
    window.onscroll = function desvancerer(){
        let scrolldistance = document.documentElement.scrollTop
        if(scrolldistance >= 100){
            setBackgroundColor(null)
            setPosition("fixed")
            setTransition("1s")
        }
        if(scrolldistance < 100){
            setBackgroundColor("#131313")
            setPosition("fixed")
            setTransition("1s")
        }
    }
    return(
        <div className={styles.contenedor}  style={{backgroundColor: backgroundColor, position: position, transition: transition}}>
            <div>
                <nav className={styles.nav}>
                    <img onClick={() => scrollTop()} src={logo} alt="" />
                    <h3 onClick={() => scrollContact()} >Contact</h3>
                    <h3 onClick={() => scrollProyects()}>Proyects</h3>
                    <h3 onClick={() => scrollTechnologies()}>knowledge</h3>
                </nav>
            </div>
            <a className={styles.descargarCV} href="https://drive.google.com/file/d/1BUQ68zJrOqxKJ2Ns-QRQNAz8zvJC55HO/view?usp=sharing"><button>Download CV</button></a>
        </div>
    )
}

export default Nav