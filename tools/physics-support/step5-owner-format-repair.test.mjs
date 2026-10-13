import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, readdirSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { advanceImpact, certify, digest, impactClosedPath, impactProgressPath, packPath, reviewContextHashes, workerLabel, workerReport, workflowDir } from './step5-workflow.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { freezeFrontier, readLibraryItems } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';

const explanation = { reason: 'Checked the exact current proof and its unchanged claim after the mechanical phase-label correction.', uncertain: false, familiar: true, source_urls: [] };
function fixture(t, phase = 'impact-initial') {
  const root = mkdtempSync(join(tmpdir(), 'owner-format-repair-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const run = 'demo', round = 1, dir = workflowDir(root, run), stateDir = join(root, '.physics-autopilot', run);
  const local = join(root, 'research', `${run}-format-diagnostics`), ids = ['thm-one', 'thm-two', 'thm-three'];
  for (const path of [dir, stateDir, local, join(root, 'items'), join(root, 'research', `${run}-dispatch`)]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const before = {};
  for (const id of ids) {
    const text = `---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nA sound claim.\n\n## Proof\n1.1 A complete argument. [given]\n\n2.1 The conclusion. [step 1.1] ∎\n`;
    writeFileSync(join(root, 'items', `${id}.md`), text); before[id] = itemHashGuard(text);
  }
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '1', items: ids }] }));
  save(join(dir, 'step4-verdicts.json'), []); save(join(dir, 'baseline.json'), before);
  const source = phase === 'impact-repeat' ? 'repeat' : 'initial';
  save(join(dir, `${source}-1-collected.json`), { run, phase: source, round, evidence: {}, reviews: [], post: before, downstream: [], decisions: [] });
  const pack = { version: 2, run, phase, round, repair_scope: 'frontier', frontier_ids: ids, units: ['1', '2', '3'],
    assignments: { '1': [ids[0]], '2': [ids[1]], '3': [ids[2]] }, before, seeds: [], before_statements: Object.fromEntries(readLibraryItems(root).map(row => [row.id, row.statement_sha256])) };
  save(packPath(root, run, phase, round), pack);
  function reports(next, model = MODELS.sol61.id, effort = 'high') {
    for (const unit of next.units) {
      const contexts = reviewContextHashes(root, next.assignments[unit]);
      save(workerReport(root, run, next.phase, round, unit), { run, phase: next.phase, round, unit, input_sha256: digest(next), decisions: [], created_items: [], downstream: [],
        reviews: next.assignments[unit].map(id => ({ id, ...explanation, ...contexts[id], disposition: contexts[id].post_sha256 === next.before[id] ? 'unaffected' : 'repaired' })) });
      save(join(root, 'research', `${run}-dispatch`, `alpha-repair-${workerLabel(next.phase, round, unit)}.result.json`),
        { ok: true, run, role: 'alpha-repair', label: workerLabel(next.phase, round, unit), model, provider_effort: effort });
    }
  }
  reports(pack); assert.equal(advanceImpact(root, run, phase, round).complete, true);
  const progressPath = impactProgressPath(root, run, phase, round);
  // Exercise legacy completion without the new closure pointer.
  const oldProgress = JSON.parse(readFileSync(progressPath, 'utf8')); delete oldProgress.closed_receipt; save(progressPath, oldProgress);
  const stage = phase === 'impact-repeat' ? '5.6-impact' : '5.2-impact';
  const state = { run, stage, stages: { [stage]: { doneAt: null } }, dispatches: { old: { startedAt: 'earlier', endedAt: 'now', lastExitOk: true } } };
  save(join(stateDir, 'state.json'), state);
  const body = { recertificationScope: 'formatting-metadata-only', run, repo: root, stages: [stage], scopeKind: 'items',
    items: ids.map(id => ({ id, carrierSha256: digest(readFileSync(join(root, 'items', `${id}.md`), 'utf8')), manifestSha256: null })), battery: [],
    inputs: ids.map(id => ({ path: join(root, 'items', `${id}.md`), sha256: digest(readFileSync(join(root, 'items', `${id}.md`), 'utf8')) })) };
  const gate = { version: 2, attempt: 'current-attempt', createdAt: new Date().toISOString(), snapshot: { ...body, sha256: digest(body) } };
  save(join(stateDir, 'owner-gate-request.json'), gate);
  const precheckPath = join(local, 'precheck.json'), proposalPath = join(local, 'diagnosis.json');
  const precheck = { summary: { files: 3, checked: 3, failed: 1 }, results: ids.map((id, i) => ({ file: join(root, 'items', `${id}.md`), item_id: id, status: i ? 'pass' : 'repair', ...(i ? {} : { proposed_proof: '1.1 A complete argument. [given]\n1.2 The conclusion. [step 1.1] ∎' }) })) };
  save(precheckPath, precheck); save(proposalPath, { proposals: ['Unapplied phase and contract ID correction.'] });
  const ref = path => ({ path: path.slice(root.length + 1), sha256: digest(readFileSync(path, 'utf8')) });
  const requestPath = join(dir, 'owner-format-repair-current-attempt.json'), pointerPath = join(dir, 'owner-format-repair-request.json');
  const request = { version: 1, run, reviewer: '/root', phase, round, attempt: gate.attempt, snapshotSha256: gate.snapshot.sha256,
    precheck: ref(precheckPath), subjects: [ids[0]], proposal: ref(proposalPath) };
  function bind() { save(requestPath, request); save(pointerPath, { version: 1, run, request: ref(requestPath) }); }
  bind();
  return { root, run, phase, dir, ids, round, save, bind, stateDir, state, gate, request, requestPath, pointerPath, precheck, precheckPath, proposalPath, progressPath, reports,
    advance: () => advanceImpact(root, run, phase, round) };
}

for (const phase of ['impact-initial', 'impact-repeat']) test(`${phase}: actual failure appends native scope, immutable closure, and certificate`, t => {
  const f = fixture(t, phase), originalClosed = join(f.dir, `${phase}-1-closed.json`);
  const preserved = new Map(readdirSync(f.dir).filter(name => !name.endsWith('-progress.json') && name !== 'owner-format-repair-request.json').map(name => { const path = join(f.dir, name); return [path, readFileSync(path, 'utf8')]; }));
  const result = f.advance();
  assert.equal(result.complete, false); assert.equal(result.pack.phase, `${phase}-pass-2`);
  assert.deepEqual(Object.values(result.pack.assignments).flat(), [f.ids[0]]);
  assert.deepEqual(result.pack.review_contexts, reviewContextHashes(f.root, [f.ids[0]]));
  assert.equal(result.pack.format_repair.gate_request.attempt, f.gate.attempt);
  assert.equal(result.pack.failures.length, 1);
  for (const [path, bytes] of preserved) assert.equal(readFileSync(path, 'utf8'), bytes);
  assert.deepEqual(f.advance().pack, result.pack); // Replay schedules no duplicate pass.
  const task = readFileSync(workerReport(f.root, f.run, result.pack.phase, 1, '1').replace(/\.json$/, '.task.md'), 'utf8');
  assert.match(task, /canonical-phase formatting failures/); assert.match(task, /owning proof-contract derivation-ID/);
  assert.match(task, /no new items/); assert.match(task, /native reviews/);
  const itemPath = join(f.root, 'items', `${f.ids[0]}.md`);
  writeFileSync(itemPath, readFileSync(itemPath, 'utf8').replace('2.1 The conclusion.', '1.2 The conclusion.'));
  f.reports(result.pack); assert.equal(f.advance().complete, true);
  const newest = impactClosedPath(f.root, f.run, phase, 1);
  assert.equal(newest, join(f.dir, `${phase}-1-closed-2.json`));
  assert.equal(readFileSync(originalClosed, 'utf8'), preserved.get(originalClosed));
  const closed = JSON.parse(readFileSync(newest, 'utf8'));
  for (const path of [originalClosed, f.requestPath, f.precheckPath, f.proposalPath]) assert.equal(closed.evidence[path], digest(readFileSync(path, 'utf8')));
  const progressBytes = readFileSync(f.progressPath, 'utf8');
  assert.equal(f.advance().complete, true); assert.equal(readFileSync(f.progressPath, 'utf8'), progressBytes);
  const contextHasher = (root, ids) => new Map(ids.map(id => [id, { item_sha256: itemHashJudge(readFileSync(join(root, 'items', `${id}.md`), 'utf8')), context_sha256: 'a'.repeat(64) }]));
  const cert = certify(f.root, f.run, phase, 1, { contextHasher });
  assert.equal(cert.evidence[newest], digest(readFileSync(newest, 'utf8')));
  assert.equal(cert.items.find(row => row.id === f.ids[0]).guard_sha256, itemHashGuard(readFileSync(itemPath, 'utf8')));
  assert.deepEqual(certify(f.root, f.run, phase, 1, { contextHasher }), cert);
});

for (const [name, change, error] of [
  ['request tamper', f => writeFileSync(f.requestPath, '{}'), /evidence changed/],
  ['precheck tamper', f => writeFileSync(f.precheckPath, '{}'), /evidence changed/],
  ['proposal tamper', f => writeFileSync(f.proposalPath, '{}'), /evidence changed/],
  ['wrong run', f => { f.request.run = 'other'; f.bind(); }, /invalid root request/],
  ['wrong reviewer', f => { f.request.reviewer = '/root/worker'; f.bind(); }, /invalid root request/],
  ['wrong subjects', f => { f.request.subjects = [f.ids[1]]; f.bind(); }, /subjects must equal/],
  ['duplicate subjects', f => { f.request.subjects.push(f.ids[0]); f.bind(); }, /subjects must equal/],
  ['wrong phase', f => { f.request.phase = 'impact-repeat'; f.bind(); }, /another phase or round/],
  ['gate phase', f => { f.request.phase = 'gate'; f.bind(); }, /invalid root request/],
  ['wrong round', f => { f.request.round = 2; f.bind(); }, /another phase or round/],
  ['wrong snapshot', f => { f.request.snapshotSha256 = 'a'.repeat(64); f.bind(); }, /wrong gate scope/],
  ['wrong attempt', f => { f.request.attempt = 'old'; f.bind(); }, /gate attempt/],
  ['consumed gate', f => { f.gate.consumedAt = 'now'; f.save(join(f.stateDir, 'owner-gate-request.json'), f.gate); }, /gate attempt/],
  ['archived gate', f => { mkdirSync(join(f.stateDir, 'owner-gate-history')); f.save(join(f.stateDir, 'owner-gate-history', f.gate.attempt + '.json'), {}); }, /gate attempt/],
  ['already certified', f => f.save(join(f.dir, `certification-${f.phase}-1.json`), {}), /already certified/],
  ['completed stage', f => { f.state.stages['5.2-impact'].doneAt = 'now'; f.save(join(f.stateDir, 'state.json'), f.state); }, /current native stage/],
  ['active writer', f => { f.state.dispatches.active = { startedAt: 'now' }; f.save(join(f.stateDir, 'state.json'), f.state); }, /active or unresolved/],
  ['metadata writer', f => mkdirSync(join(f.root, '.physics-autopilot', 'step5-shared-write.lock')), /metadata writer/],
  ['changed item hash', f => writeFileSync(join(f.root, 'items', `${f.ids[0]}.md`), readFileSync(join(f.root, 'items', `${f.ids[0]}.md`), 'utf8') + 'changed'), /stale gate input/],
  ['outside frozen frontier', f => f.save(join(f.dir, 'frontier.json'), freezeFrontier({ run: f.run, batches: [{ id: '1', items: f.ids.slice(1) }] })), /outside frozen frontier/],
  ['incomplete selection', f => { f.precheck.results.pop(); f.save(f.precheckPath, f.precheck); f.request.precheck.sha256 = digest(readFileSync(f.precheckPath, 'utf8')); f.bind(); }, /incomplete/],
  ['empty passing selection', f => { f.precheck.summary.failed = 0; f.save(f.precheckPath, f.precheck); f.request.precheck.sha256 = digest(readFileSync(f.precheckPath, 'utf8')); f.bind(); }, /passing precheck/],
  ['symlink escape', f => { rmSync(f.precheckPath); symlinkSync(join(f.root, 'items', `${f.ids[0]}.md`), f.precheckPath); f.request.precheck.sha256 = digest(readFileSync(f.precheckPath, 'utf8')); f.bind(); }, /escapes run/],
]) test(`reopening refuses ${name} without changing progress or native evidence`, t => {
  const f = fixture(t); change(f);
  const before = readFileSync(f.progressPath, 'utf8');
  assert.throws(f.advance, error); assert.equal(readFileSync(f.progressPath, 'utf8'), before);
  assert.equal(existsSync(packPath(f.root, f.run, `${f.phase}-pass-2`, 1)), false);
});

test('new native reports cannot create items, narrow interfaces, forge diagnostics or use a historical worker model', t => {
  const f = fixture(t), { pack } = f.advance();
  const itemPath = join(f.root, 'items', `${f.ids[0]}.md`), original = readFileSync(itemPath, 'utf8');
  writeFileSync(itemPath, original.replace('A sound claim.', 'A weaker claim.')); f.reports(pack);
  assert.throws(f.advance, /changed public interface/);
  writeFileSync(itemPath, original.replace('2.1 The conclusion.', '1.2 The conclusion.'));
  f.reports(pack, MODELS.sol.id, 'xhigh'); assert.throws(f.advance, /authorized identity/);
  f.reports(pack);
  const diagnostics = workerReport(f.root, f.run, pack.phase, 1, '1').replace(/\.json$/, '.format-diagnostics.json');
  const originalDiagnostics = readFileSync(diagnostics, 'utf8'); writeFileSync(diagnostics, '[]');
  assert.throws(f.advance, /format diagnostic input changed/);
  writeFileSync(diagnostics, originalDiagnostics);
  const reportPath = workerReport(f.root, f.run, pack.phase, 1, '1'), report = JSON.parse(readFileSync(reportPath, 'utf8'));
  report.created_items = [{ id: 'lem-new' }]; f.save(reportPath, report);
  assert.throws(f.advance, /cannot author/);
  f.reports(pack); assert.equal(f.advance().complete, true);
});

test('request and support evidence remain bound after consumption', t => {
  const f = fixture(t); f.advance(); writeFileSync(f.proposalPath, 'tampered'); assert.throws(f.advance, /evidence changed/);
});

test('interruption after pack/task writes resumes the same request and pass', t => {
  const f = fixture(t), originalProgress = readFileSync(f.progressPath, 'utf8');
  const first = f.advance();
  writeFileSync(f.progressPath, originalProgress);
  const resumed = f.advance();
  assert.deepEqual(resumed.pack, first.pack);
  assert.deepEqual(resumed.passes, [f.phase, `${f.phase}-pass-2`]);
  assert.equal(JSON.parse(readFileSync(f.progressPath, 'utf8')).format_repairs.length, 1);
});

test('stale required native review receives a fresh continuation with the same mechanical limits', t => {
  const f = fixture(t), first = f.advance();
  const itemPath = join(f.root, 'items', `${f.ids[0]}.md`);
  writeFileSync(itemPath, readFileSync(itemPath, 'utf8').replace('2.1 The conclusion.', '1.2 The conclusion.'));
  f.reports(first.pack);
  const reportPath = workerReport(f.root, f.run, first.pack.phase, 1, '1'), report = JSON.parse(readFileSync(reportPath, 'utf8'));
  report.reviews[0].review_context_sha256 = 'a'.repeat(64); f.save(reportPath, report);
  const next = f.advance();
  assert.equal(next.complete, false); assert.equal(next.pack.phase, `${f.phase}-pass-3`);
  assert.deepEqual(Object.values(next.pack.assignments).flat(), [f.ids[0]]);
  assert.deepEqual(next.pack.format_repair, first.pack.format_repair);
  assert.deepEqual(next.pack.input_evidence, first.pack.input_evidence);
  f.reports(next.pack); assert.equal(f.advance().complete, true);
});

test('closure pointer bytes and original closure stay protected', t => {
  const f = fixture(t), first = f.advance(); f.reports(first.pack); assert.equal(f.advance().complete, true);
  const newest = impactClosedPath(f.root, f.run, f.phase, 1);
  writeFileSync(newest, '{}'); assert.throws(f.advance, /owner closure receipt changed/);
});
