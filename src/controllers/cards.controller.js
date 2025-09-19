import { scryfallGet } from '../services/scryfall.service.js';

export async function getSearchByName(req, res) {
  try {
    const { name, mode = 'fuzzy' } = req.query || {};
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Field "name" is required (string).' });
    }
    const params = mode === 'exact' ? { exact: name } : { fuzzy: name };
    const data = await scryfallGet('/cards/named', params);
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function postSearchByName(req, res) {
  try {
    const { name, mode = 'fuzzy' } = req.body || {};
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Field "name" is required (string).' });
    }
    const params = mode === 'exact' ? { exact: name } : { fuzzy: name };
    const data = await scryfallGet('/cards/named', params);
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function getAutocomplete(req, res) {
  try {
    const { q } = req.query || {};
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Field "q" is required (string).' });
    }
    const data = await scryfallGet('/cards/autocomplete', { q });
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function postAutocomplete(req, res) {
  try {
    const { q } = req.body || {};
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Field "q" is required (string).' });
    }
    const data = await scryfallGet('/cards/autocomplete', { q });
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function getSearchByType(req, res) {
  try {
    const { type, page } = req.query || {};
    if (!type || typeof type !== 'string') {
      return res.status(400).json({ error: 'Field "type" is required (string).' });
    }
    const value = /\s/.test(type) ? `"${type}"` : type;
    const q = `t:${value}`;
    const data = await scryfallGet('/cards/search', { q, page });
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function postSearchByType(req, res) {
  try {
    const { type, page } = req.body || {};
    if (!type || typeof type !== 'string') {
      return res.status(400).json({ error: 'Field "type" is required (string).' });
    }
    const value = /\s/.test(type) ? `"${type}"` : type;
    const q = `t:${value}`;
    const data = await scryfallGet('/cards/search', { q, page });
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function getSearch(req, res) {
  try {
    const { q, page } = req.query || {};
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Field "q" is required (string).' });
    }
    const data = await scryfallGet('/cards/search', { q, page });
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}

export async function postSearch(req, res) {
  try {
    const { q, page } = req.body || {};
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Field "q" is required (string).' });
    }
    const data = await scryfallGet('/cards/search', { q, page });
    return res.json({ ok: true, data });
  } catch (err) {
    const status = err?.response?.status || 500;
    return res.status(status).json({ ok: false, error: err?.response?.data || err?.message || 'Unknown error' });
  }
}
