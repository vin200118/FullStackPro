import React from "react";
import Main from "./Main.jsx";
import User from "./User.jsx";
 class Test extends React.Component{
    constructor(){
        super();
        this.state={
                username:"Vinayak"
        };
    }
    
    changeUserName(newName){
        this.setState({
            username:newName
        });
    }
    render(){
        return(
                <div className="container">
                <Main changeUserName={this.changeUserName.bind(this)}/>
                <User username={this.state.username}/>
                </div>
                );
    }
}

export default Test;