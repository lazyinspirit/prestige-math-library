#!/usr/bin/env node
// run-refuter-wave.mjs — bounded, resumable fan-out for prepared audit-refuter
// tasks. Successful existing result records are skipped; failed or absent tasks
// are dispatched through the ordinary role-enforcing transport.

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';
import { spawn } from 'node:child_process';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const option = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
};
const run = option('--run');
const tasksArg = option('--tasks');
const brief = option('--brief');
const concurrency = Number(option('--concurrency') ?? 16);

if (!run || !tasksArg || !brief || !Number.isInteger(concurrency) || concurrency < 1 || concurrency > 16) {
  console.error('usage: node tools/run-refuter-wave.mjs --run <waveN> --tasks <dir> --brief <file> [--concurrency 16]');
  process.exit(2);
}

const absolute = (path) => path.startsWith('/') ? path : join(REPO, path);
const taskDir = absolute(tasksArg);
if (!existsSync(taskDir) || !existsSync(absolute(brief))) {
  console.error('run-refuter-wave: task directory or brief is missing');
  process.exit(2);
}

const dispatchDir = join(REPO, 'research/audit', `${run}-dispatch`);
const tasks = readdirSync(taskDir).filter((name) => name.endsWith('.md')).sort().map((name) => ({
  id: basename(name, '.md'),
  path: join(taskDir, name),
}));

const alreadyPassed = (id) => {
  const path = join(dispatchDir, `audit-refuter-${id}.result.json`);
  if (!existsSync(path)) return false;
  try {
    const row = JSON.parse(readFileSync(path, 'utf8'));
    return row.ok === true && row.model === 'deepseek-v4-pro' && row.role === 'audit-refuter';
  } catch { return false; }
};

const pending = tasks.filter(({ id }) => !alreadyPassed(id));
const skipped = tasks.length - pending.length;
console.log(`run-refuter-wave: ${tasks.length} prepared; ${skipped} already passed; ${pending.length} pending; concurrency ${concurrency}`);

let cursor = 0;
const failures = [];
const runOne = ({ id, path }) => new Promise((resolve) => {
  const started = Date.now();
  const args = [
    'tools/dispatch.mjs', '--role', 'audit-refuter', '--brief', brief,
    '--label', id, '--run', run, '--task', path, '--json',
  ];
  const child = spawn(process.execPath, args, { cwd: REPO, stdio: ['ignore', 'pipe', 'pipe'] });
  let stdout = '', stderr = '';
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  child.on('error', (error) => {
    failures.push({ id, error: error.message });
    console.log(`FAIL ${id} — ${error.message}`);
    resolve();
  });
  child.on('close', (code) => {
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    if (code === 0) console.log(`PASS ${id} (${seconds}s)`);
    else {
      const detail = (stderr || stdout || `exit ${code}`).trim().split('\n').slice(-3).join(' | ');
      failures.push({ id, error: detail });
      console.log(`FAIL ${id} (${seconds}s) — ${detail}`);
    }
    resolve();
  });
});

const worker = async () => {
  while (cursor < pending.length) {
    const task = pending[cursor++];
    await runOne(task);
  }
};
await Promise.all(Array.from({ length: Math.min(concurrency, pending.length || 1) }, worker));

console.log(`run-refuter-wave: ${tasks.length - failures.length}/${tasks.length} passed; ${failures.length} failed`);
if (failures.length) {
  for (const failure of failures) console.log(`FAILED ${failure.id}: ${failure.error}`);
  process.exit(1);
}
