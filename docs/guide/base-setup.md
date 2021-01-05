
# Base setup

Here is our quick start with the WebSDK.

- HTML
``` html
<div id="player"></div>

<script src="https://pixellot-web-sdk.pixellot.tv/v-{version}/pixellot-web-sdk.js"></script>
<script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
```

- Player initialization.
``` js
const container = document.getElementById('player');

const player = window['pixellot-web-sdk'].Player(container);
```

- Setting video source
``` js
player.setSource('/public/video-sample.mp4');
player.play();
```

- Plugins installation
``` js
const { TimeMovePlugin, ClipCreatePlugin } = window['pixellot-web-sdk'].Plugins;
const plugins = [
    {
        name: 'timeMovePlugin',
        plugin: TimeMovePlugin,
        options: {},
    },
    {
        name: 'clipCreatePlugin',
        plugin: ClipCreatePlugin,
        options: {},
    }
]

player.pluginManager.registerPlugins(plugins);
```

- Plugins usage
``` js
player.setSource('/public/video-sample.mp4');
player.play();
player.clipCreatePlugin.startRecording();

setTimeout(() => {
    player.clipCreatePlugin.stopRecording();
}, 5000);

// New clip is created after 5 sec.
```
