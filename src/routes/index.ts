import express, { Request, Response } from 'express';

// eslint-disable-next-line prettier/prettier
import authRouter from './auth.routes';
import businessRouter from './business.routes';
import productRouter from './product.routes';
import publicRouter from './public.routes';
import addressRouter from './address.routes';
import cartRouter from './cart.routes';
import checkoutRouter from './checkout.routes';
import { validateSession } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', (_, res) => res.json({ success: true, message: 'User gateway v1 up.' }));

router.use('/auth', authRouter);
router.use('/public', publicRouter);
router.use(validateSession);
router.use('/business', businessRouter);
router.use('/product', productRouter);
router.use('/address', addressRouter);
router.use('/cart', cartRouter);
router.use('/checkout', checkoutRouter);
/**
 * @swagger
 *
 * /api/test:
 *   post:
 *     security:
 *      - Bearer: []
 *     tags:
 *       - Test
 *     summary: Shopper login
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         required: true
 *         type: string
 *         name: register user
 *         schema:
 *          properties:
 *              email:
 *                  type: string
 *                  example: "danya.degoke@gmail.com"
 *              password:
 *                  type: string
 *                  example: "myAwesomeP@ssw0rd"
 *     responses:
 *       '200':
 *         description: Ok
 *       '500':
 *         description: Internal error
 */
router.get('/test', (req: Request, res: Response) => {
  res.json({ greeting: `Hello, Good Morning` });
});

export default router;

/**
 * @swagger
 * tags:
 *  - name: Test
 *    description: for testing
 *  - name: Business
 *    description: Endpoints for business
 *  - name: Products
 *    description: Endpoints for products
 *  - name: Store
 *    description: Endpoints for the store
 *  - name: Address
 *    description: Endpoints for the address
 *  - name: Carting and Checkout
 *    description: Endpoints for the Carting and Checkout
 */

/**
 * @swagger
 * definitions:
 *  PhoneNumbers:
 *     type: object
 *     properties:
 *      countryCode:
 *           type: string
 *           example: "234"
 *      localFormat:
 *           type: string
 *           example: "07089000171"
 */
