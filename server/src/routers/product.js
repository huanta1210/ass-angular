import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct
} from '../controllers/product';
import { checkPermission } from '../middlewares/checkPermission';

const routerProduct = express.Router();

routerProduct.get('/', getAllProduct);
routerProduct.get('/:id', getDetailProduct);
routerProduct.post('/create-product', checkPermission, createProduct);
routerProduct.put('/update-product/:id', checkPermission, updateProduct);
routerProduct.delete('/delete-product/:id', checkPermission, deleteProduct);

export default routerProduct;
