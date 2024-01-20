const LARGEST_ACCEPTABLE_ELO_DISTANCE = 300
const LARGEST_ACCEPTABLE_PING = 50

const findPlayer = (searchingPlayer, players = []) => {
  const filteredPlayers = players.filter(player =>
    player.id !== searchingPlayer.id &&
      player.status === 'looking' &&
      !player.rejected.includes(searchingPlayer.id) &&
      !searchingPlayer.rejected.includes(player.id) &&
      player.ping <= LARGEST_ACCEPTABLE_PING &&
      Math.abs(player.elo - searchingPlayer.elo) <= LARGEST_ACCEPTABLE_ELO_DISTANCE)

  filteredPlayers.sort((a, b) => a.ping - b.ping)
  return filteredPlayers[0]
}

module.exports = findPlayer
