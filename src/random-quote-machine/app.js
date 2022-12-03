
//QUOTES LIST
const quotes = [
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author:"Oscar Wilde"
    },
    {
        quote:"That it will never come again is what makes life so sweet.",
        author:"Emily Dickinson"
    },
    {
        quote:"It is never too late to be what you might have been.",
        author:"George Eliot"
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"Pain is inevitable. Suffering is optional.",
        author:"Haruki Murakami"
    },
    {
        quote:"All the world's a stage, and all the men and women merely players.",
        author:"William Shakespeare"
    },
    {
        quote:"Be kind, for everyone you meet is fighting a hard battle.",
        author:"Plato"
    },
    {
        quote:"Unable are the loved to die for love is immortality.",
        author:"Emily Dickinson"
    },
    {
        quote:"Let me live, love, and say it well in good sentences.",
        author:"Sylvia Plath"
    },
    {
        quote:"Don't let your happiness depend on something you may lose.",
        author:"C.S. Lewis"
    },
    {
        quote:"We are all broken, that's how the light gets in.",
        author:"Ernest Hemingway"
    },
    {
        quote:"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
        author:"Voltaire"
    },
    {
        quote:"Life is tough my darling, but so are you.",
        author:"Stephanie Bennett Henry"
    },
    {
        quote:"Self-awareness and self-love matter. Who we are is how we lead.",
        author:"Brene Brown"
    },
    {
        quote:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        author:"Stephen King"
    }
];

import React from "react";
import {FaQuoteLeft, FaQuoteRight, FaTwitter} from "react-icons/fa";

export class RandomQuoteMachine extends React.Component{

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
