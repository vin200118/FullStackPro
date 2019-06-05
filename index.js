import React from 'react'
import ReactDom from 'react-dom'
import Main from './view/routes/main.jsx'
import Home from './view/routes/home/home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
ReactDom.render(
		<BrowserRouter>
    <Main>
    </Main>
    </BrowserRouter>
, document.getElementById("base_container"))