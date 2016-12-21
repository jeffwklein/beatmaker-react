import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import kickSound from './sounds/kick.mp3'
import snareSound from './sounds/snare2.mp3'

import NoteBox from './NoteBox'

const soundMap = {
  kick: kickSound,
  snare: snareSound
}

export class InstrumentRow extends Component {
  constructor() {
    super()
    // default values
  }
  componentDidMount() {
    this.sound = new Audio(soundMap[this.props.sound])
  }

  render() {
    //const { }  = this.state
    const { rowNumber }  = this.props
    const { sound, beatList } = this.props
    const { bpm, milliseconds } = this.props.store
    return (
      <div className='row'>
        {
          beatList.map(
            (beat, i) =>
              <NoteBox
                selected={beat.selected}
                offset={beat.offset}
                sound={sound}
                rowNumber={rowNumber}
                colNumber={i}
                onPlay={() => this.sound.play()}
                key={i} 
              />
          )
        }
      </div>
    )
  }
}

export default connect(
  (store) => ({ store }),
  (dispatch) => ({})
)(InstrumentRow)

