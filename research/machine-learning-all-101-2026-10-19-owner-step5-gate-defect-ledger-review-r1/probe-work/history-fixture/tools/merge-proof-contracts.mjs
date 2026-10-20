#!/usr/bin/env node
// merge-proof-contracts.mjs — safely consolidate parallel batch proof contracts.
//
// node tools/merge-proof-contracts.mjs --level frontier-<n> <output.json> <batch-1.json> <batch-2.json> ...
//
// Betas own only their namespaced batch files.  This small deterministic merger
// is the single-writer handoff used before each whole-level proof-contract gate.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const levelIndex = argv.indexOf('--level');
const level = levelIndex >= 0 ? argv[levelIndex + 1] : null;
const positional = argv.filter((arg, index) => !arg.startsWith('--') && index !== levelIndex + 1);
if (!level || positional.length < 2) usage();

const [output, ...inputs] = positional;
const contracts = {};
const scope = [];
let failed = false;
for (const input of inputs) {
  let document;
  try {
    document = JSON.parse(readFileSync(resolve(input), 'utf8'));
  } catch (cause) {
    console.error(`ERROR contract-read: ${input}: ${cause.message}`);
    failed = true;
    continue;
  }
  if (document?.version !== 1 || !Array.isArray(document.scope) || !document.contracts || typeof document.contracts !== 'object' || Array.isArray(document.contracts)) {
    console.error(`ERROR contract-shape: ${input} is not a version-1 proof contract`);
    failed = true;
    continue;
  }
  for (const id of document.scope) {
    if (scope.includes(id) || Object.hasOwn(contracts, id)) {
      console.error(`ERROR duplicate-item: ${id} appears in more than one batch contract`);
      failed = true;
      continue;
    }
    scope.push(id);
    if (document.contracts[id] != null) contracts[id] = document.contracts[id];
  }
  for (const id of Object.keys(document.contracts)) {
    if (!document.scope.includes(id)) {
      console.error(`ERROR contract-outside-scope: ${id} appears in ${input} but not its scope`);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
writeFileSync(resolve(output), `${JSON.stringify({ version: 1, level, scope, contracts }, null, 2)}\n`);
console.log(`merge-proof-contracts: wrote ${output} with ${scope.length} scoped item(s) from ${inputs.length} batch contract(s)`);

function resolve(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function usage() {
  console.error('usage: node tools/merge-proof-contracts.mjs --level frontier-<n> <output.json> <batch-1.json> [batch-2.json ...]');
  process.exit(2);
}
