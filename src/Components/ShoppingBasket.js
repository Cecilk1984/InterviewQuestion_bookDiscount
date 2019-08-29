import React from 'react';
import BasketLine from './BasketLine';
import BasketSummary from './BasketSummary';
import './ShoppingBasket.css';

class ShoppingBasket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        var list = [];

        if (this.props.items) {
            for (var i = 0; i < this.props.items.length; i++) {
                list.push(
                    <BasketLine key={i} oddLine={i % 2 !== 0}
                        item={this.props.items[i]}
                        onPlus={this.props.onPlus}
                        onMinus={this.props.onMinus}
                        onDelete={this.props.onDelete}></BasketLine>)
            }
        }
        return (
            <div>
                <div className='section-title-container'>
                    <span className='section-title'>
                        SHOPPING BASKET
                    </span>
                </div>
                <div className='basket-item-container'>
                    {list}
                </div>
                <BasketSummary                    
                    sum={this.props.sum}
                    discount={this.props.discount}
                    discounted={this.props.discounted}></BasketSummary>
            </div>
        );
    }
}


export default ShoppingBasket;
