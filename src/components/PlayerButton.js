import React, { Component } from 'react';
import repeat1 from '../images/repeat1.png';
import repeat2 from '../images/repeat2.png';
import repeat3 from '../images/repeat3.png';

class PlayerButton extends Component {

  images = [repeat1, repeat2, repeat3 ];

  state = {
    currentImage: 0,
  }

  onChange = () => {

    let nextImageIndex;
    if (this.state.currentImage === 2) {
      nextImageIndex = 0;
    } else {
      nextImageIndex = this.state.currentImage + 1;
    }

    this.setState({ currentImage: nextImageIndex });
  }

  render () {
    return (
      <img onClick={this.onChange} src={this.images[this.state.currentImage]} width="200px"/>
    )
  }
}

export default PlayerButton;