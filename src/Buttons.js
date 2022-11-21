import React from 'react';

class Buttons extends React.Component{

  render() {
    const { handleMenuBtn, handleBackBtn, whichScreen } = this.props;

    return(
      <div id="menu-btns" draggable='false' className={whichScreen.slice(0,4) === 'song' ? 'menu-btns-active' : ''}>
        <div id="center-btns">
            <div id="select-btn">SELECT</div>
            <div id="back-btn" onClick={handleBackBtn}>BACK</div>
        </div>
        
        <div className='circle-btns' id='top-btn' onClick={handleMenuBtn}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className='circle-btns' id='bottom-btn'>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause" style={{marginLeft: 2}}></i>
        </div>
        <div className='circle-btns' id='left-btn'>
          <i className="fa-solid fa-backward"></i>
        </div>
        <div className='circle-btns' id='right-btn'>
          <i className="fa-solid fa-forward"></i>
        </div>
      </div>
    )
  }
}

export default Buttons;