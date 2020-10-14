import Fullview from './Fullview';
import React, { Component } from 'react';
import Topbar from './Topbar';
import YouWon from './YouWon';
class App extends Component {
  constructor(props) {
    super()

    this.state = {
     num_of_disks: 3,
     moves: 0,
     TS: false,
     keyValue: 0,
     showHelp: false,
     youWon: false,
    }
  }
  receivenum= num =>{
    for(var i=this.state.num_of_disks; i>0; i--){
      var disk= document.getElementById(i);
      const tower= document.getElementById("t1");
      disk.remove();
      tower.appendChild(disk);
    }
    this.timeStart("s");
    this.setState({num_of_disks: num, moves: 0, TS: false, youWon: false});
  }
  moves= () =>{
    this.setState({moves: this.state.moves+1});
  }
  restart=()=>{
    console.log("restart");
    for(var i=this.state.num_of_disks; i>0; i--){
      var disk= document.getElementById(i);
      const tower= document.getElementById("t1");
      disk.remove();
      tower.appendChild(disk);
    }
    this.setState({num_of_disks: this.state.num_of_disks,
       moves: 0, TS:false, youWon: false},
      ()=>{this.timeStart("s")});
  }
  timeStart=(value)=>{
    function startTime(){
      var prevSec= document.getElementById("sec").innerHTML;
      if(prevSec==="59"){
        document.getElementById("sec").innerHTML=0;
        var prevMin= document.getElementById("min").innerHTML;
        document.getElementById("min").innerHTML= ++prevMin;
      }else{
        document.getElementById("sec").innerHTML= ++prevSec;
      }
    }
    if(value==="n"){
      var key=setInterval(startTime, 1000);
      this.setState({TS:true, keyValue: key},()=>{console.log("time started")});
    }else if(value==="s"){
      var keyV= this.state.keyValue;
      clearInterval(keyV);
      document.getElementById("sec").innerHTML=0;
      document.getElementById("min").innerHTML=0;
    }else{
      var keyVal= this.state.keyValue;
      clearInterval(keyVal);
      this.setState({youWon: true})
    }
  }
  displayHelp=()=>{
    if(this.state.showHelp===false){
      this.setState({showHelp: true});
    }
  }
  close=()=>{
    this.setState({showHelp: false});
  }
  render() {
    const fullcolor={
      backgroundColor: "rgb(0, 0, 73)",
      height: "100%"
    }
    return (
      <div className="App" style={fullcolor}>
        {this.state.youWon ? <YouWon/> : null}
        <Topbar receivenum={this.receivenum} moves={this.state.moves}
         restart={this.restart} displayHelp={this.displayHelp} />
        <Fullview numOfDisks={this.state.num_of_disks} Total={this.state.num_of_disks} 
          moves={this.moves} timeStart={this.timeStart} sh={this.state.showHelp}
          reload={this.state.reload} TS={this.state.TS} close={this.close} 
          getF={this.getFunction}/>
      </div>
    )
  }
}

export default App

