import express from 'express';
let router = express.Router();


router.get('/', (req, res, next) => {

    res.status(200).send("Hello World");

})

export default router;