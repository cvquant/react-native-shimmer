import React, {
  Component,
  PropTypes,
} from 'react';

import {
  requireNativeComponent,
  Image,
} from 'react-native';

export default class Shimmer extends Component {
  static propTypes = {
    animating: PropTypes.bool,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    pauseDuration: PropTypes.number,
    animationOpacity: PropTypes.number,
    opacity: PropTypes.number,
    speed: PropTypes.number,
    highlightLength: PropTypes.number,
    beginFadeDuration: PropTypes.number,
    endFadeDuration: PropTypes.number,
  };

  static defaultProps = {
    animating: true,
  };

  render() {
    return (
      <RNShimmeringView {...this.props}>
        <Image>
          {this.props.children}
        </Image>
      </RNShimmeringView>);
  }
}

const RNShimmeringView = requireNativeComponent('RNShimmeringView', Shimmer);
