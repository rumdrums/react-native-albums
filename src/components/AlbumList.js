import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = {albums: []};

  componentWillMount(): void {
    // debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(d => {
        console.log(d);
        this.setState({albums: d.data})
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
  }

  render() {
    console.log(this.state);
    return (
      <View>{this.renderAlbums()}</View>
    );
  }
}

export default AlbumList;