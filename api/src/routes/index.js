const { Router } = require('express');
const router = Router();

//Importo todos los routers;
const videogames = require('./videogames');

const genres = require('./genres');
const platforms = require('./platforms')

//Configuro todos los routers
router.use('/videogames', videogames);
router.use('/genres', genres);
router.use('/platforms', platforms)

module.exports = router;