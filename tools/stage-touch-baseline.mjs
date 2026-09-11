#!/usr/bin/env node
// Atomically-at-the-workflow-level run an idempotent touch snapshot and freeze
// the corresponding auditor-created inventory.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { writeAuditorCreatedBaseline } from './auditor-created-items.mjs';

try {
  const args = process.argv.slice(2), value = flag => {
    const at = args.indexOf(flag); return at < 0 ? '' : args[at + 1];
  };
  const run = value('--run'), step = Number(value('--step'));
  const touches = value('--touches'), label = value('--label');
  if (!run || ![7, 8].includes(step) || !touches || !label)
    throw Error('Usage: stage-touch-baseline.mjs --run RUN --step 7|8 --touches PATH --label LABEL');
  const touchlog = fileURLToPath(new URL('./touchlog.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [touchlog, 'snap', touches, label, '--idempotent'],
    { cwd: process.cwd(), encoding: 'utf8' });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) process.exit(result.status ?? 1);
  const baseline = writeAuditorCreatedBaseline(process.cwd(), run, step);
  console.log(`step${step} auditor inventory ${baseline.reused ? 'reused' : 'recorded'} — ${baseline.items} item(s)`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
