import {Animated, Easing} from 'react-native';

export const loadingAnimation = scaleAnim => {
  return Animated.loop(
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]),
  );
};

export const startLoadedAnimation = (scaleAnimBackground, scaleAnim, colorAnim) => {
  return Animated.parallel([
    Animated.timing(scaleAnimBackground, {
      toValue: 1,
      duration: 700,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(scaleAnim, {
      toValue: 50,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(colorAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }),
  ]);
};

export const resetLoadedAnimation = (scaleAnim, colorAnim, scaleAnimBackground) => {
  return Animated.parallel([
    scaleAnimBackground.setValue(1),
    Animated.timing(scaleAnimBackground, {
      toValue: 1.1,
      duration: 700,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    scaleAnim.setValue(2),
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    colorAnim.setValue(0.5),
    Animated.timing(colorAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }),
  ]);
};

export const getAnimatedTransformStyle = scaleAnim => {
  return {
    transform: [{scale: scaleAnim}],
  };
};

export const getAnimatedColorStyle = colorAnim => {
  return {
    backgroundColor: colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', '#ffffff'],
    }),
  };
};
