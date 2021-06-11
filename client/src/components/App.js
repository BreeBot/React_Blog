import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import ArticlesList from './ArticlesList' 
import ArticleShow from './ArticleShow'

const App = props => {
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={ArticlesList} />
          <Route exact path = "/articles/:id" component = {ArticleShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
