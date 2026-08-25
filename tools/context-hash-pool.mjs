// Build the exact frozen-prompt hashes used by the judge, with bounded local
// parallelism. This changes only scheduling: every item still runs the canonical
// `judge.mts --context-hash` path, so the bytes and hashes are identical to the
// former serial callers.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { tsxLoader } from './paths.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const DEFAULT_CONCURRENCY = 12;
const MAX_CONCURRENCY = 32;
const DEFAULT_TIMEOUT_MS = 120_000;
const KILL_GRACE_MS = 2_000;

function configuredConcurrency(requested) {
  const raw = requested ?? process.env.CONTEXT_HASH_CONCURRENCY ?? DEFAULT_CONCURRENCY;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > MAX_CONCURRENCY) {
    throw new Error(`CONTEXT_HASH_CONCURRENCY must be an integer from 1 to ${MAX_CONCURRENCY}; got ${raw}`);
  }
  return value;
}

function buildOne(id, { cwd, env, loader, timeoutMs }) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath,
      ['--import', loader, 'tools/judge.mts', `items/${id}.md`, '--context-hash'],
      { cwd, env, stdio: ['ignore', 'pipe', 'pipe'] });
    const stdout = [];
    const stderr = [];
    let settled = false;
    let timedOut = false;
    let killTimer = null;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill('SIGTERM');
      killTimer = setTimeout(() => child.kill('SIGKILL'), KILL_GRACE_MS);
    }, timeoutMs);
    const finish = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (killTimer) clearTimeout(killTimer);
      resolve(result);
    };
    child.stdout.on('data', (chunk) => stdout.push(chunk));
    child.stderr.on('data', (chunk) => stderr.push(chunk));
    child.on('error', (cause) => finish({
      ok: false,
      id,
      error: `${id}: could not start current judge context build — ${cause.message}`,
    }));
    child.on('close', (code) => {
      const out = Buffer.concat(stdout).toString('utf8');
      const err = Buffer.concat(stderr).toString('utf8');
      if (timedOut) {
        finish({ ok: false, id, error: `${id}: current judge context build timed out after ${timeoutMs}ms` });
        return;
      }
      if (code !== 0) {
        finish({
          ok: false,
          id,
          error: `${id}: could not build current judge context — ${(err || out || `exit ${code}`).trim()}`,
        });
        return;
      }
      let row;
      try { row = JSON.parse(out); }
      catch (cause) {
        finish({ ok: false, id, error: `${id}: malformed current context hash output — ${cause.message}` });
        return;
      }
      if (row.id !== id || typeof row.context_sha256 !== 'string') {
        finish({ ok: false, id, error: `${id}: malformed current context hash` });
        return;
      }
      finish({
        ok: true,
        id,
        context: row.context_sha256,
        item: typeof row.item_sha256 === 'string' ? row.item_sha256 : null,
      });
    });
  });
}

function inputFingerprint(cwd, env) {
  const hash = createHash('sha256');
  const addFile = (path, relative) => {
    hash.update(relative); hash.update('\u0000'); hash.update(readFileSync(path)); hash.update('\u0000');
  };
  const walkMarkdown = (relative) => {
    const root = relative.startsWith('/') ? relative : join(cwd, relative);
    if (!existsSync(root)) return;
    const walk = (dir, prefix) => {
      for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
        const path = join(dir, entry.name);
        const rel = `${prefix}/${entry.name}`;
        if (entry.isDirectory()) walk(path, rel);
        else if (entry.name.endsWith('.md')) addFile(path, rel);
      }
    };
    // The label is intentionally independent of the checkout's absolute path,
    // while still recording a configured external library path in the final
    // environment line below.
    walk(root, relative.startsWith('/') ? 'library' : relative);
  };
  walkMarkdown('items');
  walkMarkdown(env.JUDGE_LIBRARY_DIR || 'library');
  for (const relative of ['briefs/judge-conventions.txt', 'tools/judge.mts', 'tools/item-hash.mjs']) {
    const path = join(cwd, relative);
    if (existsSync(path)) addFile(path, relative);
  }
  hash.update(`JUDGE_BATCH=${env.JUDGE_BATCH ?? ''}\u0000JUDGE_LIBRARY_DIR=${env.JUDGE_LIBRARY_DIR ?? ''}`);
  return hash.digest('hex');
}

/**
 * Return one result per requested id, in request order. A failed item remains a
 * row instead of aborting its neighbours, so a coverage gate can report every
 * local failure while a spend path may choose to fail fast after the pool drains.
 */
export async function buildCurrentContextHashes(ids, options = {}) {
  const ordered = [...ids];
  const concurrency = Math.min(ordered.length || 1, configuredConcurrency(options.concurrency));
  const cwd = options.cwd ?? REPO;
  const env = options.env ?? process.env;
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const loader = options.loader ?? tsxLoader();
  const cachePath = options.cachePath ? (options.cachePath.startsWith('/') ? options.cachePath : join(cwd, options.cachePath)) : null;
  const fingerprint = cachePath ? inputFingerprint(cwd, env) : null;
  let cachedRows = new Map();
  if (cachePath && existsSync(cachePath)) {
    try {
      const cache = JSON.parse(readFileSync(cachePath, 'utf8'));
      if (cache.version === 1 && cache.input_sha256 === fingerprint)
        cachedRows = new Map((cache.rows ?? []).map((row) => [row.id, row]));
    } catch { /* rebuild an unreadable or stale cache */ }
  }
  const results = new Array(ordered.length);
  let next = 0;

  const worker = async () => {
    for (;;) {
      const index = next;
      next += 1;
      if (index >= ordered.length) return;
      const cached = cachedRows.get(ordered[index]);
      results[index] = cached
        ? { ok: true, id: cached.id, context: cached.context, item: cached.item }
        : await buildOne(ordered[index], { cwd, env, loader, timeoutMs });
    }
  };
  await Promise.all(Array.from({ length: concurrency }, worker));
  if (cachePath && ordered.length > 0 && results.every((row) => row?.ok)) {
    for (const row of results) cachedRows.set(row.id, { id: row.id, context: row.context, item: row.item });
    const receipt = { version: 1, input_sha256: fingerprint, rows: [...cachedRows.values()].sort((a, b) => a.id.localeCompare(b.id)), at: new Date().toISOString() };
    const tmp = `${cachePath}.tmp`;
    writeFileSync(tmp, `${JSON.stringify(receipt, null, 2)}\n`);
    renameSync(tmp, cachePath);
  }
  return results;
}
