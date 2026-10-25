import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync, symlinkSync } from 'node:fs';
import { join, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { verifyInitialMetadataRequest, initialMetadataTransition, metadataScalarDifferences } from './step5-initial-metadata-transition.mjs';
import { certify, digest, reviewContextHashes, verifyCertification } from './step5-workflow.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { MODELS } from './models.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step5-initial-metadata-')), run = 'demo';
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, 'research', run + '-step5-v2'), stateDir = join(root, '.physics-autopilot', run);
  const save = (path, value) => { mkdirSync(join(path, '..'), { recursive: true }); writeFileSync(path, JSON.stringify(value, null, 2) + '\n'); };
  const fileHash = path => digest(readFileSync(path, 'utf8'));
  const ref = path => ({ path: relative(root, path), sha256: fileHash(path) });
  const ids = ['def-contract', 'def-mirror'];
  const item = (id, title) => `---\nid: ${id}\nkind: definition\nstatus: draft\ndeps: ${id === 'def-contract' ? '[def-mirror]' : '[]'}\nsources:\n  references:\n    - title: ${title}\n      url: https://example.org/source\n---\n## Definition\nAn explicitly supplied finite datum.\n`
    + (id === 'def-contract' ? '\n## Facts & Assumptions\n[F1] The supplied finite datum. [[def-mirror]]\n\n## Proof\n1. Retention.\n1.1 The supplied datum is retained. [F1]\n' : '');
  const before = {};
  for (const id of ids) {
    const path = join(root, 'items', id + '.md'); mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, item(id, 'Original attribution')); before[id] = itemHashGuard(readFileSync(path, 'utf8'));
  }
  writeFileSync(join(root, 'items', 'def-mirror.md'), item('def-mirror', 'Corrected attribution'));
  const contractPath = join(root, 'research', run + '-batch-1.proof-contracts.json');
  const boundaries = ['empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice', 'iff-forward', 'iff-reverse']
    .map(name => ({ case: name, status: 'not_applicable', reason: 'This definition declares its finite datum directly.' }));
  const contract = { version: 1, scope: [ids[0]], contracts: { [ids[0]]: {
    citations: [{ fact: 'F1', source: 'def-mirror', source_section: 'Definition', quote: 'An explicitly supplied finite datum.', uses: ['1.1'] }],
    derivations: [{ id: 'retention', step: '1.1', claim: 'The supplied datum is retained.', inputs: ['F1'] }], routine_steps: [], boundaries,
  } } };
  const beforeContract = join(root, 'research', run + '-archive', 'contract.before.json'); save(beforeContract, contract);
  contract.contracts[ids[0]].owner_repair = { dispatch: 'step5-v2-impact-initial-r1-u1', kind: 'scoped-current-interface-review', independent_acceptance: false, evidence: 'The current native owner checked this exact finite datum.' };
  save(contractPath, contract);
  const manifestPath = join(root, 'research', run + '-batch-1.pages.json');
  const pages = [{ id: 'page-one', category: 'test', items: ids.map(id => ({ id, sources: { references: [{ title: 'Original attribution', url: 'https://example.org/source' }] } })) }];
  const beforeManifest = join(root, 'research', run + '-archive', 'manifest.before.json'); save(beforeManifest, pages);
  pages[0].items[1].sources.references[0].title = 'Corrected attribution'; save(manifestPath, pages);
  const staticPath = join(dir, 'original-report.json'); save(staticPath, { authentic: 'unchanged binary-independent report' });
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '1', items: ids }] }));
  save(join(dir, 'baseline.json'), before); save(join(dir, 'step4-verdicts.json'), []);
  const packPath = join(dir, 'impact-initial-1.json');
  const pack = { version: 2, run, phase: 'impact-initial', round: 1, units: ['1'], assignments: { '1': ids }, before, seeds: [] }; save(packPath, pack);
  const label = 'step5-v2-impact-initial-r1-u1', reportPath = join(dir, label + '.json'), taskPath = join(dir, label + '.task.md'); writeFileSync(taskPath, 'Read assigned native pack ' + packPath);
  const current = reviewContextHashes(root, ids);
  const reviews = ids.map(id => ({ id, ...current[id], disposition: id === 'def-mirror' ? 'repaired' : 'unaffected', familiar: true, uncertain: false, source_urls: [], reason: 'Examined the current finite datum and its exact current source metadata; the conditional mathematical meaning is unchanged.' }));
  const report = { run, phase: 'impact-initial', round: 1, unit: '1', input_sha256: digest(pack), reviews,
    repair_notes: { checks: [{ command: `node tools/physics-support/proof-contract.mjs research/${run}-batch-1.proof-contracts.json --strict --items def-contract --json`, exit_code: 0, errors: [] }] } }; save(reportPath, report);
  const dispatchPath = join(root, 'research', run + '-dispatch', 'alpha-repair-' + label + '.result.json');
  const worker = { ok: true, run, role: 'alpha-repair', label, model: MODELS.sol61.id, provider_effort: 'high', covers: ['1'], ended_at: new Date(Date.now() - 10000).toISOString() }; save(dispatchPath, worker);
  const sourcePath = join(dir, 'initial-1-collected.json');
  const source = { version: 2, run, phase: 'initial', round: 1, errors: [], reviews: [], created_items: [], evidence: {
    [relative(root, contractPath)]: fileHash(beforeContract), [relative(root, manifestPath)]: fileHash(beforeManifest), [manifestPath]: fileHash(beforeManifest), [staticPath]: fileHash(staticPath),
  } }; save(sourcePath, source);
  const closedPath = join(dir, 'impact-initial-1-closed.json');
  const closed = { version: 2, run, phase: 'impact-initial', round: 1, errors: [], reviews, created_items: [], changed: ['def-mirror'], restated: [], downstream: [],
    post: Object.fromEntries(ids.map(id => [id, current[id].post_sha256])), evidence: {} };
  const progressPath = join(dir, 'impact-initial-1-progress.json');
  const progress = { version: 2, run, phase: 'impact-initial', round: 1, passes: ['impact-initial'], activePhase: 'impact-initial', complete: true };
  const time = offset => new Date(Date.now() + offset).toISOString();
  const state = { run, stage: '5.3-certify', stages: { '5.2-impact': { enteredAt: time(-100000), gatesPassedAt: time(-10000) } }, dispatches: {} }; save(join(stateDir, 'state.json'), state);
  const body = { run, repo: root, stages: ['5.2-impact'], scopeKind: 'items', recertificationScope: 'formatting-metadata-only',
    battery: ['physics-content', 'frontier-dependency-ledger', 'step5-wave-evidence', 'statement-first', 'page-layout'].map(id => ({ id })),
    items: ids.map(id => ({ id, carrierSha256: fileHash(join(root, 'items', id + '.md')), manifestSha256: fileHash(manifestPath) })),
    inputs: [{ path: manifestPath, sha256: fileHash(manifestPath) }] };
  const gate = { request: { version: 2, attempt: 'consumed-native', createdAt: time(-90000), consumedAt: time(-20000), snapshot: { ...body, sha256: digest(body) } },
    receipt: { version: 2, attempt: 'consumed-native', snapshotSha256: digest(body), reviewer: '/root', recertificationScope: 'formatting-metadata-only', writersDrained: true, writerScopes: [], reviewStartedAt: time(-80000), reviewedAt: time(-30000),
      items: body.items.map(row => ({ ...row, verdict: 'format-metadata-pass', formatting: { verdict: 'pass', evidence: 'Checked current format.' }, metadata: { verdict: 'pass', evidence: 'Checked current owning metadata.' } })) } };
  const gatePath = join(stateDir, 'owner-gate-history', 'consumed-native.json'); save(gatePath, gate);
  const native = { pack: ref(packPath), report: ref(reportPath), task: ref(taskPath), dispatch: ref(dispatchPath) };
  const requestPath = join(dir, 'owner-initial-metadata-fixture.json');
  const request = { version: 1, run, reviewer: '/root', phase: 'impact-initial', round: 1, artifacts: [
    { kind: 'owning-proof-contract', path: relative(root, contractPath), batch: '1', before: ref(beforeContract), after_sha256: fileHash(contractPath),
      changes: metadataScalarDifferences(JSON.parse(readFileSync(beforeContract, 'utf8')), contract).map(json_pointer => ({ json_pointer, subject: 'def-contract', native })) },
    { kind: 'owning-page-manifest', path: relative(root, manifestPath), batch: '1', before: ref(beforeManifest), after_sha256: fileHash(manifestPath), changes: [{ json_pointer: '/0/items/1/sources/references/0/title', subject: 'def-mirror', native }] },
  ] };
  const pointerPath = join(dir, 'owner-initial-metadata-request.json');
  const rebind = () => {
    save(reportPath, report); save(dispatchPath, worker);
    closed.evidence = Object.fromEntries([packPath, reportPath, dispatchPath].map(path => [path, fileHash(path)])); save(closedPath, closed);
    progress.closed_receipt = { path: closedPath, sha256: fileHash(closedPath) }; save(progressPath, progress);
    for (const artifact of request.artifacts) for (const change of artifact.changes) Object.assign(change.native, { pack: ref(packPath), report: ref(reportPath), task: ref(taskPath), dispatch: ref(dispatchPath) });
    Object.assign(request, { source_collection: ref(sourcePath), impact_closed: ref(closedPath), impact_progress: ref(progressPath), predecessor_gate: ref(gatePath) });
    save(requestPath, request); save(pointerPath, { version: 1, run, request: ref(requestPath) });
  }; rebind();
  return { root, run, dir, ids, stateDir, source, sourcePath, closed, closedPath, progress, progressPath, request, requestPath, pointerPath, contract, contractPath, manifestPath, beforeContract, beforeManifest, staticPath, pack, packPath, report, reportPath, worker, dispatchPath, gate, gatePath, save, ref, fileHash, rebind,
    verify: () => verifyInitialMetadataRequest(root, run, source, closed, ref(requestPath), { reviewContexts: reviewContextHashes }),
    certify: () => certify(root, run, 'impact-initial', 1, { contextHasher: (root, ids) => new Map(ids.map(id => [id, { item_sha256: itemHashJudge(readFileSync(join(root, 'items', id + '.md'), 'utf8')), context_sha256: 'a'.repeat(64) }])) }) };
}

test('initial certificate alone carries authentic native metadata evolution, preserving historical bytes and aliases', t => {
  const f = fixture(t), preserved = [f.sourcePath, f.closedPath, f.reportPath, f.beforeContract, f.beforeManifest].map(path => [path, readFileSync(path, 'utf8')]);
  const binding = f.verify();
  assert.equal(binding.transitions.length, 2);
  assert.equal(binding.evidence[f.contractPath], f.fileHash(f.contractPath));
  assert.equal(binding.evidence[f.manifestPath], f.fileHash(f.manifestPath));
  assert.deepEqual(binding.transitions.map(row => row.json_pointers.length), [4, 1]);
  const certificate = f.certify();
  assert.equal(certificate.evidence_transitions.length, 2);
  assert.equal(certificate.evidence[f.sourcePath], f.fileHash(f.sourcePath));
  assert.equal(verifyCertification(f.root, f.run).sha256, certificate.sha256);
  for (const [path, bytes] of preserved) assert.equal(readFileSync(path, 'utf8'), bytes);
});

test('without a Root advertisement ordinary source evidence remains strict', t => {
  const f = fixture(t); rmSync(f.pointerPath);
  assert.throws(f.certify, /Step 5 evidence changed/);
  assert.deepEqual(initialMetadataTransition(f.root, f.run, 'impact-repeat', 1, f.source, f.closed).transitions, []);
});

for (const [name, change, pattern] of [
  ['missing preimage', f => rmSync(f.beforeContract), /reference escapes/],
  ['wrong preimage', f => { f.request.artifacts[0].before = f.ref(f.beforeManifest); f.rebind(); }, /preimage differs/],
  ['stale after hash', f => { f.request.artifacts[0].after_sha256 = 'a'.repeat(64); f.rebind(); }, /stale current metadata/],
  ['undeclared scalar', f => { f.request.artifacts[0].changes.pop(); f.rebind(); }, /undeclared metadata/],
  ['duplicate scalar', f => { f.request.artifacts[0].changes.push(f.request.artifacts[0].changes[0]); f.rebind(); }, /undeclared metadata/],
  ['unsupported artifact', f => { f.request.artifacts[0].kind = 'source'; f.rebind(); }, /unsupported metadata artifact/],
  ['noncanonical path', f => { f.request.artifacts[0].path = 'research/demo-plan-spec.json'; f.rebind(); }, /noncanonical/],
  ['unowned subject', f => { f.request.artifacts[0].changes[0].subject = 'def-outsider'; f.rebind(); }, /unknown review item|frozen owning/],
  ['unassigned owner', f => { f.pack.assignments['1'] = ['def-mirror']; f.save(f.packPath, f.pack); f.report.input_sha256 = digest(f.pack); f.rebind(); }, /native owning assignment/],
  ['failed native validator', f => { f.report.repair_notes.checks[0].exit_code = 1; f.rebind(); }, /missing successful exact/],
  ['wrong native validator token', f => { f.report.repair_notes.checks[0].command = f.report.repair_notes.checks[0].command.replace('.proof-contracts.json', '.proof-contracts.json.backup'); f.rebind(); }, /missing successful exact/],
  ['failed native dispatch', f => { f.worker.ok = false; f.rebind(); }, /native Sol high dispatch/],
  ['wrong native model', f => { f.worker.model = 'gpt-6-luna'; f.rebind(); }, /native Sol high dispatch/],
  ['stale native review context', f => { f.report.reviews[0].review_context_sha256 = 'b'.repeat(64); f.rebind(); }, /native current review/],
  ['stale native carrier guard', f => { f.report.reviews[0].post_sha256 = 'b'.repeat(64); f.rebind(); }, /native current review/],
  ['active writer', f => { const state = JSON.parse(readFileSync(join(f.stateDir, 'state.json'), 'utf8')); state.dispatches.writer = { role: 'alpha-repair', startedAt: new Date().toISOString() }; f.save(join(f.stateDir, 'state.json'), state); }, /writer remains/],
  ['wrong stage', f => { const state = JSON.parse(readFileSync(join(f.stateDir, 'state.json'), 'utf8')); state.stage = '5.2-impact'; f.save(join(f.stateDir, 'state.json'), state); }, /wrong stage/],
  ['incomplete wave', f => { f.progress.complete = false; f.save(f.progressPath, f.progress); f.rebind(); }, /impact closure/],
  ['failed closed wave', f => { f.closed.errors = ['unresolved']; f.rebind(); }, /completed wave/],
  ['non-Root gate', f => { f.gate.receipt.reviewer = '/root/worker'; f.save(f.gatePath, f.gate); f.rebind(); }, /predecessor gate/],
  ['incomplete Root scope', f => { f.gate.receipt.items.pop(); f.save(f.gatePath, f.gate); f.rebind(); }, /Root metadata scope/],
  ['unconsumed gate', f => { delete f.gate.request.consumedAt; f.save(f.gatePath, f.gate); f.rebind(); }, /another wave/],
  ['unlicensed stale report', f => f.save(f.staticPath, { forged: true }), /unlicensed historical evidence/],
  ['conflicting absolute alias', f => { f.source.evidence[f.manifestPath] = 'd'.repeat(64); f.save(f.sourcePath, f.source); f.rebind(); }, /conflicting evidence aliases/],
]) test('initial metadata transition rejects ' + name, t => {
  const f = fixture(t); change(f); assert.throws(f.verify, pattern);
  assert.equal(existsSync(join(f.dir, 'certification-impact-initial-1.json')), false);
});

test('genuine current strict validator rejects a newly invalid owning contract', t => {
  const f = fixture(t); f.contract.contracts['def-contract'].citations[0].quote = 'Invented quotation absent from the supplier'; f.save(f.contractPath, f.contract);
  f.request.artifacts[0].after_sha256 = f.fileHash(f.contractPath);
  f.request.artifacts[0].changes.push({ json_pointer: '/contracts/def-contract/citations/0/quote', subject: 'def-contract', native: f.request.artifacts[0].changes[0].native }); f.rebind();
  assert.throws(f.verify, /current strict contract validation failed/);
});

test('source title mirror must equal the actual current source fields', t => {
  const f = fixture(t), manifest = JSON.parse(readFileSync(f.manifestPath, 'utf8'));
  manifest[0].items[1].sources.references[0].title = 'Invented attribution'; f.save(f.manifestPath, manifest);
  f.request.artifacts[1].after_sha256 = f.fileHash(f.manifestPath);
  f.gate.request.snapshot.inputs[0].sha256 = f.fileHash(f.manifestPath);
  const { sha256, ...body } = f.gate.request.snapshot; f.gate.request.snapshot.sha256 = digest(body); f.gate.receipt.snapshotSha256 = digest(body); f.save(f.gatePath, f.gate); f.rebind();
  assert.throws(f.verify, /source attribution mirror differs/);
});

test('canonical metadata symlinks are rejected', t => {
  const f = fixture(t), real = f.contractPath + '.real'; writeFileSync(real, readFileSync(f.contractPath)); rmSync(f.contractPath); symlinkSync(real, f.contractPath);
  assert.throws(f.verify, /stale current metadata/);
});
