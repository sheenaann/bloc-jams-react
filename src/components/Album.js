import React, { Component } from 'react';
import albumData from './../data/albums';
import Ionicon from 'react-ionicons';
<<<<<<< HEAD
import PlayerBar from './PlayerBar';
=======
>>>>>>> 4971fceeb6e4bdb15f2978b23c607ca633f4da1a

class Album extends Component {
  constructor(props){
    super(props);

  const album = albumData.find( album => {
    return album.slug === this.props.match.params.slug
  });
  this.state ={
    album: album,
    currentSong: album.songs[0],
    isPlaying: false,
    hoveredSong: null
  };
  this.audioElement = document.createElement('audio');
  this.audioElement.src = album.songs[0].audioSrc;
}
play() {
  this.audioElement.play();
  this.setState({ isPlaying: true});
}
pause() {
  this.audioElement.pause();
  this.setState({isPlaying: false});
}
setSong(song) {
  this.audioElement.src = song.audioSrc;
  this.setState({currentSong:song});
}

handleSongClick(song){
  const isSameSong = this.state.currentSong === song;
  if (this.state.isPlaying && isSameSong) {
    this.pause();
  } else {
    if (!isSameSong) {this.setSong(song);}
    this.play();
  }
}
<<<<<<< HEAD

handlePrevClick() {
const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
const newIndex = Math.max(0, currentIndex-1);
const newSong = this.state.album.songs[newIndex];
this.setSong(newSong);
this.play();
}

=======
>>>>>>> 4971fceeb6e4bdb15f2978b23c607ca633f4da1a
handleMouseEnter(song) {
  this.setState({
    hoveredSong:song
  });
}
handleMouseLeave(song){
  this.setState({
    hoveredSong:song
  });
}
selectIcon(song, index) {
  if (!this.state.isPlaying && song === this.state.hoveredSong){
    return <span className='ion-md-play'></span>
  } else if (this.state.isPlaying && song === this.state.hoveredSong && song === this.state.currentSong) {
    return <span className='ion-md-pause'></span>
  } else {
    return <span>{index+1}</span>
}
}
  render() {
    return(
      <section className="album">
      <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">
          <h1 id="album-title">{this.state.album.title}</h1>
          <h2 className="artist">{this.state.album.artist}</h2>
          <div id="release-info">{this.state.album.releaseInfo}</div>
        </div>
      </section>
  <table id="song-list">
  <colgroup>
    <col id="song-number-column" />
    <col id="song-title-column" />
    <col id="song-duration-column" />
  </colgroup>
  <tbody>
  {
  this.state.album.songs.map( (song, index) =>
<<<<<<< HEAD
  <tr className="song" key={index} onClick={() => this.handleSongClick(song)}>
  <td onMouseEnter={ () => this.handleMouseEnter(song)} onMouseLeave={ () => this.handleMouseLeave(song)}>{this.selectIcon(song, index)}</td>
=======
<tr className="song" key={index} onClick={() => this.handleSongClick(song)}>
<td onMouseEnter={ () => this.handleMouseEnter(song)} onMouseLeave={ () => this.handleMouseLeave(song)}>{this.selectIcon(song, index)}</td>
>>>>>>> 4971fceeb6e4bdb15f2978b23c607ca633f4da1a
  <td>{song.title}</td>
  <td>{song.duration}</td>
  </tr>
)
}
  </tbody>
</table>
<PlayerBar
    isPlaying={this.state.isPlaying}
    currentSong={this.state.currentSong}
    handleSongClick={() => this.handleSongClick(this.state.currentSong)}
    handlePrevClick={() => this.handlePrevClick()}
    />
      </section>
    );
  }
}
export default Album;
