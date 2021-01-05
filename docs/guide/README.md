# Introduction

Pixellot WebSDK allows you to create a simple video player. It supports all main playback functionality.

Additionally, you can use custom UI components to extend default Player UI and functionality.


## Getting started

### Prerequisites
- [Node JS 12+](https://nodejs.org/en/)
- [Google IMA sdk script](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side) (Required only if you need ads)*

### Quick start
Here is our quick start with the WebSDK.

1. Include script.
``` html
<script src="https://pixellot-web-sdk.pixellot.tv/v-{version}/pixellot-web-sdk.js"></script>
```
2. Create a container.
``` html
<div id="player"></div>
```
3. Initialize the player.
``` js
const container = document.getElementById('player');
const myAwesomePlayer = window['pixellot-web-sdk'].Player(container);
```
