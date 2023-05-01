import {Router} from 'express'
import * as productController from './product.controller.js'


const router = Router();



router.post('/add',productController.addProduct)
router.get('/getProducts',productController.getProducts)
router.put('/update/:id/:UserId',productController.updateProduct)
router.delete('/deleteProduct/:id/:UserId',productController.deleteProduct)
router.get('/:id/:UserId',productController.getProdById)




export default router;