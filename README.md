# Fightcade matchmaking

This is my attempt at writing an algorithm to provide matchmaking for Fightcade.

## Approach

Currently it takes into account:

- Ping
- Elo rating
- Rejections

Rejections allow players to reject each other and not have the matchmaker try to match them again.

Once the algorithm is solid, hooking it up to Express.js should be trivial.

## Infrastructure

For production, I would want to turn the "rejection" system into likely a Redis service where rejections expire after a set amount of time, possibly decided by the rejector.

Given that we're talking about player lists in the hundreds, it's not a big deal to load the entire player list of a given game into memory for this service, although it may create an edge case where a player gets matched shortly after they stop looking. We may want to reject such a request at a client level when it is received.

Since Fightcade essentially is doing lots of querying on a tiny ephemeral set of players, an in-memory database for the player list of each game might also be a good idea if that is not already in place. I could set something up with Terraform or Kubernetes or any other tool pretty quickly.

## Usage

```
npm install
npm lint
npm test
```
