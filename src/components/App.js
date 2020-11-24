import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            positionL : 0,
            positionT : 0,
            ballPosition: { left: "0px" , top: "0px" } 
        };
        this.keyListener = this.keyListener.bind(this)
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    keyListener(e){
        e.preventDefault();
        // console.log(e.key);
        console.log(this.state.position);
        if(e.key == "ArrowRight") {
            this.setState(
                {
                    positionL : this.state.positionL + 5,
                    ballPosition:{ left: `${this.state.positionL}px` ,  top: `${this.state.positionT}px`}
                }
            )
        }
        if(e.key == "ArrowLeft") {
            this.setState(
                {
                    positionL : this.state.positionL -5 ,
                    ballPosition:{ left: `${this.state.positionL}px` ,  top: `${this.state.positionT}px`}
                }
            )
        }
        if(e.key == "ArrowDown") {
            this.setState(
                {
                    positionT : this.state.positionT+5 ,
                    ballPosition:{ left: `${this.state.positionL}px` , top: `${this.state.positionT}px`}
                }
            )
        }
        if(e.key == "ArrowUp") {
            this.setState(
                {
                    positionT : this.state.positionT - 5 ,
                    ballPosition:{left: `${this.state.positionL}px` ,  top: `${this.state.positionT}px`}
                }
            )
        }

       
    }

    buttonClickHandler() {
         this.setState({renderBall:true});
         document.addEventListener("keydown" , this.keyListener );
    }
    renderBallOrButton() {
        
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
        }

    }

    // bind ArrowRight keydown event
    componentDidMount() {
      
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
