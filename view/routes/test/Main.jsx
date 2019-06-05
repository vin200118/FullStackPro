import React from "react"
class Main extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
                <button onClick={()=> this.props.changeUserName("Aayush")}>Change Name</button>
        );
    }
}

export default Main;