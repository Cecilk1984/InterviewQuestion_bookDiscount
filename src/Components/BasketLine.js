import React from 'react';
import './BasketLine.css';
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
class BasketLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    handlePlus() {
        this.props.onPlus(this.props.item.index);
    }

    handleMinus() {
        this.props.onMinus(this.props.item.index);
    }

    handleDelete() {
        this.props.onDelete(this.props.item.index);
    }

    render() {
        var darker = "rgb(125,125,225)";
        var lighter = "rgb(145,145,245)";
        var style = {
            backgroundColor: this.props.oddLine ? lighter : darker
        };
        return (
            <div className='basket-line' style={style}>
                <span className='basket-line-column basket-line-column-title'>
                    {this.props.item.title}
                </span>
                <div className='basket-line-column basket-line-column-count'>
                    <FaMinusSquare className='basket-column-element'
                        onClick={() => { this.handleMinus(); }}></FaMinusSquare>
                    <span className='basket-column-element'>{this.props.item.count}</span>
                    <FaPlusSquare className='basket-column-element'
                        onClick={() => { this.handlePlus(); }}></FaPlusSquare>
                </div>
                <span className='basket-line-column basket-line-column-price'>
                    {this.props.item.price * this.props.item.count * 1.0}
                </span>
                <div className='basket-line-column basket-line-column-delete'>
                    <FaTrashAlt className='basket-column-element'
                    onClick={() => { this.handleDelete(); }}></FaTrashAlt>
                </div>
            </div >
        );
    }
}


export default BasketLine;
