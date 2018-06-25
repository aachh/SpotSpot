import spotify from 'spotify-node-applescript'

export const getTrack = () =>
  new Promise((resolve, reject) =>
    spotify.getTrack((err, { id, artist, name, artwork_url } = {}) => {
      if (err) {
        reject(err)
      }
      resolve({
        id,
        artist,
        name,
        artwork_url,
      })
    })
  )

export const getPlayerState = () =>
  new Promise((resolve, reject) =>
    spotify.getState((err, { state: playerState } = {}) => {
      if (err) {
        reject(err)
      }
      resolve(playerState)
    })
  )

export const getIsRunning = () =>
  new Promise((resolve, reject) =>
    spotify.isRunning((err, isRunning) => {
      if (err) {
        reject(err)
      }
      resolve(isRunning)
    })
  )
