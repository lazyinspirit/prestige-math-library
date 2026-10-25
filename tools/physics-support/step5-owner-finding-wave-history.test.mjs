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

// Build actual native intake, complete all three native lanes, and invoke the
// ordinary parent collector. Only the final sealed impact certificate is a
// synthetic historical anchor; no test claims a real gate or scientific audit.
function complete(f) {
  advanceAdjudicationCorrection(f.root, f.run, f.phase, 1);
  const phase='owner-finding-correction-'+f.phase,pack=JSON.parse(readFileSync(join(f.dir,phase+'-1.json')));
  for(const id of f.ids.slice(0,2)){
    const file=join(f.root,'items',id+'.md');
    writeFileSync(file,readFileSync(file,'utf8').replace('A complete argument.','A complete argument with the necessary explicit convention.'));
  }
  for(const lane of ['1','2','3']){
    const entries=f.request.entries.filter(row=>row.owner_lane===lane),label=workerLabel(phase,1,lane);
    f.save(workerReport(f.root,f.run,phase,1,lane),{run:f.run,phase,round:1,unit:lane,input_sha256:digest(pack),decisions:[],created_items:[],downstream:[],
      reviews:entries.map(entry=>({id:entry.subject,disposition:'repaired',...reviewContextHashes(f.root,[entry.subject])[entry.subject],...explanation})),
      root_finding_resolutions:entries.map(entry=>({defect_id:entry.root_finding.defect_id,status:'fixed',subjects:[entry.subject],...explanation})),
      scientific_correction_adjudications:entries.filter(entry=>entry.original_tuple).map(()=>f.originalDecision)});
    f.save(join(f.root,'research',f.run+'-dispatch','alpha-repair-'+label+'.result.json'),{ok:true,run:f.run,role:'alpha-repair',label,model:MODELS.sol61.id,provider_effort:'high',covers:[phase+':'+lane],ended_at:'2026-10-22T00:02:00Z'});
  }
  assert.equal(advanceAdjudicationCorrection(f.root,f.run,f.phase,1).parent_collected,true);
  f.parentPath=join(f.dir,f.phase+'-1-collected.json');f.parent=JSON.parse(readFileSync(f.parentPath));
  f.certificatePath=join(f.dir,'certification-impact-'+f.phase+'-1.json');
  f.certificate={version:2,run:f.run,phase:'impact-'+f.phase,round:1,at:'2026-10-22T00:03:00Z',items:[],evidence:{...f.parent.evidence,[f.parentPath]:hash(readFileSync(f.parentPath))}};
  f.seal=()=>{const {sha256,...payload}=f.certificate;f.certificate={...payload,sha256:digest(payload)};f.save(f.certificatePath,f.certificate);};f.seal();
  f.later=(phase='repeat',round=1)=>ownerFindingRequest(f.root,f.run,phase,round,{items:readLibraryItems(f.root),current:f.guards(),statements:f.statements(),dir:f.dir});
  return f;
}
for(const phase of ['initial','repeat'])test(phase+': authenticated consumed earlier queue remains retained history',t=>{
  const f=complete(fixture(t,phase));const pointer=readFileSync(join(f.dir,'owner-finding-queue-request.json'));
  assert.equal(f.later('repeat',phase==='initial'?1:2),null);
  assert.deepEqual(readFileSync(join(f.dir,'owner-finding-queue-request.json')),pointer);
  // Source may legitimately evolve later; historical reviews never get rebound.
  writeFileSync(join(f.root,'items',f.ids[0]+'.md'),readFileSync(join(f.root,'items',f.ids[0]+'.md'),'utf8')+'\nA later authorized test source revision.\n');
  assert.equal(f.later('repeat',phase==='initial'?1:2),null);
});
for(const [name,mutate]of [
  ['request',f=>{const path=join(f.dir,'owner-finding-queue-current.json');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['progress',f=>{const path=join(f.dir,'owner-finding-correction-initial-1-progress.json');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['child pack',f=>{const path=join(f.dir,'owner-finding-correction-initial-1.json');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['child report',f=>{const path=workerReport(f.root,f.run,'owner-finding-correction-initial',1,'1');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['child native dispatch',f=>{const path=join(f.root,'research',f.run+'-dispatch','alpha-repair-step5-v2-owner-finding-correction-initial-r1-u1.result.json');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['child collection',f=>{const path=join(f.dir,'owner-finding-correction-initial-1-collected.json');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['parent collection',f=>writeFileSync(f.parentPath,readFileSync(f.parentPath,'utf8')+' ')],
  ['certificate',f=>{f.certificate.round=7;f.save(f.certificatePath,f.certificate);}],
  ['original scientific evidence',f=>{const path=join(f.root,f.request.entries[0].science[0].path);writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['original task',f=>{const path=f.originalPath.replace(/\.json$/,'.task.md');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
  ['native repair task',f=>{const path=workerReport(f.root,f.run,'owner-finding-correction-initial',1,'1').replace(/\.json$/,'.task.md');writeFileSync(path,readFileSync(path,'utf8')+' ');}],
])test('consumed history rejects tampered '+name,t=>{const f=complete(fixture(t));mutate(f);assert.throws(()=>f.later());});
for(const name of ['certificate','parent','child','progress'])test('no '+name+' means earlier advertisement is not consumed history',t=>{
  const f=complete(fixture(t));const paths={certificate:f.certificatePath,parent:f.parentPath,child:join(f.dir,'owner-finding-correction-initial-1-collected.json'),progress:join(f.dir,'owner-finding-correction-initial-1-progress.json')};
  rmSync(paths[name]);assert.throws(()=>f.later());
});
test('unconsumed earlier request still blocks instead of being ignored',t=>{const f=fixture(t);assert.throws(()=>ownerFindingRequest(f.root,f.run,'repeat',1,{items:readLibraryItems(f.root),current:f.guards(),statements:f.statements(),dir:f.dir}));});
test('same-wave unconsumed request retains full ordinary intake',t=>{const f=fixture(t);assert.deepEqual(f.intake().subjects,f.ids.slice(0,2));writeFileSync(join(f.root,'items',f.ids[0]+'.md'),'Bad changed source');assert.throws(()=>f.intake());});
test('future wave cannot be ignored even if it has a collected sealed anchor',t=>{const f=complete(fixture(t,'repeat'));assert.throws(()=>f.later('initial',1),/earlier consumed wave/);});
test('same current round cannot be ignored through historical path',t=>{const f=complete(fixture(t,'repeat'));assert.throws(()=>f.later('repeat',1));});
test('unconsumed different repeat round remains blocking',t=>{const f=fixture(t,'repeat');assert.throws(()=>ownerFindingRequest(f.root,f.run,'repeat',2,{items:readLibraryItems(f.root),current:f.guards(),statements:f.statements(),dir:f.dir}));});
test('new current repeat request validates normally while prior initial parent replays its own immutable queue',t=>{
  const f=complete(fixture(t));
  // Close old canonical findings without modifying their original OPEN rows.
  // The new queue uses a genuinely distinct current finding and original native
  // repeat report, never a fabricated edge into the prior initial queue.
  const id=f.ids[2],before=readFileSync(join(f.root,'items',id+'.md'));
  const repeatPack={...f.originalPack,phase:'repeat',units:['19'],assignments:{'19':[]},rejected:[],before:f.guards(),before_statements:f.statements()};
  const repeatPackPath=join(f.dir,'repeat-1.json');f.save(repeatPackPath,repeatPack);
  const originalPath=workerReport(f.root,f.run,'repeat',1,'19'),label=workerLabel('repeat',1,'19');
  writeFileSync(originalPath.replace(/\.json$/,'.task.md'),'Frozen inputs: '+repeatPackPath+'\n');
  f.save(originalPath,{run:f.run,phase:'repeat',round:1,unit:'19',input_sha256:digest(repeatPack),decisions:[],reviews:[],created_items:[],downstream:[id]});
  f.save(join(f.root,'research',f.run+'-dispatch','alpha-adjudicate-'+label+'.result.json'),{ok:true,run:f.run,role:'alpha-adjudicate',label,model:MODELS.sol61.id,provider_effort:'high',covers:['19'],ended_at:'2026-10-22T00:05:00Z'});
  const evidence=join(f.root,'research',f.run+'-new-repeat');mkdirSync(evidence);
  const record={run:f.run,subject:id,defect_id:'repeat-new',disposition:'open',caught_by_role:'owner',severity:'nonfatal'};
  const finding=join(evidence,'finding.json'),beforePath=join(evidence,'before.md'),science=join(evidence,'science.json'),proposal=join(evidence,'proposal.json');
  f.save(finding,record);writeFileSync(beforePath,before);f.save(science,{finding:'Current independently referred coordinate range notation needs a bounded correction.'});f.save(proposal,{proposal:'One exact proposed coordinate range correction.'});
  writeFileSync(join(f.root,'research','defect-ledger.jsonl'),readFileSync(join(f.root,'research','defect-ledger.jsonl'),'utf8')+JSON.stringify(record)+'\n');
  const request={version:1,run:f.run,phase:'repeat',round:1,reviewer:'/root',entries:[{subject:id,owner_lane:'1',mode:'native-referral',root_finding:{defect_id:record.defect_id,record:f.ref(finding)},before_source:f.ref(beforePath),before_content_sha256:f.guards()[id],before_statement_sha256:f.statements()[id],science:[f.ref(science)],proposals:[f.ref(proposal)],native_outcome:f.ref(originalPath)}]};
  const path=join(f.dir,'owner-finding-queue-new-repeat.json');f.save(path,request);
  const oldPointer=readFileSync(join(f.dir,'owner-finding-queue-request.json'));
  f.save(join(f.dir,'owner-finding-queue-request.json'),{version:1,run:f.run,request:f.ref(path)});
  f.state.stage='5.5-adjudicate';f.state.stages={'5.1-adjudicate':{doneAt:'2026-10-22T00:03:00Z'},'5.5-adjudicate':{}};f.saveState();
  assert.deepEqual(f.later().subjects,[id]);
  assert.equal(advanceAdjudicationCorrection(f.root,f.run,'initial',1).parent_collected,true);
  assert.deepEqual(f.later().subjects,[id]);
  assert.ok(oldPointer.includes(Buffer.from('owner-finding-queue-current.json')));
  // Corrupting the prior bound parent/progress still fails its ordinary replay.
  const progress=join(f.dir,'owner-finding-correction-initial-1-progress.json');writeFileSync(progress,readFileSync(progress,'utf8')+' ');
  assert.throws(()=>advanceAdjudicationCorrection(f.root,f.run,'initial',1));
});
test('wrong state-directory advertisement remains invalid for consumed history',t=>{const f=complete(fixture(t));const path=join(f.dir,'owner-finding-queue-request.json'),pointer=JSON.parse(readFileSync(path));pointer.state_dir='.physics-autopilot/another-run';f.save(path,pointer);assert.throws(()=>f.later(),/wrong state directory/);});
test('new earlier-wave advertisement is not substituted for genuinely consumed request',t=>{const f=complete(fixture(t));const request=structuredClone(f.request);request.entries[0].subject=f.ids[2];const path=join(f.dir,'owner-finding-queue-unconsumed.json');f.save(path,request);f.save(join(f.dir,'owner-finding-queue-request.json'),{version:1,run:f.run,request:f.ref(path)});assert.throws(()=>f.later(),/consume this exact queue/);});
test('re-sealed certificate cannot conceal a parent naming another request',t=>{const f=complete(fixture(t));f.parent.native_owner_finding_corrections.request.sha256='0'.repeat(64);f.save(f.parentPath,f.parent);f.certificate.evidence[f.parentPath]=hash(readFileSync(f.parentPath));f.seal();assert.throws(()=>f.later(),/consume this exact queue/);});

// This fixture extends the synthetic certificate anchor above with its sealed
// metadata transition. Actual transition minting/native checks are covered by
// step5-initial-metadata-transition.test.mjs; here only historical replay runs.
function transitionedMetadata(t, suffix = 'pages') {
  const f = fixture(t), path = join(f.root, 'research', `${f.run}-batch-19.${suffix}.json`);
  const before = suffix === 'pages' ? [{ items: [{ id: f.ids[0], sources: { references: [{ title: 'Historical attribution' }] } }] }]
    : { contracts: { [f.ids[0]]: { citations: [{ quote: 'Historical quotation' }] } } };
  f.save(path, before); f.request.entries[0].science.push(f.ref(path)); f.bind(); complete(f);
  const archivePath = join(f.root, 'research', f.run + '-science', 'metadata.before.json'); writeFileSync(archivePath, readFileSync(path));
  const after = structuredClone(before);
  if (suffix === 'pages') after[0].items[0].sources.references[0].title = 'Native corrected attribution';
  else after.contracts[f.ids[0]].citations[0].quote = 'Native corrected quotation';
  f.save(path, after);
  const progressPath = join(f.dir, 'impact-initial-1-progress.json'), closedPath = join(f.dir, 'impact-initial-1-closed.json');
  f.save(progressPath, { complete: true }); f.save(closedPath, { errors: [] });
  const historyDir = join(f.root, '.physics-autopilot', f.run, 'owner-gate-history'); mkdirSync(historyDir);
  const gatePath = join(historyDir, 'consumed-native.json'); f.save(gatePath, { fixture: 'synthetic sealed predecessor anchor' });
  const native = { pack: f.ref(join(f.dir, 'initial-1.json')), report: f.ref(f.originalPath), task: f.ref(f.originalPath.replace(/\.json$/, '.task.md')),
    dispatch: f.ref(join(f.root, 'research', f.run + '-dispatch', 'alpha-adjudicate-step5-v2-initial-r1-u19.result.json')) };
  const pointers = [suffix === 'pages' ? '/0/items/0/sources/references/0/title' : '/contracts/' + f.ids[0] + '/citations/0/quote'];
  const metadataRequestPath = join(f.dir, 'owner-initial-metadata-fixture.json');
  const metadataRequest = { version: 1, run: f.run, reviewer: '/root', phase: 'impact-initial', round: 1,
    source_collection: f.ref(f.parentPath), impact_progress: f.ref(progressPath), impact_closed: f.ref(closedPath), predecessor_gate: f.ref(gatePath),
    artifacts: [{ kind: suffix === 'pages' ? 'owning-page-manifest' : 'owning-proof-contract', batch: '19', path: relative(f.root, path), before: f.ref(archivePath),
      after_sha256: hash(readFileSync(path)), changes: pointers.map(json_pointer => ({ json_pointer, subject: f.ids[0], native })) }] };
  const transition = { kind: 'initial-native-metadata', path, before_sha256: f.ref(archivePath).sha256, after_sha256: hash(readFileSync(path)),
    archive: { path: archivePath, sha256: f.ref(archivePath).sha256 }, binding: { path: metadataRequestPath, sha256: '' }, json_pointers: pointers,
    native_reports: [{ path: f.originalPath, sha256: native.report.sha256, subjects: [f.ids[0]] }] };
  f.certificate.evidence_transitions = [transition];
  f.rebindMetadataRequest = () => {
    f.save(metadataRequestPath, metadataRequest); transition.binding.sha256 = hash(readFileSync(metadataRequestPath));
    f.certificate.evidence[metadataRequestPath] = transition.binding.sha256; f.seal();
  };
  for (const bound of [path, archivePath, progressPath, closedPath, gatePath]) f.certificate.evidence[bound] = hash(readFileSync(bound));
  f.rebindMetadataRequest();
  return Object.assign(f, { metadataPath: path, archivePath, metadataRequestPath, metadataRequest, transition, metadataGatePath: gatePath });
}

for (const suffix of ['pages', 'proof-contracts']) test('consumed queue resolves only its sealed historical ' + suffix + ' archive', t => {
  const f = transitionedMetadata(t, suffix), progressPath = join(f.dir, 'owner-finding-correction-initial-1-progress.json');
  const preserved = [f.parentPath, progressPath, f.certificatePath, join(f.dir, 'owner-finding-correction-initial-1-collected.json')]
    .map(path => [path, readFileSync(path)]);
  assert.notEqual(f.parent.evidence[f.metadataPath], f.certificate.evidence[f.metadataPath]);
  assert.equal(f.later(), null);
  // Legitimate later source changes never demand new historical proof reviews.
  const source = join(f.root, 'items', f.ids[0] + '.md'); writeFileSync(source, readFileSync(source, 'utf8') + '\nLater native source revision.\n');
  assert.equal(f.later(), null);
  for (const [path, bytes] of preserved) assert.deepEqual(readFileSync(path), bytes);
});

for (const [name, mutate, expected] of [
  ['wrong transition kind', f => { f.transition.kind = 'untyped-refresh'; f.seal(); }, /unique sealed historical/],
  ['wrong before hash', f => { f.transition.before_sha256 = 'a'.repeat(64); f.seal(); }, /unique sealed historical/],
  ['duplicate transition', f => { f.certificate.evidence_transitions.push(structuredClone(f.transition)); f.seal(); }, /unique sealed historical/],
  ['wrong after hash', f => { f.transition.after_sha256 = 'b'.repeat(64); f.seal(); }, /current metadata binding/],
  ['changed current metadata', f => writeFileSync(f.metadataPath, readFileSync(f.metadataPath, 'utf8') + ' '), /current metadata binding/],
  ['changed raw archive', f => writeFileSync(f.archivePath, readFileSync(f.archivePath, 'utf8') + ' '), /not intact and certificate-bound/],
  ['unbound raw archive', f => { delete f.certificate.evidence[f.archivePath]; f.seal(); }, /not intact and certificate-bound/],
  ['changed Root request', f => writeFileSync(f.metadataRequestPath, readFileSync(f.metadataRequestPath, 'utf8') + ' '), /not intact and certificate-bound/],
  ['unbound Root request', f => { delete f.certificate.evidence[f.metadataRequestPath]; f.seal(); }, /not intact and certificate-bound/],
  ['wrong artifact kind', f => { f.metadataRequest.artifacts[0].kind = 'source'; f.rebindMetadataRequest(); }, /artifact or exact scalar set/],
  ['another canonical artifact path', f => { f.metadataRequest.artifacts[0].path = 'research/demo-batch-99.pages.json'; f.rebindMetadataRequest(); }, /one exact artifact/],
  ['extra scalar pointer', f => { f.transition.json_pointers.push('/0/items/0/id'); f.seal(); }, /artifact or exact scalar set/],
  ['wrong native report basis', f => { f.transition.native_reports[0].subjects = ['thm-outsider']; f.seal(); }, /native report basis/],
  ['unbound native report', f => { delete f.certificate.evidence[f.originalPath]; f.seal(); }, /not intact and certificate-bound/],
  ['unbound predecessor gate', f => { delete f.certificate.evidence[f.metadataGatePath]; f.seal(); }, /not intact and certificate-bound/],
  ['changed impact progress', f => { const path = join(f.root, f.metadataRequest.impact_progress.path); writeFileSync(path, readFileSync(path, 'utf8') + ' '); }, /not intact and certificate-bound/],
  ['another source parent', f => { f.metadataRequest.source_collection = f.ref(join(f.dir, 'owner-finding-correction-initial-1-collected.json')); f.rebindMetadataRequest(); }, /another parent or wave/],
]) test('consumed metadata history rejects ' + name, t => {
  const f = transitionedMetadata(t); mutate(f); assert.throws(() => f.later(), expected);
});
