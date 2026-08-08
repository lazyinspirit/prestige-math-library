#!/usr/bin/env node
// url-sweep.mjs — build the orchestrator-owned audit URL liveness table.
//
//   node tools/url-sweep.mjs --manifests a.pages.json,b.pages.json \
//     --ledgers a.provenance.jsonl,b.provenance.jsonl --out wave-url-liveness.json

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const option = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
};
const list = (name) => (option(name) ?? '').split(',').map((value) => value.trim()).filter(Boolean);
const manifests = list('--manifests');
const ledgers = list('--ledgers');
const out = option('--out');
const concurrency = Number(option('--concurrency') ?? 8);
const timeoutMs = Number(option('--timeout-ms') ?? 22_000);

if (!manifests.length || !out || !Number.isInteger(concurrency) || concurrency < 1 || timeoutMs < 1) {
  console.error('usage: node tools/url-sweep.mjs --manifests <a,b,...> [--ledgers <a,b,...>] --out <file> [--concurrency 8] [--timeout-ms 22000]');
  process.exit(2);
}

const absolute = (file) => file.startsWith('/') ? file : join(REPO, file);
for (const file of [...manifests, ...ledgers]) {
  if (!existsSync(absolute(file))) {
    console.error(`url-sweep: missing input ${file}`);
    process.exit(2);
  }
}

const urls = new Set();
const collect = (text) => {
  for (const match of text.matchAll(/https?:\/\/[^\s"'<>`\]]+/g)) {
    // Parentheses are valid and common at the end of Wikipedia paths. Inputs
    // are quoted YAML/JSON strings, so only prose punctuation is extraneous.
    const url = match[0].replace(/[,.;:]+$/g, '');
    try { urls.add(new URL(url).href); } catch { /* malformed text is not a fetch target */ }
  }
};

const itemIds = new Set();
for (const manifest of manifests) {
  const pages = JSON.parse(readFileSync(absolute(manifest), 'utf8'));
  for (const page of pages) for (const item of page.items ?? []) itemIds.add(item.id);
}
for (const id of itemIds) collect(readFileSync(join(REPO, 'items', `${id}.md`), 'utf8'));
for (const ledger of ledgers) collect(readFileSync(absolute(ledger), 'utf8'));

const queue = [...urls].sort();
const rows = new Array(queue.length);
let cursor = 0;

const fetchOne = async (url) => {
  const started = Date.now();
  return new Promise((resolve) => {
    const child = spawn('curl', [
      '-sSL', '-o', '/dev/null', '-w', '%{http_code}\t%{url_effective}',
      '--max-time', String(Math.ceil(timeoutMs / 1000)),
      '--user-agent', 'prestige-math-library-audit/1.0 (+URL liveness check)',
      url,
    ], { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', (error) => resolve({
      url, status: null, ok: false, final_url: null,
      ms: Date.now() - started, error: error.message,
    }));
    child.on('close', (code) => {
      const [statusText, finalUrl] = stdout.trim().split('\t');
      const status = /^\d{3}$/.test(statusText ?? '') ? Number(statusText) : null;
      resolve({
        url,
        status,
        ok: code === 0 && status !== null && status >= 200 && status < 300,
        final_url: finalUrl || null,
        ms: Date.now() - started,
        error: code === 0 ? null : (stderr.trim() || `curl exit ${code}`),
      });
    });
  });
};

const worker = async () => {
  while (cursor < queue.length) {
    const index = cursor++;
    rows[index] = await fetchOne(queue[index]);
  }
};
await Promise.all(Array.from({ length: Math.min(concurrency, queue.length || 1) }, worker));

const result = {
  version: 1,
  generated_at: new Date().toISOString(),
  scope: {
    manifests,
    ledgers,
    items: itemIds.size,
  },
  summary: {
    urls: rows.length,
    live: rows.filter((row) => row.ok).length,
    failed: rows.filter((row) => !row.ok).length,
  },
  rows,
};
writeFileSync(absolute(out), JSON.stringify(result, null, 2) + '\n');
console.log(`url-sweep: ${result.summary.live}/${result.summary.urls} live; ${result.summary.failed} failed -> ${out}`);
if (result.summary.failed) {
  for (const row of rows.filter((entry) => !entry.ok)) {
    console.log(`FAIL ${row.status ?? 'ERR'} ${row.url} — ${row.error ?? `HTTP ${row.status}`}`);
  }
}
