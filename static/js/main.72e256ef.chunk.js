(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{1:function(e,t,r){e.exports={topbar:"Tower_topbar__2XbPm",base:"Tower_base__2UMmd",tower:"Tower_tower__3FyTU",disk1:"Tower_disk1__33MfH",disk2:"Tower_disk2__rXb3T",disk3:"Tower_disk3__29gzN",disk4:"Tower_disk4__jTCp9",disk5:"Tower_disk5__3lc8E",disk6:"Tower_disk6__3H5dW",disk7:"Tower_disk7__3-4KQ",disk8:"Tower_disk8__R8zPb",wood:"Tower_wood__3HU-2",restart:"Tower_restart__3i80L",slider:"Tower_slider__2yXf-",num:"Tower_num__1ugnU",moves:"Tower_moves__2VttA",nummove:"Tower_nummove__22jlq",showTime:"Tower_showTime__xYh8W",howToPlay:"Tower_howToPlay__ar_8c",conf:"Tower_conf__3viXL",help:"Tower_help__OyWU8"}},11:function(e,t,r){e.exports=r(17)},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(9),s=r.n(o),i=(r(16),r(2)),u=r(3),d=r(5),l=r(4),c=r(6),p=r(7),g=r(1),m=r.n(g),v=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).dragOver=function(e){e.stopPropagation()},n.dragEnd=function(e){"none"===document.getElementById(e.target.id).style.display&&n.props.wrongMove(e.target.id)},n.touchStart=function(e){n.props.onMouseEnter(e)},n.touchMove=function(e){"false"!==e.target.draggable&&(e.dataTransfer.setData("p",e.target.id),n.props.removeDisk(e.target.id),e.preventDefault())},n.state={Total:e.Total,render:!0},n}return Object(u.a)(r,[{key:"shouldComponentUpdate",value:function(e,t){return!1!==t.render}},{key:"render",value:function(){var e=this;if("t1"!==this.props.towerid)return a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}});switch(parseInt(this.state.Total)){case 8:return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}}),a.a.createElement("p",{className:m.a.disk8,draggable:"true",id:8,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk7,draggable:"true",id:7,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk6,draggable:"true",id:6,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk5,draggable:"true",id:5,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk4,draggable:"true",id:4,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk3,draggable:"true",id:3,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk2,draggable:"true",id:2,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk1,draggable:"true",id:1,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}));case 7:return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}}),a.a.createElement("p",{className:m.a.disk7,draggable:"true",id:7,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk6,draggable:"true",id:6,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk5,draggable:"true",id:5,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk4,draggable:"true",id:4,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk3,draggable:"true",id:3,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk2,draggable:"true",id:2,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk1,draggable:"true",id:1,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}));case 6:return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}}),a.a.createElement("p",{className:m.a.disk6,draggable:"true",id:6,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk5,draggable:"true",id:5,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk4,draggable:"true",id:4,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk3,draggable:"true",id:3,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk2,draggable:"true",id:2,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk1,draggable:"true",id:1,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}));case 5:return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}}),a.a.createElement("p",{className:m.a.disk5,draggable:"true",id:5,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk4,draggable:"true",id:4,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk3,draggable:"true",id:3,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk2,draggable:"true",id:2,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk1,draggable:"true",id:1,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}));case 4:return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}}),a.a.createElement("p",{className:m.a.disk4,draggable:"true",id:4,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk3,draggable:"true",id:3,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk2,draggable:"true",id:2,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk1,draggable:"true",id:1,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}));default:return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:m.a.wood,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)}}),a.a.createElement("p",{className:m.a.disk3,draggable:"true",id:3,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk2,draggable:"true",id:2,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave}),a.a.createElement("p",{className:m.a.disk1,draggable:"true",id:1,onDragStart:this.props.onDragStart,onDragOver:function(t){return e.dragOver(t)},onDragEnd:function(t){return e.dragEnd(t)},onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onTouchStart:function(t){return e.touchStart(t)},onTouchEnd:function(t){return e.dragEnd(t)},onTouchMove:function(t){return e.touchMove(t)}}))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return parseInt(t.Total)!==parseInt(e.Total)?{Total:e.Total,render:!0}:{render:!1}}}]),r}(n.Component),E=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).onMouseEnter=function(e){n.props.preventDrag(e.target)},n.onMouseLeave=function(e){e.target.setAttribute("draggable","true")},n.dragOver=function(e){e.preventDefault()},n.drop=function(e,t){var r=e.target,a=e.dataTransfer.getData("p"),o=document.getElementById(a);null!==o&&(o.id>n.state.top?n.props.wrongMove(o.id):(o.style.display="block",r.appendChild(o),n.props.diskAdded(o.id,t)))},n.dragStart=function(e){var t=e.target;e.dataTransfer.setData("p",t.id),setTimeout((function(){t.style.display="none"}),0),n.props.diskRemoved(t.id)},n.state={numOfDisks:e.numOfDisks,top:e.top,tid:e.id,Total:e.Total},n}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:m.a.tower,id:this.state.tid,onDragOver:function(t){return e.dragOver(t)},onDrop:function(t){return e.drop(t,e.state.tid)}},a.a.createElement(v,{Total:this.state.Total,onDragStart:this.dragStart,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,towerid:this.state.tid,wrongMove:this.props.wrongMove,removeDisk:this.props.diskRemoved}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.Total!==e.Total?{numOfDisks:e.numOfDisks,top:e.top,tid:e.id,Total:e.Total}:{top:e.top,numOfDisks:e.numOfDisks}}}]),r}(n.Component),h=r(10),f=r.n(h),D=function(e){return a.a.createElement("div",{className:m.a.help},a.a.createElement("p",{style:{transform:"TranslateX(45%)",margin:"0px",padding:"0px"}},a.a.createElement("b",null,a.a.createElement("i",null,"RULES")),a.a.createElement("br",null)),a.a.createElement("ul",{style:{flexGrow:2,paddingLeft:5,margin:0}},"Move all the disks from the first tower to the third (rightmost) tower to win the game"),a.a.createElement("ul",{style:{flexGrow:2,paddingLeft:5,margin:0}},"disks can only be dropped over other disks which are larger than them"),a.a.createElement("ul",{style:{flexGrow:2,paddingLeft:5,margin:0}},"Left click on the disk you want to move and drag it to the desired tower"),a.a.createElement("ul",{style:{flexGrow:2,paddingLeft:5,margin:0}},"A disk can be moved only if there is no other disks on top of it"),a.a.createElement("button",{onClick:e.close,style:{backgroundColor:"green",width:"20%",flexGrow:"1",paddingLeft:"0",transform:"TranslateX(200%)",margin:"0"}},a.a.createElement("b",null,"CLOSE")))},M=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).calculateTop=function(e){return e.length>0?e[0]:99},n.diskRemoved=function(e){var t;n.state.TS||n.props.timeStart("n");var r=parseInt(e),a=Object(p.a)(n.state.t1),o="t1",s="d1";n.state.t2[0]===r?(a=Object(p.a)(n.state.t2),o="t2",s="d2"):n.state.t3[0]===r&&(a=Object(p.a)(n.state.t3),o="t3",s="d3"),a.splice(0,1);var i=n.state[s];n.setState((t={},Object(c.a)(t,o,a),Object(c.a)(t,s,i-1),Object(c.a)(t,"prevDisk",r),Object(c.a)(t,"prevTower",o),Object(c.a)(t,"TS",!0),t))},n.diskAdded=function(e,t){var r,a=""+t;a="d"+(a=a.charAt(1));var o=n.state[a],s=Object(p.a)(n.state[t]);s.unshift(parseInt(e)),n.setState((r={},Object(c.a)(r,t,s),Object(c.a)(r,a,o+1),r),(function(){n.props.moves(),n.state.d3===n.state.Total&&n.props.timeStart("u")}))},n.wrongMove=function(e){var t,r=n.state.prevTower,a=r.charAt(1);a="d"+a;var o=n.state[a],s=Object(p.a)(n.state[r]);s.unshift(parseInt(e)),document.getElementById(e).style.display="block",n.setState((t={},Object(c.a)(t,r,s),Object(c.a)(t,a,o+1),t))},n.preventDrag=function(e){var t=parseInt(e.id);n.state.t1[0]!==t&&n.state.t2[0]!==t&&n.state.t3[0]!==t?e.setAttribute("draggable","false"):n.state.d3!==n.state.Total&&e.setAttribute("draggable","true"),n.state.d3===n.state.Total&&e.setAttribute("draggable","false")},n.state={d1:e.numOfDisks,d2:0,d3:0,t1:[1,2,3],t2:[],t3:[],prevTower:"t1",prevDisk:1,Total:e.Total,TS:e.TS},n}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:m.a.base},this.props.sh?a.a.createElement(D,{close:this.props.close}):null,this.state.d3===this.state.Total?a.a.createElement(f.a,{className:m.a.conf,numberOfPieces:500}):null,a.a.createElement(E,{id:"t1",numOfDisks:this.state.d1,top:this.calculateTop(this.state.t1),diskRemoved:this.diskRemoved,diskAdded:this.diskAdded,wrongMove:this.wrongMove,preventDrag:this.preventDrag,Total:this.state.Total}),a.a.createElement(E,{id:"t2",numOfDisks:this.state.d2,top:this.calculateTop(this.state.t2),diskRemoved:this.diskRemoved,diskAdded:this.diskAdded,wrongMove:this.wrongMove,preventDrag:this.preventDrag,Total:this.state.Total}),a.a.createElement(E,{id:"t3",numOfDisks:this.state.d3,top:this.calculateTop(this.state.t3),diskRemoved:this.diskRemoved,diskAdded:this.diskAdded,wrongMove:this.wrongMove,preventDrag:this.preventDrag,Total:this.state.Total}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(parseInt(t.Total)!==parseInt(e.Total)){for(var r=[],n=parseInt(e.numOfDisks);n>0;)r.unshift(n),n--;return{t1:r,d1:parseInt(e.numOfDisks),TS:e.TS,t2:[],t3:[],d2:0,d3:0,Total:parseInt(e.Total)}}if(e.TS)return{state:t};for(var a=[],o=parseInt(t.Total);o>0;)a.unshift(o),o--;return{t1:a,d1:parseInt(e.Total),TS:e.TS,t2:[],t3:[],d2:0,d3:0,Total:parseInt(e.Total)}}}]),r}(n.Component),O=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).handleChange=function(e){n.setState({numOfDisks:e.target.value},(function(){n.props.receivenum(n.state.numOfDisks)}))},n.state={numOfDisks:3},n}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{type:"Range",min:3,max:8,value:this.state.numOfDisks,onChange:this.handleChange,className:m.a.slider}),a.a.createElement("p",{className:m.a.num},a.a.createElement("b",{style:{position:"fixed"}},"DISKS : ",this.state.numOfDisks," ")," "))}}]),r}(n.Component),k=function(e){return a.a.createElement("p",{style:{padding:"0px",margin:"0px"}},a.a.createElement("b",{className:m.a.moves},"MOVES")," ",a.a.createElement("br",null),a.a.createElement("b",{className:m.a.nummove}," ",e.moves))},S=function(e){return a.a.createElement("button",{onClick:e.restart,className:m.a.restart},a.a.createElement("b",null," RESTART "))},b=function(){return a.a.createElement("div",{className:m.a.showTime},a.a.createElement("p",{style:{padding:"0px",margin:"0px",fontSize:"2.4vmax"}},a.a.createElement("b",null,"TIME")," ",a.a.createElement("br",null)),a.a.createElement("p",{style:{paddingLeft:"4px",margin:"0px",height:"1vmax"}},a.a.createElement("b",{id:"min",style:{fontSize:"2.4vmax",top:"1vh"}},"  0 "),"   :   ",a.a.createElement("b",{id:"sec",style:{fontSize:"2.4vmax",top:"1vh"}},"0")))},T=function(e){return a.a.createElement("button",{className:m.a.howToPlay,onClick:e.displayHelp},a.a.createElement("p",{style:{margin:"0px",padding:"0px"}},a.a.createElement("b",null,"HOW      TO"),"  ",a.a.createElement("br",null),a.a.createElement("b",{style:{margin:"0px",padding:"0px"}},"PLAY")))},L=function(e){return a.a.createElement("div",{className:m.a.topbar},a.a.createElement(S,{restart:e.restart}),a.a.createElement(O,{receivenum:e.receivenum}),a.a.createElement(k,{moves:e.moves}),a.a.createElement(b,null),a.a.createElement(T,{displayHelp:e.displayHelp}))},w=function(e){return a.a.createElement("p",{style:{position:"fixed",backgroundColor:"peach",color:"hotpink",transform:"TranslateX(-50%)",top:"20%",fontSize:"3vmax",left:"50%",margin:"0px",padding:"0px"}},a.a.createElement("b",null,"YOU WON !!"))},_=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this)).receivenum=function(e){for(var t=n.state.num_of_disks;t>0;t--){var r=document.getElementById(t),a=document.getElementById("t1");r.remove(),a.appendChild(r)}n.timeStart("s"),n.setState({num_of_disks:e,moves:0,TS:!1,youWon:!1})},n.moves=function(){n.setState({moves:n.state.moves+1})},n.restart=function(){console.log("restart");for(var e=n.state.num_of_disks;e>0;e--){var t=document.getElementById(e),r=document.getElementById("t1");t.remove(),r.appendChild(t)}n.setState({num_of_disks:n.state.num_of_disks,moves:0,TS:!1,youWon:!1},(function(){n.timeStart("s")}))},n.timeStart=function(e){if("n"===e){var t=setInterval((function(){var e=document.getElementById("sec").innerHTML;if("59"===e){document.getElementById("sec").innerHTML=0;var t=document.getElementById("min").innerHTML;document.getElementById("min").innerHTML=++t}else document.getElementById("sec").innerHTML=++e}),1e3);n.setState({TS:!0,keyValue:t},(function(){console.log("time started")}))}else if("s"===e){var r=n.state.keyValue;clearInterval(r),document.getElementById("sec").innerHTML=0,document.getElementById("min").innerHTML=0}else{var a=n.state.keyValue;clearInterval(a),n.setState({youWon:!0})}},n.displayHelp=function(){!1===n.state.showHelp&&n.setState({showHelp:!0})},n.close=function(){n.setState({showHelp:!1})},n.state={num_of_disks:3,moves:0,TS:!1,keyValue:0,showHelp:!1,youWon:!1},n}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"App",style:{backgroundColor:"rgb(0, 0, 73)",height:"100%"}},this.state.youWon?a.a.createElement(w,null):null,a.a.createElement(L,{receivenum:this.receivenum,moves:this.state.moves,restart:this.restart,displayHelp:this.displayHelp}),a.a.createElement(M,{numOfDisks:this.state.num_of_disks,Total:this.state.num_of_disks,moves:this.moves,timeStart:this.timeStart,sh:this.state.showHelp,reload:this.state.reload,TS:this.state.TS,close:this.close,getF:this.getFunction}))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.72e256ef.chunk.js.map