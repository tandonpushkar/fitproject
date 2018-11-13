import React from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PushkarTandon from './PushkarTandon';
import HardikSikka from './HardikSikka';
import Ieeejournal from './Ieeejournal';
import Topic from './Topic';
import Home from './Home';


function Container({ location }) {
    return (
        <div >
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 500, exit: 500 }}
                    classNames={'fade'}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/topic" component={Topic} />
                        <Route path="/Ieeejournal" component={Ieeejournal} />
                        <Route path="/pushkartandon" component={PushkarTandon} />
                        <Route path="/hardiksikka" component={HardikSikka} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>

    );
}

export default withRouter(Container);