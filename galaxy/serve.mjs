#!/usr/bin/env node
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { loadGraph } from './data.mjs';

const port = Number(process.env.PORT ?? 8080);
// The live sitemap gates the census; item relationships come from the canonical checkout.
let publishedIds = null;
if (process.env.GALAXY_LOCAL !== '1') {
  const response = await fetch('https://alphabetamath.cc/sitemap.xml', { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`Live sitemap failed: ${response.status}`);
  const xml = await response.text();
  publishedIds = new Set([...xml.matchAll(/<loc>https:\/\/alphabetamath\.cc\/item\/([^<]+)<\/loc>/g)].map(match => decodeURIComponent(match[1])));
  if (!publishedIds.size) throw new Error('Live sitemap contained no items; use GALAXY_LOCAL=1 only for an explicit local preview.');
}
const graph = await loadGraph(undefined, publishedIds);
graph.source = publishedIds ? 'Live sitemap census with canonical repository dependencies' : 'Local published content';
const data = JSON.stringify(graph);
const assets = new Map([
  ['/', 'index.html', 'text/html'], ['/galaxy.js', 'galaxy.js', 'text/javascript'],
  ['/renderer.mjs', 'renderer.mjs', 'text/javascript'], ['/galaxy-model.mjs', 'galaxy-model.mjs', 'text/javascript'],
  ['/style.css', 'style.css', 'text/css'], ['/graph-utils.mjs', 'graph-utils.mjs', 'text/javascript'],
].map(([route, file, type]) => [route, { file: new URL(file, import.meta.url), type } ]));
assets.set('/graph.json', { body: data, type: 'application/json' });
const server = createServer(async (req, res) => {
  const asset = assets.get(new URL(req.url, 'http://localhost').pathname);
  if (!asset) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const body = asset.file ? await readFile(asset.file) : asset.body;
    res.writeHead(200, { 'content-type': `${asset.type}; charset=utf-8`, 'cache-control': 'no-cache' });
    res.end(body);
  } catch { res.writeHead(500); res.end('Could not load preview asset'); }
});
server.listen(port, '0.0.0.0', () => {
  console.log(`Galaxy → http://localhost:${port} — ${graph.nodes.length} published items, ${graph.edges.length} dependencies`);
  if (graph.unresolved.length) console.warn(`${graph.unresolved.length} dependencies have no published endpoint; see graph.json unresolved.`);
});
