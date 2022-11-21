import React from 'react'

//importing the correct background images for the different menu item's screens
import gamesBg from './../images/games_bg.avif';
import coverFlowBg from './../images/coverflow_bg.avif';
import settingsBg from './../images/settings_bg.avif';

class MainmenuScreen extends React.Component {
    render() {
        const { screen } = this.props;

        //the correct screen should be shown according the menu-item that was selected
        let screenBg;
        if(screen === 'Games') screenBg = gamesBg;
        if(screen === 'Cover Flow') screenBg = coverFlowBg;
        if(screen === 'Settings') screenBg = settingsBg;

        return (
            <div id='mainmenu-screens' style={{backgroundImage: `url(${screenBg})`}}>
                <div>
                    <h1>{screen.toUpperCase()}</h1> <br />
                    {screen === 'Games' && <i className="fa-solid fa-gamepad"></i>}
                    {screen === 'Settings' && <i className="fa-solid fa-gear"></i>}
                    {screen === 'Cover Flow' && <i className="fa-solid fa-photo-film"></i>}
                </div>
            </div>
        )
    }
}


export default MainmenuScreen;