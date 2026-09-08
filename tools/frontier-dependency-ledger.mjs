#!/usr/bin/env node
// One derived frontier ledger; reviewers own separate consumer-batch inputs.
import { existsSync, readFileSync, readdirSync, writeFileSync, renameSync, unlinkSync, openSync, closeSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { split, yaml } from './pathway-lib.mjs';

export function collect(root, run) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run)) throw new Error('Invalid run name');
  const research = join(root, 'research');
  const read = path => JSON.parse(readFileSync(path, 'utf8'));
  const homes = new Map(), records = [], batches = [];
  const names = readdirSync(research).filter(name => name.startsWith(`${run}-batch-`)
    && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length))).sort();
  if (!names.length) throw new Error('No frontier manifests');
  for (const name of names) {
    const batch = name.slice(`${run}-batch-`.length).split('.')[0];
    batches.push(batch);
    for (const page of read(join(research, name))) {
      records.push({ kind: 'page', id: page.id, batch, data: page, file: `research/${name}` });
      for (const item of page.items ?? []) records.push({ kind: 'item',
        id: typeof item === 'string' ? item : item.id, batch,
        data: typeof item === 'string' ? {} : item, file: `research/${name}` });
    }
  }
  for (const record of records) {
    const key = `${record.kind}:${record.id}`;
    if (homes.has(key) && homes.get(key) !== record.batch) throw new Error(`Ambiguous ownership: ${key}`);
    homes.set(key, record.batch);
  }
  const rows = new Map();
  const keyOf = row => JSON.stringify([row.kind, row.consumer, row.supplier]);
  function add(row, evidence) {
    const consumer_batch = homes.get(`${row.kind}:${row.consumer}`);
    const supplier_batch = homes.get(`${row.kind}:${row.supplier}`);
    if (!consumer_batch || !supplier_batch || consumer_batch === supplier_batch) return false;
    const key = keyOf(row);
    if (!rows.has(key)) rows.set(key, { kind: row.kind, consumer: row.consumer,
      supplier: row.supplier, consumer_batch, supplier_batch, declarations: [], reviews: [] });
    const target = rows.get(key);
    if (evidence && !target.declarations.includes(evidence)) target.declarations.push(evidence);
    return target;
  }
  for (const record of records) {
    const carriers = [[record.data, record.file]];
    if (record.kind === 'item' || record.data.category) {
      const file = record.kind === 'item' ? `items/${record.id}.md`
        : `library/${record.data.category}/${record.id}.md`;
      if (existsSync(join(root, file))) carriers.push([yaml().parse(split(readFileSync(join(root, file), 'utf8')).fm) ?? {}, file]);
    }
    for (const [data, file] of carriers) {
      for (const field of record.kind === 'page' ? ['requires'] : ['deps', 'justified_by', 'forward_refs']) {
        if (data[field] !== undefined && !Array.isArray(data[field])) throw new Error(`${file}: ${field} must be an array`);
        for (const supplier of data[field] ?? []) {
          if (typeof supplier !== 'string') throw new Error(`${file}: invalid ${field} entry`);
          add({ kind: record.kind, consumer: record.id, supplier }, `${file}#${field}`);
        }
      }
    }
  }
  const reviewed_batches = [], orphaned_reviews = [];
  for (const batch of batches) {
    const file = `${run}-batch-${batch}.cross-batch-dependencies.json`;
    if (!existsSync(join(research, file))) continue;
    const input = read(join(research, file));
    if (!Array.isArray(input)) throw new Error(`${file}: expected an array`);
    reviewed_batches.push(batch);
    const seen = new Set();
    for (const row of input) {
      if (!['item', 'page'].includes(row.kind) || !['open', 'verified', 'removed'].includes(row.status)
        || !String(row.evidence ?? '').trim() || homes.get(`${row.kind}:${row.consumer}`) !== batch)
        throw new Error(`${file}: invalid review or consumer ownership`);
      const key = keyOf(row);
      if (seen.has(key)) throw new Error(`${file}: duplicate consumer/supplier review`);
      seen.add(key);
      const target = add(row);
      if (!target) { orphaned_reviews.push({ ...row, file }); continue; }
      target.reviews.push({ status: row.status, evidence: row.evidence, file });
    }
  }
  return { run, reviewed_batches, unreviewed_batches: batches.filter(b => !reviewed_batches.includes(b)),
    edges: [...rows.values()].sort((a, b) => keyOf(a).localeCompare(keyOf(b))), orphaned_reviews,
    evidence_limit: 'Declared edges plus reviewer findings, not a mathematical certificate. Read current proofs; review notes may predate edits.' };
}

export function refresh(root, run, requireReviewed = false) {
  const path = join(root, 'research', `${run}-cross-batch-dependencies.json`);
  // Never overwrite another concurrent refresh. Retry after its short merge.
  const lock = `${path}.lock`;
  const fd = openSync(lock, 'wx');
  const temp = `${path}.${process.pid}.tmp`;
  try {
    const data = collect(root, run);
    const text = JSON.stringify(data, null, 2) + '\n';
    if (!existsSync(path) || readFileSync(path, 'utf8') !== text) {
      writeFileSync(temp, text);
      renameSync(temp, path);
    }
    if (requireReviewed && (data.unreviewed_batches.length || data.edges.some(row => !row.reviews.length)))
      throw new Error('Cross-batch review incomplete: supply every batch input and review every declared edge');
  } finally {
    if (existsSync(temp)) unlinkSync(temp);
    closeSync(fd);
    unlinkSync(lock);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const opt = name => args[args.indexOf(name) + 1];
  try {
    if (args[0] !== 'refresh' || !args.includes('--run')) throw new Error('Usage: frontier-dependency-ledger.mjs refresh --run RUN [--root DIR] [--require-reviewed]');
    for (let attempt = 0; ; attempt++) {
      try {
        refresh(resolve(args.includes('--root') ? opt('--root') : '.'), opt('--run'), args.includes('--require-reviewed'));
        break;
      } catch (error) {
        if (error.code !== 'EEXIST' || attempt >= 49) throw error;
        await new Promise(done => setTimeout(done, 100));
      }
    }
    console.log('frontier-dependency-ledger: refreshed and deduplicated');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
