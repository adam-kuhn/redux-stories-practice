import React from 'react'
import {connect} from 'react-redux'

import {delImg} from '../actions'

class Image extends React.Component {
  constructor (props) {
    super(props)
    this.deleteImg = this.deleteImg.bind(this)
  }
  deleteImg(evt) {
    const imgId = Number(evt.target.getAttribute('data-id'))
    this.props.dispatch(delImg(imgId))
  }
  render() {
    return (
      <div>
      <img src={this.props.source} />
      <button data-id={this.props.id} onClick={this.deleteImg}>X
      </button>
      </div>
    )
  }
}



export default connect()(Image)