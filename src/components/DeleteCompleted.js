import React from 'react'
import { connect } from 'react-redux'
import { deleteCompleted } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'

let DeleteCompleted = ({ dispatch }) => {

  return (
        <RaisedButton onClick={e => {
          e.preventDefault()
          dispatch(deleteCompleted())
        }} secondary={true} label="Delete Completed"/>
  )
}
DeleteCompleted = connect()(DeleteCompleted)

export default DeleteCompleted
