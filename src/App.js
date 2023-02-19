import React from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      screen: "home",
    };
  }

  handleMenuBtn = () => {
    //if already on mainmenu then return
    if (this.state.screen === "mainmenu") return;

    //otherwise set screen to 'mainmenu'
    this.setState({
      screen: "mainmenu",
    });
  };

  handleSelectBtn = (screen) => {
    this.setState({
      screen: screen,
    });
  };

  handleBackBtn = () => {
    let { screen } = this.state;
    let newScreen;

    if (screen === "home") return;
    if (screen === "mainmenu") newScreen = "home";
    else if (screen.slice(0, 4) === "song") newScreen = "Music";
    //if on song-player screen, go back to songs-list screen
    else newScreen = "mainmenu"; //means screen is either from games, settings or coverflow

    this.setState({
      screen: newScreen,
    });
  };

  render() {
    const { screen } = this.state;

    return (
      <div id="app-bg">
        <div id="ipod">
          <Screen whichScreen={screen} handleSelectBtn={this.handleSelectBtn} />
          <Buttons
            whichScreen={screen}
            handleMenuBtn={this.handleMenuBtn}
            handleBackBtn={this.handleBackBtn}
          />
        </div>
        <div id="instructions">
          <div>HOW TO USE ?</div>
          <br />
          Click the <i className="fa-solid fa-bars"></i> button to see the menu.
          <br /> <br />
          The "Music" menu-item contains the songs inside it.
          <br /> <br />
          To highlight different menu options, move your mouse anywhere over the
          white circular region, and while keeping the mouse button pressed,
          move over the white circular boundary. As you keep moving the mouse,
          different menu options will keep getting highlighted.
          <br /> <br />
          To select a menu item, click on the "SELECT" button when the desired
          menu item is highlighted. Click the "BACK" button to go back a screen.
          <br /> <br />
          Other buttons are for playing/pausing a song and moving to other
          songs.
        </div>
      </div>
    );
  }
}

export default App;
