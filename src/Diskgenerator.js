import React, { Component } from 'react'
import styles from './Tower.module.css'
class Diskgenerator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total: props.Total,
            render: true,
        }
    }
    
    static getDerivedStateFromProps(props,state){
        if(parseInt(state.Total)!==parseInt(props.Total)){
            
            return({Total: props.Total, render: true});
        }else{
            return({render: false});
        } 
    }
    shouldComponentUpdate(props,state){
        if(state.render===false){
            return false;
        }else{ return true;}
    }
    dragOver=e=>{
        e.stopPropagation();
    }
    dragEnd=e=>{
        const diskid= document.getElementById(e.target.id);
        if(diskid.style.display=== 'none'){
            this.props.wrongMove(e.target.id);
        }
    }
    render() {
        if(this.props.towerid!=="t1"){
            return(<p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>);
        }
        switch(parseInt(this.state.Total)){
        case 8 :return (
            <React.Fragment>
                <p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>
                <p className={styles.disk8} draggable="true" id={8} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk7} draggable="true" id={7} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk6} draggable="true" id={6} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk5} draggable="true" id={5} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk4} draggable="true" id={4} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk3} draggable="true" id={3} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk2} draggable="true" id={2} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk1} draggable="true" id={1} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
            </React.Fragment>)
        case 7 :return (
            <React.Fragment>
                <p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>
                <p className={styles.disk7} draggable="true" id={7} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk6} draggable="true" id={6} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk5} draggable="true" id={5} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk4} draggable="true" id={4} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk3} draggable="true" id={3} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk2} draggable="true" id={2} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk1} draggable="true" id={1} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
            </React.Fragment>)
        case 6 :return (
            <React.Fragment>
                <p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>
                <p className={styles.disk6} draggable="true" id={6} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk5} draggable="true" id={5} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk4} draggable="true" id={4} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk3} draggable="true" id={3} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk2} draggable="true" id={2} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk1} draggable="true" id={1} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
            </React.Fragment>)
        case 5 :return (
            <React.Fragment>
                <p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>
                <p className={styles.disk5} draggable="true" id={5} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk4} draggable="true" id={4} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk3} draggable="true" id={3} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk2} draggable="true" id={2} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk1} draggable="true" id={1} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
            </React.Fragment>)
        case 4 :return (
            <React.Fragment>
                <p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>
                <p className={styles.disk4} draggable="true" id={4} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk3} draggable="true" id={3} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk2} draggable="true" id={2} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk1} draggable="true" id={1} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
            </React.Fragment>)
        default : return (
            <React.Fragment>
                <p className={styles.wood} onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}/>
                <p className={styles.disk3} draggable="true" id={3} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk2} draggable="true" id={2} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
                <p className={styles.disk1} draggable="true" id={1} onDragStart={this.props.onDragStart}
                onDragOver={(e)=>this.dragOver(e)} onDragEnd={(e)=>this.dragEnd(e)}
                onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} />
            </React.Fragment>)
       }
    }
}

export default Diskgenerator
