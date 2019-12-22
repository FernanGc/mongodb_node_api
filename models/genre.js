const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

/* Models */
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genre) {
  // Joi schema validation
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
