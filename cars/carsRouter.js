const express = require('express')
const Cars = require('../data/helpers/carModel')
const router = express.Router();

router.get("/", (req, res) => {
  Cars.get()  
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Cars.get(id)
    .then(car => {
        res.status(200).json(car);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  Cars.insert(carData)
    .then(car => {
      res.status(201).json(car)
    })
    .catch(err => {
      res.status(500).json({ error: 'could not create car' })
    })
});

module.exports = router;
