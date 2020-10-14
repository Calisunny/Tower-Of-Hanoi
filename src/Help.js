import React from 'react'
import styles from './Tower.module.css';
const Help = (props) => {
    const content={transform: "TranslateX(45%)",
    margin: "0px", padding: "0px"};
    const space={margin: "10px", padding: "5px"}
    return (
        <div className={styles.help}>
            <p style={content}>
                <b><i>RULES</i></b><br/>
            </p>
                <ul style={space}>Move all the disks from the first tower 
                    to the third (rightmost) tower to win the game</ul>
                <ul style={space}>disks can only be dropped over other disks 
                    which are larger than them</ul>
                <ul style={space}>Left click on the disk you want to move and drag it 
                    to the desired tower</ul>
                <ul style={space}>A disk can be moved only if there is no other disks 
                    on top of it</ul>
            <button  onClick={props.close}
                style={{backgroundColor: "green", width: "20%",
                transform: "TranslateX(200%)"}}><b>CLOSE</b>
            </button>
        </div>
    )
}

export default Help
