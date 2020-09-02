const express = require('express')
const Ongs = require('./controllers/Ongs')
const Incidents = require('./controllers/Incidents')
const Profile = require('./controllers/Profile')
const Session = require('./controllers/Session')

const routes = express.Router()

routes.get('/ongs', Ongs.index)
routes.post('/ongs', Ongs.create)

routes.get('/incidents', Incidents.index)
routes.post('/incidents', Incidents.create)
routes.delete('/incidents/:id', Incidents.delete)

routes.get('/profile', Profile.index)

routes.post('/session', Session.create)

module.exports = routes