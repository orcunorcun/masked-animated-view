# masked-animated-view

A React Native component for creating masked animations.

## Installation

To install the package, use npm or yarn:

```sh
npm install masked-animated-view @react-native-masked-view/masked-view
```

or

```sh
yarn add masked-animated-view @react-native-masked-view/masked-view
```

### Additional Setup for iOS

If you're using this library in an iOS project, make sure to navigate to the `ios` directory and run `pod install` to install the necessary CocoaPods dependencies:

```sh
cd ios
pod install
```

## Usage

Here's a basic example of how to use `MaskedAnimatedView` in your React Native project.

```javascript
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { MaskedAnimatedView, MAVAnimationState } from 'masked-animated-view';

const maskItem = require('./path/to/your/maskItem.png');

const App = () => {
  const [animationState, setAnimationState] = useState(MAVAnimationState.LOADING);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Toggle Animation"
        onPress={() => {
          setAnimationState(
            animationState === MAVAnimationState.LOADING
              ? MAVAnimationState.LOADED
              : MAVAnimationState.LOADING
          );
        }}
      />
      <MaskedAnimatedView
        animationState={animationState}
        backgroundColor="black"
        maskItem={maskItem}
      >
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </MaskedAnimatedView>
    </View>
  );
};

export default App;
```

### Props

| Prop Name            | Type     | Default         | Description                                                                                   |
|----------------------|----------|-----------------|-----------------------------------------------------------------------------------------------|
| `children`           | node     | `null`          | The content to be masked by the animated view.                                                |
| `animationState`     | enum     | `LOADING`       | The state of the animation. Can be `LOADING` or `LOADED`.                                     |
| `maskItem`           | object   | `null`          | The item to be used as the mask (e.g., an image).                                             |
| `backgroundColor`    | string   | `black`         | The background color of the view.                                                             |
| `maskColor`          | string   | `white`         | The color of the mask.                                                                        |
| `maskElementStyle`   | object   | `{height: 80, width: 80}` | The style of the mask element.                                                      |

### Animation States

The `animationState` prop controls the state of the animation. It can have the following values:

- `LOADING`: The animation is in the loading state.
- `LOADED`: The animation is in the loaded state.

### Development

If you want to contribute or run the example project, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/orcunorcun/masked-animated-view.git
cd masked-animated-view
```

2. Install dependencies:

```sh
npm install
cd example
npm install
```

3. Run the example project:

```sh
npm start
```

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
