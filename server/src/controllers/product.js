import Product from '../models/product';

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({
        message: 'No products found'
      });
    }
    return res.status(200).json({
      message: 'Get all products successfully',
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      return res.status(404).json({
        message: 'No products found'
      });
    }
    return res.status(200).json({
      message: 'Get details products successfully',
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    if (!products) {
      return res.status(404).json({
        message: 'No products add found'
      });
    }
    return res.status(201).json({
      message: 'Create products successfully',
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!products) {
      return res.status(404).json({
        message: 'No products updated found'
      });
    }
    return res.status(200).json({
      message: 'Update products successfully',
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    if (!products) {
      return res.status(404).json({
        message: 'No products updated found'
      });
    }
    return res.status(200).json({
      message: 'Delete products successfully',
      data: products
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
};
