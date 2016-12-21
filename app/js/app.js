import React, { Component } from 'react'
import { connect } from 'react-redux'
//import TempoSelector from './components/TempoSelector'
//import CountSelector from './components/CountSelector'
import BeatTable from './components/BeatTable'

export class App extends Component {
  constructor() {
    super()
    //console.log(window.AudioContext || window.webkitAudioContext)
  }

  render() {
    //const { }  = this.state
    const { isPlaying }  = this.props.store
    return (
      <div className='app'>
        {
          //<TempoSelector/>
        }
        {
          //<CountSelector/>
        }
        <div className='playButton' onClick={this.props.togglePlaying}>
          { isPlaying ? 'Stop' : 'Play' }
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

