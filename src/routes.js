import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Splash from './components/Splash';
import Admin from './components/Admin';

export default (
<Switch>
	<Route path="/admin"><Admin/></Route>
	<Route path="/"><Splash/></Route>
</Switch>
)