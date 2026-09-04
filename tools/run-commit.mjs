#!/usr/bin/env node
// run-commit.mjs — the engine's close-out commit, on main, no branches.
//
//   node tools/run-commit.mjs --run R            # commit if the tree is dirty
//   node tools/run-commit.mjs --run R --check    # gate mode: clean tree = exit 0
//   node tools/run-commit.mjs --run R --final-receipt research/R-dispatch/tool-close.result.json
//
// Owner directive (2026-08-17): the workflow fully closes a run on the MAIN
// branch — no worktrees, no feature branches — and committing the run's
// working tree is the engine's job at 10-commit, so a `git clean` or a fresh
// clone can no longer lose sixteen page files and eighteen items that existed
// only on disk (frontier-15 caveat 18). PUSH and `status: published` remain
// owner acts: this tool refuses to push, and it never touches a status field.
//
// Refusals over surprises: any branch other than main is a hard error, never
// a checkout — if HEAD is elsewhere, a person moved it and a person moves it
// back. NO Co-Authored-By trailers, ever (owner rule).

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const run = opt('run');
const checkOnly = argv.includes('--check');
const finalReceipt = opt('final-receipt');
if (!run || (checkOnly && finalReceipt)) {
  console.error('usage: run-commit.mjs --run <run> [--check | --final-receipt research/<run>-dispatch/<tool-result.json>]');
  process.exit(2);
}
if (finalReceipt && (finalReceipt.startsWith('/') || finalReceipt.includes('..')
  || !finalReceipt.startsWith(`research/${run}-dispatch/`) || !finalReceipt.endsWith('.result.json'))) {
  console.error(`run-commit: refusing final receipt outside research/${run}-dispatch/*.result.json`);
  process.exit(2);
}

const git = (...args) => execFileSync('git', args, { cwd: REPO, encoding: 'utf8' });

const branch = git('rev-parse', '--abbrev-ref', 'HEAD').trim();
if (branch !== 'main') {
  console.error(`run-commit: HEAD is on '${branch}', not main — a person moved it and a person moves it back. Refusing.`);
  process.exit(1);
}

let dirty = git('status', '--porcelain').split('\n').filter(Boolean);

if (checkOnly) {
  if (dirty.length) {
    console.error(`run-commit: ${dirty.length} uncommitted path(s) — the close-out commit has not landed`);
    for (const line of dirty.slice(0, 10)) console.error(`  ${line}`);
    process.exit(1);
  }
  console.log('run-commit: tree clean on main — 1 checked');
  process.exit(0);
}

if (!dirty.length && !finalReceipt) {
  console.log('run-commit: nothing to commit — tree already clean on main');
  process.exit(0);
}

let previousReceipt = null;
const receiptPath = finalReceipt ? join(REPO, finalReceipt) : null;
if (receiptPath) {
  previousReceipt = existsSync(receiptPath) ? readFileSync(receiptPath) : null;
  mkdirSync(dirname(receiptPath), { recursive: true });
  writeFileSync(receiptPath, `${JSON.stringify({
    role: 'tool', label: 'close-step10-v2', run, covers: ['all'], ok: true,
    written_by: 'run-commit', ended_at: new Date().toISOString(),
  }, null, 2)}\n`);
  dirty = git('status', '--porcelain').split('\n').filter(Boolean);
}

try {
  git('add', '-A');
  git('commit', '-m', `chore(${run}): engine close-out — commit the run's working tree\n\n${dirty.length} path(s); status fields untouched; push and publish remain owner acts.`);
} catch (cause) {
  if (receiptPath) {
    try { git('reset', '--', finalReceipt); } catch { /* best effort */ }
    try {
      if (previousReceipt) writeFileSync(receiptPath, previousReceipt);
      else unlinkSync(receiptPath);
    } catch { /* preserve the original commit error */ }
  }
  throw cause;
}
console.log(`run-commit: committed ${dirty.length} path(s) on main (${git('rev-parse', '--short', 'HEAD').trim()})`);
process.exit(0);
