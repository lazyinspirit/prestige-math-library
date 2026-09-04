#!/usr/bin/env node
// Structured Step 10 verdict. This does not publish: it proves that workflow-
// owned work is closed and leaves only the owner's audit/status/push decisions.
//
// The receipt also seals the protected repository tree. The expensive final
// gates run against that sealed tree at 10-readiness-v2; terminal verification
// recomputes the digest instead of rerunning the same mathematical scans. Files
// that Step 10 creates after readiness and the context-hash acceleration cache
// that closure verification refreshes are excluded. The authoritative closure
// receipt is hashed separately below; mathematical and workflow inputs remain
// protected.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { REPO } from './paths.mjs';
import { runContentHash, runScope, sha256, splitFrontmatter } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
const root = resolve(value('--root') || REPO);
const write = argv.includes('--write');
const verify = argv.includes('--verify');
const requireReport = argv.includes('--require-report');
if (!run || write === verify) {
  console.error('usage: node tools/publication-ready.mjs --run <run> (--write|--verify) [--require-report] [--root <repo>]');
  process.exit(2);
}

const receiptRel = `research/${run}-publication-readiness.json`;
const receiptPath = join(root, receiptRel);
const artifactRels = [
  `research/${run}-pathway-closure.json`,
  `research/${run}-judge-closure.json`,
];

function protectedTreeReceipt() {
  const ignoredTopLevel = new Set(['.git', 'node_modules']);
  const mutableAfterReadiness = new Set([
    receiptRel,
    `research/${run}-judge-context-hashes.json`,
    `research/${run}-step10-evidence.json`,
    `research/${run}-step10-report-integrity.json`,
    `research/${run}-step10-report.response.json`,
    `research/${run}-step10-report.md`,
  ]);
  const dispatchPrefix = `research/${run}-dispatch/`;
  const files = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const absolute = join(dir, entry.name);
      const rel = relative(root, absolute).replaceAll('\\', '/');
      const topLevel = rel.split('/')[0];
      if (!rel || ignoredTopLevel.has(topLevel)
        || topLevel === '.autopilot' || topLevel.startsWith('.autopilot-')) continue;
      if (mutableAfterReadiness.has(rel) || rel.startsWith(dispatchPrefix)) continue;
      if (entry.isDirectory()) walk(absolute);
      else if (entry.isFile()) files.push(rel);
    }
  };
  walk(root);
  const rows = files.sort().map((file) => `${file}\0${sha256(readFileSync(join(root, file)))}`);
  return { protected_tree_files: rows.length, protected_tree_sha256: sha256(rows.join('\n')) };
}

const blockers = [];
for (const file of artifactRels) if (!existsSync(join(root, file))) blockers.push(`missing ${file}`);

function runCheck(label, args) {
  const result = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) blockers.push(`${label}: ${(result.stderr || result.stdout).trim().split('\n').slice(-3).join(' ')}`);
}
if (!blockers.length && write) {
  runCheck('pathway closure', ['tools/pathway-closure.mjs', 'check', '--run', run]);
}

let scope;
try { scope = runScope(run, root); } catch (error) { blockers.push(String(error.message ?? error)); }
if (scope) {
  for (const row of [...scope.pages, ...scope.items]) {
    const { frontmatter } = splitFrontmatter(readFileSync(join(root, row.file), 'utf8'));
    const status = frontmatter.match(/^status:\s*(\S+)\s*$/m)?.[1];
    if (status !== 'draft') blockers.push(`${row.file}: expected status:draft pending owner approval, found ${status ?? 'missing'}`);
  }
}

const inputHashes = Object.fromEntries(artifactRels.filter((file) => existsSync(join(root, file)))
  .map((file) => [file, sha256(readFileSync(join(root, file)))]));
const treeReceipt = protectedTreeReceipt();
const expected = {
  schema: 2,
  run,
  verdict: blockers.length ? 'blocked' : 'publishable-pending-owner-approval',
  workflow_owned_blockers: blockers,
  content_sha256: scope ? runContentHash(run, root) : null,
  input_sha256: inputHashes,
  ...treeReceipt,
  owner_actions_remaining: ['personal mathematical audit', 'deliberate status:published changes', 'push/deployment'],
};

if (write) {
  writeFileSync(receiptPath, JSON.stringify({ ...expected, generated_at: new Date().toISOString() }, null, 2) + '\n');
} else {
  if (!existsSync(receiptPath)) blockers.push(`missing ${receiptRel}`);
  else {
    const saved = JSON.parse(readFileSync(receiptPath, 'utf8'));
    for (const key of ['schema', 'run', 'verdict', 'content_sha256', 'protected_tree_files', 'protected_tree_sha256']) {
      if (saved[key] !== expected[key]) blockers.push(`${receiptRel}: ${key} is stale`);
    }
    if (JSON.stringify(saved.input_sha256) !== JSON.stringify(expected.input_sha256)) blockers.push(`${receiptRel}: input hashes are stale`);
    if ((saved.workflow_owned_blockers ?? []).length) blockers.push(`${receiptRel}: saved verdict contains open blockers`);
  }
  if (requireReport && !existsSync(join(root, 'research', `${run}-step10-report.md`))) {
    blockers.push(`missing research/${run}-step10-report.md`);
  }
}

for (const blocker of blockers) console.error(`publication-ready: ${blocker}`);
if (blockers.length) process.exit(1);
console.log(`publication-ready: ${run} is publishable pending owner approval; 0 workflow-owned blockers; ${treeReceipt.protected_tree_files} protected files sealed`);
