#!/usr/bin/env node
// wave5-run-tasks.mjs — dispatch one DeepSeek audit-refuter per pre-assembled
// task file, at the lane's own concurrency.
//
// The sibling wave5-run-refuters.mjs assembles its own context, one item at a
// time. This one takes task files that already exist (the packed citation
// tables), so the two can share the same 8-slot lane without either of them
// knowing about the other — the pool is a directory, not a process.
//
//   node research/audit/wave5-run-tasks.mjs --tasks <_tasks.json> [--concurrency 8] [--skip-done]

import { readFileSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (n, d) => { const i = process.argv.indexOf(n); return i >= 0 ? process.argv[i + 1] : d; };
const tasksFile = arg('--tasks');
const concurrency = Number(arg('--concurrency', '8'));
const skipDone = process.argv.includes('--skip-done');
if (!tasksFile) { console.error('usage: wave5-run-tasks.mjs --tasks <_tasks.json> [--concurrency 8] [--skip-done]'); process.exit(2); }

const tasks = JSON.parse(readFileSync(tasksFile, 'utf8'));
const outDir = join(REPO, 'research/audit/wave5-dispatch');

const run = (cmd, args) => new Promise((resolve) => {
  const child = spawn(cmd, args, { cwd: REPO, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = ''; let err = '';
  child.stdout.on('data', (d) => { out += d; });
  child.stderr.on('data', (d) => { err += d; });
  child.on('close', (code) => resolve({ code, out, err }));
});

const queue = [...tasks];
let started = 0;

async function worker() {
  for (;;) {
    const t = queue.shift();
    if (!t) return;
    const resultPath = join(outDir, `audit-refuter-${t.label}.result.json`);
    if (skipDone && existsSync(resultPath)) {
      try {
        if (JSON.parse(readFileSync(resultPath, 'utf8')).ok) { console.log(`[skip ${++started}/${tasks.length}] ${t.label}`); continue; }
      } catch { /* unreadable: re-run */ }
    }
    const n = ++started;
    console.log(`[run ${n}/${tasks.length}] ${t.label} (${t.edges} edges)`);
    const t0 = Date.now();
    const d = await run('node', [
      'tools/dispatch.mjs',
      '--role', 'audit-refuter',
      '--brief', 'research/audit/wave5-refuter.brief.md',
      '--label', t.label,
      '--run', 'wave5',
      '--task', t.file,
      '--var', 'k=5',
      '--timeout', '2400',
    ]);
    const secs = Math.round((Date.now() - t0) / 1000);
    console.log(`[${d.code === 0 ? 'ok' : 'FAIL'} ${n}/${tasks.length}] ${t.label} (${secs}s)${d.code === 0 ? '' : ` — ${d.err.trim().slice(0, 300)}`}`);
  }
}

await Promise.all(Array.from({ length: Math.max(1, concurrency) }, () => worker()));
console.log('\nedge-bundle refuters done');
