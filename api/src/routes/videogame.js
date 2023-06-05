require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');

function formatGenres(genres) {
  return genres.map(el => el.name);
}

router.get('/:idVideogame', async (req, res) => {
  const { idVideogame } = req.params;

  if (idVideogame.includes('-')) {
    let videogameDb = await Videogame.findOne({
      where: {
        id: idVideogame,
      },
      include: Genre,
    });

    if (videogameDb) {
      videogameDb = videogameDb.toJSON();
      videogameDb.genres = formatGenres(videogameDb.genres);
      return res.json(videogameDb);
    }
  } else {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
      let {
        id,
        name,
        background_image,
        genres,
        description,
        released: releaseDate,
        rating,
        platforms,
      } = response.data;
      genres = formatGenres(genres);
      platforms = platforms.map(el => el.platform.name);

      return res.json({
        id,
        name,
        background_image,
        genres,
        description,
        releaseDate,
        rating,
        platforms,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'An error occurred' });
    }
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {
      name,
      description,
      background_image,
      releaseDate,
      rating,
      genres,
      createdInDb,
      platforms,
    } = req.body;

    const gameCreated = await Videogame.create({
      name,
      description,
      background_image,
      releaseDate,
      rating,
      platforms: platforms.join(', '),
      createdInDb,
    });

    const gameGenre = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    await gameCreated.setGenres(gameGenre);

    console.log(gameCreated);

    return res.send('Created successfully');
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;