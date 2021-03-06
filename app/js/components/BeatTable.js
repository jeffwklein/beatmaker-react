import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import InstrumentRow from './InstrumentRow'

export class BeatTable extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    //const { } = this.state
    const { instrumentRows } = this.props.store
    return (
      <div className='beatTable'>
        {
          instrumentRows.map(
            (row, i) =>
              <InstrumentRow
                sound={row.sound}
                beatList={row.beatList}
                rowNumber={i}
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
)(BeatTable)

