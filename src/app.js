import express from 'express';
const app = express();

import usersRouter from './routes/usersRoutes';
import apiCharacterRouter from './routes/charactersRoutes.js';
import apiMoviesRouter from './routes/moviesRoutes.js';

app.use("/auth", usersRouter);
app.use("/characters", apiCharacterRouter);
app.use("/movies", apiMoviesRouter);

app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Not-found'
    })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})