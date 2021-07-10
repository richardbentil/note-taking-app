import { connectToDatabase } from "../../util/mongodb";

export default async(req, res) => {
  const {db} = await connectToDatabase()

  const results = await db
    .collection("personal_notes")
    .find({}) 
    .limit(5)
    .toArray()

    if(results) {
      res.status(200).json(results)
    } else {
      res.status(404).json("No data was retreived")
    }
  
    
}
