import React, { Component } from 'react'
import { connect } from 'react-redux'
//import TempoSelector from './components/TempoSelector'
//import CountSelector from './components/CountSelector'
import BeatTable from './components/BeatTable'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    //const { }  = this.state
    //const { }  = this.props.store
    return (
      <div className='app'>
        {
          //<TempoSelector/>
        }
        {
          //<CountSelector/>
        }
        <div className='playButton' onClick={this.props.togglePlaying}>
          Play
        </div>
        <BeatTable/>
      </div>
    )
  }
}

export default connect(
  (store) => ({ store }),
  (dispatch) => ({
    togglePlaying:
      () => dispatch({ type: 'TOGGLE_PLAYING' })
  })
)(App)

