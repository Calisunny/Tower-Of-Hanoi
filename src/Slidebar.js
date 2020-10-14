import React, { Component } from 'react'
import styles from './Tower.module.css'

class Slidebar extends Component {
constructor(props) {
    super()

    this.state = {
        numOfDisks :3
    }
}
handleChange=(e)=>{
    this.setState({numOfDisks: e.target.value},
        ()=>{this.props.receivenum(this.state.numOfDisks)});
}
render() {
    return (
         <div>
            <input type="Range" min={3} max={8} value={this.state.numOfDisks}
            onChange={this.handleChange} className={styles.slider}/>
            <p className={styles.num} >
                 <b style={{position:"fixed"}}>DISKS : {this.state.numOfDisks} </b> </p>
        </div>
    )
    }
}

export default Slidebar
