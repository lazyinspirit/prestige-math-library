import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { ownerFindingRequest, ownerFindingCompletion } from './step5-owner-finding-queue.mjs';
import { advanceAdjudicationCorrection, adjudicationCorrectionWork, reviewContextHashes,
  workerLabel, workerReport, workflowDir } from './step5-workflow.mjs';
import { freezeFrontier, readLibraryItems } from './step5-rounds.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { statementHash } from './step5-statement.mjs';
import { MODELS } from './models.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const digest = value => hash(JSON.stringify(value));
const explanation = { reason: 'Checked this distinct defect and its exact current supplier uses after the authorized minimal repair.',
  uncertain: false, source_urls: [], familiar: true };

function fixture(t, phase = 'initial') {
  const root = mkdtempSync(join(process.env.OWNER_QUEUE_HISTORY_TEST_ROOT ?? tmpdir(), 'step5-owner-findings-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const run = 'demo', round = 1, dir = workflowDir(root, run);
  const stateDir = join(root, '.physics-autopilot', run), evidenceDir = join(root, 'research', run + '-science');
  for (const path of [dir, stateDir, evidenceDir, join(root, 'items'), join(root, 'research', run + '-dispatch')])
    mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const ref = path => ({ path: relative(root, path), sha256: hash(readFileSync(path)) });
  const ids = ['thm-assigned', 'thm-referred', 'thm-unrelated'];
  for (const id of ids) writeFileSync(join(root, 'items', id + '.md'),
    `---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nA sound claim.\n\n## Proof\n1.1 A complete argument. [given] ∎\n`);
  const guards = () => Object.fromEntries(ids.map(id => [id, itemHashGuard(readFileSync(join(root, 'items', id + '.md'), 'utf8'))]));
  const statements = () => Object.fromEntries(ids.map(id => [id, statementHash(readFileSync(join(root, 'items', id + '.md'), 'utf8'))]));
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '19', items: ids }] }));
  save(join(dir, 'baseline.json'), guards());
  const tuple = { id: ids[0], model: MODELS.sol61.id, context_sha256: 'a'.repeat(64), item_sha256: 'b'.repeat(64), keep: false };
  save(join(dir, 'step4-verdicts.json'), [tuple]);
  const originalPack = { version: 2, run, phase, round, repair_scope: 'frontier', frontier_ids: ids,
    units: ['19'], assignments: { '19': [tuple] }, rejected: [tuple], before: guards(), before_statements: statements(), judge_model: MODELS.sol61.id };
  const packPath = join(dir, phase + '-1.json'); save(packPath, originalPack);
  const label = workerLabel(phase, round, '19'), originalPath = workerReport(root, run, phase, round, '19');
  writeFileSync(originalPath.replace(/\.json$/, '.task.md'), 'Frozen inputs: ' + packPath + '\n');
  const originalDecision = { id: tuple.id, model: tuple.model, context_sha256: tuple.context_sha256,
    outcome: 'false_positive', ...explanation };
  save(originalPath, { run, phase, round, unit: '19', input_sha256: digest(originalPack),
    decisions: [originalDecision], reviews: [{ id: ids[0], disposition: 'unaffected', ...reviewContextHashes(root, [ids[0]])[ids[0]], ...explanation }],
    downstream: [ids[1]], created_items: [] });
  save(join(root, 'research', run + '-dispatch', 'alpha-adjudicate-' + label + '.result.json'),
    { ok: true, run, role: 'alpha-adjudicate', label, model: MODELS.sol61.id, provider_effort: 'high', covers: ['19'], ended_at: '2026-10-17T00:00:00Z' });
  const records = [], entries = [];
  for (const [index, id] of ids.slice(0, 2).entries()) {
    const record = { run, subject: id, defect_id: 'owner-defect-' + index, disposition: 'open', caught_by_role: 'owner', severity: 'fatal' };
    const recordPath = join(evidenceDir, id + '-finding.json'), before = join(evidenceDir, id + '-before.md');
    const science = join(evidenceDir, id + '-science.json'), proposal = join(evidenceDir, id + '-proposal.json');
    save(recordPath, record); records.push(record);
    writeFileSync(before, readFileSync(join(root, 'items', id + '.md')));
    save(science, { finding: 'Distinct defect confirmed by its original scientific owner.' });
    save(proposal, { proposal: 'Unapplied minimal source repair.' });
    entries.push({ subject: id, owner_lane: String(index + 1), mode: 'native-referral',
      root_finding: { defect_id: record.defect_id, record: ref(recordPath) },
      before_source: ref(before), before_content_sha256: guards()[id], before_statement_sha256: statements()[id],
      science: [ref(science)], proposals: [ref(proposal)], native_outcome: ref(originalPath),
      ...(index === 0 ? { original_tuple: tuple } : {}) });
  }
  writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), records.map(row => JSON.stringify(row)).join('\n') + '\n');
  const requestPath = join(dir, 'owner-finding-queue-current.json');
  const request = { version: 1, run, phase, round, reviewer: '/root', entries };
  const bind = () => { save(requestPath, request); save(join(dir, 'owner-finding-queue-request.json'), { version: 1, run, request: ref(requestPath) }); };
  bind();
  const stage = phase === 'initial' ? '5.1-adjudicate' : '5.5-adjudicate';
  const state = { run, stage, stages: { [stage]: {} }, dispatches: { original: { startedAt: 'earlier', endedAt: 'now' } } };
  const saveState = () => save(join(stateDir, 'state.json'), state); saveState();
  const intake = options => ownerFindingRequest(root, run, phase, round, {
    items: readLibraryItems(root), current: guards(), statements: statements(), dir, ...options });
  return { root, run, phase, round, dir, ids, guards, statements, save, ref, request, bind, state, saveState,
    originalPath, originalPack, originalDecision, intake };
}

for (const phase of ['initial', 'repeat']) test(`${phase}: native three-lane queue repairs assigned and referred findings without rewriting history`, t => {
  const f = fixture(t, phase), originalBytes = readFileSync(f.originalPath);
  const context = f.intake();
  assert.deepEqual(context.subjects, f.ids.slice(0, 2));
  const progress = advanceAdjudicationCorrection(f.root, f.run, phase, 1);
  const correction = 'owner-finding-correction-' + phase;
  assert.deepEqual(adjudicationCorrectionWork(f.root, f.run, phase, 1), ['1', '2', '3'].map(lane => correction + ':' + lane));
  assert.deepEqual(progress.assignments, { '1': [f.ids[0]], '2': [f.ids[1]], '3': [] });
  const pack = JSON.parse(readFileSync(join(f.dir, correction + '-1.json'), 'utf8'));
  for (const id of f.ids.slice(0, 2)) {
    const path = join(f.root, 'items', id + '.md');
    writeFileSync(path, readFileSync(path, 'utf8').replace('A complete argument.', 'A complete argument with its missing convention explicit.'));
  }
  const reports = ['1', '2', '3'].map(lane => {
    const entries = f.request.entries.filter(row => row.owner_lane === lane), label = workerLabel(correction, 1, lane);
    const report = { run: f.run, phase: correction, round: 1, unit: lane, input_sha256: digest(pack), decisions: [], created_items: [], downstream: [],
      reviews: entries.map(entry => ({ id: entry.subject, disposition: 'repaired', ...reviewContextHashes(f.root, [entry.subject])[entry.subject], ...explanation })),
      root_finding_resolutions: entries.map(entry => ({ defect_id: entry.root_finding.defect_id, status: 'fixed', subjects: [entry.subject], ...explanation })),
      scientific_correction_adjudications: entries.filter(entry => entry.original_tuple).map(() => f.originalDecision) };
    f.save(workerReport(f.root, f.run, correction, 1, lane), report);
    f.save(join(f.root, 'research', f.run + '-dispatch', 'alpha-repair-' + label + '.result.json'),
      { ok: true, run: f.run, role: 'alpha-repair', label, model: MODELS.sol61.id, provider_effort: 'high', covers: [correction + ':' + lane], ended_at: '2026-10-17T00:01:00Z' });
    return report;
  });
  const completion = ownerFindingCompletion(pack, reports, f.guards(), id => reviewContextHashes(f.root, [id])[id]);
  assert.equal(completion.decisions[0].outcome, 'false_positive');
  const unrelated = join(f.root, 'items', f.ids[2] + '.md'), unrelatedBytes = readFileSync(unrelated);
  writeFileSync(unrelated, Buffer.concat([unrelatedBytes, Buffer.from('\nUnlicensed extra repair.\n')]));
  assert.throws(() => ownerFindingCompletion(pack, reports, f.guards(), id => reviewContextHashes(f.root, [id])[id]), /changed-source set/);
  writeFileSync(unrelated, unrelatedBytes);
  assert.equal(f.intake({ allowCompletedContinuation: true, currentReviewCallback: id => reviewContextHashes(f.root, [id])[id] }).continuation, true);
  assert.equal(advanceAdjudicationCorrection(f.root, f.run, phase, 1).parent_collected, true);
  const collected = JSON.parse(readFileSync(join(f.dir, phase + '-1-collected.json'), 'utf8'));
  assert.equal(collected.decisions[0].outcome, 'false_positive');
  assert.deepEqual(collected.changed.sort(), f.ids.slice(0, 2).sort());
  assert.deepEqual(readFileSync(f.originalPath), originalBytes);
  assert.deepEqual(JSON.parse(readFileSync(join(f.dir, phase + '-1.json'), 'utf8')), f.originalPack);
  assert.equal(advanceAdjudicationCorrection(f.root, f.run, phase, 1).parent_collected, true);
  // A distinct repair may never reinterpret a correctly rejected original objection.
  const changed = structuredClone(reports); changed[0].scientific_correction_adjudications[0].outcome = 'confirmed_nonfatal';
  assert.throws(() => ownerFindingCompletion(pack, changed, f.guards(), id => reviewContextHashes(f.root, [id])[id]), /preserved false-positive/);
});

for (const phase of ['initial', 'repeat']) test(`${phase}: original scientific owner discovery needs no fabricated native edge or tuple`, t => {
  const f = fixture(t, phase), entry = f.request.entries[1];
  const native = JSON.parse(readFileSync(f.originalPath, 'utf8')); native.downstream = [];
  f.save(f.originalPath, native);
  for (const row of f.request.entries) row.native_outcome = f.ref(f.originalPath);
  entry.mode = 'owner-discovery'; entry.scientific_owner = '/root/gaussian_scientific_owner';
  const discoveryPath = join(f.root, entry.science[0].path);
  f.save(discoveryPath, { run: f.run, scientific_owner: entry.scientific_owner,
    finding: 'Confirmed undeclared constant in this exact current unassigned supplier.',
    current_content_sha256: f.guards()[entry.subject] });
  entry.science[0] = f.ref(discoveryPath); entry.discovery = entry.science[0]; f.bind();
  assert.deepEqual(f.intake().subjects, f.ids.slice(0, 2));
  assert.deepEqual(advanceAdjudicationCorrection(f.root, f.run, phase, 1).assignments,
    { '1': [f.ids[0]], '2': [f.ids[1]], '3': [] });
  delete entry.scientific_owner; f.bind();
  assert.throws(() => f.intake(), /original scientific owner/);
});

for (const phase of ['initial', 'repeat']) for (const [name, mutate, expected] of [
  ['wrong stage', f => { f.state.stage = f.phase === 'initial' ? '5.5-adjudicate' : '5.1-adjudicate'; f.saveState(); }, /outside its live/],
  ['active native writer', f => { f.state.dispatches.active = { startedAt: 'now' }; f.saveState(); }, /writers have not drained/],
  ['shared metadata writer', f => mkdirSync(join(f.root, '.physics-autopilot', 'step5-shared-write.lock')), /metadata writer active/],
  ['fabricated original tuple', f => { f.request.entries[0].original_tuple.context_sha256 = 'c'.repeat(64); f.bind(); }, /actual frozen rejected assignment/],
  ['current source drift', f => { const path = join(f.root, 'items', f.ids[0] + '.md'); writeFileSync(path, readFileSync(path, 'utf8') + '\nUnlicensed change.\n'); }, /exact current before bytes/],
  ['completed stage', f => { f.state.stages[f.state.stage].doneAt = 'now'; f.saveState(); }, /outside its live/],
  ['immutable parent collection', f => f.save(join(f.dir, f.phase + '-1-collected.json'), {}), /already immutable/],
  ['impact certificate', f => f.save(join(f.dir, 'certification-impact-' + f.phase + '-1.json'), {}), /already immutable/],
  ['latest impact certificate', f => f.save(join(f.dir, 'certification.json'), { phase: 'impact-' + f.phase, round: 1 }), /already certified/],
]) test(`${phase}: queue refuses ${name}`, t => {
  const f = fixture(t, phase); mutate(f);
  assert.throws(() => f.intake(), expected);
  assert.throws(() => advanceAdjudicationCorrection(f.root, f.run, phase, 1), expected);
});
