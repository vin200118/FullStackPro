import React from 'react';
import {createStore} from 'redux';

const initState = {
        result:1,
        lastValues:[]
};
const reducer=(state=initState, action)=>{
    switch(action.type){
    case 'ADD':
        state= {
            ...state,
            result:state.result+action.payload,
            lastValues:[state.lastValues,action.payload]
    };
        break;
    case 'SUBSTRACT':
        state= {
            ...state,
            result:state.result-action.payload,
            lastValues:[state.lastValues,action.payload]
            //lastValues:[...state.lastValues,action.payload]
    };
        break;
    }
    return state;
}

const store = createStore(reducer,1)

store.subscribe(() => {
   console.log("this is state"+store.getState().lastValues); 
});
store.dispatch({
    type:"ADD",
    payload:100
});
store.dispatch({
    type:"SUBSTRACT",
    payload:50
});

