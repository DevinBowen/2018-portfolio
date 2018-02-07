import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MobileHome from './components/MobileHome';



export default (
    <Switch>
        <Route exact path='/' component={MobileHome} />
    </Switch>
)
