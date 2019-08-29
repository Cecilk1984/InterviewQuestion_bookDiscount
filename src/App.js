import React from 'react';
import './App.css';
import BookSelector from './Components/BookSelector';
import ShoppingBasket from './Components/ShoppingBasket';
import CheckingOut from './Components/CheckingOut';
import Discount from './Classes/Discount';

var books = [
  "The Philosopher's Stone",
  "The Chamber of Secrets",
  "The Prisoner of Azkaban",
  "The Goblet of Fire",
  "The Order of the Phoenix"
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: books[0],
          image: 'ThePhilosophersStone.jpg'
        },
        {
          title: books[1],
          image: 'TheChamberOfSecrets.jpg'
        },
        {
          title: books[2],
          image: 'ThePrisonerOfAzkaban.jpg'
        },
        {
          title: books[3],
          image: 'TheGobletOfFire.jpg'
        },
        {
          title: books[4],
          image: 'TheOrderOfThePhoenix.jpg'
        }
      ],
      basket: [],
      sum: 0.0,
      discount: 0.0,
      count: 0
    };

    this.discount = new Discount(null);
  }
  GetFromBasket(index, newBasket) {
    for (var i = 0; i < newBasket.length; i++) {
      if (newBasket[i].index === index) {
        return newBasket[i];
      }
    }

    return null;
  }
  GetSum(newBasket, countRef) {
    var ret = 0;
    var count = 0;
    for (var i = 0; i < newBasket.length; i++) {
      ret += (newBasket[i].count * newBasket[i].price);
      count += newBasket[i].count;
    }
    countRef.count = count;
    return ret;
  }
  BookSelector_onAdd(index) {
    var newBasket = this.state.basket.slice();
    var item = this.GetFromBasket(index, newBasket);

    if (item == null) {
      newBasket.push({
        index: index,
        title: books[index],
        titleIndex: index,
        count: 1,
        price: 8
      });
    } else {
      item.count++;
    }
    this.UpdateSummary(newBasket);
  }
  ShoppingBasket_onPlus = (index) => {
    this.discount.hello();
    var newBasket = this.state.basket.slice();
    var item = this.GetFromBasket(index, newBasket);

    if (item != null) {
      item.count++;
    }

    this.UpdateSummary(newBasket);
  }
  UpdateSummary(newBasket) {
    var countRef = {};
    var sum = this.GetSum(newBasket, countRef);
    var discounted = this.discount.Checkout(newBasket, true);
    this.setState({
      basket: newBasket,
      sum: sum,
      discounted: discounted,
      discount: Math.round((discounted - sum) * 100) / 100
    });
  }
  ShoppingBasket_onMinus = (index) => {
    var newBasket = this.state.basket.slice();
    var item = this.GetFromBasket(index, newBasket);

    if (item != null) {
      item.count--;
      if (item.count < 1) item.count = 1;
    }

    this.UpdateSummary(newBasket);
  }

  UpdateIndex(newBasket) {
    for (var i = 0; i < newBasket.length; i++) {
      newBasket[i].index = i;
    }
  }

  ShoppingBasket_onDelete = (index) => {
    var newBasket = this.state.basket.slice();

    if (newBasket.length > index) {
      newBasket.splice(index, 1);
    }

    this.UpdateIndex(newBasket);

    this.UpdateSummary(newBasket);
  }
  render() {
    return (
      <div className="App">
        <BookSelector items={this.state.books} onAdd={(index) => { this.BookSelector_onAdd(index); }} />
        <ShoppingBasket items={this.state.basket}
          onPlus={this.ShoppingBasket_onPlus}
          onMinus={this.ShoppingBasket_onMinus}
          onDelete={this.ShoppingBasket_onDelete}
          discount={this.state.discount}
          sum={this.state.sum}
          discounted={this.state.discounted} />
      </div>
    );
  }
}

export default App;
