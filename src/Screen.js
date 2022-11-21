import React from 'react';
import Mainmenu from './screens/Mainmenu';
import MainmenuScreen from './screens/MainmenuScreens';
import SongsScreen from './screens/SongsScreen';
import SongPlayer from './screens/SongPlayer';

class Screen extends React.Component{
  // constructor() {
  //   super();

  //   this.state = {
  //     screen: [
  //       {}
  //     ]
  //   }
  // }
  
  render() {
    const { whichScreen,handleSelectBtn } = this.props;

    return(
      <div id="screen">
        {whichScreen === 'mainmenu' && <Mainmenu handleSelectBtn={handleSelectBtn} />}
        {whichScreen === 'Music' && <SongsScreen handleSelectBtn={handleSelectBtn} />}
        {whichScreen.slice(0,4) === 'song' && <SongPlayer screen={whichScreen} handleSelectBtn={handleSelectBtn} />}
        {(whichScreen === 'Games' || whichScreen === 'Cover Flow' || whichScreen === 'Settings') && <MainmenuScreen screen={whichScreen} />}
      </div>
    )
  }
}

export default Screen;