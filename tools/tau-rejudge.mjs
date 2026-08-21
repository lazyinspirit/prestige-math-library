#!/usr/bin/env node
// Rejudge exactly the mathematical items Tau changed. An empty target list is
// a real no-op; it must never degrade to judge-sweep's broad default scope.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
if (!run) { console.error('usage: node tools/tau-rejudge.mjs --run <run>'); process.exit(2); }
const targets = JSON.parse(readFileSync(join(REPO, 'research', `${run}-tau-rejudge-targets.json`), 'utf8'));
const items = [...new Set(targets.items ?? [])].map(String).sort();
if (!items.length) { console.log('tau-rejudge: Tau changed no mathematical items; no judge calls spent'); process.exit(0); }
const result = spawnSync(process.execPath, ['tools/judge-sweep.mjs',
  '--ledger', `research/${run}-judge.jsonl`, '--cost', `research/${run}-judge-cost.jsonl`,
  '--items', items.join(',')], { cwd: REPO, stdio: 'inherit', env: { ...process.env, JUDGE_LINEUP: 'deepseek+terra' } });
process.exit(result.status ?? 1);
