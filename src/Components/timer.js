import React from "react";
import Countdown from "react-countdown";

class Time extends React.Component {
    render() {
        return (
            <div className="timer"><Countdown date={Date.now() + 20000} /></div>
        )
    }
}

export default Time;
