import { connectDatabase } from '../database.js';

export const getCoinsAll = async (req, res) => {
  try {
    const db = await connectDatabase();
    /* Finding the coins all in the database */
    const coins = await db
      .collection('coins_daily')
      .find({})
      .sort({ _id: -1 })
      .limit(100)
      .toArray();
    res.status(200).json(coins.reverse());
    // res.json(coins.reverse());
  } catch (error) {
    console.log(`Error get: ${error}`);
  } finally {
  }
};

export const getCoinsWelcome = async (req, res) => {
  try {
    const db = await connectDatabase();

    /* Finding the coins in the database that have the symbols btc, eth, bnb, and xrp. */
    const coins = await db
      .collection('coins_daily')
      .find({ symbol: { $in: ['btc', 'eth', 'bnb', 'xrp'] } })
      .sort({ _id: -1 })
      .limit(4)
      .toArray();

    res.status(200).json(coins.reverse());
  } catch (error) {}
};
export const getCoinsHome = async (req, res) => {
  try {
    const db = await connectDatabase();
    /* Finding the coins in the database that have the symbols btc, eth, bnb, and xrp. */
    const coins = await db
      .collection('coins_daily')
      .find({ symbol: { $in: ['btc', 'eth', 'dash', 'usdt', 'busd'] } })
      .sort({ _id: -1 })
      .limit(5)
      .toArray();
    res.status(200).json(coins.reverse());
  } catch (error) {}
};
