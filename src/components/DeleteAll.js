import React from 'react'
import { connect } from 'react-redux'
import { deleteAll } from '../actions'

import RaisedButton from 'material-ui/RaisedButton'

let DeleteAll = ({ dispatch }) => {

  return (
        <RaisedButton onClick={e => {
          e.preventDefault()
          dispatch(deleteAll())
        }}
        secondary={true}
        label="Delete All"
        style={{margin: '1vw'}}
        />

  )
}
DeleteAll = connect()(DeleteAll)

export default DeleteAll
