import React, { Component } from 'react';
import Tower from './Tower';
import styles from './Tower.module.css';
import Confetti from 'react-confetti';
import Help from './Help';

class Fullview extends Component {
    constructor(props) {
        super()
        
        this.state = {
            d1: props.numOfDisks, d2: 0, d3: 0,
            t1: [1,2,3],
            t2: [],
            t3: [],
            prevTower: "t1",
            prevDisk: 1,
            Total: props.Total,
            TS: props.TS
        }
    }
    static getDerivedStateFromProps(props,state){
        if(parseInt(state.Total)!==parseInt(props.Total)){
            const t=[]; var i= parseInt(props.numOfDisks);
            while(i>0){
                t.unshift(i);
                i--;
            }
            return({t1: t, d1: parseInt(props.numOfDisks),TS: props.TS,
                t2: [], t3: [], d2: 0, d3: 0, Total: parseInt(props.Total)});
        }else if(!props.TS){                                //Reload condition
            const t=[]; var k= parseInt(state.Total);
            while(k>0){
                t.unshift(k);
                k--;
            }
            return({t1: t, d1: parseInt(props.Total),TS: props.TS,
                t2: [], t3: [], d2: 0, d3: 0, Total: parseInt(props.Total)});
        }else{
            return({state: state});
        } 
    }
    calculateTop=(t)=>{
        let size= t.length;
        if(size>0){ return t[0]}
        else{ return 99};
    }
    diskRemoved=(diskid)=>{
        if(!this.state.TS){
            this.props.timeStart("n");
        }
        var did= parseInt(diskid);
        var tower= [...this.state.t1];
        var towerid= "t1";
        var d= "d1";
        if(this.state.t2[0]===did){
            tower= [...this.state.t2];
            towerid= "t2";
            d= "d2";
        }else if(this.state.t3[0]===did){
            tower= [...this.state.t3];
            towerid= "t3";
            d= "d3";
        }
        tower.splice(0,1);
        var dValue= this.state[d];
        this.setState({[towerid]: tower, [d]: dValue-1,
            prevDisk: did, prevTower: towerid, TS: true})
    }
    diskAdded=(diskid,towerid)=>{
        var d= ""+towerid;
        d= d.charAt(1);
        d= "d"+d;
        var dValue= this.state[d];
        var t=[...this.state[towerid]];
        t.unshift(parseInt(diskid));
        this.setState({[towerid]: t, [d]: dValue+1},
            ()=>{this.props.moves();
                if(this.state.d3 === this.state.Total){
                    this.props.timeStart("u");
                }});
    }
    wrongMove=(diskid)=>{
        var prevTower= this.state.prevTower;
        var d= prevTower.charAt(1);
        d= "d"+d;
        var dValue= this.state[d];
        var t=[...this.state[prevTower]];
        t.unshift(parseInt(diskid));
        const disk= document.getElementById(diskid);
        disk.style.display= 'block';
        this.setState({[prevTower]: t, [d]: dValue+1});
    }
    preventDrag=(target)=>{
        var id= parseInt(target.id);
        if(this.state.t1[0]!==id&&this.state.t2[0]!==id&&
            this.state.t3[0]!==id){
            target.setAttribute("draggable","false");
        }
        if(this.state.d3===this.state.Total){
            target.setAttribute("draggable","false");
        }
    }
    render() {
        return (
            <div className={styles.base}>
                {this.props.sh ? <Help  close={this.props.close}/> : null}
                { this.state.d3 === this.state.Total ?
                <Confetti  width={1200} height={600} numberOfPieces={400} /> :null }
                <Tower id="t1" numOfDisks={this.state.d1} top={this.calculateTop(this.state.t1)}
                diskRemoved={this.diskRemoved} diskAdded={this.diskAdded} wrongMove={this.wrongMove}
                preventDrag={this.preventDrag} Total={this.state.Total} />
                <Tower id="t2" numOfDisks={this.state.d2} top={this.calculateTop(this.state.t2)}
                diskRemoved={this.diskRemoved} diskAdded={this.diskAdded} wrongMove={this.wrongMove}
                preventDrag={this.preventDrag} Total={this.state.Total} />
                <Tower id="t3" numOfDisks={this.state.d3} top={this.calculateTop(this.state.t3)}
                diskRemoved={this.diskRemoved} diskAdded={this.diskAdded} wrongMove={this.wrongMove}
                preventDrag={this.preventDrag} Total={this.state.Total} />
            </div>
        )
    }
}

export default Fullview
