import express from 'express';
import multer from 'multer';
import { userController } from '../controllers';

const { signup } = userController;

const router = express.Router();

router
  .route('/signup')
  .post(
    multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
      'avatar'
    ),
    signup
  );

export default router;
