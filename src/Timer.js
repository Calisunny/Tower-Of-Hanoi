
import styles from './Tower.module.css';
import React from 'react'

const Timer = () => {
    return (
        <div className={styles.showTime} >
            <p style={{padding: "0px", margin: "0px"}}><b>TIME</b> <br/></p>
            <p style={{ paddingLeft: "2px", margin: "0px"}}>
                <b id="min">  0 </b>   :   <b id="sec">0</b>
            </p>
        </div>
    )
}

export default Timer
