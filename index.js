import React, {
  Component,
  PropTypes,
} from 'react';

import {
  requireNativeComponent,
  View,
} from 'react-native';

export default class Shimmer extends Component {
  static propTypes = {
    ...View.propTypes,
    animating: PropTypes.bool,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    duration: PropTypes.number,
    pauseDuration: PropTypes.number,
    animationOpacity: PropTypes.number,
    opacity: PropTypes.number,
    speed: PropTypes.number, // (discarded) please use ‘duration’ instead.
    highlightLength: PropTypes.number,
    beginFadeDuration: PropTypes.number,
    endFadeDuration: PropTypes.number,
  };

  static defaultProps = {
    animating: true,
  };

  render() {
    return (<RNShimmeringView { ...this.props } />);
  }
}

const RNShimmeringView = requireNativeComponent('RNShimmeringView', Shimmer);
