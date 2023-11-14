import React, { Component } from 'react';
import axios from 'axios'

class CartItemsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemList: [],
      cartItemList: [],
      total: 0
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const result = await axios.get("http://localhost:3001/allItemsList")
      this.setState({ itemList: result.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  addItemToCart(item) {
    this.setState({ cartItemList: [...this.state.cartItemList, item] });
    this.setState({ total: this.state.total + item.price })
  }

  render() {
    const { itemList, cartItemList, total } = this.state;

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{marginRight:"100px"}}>
            <h2>All Items</h2>
            {itemList && (
              <ul>
                {itemList.map((item, index) => (
                  <li key={index} onClick={() => this.addItemToCart(item)}>
                    <p>Item: {item.itemName}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div >
            <h2>Added Cart Items</h2>
            <ul>
              {cartItemList.map((item, index) => (
                <li key={index}>
                  <p>{item.itemName} : {item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul style={{listStyle: "none"}}>
            <li>Total is :   {total}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CartItemsList;
