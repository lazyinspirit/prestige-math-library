#!/usr/bin/env node
// Freeze the pre-reader baseline for every batch, stop on the first failing
// author check, then record the Step-5 auditor-created inventory once.
import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeAuditorCreatedBaseline } from './auditor-created-items.mjs';

try {
  const args = process.argv.slice(2), at = args.indexOf('--run'), run = at < 0 ? '' : args[at + 1];
  const rootAt = args.indexOf('--root');
  const root = rootAt < 0 ? process.cwd() : args[rootAt + 1];
  if (!run) throw Error('Usage: step5-prepare.mjs --run RUN');
  const tool = fileURLToPath(new URL('./step5-scope.mjs', import.meta.url));
  const prefix = `${run}-batch-`, suffix = '.pages.json';
  const batches = readdirSync(join(root, 'research'))
    .filter((name) => name.startsWith(prefix) && name.endsWith(suffix))
    .map((name) => name.slice(prefix.length, -suffix.length))
    .sort((left, right) => Number(left) - Number(right));
  if (!batches.length) throw Error(`no batch manifests for ${run}`);
  for (const batch of batches) {
    const argv = [tool, 'hash', '--run', run, '--batch', batch, '--label', 'pre', '--validate-author'];
    if (rootAt >= 0) argv.push('--root', root);
    const result = spawnSync(process.execPath, argv, { cwd: root, encoding: 'utf8' });
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
  const baseline = writeAuditorCreatedBaseline(root, run, 5);
  console.log(`step5-prepare: ${batches.length} pre-reader baseline(s); auditor inventory `
    + `${baseline.reused ? 'reused' : 'recorded'} — ${baseline.items} item(s)`);
} catch (error) {
  console.error(`step5-prepare: ${error.message}`);
  process.exitCode = 1;
}
