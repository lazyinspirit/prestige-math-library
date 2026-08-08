#!/usr/bin/env node
// tsx-run.mjs — run one of this repo's .mts tools with an available TS loader.
//
//   node tools/tsx-run.mjs tools/precheck.mts [item.md ...]
//   node tools/tsx-run.mjs tools/judge.mts items/<id>.md --parallel
//
// This replaces the hardcoded `node --import /root/Projects/prestige-intelligence/
// worker/node_modules/tsx/dist/loader.mjs <tool>` form that every doc and brief
// used to carry. The loader path is resolved at run time (tools/paths.mjs): use
// the app checkout's tsx when installed, otherwise use the repository's minimal
// hook with an installed global TypeScript runtime.

import { spawnSync } from 'node:child_process';
import { tsxLoader } from './paths.mjs';

const [target, ...rest] = process.argv.slice(2);
if (!target) {
  console.error('usage: node tools/tsx-run.mjs <tool.mts> [args...]');
  process.exit(2);
}

let loader;
try {
  loader = tsxLoader();
} catch (error) {
  console.error(`tsx-run: ${error.message}`);
  process.exit(2);
}

const result = spawnSync(process.execPath, ['--import', loader, target, ...rest], { stdio: 'inherit' });
if (result.error) {
  console.error(`tsx-run: ${result.error.message}`);
  process.exit(2);
}
process.exit(result.status ?? 1);
