import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import InstrumentRow from './InstrumentRow'

export class BeatTable extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.startLoop = this.startLoop.bind(this)
  }

  startLoop() {
  }

  render() {
    //const { }  = this.state
    const { instrumentRows } = this.props.store
    console.log('instrumentRows', instrumentRows)
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

