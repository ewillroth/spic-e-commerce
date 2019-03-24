import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Splash from './components/Splash';

export default (
<Switch>
	<Route path="/"><Splash/></Route>
</Switch>
)