# react-native-shimmer

Simple shimmering effect for any view in React Native. Based on [Shimmer](https://github.com/facebook/Shimmer).

![Shimmer](https://github.com/facebook/Shimmer/blob/master/shimmer.gif?raw=true)

## Installation

`$ npm install react-native-shimmer --save`

### Option: With [`rnpm`](https://github.com/rnpm/rnpm)

`$ rnpm link`

### Option: Manually

Add `ios/RNShimmer.xcodeproj` to **Libraries** and add `libRNShimmer.a` to **Link Binary With Libraries** under **Build Phases**. [More info and screenshots about how to do this is available in the React Native documentation](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content).

### Option: With [CocoaPods](https://cocoapods.org/)

Add the following to your `Podfile` and run `pod update`:

```
pod 'react-native-shimmer', :path => 'node_modules/react-native-shimmer'
```

## Usage

NOTE: `Shimmer` may only have one child.

```js
import Shimmer from 'react-native-shimmer';

<Shimmer>
  <Text>Loading...</Text>
</Shimmer>
```

### Properties

| Prop | Description | Default | iOS | Android |
|---|---|---|---|---|
|**`animating`**|Wether or not to show shimmering effect. |`true`|yes|yes|
|**`direction`**|The direction of shimmering animation, valid values are `up`, `down`, `left`, `right`. |`right`|yes|yes|
|**`duration`**|The shimmering animation duration in milliseconds.|`1000`|yes|yes|
|**`pauseDuration`**|The time interval between shimmerings in milliseconds. |`400`|yes|yes|
|**`animationOpacity`**|The opacity of the content while it is shimmering. |`0.5`|yes|yes|
|**`opacity`**|The opacity of the content before it is shimmering. |`1`|yes|no|
|**`speed`**|The speed of shimmering, in points per second. _**Discarded**, please use `duration` instead._|`230`|yes|yes|
|**`highlightLength`**|The highlight length of shimmering. Range of 0–1. |`1`|yes|no|
|**`beginFadeDuration`**|The duration of the fade used when shimmer begins. |`0.1`|yes|no|
|**`endFadeDuration`**|The duration of the fade used when shimmer ends. |`0.3`|yes|no|

## License

[MIT License](http://opensource.org/licenses/mit-license.html). Shimmer is under BSD license. © Joel Arvidsson 2016
