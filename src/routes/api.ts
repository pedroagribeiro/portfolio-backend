import { Router } from 'express';
import userRouter from './user-router';
import contactRouter from './contact-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/contacts', contactRouter);

// *** Export default **** //

export default baseRouter;
