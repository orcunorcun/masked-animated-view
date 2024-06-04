import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import {
  loadingAnimation,
  startLoadedAnimation,
  getAnimatedTransformStyle,
  getAnimatedColorStyle,
  resetLoadedAnimation,
} from '../animations/animationHelpers';

export const MAVAnimationState = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
};

export default function MaskedAnimatedView({
  children = null,
  animationState = MAVAnimationState.LOADING,
  maskItem: maskItemProp = null,
  backgroundColor: backgroundColorProp = 'black',
  maskColor: maskColorProp = 'white',
  maskElementStyle: maskElementStyleProp = {height: 80, width: 80},
}) {
  const scaleAnimBackground = useRef(new Animated.Value(1.1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const loadingAnimationInstance = loadingAnimation(scaleAnim);

  useEffect(() => {
    if (animationState === MAVAnimationState.LOADING) {
      Animated.sequence([
        resetLoadedAnimation(scaleAnim, colorAnim, scaleAnimBackground),
        loadingAnimationInstance
      ]).start();
    } else if (animationState === MAVAnimationState.LOADED) {
      loadingAnimationInstance.stop();
      startLoadedAnimation(scaleAnimBackground, scaleAnim, colorAnim).start();
    }
  }, [animationState]);

  return (
    <View style={[
      styles.container,
      {backgroundColor: backgroundColorProp}
    ]}>
      <MaskedView
        style={[styles.maskedView]}
        maskElement={
          <Animated.View
            style={[
              styles.maskElementContainer,
              getAnimatedColorStyle(colorAnim)
            ]}>
            <Animated.Image
              source={maskItemProp}
              style={[
                maskElementStyleProp,
                getAnimatedTransformStyle(scaleAnim)
              ]}
            />
          </Animated.View>
        }>
        <Animated.View
          style={[
            styles.backgroundContainer,
            getAnimatedTransformStyle(scaleAnimBackground),
            {backgroundColor: maskColorProp},
          ]}>
          {children}
        </Animated.View>
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maskedView: {
    flex: 1,
  },
  maskElementContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    flex: 1,
  },
});
