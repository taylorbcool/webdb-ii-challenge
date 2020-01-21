function validateCar(req, res, next) {
  // console.log('body: ', req.body)
  const body = req.body
    if (Object.entries(body).length === 0) {
      res.status(400).json({ message: 'Missing car data.' })
    } else if (!body.VIN) {
      res.status(400).json({ message: 'Missing required VIN field.' })
    } else if (!body.make){
      res.status(400).json({ message: 'Missing required make field.' })
    } else if (!body.model){
      res.status(400).json({ message: 'Missing required model field.' })
    } else if (!body.mileage){
      res.status(400).json({ message: 'Missing required mileage field.' })
    } else {
      next()
    }
}