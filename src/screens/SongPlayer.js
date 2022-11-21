import React from 'react';

//importing specific song background images for each songs
import songBg1 from './../images/song1.jpg';
import songBg2 from './../images/song2.jpg';
import songBg3 from './../images/song3.jpg';

//importing songs (mp3)
import song1 from './../songs/01 - Saath Hum Rahein.mp3';
import song2 from './../songs/02 - Drishyam 2 - Title Track.mp3';
import song3 from './../songs/03 - Sahi Galat.mp3';

class SongPlayer extends React.Component{
    constructor(props) {
        super(props);

        this.songs = {
            1: 'Saath Hum Rahein',
            2: 'Drishyam 2 - Title Track',
            3: 'Sahi Galat'
        };
        this.selected = parseInt(props.screen.slice(4,5)); //getting the song-number to be played from the props.screen value
        this.totalSongs = 3;
        this.playingSong = true; //while the song is playing, this value would be true
        this.playBtn = document.getElementById('bottom-btn');
        this.fwdBtn = document.getElementById('right-btn');
        this.bwdBtn = document.getElementById('left-btn');
    }

    //function for handelling the play/pause song
    playSong = () => {
        const audio = document.querySelector('#song-player-bg audio');
        if(this.playingSong) {
            audio.pause();
            this.playingSong = false;
        }
        else{
            audio.play();
            this.playingSong = true;
        }
    }

    //function to switch to next song
    nextSong = () => {
        if(this.selected === this.totalSongs) this.selected = 1;
        else this.selected++;

        this.playingSong = true;
        this.props.handleSelectBtn('song' + this.selected);
    }

    //function to switch to previous song
    prevSong = () => {
        if(this.selected === 1) this.selected = this.totalSongs;
        else this.selected--;

        this.playingSong = true;
        this.props.handleSelectBtn('song' + this.selected);
    }

    //adding the correct event listeners to circular menu buttons
    componentDidMount() {
        this.playBtn.addEventListener('click', this.playSong);
        this.fwdBtn.addEventListener('click', this.nextSong);
        this.bwdBtn.addEventListener('click', this.prevSong);
    }

    //removing the eventListeners before the component unmounts
    componentWillUnmount() {
        this.playBtn.removeEventListener('click', this.playSong);
        this.fwdBtn.removeEventListener('click', this.nextSong);
        this.bwdBtn.removeEventListener('click', this.prevSong);
    }

    render() {
        const selected = this.selected;

        //storing the correct song-url and song-background in a variable
        let screenBg, songUrl;
        const songTitle = this.songs[selected];
        if(selected === 1) {
            screenBg = songBg1;
            songUrl = song1;
        }
        if(selected === 2) {
            screenBg = songBg2;
            songUrl = song2;
        }
        if(selected === 3) {
            screenBg = songBg3;
            songUrl = song3;
        }

        return (
            <div id='song-player-bg' style={{backgroundImage: `url(${screenBg})`}}>
                <div>
                    <h3>{songTitle}</h3>
                    <audio autoPlay controls controlsList='nodownload noplaybackrate' src={songUrl}></audio>
                    <div>
                        Use <i className="fa-solid fa-backward"></i> / <i className="fa-solid fa-forward"></i> to play other songs <br />
                        Can use <i className="fa-solid fa-play"></i><i className="fa-solid fa-pause" style={{marginLeft: 2}}></i> to play/pause song
                    </div>
                </div>
            </div>
        )
    }
}

export default SongPlayer;