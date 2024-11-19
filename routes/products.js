const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET route to list all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.render("products", { products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
});

// POST route to add a new product
router.post("/", async (req, res) => {
    const { name, price, description, category, imageUrl } = req.body;

    try {
        const newProduct = new Product({ name, price, description, category, imageUrl });
        await newProduct.save();
        res.redirect("/products");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
