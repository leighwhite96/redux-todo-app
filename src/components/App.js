import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DeleteAll from './DeleteAll'
import DeleteCompleted from './DeleteCompleted'

import AppBar from 'material-ui/AppBar'

const App = ({match}) => (
  <div>
  <AppBar title="Todo App" style={{backgroundColor: '#ff4075'}}/>
  <Footer />
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || 'all'}/>
    <DeleteAll />
    <DeleteCompleted />
  </div>
)

export default App
