import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { certify, digest, impactProgressPath, reviewContextHashes, verifyCertification, workflowDir } from './step5-workflow.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';
const reason = 'Examined the current item and repaired its owning contract metadata without changing its proof or public interface.';
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step5-certification-transition-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const run = 'demo', dir = workflowDir(root, run), stateDir = join(root, '.physics-autopilot', run), ids = ['thm-one', 'thm-two'];
  for (const path of [dir, stateDir, join(stateDir, 'owner-gate-history'), join(root, 'items'), join(root, 'research', `${run}-dispatch`)]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const refs = paths => Object.fromEntries(paths.map(path => [path, digest(readFileSync(path, 'utf8'))]));
  const before = {};
  for (const id of ids) {
    const text = `---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nA sound claim.\n\n## Proof\nA sound unchanged proof.\n`;
    writeFileSync(join(root, 'items', `${id}.md`), text); before[id] = itemHashGuard(text);
  }
  save(join(root, 'research', `${run}-batch-1.pages.json`), [{ id: 'page-one', category: 'test', items: ids.map(id => ({ id, deps: [] })) }]);
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '1', items: ids }] }));
  save(join(dir, 'baseline.json'), before); save(join(dir, 'step4-verdicts.json'), []);
  const contractPath = join(root, 'research', `${run}-batch-1.proof-contracts.json`), staticPath = join(dir, 'historical-report.json');
  save(contractPath, { contracts: { 'thm-one': { metadata: 'before' }, 'thm-two': { metadata: 'preserved' } } });
  save(staticPath, { historical: 'immutable native report' });
  const contextHasher = (root, ids) => new Map(ids.map(id => [id, { item_sha256: itemHashJudge(readFileSync(join(root, 'items', `${id}.md`), 'utf8')), context_sha256: 'a'.repeat(64) }]));
  const prior = { version: 2, run, phase: 'impact-initial', round: 1, items: ids.map(id => ({ id, ...contextHasher(root, [id]).get(id), guard_sha256: before[id], reason })), creations: [], evidence: refs([contractPath, staticPath]), changed: [] };
  prior.sha256 = digest(prior);
  const priorPath = join(dir, 'certification-impact-initial-1.json'); save(priorPath, prior); save(join(dir, 'certification.json'), prior);
  save(contractPath, { contracts: { 'thm-one': { metadata: 'native repair' }, 'thm-two': { metadata: 'preserved' } } });
  const packPath = join(dir, 'repeat-1.json'), reportPath = join(dir, 'step5-v2-repeat-r1-u1.json');
  const pack = { version: 2, run, phase: 'repeat', round: 1, assignments: { '1': [{ id: ids[0] }] }, before };
  save(packPath, pack);
  const review = { id: ids[0], ...reviewContextHashes(root, [ids[0]])[ids[0]], disposition: 'unaffected', metadata_repair_only: true, reason, uncertain: false, familiar: true, source_urls: [] };
  const report = { run, phase: 'repeat', round: 1, unit: '1', input_sha256: digest(pack), reviews: [review], contract_repairs: [{ id: ids[0], path: contractPath }] };
  save(reportPath, report);
  const dispatchPath = join(root, 'research', `${run}-dispatch`, 'alpha-adjudicate-step5-v2-repeat-r1-u1.result.json');
  const dispatch = { run, ok: true, role: 'alpha-adjudicate', label: 'step5-v2-repeat-r1-u1', model: MODELS.sol61.id, provider_effort: 'high' }; save(dispatchPath, dispatch);
  const sourcePath = join(dir, 'repeat-1-collected.json'), source = { version: 2, run, phase: 'repeat', round: 1, reviews: [review], decisions: [], created_items: [], evidence: refs([packPath, reportPath, dispatchPath]) }; save(sourcePath, source);
  const closedPath = join(dir, 'impact-repeat-1-closed.json'), closed = { version: 2, run, phase: 'impact-repeat', round: 1, reviews: [], created_items: [], changed: [], restated: [], post: before, evidence: {}, downstream: [] }; save(closedPath, closed);
  save(join(dir, 'impact-repeat-1.json'), { run, phase: 'impact-repeat', round: 1, before, seeds: [], assignments: { '1': [], '2': [], '3': [] } });
  save(impactProgressPath(root, run, 'impact-repeat', 1), { version: 2, run, phase: 'impact-repeat', round: 1, complete: true, passes: ['impact-repeat'], activePhase: 'impact-repeat', closed_receipt: { path: closedPath, sha256: digest(readFileSync(closedPath, 'utf8')) } });
  const now = Date.now(), time = delta => new Date(now + delta).toISOString();
  const state = { run, stage: '5.7-certify', stages: { '5.6-impact': { enteredAt: time(-10000), gatesPassedAt: time(-1000), doneAt: time(-1000) } }, dispatches: {} }; save(join(stateDir, 'state.json'), state);
  const body = { run, repo: root, stages: ['5.6-impact'], scopeKind: 'items', recertificationScope: 'formatting-metadata-only',
    items: ids.map(id => ({ id, carrierSha256: digest(readFileSync(join(root, 'items', `${id}.md`), 'utf8')), manifestSha256: null })), inputs: [contractPath, join(root, 'research', `${run}-batch-1.pages.json`)].map(path => ({ path, sha256: digest(readFileSync(path, 'utf8')) })) };
  const history = { request: { version: 2, attempt: 'native-attempt', createdAt: time(-9000), consumedAt: time(-2000), snapshot: { ...body, sha256: digest(body) } },
    receipt: { version: 2, attempt: 'native-attempt', snapshotSha256: digest(body), reviewer: '/root', recertificationScope: 'formatting-metadata-only', writersDrained: true, writerScopes: [], reviewStartedAt: time(-8000), reviewedAt: time(-3000),
      items: body.items.map(item => ({ ...item, verdict: 'format-metadata-pass', formatting: { verdict: 'pass', evidence: 'Current structural and applicable proof format checked.' }, metadata: { verdict: 'pass', evidence: 'Current identity, dependency and owning contract metadata checked.' } })) } };
  const historyPath = join(stateDir, 'owner-gate-history', 'native-attempt.json'); save(historyPath, history);
  const rebindNative = () => { save(reportPath, report); save(dispatchPath, dispatch); source.evidence = refs([packPath, reportPath, dispatchPath]); save(sourcePath, source); };
  const rebindPrior = () => { delete prior.sha256; prior.sha256 = digest(prior); save(priorPath, prior); save(join(dir, 'certification.json'), prior); };
  return { root, run, dir, ids, state, stateDir, prior, priorPath, contractPath, staticPath, packPath, report, reportPath, dispatch, dispatchPath, source, sourcePath, history, historyPath, save, rebindNative, rebindPrior,
    certify: () => certify(root, run, 'impact-repeat', 1, { contextHasher }) };
}

test('normal native repeat certification preserves historical binding and accepts only the gate-bound contract evolution', t => {
  const f = fixture(t), immutableBytes = readFileSync(f.priorPath, 'utf8'), reportBytes = readFileSync(f.staticPath, 'utf8'), before = f.prior.evidence[f.contractPath];
  assert.throws(() => verifyCertification(f.root, f.run), /evidence changed/);
  const cert = f.certify();
  assert.equal(readFileSync(f.priorPath, 'utf8'), immutableBytes); assert.equal(readFileSync(f.staticPath, 'utf8'), reportBytes);
  assert.equal(JSON.parse(readFileSync(f.priorPath, 'utf8')).evidence[f.contractPath], before);
  assert.equal(cert.evidence[f.contractPath], digest(readFileSync(f.contractPath, 'utf8')));
  assert.equal(cert.evidence[f.priorPath], digest(immutableBytes)); assert.equal(cert.evidence[f.historyPath], digest(readFileSync(f.historyPath, 'utf8')));
  assert.equal(cert.evidence_transitions[0].before_sha256, before); assert.equal(cert.evidence_transitions[0].native_reports[0].subjects[0], f.ids[0]);
  assert.deepEqual(verifyCertification(f.root, f.run), cert); assert.deepEqual(f.certify(), cert);
  writeFileSync(f.contractPath, 'tampered'); assert.throws(() => verifyCertification(f.root, f.run), /evidence changed/);
});

for (const [name, change, error] of [
  ['historical report tampering', f => writeFileSync(f.staticPath, 'tampered'), /non-owning-contract evidence changed/],
  ['native report tampering', f => writeFileSync(f.reportPath, 'tampered'), /evidence changed/],
  ['immutable prior certificate tampering', f => writeFileSync(f.priorPath, 'tampered'), /JSON|prior certificate/],
  ['current metadata changed after gate', f => writeFileSync(f.contractPath, '{}'), /not gate-bound/],
  ['unconsumed gate', f => { delete f.history.request.consumedAt; f.save(f.historyPath, f.history); }, /missing consumed/],
  ['wrong predecessor stage', f => { f.history.request.snapshot.stages = ['5.8-gate']; f.save(f.historyPath, f.history); }, /missing consumed/],
  ['wrong native stage', f => { f.state.stage = '5.8-gate'; f.save(join(f.stateDir, 'state.json'), f.state); }, /wrong native/],
  ['incomplete owner scope', f => { f.history.receipt.items.pop(); f.save(f.historyPath, f.history); }, /incomplete/],
  ['failed owner metadata', f => { f.history.receipt.items[0].metadata.verdict = 'fail'; f.save(f.historyPath, f.history); }, /stale owner scope/],
  ['wrong owner snapshot hash', f => { f.history.receipt.snapshotSha256 = 'b'.repeat(64); f.save(f.historyPath, f.history); }, /invalid consumed/],
  ['changed source after gate', f => writeFileSync(join(f.root, 'items', `${f.ids[0]}.md`), readFileSync(join(f.root, 'items', `${f.ids[0]}.md`), 'utf8') + 'edited'), /stale owner scope/],
  ['changed manifest after gate', f => { const path = join(f.root, 'research', `${f.run}-batch-1.pages.json`); writeFileSync(path, readFileSync(path, 'utf8') + ' '); }, /stale owner manifest/],
  ['unlicensed contract change', f => { delete f.report.contract_repairs; f.rebindNative(); }, /lacks native owning/],
  ['wrong native ownership', f => { f.report.contract_repairs[0].id = f.ids[1]; f.rebindNative(); }, /lacks native owning/],
  ['wrong native model', f => { f.dispatch.model = MODELS.luna.id; f.rebindNative(); }, /native worker authority/],
  ['wrong native assignment', f => { const p = JSON.parse(readFileSync(f.packPath, 'utf8')); p.assignments['1'] = []; f.save(f.packPath, p); f.rebindNative(); }, /identity differs/],
  ['unknown mutable evidence family', f => { const path = join(f.root, 'research', 'demo-transcript.json'); f.save(path, {}); f.prior.evidence[path] = 'a'.repeat(64); f.rebindPrior(); }, /non-owning-contract/],
  ['contract path symlink escape', f => { const outside = join(f.dir, 'fake-contract.json'); writeFileSync(outside, readFileSync(f.contractPath)); rmSync(f.contractPath); symlinkSync(outside, f.contractPath); }, /non-owning-contract/],
]) test(`certification transition rejects ${name}`, t => {
  const f = fixture(t); change(f); const priorBytes = readFileSync(join(f.dir, 'certification.json'), 'utf8');
  assert.throws(f.certify, error); assert.equal(readFileSync(join(f.dir, 'certification.json'), 'utf8'), priorBytes);
  assert.equal(existsSync(join(f.dir, 'certification-impact-repeat-1.json')), false);
});
