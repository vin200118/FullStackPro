import React from "react"
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <button onClick={()=> this.props.changeUserName("Aayush 118")}>Change Name</button>
        );
    }
}

export default Main;