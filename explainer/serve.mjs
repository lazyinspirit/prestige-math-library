#!/usr/bin/env node
// serve.mjs — a dependency-free preview server for explainer/build-workflow.html.
//
// WHY THIS EXISTS. The /library renderer lives in the app repo and its dev
// server needs a database, auth and the bind mount; none of that is needed to
// look at a static explainer page. This serves the explainer directory alone,
// so the page can be reviewed from a bare checkout with nothing installed.
//
//   node explainer/serve.mjs            → http://localhost:3000/
//   node explainer/serve.mjs --port 8080
//
// It is a preview tool, not part of the serving path: in production the page is
// read from MATH_LIBRARY_DIR by the app route described in INTEGRATION.md.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = fileURLToPath(new URL('.', import.meta.url));
const argv = process.argv.slice(2);
const portArg = argv.indexOf('--port');
const PORT = Number(portArg >= 0 ? argv[portArg + 1] : process.env.PORT || 3000);
const INDEX = 'build-workflow.html';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    // Every unknown path resolves to the animation, so /library/workflow-style
    // links work locally exactly as they will once the app route exists.
    let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if (!rel || rel.endsWith('/')) rel = INDEX;
    const safe = normalize(rel).replace(/^(\.\.[/\\])+/, '');
    let file = join(DIR, safe);
    try {
      const s = await stat(file);
      if (s.isDirectory()) file = join(file, INDEX);
    } catch {
      file = join(DIR, INDEX);           // unknown path → the page itself
    }
    const body = await readFile(file);
    res.writeHead(200, {
      'content-type': TYPES[extname(file)] ?? 'application/octet-stream',
      'cache-control': 'no-store',
    });
    res.end(body);
  } catch (err) {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(`500 ${err.message}\n`);
  }
});

server.listen(PORT, () => {
  console.log(`explainer  →  http://localhost:${PORT}/   (serving ${DIR})`);
});
