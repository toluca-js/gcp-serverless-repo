import { HttpFunction } from '@google-cloud/functions-framework';
import * as express from 'express';

const serviceRouter = express.Router();

const get: HttpFunction = async (req, res) => {
    res.send({ message: "Hi tolucajs, from api", version: "j1.0" })

};

serviceRouter.get('/', get);

export const APIRouter = serviceRouter;
