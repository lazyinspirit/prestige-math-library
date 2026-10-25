// Synthetic native ledgers exercise the boundary; no test contacts a provider.
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, appendFileSync, rmSync, symlinkSync } from 'node:fs';
import { join, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { makeStep6CurrencyCandidate, beginStep6CurrencyRepair, finishStep6CurrencyRepair, verifyStep6CurrencyAuthority,
  verifyStep6HistoricalMetadata, step6CurrencyInputPaths, step6CurrencyPending, currencyContexts, verifyStep6CurrencyForStamps, compactCurrencyAuthorReport, makeStep6ScientificCurrencyCandidate, step6ScientificEscalationHistory } from './step6-currency-repair.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { verifyCertification } from './step5-workflow.mjs';
import { currentStep5Certification, loadStep5ClosureCertification } from './step5-certification-consumer.mjs';

const raw = value => createHash('sha256').update(value).digest('hex'), digest = value => raw(JSON.stringify(value));
function fixture(t, { nativeBaseline = false, realContexts = false } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'step6-currency-')), root = join(repo, 'physics'), run = 'demo';
  t.after(() => rmSync(repo, { recursive: true, force: true }));
  const save = (path, value) => { mkdirSync(join(path, '..'), { recursive: true }); writeFileSync(path, JSON.stringify(value, null, 2) + '\n'); };
  const git = args => execFileSync('git', args, { cwd: repo, stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
  git(['init', '-q']);
  const dir = join(root, 'research', run + '-step5-v2'), state = join(root, '.physics-autopilot', run), supervision = join(state, 'supervision');
  for (const path of [dir, supervision, join(root, 'items'), join(root, 'library', 'test')]) mkdirSync(path, { recursive: true });
  const ids = ['def-qftx-supersymmetry-fluctuation-complex', 'thm-context', 'thm-central-current', 'thm-ordinary-change', 'thm-ordinary-keep'];
  const source = (id, text = 'A supplied datum with raw N=1.') => `---\nid: ${id}\nkind: definition\nstatus: draft\ndeps: [${id==='thm-context'?ids[0]:''}]\nsources:\n  references: []\n---\n## Definition\n${text}\n`;
  for (const id of ids) writeFileSync(join(root, 'items', id + '.md'), source(id));
  if(realContexts){
    symlinkSync(join(import.meta.dirname,'..'),join(root,'tools'),'dir');
    mkdirSync(join(root,'briefs'));writeFileSync(join(root,'briefs','judge-conventions.txt'),'Exact synthetic fixture conventions.\n');
    const path=join(root,'items',ids[1]+'.md');writeFileSync(path,readFileSync(path,'utf8').replace('deps: []',`deps: [${ids[0]}]`));
  }
  if (nativeBaseline) writeFileSync(join(root, 'items', ids[4] + '.md'), `---\nid: ${ids[4]}\nkind: definition\nstatus: draft\ndeps: []\n---\n## Definition\nAn unchanged datum.\n`);
  const pagePath = join(root, 'library/test/page-one.md'); writeFileSync(pagePath, '---\npage: page-one\ntitle: Page one\n---\nA complete original page.\n');
  const manifest = [{ id: 'page-one', category: 'test', items: ids.map(id => ({ id, statement: 'A supplied datum with raw N=1.' })) }];
  const metadataPath = join(root, 'research', run + '-batch-48.pages.json'); save(metadataPath, manifest);
  save(join(dir, 'frontier.json'), freezeFrontier({ run, batches: [{ id: '48', items: ids }] }));
  const contextBuilder = realContexts?currencyContexts:(root, selection) => Object.fromEntries(selection.map(id => {
    const text = readFileSync(join(root, 'items', id + '.md'), 'utf8');
    const other = id === 'thm-context' ? readFileSync(join(root, 'items', ids[0] + '.md'), 'utf8').split('## Definition')[1] : 'unchanged exact other prompt inputs';
    return [id, { item_sha256: itemHashJudge(text), context_sha256: digest({ text, other }), other_prompt_inputs_sha256: raw(other) }];
  }));
  const initial = contextBuilder(root, ids), beforeTexts = Object.fromEntries(ids.map(id => [id, readFileSync(join(root, 'items', id + '.md'), 'utf8')]));
  const verdicts = ids.map(id => ({ id, model: 'gpt-6-luna', keep: true, reason: 'Historical fixture verdict.', item_sha256: initial[id].item_sha256, context_sha256: initial[id].context_sha256, at: '2026-10-01T00:00:00Z' }));
  const ledgerPath = join(root, 'research', run + '-judge.jsonl'), attemptsPath = join(root, 'research', run + '-judge-attempts.jsonl');
  writeFileSync(ledgerPath, verdicts.map(row => JSON.stringify(row)).join('\n') + '\n'); writeFileSync(attemptsPath, '');
  writeFileSync(join(root,'research',run+'-judge-adjudications.jsonl'),'');writeFileSync(join(root,'research','defect-ledger.jsonl'),'');
  save(join(dir, 'step4-verdicts.json'), verdicts);
  save(join(dir, 'initial-1.json'), { version: 2, run, phase: 'initial', round: 1, judge_model: 'gpt-6-luna', input_evidence: { [join(dir, 'step4-verdicts.json')]: raw(readFileSync(join(dir, 'step4-verdicts.json'))) } });
  const payload = { version: 2, run, phase: 'gate', round: 1, items: ids.slice(0, 3).map(id => ({ id, ...initial[id], guard_sha256: itemHashGuard(beforeTexts[id]) })), creations: [],
    evidence: { [metadataPath]: raw(readFileSync(metadataPath)),[join(root,'research',run+'-judge-adjudications.jsonl')]:raw('') } };
  const certificate = { ...payload, sha256: digest(payload) }; save(join(dir, 'certification-gate-1.json'), certificate); save(join(dir, 'certification.json'), certificate);
  git(['add', 'physics']); git(['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.org', 'commit', '-qm', 'immutable fixture preimage']);
  const preimageCommit = git(['rev-parse', 'HEAD']);
  for (const id of [ids[0], ids[3]]) writeFileSync(join(root, 'items', id + '.md'), source(id, 'A supplied datum with raw $N=1$.'));
  manifest[0].items[0].statement = 'A supplied datum with raw $N=1$.'; save(metadataPath, manifest);
  const applyStamps = selection => {
    const stamp = 'verification:\n  judge:\n    model: "gpt-6-luna"\n    verdict: pass\n    date: 2026-10-25\n';
    for (const id of selection) { const path = join(root, 'items', id + '.md'), text = readFileSync(path, 'utf8');
      writeFileSync(path, text.includes('\nsources:\n') ? text.replace('\nsources:\n', '\n' + stamp + 'sources:\n') : text.replace('\n---\n## Definition', '\n' + stamp + '---\n## Definition')); }
  };
  if (nativeBaseline) applyStamps([ids[4]]);
  const reconciliationPath = relative(root, join(supervision, 'metadata-reconciliation.json'));
  const reconciliation = { run, reviewer: '/root', preimage_commit: preimageCommit, scientific_reviews_rehashed: false, old_verdicts_changed: false,
    scope: [ids[0], ids[3]].map(id => ({ path: 'items/' + id + '.md', before_raw_sha256: raw(beforeTexts[id]), before_guard: itemHashGuard(beforeTexts[id]), after_guard: itemHashGuard(readFileSync(join(root, 'items', id + '.md'), 'utf8')) })),
    metadata_mutations: [{ path: relative(root, metadataPath), subject: ids[0], field: 'statement' }] }; save(join(root, reconciliationPath), reconciliation);
  const authorPaths = Array.from({ length: 5 }, (_, index) => { const path = relative(root, join(supervision, 'author-' + index + '.json')); save(join(root, path), { run, group: index, unresolved: [] }); return path; });
  const renderingCache = relative(root, join(supervision, 'failed-rendering.json'));
  const cache = { fingerprint: 'a'.repeat(64), errors: [{ code: 'raw-math-equation' }], inputs: nativeBaseline ? [[join(root, 'items', ids[4] + '.md'), raw(readFileSync(join(root, 'items', ids[4] + '.md')))]] : [] }; save(join(root, renderingCache), cache);
  save(join(state, 'state.json'), { run, stage: '6-final-validation-v3', stages: { '6-final-validation-v3': { gatesPassedAt: null } },
    dispatches: { prep: { role: 'tool', stage: '6-final-validation-v3', label: 'step6-prepare-final-v3', startedAt: new Date().toISOString() } } });
  let request = makeStep6CurrencyCandidate(root, run, { preimageCommit, renderingCache, reconciliationPath, authorPaths, contextBuilder });
  const requestPath = join(supervision, 'step6-currency-authorization-fixture.json'), pointerPath = join(state, 'step6-currency-request.json');
  const advertise = () => { save(requestPath, request); save(pointerPath, { version: 1, run, request: { path: relative(root, requestPath), sha256: raw(readFileSync(requestPath)) } }); }; advertise();
  const authorityPath = join(root, 'research', run + '-step6-currency-authority.json');
  let calls = 0;
  const sweep = ({ ids, contexts, argv }) => {
    calls++; assert.ok(argv.includes('--strict-context')); assert.deepEqual(argv.slice(argv.indexOf('--lineup') + 1, argv.indexOf('--lineup') + 4), ['luna', '--effort', 'max']);
    for (const id of ids) {
      appendFileSync(ledgerPath, JSON.stringify({ id, model: 'gpt-6-luna', keep: true, reason: 'Synthetic current response in a test ledger.', item_sha256: contexts[id].item_sha256, context_sha256: contexts[id].context_sha256, at: new Date().toISOString() }) + '\n');
      appendFileSync(attemptsPath, JSON.stringify({ id, model: 'gpt-6-luna', context_sha256: contexts[id].context_sha256, outcome: 'response', status: 0, has_content: true, raw_bytes: 100, at: new Date().toISOString() }) + '\n');
    }
    return { status: 0 };
  };
  const resealAuthority = mutate => { const saved = JSON.parse(readFileSync(authorityPath)); mutate(saved); const { sha256, ...body } = saved; save(authorityPath, { ...body, sha256: digest(body) }); };
  const begin = options => beginStep6CurrencyRepair(root, run, { contextBuilder, sweep, ...options });
  const finish = () => finishStep6CurrencyRepair(root, run, { contextBuilder });
  const verify = () => verifyStep6CurrencyAuthority(root, run, certificate, { contextBuilder });
  return { root, run, ids, dir, state, supervision, certificate, beforeTexts, metadataPath, pagePath, ledgerPath, attemptsPath, request, requestPath, pointerPath, authorityPath, contextBuilder,
    save, advertise, begin, finish, verify, applyStamps, resealAuthority, calls: () => calls };
}

test('native current judgments retain exact old coverage and survive stamps, retries and ignored-state cleanup', t => {
  const f = fixture(t), originalCert = readFileSync(join(f.dir, 'certification-gate-1.json'));
  assert.deepEqual(f.request.scope, { targets: [f.ids[0], f.ids[1], f.ids[3]].sort(), central_current: [f.ids[2]], ordinary_unchanged: [f.ids[4]] });
  assert.throws(() => verifyCertification(f.root, f.run), /evidence changed/);
  verifyStep6HistoricalMetadata(f.root, f.run, f.certificate);
  assert.throws(f.verify);
  const judged = f.begin(); assert.equal(judged.status, 'judged'); assert.equal(f.calls(), 1);
  assert.equal(f.begin().status, 'judged'); assert.equal(f.calls(), 1);
  assert.throws(f.verify, /incomplete/);
  f.applyStamps(f.request.scope.targets); const complete = f.finish(); assert.equal(complete.status, 'complete');
  assert.ok(complete.judgments.some(row => row.after_stamp_context_sha256 !== row.verdict.row.context_sha256));
  assert.equal(f.begin().status, 'complete'); assert.equal(f.calls(), 1);
  assert.equal(f.verify().sha256, complete.sha256);
  assert.equal(currentStep5Certification(f.certificate, f.ids[0], readFileSync(join(f.root, 'items', f.ids[0] + '.md'), 'utf8'), f.contextBuilder(f.root, [f.ids[0]])[f.ids[0]].context_sha256), null);
  assert.deepEqual(readFileSync(join(f.dir, 'certification-gate-1.json')), originalCert);
  assert.ok(step6CurrencyInputPaths(f.root, f.run).includes(`research/${f.run}-step6-currency-authority.json`));
  assert.equal(step6CurrencyPending(f.root, f.run), false);
  rmSync(join(f.root, '.physics-autopilot'), { recursive: true });
  assert.equal(f.verify().status, 'complete');
  verifyStep6HistoricalMetadata(f.root, f.run, f.certificate);
});

function scientificFixture(t,options){
  const f=fixture(t,options),append=(path,row)=>appendFileSync(path,JSON.stringify({...row,at:new Date().toISOString()})+'\n');
  assert.throws(()=>f.begin({sweep:({ids,contexts})=>{for(const id of ids){append(f.ledgerPath,{id,model:'gpt-6-luna',keep:id===f.ids[1],reason:'Actual fixture rejection',...contexts[id]});
    append(f.attemptsPath,{id,model:'gpt-6-luna',context_sha256:contexts[id].context_sha256,outcome:'response',status:0,has_content:true,raw_bytes:100});}return{status:0};}}),/rejected/);
  const blocked=readFileSync(f.authorityPath),sourcePath='items/'+f.ids[0]+'.md',path=join(f.root,sourcePath),before=readFileSync(path,'utf8');
  writeFileSync(path,before.replace('raw $N=1$.','raw $N=1$ with a specified finite carrier.'));
  const after=readFileSync(path,'utf8'),metadata=JSON.parse(readFileSync(f.metadataPath));metadata[0].items[0].statement=after.split('## Definition\n')[1].trim();f.save(f.metadataPath,metadata);
  const reports=Array.from({length:7},(_,i)=>{const path=relative(f.root,join(f.supervision,'science-'+i+'.json'));f.save(join(f.root,path),{run:f.run,findings:[{id:f.ids[0],review:'Confirmed and repaired.'},{id:f.ids[3],review:'False positive, exact source unchanged.'}],consumers:[{id:f.ids[1],review:'Checked affected context.'}]});return path;});
  const now=f.contextBuilder(f.root,f.ids),inputs={reports,decisions:[
    {id:f.ids[0],outcome:'confirmed_fatal',defect_type:'logic',reason:'Missing carrier repaired.',uncertain:false,familiar:true,source_urls:[],report_path:reports[0],report_pointer:'/findings/0',ledger_row:{defect_id:'demo-science-fatal',class:'accuracy',subclass:'missing-hypothesis',severity:'fatal',location:'definition',disposition:'fixed',correction:'Specified finite carrier.'}},
    {id:f.ids[3],outcome:'false_positive',reason:'Exact current definition already includes the required premise.',uncertain:false,familiar:true,source_urls:[],report_path:reports[1],report_pointer:'/findings/1'}],
    reconciliation:{run:f.run,reviewer:'/root',source_changes:[{path:sourcePath,before_guard:itemHashGuard(before),after_guard:itemHashGuard(after),before_judge_sha256:itemHashJudge(before),after_judge_sha256:itemHashJudge(after),interface_changed:true,report_path:reports[0],report_pointer:'/findings/0'}],
      metadata_changes:[{path:relative(f.root,f.metadataPath),changed_pointers:[]}],consumer_decisions:[{id:f.ids[1],suppliers:[f.ids[0]],disposition:'unaffected',post_guard:itemHashGuard(readFileSync(join(f.root,'items',f.ids[1]+'.md'),'utf8')),post_judge_sha256:now[f.ids[1]].item_sha256,reason:'Actual focused consumer check.',report_path:reports[0],report_pointer:'/consumers/0',uncertain:false}]}};
  const build=()=>makeStep6ScientificCurrencyCandidate(f.root,f.run,{...inputs,contextBuilder:f.contextBuilder});
  const advertise=document=>{f.save(f.requestPath,document);f.save(f.pointerPath,{version:1,run:f.run,request:{path:relative(f.root,f.requestPath),sha256:raw(readFileSync(f.requestPath))}});};
  return{...f,inputs,build,advertiseScientific:advertise,blocked};
}

test('scientific continuation preserves blocked history, accepts exact actual false-positive adjudication and judges repaired contexts',t=>{
  const f=scientificFixture(t,{realContexts:true}),d=f.build();f.advertiseScientific(d);
  const sweep=({ids,contexts})=>{for(const id of ids){if(id===f.ids[3])continue;
    appendFileSync(f.ledgerPath,JSON.stringify({id,model:'gpt-6-luna',keep:true,reason:'Real test provider response',...contexts[id]})+'\n');
    appendFileSync(f.attemptsPath,JSON.stringify({id,model:'gpt-6-luna',context_sha256:contexts[id].context_sha256,outcome:'response',status:0,has_content:true,raw_bytes:100})+'\n');}return{status:0};};
  const judged=f.begin({sweep});assert.equal(judged.status,'judged');assert.equal(judged.version,2);
  assert.deepEqual(readFileSync(join(f.root,d.predecessor.path)),f.blocked);
  const fp=judged.judgments.find(row=>row.id===f.ids[3]);assert.equal(fp.verdict.row.keep,false);assert.equal(fp.adjudication.row.outcome,'false_positive');
  f.applyStamps(d.scope.targets.filter(id=>id!==f.ids[3]));f.finish();assert.equal(f.verify().status,'complete');
  for(const args of [ ['defect-ledger.mjs','validate','--run',f.run],
    ['defect-ledger.mjs','render'],
    ['defect-ledger.mjs','check','--run',f.run,'--adjudications',`research/${f.run}-judge-adjudications.jsonl`,'--frontier',relative(f.root,join(f.dir,'frontier.json'))],
    ['level-coverage.mjs','--judge-only','--verify-current-context','--run',f.run,'--judge-ledger',`research/${f.run}-judge.jsonl`,'--judge-adjudications',`research/${f.run}-judge-adjudications.jsonl`,relative(f.root,f.metadataPath)] ]){
    const [script,...argv]=args,result=spawnSync(process.execPath,[join(import.meta.dirname,script),...argv],{cwd:f.root,encoding:'utf8',env:{...process.env,PHYSICS_REPO:f.root,JUDGE_LINEUP:'luna'}});
    assert.equal(result.status,0,result.stdout+'\n'+result.stderr);
  }
  rmSync(join(f.root,'.physics-autopilot'),{recursive:true});assert.equal(f.verify().status,'complete');verifyStep6HistoricalMetadata(f.root,f.run,f.certificate);
});

for(const[name,mutate]of[
  ['missing actual failure disposition',f=>f.inputs.decisions.pop()],
  ['duplicate actual failure disposition',f=>f.inputs.decisions[1]=f.inputs.decisions[0]],
  ['unbound report locator',f=>f.inputs.decisions[0].report_pointer='/missing'],
  ['missing affected consumer',f=>f.inputs.reconciliation.consumer_decisions=[]],
  ['unlisted page change',f=>appendFileSync(f.pagePath,'Unauthorized page prose.\n')],
  ['false pre-science guard',f=>f.inputs.reconciliation.source_changes[0].before_guard='0'.repeat(64)],
])test('scientific continuation rejects '+name,t=>{const f=scientificFixture(t);mutate(f);assert.throws(f.build);});

test('scientific continuation never accepts a new rejection on a repaired context',t=>{
  const f=scientificFixture(t);f.advertiseScientific(f.build());assert.throws(()=>f.begin({sweep:({ids,contexts})=>{for(const id of ids){if(id===f.ids[3])continue;
    appendFileSync(f.ledgerPath,JSON.stringify({id,model:'gpt-6-luna',keep:false,...contexts[id]})+'\n');}return{status:0};}}),/rejected/);
  assert.equal(JSON.parse(readFileSync(f.authorityPath)).status,'blocked');
});

function secondScientificFixture(t,options){
  const f=scientificFixture(t,options),first=f.build();f.advertiseScientific(first);
  const respond=(keep)=>({ids,contexts})=>{for(const id of ids){if(id===f.ids[3])continue;
    appendFileSync(f.ledgerPath,JSON.stringify({id,model:'gpt-6-luna',keep:keep(id),reason:'Actual second fixture response',...contexts[id]})+'\n');
    appendFileSync(f.attemptsPath,JSON.stringify({id,model:'gpt-6-luna',context_sha256:contexts[id].context_sha256,outcome:'response',status:0,has_content:true,raw_bytes:100})+'\n');}return{status:0};};
  assert.throws(()=>f.begin({sweep:respond(id=>id!==f.ids[0])}),/rejected/);
  const blockedFirst=readFileSync(f.authorityPath),path='items/'+f.ids[0]+'.md',sourcePath=join(f.root,path),before=readFileSync(sourcePath,'utf8');
  writeFileSync(sourcePath,before.replace('specified finite carrier','specified nonempty finite carrier'));
  const after=readFileSync(sourcePath,'utf8'),metadata=JSON.parse(readFileSync(f.metadataPath));metadata[0].items[0].statement=after.split('## Definition\n')[1].trim();f.save(f.metadataPath,metadata);
  const report=relative(f.root,join(f.supervision,'science-r2.json'));f.save(join(f.root,report),{run:f.run,findings:[{id:f.ids[0],review:'Actual fresh defect repaired.'}],consumers:[{id:f.ids[1],review:'Rechecked changed supplier.'}]});
  const inputs={reports:[report],decisions:[{...f.inputs.decisions[0],report_path:report,report_pointer:'/findings/0',reason:'Nonempty carrier now supplied.',ledger_row:{...f.inputs.decisions[0].ledger_row,defect_id:'demo-science-fatal-r2',correction:'Specified nonempty finite carrier.'}}],
    reconciliation:{run:f.run,reviewer:'/root',source_changes:[{path,before_guard:itemHashGuard(before),after_guard:itemHashGuard(after),before_judge_sha256:itemHashJudge(before),after_judge_sha256:itemHashJudge(after),interface_changed:true,report_path:report,report_pointer:'/findings/0'}],
      metadata_changes:f.inputs.reconciliation.metadata_changes,consumer_decisions:f.inputs.reconciliation.consumer_decisions.map(row=>({...row,report_path:report,report_pointer:'/consumers/0'}))}};
  const build=()=>makeStep6ScientificCurrencyCandidate(f.root,f.run,{...inputs,contextBuilder:f.contextBuilder});
  return{...f,inputs,build,first,blockedFirst,respond};
}

test('second scientific round preserves both blocked authorities and inherits only genuine exact adjudications',t=>{
  const f=secondScientificFixture(t,{realContexts:true}),d=f.build();assert.equal(d.scientific_round,2);assert.equal(d.authors.length,1);
  assert.equal(d.decisions.length,1);assert.equal(d.inherited_adjudications.length,1);f.advertiseScientific(d);
  const judged=f.begin({sweep:f.respond(()=>true)});assert.equal(judged.status,'judged');
  assert.deepEqual(readFileSync(join(f.root,d.predecessor.path)),f.blockedFirst);assert.deepEqual(readFileSync(join(f.root,f.first.predecessor.path)),f.blocked);
  const inherited=judged.judgments.find(row=>row.id===f.ids[3]);assert.equal(inherited.verdict.row.keep,false);
  assert.deepEqual(inherited.adjudication,d.inherited_adjudications[0].binding);
  f.applyStamps(d.scope.targets.filter(id=>id!==f.ids[3]));f.finish();assert.equal(f.verify().status,'complete');
  const adjudications=readFileSync(join(f.root,'research',f.run+'-judge-adjudications.jsonl'),'utf8').trim().split('\n').map(JSON.parse);
  assert.equal(adjudications.length,3);assert.equal(adjudications.filter(row=>row.outcome==='false_positive').length,1);
  const selected=step6CurrencyInputPaths(f.root,f.run);assert.ok(selected.includes(d.predecessor.path));assert.ok(selected.includes(f.first.predecessor.path));
  rmSync(join(f.root,'.physics-autopilot'),{recursive:true});assert.equal(f.verify().status,'complete');verifyStep6HistoricalMetadata(f.root,f.run,f.certificate);
});

for(const[name,mutate]of[
  ['noncontiguous scientific episode',d=>d.scientific_round=4],
  ['dropped inherited adjudication',d=>d.inherited_adjudications=[]],
  ['forged inherited context',d=>d.inherited_adjudications[0].rejected_tuple.context_sha256='0'.repeat(64)],
  ['forged old decision boundary',d=>d.adjudications_baseline.rows--],
  ['old pre-render source guard',d=>d.reconciliation.source_changes[0].before_guard='0'.repeat(64)],
])test('second scientific round rejects '+name,t=>{const f=secondScientificFixture(t),d=f.build();mutate(d);f.advertiseScientific(d);assert.throws(f.begin);});

test('a new round-2 rejection blocks and needs explicit per-issue provenance to continue',t=>{
  const f=secondScientificFixture(t),d=f.build();f.advertiseScientific(d);assert.throws(()=>f.begin({sweep:f.respond(id=>id!==f.ids[0])}),/rejected/);
  assert.throws(f.build,/missing explicit per-escalation repair bound/);
});

function laterScientificFixture(t,options){
  const f=secondScientificFixture(t,options),second=f.build();f.advertiseScientific(second);
  assert.throws(()=>f.begin({sweep:f.respond(id=>id!==f.ids[0])}),/rejected/);
  const blockedSecond=readFileSync(f.authorityPath),path='items/'+f.ids[0]+'.md',absolute=join(f.root,path),before=readFileSync(absolute,'utf8');
  writeFileSync(absolute,before.replace('specified nonempty finite carrier','specified nonempty finite carrier with a selected basepoint'));
  const after=readFileSync(absolute,'utf8'),metadata=JSON.parse(readFileSync(f.metadataPath));metadata[0].items[0].statement=after.split('## Definition\n')[1].trim();f.save(f.metadataPath,metadata);
  const report=relative(f.root,join(f.supervision,'science-episode3.json'));f.save(join(f.root,report),{run:f.run,findings:[{id:f.ids[0],review:'New independent basepoint issue, distinct from finite and nonempty carrier conditions.'}],consumers:[{id:f.ids[1],review:'Rechecked actual changed supplier.'}]});
  const history=step6ScientificEscalationHistory(f.root,f.run),sameItem=history.filter(row=>row.id===f.ids[0]);
  const decision={...f.inputs.decisions[0],escalation_id:'demo-new-basepoint-issue',repair_cycle:1,
    prior_same_item:sameItem.map(old=>({authorization_sha256:old.authorization_sha256,rejected_tuple:old.rejected_tuple,relation:'distinct_issue',reason:'Basepoint selection is distinct from the earlier finite and nonempty carrier conditions.',report_path:report,report_pointer:'/findings/0'})),
    reason:'Actual independent basepoint issue repaired.',report_path:report,report_pointer:'/findings/0',ledger_row:{...f.inputs.decisions[0].ledger_row,defect_id:'demo-basepoint-episode3',correction:'Supplied selected basepoint.'}};
  const inputs={reports:[report],decisions:[decision],reconciliation:{run:f.run,reviewer:'/root',source_changes:[{path,before_guard:itemHashGuard(before),after_guard:itemHashGuard(after),before_judge_sha256:itemHashJudge(before),after_judge_sha256:itemHashJudge(after),interface_changed:true,report_path:report,report_pointer:'/findings/0'}],
    metadata_changes:f.inputs.reconciliation.metadata_changes,consumer_decisions:f.inputs.reconciliation.consumer_decisions.map(row=>({...row,report_path:report,report_pointer:'/consumers/0'}))}};
  return{...f,second,blockedSecond,history,sameItem,inputs,build:()=>makeStep6ScientificCurrencyCandidate(f.root,f.run,{...inputs,contextBuilder:f.contextBuilder})};
}

test('distinct new escalation continues past two episodes with full immutable history and real current judgments',t=>{
  const f=laterScientificFixture(t,{realContexts:true}),d=f.build();assert.equal(d.scientific_round,3);assert.equal(f.sameItem.length,2);
  assert.ok(f.sameItem.every(row=>row.escalation_id.startsWith('legacy-step6-')&&row.repair_cycle===1));
  f.advertiseScientific(d);const judged=f.begin({sweep:f.respond(()=>true)});assert.equal(judged.status,'judged');
  assert.deepEqual(readFileSync(join(f.root,d.predecessor.path)),f.blockedSecond);assert.deepEqual(readFileSync(join(f.root,f.second.predecessor.path)),f.blockedFirst);
  f.applyStamps(d.scope.targets.filter(id=>id!==f.ids[3]));f.finish();assert.equal(f.verify().status,'complete');
  const history=step6ScientificEscalationHistory(f.root,f.run),newIssue=history.find(row=>row.escalation_id==='demo-new-basepoint-issue');assert.equal(newIssue.repair_cycle,1);
  assert.ok(step6CurrencyInputPaths(f.root,f.run).includes(f.first.predecessor.path));
  rmSync(join(f.root,'.physics-autopilot'),{recursive:true});assert.equal(f.verify().status,'complete');verifyStep6HistoricalMetadata(f.root,f.run,f.certificate);
});

test('same escalation permits cycle 2 but rejects a third repair cycle without resetting identity',t=>{
  const f=laterScientificFixture(t),issue=f.sameItem.at(-1);f.inputs.decisions[0].escalation_id=issue.escalation_id;f.inputs.decisions[0].repair_cycle=2;
  f.inputs.decisions[0].prior_same_item.at(-1).relation='same_issue';
  const d=f.build();f.advertiseScientific(d);assert.throws(()=>f.begin({sweep:f.respond(id=>id!==f.ids[0])}),/rejected/);
  const history=step6ScientificEscalationHistory(f.root,f.run).filter(row=>row.id===f.ids[0]);
  f.inputs.decisions[0].prior_same_item=history.map(old=>({authorization_sha256:old.authorization_sha256,rejected_tuple:old.rejected_tuple,
    relation:old.escalation_id===issue.escalation_id?'same_issue':'distinct_issue',reason:'Actual explicit issue comparison.',report_path:f.inputs.reports[0],report_pointer:'/findings/0'}));
  assert.throws(f.build,/limited to two review-repair cycles/);
});

for(const[name,mutate]of[
  ['missing prior same-item comparison',f=>f.inputs.decisions[0].prior_same_item.pop()],
  ['duplicate prior comparison',f=>f.inputs.decisions[0].prior_same_item[1]=f.inputs.decisions[0].prior_same_item[0]],
  ['new-ID reset of the same issue',f=>f.inputs.decisions[0].prior_same_item[0].relation='same_issue'],
  ['reused legacy ID as a new issue',f=>f.inputs.decisions[0].escalation_id=f.sameItem[0].escalation_id],
  ['cycle jump for an unrecognized issue',f=>f.inputs.decisions[0].repair_cycle=2],
  ['comparison without actual report evidence',f=>f.inputs.decisions[0].prior_same_item[0].report_pointer='/absent'],
  ['missing old authority archive',f=>rmSync(join(f.root,f.first.predecessor.path))],
])test('per-escalation continuation rejects '+name,t=>{const f=laterScientificFixture(t);mutate(f);assert.throws(f.build);});

test('round-2 context drift cannot inherit an old false-positive acceptance',t=>{
  const f=secondScientificFixture(t),path='items/'+f.ids[3]+'.md',absolute=join(f.root,path),before=readFileSync(absolute,'utf8');
  writeFileSync(absolute,before+'A newly specified condition.\n');const after=readFileSync(absolute,'utf8');
  f.inputs.reconciliation.source_changes.push({path,before_guard:itemHashGuard(before),after_guard:itemHashGuard(after),before_judge_sha256:itemHashJudge(before),after_judge_sha256:itemHashJudge(after),interface_changed:true,
    report_path:f.inputs.reports[0],report_pointer:'/findings/0'});
  f.advertiseScientific(f.build());assert.throws(()=>f.begin({sweep:args=>{f.respond(()=>true)(args);const id=f.ids[3];
    appendFileSync(f.ledgerPath,JSON.stringify({id,model:'gpt-6-luna',keep:false,reason:'A genuinely new current rejection',...args.contexts[id]})+'\n');
    appendFileSync(f.attemptsPath,JSON.stringify({id,model:'gpt-6-luna',context_sha256:args.contexts[id].context_sha256,outcome:'response',status:0,has_content:true,raw_bytes:100})+'\n');return{status:0};}}),/rejected/);
  assert.equal(JSON.parse(readFileSync(f.authorityPath)).failures.some(row=>row.id===f.ids[3]),true);
});

test('already observed native stamp-only Guard edge is accepted only for an unchanged ordinary keep bound by failed-render inputs', t => {
  const f = fixture(t, { nativeBaseline: true }); assert.equal(f.request.unlisted_native_stamps.length, 1);
  assert.notEqual(itemHashGuard(f.beforeTexts[f.ids[4]]), itemHashGuard(readFileSync(join(f.root, 'items', f.ids[4] + '.md'), 'utf8')));
  f.begin(); f.applyStamps(f.request.scope.targets); f.finish(); assert.equal(f.verify().status, 'complete');
});

for (const [name, mutate] of [
  ['duplicate judgment replaces another target', f => f.resealAuthority(a => { a.judgments[1] = a.judgments[0]; })],
  ['missing native ledger-prefix set', f => f.resealAuthority(a => { a.ledger_prefixes = []; })],
  ['duplicate native ledger-prefix binding', f => f.resealAuthority(a => { a.ledger_prefixes[1] = a.ledger_prefixes[0]; })],
  ['removed current provider row', f => { const lines = readFileSync(f.ledgerPath, 'utf8').trimEnd().split('\n'); lines.pop(); writeFileSync(f.ledgerPath, lines.join('\n') + '\n'); }],
  ['changed provider reason', f => { const lines = readFileSync(f.ledgerPath, 'utf8').trimEnd().split('\n'); const row = JSON.parse(lines.at(-1)); row.reason = 'Forged acceptance'; lines[lines.length - 1] = JSON.stringify(row); writeFileSync(f.ledgerPath, lines.join('\n') + '\n'); }],
  ['later current ordinary rejection', f => { const now = f.contextBuilder(f.root, [f.ids[4]])[f.ids[4]]; appendFileSync(f.ledgerPath, JSON.stringify({ id: f.ids[4], model: 'gpt-6-luna', keep: false, ...now }) + '\n'); }],
  ['later current target rejection', f => { const now = f.contextBuilder(f.root, [f.ids[0]])[f.ids[0]]; appendFileSync(f.ledgerPath, JSON.stringify({ id: f.ids[0], model: 'gpt-6-luna', keep: false, ...now }) + '\n'); }],
  ['unlisted page body change', f => appendFileSync(f.pagePath, 'Unlicensed page edit.\n')],
  ['unlisted ordinary body change', f => appendFileSync(join(f.root, 'items', f.ids[4] + '.md'), 'Unlicensed body.\n')],
  ['additional historical metadata leaf', f => { const doc = JSON.parse(readFileSync(f.metadataPath)); doc[0].items[1].statement = 'Another change'; f.save(f.metadataPath, doc); }],
  ['stamped proof edit', f => appendFileSync(join(f.root, 'items', f.ids[0] + '.md'), 'Extra proof assertion.\n')],
]) test('current authority rejects ' + name, t => {
  const f = fixture(t); f.begin(); f.applyStamps(f.request.scope.targets); f.finish(); mutate(f); assert.throws(f.verify);
});

test('fresh rejecting and missing provider rows block before any stamp authority', t => {
  for (const mode of ['reject', 'missing']) {
    const f = fixture(t);
    assert.throws(() => f.begin({ sweep: ({ ids, contexts }) => {
      if (mode === 'reject') for (const id of ids) appendFileSync(f.ledgerPath, JSON.stringify({ id, model: 'gpt-6-luna', keep: false, ...contexts[id], at: new Date().toISOString() }) + '\n');
      return { status: 0 };
    } }), /rejected or are incomplete/);
    assert.equal(JSON.parse(readFileSync(f.authorityPath)).status, 'blocked'); assert.throws(f.verify, /incomplete/);
  }
});

test('a request cannot omit a target or traverse away from its exact advertisement directory', t => {
  const f = fixture(t); f.request.scope.ordinary_unchanged.push(f.request.scope.targets.pop()); f.advertise(); assert.throws(f.begin, /target scope changed|original coverage/);
  f.save(f.pointerPath, { version: 1, run: f.run, request: { path: `.physics-autopilot/${f.run}/supervision/step6-currency-authorization-../outside.json`, sha256: raw(readFileSync(f.requestPath)) } });
  assert.throws(f.begin, /invalid Root advertisement/);
});

test('failed rendering-cache baseline is required for an existing native Guard edge', t => {
  const f = fixture(t, { nativeBaseline: true }); f.request.unlisted_native_stamps[0].cache_raw_sha256 = 'b'.repeat(64); f.advertise();
  assert.throws(f.begin, /unlisted source change/);
});

test('public consumers require native completion then use fresh real-context Luna rows without changing the old central predicate',t=>{
  const f=fixture(t,{realContexts:true});
  assert.throws(()=>loadStep5ClosureCertification(f.root,f.run));
  f.begin();assert.throws(()=>loadStep5ClosureCertification(f.root,f.run),/incomplete/);
  f.applyStamps(f.request.scope.targets);f.finish();
  const certificate=loadStep5ClosureCertification(f.root,f.run);
  assert.deepEqual(certificate,f.certificate);
  assert.equal(currentStep5Certification(certificate,f.ids[0],readFileSync(join(f.root,'items',f.ids[0]+'.md'),'utf8'),f.contextBuilder(f.root,[f.ids[0]])[f.ids[0]].context_sha256),null);
  const closure=spawnSync(process.execPath,[join(import.meta.dirname,'level-coverage.mjs'),'--judge-only','--verify-current-context','--run',f.run,
    '--judge-ledger',`research/${f.run}-judge.jsonl`,relative(f.root,f.metadataPath)],{cwd:f.root,encoding:'utf8',env:{...process.env,PHYSICS_REPO:f.root,JUDGE_LINEUP:'luna'}});
  assert.equal(closure.status,0,closure.stderr+'\n'+closure.stdout);
  assert.match(closure.stdout,/0 need rejudge/);
  assert.equal(f.calls(),1);
});

test('only the matching live native prepare dispatch can apply stamps between genuine judgments and completed authority',t=>{
  const f=fixture(t),a=f.begin(),saved=process.env.PRESTIGE_STEP6_CURRENCY_STAMP;
  try{
    process.env.PRESTIGE_STEP6_CURRENCY_STAMP=a.sha256;
    const verify=()=>verifyStep6CurrencyForStamps(f.root,f.run,f.certificate,{contextBuilder:f.contextBuilder});verify();
    const statePath=join(f.state,'state.json'),original=JSON.parse(readFileSync(statePath));
    for(const patch of [{run:'foreign'},{stage:'5.9-repair'},{dispatches:{...original.dispatches,writer:{role:'alpha',startedAt:'now'}}},
      {dispatches:{prep:{...original.dispatches.prep,stage:'5.9-repair'}}}]){
      f.save(statePath,{...original,...patch});assert.throws(verify,/incomplete/);
    }
    f.save(statePath,original);delete process.env.PRESTIGE_STEP6_CURRENCY_STAMP;assert.throws(verify,/incomplete/);
  }finally{if(saved===undefined)delete process.env.PRESTIGE_STEP6_CURRENCY_STAMP;else process.env.PRESTIGE_STEP6_CURRENCY_STAMP=saved;}
});

test('durable report projections retain checks and limits without copying source inventories or long source fragments',()=>{
  const source='A source paragraph. '.repeat(100),report={run:'demo',checks:[{exit_code:0,result:'passed'}],limits:'No independent mathematical acceptance.',
    source_checks:[{math:[{value:source}],diagrams:[{source}]}],edits:[{before:source,after:source+'$x$'}]};
  const compact=compactCurrencyAuthorReport(report);assert.deepEqual(compact.checks,report.checks);assert.equal(compact.limits,report.limits);
  assert.equal(compact.source_checks.kind,'source-inventory-reference');assert.equal(compact.edits[0].before.sha256,raw(source));
  assert.equal(JSON.stringify(compact).includes(source),false);
});
