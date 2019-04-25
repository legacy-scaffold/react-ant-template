import "./Application.global.scss";

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Route,NavLink} from "react-router-dom";


function Application(props){
	return (
	<HashRouter>
		<div>
			{"空白的React脚手架"}
		</div>
	</HashRouter>
)}


ReactDOM.render(<Application/>,document.getElementById("AppView"))



