import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  render(){

  return (
    <div>

        <TextField
          hintText="Enter your todo"
          onChange={this.handleChange}
        />
        <RaisedButton label="Add Todo" secondary={true} onClick={e => {
          e.preventDefault()
          if (!this.state.value) {
            return
          }
          this.props.dispatch(addTodo(this.state.value))
          this.setState({value: ''})
        }}
        style={{margin: '1vw'}}/>
    </div>
  )
}
}
AddTodo = connect()(AddTodo)

export default AddTodo
