function validateCarId(req, res, next) {
  const id = req.params.id
  Cars.getById(id)
    .then(car => {
      if (!car) {
          res.status(400).json({ message: 'Invalid car id.' })
      } else {
          req.user = user
          next()
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Error retrieving car id.' })
    })
}

module.exports = validateCarId