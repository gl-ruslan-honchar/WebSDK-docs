
# WebSDK Player API


## Player(container, options)
Creates the instance of player

- Arguments:
    - **container** 
        - Type: `HTMLElement`
        - Description: player container
    - **options** 
        - Type: `Object`
        - Description: options which will be passed to player instance
- Usage:
``` js
const container = document.getElementById('player');
const myAwesomePlayer = window['pixellot-web-sdk'].Player(container);
```

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

## stop()
Resets the player

- Usage: 
``` js
player.stop();
```

## isLive()
Returns whether or not the player is in the "live" state.

- Type: `Boolean`
- Usage:
``` js
// get
const isLive = player.isLive();
```

## setSource(url, preRoll, midRolls)
Get or set the current time (in seconds)

- Arguments:
    - **url** 
        - Type: `String`
        - Description: source of video playback
    - **preRoll** 
        - Type: `String` - optional
        - Description: url to the VAST advertisement
    - **midRolls** 
        - Type: `Array<String>` - optional
        - Description: source list of urls to the VAST advertisement
- Usage:
``` js
const preRoll = 'https://ads/preroll/url';
const midRolls = ['https://ads/midroll/url'];

player.setSource('/public/my-cool-video.mp4');
player.setSource('/public/my-cool-video.mp4', preRoll);
player.setSource('/public/my-cool-video.mp4', preRollc, midRolls);
```

## getDuration()
Gets current duration of played video.

- Usage:
``` js
player.getDuration();
```

## currentTime[Get/Set]
Get or set the current time (in seconds)

- Arguments:
    - **seconds** 
        - Type: `Number`
        - Description: current time of played video (in seconds)
- Usage:
``` js
// get
const currentTime = player.currentTime;
// set
player.currentTime = 120; // 2 minutes into the video
```

## poster[Get/Set]
Get or set the poster image source url.

- Arguments:
    - **src** 
        - Type: `String`
        - Description: Poster image source URL
- Usage:
``` js
// get
const currentPoster = player.poster;
// set
player.poster = 'http://example.com/myImage.jpg';
```

## volume[Get/Set]
Get or set the current volume of the media.

- Arguments:
    - **volume** 
        - Type: `Number`
        - Description: The new volume as a decimal percent
- Usage:
``` js
// get
const currentVolume = player.volume;
// set
player.volume = 0.5; // Set volume to half
```
0 is off (muted), 1.0 is all the way up, 0.5 is half way.

## duration[Get]
Gets the duration of the media.

- Type: `Number`
- Usage:
``` js
// get
const currentDuration = player.duration;
```

## seeking[Get]
Returns whether or not the player is in the "seeking" state.

- Type: `Boolean`
- Usage:
``` js
// get
const isSeeking = player.seeking;
```

## vdjsPlayer
Property link to videojs player on which WebSDK is based.

- Usage:
``` js
player.vdjsPlayer[videoJSplayerProperty];
```

::: danger
The WebSDK is using videoJS player inside. 
We don't support any properties related to that, so please use it carefully
:::
