import React from 'react';
import './Slides.css';

export default class Slides extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            quoteList: ["More stage dives in the monitors!"],
            imgList: []
        }

        this.quoteChange = this.quoteChange.bind(this);
        
    }

    quoteChange(){
        if(this.state.index + 1 === this.state.quoteList.length){
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1

            })
        }
    }

  
    render() {
        return (
            <div>
                <img src={this.state.imgList[this.state.index]}
                alt="vogel-images"
                className="image-box"
                height={500}
                width={750}
                />

                <h1 onClick={this.quoteChange}>{this.state.quoteList[this.state.index]}</h1>
            </div>
        )
    }
}
