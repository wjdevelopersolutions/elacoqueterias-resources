import express from 'express';
const router = express.Router();

import {
  getIndex,
  postIndex
} from '../controllers/index';

router.route('/')
      .get(getIndex)
      .post(postIndex);

export default router;