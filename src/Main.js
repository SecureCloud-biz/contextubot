import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchMedia from './SearchMedia'
import TranscriptView from './TranscriptView'
import ComicView from './ComicView'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SearchMedia}/>
      <Route path='/TranscriptView' component={TranscriptView}/>
      <Route path='/ComicView' component={ComicView}/>
    </Switch>
  </main>
)

export default Main