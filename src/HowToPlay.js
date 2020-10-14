import styles from './Tower.module.css';
import React from 'react'

const HowToPlay = (props) => {
    return (
        <button className={styles.howToPlay} onClick={props.displayHelp} >
            <p style={{margin: "0px",padding: "0px"}}>
                <b>HOW      TO</b>  <br/>
                <b style={{margin: "0px",padding: "0px"}}>PLAY</b>
            </p>
        </button>
    )
}

export default HowToPlay
