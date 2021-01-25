# FPS React

FPS React is a small package with some usefull hooks to detect low frame rate, showing FPS stats or just get the raw FPS data.


## useFPSDetect
Used for detecting low frame rate and maybe disable effect to improve preformace.
### Usage
```javascript
import { useFPSDetect } from 'fps-react'
...
const lowFrameRate = useFPSDetect({ minimumFps: 20,  })
useEffect(() => {
  if (lowFrameRate) {
    //disable effects
  }
},[lowFrameRate])

```

## FPSStats
![FPSStats](https://i.imgur.com/6ur4klV.png)

Stats can be placed on page, the stats are rendered as a svg image

### Parameters
| Parameter     | Type     | Description                                                        |
|---------------|----------|--------------------------------------------------------------------|
| minimumFps    | number   | Minimum FPS that will trigger the value to be set to 'false'       |
| fpsHistory    | number   | Number of FPS stored used to calc an avarage FPS, default: 2       |
| fpsSampleRate | number   | How offent the FPS is updated, default: 1000                       |

### Usage

```javascript
import React from "react";
import { render } from "react-dom";
import { FPSStats } from "fps-react";

const App = () => {
  return (
    <div>
      <FPSStats />
    </div>
  );
};

render(<App />, document.body);
```
### Parameters
| Parameter     | Type     | Description                                                              |
|---------------|----------------|--------------------------------------------------------------------|
| top           | string, number | CSS variable top, default: 2                                       |
| bottom        | string, number | CSS variable top, default: 'auto'                                  |
| right         | string, number | CSS variable top, default: 'auto                                   |
| left          | string, number | CSS variable top, default: 2                                       |
| fpsSampleRate | number         | How offent the FPS is updated, default: 1000                       |

## useFPSCore
This is a hook for getting an array with FPS, the last element in the array contains the current frame rate.
### Usage
```javascript
import { useFPSCore } from 'fps-react'
const { fps } = useFPSCore({ fpsHistory: 50, fpsSampleRate: 1000 })
```
### Parameters
| Parameter     | Type     | Description                                                        |
|---------------|----------|--------------------------------------------------------------------|
| fpsHistory    | number   | Number of FPS stored, default: 50                                  |
| fpsSampleRate | number   | How offent the FPS is updated, default: 1000                       |

## Credits
Inspired by https://github.com/sebslomski/react-stats and https://github.com/mrdoob/stats.js.