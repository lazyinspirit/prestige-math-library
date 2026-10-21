import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { step5JudgePolicy } from './step5-judge-policy.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { digest } from './step5-workflow.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { MODELS } from './models.mjs';
import { createOriginalSlotFixture } from './step5-original-slot-reclassification.test.mjs';
import { ORIGINAL_SLOT_ID, CURRENT_SLOT_ID } from './step5-original-slot-reclassification.mjs';
import { frontierGateBattery } from './step5-frontier-gate.mjs';
import { loadStep5ClosureCertification } from './step5-certification-consumer.mjs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { shortHash } from './item-hash.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step5-selective-policy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'research', 'demo-step5-v2');
  mkdirSync(dir, { recursive: true });
  const id = 'thm-original', text = `---\nid: ${id}\nkind: theorem\n---\nOriginal proof.\n`;
  const original = { id, model: MODELS.luna.id, keep: true, item_sha256: itemHashJudge(text), context_sha256: 'c'.repeat(64) };
  const frozen = {
    'frontier.json': freezeFrontier({ run: 'demo', batches: [{ id: '1', items: [id] }] }),
    'baseline.json': { [id]: itemHashGuard(text) },
    'step4-verdicts.json': [original],
  };
  const evidence = {};
  for (const [name, value] of Object.entries(frozen)) {
    const path = join(dir, name); writeFileSync(path, JSON.stringify(value));
    evidence[path] = digest(readFileSync(path, 'utf8'));
  }
  const cert = { version: 2, run: 'demo', phase: 'impact-repeat', round: 1,
    items: [{ id, item_sha256: itemHashJudge(text), guard_sha256: itemHashGuard(text), context_sha256: 'c'.repeat(64) }], evidence };
  writeFileSync(join(dir, 'certification.json'), JSON.stringify({ ...cert, sha256: digest(cert) }));
  const ledger = join(root, 'judge.jsonl'); writeFileSync(ledger, JSON.stringify(original) + '\n');
  return { root, id, text, original, ledger };
}

test('unchanged original slots retain exact authentic Luna evidence and changed slots require Sol', t => {
  const f = fixture(t), policy = step5JudgePolicy(f.root, 'demo', [f.id], f.ledger);
  assert.deepEqual(policy.requiredModels(f.id, f.text), [MODELS.luna.id]);
  assert.deepEqual(policy.requiredModels(f.id, f.text + 'Changed.'), [MODELS.sol61.id]);
  assert.equal(policy.eligible(f.id, f.original, f.text), true);
  assert.equal(policy.eligible(f.id, { ...f.original, context_sha256: 'd'.repeat(64) }, f.text), false);
});

test('aliases and partial or duplicate selections cannot replace an original work slot', t => {
  const f = fixture(t);
  for (const ids of [[], ['ex-alias'], [f.id, f.id]])
    assert.throws(() => step5JudgePolicy(f.root, 'demo', ids, f.ledger), /complete frozen original frontier/);
  writeFileSync(f.ledger, JSON.stringify({ ...f.original, keep: false }) + '\n');
  assert.throws(() => step5JudgePolicy(f.root, 'demo', [f.id], f.ledger), /genuine frozen Luna/);
});

function migratedFixture(t) {
  const f = createOriginalSlotFixture(); t.after(f.cleanup); f.install();
  const native = f.nativeCertificate(), certificate = { ...native.certificate,
    phase: 'impact-repeat', latest_adjudication_round: 1 };
  const dir = join(f.root, 'research', `${f.run}-step5-v2`);
  const threshold = join(dir, 'threshold-1.json');
  writeFileSync(threshold, JSON.stringify({ round: 1, originalCount: 1472, fatalIds: [], fatalCount: 0, belowThreshold: true, errors: [] }));
  certificate.evidence = { ...certificate.evidence, [threshold]: digest(readFileSync(threshold, 'utf8')) };
  const save = () => { const { sha256, ...payload } = certificate;
    writeFileSync(join(dir, 'certification.json'), JSON.stringify({ ...payload, sha256: digest(payload) })); };
  save();
  const ledger = join(f.root, 'judge.jsonl');
  writeFileSync(ledger, JSON.parse(readFileSync(join(dir, 'step4-verdicts.json'), 'utf8')).map(JSON.stringify).join('\n') + '\n');
  return { ...f, ...native, certificate, dir, save, ledger,
    currentIds: f.frontier.ids.map(id => id === ORIGINAL_SLOT_ID ? CURRENT_SLOT_ID : id) };
}

test('authenticated original replacement selects all 1472 slots and requires fresh Sol, never old Luna', t => {
  const f = migratedFixture(t), policy = step5JudgePolicy(f.root, f.run, f.currentIds, f.ledger);
  assert.equal(f.currentIds.length, 1472);
  assert.equal(f.pack.rejected.length, 344);
  assert.equal(f.pack.units.length, 109);
  assert.equal(f.reports.filter(row => row.completion === 'mechanical-zero-work').length, 22);
  assert.deepEqual(policy.requiredModels(CURRENT_SLOT_ID, f.current), [MODELS.sol61.id]);
  const original = JSON.parse(readFileSync(join(f.dir, 'step4-verdicts.json'), 'utf8')).find(row => row.id === ORIGINAL_SLOT_ID);
  assert.equal(policy.eligible(CURRENT_SLOT_ID, original, f.current), false);
  assert.equal(policy.eligible(CURRENT_SLOT_ID, { ...original, id: CURRENT_SLOT_ID, model: MODELS.sol61.id }, f.current), true);
  assert.throws(() => step5JudgePolicy(f.root, f.run, f.frontier.ids, f.ledger), /complete frozen original frontier/);
  f.certificate.evidence = { ...f.certificate.evidence }; delete f.certificate.evidence[f.reportPath]; f.save();
  assert.throws(() => step5JudgePolicy(f.root, f.run, f.currentIds, f.ledger), /current.*review|replacement certification/);
});

test('authenticated replacement gates run on ex source and retain its defects; closure rejects lost current native review', t => {
  const f = migratedFixture(t);
  const gates = frontierGateBattery({ repo: f.root, run: f.run }, [
    { id: 'precheck', argv: ['node', 'tools/precheck.mts'] },
    { id: 'proof-contract', argv: ['node', 'tools/proof-contract.mjs'] },
  ]);
  assert.equal(gates[0].needs.length, 1472);
  assert.ok(gates[0].needs.includes(`items/${CURRENT_SLOT_ID}.md`));
  assert.ok(!gates[0].needs.includes(`items/${ORIGINAL_SLOT_ID}.md`));
  const finding = { id: CURRENT_SLOT_ID, code: 'citation-quote-mismatch' };
  const result = gates[1].projectResult({ stdout: JSON.stringify({ errors: [finding] }), stderr: '', code: 1 });
  assert.equal(result.code, 1);
  assert.equal(result.frontierScope.frontierSha256, f.frontier.sha256);
  assert.deepEqual(result.frontierScope.retained[0].subjects, [CURRENT_SLOT_ID]);
  assert.equal(loadStep5ClosureCertification(f.root, f.run).items[0].id, CURRENT_SLOT_ID);
  delete f.certificate.evidence[f.reportPath]; f.save();
  assert.throws(() => loadStep5ClosureCertification(f.root, f.run), /current.*review|replacement.*certification/);
});

test('centralized guard licenses only the receipt-bound deleted original/current-certified replacement pair', t => {
  const f = migratedFixture(t);
  mkdirSync(join(f.root, 'tools'), { recursive: true });
  const row = f.certificate.items[0];
  writeFileSync(join(f.root, 'tools', 'judge.mts'), `console.log(${JSON.stringify(JSON.stringify({ contexts: { [row.id]: { item_sha256: row.item_sha256, context_sha256: row.context_sha256 } } }))});`);
  const baseline = JSON.parse(readFileSync(join(f.dir, 'baseline.json'), 'utf8'));
  writeFileSync(join(f.root, 'touches.json'), JSON.stringify({ snapshots: [{ label: 'pre-step5', hashes: Object.fromEntries(Object.entries(baseline).map(([id, hash]) => [id, shortHash(hash)])) }] }));
  writeFileSync(join(f.root, 'scope.json'), JSON.stringify({ run: f.run, by_item: Object.fromEntries(f.frontier.batches.flatMap(batch => batch.items.map(id => [id, batch.id]))) }));
  const tool = fileURLToPath(new URL('./step5-guard.mjs', import.meta.url));
  const run = () => spawnSync(process.execPath, [tool, '--touches', join(f.root, 'touches.json'), '--baseline', 'pre-step5',
    '--scope', join(f.root, 'scope.json'), '--items-dir', join(f.root, 'items'), '--workflow-root', f.root,
    '--judge-ledger', f.ledger, '--adjudications', join(f.root, 'unused-adjudications.jsonl'), '--json'], { encoding: 'utf8' });
  let result = run(); assert.equal(result.status, 0, result.stdout + result.stderr);
  const output = JSON.parse(result.stdout);
  assert.deepEqual(output.deleted, [ORIGINAL_SLOT_ID]);
  assert.deepEqual(output.created, [CURRENT_SLOT_ID]);
  assert.equal(output.summary.licensed_original_slot_replacements, 1);
  assert.equal(output.summary.items_at_baseline, 1472);
  assert.equal(output.summary.frontier_created, 1);
  assert.deepEqual(output.excluded.created, []);
  writeFileSync(join(f.root, 'items', `${CURRENT_SLOT_ID}.md`), f.current + '\nA later unreviewed proof edit.\n');
  result = run(); assert.equal(result.status, 1);
  assert.match(result.stdout, /stale Step 5 certification|replacement.*certification|native proof review context is stale|certificate lacks genuine current example native proof review/);
});
