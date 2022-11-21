import React from 'react';
import Screen from './Screen';
import Buttons from './Buttons';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      screen: 'home'
    }
  }

  handleMenuBtn = () => {
    //if already on mainmenu then return 
    if(this.state.screen === 'mainmenu') return;

    //otherwise set screen to 'mainmenu'
    this.setState({
      screen: 'mainmenu'
    })
  }

  handleSelectBtn = (screen) => {
    this.setState({
      screen: screen
    })
  }

  handleBackBtn = () => {
    let { screen } = this.state;
    let newScreen;

    if(screen === 'home') return;
    if(screen === 'mainmenu') newScreen = 'home';
    else if(screen.slice(0,4) === 'song') newScreen = 'Music'; //if on song-player screen, go back to songs-list screen
    else newScreen = 'mainmenu'; //means screen is either from games, settings or coverflow

    this.setState({
      screen: newScreen
    })
  }
  
  render() {
    const { screen } = this.state;

    return(
      <div id="app-bg">
        <div id="ipod">
          <Screen 
            whichScreen={screen} 
            handleSelectBtn={this.handleSelectBtn} 
          />
          <Buttons 
            whichScreen={screen}
            handleMenuBtn = {this.handleMenuBtn}
            handleBackBtn = {this.handleBackBtn}
          />
        </div>
      </div>
    )
  }
}

export default App;
