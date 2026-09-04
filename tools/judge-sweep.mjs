#!/usr/bin/env node
// Run one self-contained judge call per item and model. The sweep owns only
// selection, currency, concurrency, and bounded retries; judge.mts owns prompt
// construction and verdict attestation. No conversation is shared between
// items, so the cost of later items cannot grow with earlier turns.

import { existsSync, readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { tsxLoader } from './paths.mjs';
import { verdictIsCurrent } from './judge-currency.mjs';
import { MODELS, JUDGE_LINEUPS, DEFAULT_LINEUP } from './models.mjs';
import { buildCurrentContextHashes } from './context-hash-pool.mjs';
import { createSlotPool } from './slots.mjs';

const argv = process.argv.slice(2);
const option = (name) => {
  const index = argv.indexOf(name);
  return index < 0 ? '' : argv[index + 1] ?? '';
};

const ledger = option('--ledger');
const cost = option('--cost');
const pagesArg = option('--pages');
const itemsArg = option('--items');
const manifestsArg = option('--manifests');
const modelsArg = option('--models');
const limitArg = option('--limit');
// Kept as run metadata for callers and logs. Stateless judging deliberately
// does not use it as a session namespace.
const run = option('--run');
const attempts = option('--attempts') || (ledger.endsWith('.jsonl')
  ? ledger.replace(/\.jsonl$/, '-attempts.jsonl') : `${ledger}.attempts.jsonl`);
const contextCache = option('--context-cache') || (/-judge\.jsonl$/.test(ledger)
  ? ledger.replace(/-judge\.jsonl$/, '-judge-context-hashes.json')
  : `${ledger}-context-hashes.json`);

if (!ledger || !cost || (!pagesArg && !itemsArg && !manifestsArg)) {
  console.error('usage: node tools/judge-sweep.mjs --ledger FILE --cost FILE '
    + '(--pages PAGE,... | --items ID,... | --manifests FILE,...) '
    + '[--models MODEL,...] [--limit N] [--run RUN]');
  process.exit(2);
}
if (manifestsArg && (pagesArg || itemsArg)) {
  throw new Error('--manifests cannot be combined with --pages or --items');
}
if (run && !/^[A-Za-z0-9._-]+$/.test(run)) throw new Error('--run must be a plain build run id');
const limit = limitArg ? Number(limitArg) : Infinity;
if (limit !== Infinity && (!Number.isInteger(limit) || limit < 1)) {
  throw new Error('--limit must be a positive integer');
}

const lineupName = process.env.JUDGE_LINEUP ?? DEFAULT_LINEUP;
const supportedModels = JUDGE_LINEUPS[lineupName];
if (!supportedModels) throw new Error(`unknown JUDGE_LINEUP ${lineupName}`);
const models = modelsArg
  ? [...new Set(modelsArg.split(',').map((value) => value.trim()).filter(Boolean))]
  : [...supportedModels];
if (!models.length || models.some((model) => !supportedModels.includes(model))) {
  throw new Error(`--models must contain only ${supportedModels.join(', ')}`);
}

const commaSet = (value) => new Set(value.split(',').map((part) => part.trim()).filter(Boolean));
const requestedPages = commaSet(pagesArg);
const requestedItems = commaSet(itemsArg);
const plan = JSON.parse(readFileSync('research/plan-spec.json', 'utf8'));
const pagesById = new Map(plan.pages.map((page) => [page.id, page]));
const selectedPages = new Set();
for (const id of requestedPages) {
  selectedPages.add(id);
  const page = pagesById.get(id);
  if (page?.kind === 'A' && typeof page.companion === 'string') selectedPages.add(page.companion);
}
const pageIds = plan.pages.filter((page) => selectedPages.has(page.id))
  .flatMap((page) => page.items.map((item) => item.id));
const manifestIds = manifestsArg ? [...new Set([...commaSet(manifestsArg)].flatMap((manifest) =>
  JSON.parse(readFileSync(manifest, 'utf8')).flatMap((page) => page.items.map((item) => item.id))))] : [];
const ids = manifestsArg ? manifestIds : requestedItems.size ? [...requestedItems] : pageIds;
const plannedIds = new Set(plan.pages.flatMap((page) => page.items.map((item) => item.id)));
const unknown = [...requestedItems].filter((id) => !plannedIds.has(id) && !existsSync(`items/${id}.md`));
if (unknown.length) throw new Error(`--items includes unknown item id(s): ${unknown.join(', ')}`);
if (!ids.length || new Set(ids).size !== ids.length) {
  throw new Error(`selected scope produced ${ids.length} non-unique items`);
}

const history = new Map();
if (existsSync(ledger)) {
  for (const [index, line] of readFileSync(ledger, 'utf8').split('\n').filter(Boolean).entries()) {
    let row;
    try { row = JSON.parse(line); }
    catch { throw new Error(`${ledger}:${index + 1}: invalid JSON`); }
    if (!ids.includes(row.id) || !models.includes(row.model)) continue;
    const key = `${row.id}\0${row.model}`;
    const rows = history.get(key) ?? [];
    rows.push(row);
    history.set(key, rows);
  }
}

let loader;
try { loader = tsxLoader(); }
catch (cause) { console.error(`[judge-sweep] ${cause.message}`); process.exit(2); }

// Build the exact current prompt hash before spending any model calls. This is
// also what makes an interrupted sweep safely resumable from its append-only
// ledger without preserving chat history.
const currentHashes = new Map();
for (const result of await buildCurrentContextHashes(ids, { loader, cachePath: contextCache })) {
  if (!result.ok) throw new Error(result.error);
  currentHashes.set(result.id, { context: result.context, item: result.item });
}

const TERRA = MODELS.terra.id;
const hardCaps = Object.freeze({ [TERRA]: 24 });
const capFor = (model) => {
  const hard = hardCaps[model];
  if (!hard) throw new Error(`no concurrency cap configured for ${model}`);
  const name = `JUDGE_CONCURRENCY_${model.replace(/[^A-Za-z0-9]/g, '_').toUpperCase()}`;
  const raw = process.env[name];
  if (raw === undefined) return hard;
  const requested = Number(raw);
  if (!Number.isInteger(requested) || requested < 1) throw new Error(`${name} must be a positive integer`);
  return Math.min(requested, hard);
};
const caps = Object.fromEntries(models.map((model) => [model, capFor(model)]));
const slots = createSlotPool({
  root: '/tmp/prestige-math-library-judge-slots', caps, label: 'judge-sweep',
});

const pending = [];
for (const model of models) {
  const owed = ids.filter((id) => {
    const current = currentHashes.get(id);
    if (!current) throw new Error(`${id}: missing current context hash`);
    return !(history.get(`${id}\0${model}`) ?? []).some((row) =>
      typeof row.keep === 'boolean' && verdictIsCurrent(row, current));
  }).slice(0, limit);
  console.log(`[judge-sweep] ${model}: pending ${owed.length}/${ids.length}, cap ${caps[model]}`);
  pending.push(...owed.map((id) => ({ id, model })));
}

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const capture = async (task, attempt) => {
  const release = await slots.acquire(task.model);
  console.log(`[judge-sweep] start ${task.model} ${task.id} attempt ${attempt}`);
  try {
    return await new Promise((done) => {
      const child = spawn(process.execPath, [
        '--import', loader, 'tools/judge.mts', `items/${task.id}.md`, '--model', task.model,
      ], {
        env: {
          ...process.env,
          JUDGE_VERDICTLOG: ledger,
          JUDGE_COSTLOG: cost,
          JUDGE_ATTEMPTLOG: attempts,
          JUDGE_MAX_ATTEMPTS: '1',
          JUDGE_ATTEMPT_NUMBER: String(attempt),
        },
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      let stdout = '';
      let stderr = '';
      child.stdout.setEncoding('utf8');
      child.stderr.setEncoding('utf8');
      child.stdout.on('data', (chunk) => { stdout += chunk; });
      child.stderr.on('data', (chunk) => { stderr += chunk; });
      child.on('error', (error) => { stderr += String(error); });
      child.on('close', (code) => {
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
        done({ code: code ?? 2 });
      });
    });
  } finally {
    release();
  }
};

let cursor = 0;
let outage = false;
const worker = async (index) => {
  // Avoid a 24-process authentication/boot burst while still reaching the
  // full steady-state cap quickly.
  if (index) await pause(index * 1_500);
  while (!outage) {
    const task = pending[cursor++];
    if (!task) return;
    for (let attempt = 1; attempt <= 3 && !outage; attempt += 1) {
      const result = await capture(task, attempt);
      if (result.code === 0) break;
      if (result.code === 3) {
        outage = true;
        console.error('[judge-sweep] provider usage/rate limit detected; stopping new calls immediately.');
        break;
      }
      if (result.code === 4 && attempt < 3) {
        await pause(attempt * 4_000);
        continue;
      }
      console.error(`[judge-sweep] ${task.model} ${task.id}: exited ${result.code}; closure will report the missing verdict.`);
      break;
    }
  }
};

const width = Math.min(pending.length, slots.maxConcurrent);
console.log(`[judge-sweep] lineup ${lineupName}; ${pending.length} stateless item call(s), up to ${width} concurrent${run ? `, run ${run}` : ''}.`);
await Promise.all(Array.from({ length: width }, (_, index) => worker(index)));
slots.releaseAll();
if (outage) process.exit(3);
console.log('[judge-sweep] completed; judge closure determines whether every current item is covered.');
