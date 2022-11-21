import React from 'react';
import ZingTouch from 'zingtouch';

class SongsScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            items: 3,
            selected: 1
        }

        this.zt = '';
        this.angleRotated = 0;
    }

    handleSelectBtn = () => {
        this.props.handleSelectBtn('song' + this.state.selected);
    }

    componentDidMount() {
        let { items, selected } = this.state;
        let app = this;

        const selectBtn = document.getElementById('select-btn');
        const playBtn = document.getElementById('bottom-btn');
        selectBtn.addEventListener('click', this.handleSelectBtn);
        playBtn.addEventListener('click', this.handleSelectBtn);

        const menuBtns = document.getElementById('menu-btns');
        this.zt = new ZingTouch.Region(menuBtns);
        this.zt.bind(menuBtns, 'rotate', function (e) {
            app.angleRotated += e.detail.distanceFromLast;
            if (app.angleRotated > 60 || app.angleRotated < -60) {
                if (app.angleRotated > 60) {
                    selected++;
                    if (selected > items) selected = 1;
                }
                if (app.angleRotated < -60) {
                    selected--;
                    if (selected < 1) selected = items;
                }

                app.setState({
                    selected: selected
                })
                app.angleRotated = 0;
            }
        });
    }

    componentWillUnmount() {
        const menuBtns = document.getElementById('menu-btns');
        const selectBtn = document.getElementById('select-btn');
        const playBtn = document.getElementById('bottom-btn');

        this.zt.unbind(menuBtns);
        selectBtn.removeEventListener('click', this.handleSelectBtn);
        playBtn.removeEventListener('click', this.handleSelectBtn);
    }

    render() {
        const { selected } = this.state;

        return (
            <div id='songs-screen'>
                <div>
                    <h1>SONGS</h1>
                    <div className={selected === 1 ? 'song-selected' : ''}>01 - Saath Hum Rahein</div>
                    <div className={selected === 2 ? 'song-selected' : ''}>02 - Drishyam 2 - Title Track</div>
                    <div className={selected === 3 ? 'song-selected' : ''}>03 - Sahi Galat</div>
                </div>
            </div>
        )        
    }
}

export default SongsScreen;