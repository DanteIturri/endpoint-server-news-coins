import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Api TradingNow get coins and news',
  });
});

export default router;
