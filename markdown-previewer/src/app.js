import React from "react";
import {FaQuoteLeft, FaQuoteRight, FaTwitter} from "react-icons/fa";

export class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            index: Math.floor(Math.random() * quotes.length),
            color: Math.floor(Math.random()*16777215).toString(16)
        }
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote(){
        this.setState({
            index: Math.floor(Math.random() * quotes.length),
            color: Math.floor(Math.random()*16777215).toString(16)
        })
    }

    render(){
        
        let {quote, author} = quotes[this.state.index]
        let mainColor = {
            backgroundColor: "#"+ this.state.color,
            color: "#"+ this.state.color,
            transition: "0.6s linear"
        };

        return(
            <div className="container" style={mainColor}>
                <div id="quote-box">
                    <div id="text">
                        <FaQuoteLeft/>
                        {"\t" + quote + "\t"}
                        <FaQuoteRight/>
                    </div>
                    <div id="author">
                        – {author}
                    </div>
                    <div className="buttons">
                        <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" style={mainColor}><FaTwitter/></a>
                        <span id="new-quote" style={mainColor} onClick={this.newQuote}>New Quote</span>
                    </div>
                </div>
            </div>
        );
    }
}
