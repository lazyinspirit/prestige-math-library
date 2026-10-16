// Apply one inspected owner repair with authentic before bytes and local checks.
import { readFileSync, writeFileSync, mkdirSync, appendFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from '../../tools/item-hash.mjs';
import { recordedPublishedRepair } from '../../tools/published-repair-policy.mjs';

const args = process.argv.slice(2);
let run = 'quantum-hopf-hecke-75-2026-10-15';
if (args[0] === '--run') {
  run = args[1]; args.splice(0, 2);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run ?? '')) throw Error('invalid repair run');
const [proposal, expectedBefore, correction] = args;
if (!proposal || !expectedBefore || !correction) throw Error('proposal, archived preimage and correction required');
const group = 'owner-prerequisites';
const candidate = readFileSync(proposal, 'utf8');
const id = /^id:\s*(\S+)/m.exec(candidate)?.[1];
if (!id || !/^[a-z]+-[a-z0-9-]+$/.test(id)) throw Error('invalid proposed identity');
const path = `items/${id}.md`;
const before = readFileSync(path, 'utf8');
if (before !== readFileSync(expectedBefore, 'utf8')) throw Error(`source changed since delegated review: ${id}`);
if (!/^status: published$/m.test(before) || !/^status: published$/m.test(candidate)) throw Error('only existing published repair permitted');
const invoke = args => {
  const result = spawnSync('node', args, { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  const output = (result.stdout ?? '') + (result.stderr ?? '');
  if (result.status !== 0) throw Error(`${args.join(' ')} failed:\n${output}`);
  return { command: ['node', ...args], exit_code: result.status, output, checked_at: new Date().toISOString() };
};
invoke(['tools/published-repairs.mjs', 'claim', '--run', run, '--id', id, '--group', group]);
const base = `research/${run}-owner/published-repairs`;
mkdirSync(base, { recursive: true });
const beforeFile = `${base}/${id}.before.md`;
writeFileSync(beforeFile, before, { flag: 'wx' });
const receiptPath = `${base}/${id}.json`;
if (/^verification:/m.test(candidate)) throw Error('proposal must remove stale verification; replacement is the recorded repair');
const current = candidate.replace(/^---\n/, `---\nverification:\n  repair: ${receiptPath}\n`);
writeFileSync(path, current);
const proof = /^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(current);
const precheck = invoke(['tools/tsx-run.mjs', 'tools/precheck.mts', ...(!proof ? ['--json'] : []), path]);
const rendercheck = invoke(['tools/rendercheck.mjs', path]);
invoke(['tools/proof-layout.mjs', path]);
const hash = itemHashGuard(readFileSync(path, 'utf8'));
const marker = `${run}:${id}`;
const evidence = `\n${id}: ${correction}\nCurrent canonical content hash: ${hash}.\nDelegated proposed source: ${proposal}.\nActual local precheck, renderer and proof-layout checks passed; this is a recorded local correction, not a new whole-item audit.\n`;
const sha = value => createHash('sha256').update(value).digest('hex');
appendFileSync('research/published-consumer-supplier-ledger.md', `\n<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n`);
const receipt = {
  version: 1, kind: 'recorded-local-published-repair', id, run, group, correction,
  content_sha256: hash, before_file: beforeFile, before_raw_sha256: sha(before), pre_sha256: itemHashGuard(before),
  ledger_marker: marker, ledger_sha256: sha(evidence), recorded_at: new Date().toISOString(),
  local_checks: { precheck: { ...precheck, content_sha256: hash }, rendercheck: { ...rendercheck, content_sha256: hash } },
};
if (!/^ {2}(audited|verified):/m.test(before)) {
  const git = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' });
  if (git.status !== 0) throw Error('cannot authenticate previous publication');
  receipt.prior_publication_commit = git.stdout.trim();
}
writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
const valid = recordedPublishedRepair(process.cwd(), id, readFileSync(path, 'utf8'), receiptPath);
if (!valid.ok) throw Error(valid.reason);
console.log(`${id}: ${hash}; local published-repair evidence valid`);
