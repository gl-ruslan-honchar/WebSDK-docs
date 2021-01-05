
# Plugins

Now you can actually use some kind of plugins in WebSDK. The're lots of possibilities you can achieve. We have a new prop in WebSDK, called pluginManager that can attach new plugins to player.

Plugins are actually more same as decorators but they provide to you more functionality, and possibilities to manage your code. You can your own custom plugin, or extend existing ones, or just pass that plugins which we are providing to you in Plugins options in root of web-sdk, same way as the Decorators provided.

For example you can use existing WebSDK plugins like:

Plugins are located inside `window['pixellot-web-sdk'].Plugins` variable.
There are following plugins which you can use:
``` js
const {
    PlayerTagPlugin,
    TimeMovePlugin,
    TagCreatePlugin,
    ClipCreatePlugin
 } = window['pixellot-web-sdk'].Plugins;
 ```


## Register plugins

``` js
const { TimeMovePlugin } = window['pixellot-web-sdk'].Plugins;
const timeMovePlugin = {
    name: 'timeMovePlugin', // Name of property that will be attached to player
    plugin: TimeMovePlugin, // plugin class
    options: {}, // optional parameters
}
myPlayer.pluginManager.registerPlugin(timeMovePlugin);

// Than use it like

myPlayer.timeMovePlugin.updateCurrentTime(5); // updates current time on 5 points.
```

## Multiple register plugins

``` js 
const {TimeMovePlugin, TagCreatePlugin} = window['pixellot-web-sdk'].Plugins;
const myPlugins = [
    {
        name: 'timeMovePlugin',
        plugin: TimeMovePlugin,
        options: {},
    },
    //...
    {
        name: 'tagCreatePlugin',
        plugin: TagCreatePlugin,
        options: {},
    },
]
myPlayer.pluginManager.registerPlugins(myPlugins);
```

## Extend plugin
   
``` js
const { TimeMovePlugin } = window['pixellot-web-sdk'].Plugins;
class myCustomTimeMovePlugin extends TimeMovePlugin {
    constructor(player, options) {
        super(player, options)
        //...
    }

    customTimeUpdate(time) {
        this.player.currentTime = time
    }
}
const timeMovePlugin = {
    name: 'timeMovePlugin', // Name of property that will be attached to player
    plugin: myCustomTimeMovePlugin, // plugin class
    options: {}, // optional parameters
}
myPlayer.pluginManager.registerPlugin(timeMovePlugin);

// Than use it like

myPlayer.timeMovePlugin.customTimeUpdate(5); // updates current time on 5 points.
```


## Ads plugin

### playAd(source)
Immediately play ad.

- Arguments:
    - **source**
        - Type: `String`
        - Description: source of ad
- Usage:

``` js
player.playAd('https://ads/url');
```

### setPreRoll(url)
Sets video pre-roll ad.

- Arguments:
    - **url** 
        - Type: `String`
        - Description: url to the VAST advertisement
- Usage:

``` js
player.setPreRoll('https://ads/preroll/url');
```

### setMidRolls(urls[])
Sets video mid-rolls ads.

- Arguments:
    - **urls** 
        - Type: `Array<String>`
        - Description: source list of urls to the VAST advertisement
- Usage:

``` js
player.setMidRolls(['https://ads/midroll/url']);
```

### isAdsAllowed()
Returns `Boolean` value which represents possibility to play ads right now.

- Usage: 
``` js
const isAdsAllowed = player.isAdsAllowed();
```

Example before [playAd](./#playad-source) usage.

## Tag plugin

### showTags(tags[])
Show passed tags on UI.

- Arguments:
    - **tags** 
        - Type: `Array<Tag>`
        - Description: source list of urls to the VAST advertisement

- Usage:

``` js
player.showTags(tags);
```

### removeTags()
Remove tags from UI.

- Usage:

``` js
player.removeTags();
```

## TagCreate plugin

### tagUI.show()
Shows tag button on UI.

- Usage:

``` js
player.tagUI.show();
```

### tagUI.hide()
Hides tag button from UI.

- Usage:

``` js
player.tagUI.hide();
```

## TimeMove plugin
After this plugin has been applied, it adds the time move buttons to the UI.

## ClipCreate plugin

### startRecording()
Starts recording new clip.

- Usage:

``` js
player.startRecording();
```

### stopRecording()
Stops recording new clip.

- Usage:

``` js
player.stopRecording();
```

### cancelRecording()
Cancel recording new clip.

- Usage:

``` js
player.cancelRecording();
```

