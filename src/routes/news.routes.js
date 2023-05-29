import { Router } from 'express';
import * as newsModule from '../controllers/news.controller.js';

const router = Router();

router.get('/news_all', newsModule.getNewsAll);
router.get('/news/:lang/:page', newsModule.getNewsScraping);
router.get('/news/:id', newsModule.getShowNew);

export default router;
