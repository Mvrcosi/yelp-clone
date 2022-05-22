const express = require('express');
const morgan = require('morgan')
const db = require('./db/index')
const cors = require('cors')

require("dotenv").config()


const app = express();
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 3000;


//  Get all restaruants 
app.get("/api/v1/restaurants/", async (req,res) => {

    try {
        const results = await db.query("select * from restaurants");
       res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch (err) {
        console.log(err)
    }
  
})

//  Get a restaruant
app.get("/api/v1/restaurants/:id", async (req,res) => {

    try {
    const results = await db.query("select * from restaurants where id = $1", [req.params.id]);
     res.status(200).json({
        status: 'success',
        results: results.rows.length,
        data: {
            restaurant: results.rows[0]
        }
    })

    } catch (err) {
        console.log(err)
    }

 })

 //  Create a restaurant
app.post("/api/v1/restaurants", async (req,res) => {

    try {
        const results = await db.query('INSERT INTO restaurants (name, location, price_range) values($1, $2, $3) returning *', 
        [req.body.name, req.body.location, req.body.price_range])
           res.status(201).json({
        status: "success",
        data: {
            restaurant: results.rows[0]
        }
    })
    } catch (err) {
         console.log(err)

    }
 
 })
 
  //  Updating a restaurant 
app.put("/api/v1/restaurants/:id", async (req,res) => {

    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *" , 
        [req.body.name, req.body.location, req.body.price_range, req.params.id])
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    }
    catch (err) {
        console.log(err)
    }
  
 })
 
  //  delete a restaurant 
app.delete("/api/v1/restaurants/:id", async (req,res) => {


    try {
        const results = await db.query('DELETE FROM restaurants WHERE id = $1', [req.params.id])
        res.status(204).json({
            status: "success",
        })
    } catch (err) {

        console.log(err)

    }

 })
 

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})