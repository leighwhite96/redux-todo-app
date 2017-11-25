import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardHeader } from 'material-ui'
import Checkbox from 'material-ui/Checkbox'

const Todo = ({ onClick, completed, text }) => (
  <Card style={{maxWidth: '70vw', margin: '0 auto'}}

  >
    <CardHeader title={text} textStyle={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    </CardHeader>
    <Checkbox
       onClick={onClick}
       style={{marginBottom: '2vh'}}
       />
  </Card>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
