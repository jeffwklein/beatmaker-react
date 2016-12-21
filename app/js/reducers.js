import _ from 'lodash'
import uuid from 'uuid/v4'

export default (state = {
  isPlaying: false,
  playID: null,
  // beats per minute
  bpm: DEFAULT_BPM,
  // milliseconds per subdivision (always related to bpm)
  milliseconds: DEFAULT_MILLISECONDS,
  // notes per loop
  subdivisions: DEFAULT_SUBDIVISIONS,
  // data structure representing the instrument table
  instrumentRows: generateInstrumentTable(DEFAULT_SUBDIVISIONS, DEFAULT_MILLISECONDS)
}, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAYING':
      const newPlayState = !state.isPlaying
      const newPlayID = newPlayState ? uuid() : null
      return {...state,
        isPlaying: newPlayState,
        playID: newPlayID
      }
    case 'UPDATE_BPM':
      const isValidBpm = (b) => b >= 40 && b <= 240 ? b : DEFAULT_BPM
      const bpm = isValidBpm(action.bpm || state.bpm || DEFAULT_BPM)
      const subdivisions = action.subdivisions || state.subdivisions || DEFAULT_SUBDIVISIONS
      const milliseconds = bpmToMilliseconds(bpm)
      // update offset time
      const instrumentRows = state.instrumentRows.map(row => {
        return row.beatList.map((item, i) => ({ ...item, offset: i * milliseconds }))
      })
      return {...state,
        bpm, milliseconds, subdivisions, instrumentRows
      }
    case 'TOGGLE_SELECT':
      const { row, col } = action
      let rowsWithSelection = [...state.instrumentRows]
      rowsWithSelection[row].beatList[col].selected = !rowsWithSelection[row].beatList[col].selected
      return {...state,
        instrumentRows: rowsWithSelection
      }
    default:
      return state
  }
}

// 16th notes of 4/4 measure
const DEFAULT_SUBDIVISIONS = 16

// enumeration of instruments
const SOUNDS = [
  'kick',
  'snare'
]

// milliseconds per sixteenth note
const bpmToMilliseconds = (bpm) => (60000.0 / bpm) / 4.0

// start at 120 beats per minute
const DEFAULT_BPM = 100.0
const DEFAULT_MILLISECONDS = bpmToMilliseconds(DEFAULT_BPM)


// create an empty instrument row
const setInstrument = (subdiv, ms) => {
  const blah = _.times(subdiv, (i) => ({
    selected: false,
    offset: i * ms
  }))
  return blah
}

// returns list of objects each representing an instrument row
const generateInstrumentTable = (subdiv, ms) => {
  return SOUNDS.map(sound => ({
    sound,
    beatList: setInstrument(subdiv, ms)
  }))
}

