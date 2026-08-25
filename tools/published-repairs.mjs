#!/usr/bin/env node
// Serialize published-item repair ownership and append its certification rows.

import {
  appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync,
} from 'node:fs';
import { join, resolve } from 'node:path';
import { itemHashGuard } from './item-hash.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const opt = (name) => {
  const at = argv.indexOf(`--${name}`);
  return at >= 0 && argv[at + 1] && !argv[at + 1].startsWith('--') ? argv[at + 1] : null;
};
const run = opt('run');
const root = resolve(opt('root') ?? '.');
const R = (...parts) => join(root, ...parts);
const repairsPath = R('research', `${run}-step8-published-repairs.jsonl`);
const claimsPath = R('research', `${run}-step6-published-claims.jsonl`);
const lockPath = R('research', `${run}-published-repairs.lock`);
const wait = new Int32Array(new SharedArrayBuffer(4));

if (!run || !['claim', 'append'].includes(command)) {
  console.error('usage: node tools/published-repairs.mjs claim --run <run> --id <published-id> --group <group> [--root <repo>]');
  console.error('   or: node tools/published-repairs.mjs append --run <run> --file <rows.json> [--root <repo>]');
  process.exit(2);
}

function rows(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); }
    catch (cause) { throw new Error(`${path} line ${index + 1} is invalid JSON (${cause.message})`); }
  });
}

function acquireLock() {
  const started = Date.now();
  for (;;) {
    try {
      mkdirSync(lockPath);
      writeFileSync(join(lockPath, 'owner.json'), JSON.stringify({ pid: process.pid, at: new Date().toISOString() }));
      return () => rmSync(lockPath, { recursive: true, force: true });
    } catch (cause) {
      if (cause?.code !== 'EEXIST') throw cause;
      try {
        if (Date.now() - statSync(lockPath).mtimeMs > 10 * 60_000) {
          rmSync(lockPath, { recursive: true, force: true });
          continue;
        }
      } catch { continue; }
      if (Date.now() - started > 30_000) throw new Error(`timed out waiting for ${lockPath}`);
      Atomics.wait(wait, 0, 0, 25);
    }
  }
}

const release = acquireLock();
try {
  if (command === 'claim') {
    const id = opt('id');
    const group = opt('group');
    if (!id || !group) throw new Error('claim requires --id and --group');
    const itemPath = R('items', `${id}.md`);
    if (!existsSync(itemPath)) throw new Error(`${id} is not an existing published item`);
    const pre = itemHashGuard(readFileSync(itemPath, 'utf8'));
    const existing = rows(claimsPath).find((row) => row.id === id);
    if (existing) {
      if (existing.group !== group) {
        console.error(`published-repairs: ${id} is owned by group ${existing.group}; group ${group} must not edit it`);
        process.exitCode = 3;
      } else {
        console.log(`published-repairs: group ${group} already owns ${id}`);
      }
    } else {
      appendFileSync(claimsPath, `${JSON.stringify({
        version: 1, run, id, group, pre_sha256: pre, claimed_at: new Date().toISOString(),
      })}\n`);
      console.log(`published-repairs: group ${group} claimed ${id} at ${pre}`);
    }
  } else {
    const input = opt('file');
    if (!input) throw new Error('append requires --file <rows.json>');
    const raw = JSON.parse(readFileSync(resolve(root, input), 'utf8'));
    const incoming = Array.isArray(raw) ? raw : [raw];
    const existing = rows(repairsPath);
    const claims = rows(claimsPath);
    const key = (row) => row.found_at_stage === '6a-read'
      ? `step6:${row.step6_obligation}` : `step8:${row.kind}:${row.group}:${row.id}:${row.found_via}`;
    const keys = new Set(existing.map(key));
    for (const row of incoming) {
      if (!row || !['repaired', 'escalated'].includes(row.kind) || typeof row.id !== 'string'
        || typeof row.group !== 'string' || typeof row.found_via !== 'string') {
        throw new Error('each row requires kind repaired|escalated, id, group, and found_via');
      }
      if (row.found_at_stage === '6a-read') {
        const claim = claims.find((candidate) => candidate.id === row.id);
        if (!claim || row.repair_owner_group !== claim.group || row.pre_sha256 !== claim.pre_sha256) {
          throw new Error(`${row.id} Step-6 receipt does not match its pre-edit ownership claim`);
        }
      }
      const rowKey = key(row);
      if (keys.has(rowKey)) throw new Error(`duplicate published-repair row ${rowKey}`);
      keys.add(rowKey);
    }
    appendFileSync(repairsPath, incoming.map((row) => JSON.stringify(row)).join('\n') + '\n');
    console.log(`published-repairs: appended ${incoming.length} row(s) to ${repairsPath}`);
  }
} finally {
  release();
}
