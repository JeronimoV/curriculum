import styles from "./styles/card.module.css"

function Card({tecnologia, experiencia, img}){
    return (
        <div className={styles.div}>
            <div className={styles.h1}>
                <h1>{tecnologia}</h1>
            </div>
            <div className={styles.h3}>
                <h3>{experiencia}</h3>
            </div>
            <div className={styles.img}>
                <img draggable="false" src={img} alt="" />
            </div>
        </div>
    )
}

export default Card