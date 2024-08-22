const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/taybot", (req, res) => {
  const { text } = req.body;
  // Generate a random quote or use the provided text
  const quote = text || generateRandomQuote();

  // Generate an image with Taylor Swift and the quote using a graphics library
  const image = generateTaylorSwiftImage(quote);

  // Send the image back to Slack
  res.send({
    response_type: "in_channel",
    blocks: [
      {
        type: "image",
        image_url: image,
        alt_text: "Taylor Swift Motivational Quote",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
