import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Stateless component
let Pcomponent = function(props: any){
    return <h1>
        {props.text}
    </h1>;
}

interface Sprops{
    counter:number,
    some: number
}

// Statefull component
class Scomponent extends React.Component<any, Sprops> {
    constructor() {
        super();
        this.state = {
            counter: 0,
            some: 100
        };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    componentDidUpdate()
    {
        if (this.state.counter==10){
            console.log("101010");
        }
    }

    decrement() {
        this.setState({
            counter: this.state.counter-1
        });
    }
    increment() {
        this.setState({
            counter: this.state.counter+1
        });
    }
    render() {
        return <h1>
            <span onClick={this.decrement}>-</span>
            <span>{this.state.counter==3?"true":this.state.counter}</span>
            <span onClick={this.increment}>+</span>
        </h1>;
    }
}
let Component = () => {
    return <h1>
        Hello Kishore
    </h1>;
};

class Likes extends React.Component<any, any>{
    constructor() {
        super();
        this.state = {
            likes: 0,
            youlike: false
        }
        this.toggleLike = this.toggleLike.bind(this);
        this.addLike = this.addLike.bind(this);
    }
    toggleLike() {
        let youlike = !this.state.youlike;
        this.setState({
            youlike,
            likes: this.state.likes+(youlike?1:-1)
        });
    }
    addLike() {
        this.setState({
            likes: this.state.likes+1
        })
    }

    render() {
        return <div>
            <span>{this.state.likes}</span>
            <span onClick={this.toggleLike}>{this.state.youlike?"Unlike":"Like"}</span>
            <span onClick = {this.addLike}>+</span>
        </div>;
    }
}

ReactDOM.render(
    <Likes />,
    document.getElementById("app")
);