const OPENAI_API_KEY = "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";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
   const { prompt, size } = req.body;
   console.log('this size if coming front react   '+prompt, size)
   const imageSize =
     size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";
  try {
  const response = await openai.createImage({
    prompt,
    n: 1,
    size: imageSize,
  });
  image_url = response.data.data[0].url;
  console.log(image_url)
    res.status(201).send({ message: "success", data: image_url });


  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return res
      .status(500)
      .send({ status: false, message: "The Image could not be generated" });
  }
};

module.exports = { generateImage };
