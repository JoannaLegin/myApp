import React from "react";
import Button from './Button'
import Time from './timer'


class TopBar extends React.Component {
    render() {
        const { timer } = this.props;
        return (
            <div className="navbarMain">
                <h2 className="navbarMain-title">Zgarnij kod rabatowy na zakupy !</h2>
            <div className="navbar">
                <div className="game-title"> Połącz karty - masz 10 sekund !</div>
                <div><Time/></div>
            </div>
<Button/>
            </div>
        );
    }
}

export default TopBar;
