import React from "react";
import Main from "./Main.jsx";
import User from "./User.jsx";
import {connect} from 'react-redux';
import {setName} from '../../action/userAction.jsx'
 class Test extends React.Component{
  
    render(){
        return(
                <div className="container">
                <Main changeUserName={(name) => this.props.setName(name)}/>
                <User username={this.props.user.name}/>
                </div>
                );
    }
}

const mapStateToProps = (state) =>{
    return {
        user:state.user
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        setName:(name)=>{
            dispatch(setName(name));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);