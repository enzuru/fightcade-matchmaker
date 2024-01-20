const findPlayer = require('../src/service')
const assert = require('assert')

const players = [
  {
    id: 0,
    name: 'Player searching for match',
    status: 'looking',
    ping: 10,
    elo: 1000,
    rejected: [6]
  },
  {
    id: 1,
    name: 'Player too far',
    status: 'looking',
    ping: 1000,
    elo: 1000,
    rejected: []
  },
  {
    id: 2,
    name: 'Player too bad',
    status: 'looking',
    ping: 10,
    elo: 500,
    rejected: [],
  },
  {
    id: 3,
    name: 'Player too good',
    status: 'looking',
    ping: 10,
    elo: 1500,
    rejected: []
  },
  {
    id: 4,
    name: 'Player not looking',
    status: 'away',
    ping: 10,
    elo: 1000,
    rejected: []
  },
  {
    id: 5,
    name: 'Player that rejected searcher',
    status: 'away',
    ping: 10,
    elo: 1000,
    rejected: [1]
  },
  {
    id: 6,
    name: 'Player that was rejected by searcher',
    status: 'away',
    ping: 10,
    elo: 1000,
    rejected: []
  },
  {
    id: 7,
    name: 'Player that is perfect',
    status: 'looking',
    ping: 10,
    elo: 1000,
    rejected: [],
  }
]

describe('find player', () => {
  it('return player of similiar rank and good latency', (done) => {
    const foundPlayer = findPlayer(players[0], players)
    assert.equal(foundPlayer.name, 'Player that is perfect')
    done()
  })
})
