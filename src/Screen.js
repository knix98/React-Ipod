import React from 'react';

//importing all the required screens
import Mainmenu from './screens/Mainmenu';
import MainmenuScreen from './screens/MainmenuScreens';
import SongsScreen from './screens/SongsScreen';
import SongPlayer from './screens/SongPlayer';

class Screen extends React.Component{
  
  render() {
    const { whichScreen,handleSelectBtn } = this.props;

    return(
      <div id="screen">
        {/* mounting the correct screen according to the this.props.whichScreen */}
        
        {whichScreen === 'mainmenu' && <Mainmenu handleSelectBtn={handleSelectBtn} />}
        {whichScreen === 'Music' && <SongsScreen handleSelectBtn={handleSelectBtn} />}
        {whichScreen.slice(0,4) === 'song' && <SongPlayer screen={whichScreen} handleSelectBtn={handleSelectBtn} />}
        {(whichScreen === 'Games' || whichScreen === 'Cover Flow' || whichScreen === 'Settings') && <MainmenuScreen screen={whichScreen} />}
      </div>
    )
  }
}

export default Screen;