import express from "express";
import axios from "axios";

const app = express();
const port = 5000;
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const type=req.query.type
    const result = await axios.get(`https://v2.jokeapi.dev/joke/${type}`);
    res.render("index", {
        jokes:result.data.setup,
        delivery:result.data.delivery
     
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
