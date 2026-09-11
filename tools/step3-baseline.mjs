#!/usr/bin/env node
// One mechanical Step 3 boundary: preserve the existing touch snapshot and
// also freeze the scaffold inventory used to identify later auditor-created
// items. Both operations are idempotent and refuse to move an existing key.

import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeAuditorBaseline } from './step3-auditor-items.mjs';

try {
  const args = process.argv.slice(2), get = key => {
    const at = args.indexOf(`--${key}`);
    return at < 0 ? undefined : args[at + 1];
  };
  const run = get('run'), touches = get('touches'), label = get('label');
  if (!run || !touches || !label) throw Error('Usage: step3-baseline.mjs --run RUN --touches PATH --label LABEL');
  const touchlog = fileURLToPath(new URL('./touchlog.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [touchlog, 'snap', touches, label, '--idempotent'], {
    cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) process.exit(result.status ?? 1);
  const baseline = writeAuditorBaseline(process.cwd(), run);
  console.log(`step3 auditor inventory "${label}" ${baseline.reused ? 'reused' : 'recorded'} — ${baseline.items} scaffold item(s)`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
