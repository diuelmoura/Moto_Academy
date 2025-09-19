import { Router } from 'express';
import {
  getSearchByName,
  postSearchByName,
  getAutocomplete,
  postAutocomplete,
  getSearchByType,
  postSearchByType,
  getSearch,
  postSearch
} from '../controllers/cards.controller.js';

const router = Router();

// by-name
router.get('/cards/by-name', getSearchByName);
router.post('/cards/by-name', postSearchByName);

// autocomplete
router.get('/cards/autocomplete', getAutocomplete);
router.post('/cards/autocomplete', postAutocomplete);

// by-type
router.get('/cards/by-type', getSearchByType);
router.post('/cards/by-type', postSearchByType);

// search livre
router.get('/cards/search', getSearch);
router.post('/cards/search', postSearch);

export default router;
