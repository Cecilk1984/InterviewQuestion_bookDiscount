import React from 'react';
import './BasketSummary.css';
import BasketSummaryElement from "./BasketSummaryElement";
class BasketSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='basket-summary-container'>
                <BasketSummaryElement 
                    Caption="Sum"
                    Value={this.props.sum}>                    
                </BasketSummaryElement>
                <BasketSummaryElement 
                    Caption="Discount"
                    Value={this.props.discount}>                    
                </BasketSummaryElement>
                <BasketSummaryElement 
                    Caption="Discounted"
                    Value={this.props.discounted}>                    
                </BasketSummaryElement>
                <div className="checkout-button">
                    <span className="checkout-button-text">
                    CHECKOUT
                    </span>
                </div>
            </div >
        );
    }
}


export default BasketSummary;
