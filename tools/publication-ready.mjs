#!/usr/bin/env node
// Structured Step 10 verdict. This does not publish: it proves that workflow-
// owned work is closed and leaves only the owner's audit/status/push decisions.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';
import { runContentHash, runScope, sha256, splitFrontmatter } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
const write = argv.includes('--write');
const verify = argv.includes('--verify');
const requireReport = argv.includes('--require-report');
if (!run || write === verify) {
  console.error('usage: node tools/publication-ready.mjs --run <run> (--write|--verify) [--require-report]');
  process.exit(2);
}

const receiptRel = `research/${run}-publication-readiness.json`;
const receiptPath = join(REPO, receiptRel);
const artifactRels = [
  `research/${run}-pathway-closure.json`, `research/${run}-sigma-initial.json`,
  `research/${run}-tau.json`, `research/${run}-tau-rejudge-targets.json`,
  `research/${run}-render-final.json`, `research/${run}-sigma-final.json`,
  `research/${run}-judge-closure.json`,
];
const blockers = [];
for (const file of artifactRels) if (!existsSync(join(REPO, file))) blockers.push(`missing ${file}`);

function runCheck(label, args) {
  const result = spawnSync(process.execPath, args, { cwd: REPO, encoding: 'utf8' });
  if (result.status !== 0) blockers.push(`${label}: ${(result.stderr || result.stdout).trim().split('\n').slice(-3).join(' ')}`);
}
if (!blockers.length && write) {
  runCheck('pathway closure', ['tools/pathway-closure.mjs', 'check', '--run', run]);
  runCheck('Tau repair scope/content preservation', ['tools/visual-repair.mjs', 'verify', '--run', run]);
  runCheck('final Sigma adjudication', ['tools/visual-adjudication.mjs', '--run', run, '--phase', 'final', '--require-approved']);
}

let scope;
try { scope = runScope(run); } catch (error) { blockers.push(String(error.message ?? error)); }
if (scope) {
  for (const row of [...scope.pages, ...scope.items]) {
    const { frontmatter } = splitFrontmatter(readFileSync(join(REPO, row.file), 'utf8'));
    const status = frontmatter.match(/^status:\s*(\S+)\s*$/m)?.[1];
    if (status !== 'draft') blockers.push(`${row.file}: expected status:draft pending owner approval, found ${status ?? 'missing'}`);
  }
}

const inputHashes = Object.fromEntries(artifactRels.filter((file) => existsSync(join(REPO, file)))
  .map((file) => [file, sha256(readFileSync(join(REPO, file)))]));
const expected = { schema: 1, run, verdict: blockers.length ? 'blocked' : 'publishable-pending-owner-approval',
  workflow_owned_blockers: blockers, content_sha256: scope ? runContentHash(run) : null,
  input_sha256: inputHashes,
  owner_actions_remaining: ['personal mathematical audit', 'deliberate status:published changes', 'push/deployment'] };

if (write) {
  writeFileSync(receiptPath, JSON.stringify({ ...expected, generated_at: new Date().toISOString() }, null, 2) + '\n');
} else {
  if (!existsSync(receiptPath)) blockers.push(`missing ${receiptRel}`);
  else {
    const saved = JSON.parse(readFileSync(receiptPath, 'utf8'));
    for (const key of ['schema', 'run', 'verdict', 'content_sha256'])
      if (saved[key] !== expected[key]) blockers.push(`${receiptRel}: ${key} is stale`);
    if (JSON.stringify(saved.input_sha256) !== JSON.stringify(expected.input_sha256)) blockers.push(`${receiptRel}: input hashes are stale`);
    if ((saved.workflow_owned_blockers ?? []).length) blockers.push(`${receiptRel}: saved verdict contains open blockers`);
  }
  if (requireReport && !existsSync(join(REPO, 'research', `${run}-step10-report.md`)))
    blockers.push(`missing research/${run}-step10-report.md`);
}

for (const blocker of blockers) console.error(`publication-ready: ${blocker}`);
if (blockers.length) process.exit(1);
console.log(`publication-ready: ${run} is publishable pending owner approval; 0 workflow-owned blockers`);
