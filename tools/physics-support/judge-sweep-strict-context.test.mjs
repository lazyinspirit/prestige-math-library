import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { judge, digest, workflowDir } from './step5-workflow.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';

test('native Step 5 rejudges unchanged item after supplier-context change and strict resume reuses the new verdict', t => {
  const root = mkdtempSync(join(tmpdir(), 'native-strict-sweep-')), run = 'fixture', id = 'thm-consumer';
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const path of [join(root, 'items'), join(root, 'research'), join(root, 'tools', 'physics-support'), workflowDir(root, run)]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const consumer = '---\nid: thm-consumer\nkind: theorem\nstatus: draft\ndeps: [def-supplier]\n---\n## Statement\nA sound claim.\n\n## Proof\nAn unchanged consumer argument.\n';
  writeFileSync(join(root, 'items', `${id}.md`), consumer);
  const supplierPath = join(root, 'items', 'def-supplier.md'), supplierBefore = '---\nid: def-supplier\nkind: definition\ndeps: []\n---\n## Definition\nOriginal supplier interface.\n';
  writeFileSync(supplierPath, supplierBefore);
  save(join(root, 'research', 'plan-spec.json'), { pages: [{ id: 'test-page', items: [{ id }, { id: 'def-supplier' }] }] });
  // The fixture judge supplies hashes and append-only verdicts, with no model call.
  writeFileSync(join(root, 'tools', 'physics-support', 'judge.mts'), `
import { readFileSync, appendFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const item = 'b'.repeat(64);
const context = createHash('sha256').update(readFileSync('items/thm-consumer.md')).update(readFileSync('items/def-supplier.md')).digest('hex');
const argv = process.argv.slice(2);
if (argv.includes('--context-hashes')) {
  const ids = argv[argv.indexOf('--context-hashes') + 1].split(',');
  console.log(JSON.stringify({ contexts: Object.fromEntries(ids.map(id => [id, { item_sha256: item, context_sha256: context }])) }));
} else {
  appendFileSync('paid-calls.jsonl', JSON.stringify({ id: 'thm-consumer', context }) + '\\n');
  appendFileSync(process.env.JUDGE_VERDICTLOG, JSON.stringify({ id: 'thm-consumer', model: '${MODELS.sol61.id}', item_sha256: item, context_sha256: context, keep: true }) + '\\n');
}
`);
  const sweepURL = new URL('./judge-sweep.mjs', import.meta.url), copiedSweep = join(root, 'tools', 'physics-support', 'judge-sweep.mjs');
  const source = readFileSync(sweepURL, 'utf8').replace(/from '([^']+)'/g, (match, path) => path.startsWith('.') ? `from '${new URL(path, sweepURL).href}'` : match)
    .replace("root: '/tmp/prestige-math-library-judge-slots'", `root: ${JSON.stringify(join(root, 'judge-slots'))}`);
  writeFileSync(copiedSweep, source);
  const ledger = join(root, 'research', `${run}-judge.jsonl`), prior = { id, model: MODELS.sol61.id, context_sha256: digest(consumer + supplierBefore), item_sha256: 'b'.repeat(64), keep: true };
  writeFileSync(ledger, JSON.stringify(prior) + '\n');
  const env = { ...process.env, PHYSICS_REPO: root, JUDGE_CONCURRENCY_GPT_6_1_SOL: '1' };
  const sweep = strict => {
    const out = spawnSync(process.execPath, [copiedSweep, '--items', id, '--ledger', ledger, '--cost', join(root, 'cost.jsonl'), '--lineup', 'sol61', ...(strict ? ['--strict-context'] : [])], { cwd: root, env, encoding: 'utf8', timeout: 120000 });
    assert.equal(out.status, 0, out.stderr); return out.stdout;
  };
  assert.match(sweep(false), /pending 0\/1/);
  const originalCache = JSON.parse(readFileSync(join(root, 'research', `${run}-judge-context-hashes.json`), 'utf8'));
  writeFileSync(supplierPath, supplierBefore.replace('Original supplier interface.', 'Repaired supplier interface.'));
  assert.match(sweep(false), /pending 0\/1/); // Legacy own-item reuse hides the new supplier context.
  assert.equal(existsSync(join(root, 'paid-calls.jsonl')), false);
  const cache = JSON.parse(readFileSync(join(root, 'research', `${run}-judge-context-hashes.json`), 'utf8'));
  assert.notEqual(cache.input_sha256, originalCache.input_sha256, 'supplier edits invalidate the exact prompt-hash cache');
  const current = cache.rows.find(row => row.id === id);
  assert.notEqual(current.context, prior.context_sha256);
  assert.equal(current.item, prior.item_sha256);
  const dir = workflowDir(root, run);
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '1', items: [id] }] }));
  const cert = { version: 2, run, phase: 'impact-repeat', round: 1, items: [{ id, guard_sha256: itemHashGuard(consumer), item_sha256: current.item, context_sha256: current.context }], creations: [], evidence: {}, changed: [id] };
  cert.sha256 = digest(cert); save(join(dir, 'certification.json'), cert); save(join(dir, 'judge-1.json'), { verdicts: [prior] });
  const oldRepo = process.env.PHYSICS_REPO, oldCap = process.env.JUDGE_CONCURRENCY_GPT_6_1_SOL;
  process.env.PHYSICS_REPO = root; process.env.JUDGE_CONCURRENCY_GPT_6_1_SOL = '1';
  try {
    const result = judge(root, run, 2, { contextHasher: (_root, ids) => new Map(ids.map(id => [id, { item_sha256: current.item, context_sha256: current.context }])) });
    assert.equal(result.verdicts[0].context_sha256, current.context);
  } finally {
    if (oldRepo === undefined) delete process.env.PHYSICS_REPO; else process.env.PHYSICS_REPO = oldRepo;
    if (oldCap === undefined) delete process.env.JUDGE_CONCURRENCY_GPT_6_1_SOL; else process.env.JUDGE_CONCURRENCY_GPT_6_1_SOL = oldCap;
  }
  assert.equal(readFileSync(join(root, 'paid-calls.jsonl'), 'utf8').trim().split('\n').length, 1);
  assert.match(sweep(true), /pending 0\/1/);
  assert.equal(readFileSync(join(root, 'paid-calls.jsonl'), 'utf8').trim().split('\n').length, 1);
  assert.equal(JSON.parse(readFileSync(ledger, 'utf8').split('\n')[0]).context_sha256, prior.context_sha256);
});
