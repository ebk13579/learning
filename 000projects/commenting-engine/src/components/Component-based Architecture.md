*******************************************************************************

F:\Books\CodeSchool-JS\React\???.pdf

*******************************************************************************
# Component-based Architecture  


In React, we solve problems by creating components. 
If a component gets too complex, we break it into smaller, simpler components.

*******************************************************************************
## Components
*******************************************************************************


A component in React works similarly to JavaScript functions: 
It generates an output every time it is invoked.

*******************************************************************************
## virtual DOM
*******************************************************************************

The virtual DOM is an in-memory representation of real DOM elements generated by React components before any changes are made to the page.


In-memory representation of what will become real elements.

Actual elements displayed on the browser.


Virtual DOM diffing allows React to minimize changes to the DOM as a result of user actions — therefore, increasing browser performance.


Only this paragraph has changed and only this paragraph is replaced.

Other elements remain untouche.

*******************************************************************************
## ES6
*******************************************************************************

We want to simply print a message to the screen using a React component.


Components in React are JavaScript classes that inherit from the React.Component base class.

class StoryBox extends React.Component {
    render() {
        return( <div>Story Box</div> );
    }
}


1. Components are written in upper camel case.

2. Component class inherits from a React base class.

3. Every component needs a render() function.

4. No quotes needed — don't freak out.


Now we need to tell our application where to put the result into our web page.


We use ReactDOM to render components to our HTML page as it reads output from a supplied React component and adds it to the DOM.


ReactDOM.render(
    <StoryBox />,
    document.getElementById('story-app')
);

1. Invoke StoryBox — again, we don't need quotes.

2. Target container where component will be rendered to html target where Element'id="story-app"


Every time we create a new React component, we use it by writing an element named after the class.


// Using StoryBox component  



## // defualt props ??? 


// ES6 constructor (no getInitialState: function )
// ES6 constructor (no getDefaultProps: function)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
http://react2.xgqfrms.xyz/docs/reusable-components.html

## 默认 Prop 值
React 支持以声明式的方式来定义 props 的默认值。


var ComponentWithDefaultProps = React.createClass({
    getDefaultProps: function() {
        return {
            value: 'default value'
        };
    },
    /* ... */
});


## State 初始值

var TickTock = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        };
    },
    /* ... */
});


## ES6 Classes

// ES6 constructor (no getInitialState: function )
// ES6 constructor (no getDefaultProps: function)

ES6 Class API近似于 React.createClass 除了 getInitialState。

你应该在构造函数里设置你的state，而不是提供一个单独的 getInitialState 方法。
就像 getInitialState 的返回值，你赋给 this.state 的值会被作为组件的初始 state。

另一个不同是 propTypes 和 defaultProps 是在构造函数里被定义为属性，而不是在 class body 里。


export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    },
    tick() {
        this.setState({count: this.state.count + 1});
    },
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}

Counter.propTypes = { initialCount: React.PropTypes.number };

Counter.defaultProps = { initialCount: 0 };



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

http://react2.xgqfrms.xyz/docs/reusable-components.html#es6-classes

react2 API docs codes bugs :


*************************
{ a b c } missing "," 


{ a, b, c }

*************************

## ES6 Classes

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    },
    tick() {
        this.setState({count: this.state.count + 1});
    },
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


















*******************************************************************************
##
*******************************************************************************





*******************************************************************************
##
*******************************************************************************



*******************************************************************************
##
*******************************************************************************





*******************************************************************************
##
*******************************************************************************



*******************************************************************************
##
*******************************************************************************























































































































