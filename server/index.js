const express = require('express')
const cors = require('cors')

const PORT = 3001;

const app = express();
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Website is active")
})


app.get("/allItemsList", (req,res)=>{
    const items = [
        {
            "itemName":"Battery",
            "price":Math.floor((Math.random() + 1)*10 )
        },
        {
            "itemName":"Carrots",
            "price":Math.floor((Math.random() + 1)*10)
        },
        {
            "itemName":"Coke",
            "price":Math.floor((Math.random() + 1)*10)
        }
    ]

    res.send(items);
})






app.listen(PORT, ()=>{
    console.log("Server running on "+ PORT);
})
