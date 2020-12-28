
# Player API

## play()
Start media playback

- Usage: 
``` js
player.play();
```

## pause()
Pause media playback

- Usage: 
``` js
player.pause();
```

## poster([src])
Get or set the poster image source url.

- Arguments:
    - `{String}` Poster image source URL
- Usage:
``` js
// get
const currentPoster = pxltPlayer.poster;
// set
pxltPlayer.poster = 'http://example.com/myImage.jpg';
```

## volume([percentAsDecimal])
Get or set the current volume of the media.

- Arguments:
    - `{Number}` The new volume as a decimal percent
- Usage:
``` js
// get
const currentVolume = pxltPlayer.volume;
// set
pxltPlayer.volume = 0.5; // Set volume to half
```
0 is off (muted), 1.0 is all the way up, 0.5 is half way.

## currentTime([seconds])
Get or set the current time (in seconds)

- Arguments:
    - `{Number}` The new volume as a decimal percent
- Usage:
``` js
// get
const currentTime = pxltPlayer.currentTime;
// set
pxltPlayer.currentTime = 120; // 2 minutes into the video
```
