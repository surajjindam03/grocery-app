import React, { Component } from 'react';
import axios from 'axios'

class CartItemsList extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      itemList:[],
      cartItemList:[],
      total:0
    };
  }

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchData();
  }

  async fetchData() {
    try {
      // Make a request to your backend API
      const result = await axios.get("http://localhost:3001/allItemsList")

      // Update the state with the fetched data
      this.setState({ itemList: result.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  addItemToCart(item) {
    this.setState({ cartItemList: [...this.state.cartItemList, item]});
    this.setState({total: this.state.total+item.price})
    }

  render() {
    const { itemList, cartItemList, total } = this.state;
    console.log(total);

    return (
        <div style={{float:"left"}}>
      <div>
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
    {cartItemList.map((item,index) => (
        <li key={index}>
            {item.itemName} : {item.price}
        </li>
    ))}
</ul>
</div>
<div>
    <ul>
        <li>Total is :   {total}</li>
    </ul>
    
</div>
</div>
    );
  }
}

export default CartItemsList;
