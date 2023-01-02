import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./routers/Coins";
import Coin from "./routers/Coin";
function Router(){
	return (
		<BrowserRouter>
		  <Switch>
		    <Route path="/">
			  <Coins />
			</Route>
			<Route path="/coinId">
			  <Coin/>
			</Route>
		  </Switch>
		</BrowserRouter>
	);
}

export default Router;