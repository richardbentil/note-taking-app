import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  //parse incoming data as object
  const data = JSON.parse(req.body);
  const collection = data.collection;
  const title = data.title;
  const description = data.description;

  try {
    await db
      .collection(collection)
      .insertOne({ title, description })
      .then(function (result) {
        // process result
        res.status(200).json(result);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
