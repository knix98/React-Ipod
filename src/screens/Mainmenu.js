import React from 'react';
import ZingTouch from 'zingtouch';

class Mainmenu extends React.Component {
    constructor() {
        super();

        this.state = {
            items: 4,
            selected: 1
        }

        this.screens = {
            1: 'Music',
            2: 'Games', 
            3: 'Cover Flow',
            4: 'Settings'
        }
        this.angleRotated = 0;
        this.zt = '';
    }

    handleSelectBtn = () => {
        this.props.handleSelectBtn(this.screens[this.state.selected]);
    }

    componentDidMount() {
        let { items, selected } = this.state;
        let app = this; // app would be used in places where the the value of 'this' gets lost

        //adding 'show selected item' functionality to the select button
        const selectBtn = document.getElementById('select-btn');
        selectBtn.addEventListener('click', this.handleSelectBtn);

        //adding zingtouch functionality to the circular menu buttons
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

    //removing all the eventlisteners, zintouch regions before the component gets unmounted
    componentWillUnmount() {
        const menuBtns = document.getElementById('menu-btns');
        const selectBtn = document.getElementById('select-btn');

        this.zt.unbind(menuBtns);
        selectBtn.removeEventListener('click', this.handleSelectBtn);
    }

    render() {
        const { selected } = this.state;

        return (
            <div id='main-menu'>
                <div style={{ backgroundColor: '#ff0038', color: 'aliceblue' , fontSize: 25, fontWeight: 600 }}>MENU</div>
                <div className={selected === 1 ? 'menu-item-selected' : ''}>Music</div>
                <div className={selected === 2 ? 'menu-item-selected' : ''}>Games</div>
                <div className={selected === 3 ? 'menu-item-selected' : ''}>Cover Flow</div>
                <div className={selected === 4 ? 'menu-item-selected' : ''}>Settings</div>
            </div>
        )
    }
}


export default Mainmenu;