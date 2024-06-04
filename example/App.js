import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {MaskedAnimatedView, MAVAnimationState} from 'masked-animated-view';

const maskItem = require('./path/to/your/maskItem.png');

const App = () => {
  const [animationState, setAnimationState] = useState(MAVAnimationState.LOADING);

  return (
    <View style={{flex: 1}}>
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
        <View style={{flex: 1, backgroundColor: 'blue'}} />
      </MaskedAnimatedView>
    </View>
  );
};

export default App;
