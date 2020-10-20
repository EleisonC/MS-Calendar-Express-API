const express = require("express")
const eventsRouter = express.Router()

eventsRouter
  .route("/")
  .get((req, res) => {
    let result = {message: "No Events Added"}
    res.status(200).json(result)
  })
  .post(async (req, res) => {
    let result = {message: "Create Events Here"}
    res.status(201).json(result)
  })

  module.exports = eventsRouter