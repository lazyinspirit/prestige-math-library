// All generated claims/checks/dispatches here are synthetic test fixtures.
// Fixtures model the two-sided-feasibility correction without asserting science.
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync,symlinkSync} from 'node:fs';
import {join,resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {publishedMaintenance} from './step5-published-maintenance.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {freezeFrontier,readLibraryItems} from './step5-rounds.mjs';
import {validateReports,collect,closeEmptyAdjudication,digest,workerReport,reviewContextHashes,reviewMatchesCurrent} from './step5-workflow.mjs';
import {syncMaintenance,prepareMaintenance,maintenanceStatus} from './consumer-maintenance.mjs';
import {MODELS} from './models.mjs';
import {tmpdir} from 'node:os';

const actualId='pthm-td-intensive-coexistence-conditions',run='fixture';
const json=(file,value)=>{mkdirSync(dirname(file),{recursive:true});writeFileSync(file,JSON.stringify(value,null,2)+'\n');};
const text=(id,status,body,deps=[])=>`---\nid: ${id}\nkind: theorem\nstatus: ${status}\ndeps: [${deps.join(', ')}]\n---\n## Statement\n${body}\n`;
const guards=root=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,itemHashGuard(readFileSync(join(root,'items',row.id+'.md'),'utf8'))]));
function fixture(t){
  const root=mkdtempSync(join(tmpdir(),'step5-published-maintenance-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  const dir=join(root,'research',run+'-step5-v2');
  mkdirSync(join(root,'items'),{recursive:true});mkdirSync(dir,{recursive:true});mkdirSync(join(root,'research',run+'-dispatch'),{recursive:true});
  const before=`---\nid: ${actualId}\nkind: physics-theorem\nstatus: published\nverification:\n  verified:\n    date: 2026-10-15\n---\n## Statement\nBoth transfer signs are feasible.\n## Proof\nDifferentiate along an assumed feasible interval.\n`;
  const candidate=before.replace('Both transfer signs are feasible.','Arbitrarily small pure transfers of each sign are feasible.').replace('Differentiate along an assumed feasible interval.','Use differentiability and difference quotients along the feasible sequences.');
  const receiptPath='research/fixture-local-repair.json';
  const current=candidate.replace(/^verification:[ \t]*\n(?:[ \t]+[^\n]*\n)*/m,`verification:\n  repair: ${receiptPath}\n`);
  writeFileSync(join(root,'items',actualId+'.md'),before);
  writeFileSync(join(root,'items/thm-draft.md'),text('thm-draft','draft','An unrelated draft remains unchanged.'));
  const frontier=freezeFrontier({run,batches:[{id:'1',items:[actualId]},{id:'2',items:['thm-draft']}]});
  json(join(dir,'frontier.json'),frontier);
  const judgeInput=join(dir,'step4-verdicts.json');
  json(judgeInput,[{id:actualId,model:MODELS.luna.id,keep:false,context_sha256:'a'.repeat(64)},
    {id:'thm-draft',model:MODELS.luna.id,keep:true,context_sha256:'b'.repeat(64)}]);
  const pack={version:2,adjudicationSchemaVersion:1,repair_scope:'frontier',frontier_ids:frontier.ids,run,phase:'initial',round:1,
    judge_model:MODELS.luna.id,units:['1','2'],assignments:{'1':[],'2':[]},dependency_levels:{},before:guards(root),
    before_statements:Object.fromEntries(readLibraryItems(root).map(row=>[row.id,row.statement_sha256])),before_aliases:{},home_pages:{},rejected:[],
    input_evidence:{[judgeInput]:digest(readFileSync(judgeInput,'utf8'))}};
  json(join(dir,'initial-1.json'),pack);
  const reports=pack.units.map(unit=>closeEmptyAdjudication(root,run,'initial',1,unit,digest(pack)));
  for(const unit of pack.units)json(join(root,'research',run+'-dispatch','tool-step5-v2-empty-initial-r1-u'+unit+'.result.json'),
    {run,role:'tool',label:'step5-v2-empty-initial-r1-u'+unit,covers:[unit],ok:true,written_by:'autopilot',ended_at:'2026-10-22T00:00:00Z'});
  const beforeFile='research/fixture-before.md';writeFileSync(join(root,beforeFile),before);
  const claim={version:1,run,id:actualId,group:'td',pre_sha256:itemHashGuard(before),claimed_at:'2026-10-22T00:00:00Z'};
  const claimFile=join(root,'research',run+'-step3-published-claims.jsonl');writeFileSync(claimFile,JSON.stringify(claim)+'\n');
  writeFileSync(join(root,'items',actualId+'.md'),current);
  const content=itemHashGuard(current),ledgerMarker='fixture:'+actualId;
  const ledgerEvidence=`\n${actualId}: actual source/proposed scientific delta fixture, canonical current ${content}.\n`;
  const ledgerFile=join(root,'research/published-consumer-supplier-ledger.md');
  writeFileSync(ledgerFile,`<!-- local-published-repair:${ledgerMarker}:begin -->${ledgerEvidence}<!-- local-published-repair:${ledgerMarker}:end -->\n`);
  const receipt={version:1,kind:'recorded-local-published-repair',id:actualId,run,group:'td',correction:'Test fixture for the actual arbitrarily-small-transfer repair.',content_sha256:content,
    before_file:beforeFile,before_raw_sha256:digest(before),pre_sha256:itemHashGuard(before),recorded_at:'2026-10-22T00:02:00Z',ledger_marker:ledgerMarker,ledger_sha256:digest(ledgerEvidence),
    local_checks:Object.fromEntries(['precheck','rendercheck'].map(tool=>[tool,{checked_at:'2026-10-22T00:01:00Z',content_sha256:content,exit_code:0,
      command:['node',`tools/physics-support/${tool}${tool==='precheck'?'.mts':'.mjs'}`,`items/${actualId}.md`],
      output:tool==='precheck'?`PASS items/${actualId}.md\n1 checked, 0 failing`:'OK — 1 file(s)'}]))};
  json(join(root,receiptPath),receipt);
  const state={run,stage:'5.1-adjudicate',paused:true,dispatches:{done:{startedAt:'2026-10-22T00:00:00Z',endedAt:'2026-10-22T00:01:00Z'}},stages:{}};
  const stateArchive='research/fixture-drained-state.json';json(join(root,stateArchive),state);json(join(root,'.physics-autopilot',run,'state.json'),state);
  const scientificPath='research/fixture-science.md';writeFileSync(join(root,scientificPath),'Synthetic same-owner scientific evidence, never real scientific acceptance.');
  const request={version:1,run,phase:'initial',round:1,reviewer:'/root',native_review:false,native_adjudication:false,
    reason:'Explicit test-only root request: preserve every original native obligation and receipt.',
    drained_state:{path:stateArchive,sha256:digest(readFileSync(join(root,stateArchive),'utf8'))},entries:[{id:actualId,group:'td',
      receipt:{path:receiptPath,sha256:digest(readFileSync(join(root,receiptPath),'utf8'))},scientific_evidence:[{path:scientificPath,sha256:digest(readFileSync(join(root,scientificPath),'utf8'))}]}]};
  const requestFile=join(dir,'owner-published-maintenance.json');
  const putRequest=()=>json(requestFile,request);
  const putReceipt=()=>{json(join(root,receiptPath),receipt);request.entries[0].receipt.sha256=digest(readFileSync(join(root,receiptPath),'utf8'));putRequest();};
  putRequest();
  return {root,dir,pack,reports,before,current,receipt,receiptPath,request,requestFile,claim,claimFile,ledgerFile,state,putReceipt,putRequest,
    load:()=>publishedMaintenance(root,run,pack,guards(root)),validate:()=>validateReports(pack,reports,guards(root),{root,publishedLocalMaintenance:publishedMaintenance(root,run,pack,guards(root))})};
}

test('published delta retains ordinary failure without root request and receives local-only exception',t=>{
  const f=fixture(t),old=validateReports(f.pack,f.reports,guards(f.root),{root:f.root});
  assert.ok(old.errors.includes('unlicensed or unreviewed change '+actualId));
  assert.ok(old.errors.includes('change without confirmed adjudication '+actualId));
  assert.deepEqual(f.validate().errors,[]);
  assert.deepEqual(f.validate().reviews,[]);assert.deepEqual(f.validate().decisions,[]);
  const originalPack=readFileSync(join(f.dir,'initial-1.json'),'utf8'),originalReports=f.pack.units.map(unit=>readFileSync(workerReport(f.root,run,'initial',1,unit),'utf8'));
  const result=collect(f.root,run,'initial',1);
  assert.equal(result.published_local_repairs.length,1);assert.deepEqual(result.reviews,[]);assert.deepEqual(result.decisions,[]);
  assert.ok(result.statement_events.some(row=>row.id===actualId));
  assert.equal(readFileSync(join(f.dir,'initial-1.json'),'utf8'),originalPack);
  assert.deepEqual(f.pack.units.map(unit=>readFileSync(workerReport(f.root,run,'initial',1,unit),'utf8')),originalReports);
  assert.equal(existsSync(join(f.root,'research',run+'-judge-adjudications.jsonl')),false);
  assert.deepEqual(collect(f.root,run,'initial',1),result);
});
for(const defect of ['missing-request','missing-receipt','tampered-receipt','before-bytes','before-canonical','wrong-status','wrong-source','wrong-group','wrong-run','missing-claim','claim-owner','ledger','stale-check','failed-check','missing-check','wrong-original-statement','assigned-published','outside-frontier','not-drained','shared-lock','changed-science','imported-target','new-audit']){
 test('initial published maintenance blocks '+defect,t=>{
  const f=fixture(t);
  if(defect==='missing-request')rmSync(f.requestFile);
  if(defect==='missing-receipt')rmSync(join(f.root,f.receiptPath));
  if(defect==='tampered-receipt')writeFileSync(join(f.root,f.receiptPath),JSON.stringify({...f.receipt,correction:'tampered'}));
  if(defect==='before-bytes')writeFileSync(join(f.root,f.receipt.before_file),f.before+'\n');
  if(defect==='before-canonical')f.pack.before[actualId]='c'.repeat(64);
  if(defect==='wrong-status')writeFileSync(join(f.root,'items',actualId+'.md'),f.current.replace('status: published','status: draft'));
  if(defect==='wrong-source')writeFileSync(join(f.root,'items',actualId+'.md'),f.current+'Changed.');
  if(defect==='wrong-group'){f.request.entries[0].group='wrong';f.putRequest();}
  if(defect==='wrong-run'){f.receipt.run='different';f.putReceipt();}
  if(defect==='missing-claim')rmSync(f.claimFile);
  if(defect==='claim-owner')writeFileSync(f.claimFile,JSON.stringify({...f.claim,group:'wrong'}));
  if(defect==='ledger')writeFileSync(f.ledgerFile,readFileSync(f.ledgerFile,'utf8').replace('actual source','tampered source'));
  if(defect==='stale-check'){f.receipt.local_checks.precheck.content_sha256='e'.repeat(64);f.putReceipt();}
  if(defect==='failed-check'){f.receipt.local_checks.rendercheck.exit_code=1;f.putReceipt();}
  if(defect==='missing-check'){delete f.receipt.local_checks;f.putReceipt();}
  if(defect==='wrong-original-statement')f.pack.before_statements[actualId]='d'.repeat(64);
  if(defect==='assigned-published')f.pack.assignments['1']=[{id:actualId}];
  if(defect==='outside-frontier')f.pack.frontier_ids=f.pack.frontier_ids.filter(id=>id!==actualId);
  if(defect==='not-drained')json(join(f.root,'.physics-autopilot',run,'state.json'),{...f.state,dispatches:{running:{startedAt:'2026-10-22T00:00:00Z'}}});
  if(defect==='shared-lock')writeFileSync(join(f.root,'.physics-autopilot/step5-shared-write.lock'),'locked');
  if(defect==='imported-target')json(join(f.root,'research/math-imports.json'),{files:[{path:'items/'+actualId+'.md'}]});
  if(defect==='new-audit')writeFileSync(join(f.root,'items',actualId+'.md'),f.current.replace('verification:\n','verification:\n  audited: 2026-10-22\n'));
  if(defect==='changed-science')writeFileSync(join(f.root,f.request.entries[0].scientific_evidence[0].path),'tampered');
  if(defect==='missing-request')assert.ok(f.validate().errors.includes('unlicensed or unreviewed change '+actualId));
  else assert.throws(f.load);
 });
}
test('unassigned draft write remains blocking beside a valid published repair',t=>{
 const f=fixture(t);writeFileSync(join(f.root,'items/thm-draft.md'),text('thm-draft','draft','Unauthorized edit.'));
 const result=f.validate();assert.ok(result.errors.includes('unlicensed or unreviewed change thm-draft'));assert.ok(result.errors.includes('change without confirmed adjudication thm-draft'));
 assert.throws(()=>collect(f.root,run,'initial',1),/unlicensed or unreviewed change thm-draft/);
});
test('a forged guard object cannot bypass any ordinary changed-item checks',t=>{
 const f=fixture(t);
 const result=validateReports(f.pack,f.reports,guards(f.root),{root:f.root,publishedLocalMaintenance:{guards:{[actualId]:itemHashGuard(f.current)}}});
 assert.ok(result.errors.includes('unlicensed or unreviewed change '+actualId));
});
test('authenticated maintenance guards cannot be extended to draft writes',t=>{
 const f=fixture(t),local=f.load();
 assert.throws(()=>{local.guards['thm-draft']='x';},TypeError);
});
test('replay rejects modified receipts, claims, ledger, scientific evidence and source',t=>{
 for(const defect of ['receipt','claim','ledger','science','source']){
  const f=fixture(t);collect(f.root,run,'initial',1);
  if(defect==='receipt')writeFileSync(join(f.root,f.receiptPath),JSON.stringify({...f.receipt,correction:'tampered'}));
  if(defect==='claim')writeFileSync(f.claimFile,JSON.stringify({...f.claim,claimed_at:'2026-10-21T23:59:00Z'}));
  if(defect==='ledger')writeFileSync(f.ledgerFile,readFileSync(f.ledgerFile,'utf8').replace('actual source','tampered source'));
  if(defect==='science')writeFileSync(join(f.root,f.request.entries[0].scientific_evidence[0].path),'tampered');
  if(defect==='source')writeFileSync(join(f.root,'items',actualId+'.md'),f.current+'Changed.');
  assert.throws(()=>collect(f.root,run,'initial',1),undefined,defect);
 }
});
test('unrelated append-only claims/ledger entries do not rewrite or invalidate a bound repair',t=>{
 const f=fixture(t),result=collect(f.root,run,'initial',1);
 writeFileSync(f.claimFile,readFileSync(f.claimFile,'utf8')+JSON.stringify({id:'unrelated'})+'\n');
 writeFileSync(f.ledgerFile,readFileSync(f.ledgerFile,'utf8')+'Unrelated later maintenance.\n');
 json(join(f.root,'.physics-autopilot',run,'state.json'),{run,stage:'5.2-impact',paused:false,dispatches:{},stages:{}});
 assert.deepEqual(collect(f.root,run,'initial',1),result);
});
test('published consumers retained in frozen frontier enter maintenance, draft consumers enter native frontier',t=>{
 const f=fixture(t),published='thm-published-consumer';
 writeFileSync(join(f.root,'items',published+'.md'),text(published,'published','Uses supplier.',[actualId]));
 writeFileSync(join(f.root,'items/thm-draft.md'),text('thm-draft','draft','Uses supplier.',[actualId]));
 const frontier=freezeFrontier({run,batches:[{id:'1',items:[actualId,published]},{id:'2',items:['thm-draft']}]});json(join(f.dir,'frontier.json'),frontier);
 const event={id:actualId,before_statement_sha256:statementHash(f.before),after_statement_sha256:statementHash(f.current)};
 const after=syncMaintenance(f.root,run,[event]);
 assert.equal(after.frontier_events.some(row=>row.consumer_id===published),false);
 assert.ok(after.frontier_events.some(row=>row.consumer_id==='thm-draft'));
 assert.ok(after.pending.some(row=>row.id===published));
 const pack=prepareMaintenance(f.root,run).pack;assert.deepEqual(pack.ids,[published]);
 assert.equal(maintenanceStatus(f.root,run).complete,false);
});
test('published repair never makes stale ordinary consumer review current',t=>{
 const f=fixture(t);writeFileSync(join(f.root,'items/thm-draft.md'),text('thm-draft','draft','Uses supplier.',[actualId]));
 const beforeContext=reviewContextHashes(f.root,['thm-draft'])['thm-draft'];
 const consumerHash=itemHashGuard(readFileSync(join(f.root,'items/thm-draft.md'),'utf8'));
 const review={id:'thm-draft',post_sha256:consumerHash,review_context_sha256:beforeContext.review_context_sha256};
 assert.equal(reviewMatchesCurrent(readLibraryItems(f.root),guards(f.root),review),true);
 writeFileSync(join(f.root,'items',actualId+'.md'),f.current.replace('## Statement\n','## Statement\nA later unreviewed supplier interface change.\n'));
 assert.equal(reviewMatchesCurrent(readLibraryItems(f.root),guards(f.root),review),false);
});

test('resumed initial collection retains the paused application archive',t=>{
 const f=fixture(t);json(join(f.root,'.physics-autopilot',run,'state.json'),{...f.state,paused:false});
 assert.equal(collect(f.root,run,'initial',1).published_local_repairs.length,1);
});
test('resumed collection cannot hide an active writer behind a tool label',t=>{
 const f=fixture(t);
 json(join(f.root,'.physics-autopilot',run,'state.json'),{...f.state,paused:false,dispatches:{...f.state.dispatches,
  '5.1-adjudicate:fake-collect':{role:'tool',stage:'5.1-adjudicate',label:'fake-collect',startedAt:'2026-10-22T00:03:00Z',endedAt:null}}});
 assert.throws(f.load,/writers are not drained/);
});

test('ordinary remaining native units may finish after the archived application boundary',t=>{
 const f=fixture(t);json(join(f.root,'.physics-autopilot',run,'state.json'),{...f.state,paused:false,dispatches:{...f.state.dispatches,
  later:{role:'alpha-adjudicate',stage:'5.1-adjudicate',startedAt:'2026-10-22T00:03:00Z',endedAt:'2026-10-22T00:04:00Z'}}});
 assert.equal(collect(f.root,run,'initial',1).published_local_repairs.length,1);
});
