import React from 'react'
import styles from './Tower.module.css';
const Restart = (props) => {
    return (
        <button onClick={props.restart}
         className={styles.restart}>
            <b> RESTART </b>
        </button>
    )
}

export default Restart
