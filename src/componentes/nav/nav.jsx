import styles from "./styles/nav.module.css"
import logo from "./styles/logo.png"
import { useState } from "react"

function Nav(){
        const [backgroundColor, setBackgroundColor] = useState("#131313")
        const [transition, setTransition] = useState("1s")
        const estilos = {
            backgroundColor: backgroundColor,
            transition:transition
        }

    function scrollTechnologies(){
        window.scroll(0, 1950)
    }
    function scrollProyects(){
        window.scroll(0, 1000)
    }
    function scrollContact(){
        window.scroll(0, 3000)
    }
    function scrollTop(){
        window.scroll(0, 0)
    }
    

    window.onscroll = function desvancerer(){
        let scrolldistance = document.documentElement.scrollTop
        if(scrolldistance >= 100 && window.screen.width > 900){
            setBackgroundColor(null)
            setTransition("1s")
        }
        if(scrolldistance < 100 && window.screen.width > 900){
            setBackgroundColor("#131313")
            setTransition("1s")
        }
    }
    return(
        <div className={styles.contenedor}  style={estilos}>
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