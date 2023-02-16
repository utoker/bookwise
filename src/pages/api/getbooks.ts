import eucDistance from 'lib/euclideanDistance';
import clientPromise from 'lib/mango';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.body;
  try {
    const client = await clientPromise;
    const db = client.db('book-match');

    const books = await db.collection('books').find({}).toArray();

    const booksVectors = books.map((book) => {
      const vectors = [];
      vectors.push(
        +book.adventure,
        +book.selfHelp,
        +book.history,
        +book.fantasy
      );
      return vectors;
    });
    const userVector = [
      +user.adventure,
      +user.selfHelp,
      +user.history,
      +user.fantasy,
    ];
    let lowestDistance = 100;
    for (let i = 0; i < booksVectors.length; i++) {
      const distance = eucDistance(booksVectors[i], userVector);
      if (distance < lowestDistance) {
        lowestDistance = distance;
      }
    }
    // get the index of the lowest distance
    const index = booksVectors.findIndex(
      (vector) => eucDistance(vector, userVector) === lowestDistance
    );

    res.json(books[index]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
