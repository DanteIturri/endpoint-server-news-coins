import { ObjectId } from 'mongodb';
import { connectDatabase } from '../database.js';

export const getNewsAll = async (req, res) => {
  try {
    /* Getting the database and then finding the articles and then returning the result. */
    const db = await connectDatabase();
    const result = await db.collection('articles').find({}).toArray();
    res.json(result);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const getNewsScraping = async (req, res) => {
  let { lang, page } = req.params;
  console.log(lang, page);
  page = parseInt(page);
  try {
    /* Getting the database and then finding the articles with the language and sorting them by id and
    limiting the page. */
    const db = await connectDatabase();
    const result = await db
      .collection('articles')
      .find({ lang: `${lang}` })
      .sort({ _id: -1 })
      .limit(page)
      .toArray();
    res.json(result);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const getShowNew = async (req, res) => {
  const id = req.params.id;
  try {
    /* Getting the database and then finding the articles with the id and then returning the result. */
    const db = await connectDatabase();
    const result = await db
      .collection('articles')
      .find({ _id: ObjectId(id) })
      .toArray();
    res.json(result);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
