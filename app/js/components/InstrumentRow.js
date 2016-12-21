import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import NoteBox from './NoteBox'

export class InstrumentRow extends Component {
  constructor() {
    super()
    this.state = {
    }
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

