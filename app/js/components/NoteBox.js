import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

const PAUSE_MS_BEFORE_PLAYING = 200

export class NoteBox extends Component {
  constructor() {
    super()
    this.play = this.play.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    // if not currently playing and set to play
    const { isPlaying } = this.props.store
    const willPlay = nextProps.store.isPlaying
    if (!isPlaying && willPlay) {
      this.playClicked = true
      setTimeout(() => this.play(nextProps.store.playID), this.props.offset + PAUSE_MS_BEFORE_PLAYING)
    }
  }

  play(id) {
    const { milliseconds, isPlaying, subdivisions, playID } = this.props.store
    if (isPlaying && playID && id === playID) {
      //PLAY SOUND
      // change the color right away
      this.refs.box.className = this.props.selected ? 'rowItem__selected__playing' : 'rowItem__playing'
      // then change it back in a second
      setTimeout(() => this.refs.box.className = this.props.selected ? 'rowItem__selected' : 'rowItem', milliseconds)
      // call this again in one cycle
      setTimeout(() => this.play(id), milliseconds * subdivisions)
    }
  }

  render() {
    //const { }  = this.state
    const { selected, offset, sound, rowNumber, colNumber }  = this.props
    const { subdivisions, bpm, milliseconds, isPlaying }  = this.props.store
    return (
      <div
        ref='box'
        className={ selected ? 'rowItem__selected' : 'rowItem' }
        onClick={() => this.props.toggleSelect(rowNumber, colNumber)}>
      </div>
    )
  }
}

export default connect(
  (store) => ({ store }),
  (dispatch) => ({
    toggleSelect: (row, col) => dispatch({ type: 'TOGGLE_SELECT', row, col })
  })
)(NoteBox)

