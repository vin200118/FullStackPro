import React from "react"
 class User extends React.Component{
    
    render(){
        return(
                <div>username : {this.props.username}</div>
        );
    }
}

export default User;