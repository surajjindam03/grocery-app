import React, { useEffect, useState } from 'react'
import axios from 'axios'


function GroceryItemList() {
    const [itemList, setItemList] = useState()
    var [cartItemList, setCartItemList] = useState([])
    const options = []

    // useEffect(()=>{
    //     axios.get("http://localhost:3001/allItemsList")
    //     .then((res)=>{
    //         setItemList(res.data);
    //     })
    // })


    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get("http://localhost:3001/allItemsList")
                    .then((res) => {
                        setItemList(res.data);
                    })
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    const itemList1 = [
        {
            "itemName": "Battery",
            "price": Math.floor(Math.random() * 10)
        },
        {
            "itemName": "Carrots",
            "price": Math.floor(Math.random() * 10)
        },
        {
            "itemName": "Coke",
            "price": Math.floor(Math.random() * 10)
        }
    ]

    function addItemToCart(item) {
        setCartItemList(...cartItemList, item)
    }



    return (
        <div>
            <div style={{ width: "30px" }}>
                <ul>
                    {itemList.map((item) => (
                        <li key={item.itemName} onClick={() => addItemToCart(item)}>
                            {item.itemName}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {cartItemList.map((item,index) => (
                        <li key={index}>
                            {item.itemName} - {item.price}
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}

export default GroceryItemList;