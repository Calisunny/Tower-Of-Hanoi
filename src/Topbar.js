import React from 'react'
import styles from './Tower.module.css'
import Slidebar from './Slidebar';
import Moves from './Moves';
import Restart from './Restart';
import Timer from './Timer';
import HowToPlay from './HowToPlay';
const Topbar = (props) => {

    return (
        <div className={styles.topbar}>
            <Restart restart={props.restart}/>
            <Slidebar receivenum={props.receivenum}/>
            <Moves moves={props.moves} />
            <Timer/>
            <HowToPlay displayHelp={props.displayHelp}/>
        </div>
    )
}

export default Topbar
