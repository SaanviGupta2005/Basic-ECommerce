const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/products");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
    .connect("mongodb+srv://guptasaanvi2005:saanvi@cluster0.p9grz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.get("/", (req, res) => res.render("addProduct"));
app.use("/products", productRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
