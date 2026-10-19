import { Router } from 'express';
import * as coinsModule from '../controllers/coins.controller.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = Router();

router.get('/coins_all', coinsModule.getCoinsAll);
router.get('/coins_welcome', coinsModule.getCoinsWelcome);
router.get('/coins_home', coinsModule.getCoinsHome);
router.get('/coins/:id/graphics/:imagegrap');

export default router;
