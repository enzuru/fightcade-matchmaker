# Fightcade matchmaking

This is my attempt at creating a service to provide matchmaking for Fightcade.

## Approach

Currently it takes into account:

- Ping
- Elo rating
- Rejections

Rejections allow players to reject each other and not have the matchmaker try to match them again.

For production, I would want to turn the "rejection" system into a Redis service where rejections expire after a set amount of time, possibly decided by the rejector.

## Usage

```
npm install
npm lint
npm test
```
