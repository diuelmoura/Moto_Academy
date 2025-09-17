import axios from 'axios';
import Bottleneck from 'bottleneck';
import {LRUCache} from 'lru-cache';

const SCRYFALL_BASE = process.env.SCRYFALL_BASE || 'https://api.scryfall.com';

const limiter = new Bottleneck({ minTime: 100, maxConcurrent: 5 });

const cache = new LRUCache({ max: 500, ttl: 1000 * 60 * 5 });

export async function scryfallGet(path, params = {}) {
  const baseUrl = `${SCRYFALL_BASE}${path}`;
  const key = `${baseUrl}?${new URLSearchParams(params).toString()}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const data = await limiter.schedule(async () => {
    const res = await axios.get(baseUrl, { params, timeout: 15000 });
    return res.data;
  });
  cache.set(key, data);
  return data;
}