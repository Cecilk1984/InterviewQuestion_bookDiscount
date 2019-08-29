import React from 'react';
import './BookItem.css'
class BookItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    handleClick() {
        this.props.onClick(this.props.index);
    }
    render() {
        var style = {};
        if (this.props.image) {
            style = {
                backgroundImage: 'url(' + require('./Images/' + this.props.image) + ')',
            };
        }

        var spanStyle = { visibility: "hidden" };

        if (!this.props.image) {
            spanStyle = {};
        }

        return (
            <button className='book-item' style={style}
                onClick={() => { this.handleClick(); }}>
                <span className='book-title'
                    style={spanStyle}
                >{this.props.title}</span>
            </button>
        );
    }
}


export default BookItem;
