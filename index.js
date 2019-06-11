import React from 'react'
import ReactDom from 'react-dom'
import Main from './view/routes/main.jsx'
import Home from './view/routes/home/home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import store from "./store.jsx"
import {Provider} from "react-redux";
ReactDom.render(
		<Provider store={store}>
		<BrowserRouter>
    <Main>
    </Main>
    </BrowserRouter>
    </Provider>
, document.getElementById("base_container"))