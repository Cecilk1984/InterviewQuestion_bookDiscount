import React from 'react';
import './BasketSummaryElement.css';

class BasketSummaryElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="element-container">
                <div className="left-side-bar"></div>
                <div className="right-side-content">
                    <div className="caption">{this.props.Caption}</div>
                    <div className="value">{this.props.Value}</div>
                </div>
            </div>
        );
    }
}


export default BasketSummaryElement;
