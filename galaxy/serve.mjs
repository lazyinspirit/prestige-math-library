#!/usr/bin/env node
import { createServer } from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { TRACKS } from './music.mjs';
import { loadGraph } from './data.mjs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { katexCandidates } from '../tools/paths.mjs';

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
  ['/', 'index.html', 'text/html'], ['/math-title.mjs', 'math-title.mjs', 'text/javascript'], ['/music.mjs', 'music.mjs', 'text/javascript'],
  ['/audio/credits.html', 'audio/credits.html', 'text/html'], ['/galaxy.js', 'galaxy.js', 'text/javascript'],
  ['/renderer.mjs', 'renderer.mjs', 'text/javascript'], ['/galaxy-model.mjs', 'galaxy-model.mjs', 'text/javascript'],
  ['/style.css', 'style.css', 'text/css'], ['/graph-utils.mjs', 'graph-utils.mjs', 'text/javascript'],
].map(([route, file, type]) => [route, { file: new URL(file, import.meta.url), type } ]));
// Reuse the site's installed KaTeX and enumerate its assets; no CDN or arbitrary paths.
const require = createRequire(import.meta.url);
let katexDist;
for (const candidate of katexCandidates()) {
  try { katexDist = dirname(require.resolve(candidate)); break; } catch { /* Try the next installed package. */ }
}
if (!katexDist) throw new Error('Install katex or set PRESTIGE_APP_DIR to the app checkout.');
for (const [file, type] of [
  ['katex.mjs', 'text/javascript'], ['contrib/auto-render.mjs', 'text/javascript'], ['katex.min.css', 'text/css'],
  ...(await readdir(join(katexDist, 'fonts'))).filter(name => /\.(woff2?|ttf)$/.test(name))
    .map(name => [`fonts/${name}`, name.endsWith('.woff2') ? 'font/woff2' : name.endsWith('.woff') ? 'font/woff' : 'font/ttf']),
]) assets.set(`/vendor/katex/${file}`, { file: join(katexDist, file), type });
for (const track of TRACKS) assets.set(track.file, { file: new URL(`.${track.file}`, import.meta.url), type: 'audio/mpeg' });
assets.set('/graph.json', { body: data, type: 'application/json' });
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { allow: 'GET, HEAD' }); res.end(); return; }
  const asset = assets.get(new URL(req.url, 'http://localhost').pathname);
  if (!asset) { res.writeHead(404); res.end('Not found'); return; }
  try {
    if (asset.type === 'audio/mpeg') {
      const { size } = await stat(asset.file);
      let start = 0, end = size - 1;
      if (req.headers.range) {
        const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        if (!range || (!range[1] && !range[2])) { res.writeHead(416, { 'content-range': `bytes */${size}` }); res.end(); return; }
        start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
        end = range[1] && range[2] ? Math.min(size - 1, Number(range[2])) : size - 1;
        if (start > end || start >= size || !Number.isSafeInteger(start)) {
          res.writeHead(416, { 'content-range': `bytes */${size}` }); res.end(); return;
        }
      }
      res.writeHead(req.headers.range ? 206 : 200, {
        'content-type': 'audio/mpeg', 'accept-ranges': 'bytes', 'content-length': end - start + 1,
        'cache-control': 'public, max-age=3600',
        ...(req.headers.range ? { 'content-range': `bytes ${start}-${end}/${size}` } : {}),
      });
      if (req.method === 'HEAD') { res.end(); return; }
      const stream = createReadStream(asset.file, { start, end });
      stream.on('error', () => res.destroy()); res.on('close', () => stream.destroy()); stream.pipe(res);
      return;
    }
    const body = asset.file ? await readFile(asset.file) : asset.body;
    res.writeHead(200, { 'content-type': `${asset.type}; charset=utf-8`, 'cache-control': 'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(500); res.end('Could not load preview asset'); }
});
server.listen(port, '0.0.0.0', () => {
  console.log(`Galaxy → http://localhost:${port} — ${graph.nodes.length} published items, ${graph.edges.length} dependencies`);
  if (graph.unresolved.length) console.warn(`${graph.unresolved.length} dependencies have no published endpoint; see graph.json unresolved.`);
});
