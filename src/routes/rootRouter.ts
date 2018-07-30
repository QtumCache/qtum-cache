import express = require('express');

let rootRouter = express.Router();

rootRouter.get('/', (req: express.Request, res: express.Response) => {
    res.render('pages/index');
});

export default rootRouter;
