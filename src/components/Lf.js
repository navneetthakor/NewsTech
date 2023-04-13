import React, { Component } from 'react'
import load from '../Spinner-1s-200px.png'

export default class Lf extends Component {
  render() {
    return (
      <div>
        <img src={load} alt='Loading' />
      </div>
    )
  }
}
