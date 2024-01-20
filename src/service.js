const ACCEPTABLE_ELO_DISTANCE = 300

const findPlayer = (searchingPlayer, players = []) => {
  const filteredPlayers = players.filter(player =>
    player.id !== searchingPlayer.id &&
      player.status === 'looking' &&
      !player.rejected.includes(searchingPlayer.id) &&
      !searchingPlayer.rejected.includes(player.id) &&
      Math.abs(player.elo - searchingPlayer.elo) <= ACCEPTABLE_ELO_DISTANCE)
  filteredPlayers.sort((a, b) => a.ping - b.ping)
  return filteredPlayers[0]
}

module.exports = findPlayer
