#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { REPO } from '../../tools/paths.mjs';
import { itemContentHash } from '../../tools/item-hash.mjs';

const indexPath = join(REPO, 'research/audit/wave9-A8-certifier-index.json');
const index = JSON.parse(readFileSync(indexPath, 'utf8'));
const target = index.targets[0];
const sha256 = (path) => createHash('sha256').update(readFileSync(path)).digest('hex');
const resolve = (path) => join(REPO, path);

if (sha256(resolve(index.brief)) !== index.brief_sha256) {
  throw new Error('A8 certifier brief hash no longer matches its index');
}
if (sha256(resolve(target.task)) !== target.task_sha256) {
  throw new Error('A8 certifier task hash no longer matches its index');
}
const itemPath = join(REPO, 'items', `${target.id}.md`);
const itemText = readFileSync(itemPath, 'utf8');
if (itemContentHash(itemText) !== target.normalized_sha256) {
  throw new Error(`current ${target.id} text no longer matches the indexed exact-final hash`);
}
if (/^  (?:judge|verified):/m.test(itemText)) {
  throw new Error(`current ${target.id} still carries stale judge/verified evidence`);
}

let attempt = 1;
let label;
for (;;) {
  label = `a8-final${attempt}-${target.id}`;
  const result = join(REPO, 'research/audit/wave9-dispatch', `certifier-${label}.result.json`);
  if (!existsSync(result)) break;
  attempt += 1;
}

const args = [
  'tools/dispatch.mjs',
  '--role', 'certifier',
  '--brief', index.brief,
  '--label', label,
  '--run', 'wave9',
  '--task', target.task,
  '--timeout', '1200',
  '--json',
];

const child = spawn(process.execPath, args, { cwd: REPO, stdio: 'inherit' });
child.once('error', (error) => { throw error; });
child.once('exit', (code, signal) => {
  if (signal) {
    console.error(`A8 certifier dispatch ended from signal ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
