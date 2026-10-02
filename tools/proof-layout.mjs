#!/usr/bin/env node
// Explicit files: read-only checks. --run --write: one cached SSR scan shared
// by both readiness gates. --verify: hashes/coverage only, never rerenders.
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { REPO, WEB_DIR } from './paths.mjs';
import { splitFrontmatter } from './step9-lib.mjs';
import { LAYOUT_GATES } from './proof-layout-core.mjs';
import { proofLayoutInputs, proofLayoutPath, verifyProofLayout } from './proof-layout-receipt.mjs';

export function scanProofFiles(files, root = REPO) {
  if (!WEB_DIR) throw Error('proof-layout: renderer checkout is unavailable');
  const inputs = files.map(file => {
    const raw = readFileSync(resolve(root, file), 'utf8');
    const { body } = splitFrontmatter(raw);
    return { file, body, linesBeforeBody: raw.slice(0, raw.length - body.length).split('\n').length - 1 };
  });
  const result = spawnSync(process.execPath, [join(REPO, 'tools/tsx-run.mjs'), join(REPO, 'tools/proof-layout-render.mts')], {
    cwd: WEB_DIR, input: JSON.stringify(inputs), encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, timeout: 300_000,
  });
  if (result.error || result.status !== 0) throw Error(`proof-layout: renderer failed (${result.error?.message ?? result.stderr})`);
  const items = JSON.parse(result.stdout);
  if (!Array.isArray(items) || items.length !== files.length || items.some((item, i) => item.file !== files[i])) throw Error('proof-layout: renderer returned incomplete coverage');
  for (let i = 0; i < items.length; i++) for (const error of items[i].errors) error.line += inputs[i].linesBeforeBody;
  return items;
}

export function writeProofLayout(run, root = REPO) {
  const before = proofLayoutInputs(run, root);
  // Reuse a current successful report across the two gates. Failed reports are
  // also reused until inputs change; retry cannot turn identical defects green.
  try {
    const old = JSON.parse(readFileSync(proofLayoutPath(run, root), 'utf8'));
    if (old.version === 1 && old.run === run && old.fingerprint === before.fingerprint) return old;
  } catch { /* first scan or stale/unreadable report */ }
  const items = scanProofFiles(before.scope.files, root);
  const after = proofLayoutInputs(run, root);
  if (before.fingerprint !== after.fingerprint) throw Error('proof-layout: inputs changed during rendering; wait for writers and retry');
  const steps = items.reduce((n, item) => n + item.rows.reduce((m, row) => m + row.sourceSteps, 0), 0);
  const gates = Object.fromEntries(LAYOUT_GATES.map(gate => [gate, steps > 0 && !items.some(item => item.errors.some(e => e.gate === gate)) ? 'pass' : 'fail']));
  const receipt = { version: 1, run, ...before, steps, gates, items };
  writeFileSync(proofLayoutPath(run, root), JSON.stringify(receipt, null, 2) + '\n');
  return receipt;
}

export function main(args = process.argv.slice(2)) {
  const value = name => args[args.indexOf(name) + 1];
  const run = args.includes('--run') ? value('--run') : null;
  const root = args.includes('--root') ? resolve(value('--root')) : REPO;
  const gate = args.includes('--gate') ? value('--gate') : null;
  if (gate && !LAYOUT_GATES.includes(gate)) throw Error(`proof-layout: unknown gate ${gate}`);
  if (run) {
    if (args.includes('--verify') === args.includes('--write')) throw Error('proof-layout: use exactly one of --write or --verify with --run');
    const report = args.includes('--verify') ? verifyProofLayout(run, root, gate) : writeProofLayout(run, root);
    const errors = report.items.flatMap(item => item.errors.filter(e => !gate || e.gate === gate).map(e => ({ file: item.file, ...e })));
    for (const e of errors) console.error(`FAIL ${e.gate}: ${e.file}:${e.line} ${e.section} ${e.step ?? ''} [${e.code}] ${e.message}`);
    if (!report.steps) console.error('FAIL proof-layout: zero numbered steps checked');
    const passed = (gate ? [gate] : LAYOUT_GATES).every(id => report.gates[id] === 'pass');
    console.log(`${gate ?? 'proof-layout'}: ${report.items.length} items, ${report.steps} steps, ${passed ? 'pass' : 'fail'}`);
    return passed ? 0 : 1;
  }
  if (args.some(a => a.startsWith('--'))) throw Error('usage: proof-layout.mjs <item.md...> | --run RUN --write|--verify [--gate GATE] [--root ROOT]');
  if (!args.length) throw Error('proof-layout: specify explicit item paths or --run');
  const items = scanProofFiles(args, root);
  const errors = items.flatMap(item => item.errors.map(e => ({ file: item.file, ...e })));
  for (const e of errors) console.error(`FAIL ${e.gate}: ${e.file}:${e.line} ${e.section} ${e.step ?? ''} [${e.code}] ${e.message}`);
  console.log(`proof-layout: ${items.length} items, ${items.reduce((n, i) => n + i.rows.reduce((m, r) => m + r.sourceSteps, 0), 0)} steps, ${errors.length} defects`);
  return errors.length ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { process.exitCode = main(); }
  catch (error) { console.error(`ERROR ${error.message}`); process.exitCode = 1; }
}
