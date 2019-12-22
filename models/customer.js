/* Single Respnsability Principle */
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

/* Customers Schema */
const Customer = mongoose.model(
  "Customers",
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
    isGold: { type: Boolean, default: false },
    phone: { type: String, minlength: 8, maxlength: 10 }
  })
);

function validataCustomer(customer) {
  // Joi schema validation
  const schema = {
    name: Joi.string()
      .min(5)
      .max(20)
      .required(),
    isGold: Joi.boolean(),
    phone: Joi.string()
      .trim()
      .min(8)
      .max(10)
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validataCustomer;
