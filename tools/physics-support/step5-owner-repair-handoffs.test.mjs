import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { advanceImpact, collect, digest, packPath, workerLabel, workerReport, workflowDir, reviewContextHashes } from './step5-workflow.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'physics-owner-handoff-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const run = 'demo', phase = 'impact-initial', round = 1, id = 'ex-fluid';
  const dir = workflowDir(root, run), local = join(root, 'research', `${run}-owner-repairs`);
  for (const path of [dir, local, join(root, 'items'), join(root, 'research', `${run}-dispatch`)]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const before = {};
  for (const item of [id, 'thm-one', 'thm-two']) {
    const text = `---\nid: ${item}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nA sound claim.\n## Proof\nOriginal proof.\n`;
    writeFileSync(join(root, 'items', `${item}.md`), text); before[item] = itemHashGuard(text);
  }
  const oldReviews = reviewContextHashes(root, [id]);
  save(join(dir, 'initial-1-collected.json'), { evidence: {}, reviews: [{ id, ...oldReviews[id] }], post: before, downstream: [] });
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '1', items: Object.keys(before) }] }));
  save(join(dir, 'step4-verdicts.json'), []);
  const pack = { version: 2, run, phase, round, repair_scope: 'frontier', frontier_ids: Object.keys(before),
    units: ['1', '2', '3'], assignments: { '1': ['thm-one'], '2': ['thm-two'], '3': [] }, before, seeds: [] };
  const evidence = { reason: 'Examined the assigned item and its proof and verified the claim remains sound.', uncertain: false, familiar: true, source_urls: [] };
  const handoff = [];
  for (const unit of pack.units) {
    const task = workerReport(root, run, phase, round, unit).replace(/\.json$/, '.task.md');
    writeFileSync(task, `Assigned ${pack.assignments[unit]}`);
    handoff.push({ path: task.slice(root.length + 1), sha256: digest(readFileSync(task, 'utf8')) });
    const reviews = reviewContextHashes(root, pack.assignments[unit]);
    save(workerReport(root, run, phase, round, unit), { run, phase, round, unit, input_sha256: digest(pack),
      decisions: [], created_items: [], downstream: [], reviews: pack.assignments[unit].map(item => ({ id: item, ...evidence, ...reviews[item], disposition: 'unaffected' })) });
    save(join(root, 'research', `${run}-dispatch`, `alpha-repair-${workerLabel(phase, round, unit)}.result.json`),
      { ok: true, run, role: 'alpha-repair', label: workerLabel(phase, round, unit), model: MODELS.sol61.id, provider_effort: 'high' });
  }
  save(packPath(root, run, phase, round), pack);
  const itemPath = join(root, 'items', `${id}.md`), original = readFileSync(itemPath, 'utf8');
  const beforePath = join(local, 'before.md'); writeFileSync(beforePath, original);
  const after = original.replace('Original proof.', 'Corrected proof.'); writeFileSync(itemPath, after);
  const validationPath = join(local, 'validation.json');
  const validation = { checks: [{ name: 'precheck', command: `precheck items/${id}.md`, exit_code: 0 }] }; save(validationPath, validation);
  const receiptPath = join(local, 'receipt.json');
  const receipt = { version: 1, run, subject: id, owner: 'outside-repair', status: 'repaired-and-scoped-validation-passed',
    independent_review: false, native_transition: false, recertification: false,
    writer_handoff: { pid: 100, absent: true, overlap: false, pass3_assignments: handoff },
    files: [{ path: `items/${id}.md`, before_file: beforePath.slice(root.length + 1), before_raw_sha256: digest(original),
      current_raw_sha256: digest(after), before_content_sha256: before[id], current_content_sha256: itemHashGuard(after) }],
    validation: { path: validationPath.slice(root.length + 1), sha256: digest(readFileSync(validationPath, 'utf8')), passed: ['precheck'] } };
  const registryPath = join(dir, 'owner-repair-handoffs.json');
  const registry = { version: 1, run, authorizing_owner: '/root', repairs: [{ id, owner: receipt.owner, phase, round,
    before_sha256: before[id], after_sha256: itemHashGuard(after), receipt: { path: receiptPath.slice(root.length + 1), sha256: '' } }] };
  const bind = () => { save(receiptPath, receipt); registry.repairs[0].receipt.sha256 = digest(readFileSync(receiptPath, 'utf8')); save(registryPath, registry); };
  bind();
  return { root, run, phase, round, id, dir, pack, save, bind, receipt, receiptPath, registry, registryPath, validation, validationPath, beforePath, itemPath,
    collect: () => collect(root, run, phase, round, { deferImpactClosure: true }), advance: () => advanceImpact(root, run, phase, round) };
}

test('external authorship is separate and a fresh native review is actually dispatched', t => {
  const f = fixture(t);
  const paths = [packPath(f.root, f.run, f.phase, 1), ...f.pack.units.map(unit => workerReport(f.root, f.run, f.phase, 1, unit)), join(f.dir, 'initial-1-collected.json')];
  const bytes = paths.map(path => readFileSync(path, 'utf8'));
  const result = f.advance();
  assert.equal(result.complete, false);
  assert.deepEqual(Object.values(result.pack.assignments).flat(), [f.id]);
  assert.equal(result.pack.before[f.id], f.registry.repairs[0].after_sha256);
  const collected = f.collect();
  assert.equal(collected.post[f.id], f.registry.repairs[0].after_sha256);
  assert.equal(collected.reviews.some(row => row.id === f.id), false);
  assert.equal(collected.external_owner_repairs[0].owner, 'outside-repair');
  for (const path of [f.registryPath, f.receiptPath, f.beforePath, f.validationPath]) assert.ok(collected.evidence[path]);
  for (let i = 0; i < paths.length; i++) assert.equal(readFileSync(paths[i], 'utf8'), bytes[i]);
  assert.deepEqual(f.collect(), collected);
  assert.throws(() => collect(f.root, f.run, f.phase, 1), /require deferred/);
  for (const unit of result.pack.units) {
    const contexts = reviewContextHashes(f.root, result.pack.assignments[unit]);
    f.save(workerReport(f.root, f.run, result.pack.phase, 1, unit), { run: f.run, phase: result.pack.phase, round: 1,
      unit, input_sha256: digest(result.pack), decisions: [], created_items: [], downstream: [],
      reviews: result.pack.assignments[unit].map(id => ({ id, ...contexts[id], disposition: 'unaffected',
        reason: 'Independently examined the corrected carrier and verified its current proof and claim.', uncertain: false, familiar: true, source_urls: [] })) });
    f.save(join(f.root, 'research', `${f.run}-dispatch`, `alpha-repair-${workerLabel(result.pack.phase, 1, unit)}.result.json`),
      { ok: true, run: f.run, role: 'alpha-repair', label: workerLabel(result.pack.phase, 1, unit), model: MODELS.sol61.id, provider_effort: 'high' });
  }
  assert.equal(f.advance().complete, true);
});

for (const [name, change, error] of [
  ['no grant', f => rmSync(f.registryPath), /unlicensed or unreviewed/],
  ['wrong run', f => { f.registry.run = 'other'; f.bind(); }, /authorization/],
  ['wrong authorizer', f => { f.registry.authorizing_owner = '/root/worker'; f.bind(); }, /authorization/],
  ['wrong phase', f => { f.registry.repairs[0].phase = 'impact-repeat'; f.bind(); }, /unlicensed or unreviewed/],
  ['wrong round', f => { f.registry.repairs[0].round = 2; f.bind(); }, /unlicensed or unreviewed/],
  ['stale before', f => { f.registry.repairs[0].before_sha256 = '0'.repeat(64); f.bind(); }, /stale before/],
  ['stale after', f => { f.registry.repairs[0].after_sha256 = '0'.repeat(64); f.bind(); }, /stale before/],
  ['receipt tamper', f => writeFileSync(f.receiptPath, '{}'), /evidence changed/],
  ['owner mismatch', f => { f.receipt.owner = 'other'; f.bind(); }, /identity/],
  ['assigned target', f => { f.pack.assignments['3'] = [f.id]; f.save(packPath(f.root, f.run, f.phase, 1), f.pack); }, /outside frontier or assigned/],
  ['outside frozen frontier', f => { f.save(join(f.dir, 'frontier.json'), freezeFrontier({ run: f.run, batches: [{ id: '1', items: ['thm-one', 'thm-two'] }] })); }, /outside frontier or assigned/],
  ['receipt content mismatch', f => { f.receipt.files[0].current_content_sha256 = '0'.repeat(64); f.bind(); }, /content hash mismatch/],
  ['native review claim', f => { f.receipt.independent_review = true; f.bind(); }, /disclaim/],
  ['native transition claim', f => { f.receipt.native_transition = true; f.bind(); }, /disclaim/],
  ['recertification claim', f => { f.receipt.recertification = true; f.bind(); }, /disclaim/],
  ['writer overlap', f => { f.receipt.writer_handoff.overlap = true; f.bind(); }, /attestation/],
  ['writer present', f => { f.receipt.writer_handoff.absent = false; f.bind(); }, /attestation/],
  ['before bytes tamper', f => writeFileSync(f.beforePath, 'changed'), /evidence changed/],
  ['rebound wrong before bytes', f => { writeFileSync(f.beforePath, 'changed'); f.receipt.files[0].before_raw_sha256 = digest('changed'); f.bind(); }, /preserved source content/],
  ['current raw hash mismatch', f => { f.receipt.files[0].current_raw_sha256 = '0'.repeat(64); f.bind(); }, /current raw/],
  ['failed validation', f => { f.validation.checks[0].exit_code = 1; f.save(f.validationPath, f.validation); f.receipt.validation.sha256 = digest(readFileSync(f.validationPath, 'utf8')); f.bind(); }, /exit zero/],
  ['run evidence symlink escape', f => { rmSync(f.validationPath); symlinkSync(f.itemPath, f.validationPath); f.bind(); }, /escapes run/],
]) test(`handoff refuses ${name}`, t => {
  const f = fixture(t); change(f); assert.throws(f.collect, error);
});

for (const path of ['receiptPath', 'registryPath', 'validationPath', 'beforePath']) test(`repeated collection verifies bound ${path}`, t => {
  const f = fixture(t); f.collect(); writeFileSync(f[path], 'tampered'); assert.throws(f.collect, /evidence changed/);
});

test('strict collection cannot use a handoff grant', t => {
  const f = fixture(t); assert.throws(() => collect(f.root, f.run, f.phase, 1), /unlicensed or unreviewed/);
});

test('adjudication cannot defer collection to use a handoff', t => {
  const f = fixture(t); f.pack.rejected = []; f.save(packPath(f.root, f.run, f.phase, 1), f.pack);
  assert.throws(f.collect, /only owner waves/);
});

test('gate repair collection cannot use an external handoff', t => {
  const f = fixture(t), gatePack = { ...f.pack, phase: 'gate' };
  f.save(packPath(f.root, f.run, 'gate', 1), gatePack);
  for (const unit of gatePack.units) {
    const report = JSON.parse(readFileSync(workerReport(f.root, f.run, f.phase, 1, unit), 'utf8'));
    f.save(workerReport(f.root, f.run, 'gate', 1, unit), { ...report, phase: 'gate', input_sha256: digest(gatePack) });
  }
  assert.throws(() => collect(f.root, f.run, 'gate', 1, { deferImpactClosure: true }), /unlicensed or unreviewed/);
});
