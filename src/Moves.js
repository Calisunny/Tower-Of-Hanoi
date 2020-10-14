import React from 'react'
import styles from './Tower.module.css'
const Moves = (props) => {
    
    return (
    <p style={{padding: "0px", margin: "0px"}}>
        <b className={styles.moves}>MOVES</b> <br/>
        <b className={styles.nummove}> {props.moves}</b>
    </p>
    )
}

export default Moves
