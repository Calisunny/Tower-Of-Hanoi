import React, { Component } from 'react'
import Diskgenerator from './Diskgenerator'
import styles from './Tower.module.css'

class Tower extends Component {
    constructor(props) {
        super()
    
        this.state = {
            numOfDisks: props.numOfDisks,
            top: props.top,
            tid: props.id,
            Total: props.Total
        }
    }
    static getDerivedStateFromProps(props,state){
        if(state.Total!==props.Total){
            return({numOfDisks: props.numOfDisks,
                top: props.top,
                tid: props.id,
                Total: props.Total});
        }else{
            return({top: props.top, numOfDisks: props.numOfDisks});
        }
    }
    onMouseEnter=e=>{
        this.props.preventDrag(e.target);
    }
    onMouseLeave=e=>{
        const target= e.target;
        target.setAttribute("draggable","true");
    }
    dragOver=e=>{
        e.preventDefault();
    }
    drop=(e,towerid)=>{
        console.log(towerid);
        const target= e.target;
        var data= e.dataTransfer.getData("p");
        const disk= document.getElementById(data);
        if(disk===null){return; }
        if(disk.id>this.state.top){
            this.props.wrongMove(disk.id);
        }else{
            disk.style.display= 'block';
            target.appendChild(disk);
            this.props.diskAdded(disk.id,towerid);
        }
    }
    dragStart=(e)=>{
        const target= e.target;
        e.dataTransfer.setData("p",target.id);
        setTimeout(()=>{
            target.style.display= "none";
        },0);
        this.props.diskRemoved(target.id);
    }
    render() {
        return (
            <div className={styles.tower} id={this.state.tid}
             onDragOver={(e)=>this.dragOver(e)} onDrop={(e)=>this.drop(e,this.state.tid)}>
               <Diskgenerator Total={this.state.Total} onDragStart={this.dragStart}
               onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
               towerid={this.state.tid} wrongMove={this.props.wrongMove}/>
            </div>
        )
    }
}

export default Tower
