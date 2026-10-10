#!/usr/bin/env node
// Compare the actual manifest inventory with the merged proof contract, rather
// than counting only the contract entries its authors chose to supply.
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { frontierGateScope } from './frontier-gate-scope.mjs';
import { isProofBearing } from './proof-bearing.mjs';

export function proofContractCoverage(root, run, contractPath) {
  const scope = frontierGateScope({ repo: resolve(root), run });
  const contracts = JSON.parse(readFileSync(resolve(root, contractPath), 'utf8'));
  if (contracts?.version !== 1 || !Array.isArray(contracts.scope)
    || contracts.scope.some(id => typeof id !== 'string' || !id)
    || new Set(contracts.scope).size !== contracts.scope.length
    || !contracts.contracts || typeof contracts.contracts !== 'object' || Array.isArray(contracts.contracts))
    throw Error('invalid merged proof contract');
  const declared = new Set(contracts.scope), proofScope = [], errors = [];
  for (const id of [...scope.items].sort()) {
    const source = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
    const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/.exec(source);
    if (!match) throw Error(`malformed frontier item ${id}`);
    if (!isProofBearing(match[1])) continue;
    proofScope.push(id);
    const record = contracts.contracts[id];
    if (!declared.has(id) || !Object.hasOwn(contracts.contracts, id)
      || !record || typeof record !== 'object' || Array.isArray(record))
      errors.push({ code: 'contract-missing-proof', id,
        message: `${id} has a supplied argument but no corresponding merged contract entry` });
  }
  return { run, item_scope: [...scope.items].sort(), proof_scope: proofScope,
    checked: scope.items.size, covered: proofScope.length - errors.length, errors };
}

export function coverageCli(defaultRoot) {
  const args = process.argv.slice(2);
  const option = name => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
  try {
    const run = option('--run'), contracts = option('--contracts');
    if (!run || !contracts) throw Error('usage: proof-contract-coverage.mjs --run RUN --contracts FILE [--root REPO] [--json]');
    const result = proofContractCoverage(resolve(option('--root') ?? defaultRoot), run, contracts);
    if (args.includes('--json')) console.log(JSON.stringify(result));
    else {
      console.log(`proof-contract-coverage: ${result.checked} item(s), ${result.covered}/${result.proof_scope.length} supplied argument(s) covered`);
      for (const row of result.errors) console.error(`ERROR ${row.code} [${row.id}]: ${row.message}`);
    }
    process.exitCode = result.errors.length ? 1 : 0;
  } catch (cause) {
    console.error(`ERROR proof-contract-coverage-input: ${cause.message}`);
    process.exitCode = 1;
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  coverageCli(fileURLToPath(new URL('../', import.meta.url)));
