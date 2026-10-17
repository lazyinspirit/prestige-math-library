import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { pageCorrectionRequest, pageCorrectionPhase, pageCorrectionReview, pageCorrectionProgressPath } from './step5-owner-page-correction.mjs';
import { advanceAdjudicationCorrection, adjudicationCorrectionWork, collect, reviewContextHashes, workerLabel, workerReport } from './step5-workflow.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { statementHash } from './step5-statement.mjs';
import { MODELS } from './models.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const digest = value => hash(JSON.stringify(value));
const evidence = { reason: 'Checked the exact page claim, its dimensional countercase, supplier hypotheses and unchanged affected consumer use.',
  uncertain: false, familiar: true, source_urls: [] };

function fixture(t, { itemQueue = false, relativeSupport = false } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'step5-page-correction-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const run = 'demo', round = 1, batch = '43', subject = 'nonnormal-states', item = 'thm-nonnormal-state';
  const dir = join(root, 'research', run + '-step5-v2'), scienceDir = join(root, 'research', run + '-science');
  const stateDir = join(root, '.physics-autopilot', run), dispatchDir = join(root, 'research', run + '-dispatch');
  const pagePath = 'library/physics/' + subject + '.md', consumerPath = 'library/physics/nonnormal-examples.md';
  for (const path of [dir, scienceDir, stateDir, dispatchDir, join(root, 'library', 'physics'), join(root, 'items')]) mkdirSync(path, { recursive: true });
  const save = (path, value) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
  const read = path => JSON.parse(readFileSync(path, 'utf8'));
  const ref = path => ({ path: relative(root, path), sha256: hash(readFileSync(path)) });
  const itemPath = join(root, 'items', item + '.md');
  writeFileSync(itemPath, `---\nid: ${item}\nkind: theorem\nstatus: draft\ndeps: []\n---\n## Statement\nNonnormal for q >= 2.\n\n## Proof\n1.1 The projection argument proves the claim. [given] ∎\n`);
  const originalItem = readFileSync(itemPath, 'utf8'), ids = itemQueue ? [item, 'thm-second-finding', 'thm-third-finding'] : [item];
  for(const id of ids.slice(1))writeFileSync(join(root,'items',id+'.md'),originalItem.replace('id: '+item,'id: '+id));
  const originalItems=Object.fromEntries(ids.map(id=>[id,readFileSync(join(root,'items',id+'.md'),'utf8')]));
  const before=Object.fromEntries(ids.map(id=>[id,itemHashGuard(originalItems[id])]));
  const statement=Object.fromEntries(ids.map(id=>[id,statementHash(originalItems[id])]));
  const excerpt = 'The onsite Gibbs state is unique and has no normal extension.';
  const replacement = 'The onsite Gibbs state is unique. For q >= 2 it has no normal extension.';
  const source = `---\npage: ${subject}\nstatus: draft\nlibrary: physics\nitems: [${item}]\nexamples: []\nrequires: []\n---\n\n${excerpt}\n`;
  writeFileSync(join(root, pagePath), source);
  writeFileSync(join(root, consumerPath), '---\npage: nonnormal-examples\nstatus: draft\nlibrary: physics\nitems: ['+ids.slice(1).join(', ')+']\nexamples: []\nrequires: [nonnormal-states]\n---\n\nThe example uses q >= 2.\n');
  save(join(root, 'research', run + '-batch-43.pages.json'), [{ id: subject, category: 'physics', items: [{ id: item }] },
    { id: 'nonnormal-examples', category: 'physics', items: ids.slice(1).map(id=>({id})) }]);
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: batch, items: ids }] }));
  save(join(dir, 'baseline.json'), before);
  const tuple = { id: item, model: MODELS.sol61.id, context_sha256: 'a'.repeat(64), item_sha256: 'b'.repeat(64), keep: false };
  const tuples=ids.map(id=>({...tuple,id}));save(join(dir, 'step4-verdicts.json'), tuples);
  const pack = { version: 2, run, phase: 'initial', round, repair_scope: 'frontier', frontier_ids: ids,
    units: [batch], assignments: { [batch]: tuples }, rejected: tuples, before, before_statements: statement, judge_model: MODELS.sol61.id };
  const originalPackPath = join(dir, 'initial-1.json'); save(originalPackPath, pack);
  const originalReportPath = workerReport(root, run, 'initial', 1, batch);
  const originalLabel = workerLabel('initial', 1, batch);
  writeFileSync(originalReportPath.replace(/\.json$/, '.task.md'), 'Frozen inputs: ' + originalPackPath + '\n');
  const digestPath = join(root, 'research', run + '-batch-43-step5-context.json');
  save(digestPath, { batches: [batch], pages_read: [subject, 'nonnormal-examples'], concerns: [
    { id: subject, concern: 'The unqualified page summary includes dimension one, where the unique scalar Gibbs state has a normal extension.', severity: 'would-be-fatal' }] });
  const referral = { path: pagePath, affected_use: 'The page summary generalizes the nonnormality theorem without retaining its necessary dimension restriction.',
    disposition: 'refer_page_owner', reason: 'At dimension one the represented algebra is the scalar field and its unique state is normal, so qualify only nonnormality.' };
  const decision = { id: item, model: tuple.model, context_sha256: tuple.context_sha256, outcome: 'false_positive', ...evidence };
  const originalReport = { run, phase: 'initial', round, unit: batch, input_sha256: digest(pack),
    decisions: ids.map(id=>({...decision,id})), reviews: ids.map(id=>({ id, disposition: 'unaffected', ...reviewContextHashes(root, [id])[id], ...evidence })),
    created_items: [], downstream: [], supporting_evidence: { [relativeSupport ? relative(root, digestPath) : digestPath]: hash(readFileSync(digestPath)) }, repair_notes: { page_uses: [referral] } };
  save(originalReportPath, originalReport);
  save(join(dispatchDir, 'alpha-adjudicate-' + originalLabel + '.result.json'), { ok: true, run, role: 'alpha-adjudicate', label: originalLabel,
    model: MODELS.sol61.id, provider_effort: 'high', covers: [batch], ended_at: '2026-10-17T00:00:00Z' });
  const finding = { run, subject, defect_id: 'page-q-one', disposition: 'open', caught_by_role: 'owner', severity: 'fatal' };
  const findingPath = join(scienceDir, 'page-finding.json'), beforePath = join(scienceDir, 'page-before.md');
  const candidatePath = join(scienceDir, 'page-candidate.md'), patchPath = join(scienceDir, 'page.patch');
  save(findingPath, finding); writeFileSync(beforePath, source); writeFileSync(candidatePath, source.replace(excerpt, replacement));
  writeFileSync(patchPath, '- ' + excerpt + '\n+ ' + replacement + '\n');
  const proposal = { id: subject, source_file: pagePath, batch, native_source_write_done: false, native_review_done: false, certification_or_gate_credit: false,
    guards: { current_source_raw_sha256: hash(readFileSync(beforePath)) }, native_report: { source_file: relative(root, originalReportPath), raw_sha256: hash(readFileSync(originalReportPath)) },
    source_preimage: { archive: relative(root, beforePath), raw_sha256: hash(readFileSync(beforePath)) }, exact_native_finding: referral,
    candidate_file: relative(root, candidatePath), candidate_raw_sha256: hash(readFileSync(candidatePath)), patch_file: relative(root, patchPath), patch_sha256: hash(readFileSync(patchPath)),
    source_excerpt_edits: [{ source_excerpt: excerpt, proposed_replacement: replacement }] };
  const science = { run, scientific_owner: '/root/page_scientific_owner', scientific_findings: [{ id: subject,
    confirmation: 'The page claim is false in dimension one; the original theorem has the exact dimension restriction needed by the projection proof.' }], proposals: [proposal] };
  const sciencePath = join(scienceDir, 'proposal.json'); save(sciencePath, science);
  const requestPath = join(dir, 'owner-page-correction-current.json');
  const request = { version: 1, run, phase: 'initial', round, reviewer: '/root', subject, page_path: pagePath, batch,
    root_finding: { record: ref(findingPath), defect_id: finding.defect_id }, before_source: ref(beforePath), before_raw_sha256: hash(readFileSync(beforePath)),
    native_outcome: ref(originalReportPath), batch_digest: ref(digestPath), scientific_owner: science.scientific_owner, scientific_proposal: ref(sciencePath) };
  const bind = () => { save(requestPath, request); save(join(dir, 'owner-page-correction-request.json'), { version: 1, run, request: ref(requestPath) }); };
  const state = { run, stage: '5.1-adjudicate', stages: { '5.1-adjudicate': {} }, dispatches: { original: { startedAt: 'earlier', endedAt: 'now' } } };
  const saveState = () => save(join(stateDir, 'state.json'), state); saveState();
  const ledger = [finding];
  if (itemQueue) {
    const entries=ids.map((id,index)=>{
      const itemFinding = { run, subject: id, defect_id: 'distinct-item-finding-'+index, disposition: 'open', caught_by_role: 'owner', severity: 'fatal' };
      const itemFindingPath = join(scienceDir, id+'-finding.json'), itemBefore = join(scienceDir, id+'-before.md');
      save(itemFindingPath, itemFinding); writeFileSync(itemBefore, originalItems[id]); ledger.push(itemFinding);
      return { subject:id, owner_lane:String(index+1), mode:'native-referral',root_finding:{defect_id:itemFinding.defect_id,record:ref(itemFindingPath)},
        before_source:ref(itemBefore),before_content_sha256:before[id],before_statement_sha256:statement[id],science:[ref(sciencePath)],
        proposals:[ref(sciencePath)],native_outcome:ref(originalReportPath),original_tuple:tuples[index] };
    });
    const queuePath = join(dir, 'owner-finding-queue-current.json');
    save(queuePath, { version: 1, run, phase: 'initial', round, reviewer: '/root', entries });
    save(join(dir, 'owner-finding-queue-request.json'), { version: 1, run, request: ref(queuePath) });
  }
  writeFileSync(join(root, 'research', 'defect-ledger.jsonl'), ledger.map(row => JSON.stringify(row)).join('\n') + '\n'); bind();
  const advance = () => advanceAdjudicationCorrection(root, run, 'initial', round);
  function completeItemQueue() {
    const phase = 'owner-finding-correction-initial', child = read(join(dir, phase + '-1.json'));
    for(const id of ids)writeFileSync(join(root,'items',id+'.md'),originalItems[id].replace('The projection argument','The explicit convention and projection argument'));
    for (const unit of ['1', '2', '3']) {
      const assigned = child.assignments[unit], label = workerLabel(phase, 1, unit);
      save(workerReport(root, run, phase, 1, unit), { run, phase, round: 1, unit, input_sha256: digest(child), decisions: [], created_items: [], downstream: [],
        reviews: assigned.map(id => ({ id, disposition: 'repaired', ...reviewContextHashes(root, [id])[id], ...evidence })),
        scientific_correction_adjudications: assigned.map(id=>({...decision,id})), root_finding_resolutions: assigned.map(id => ({ defect_id: 'distinct-item-finding-'+ids.indexOf(id), status: 'fixed', subjects: [id], ...evidence })) });
      save(join(dispatchDir, 'alpha-repair-' + label + '.result.json'), { ok: true, run, role: 'alpha-repair', label, model: MODELS.sol61.id,
        provider_effort: 'high', covers: [phase + ':' + unit], ended_at: '2026-10-17T00:01:00Z' });
    }
  }
  function completePage() {
    const child = read(join(dir, pageCorrectionPhase + '-1.json'));
    writeFileSync(join(root, pagePath), readFileSync(candidatePath));
    const label = workerLabel(pageCorrectionPhase, 1, '1');
    const report = { version: 1, run, phase: pageCorrectionPhase, round, unit: '1', input_sha256: digest(child), decisions: [], reviews: [], created_items: [], downstream: [],
      page_review: { ...pageCorrectionReview(root, run, round), disposition: 'repaired', ...evidence },
      consumer_reviews: child.consumers.map(row => ({ ...row, disposition: 'unaffected', ...evidence })),
      root_finding_resolutions: [{ defect_id: finding.defect_id, status: 'fixed', subjects: [subject], ...evidence }] };
    const reportPath = workerReport(root, run, pageCorrectionPhase, 1, '1'); save(reportPath, report);
    const childDispatchPath = join(dispatchDir, 'alpha-repair-' + label + '.result.json');
    save(childDispatchPath, { ok: true, run, role: 'alpha-repair', label, model: MODELS.sol61.id, provider_effort: 'high',
      covers: [pageCorrectionPhase + ':1'], ended_at: '2026-10-17T00:02:00Z' });
    return { child, report, reportPath, childDispatchPath };
  }
  return { root, run, round, dir, subject, item, itemPath, originalItem, originalPackPath, originalReportPath, state, saveState, request, requestPath,
    bind, ref, save, read, advance, completePage, completeItemQueue, candidatePath, pagePath, consumerPath, digestPath, science, sciencePath,
    intake: () => pageCorrectionRequest(root, run, 'initial', round) };
}

for (const itemQueue of [false, true]) test(`native page-only completion preserves item history${itemQueue ? ' after the item queue and before parent collection' : ''}`, t => {
  const f = fixture(t, { itemQueue }), originalPack = readFileSync(f.originalPackPath), originalReport = readFileSync(f.originalReportPath);
  if (itemQueue) {
    assert.equal(f.advance().correction_phase, 'owner-finding-correction-initial');
    assert.equal(existsSync(pageCorrectionProgressPath(f.root, f.run, 1)), false);
    f.completeItemQueue();
  } else assert.throws(() => collect(f.root, f.run, 'initial', 1), /page correction is pending/);
  const progress = f.advance();
  assert.equal(progress.correction_phase, pageCorrectionPhase);
  assert.equal(existsSync(join(f.dir, 'initial-1-collected.json')), false);
  assert.equal(adjudicationCorrectionWork(f.root, f.run, 'initial', 1).at(-1), pageCorrectionPhase + ':1');
  const task = readFileSync(workerReport(f.root, f.run, pageCorrectionPhase, 1, '1').replace(/\.json$/, '.task.md'), 'utf8');
  assert.match(task, /ONLY source permission: library\/physics\/nonnormal-states.md/);
  assert.match(task, /No item, other page, contract, manifest, ledger/);
  const child = f.completePage();
  assert.equal(f.advance().parent_collected, true);
  const collected = f.read(join(f.dir, 'initial-1-collected.json'));
  assert.equal(collected.decisions[0].outcome, 'false_positive');
  assert.equal(collected.native_page_correction.subject, f.subject);
  assert.equal(collected.native_page_correction.root_finding_resolution.status, 'fixed');
  assert.deepEqual(readFileSync(f.originalPackPath), originalPack); assert.deepEqual(readFileSync(f.originalReportPath), originalReport);
  if (!itemQueue) assert.equal(readFileSync(f.itemPath, 'utf8'), f.originalItem);
  assert.equal(collected.evidence[join(f.root, f.pagePath)], hash(readFileSync(join(f.root, f.pagePath))));
  assert.ok(collected.evidence[child.childDispatchPath]);
  assert.equal(isDeepStrictEqual(child.child.consumers, [{ id: 'nonnormal-examples', path: f.consumerPath, kind: 'page' }]), true);
  const ledgerPath = join(f.root, 'research', 'defect-ledger.jsonl');
  const originalRows=readFileSync(ledgerPath,'utf8').trim().split('\n').map(JSON.parse);
  assert.equal(originalRows.length,itemQueue?4:1);
  const successors=originalRows.map(row=>({...row,defect_id:row.defect_id+'-fixed',disposition:'fixed',supersedes:[row.defect_id]}));
  writeFileSync(ledgerPath,readFileSync(ledgerPath,'utf8')+successors.map(row=>JSON.stringify(row)).join('\n')+'\n');
  assert.equal(f.advance().parent_collected, true, 'immutable parent replay must survive legitimate Root canonical closure');
  assert.equal(readFileSync(ledgerPath,'utf8').trim().split('\n').map(JSON.parse).filter(row=>row.disposition==='open').length,originalRows.length);
  const currentItem=readFileSync(f.itemPath);
  writeFileSync(f.itemPath,Buffer.concat([currentItem,Buffer.from('\nUnlicensed post-collection item change.\n')]));
  assert.throws(f.advance,/current source changed after native page-parent collection/);
  writeFileSync(f.itemPath,currentItem);
  const currentPage=readFileSync(join(f.root,f.pagePath));
  writeFileSync(join(f.root,f.pagePath),Buffer.concat([currentPage,Buffer.from('\nUnlicensed post-collection page change.\n')]));
  assert.throws(f.advance,/evidence changed/);
  writeFileSync(join(f.root,f.pagePath),currentPage);
  assert.equal(f.advance().parent_collected,true);
  const retainedLedger=readFileSync(ledgerPath,'utf8');
  writeFileSync(ledgerPath,retainedLedger.split('\n').filter(line=>!line||JSON.parse(line).defect_id!==originalRows[0].defect_id).join('\n'));
  assert.throws(f.advance,/original canonical finding history/);
  writeFileSync(ledgerPath,retainedLedger);
  assert.throws(() => collect(f.root, f.run, pageCorrectionPhase, 1), /authenticated initial parent/);
});

test('failed parent collection resumes after a genuine item-child collection without changing original authority', t => {
  const f = fixture(t, { itemQueue: true, relativeSupport: true });
  f.advance(); f.completeItemQueue(); f.advance(); f.completePage();
  assert.throws(f.advance, /invalid supporting evidence path/);
  assert.equal(existsSync(join(f.dir, 'owner-finding-correction-initial-1-collected.json')), true);
  assert.equal(existsSync(join(f.dir, 'initial-1-collected.json')), false);
  const previous = process.cwd();
  try { process.chdir(f.root); assert.equal(f.advance().parent_collected, true); }
  finally { process.chdir(previous); }
});

for (const [name, mutate, expected] of [
  ['wrong page batch owner', f => { f.request.batch = '44'; f.bind(); }, /unique current-run batch owner/],
  ['wrong page path', f => { f.request.page_path = f.consumerPath; f.bind(); }, /exact manifest owner/],
  ['item/page identity collision', f => writeFileSync(join(f.root, 'items', f.subject + '.md'), f.originalItem.replace('id: '+f.item, 'id: '+f.subject)), /collides with an item identity/],
  ['published page', f => { const path = join(f.root, f.pagePath); writeFileSync(path, readFileSync(path, 'utf8').replace('status: draft', 'status: published')); }, /native draft physics/],
  ['duplicate manifest ownership', f => f.save(join(f.root, 'research', f.run + '-batch-44.pages.json'), [{ id: f.subject, category: 'physics', items: [{ id: f.item }] }]), /unique current-run batch owner/],
  ['current page drift', f => writeFileSync(join(f.root, f.pagePath), readFileSync(join(f.root, f.pagePath), 'utf8') + '\nUnlicensed drift.\n'), /drifted/],
  ['active native writer', f => { f.state.dispatches.active = { startedAt: 'now' }; f.saveState(); }, /writers have not drained/],
  ['shared metadata writer', f => mkdirSync(join(f.root, '.physics-autopilot', 'step5-shared-write.lock')), /metadata writer active/],
  ['wrong stage', f => { f.state.stage = '5.2-impact'; f.saveState(); }, /live initial pre-collection/],
  ['stale scientific evidence', f => writeFileSync(f.sciencePath, '{}'), /bound evidence changed/],
  ['missing native page referral', f => { const report = f.read(f.originalReportPath); report.repair_notes.page_uses = []; f.save(f.originalReportPath, report); f.request.native_outcome = f.ref(f.originalReportPath); f.bind(); }, /exact native page-owner referral/],
  ['stale digest', f => writeFileSync(f.digestPath, '{}'), /bound evidence changed/],
  ['closed canonical finding', f => { const path = join(f.root, 'research', 'defect-ledger.jsonl'); writeFileSync(path, readFileSync(path, 'utf8').replace('"disposition":"open"', '"disposition":"fixed"')); }, /finding absent/],
]) test(`page intake rejects ${name}`, t => {
  const f = fixture(t); mutate(f); assert.throws(f.intake, expected); assert.throws(f.advance, expected);
  assert.equal(existsSync(pageCorrectionProgressPath(f.root, f.run, 1)), false);
});

for (const [name, mutate, expected] of [
  ['unrelated item source change', f => writeFileSync(f.itemPath, readFileSync(f.itemPath, 'utf8') + '\nExtra item repair.\n'), /changed-source set/],
  ['unrelated page source change', f => writeFileSync(join(f.root, f.consumerPath), readFileSync(join(f.root, f.consumerPath), 'utf8') + '\nExtra page repair.\n'), /changed-source set/],
  ['extra page source', f => writeFileSync(join(f.root, 'library', 'physics', 'extra.md'), '---\npage: extra\nstatus: draft\n---\nExtra.\n'), /changed-source set/],
  ['different page repair', f => writeFileSync(join(f.root, f.pagePath), readFileSync(join(f.root, f.pagePath), 'utf8') + '\nUnapproved prose.\n'), /changed-source set/],
  ['missing fresh page review', (f, c) => { delete c.report.page_review; f.save(c.reportPath, c.report); }, /fresh exact current native page review/],
  ['stale page review context', (f, c) => { c.report.page_review.review_context_sha256 = 'c'.repeat(64); f.save(c.reportPath, c.report); }, /fresh exact current native page review/],
  ['missing consumer review', (f, c) => { c.report.consumer_reviews = []; f.save(c.reportPath, c.report); }, /page-consumer review/],
  ['missing typed resolution', (f, c) => { c.report.root_finding_resolutions = []; f.save(c.reportPath, c.report); }, /typed explicit/],
  ['fabricated item decision', (f, c) => { c.report.decisions = [{ id: f.item }]; f.save(c.reportPath, c.report); }, /cannot invent item/],
  ['wrong native child model', (f, c) => { const dispatch = f.read(c.childDispatchPath); dispatch.model = MODELS.luna.id; f.save(c.childDispatchPath, dispatch); }, /completed Sol 6.1 high/],
  ['wrong native child covers', (f, c) => { const dispatch = f.read(c.childDispatchPath); dispatch.covers = ['1']; f.save(c.childDispatchPath, dispatch); }, /completed Sol 6.1 high/],
  ['owning contract change', f => f.save(join(f.root, 'research', f.run + '-batch-43.proof-contracts.json'), {}), /owning metadata changed/],
  ['active writer at collection', f => { f.state.dispatches.active = { startedAt: 'now' }; f.saveState(); }, /writers have not drained/],
]) test(`page completion rejects ${name} before parent collection`, t => {
  const f = fixture(t); f.advance(); const child = f.completePage(); mutate(f, child);
  assert.throws(f.advance, expected); assert.equal(existsSync(join(f.dir, 'initial-1-collected.json')), false);
});
