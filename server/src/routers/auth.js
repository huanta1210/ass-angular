import express from 'express';
import { authLogin, authRegister } from '../controllers/auth';

const routerAuth = express.Router();

routerAuth.post('/register', authRegister);
routerAuth.post('/login', authLogin);

export default routerAuth;
