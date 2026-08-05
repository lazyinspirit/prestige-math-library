#!/usr/bin/env node
// wave5-run-refuters.mjs — assemble and dispatch one DeepSeek audit-refuter per
// item, at the lane's own concurrency.
//
// WHY A DRIVER RATHER THAN N BACKGROUND SHELLS. dispatch.mjs blocks on the
// cross-process slot pool, so 131 backgrounded dispatches would self-throttle to
// 8 running calls — but 131 resident node processes on a 7.8 GB host is the same
// memory mistake the judge sweep already measured (wave 4: 3.9 GB steady, 4.6 GB
// peak, against MemoryHigh=4G). One parent with at most `--concurrency` live
// children keeps the lane cap and the memory bill agreeing.
//
//   node research/audit/wave5-run-refuters.mjs --items <ids.json> [--concurrency 8]
//     [--prefix a6] [--skip-done]

import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : fallback;
};

const itemsFile = arg('--items');
const concurrency = Number(arg('--concurrency', '8'));
const prefix = arg('--prefix', 'a6');
const skipDone = process.argv.includes('--skip-done');
if (!itemsFile) {
  console.error('usage: wave5-run-refuters.mjs --items <ids.json> [--concurrency 8] [--prefix a6] [--skip-done]');
  process.exit(2);
}

const ids = JSON.parse(readFileSync(itemsFile, 'utf8')).map((e) => (typeof e === 'string' ? e : e.id));
const taskDir = join(REPO, 'research/audit/wave5-refuter-tasks');
const outDir = join(REPO, 'research/audit/wave5-dispatch');
mkdirSync(taskDir, { recursive: true });

// dispatch.mjs requires a plain label and writes <role>-<label>.{log,result.json}.
// Long ids collide once truncated, so the index keeps every label distinct.
const labelFor = (id, i) => `${prefix}-${String(i + 1).padStart(3, '0')}-${id}`.slice(0, 72).replace(/[^A-Za-z0-9._-]/g, '-');

const run = (cmd, args) => new Promise((resolve) => {
  const child = spawn(cmd, args, { cwd: REPO, stdio: ['ignore', 'pipe', 'pipe'] });
  let out = '';
  let err = '';
  child.stdout.on('data', (d) => { out += d; });
  child.stderr.on('data', (d) => { err += d; });
  child.on('close', (code) => resolve({ code, out, err }));
});

const queue = ids.map((id, i) => ({ id, i, label: labelFor(id, i) }));
const done = [];
let started = 0;

async function worker() {
  for (;;) {
    const job = queue.shift();
    if (!job) return;
    const { id, i, label } = job;
    const resultPath = join(outDir, `audit-refuter-${label}.result.json`);
    if (skipDone && existsSync(resultPath)) {
      try {
        if (JSON.parse(readFileSync(resultPath, 'utf8')).ok) {
          console.log(`[skip ${++started}/${ids.length}] ${id} — already complete`);
          done.push({ id, label, ok: true, skipped: true });
          continue;
        }
      } catch { /* unreadable result: re-run it */ }
    }
    const taskPath = join(taskDir, `${id}.md`);
    const asm = await run('node', ['research/audit/wave5-assemble-refuter-task.mjs', id, taskPath]);
    if (asm.code !== 0) {
      console.error(`[FAIL ${++started}/${ids.length}] ${id} — assembly: ${asm.err.trim()}`);
      done.push({ id, label, ok: false, stage: 'assemble' });
      continue;
    }
    const n = ++started;
    console.log(`[run ${n}/${ids.length}] ${id}`);
    const t0 = Date.now();
    const d = await run('node', [
      'tools/dispatch.mjs',
      '--role', 'audit-refuter',
      '--brief', 'research/audit/wave5-refuter.brief.md',
      '--label', label,
      '--run', 'wave5',
      '--task', taskPath,
      '--var', 'k=5',
      '--timeout', '2400',
    ]);
    const secs = Math.round((Date.now() - t0) / 1000);
    const ok = d.code === 0;
    console.log(`[${ok ? 'ok' : 'FAIL'} ${n}/${ids.length}] ${id} (${secs}s)${ok ? '' : ` — ${d.err.trim().slice(0, 300)}`}`);
    done.push({ id, label, ok, secs, index: i });
  }
}

await Promise.all(Array.from({ length: Math.max(1, concurrency) }, () => worker()));
const failed = done.filter((d) => !d.ok);
console.log(`\nrefuters: ${done.length - failed.length}/${done.length} ok, ${failed.length} failed`);
for (const f of failed) console.log(`  FAILED ${f.id} (${f.stage ?? 'dispatch'})`);
