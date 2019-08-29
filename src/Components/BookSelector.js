import React from 'react';
import './BookSelector.css';
import BookItem from './BookItem';
class BookSelector extends React.Component {
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
                    <BookItem key={i}
                        title={this.props.items[i].title}
                        index={i}
                        image={this.props.items[i].image}
                        onClick={(index)=>{this.props.onAdd(index);}}></BookItem>);
            }
        }

        return (
            <div className='book-selector-container'>
                <div>
                    <span className='book-selector-title'>
                        BOOKS
                    </span>
                </div>
                <div className='books-container'>
                    {list}
                </div>
            </div>
        );
    }
}


export default BookSelector;
