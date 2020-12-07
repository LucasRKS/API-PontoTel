import { Router } from 'express';

import BaseController from './app/controllers/BaseController';

const routes = new Router();

// Base
routes.get('/base', BaseController.index);
routes.post('/base', BaseController.store);
routes.put('/base/:id', BaseController.update);
routes.delete('/base/:id', BaseController.delete);

export default routes;
