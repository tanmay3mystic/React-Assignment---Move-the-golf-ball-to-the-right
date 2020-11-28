import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px"  } 
        };
        this.keyListener = this.keyListener.bind(this)
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    keyListener(e){
        e.preventDefault();
        // console.log(e.key);
        
        if(e.key == "ArrowRight") {
            this.setState(
                {
                    posi : this.state.posi + 5,
                    ballPosition:{ left: `${this.state.posi}px`}
                }
            )
        }   
    }

    buttonClickHandler() {
         this.setState({renderBall:true});     
    }

    renderBallOrButton() {
        
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
        }

    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown" , this.keyListener );
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
