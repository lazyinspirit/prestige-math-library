#!/usr/bin/env node
// Explicit migration for a run that completed 8-rejudge before the rebuilt
// preflight/close stages were inserted. Such a run may perform final contract
// closure, but its item bytes are frozen: otherwise the durable rejudge pass
// would be skipped over changed mathematics.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';

import { itemHashGuard } from './item-hash.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const value = (flag, fallback = '') => {
  const index = argv.indexOf(flag);
  return index >= 0 ? argv[index + 1] ?? fallback : fallback;
};
const root = resolve(value('--root', process.cwd()));
const run = value('--run');
const dispatchDir = resolve(root, value('--dispatch-dir', `research/${run}-dispatch`));
const receiptPath = resolve(root, value('--out', `research/${run}-step8-cutover.json`));
const statePath = join(root, '.autopilot', 'state.json');
const rejudgePath = join(dispatchDir, 'tool-rejudge.result.json');

if (!run || !['prepare', 'check'].includes(command)) {
  console.error('usage: node tools/step8-cutover.mjs <prepare|check> --run <run> [--dispatch-dir <dir>] [--out <receipt>] [--root <repo>]');
  process.exit(2);
}

const sha256 = (text) => createHash('sha256').update(text).digest('hex');
const itemHashes = () => Object.fromEntries(readdirSync(join(root, 'items'))
  .filter((name) => name.endsWith('.md')).sort()
  .map((name) => [name.slice(0, -3), itemHashGuard(readFileSync(join(root, 'items', name), 'utf8'))]));

function completedRejudge() {
  if (!existsSync(rejudgePath) || !existsSync(statePath)) return null;
  const resultText = readFileSync(rejudgePath, 'utf8');
  const result = JSON.parse(resultText);
  const state = JSON.parse(readFileSync(statePath, 'utf8'));
  const stage = state.stages?.['8-rejudge'];
  if (state.run !== run || result.run !== run || result.ok !== true || !stage?.gatesPassedAt) return null;
  return { resultText, result, stage };
}

function readReceipt() {
  if (!existsSync(receiptPath)) return { receipt: null, error: `${receiptPath}: frozen cutover receipt is missing` };
  try { return { receipt: JSON.parse(readFileSync(receiptPath, 'utf8')), error: null }; }
  catch (cause) { return { receipt: null, error: `${receiptPath}: invalid JSON (${cause.message})` }; }
}

function validationProblems(receipt, completed) {
  const errors = [];
  if (!receipt) return errors;
  if (receipt.version !== 1 || receipt.run !== run || receipt.mode !== 'post-rejudge-frozen')
    errors.push(`${receiptPath}: wrong version, run, or mode`);
  if (completed && receipt.rejudge_result_sha256 !== sha256(completed.resultText))
    errors.push(`${receiptPath}: rejudge result changed after cutover`);
  const now = itemHashes();
  for (const id of new Set([...Object.keys(receipt.item_hashes ?? {}), ...Object.keys(now)])) {
    if (receipt.item_hashes?.[id] !== now[id]) errors.push(`${id}: item changed after frozen Step-8 cutover`);
  }
  return errors;
}

if (command === 'prepare') {
  const render = spawnSync(process.execPath, ['tools/step8-scope.mjs', 'render', '--run', run],
    { cwd: root, encoding: 'utf8' });
  process.stdout.write(render.stdout ?? '');
  process.stderr.write(render.stderr ?? '');
  if (render.status !== 0) process.exit(render.status ?? 1);
  const completed = completedRejudge();
  if (!completed) {
    console.log('step8-cutover: ordinary pre-rejudge run; no frozen migration needed');
    process.exit(0);
  }
  // A migration receipt is write-once evidence. Re-running prepare must check
  // the original boundary, never bless whatever bytes happen to exist later.
  if (existsSync(receiptPath)) {
    const existing = readReceipt();
    const errors = [...(existing.error ? [existing.error] : []),
      ...validationProblems(existing.receipt, completed)];
    console.log(`step8-cutover: ${errors.length ? 'FAIL' : 'OK'} — existing frozen migration retained`);
    for (const error of errors) console.error(`ERROR ${error}`);
    process.exit(errors.length ? 1 : 0);
  }
  const receipt = {
    version: 1,
    run,
    mode: 'post-rejudge-frozen',
    rejudge_result: rejudgePath.replace(`${root}/`, ''),
    rejudge_result_sha256: sha256(completed.resultText),
    rejudge_gates_passed_at: completed.stage.gatesPassedAt,
    item_hashes: itemHashes(),
    at: new Date().toISOString(),
  };
  writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(`step8-cutover: froze ${Object.keys(receipt.item_hashes).length} item(s) after completed rejudge`);
  process.exit(0);
}

const loaded = readReceipt();
const errors = loaded.error ? [loaded.error] : [];
const completed = completedRejudge();
if (!completed) errors.push('the successful, gate-complete historical 8-rejudge evidence is missing');
errors.push(...validationProblems(loaded.receipt, completed));
console.log(`step8-cutover: ${errors.length ? 'FAIL' : 'OK'} — frozen post-rejudge migration`);
for (const error of errors) console.error(`ERROR ${error}`);
process.exit(errors.length ? 1 : 0);
