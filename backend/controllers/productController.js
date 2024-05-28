import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productsModel.js";

// @desc    Fetch all products
// @desc    GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch a product
// @desc    GET /api/product
// @access  Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductsById };
