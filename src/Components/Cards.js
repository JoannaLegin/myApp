import React from 'react';



class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    clicked(framework){
        this.props.click(framework)
    }
    render(){
        return (
            <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.framework)}>
                <div className="front">
                        <img src={"https://files.fm/thumb_show.php?i=56wh46nnk"} alt="front-side-photo"/>
                    </div>
                    <div className="back">
                        <img src={"https://raw.githubusercontent.com/JoannaLegin/myApp/main/src/Components/logos/" + this.props.framework + ".jpg" }/>
                    </div>
                </div>
            )
        }
    }

export default Card;



