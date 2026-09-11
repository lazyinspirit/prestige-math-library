#!/usr/bin/env node
// Freeze Step 5's ordinary direct-review scope and its auditor-creation
// inventory as one fail-fast mechanical boundary.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { writeAuditorCreatedBaseline } from './auditor-created-items.mjs';

try {
  const args = process.argv.slice(2), at = args.indexOf('--run'), run = at < 0 ? '' : args[at + 1];
  if (!run) throw Error('Usage: step5-prepare.mjs --run RUN');
  const tool = fileURLToPath(new URL('./step5-scope.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [tool, 'prepare-direct', '--run', run],
    { cwd: process.cwd(), encoding: 'utf8' });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) process.exit(result.status ?? 1);
  const baseline = writeAuditorCreatedBaseline(process.cwd(), run, 5);
  console.log(`step5 auditor inventory ${baseline.reused ? 'reused' : 'recorded'} — ${baseline.items} item(s)`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
