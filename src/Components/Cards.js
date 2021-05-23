import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    clicked(format){
        this.props.click(format)
    }
    render(){
        return (
            <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.format)}>
                <div className="front">
                    <img src={"https://files.fm/thumb_show.php?i=56wh46nnk"}/>
                </div>
                <div className="back">
                    <img src={"https://a.allegroimg.com/s128/11e8ad/31b320254d4c9302ac972dab2e14/komin-CHUSTA-wielofunkcyjna-PREZENT-buffa-ZIMOWA" + this.props.format + ".jpg"} alt="images_memory_game"/>
                </div>
            </div>
        )
    }
}
export default Card;
