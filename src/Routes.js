import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { transitionOpacity } from './utils/config'
import { Main, Result, Filters } from './pages'
import { ROUTE_PATH } from './utils/constants'

function Routes() {
  const location = useLocation()
  const transitions = useTransition(
    location,
    (location) => location.pathname,
    transitionOpacity
  )
  const { main, result, filters } = ROUTE_PATH

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} className="absolute w-full" style={props}>
      <Switch location={location}>
        <Route exact path={main} component={Main} />
        <Route path={result} component={Result} />
        <Route path={filters} component={Filters} />
      </Switch>
    </animated.div>
  ))
}

export default Routes
