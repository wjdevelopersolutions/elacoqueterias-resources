import express from 'express';
const router = express.Router();

import {
  getProduct,
  postProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getEditProduct
} from '../controllers/product';

router.route('/')
      .get(getProduct)
      .post(postProduct)

router.route('/edit-product')
      .get(getEditProduct)

router.route('/:id')
      .get(getProductById)
      .put(updateProduct)
      .delete(deleteProduct);

export default router;