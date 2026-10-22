// Synthetic authority/check/dispatch fixtures, never actual native coverage.
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,existsSync} from 'node:fs';
import {join,relative,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {remarksOnly,explanatoryReviewRequest,explanatoryReviewCompletion,explanatoryReviewPhase,isExplanatoryReviewCompletion} from './step5-explanatory-edit-review.mjs';
import {advanceAdjudicationCorrection,adjudicationCorrectionWork,collect,validateReports,digest,workerLabel,workerReport,workflowDir,reviewContextHashes,prepareImpact,advanceImpact,reviewMatchesCurrent} from './step5-workflow.mjs';
import {freezeFrontier,readLibraryItems} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {MODELS} from './models.mjs';
const ev={reason:'Checked the exact current explanation against the unchanged procedure, diagram and actual supplier context.',uncertain:false,source_urls:[],familiar:true};
const source=(id,body='A sound claim.',status='draft')=>`---\nid: ${id}\nkind: theorem\nstatus: ${status}\ndeps: []\n---\n## Statement\n${body}\n\n## Proof\n1.1 A complete argument. [given] ∎\n`;
const caption=id=>source(id).replace('deps: []','deps: [thm-referred]')+'\n## Remarks\n\nThe horizontal coordinate is the time index divided by h. No proof uses the diagram.\n\n```tikz\n\\begin{tikzpicture}\\node {$t/h$};\\end{tikzpicture}\n```\n';
export function fixture(t,{published=false}={}){
 const root=mkdtempSync(join(tmpdir(),'explanatory-edit-')),run='demo',dir=workflowDir(root,run),local=join(root,'research',run+'-side-edit');
 t.after(()=>rmSync(root,{recursive:true,force:true}));
 for(const path of [dir,local,join(root,'items'),join(root,'research',run+'-dispatch'),join(root,'.physics-autopilot',run)])mkdirSync(path,{recursive:true});
 const save=(path,value)=>{mkdirSync(dirname(path),{recursive:true});writeFileSync(path,JSON.stringify(value,null,2)+'\n');};
 const ref=path=>({path:relative(root,path),sha256:digest(readFileSync(path,'utf8'))});
 const ids=['thm-assigned','thm-referred','thm-unrelated','alg-caption',...(published?['thm-published']:[])];
 const beforeCaption=caption('alg-caption'),currentCaption=beforeCaption.replace('The horizontal coordinate is the time index divided by h.','Set t_n=nh. The horizontal coordinate is normalized time t/h.');
 for(const id of ids)writeFileSync(join(root,'items',id+'.md'),id==='alg-caption'?beforeCaption:id==='thm-published'?source(id,'A published claim.','published').replace('deps: []','deps: []\nverification:\n  audited: 2026-10-01'):source(id));
 const current=()=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,itemHashGuard(readFileSync(join(root,'items',row.id+'.md'),'utf8'))]));
 const statements=()=>Object.fromEntries(readLibraryItems(root).map(row=>[row.id,row.statement_sha256]));
 const frontier=freezeFrontier({run,batches:[{id:'19',items:ids}]});save(join(dir,'frontier.json'),frontier);save(join(dir,'baseline.json'),current());
 const tuple={id:'thm-assigned',model:MODELS.sol61.id,context_sha256:'a'.repeat(64),keep:false};save(join(dir,'step4-verdicts.json'),[tuple]);
 const pack={version:2,run,phase:'initial',round:1,repair_scope:'frontier',frontier_ids:frontier.ids,units:['19'],assignments:{'19':[tuple]},rejected:[tuple],before:current(),before_statements:statements(),judge_model:MODELS.sol61.id};
 save(join(dir,'initial-1.json'),pack);
 save(join(root,'research',run+'-batch-19.pages.json'),[{id:'page',items:ids.map(id=>({id}))}]);
 save(join(root,'research',run+'-batch-19.proof-contracts.json'),{contracts:{}});
 save(join(root,'research',run+'-proof-contracts.json'),{contracts:{}});
 const originalPath=workerReport(root,run,'initial',1,'19'),label=workerLabel('initial',1,'19');
 writeFileSync(originalPath.replace(/\.json$/,'.task.md'),'Frozen inputs: '+join(dir,'initial-1.json')+'\n');
 const originalReport={run,phase:'initial',round:1,unit:'19',input_sha256:digest(pack),decisions:[{id:tuple.id,model:tuple.model,context_sha256:tuple.context_sha256,outcome:'false_positive',...ev}],
  reviews:[{id:tuple.id,disposition:'unaffected',...reviewContextHashes(root,[tuple.id])[tuple.id],...ev}],downstream:['thm-referred'],created_items:[]};save(originalPath,originalReport);
 save(join(root,'research',run+'-dispatch','alpha-adjudicate-'+label+'.result.json'),{ok:true,run,role:'alpha-adjudicate',label,model:MODELS.sol61.id,provider_effort:'high',covers:['19'],ended_at:'2026-10-22T00:00:00Z'});
 const baseline={version:1,run,item_carriers:{'alg-caption':{item_file_sha256:digest(beforeCaption),guard_sha256:pack.before['alg-caption']}}};save(join(root,'research',run+'-step5-auditor-baseline.json'),baseline);
 const beforeFile=join(local,'before.md'),currentFile=join(local,'current.md');writeFileSync(beforeFile,beforeCaption);writeFileSync(currentFile,currentCaption);writeFileSync(join(root,'items/alg-caption.md'),currentCaption);
 const authorization=join(local,'user-authorization.json');save(authorization,{run,reviewer:'/root',request:'User explicitly authorized the already-applied two diagram explanation changes and needed recertification.'});
 const request={version:1,run,phase:'initial',round:1,reviewer:'/root',kind:'user-authorized-preapplied-remarks-edit',source_edit_authority:false,native_execution_coverage_adopted:false,
  reason:'The user explicitly authorized these already-applied explanatory edits; perform actual current native review.',user_authorization:ref(authorization),entries:[{id:'alg-caption',before_source:ref(beforeFile),current_source:ref(currentFile)}]};
 const requestPath=join(dir,'owner-explanatory-edit-review-current.json');
 const bind=()=>{save(requestPath,request);save(join(dir,'owner-explanatory-edit-review-request.json'),{version:1,run,request:ref(requestPath)});};bind();
 const state={run,stage:'5.1-adjudicate',paused:false,stages:{'5.1-adjudicate':{}},dispatches:{original:{startedAt:'earlier',endedAt:'now'}}};
 const saveState=()=>save(join(root,'.physics-autopilot',run,'state.json'),state);saveState();
 if(published){
  const id='thm-published',before=readFileSync(join(root,'items',id+'.md'),'utf8'),receiptPath='research/'+run+'-published-local.json';
  const after=before.replace('  audited: 2026-10-01','  repair: '+receiptPath).replace('A complete argument.','A complete argument with a corrected proof explanation.');writeFileSync(join(root,'items',id+'.md'),after);
  const beforeFile=join(local,'published-before.md');writeFileSync(beforeFile,before);
  const claim={version:1,run,id,group:'g',pre_sha256:itemHashGuard(before),claimed_at:'2026-10-22T00:00:00Z'};writeFileSync(join(root,'research',run+'-step3-published-claims.jsonl'),JSON.stringify(claim)+'\n');
  const content=itemHashGuard(after),ledger=`\n${id}: exact current ${content}, local correction only.\n`,marker=run+':'+id;
  writeFileSync(join(root,'research/published-consumer-supplier-ledger.md'),`<!-- local-published-repair:${marker}:begin -->${ledger}<!-- local-published-repair:${marker}:end -->\n`);
  const receipt={version:1,kind:'recorded-local-published-repair',id,run,group:'g',correction:'Corrected proof explanation in this synthetic fixture.',content_sha256:content,before_file:relative(root,beforeFile),before_raw_sha256:digest(before),pre_sha256:itemHashGuard(before),recorded_at:'2026-10-22T00:02:00Z',ledger_marker:marker,ledger_sha256:digest(ledger),
   local_checks:Object.fromEntries(['precheck','rendercheck'].map(tool=>[tool,{checked_at:'2026-10-22T00:01:00Z',content_sha256:content,exit_code:0,command:['node','tools/physics-support/'+tool+(tool==='precheck'?'.mts':'.mjs'),'items/'+id+'.md'],output:tool==='precheck'?'PASS items/'+id+'.md\n1 checked, 0 failing':'OK — 1 file(s)'}]))};save(join(root,receiptPath),receipt);
  const drained=join(local,'published-drained-state.json');save(drained,{...state,paused:true});
  save(join(dir,'owner-published-maintenance.json'),{version:1,run,phase:'initial',round:1,reviewer:'/root',native_review:false,native_adjudication:false,reason:'Root scoped this synthetic already-published proof correction through the existing unchanged policy.',drained_state:ref(drained),entries:[{id,group:'g',receipt:ref(join(root,receiptPath)),scientific_evidence:[ref(authorization)]}]});
 }
 const prepare=()=>advanceAdjudicationCorrection(root,run,'initial',1);
 const finish=()=>{
  const child=JSON.parse(readFileSync(join(dir,explanatoryReviewPhase+'-1.json'),'utf8')),label=workerLabel(explanatoryReviewPhase,1,'1');
  const report={version:1,run,phase:explanatoryReviewPhase,round:1,unit:'1',input_sha256:digest(child),decisions:[],created_items:[],downstream:[],reviews:[{id:'alg-caption',disposition:'unaffected',...reviewContextHashes(root,['alg-caption'])['alg-caption'],...ev}],adoptions:[{id:'alg-caption',disposition:'adopted',origin:'user-authorized-side-edit',...ev}]};
  save(workerReport(root,run,explanatoryReviewPhase,1,'1'),report);
  save(join(root,'research',run+'-dispatch','alpha-repair-'+label+'.result.json'),{ok:true,run,role:'alpha-repair',label,model:MODELS.sol61.id,provider_effort:'high',covers:[explanatoryReviewPhase+':1'],ended_at:'2026-10-22T00:01:00Z'});
  return report;
 };
 return {root,run,dir,local,ids,pack,originalPath,originalReport,request,requestPath,bind,save,ref,state,saveState,current,statements,beforeCaption,currentCaption,beforeFile,currentFile,prepare,finish,
  completion:()=>explanatoryReviewCompletion(root,run,reviewContextHashes(root,['alg-caption']))};
}

test('unassigned user explanatory edit receives genuine read-only native review and preserves original history',t=>{
 const f=fixture(t),pack=readFileSync(join(f.dir,'initial-1.json'),'utf8'),report=readFileSync(f.originalPath,'utf8');
 assert.ok(validateReports(f.pack,[f.originalReport],f.current(),{root:f.root}).errors.includes('unlicensed or unreviewed change alg-caption'));
 assert.throws(()=>collect(f.root,f.run,'initial',1),/awaits genuine sealed native review/);
 f.prepare();assert.deepEqual(adjudicationCorrectionWork(f.root,f.run,'initial',1),[explanatoryReviewPhase+':1']);
 assert.equal(f.completion(),null);assert.throws(()=>collect(f.root,f.run,'initial',1),/awaits genuine sealed/);
 f.finish();assert.equal(f.prepare().explanatory_review_completed,true);
 assert.equal(existsSync(join(f.dir,'initial-1-collected.json')),false);
 const child=f.completion();assert.equal(isExplanatoryReviewCompletion(child),true);assert.throws(()=>{child.guards.unassigned='bad';},TypeError);
 const result=collect(f.root,f.run,'initial',1);
 assert.deepEqual(result.native_explanatory_edit_review.reviews.map(row=>row.id),['alg-caption']);
 assert.equal(result.reviews.find(row=>row.id==='alg-caption').disposition,'unaffected');
 assert.equal(result.decisions.length,1);assert.equal(result.decisions[0].id,'thm-assigned');
 assert.equal(readFileSync(join(f.dir,'initial-1.json'),'utf8'),pack);assert.equal(readFileSync(f.originalPath,'utf8'),report);
 assert.equal(result.statement_events.some(row=>row.id==='alg-caption'),false);
 assert.deepEqual(collect(f.root,f.run,'initial',1),result);
});
for(const [name,change]of[
 ['definition',f=>{writeFileSync(f.currentFile,f.currentCaption.replace('A sound claim.','A changed claim.'));f.request.entries[0].current_source=f.ref(f.currentFile);writeFileSync(join(f.root,'items/alg-caption.md'),readFileSync(f.currentFile));f.bind();}],
 ['proof',f=>{writeFileSync(f.currentFile,f.currentCaption.replace('A complete argument.','A changed proof.'));f.request.entries[0].current_source=f.ref(f.currentFile);writeFileSync(join(f.root,'items/alg-caption.md'),readFileSync(f.currentFile));f.bind();}],
 ['diagram',f=>{writeFileSync(f.currentFile,f.currentCaption.replace('{$t/h$}','{$t$}'));f.request.entries[0].current_source=f.ref(f.currentFile);writeFileSync(join(f.root,'items/alg-caption.md'),readFileSync(f.currentFile));f.bind();}],
 ['newlink',f=>{writeFileSync(f.currentFile,f.currentCaption.replace('Set t_n=nh.','Set t_n=nh. [[thm-extra]]'));f.request.entries[0].current_source=f.ref(f.currentFile);writeFileSync(join(f.root,'items/alg-caption.md'),readFileSync(f.currentFile));f.bind();}],
 ['newheading',f=>{writeFileSync(f.currentFile,f.currentCaption.replace('Set t_n=nh.','## New heading\nSet t_n=nh.'));f.request.entries[0].current_source=f.ref(f.currentFile);writeFileSync(join(f.root,'items/alg-caption.md'),readFileSync(f.currentFile));f.bind();}],
 ['wrongbefore',f=>writeFileSync(f.beforeFile,'invented before source')],
 ['wrongcurrent',f=>writeFileSync(join(f.root,'items/alg-caption.md'),f.currentCaption+'drift')],
 ['wrongowner',f=>{f.request.reviewer='/root/worker';f.bind();}],
 ['inventedcoverage',f=>{f.request.native_execution_coverage_adopted=true;f.bind();}],
 ['assignedtarget',f=>{f.pack.assignments['19'].push({id:'alg-caption'});f.save(join(f.dir,'initial-1.json'),f.pack);}],
 ['wrongrawbaseline',f=>{f.save(join(f.root,'research',f.run+'-step5-auditor-baseline.json'),{item_carriers:{'alg-caption':{guard_sha256:f.pack.before['alg-caption'],item_file_sha256:'b'.repeat(64)}}});}],
 ['imported',f=>f.save(join(f.root,'research/math-imports.json'),{files:[{path:'items/alg-caption.md'}]})]
])test('request rejects '+name,t=>{const f=fixture(t);change(f);assert.throws(()=>explanatoryReviewRequest(f.root,f.run));});
for(const [name,change]of[
 ['activewriter',f=>{f.state.dispatches.active={startedAt:'now'};f.saveState();}],
 ['wrongstage',f=>{f.state.stage='5.2-impact';f.saveState();}],
 ['completed',f=>{f.state.stages['5.1-adjudicate'].doneAt='now';f.saveState();}],
 ['sharedlock',f=>mkdirSync(join(f.root,'.physics-autopilot/step5-shared-write.lock'))]
])test('native preparation rejects '+name,t=>{const f=fixture(t);change(f);assert.throws(f.prepare);});
for(const [name,change]of[
 ['currentcontext',(f,r)=>{r.reviews[0].review_context_sha256='c'.repeat(64);}],
 ['uncertainty',(f,r)=>{r.reviews[0].uncertain=true;}],
 ['authoredclaim',(f,r)=>{r.reviews[0].disposition='repaired';}],
 ['decision',(f,r)=>{r.decisions.push({id:'alg-caption',outcome:'confirmed_nonfatal'});}],
 ['missingadoption',(f,r)=>{r.adoptions=[];}],
 ['unlistedreview',(f,r)=>{r.reviews[0].id='thm-unrelated';}]
])test('fresh completion rejects '+name,t=>{const f=fixture(t);f.prepare();const r=f.finish();change(f,r);f.save(workerReport(f.root,f.run,explanatoryReviewPhase,1,'1'),r);assert.throws(f.completion);});
test('read-only completion rejects original report or source mutation',t=>{
 for(const mode of ['report','source']){const f=fixture(t);f.prepare();f.finish();writeFileSync(mode==='report'?f.originalPath:join(f.root,'items/alg-caption.md'),'tampered');assert.throws(f.completion);}
});
test('missing or tampered native dispatch cannot authorize a draft edit',t=>{
 const f=fixture(t);f.prepare();f.finish();const path=join(f.root,'research',f.run+'-dispatch','alpha-repair-'+workerLabel(explanatoryReviewPhase,1,'1')+'.result.json');
 const d=JSON.parse(readFileSync(path,'utf8'));d.model=MODELS.luna.id;f.save(path,d);assert.throws(f.completion,/Sol6.1high/);
 rmSync(path);assert.equal(f.completion(),null);
});
test('unlisted unrelated draft edit is still blocking beside sealed native adoption',t=>{
 const f=fixture(t);f.prepare();f.finish();f.prepare();writeFileSync(join(f.root,'items/thm-unrelated.md'),source('thm-unrelated','Unauthorized claim.'));
 assert.throws(()=>collect(f.root,f.run,'initial',1),/unlicensed or unreviewed change thm-unrelated/);
});
test('sealed historical current review survives later canonical additions; old evidence and source stay protected',t=>{
 const f=fixture(t);f.prepare();f.finish();f.prepare();const result=f.completion();
 writeFileSync(join(f.root,'research/defect-ledger.jsonl'),'A later authorized finding.\n');
 assert.deepEqual(f.completion(),result);
 writeFileSync(workerReport(f.root,f.run,explanatoryReviewPhase,1,'1'),'tampered');assert.throws(f.completion,/evidence changed/);
});

// Full composition: unchanged published policy, sealed side review, later native
// owner finding repair, intermediate historical validation, final collection.
test('published maintenance and sealed user edit compose with a later native owner-finding continuation',t=>{
 const f=fixture(t,{published:true});f.prepare();f.finish();f.prepare();
 const id='thm-referred',before=join(f.local,'finding-before.md'),recordPath=join(f.local,'finding.json'),science=join(f.local,'science.json'),proposal=join(f.local,'proposal.json');
 writeFileSync(before,readFileSync(join(f.root,'items',id+'.md')));
 const record={run:f.run,subject:id,defect_id:'owner-real-defect',disposition:'open',caught_by_role:'owner',severity:'fatal'};
 f.save(recordPath,record);f.save(science,{finding:'Synthetic independently identified native-referral scientific defect.'});f.save(proposal,{proposal:'Unapplied necessary proof explanation.'});
 writeFileSync(join(f.root,'research/defect-ledger.jsonl'),JSON.stringify(record)+'\n');
 const request={version:1,run:f.run,phase:'initial',round:1,reviewer:'/root',entries:[{subject:id,owner_lane:'1',mode:'native-referral',root_finding:{defect_id:record.defect_id,record:f.ref(recordPath)},before_source:f.ref(before),before_content_sha256:f.current()[id],before_statement_sha256:f.statements()[id],science:[f.ref(science)],proposals:[f.ref(proposal)],native_outcome:f.ref(f.originalPath)}]};
 const path=join(f.dir,'owner-finding-queue-current.json');f.save(path,request);f.save(join(f.dir,'owner-finding-queue-request.json'),{version:1,run:f.run,request:f.ref(path)});
 const progress=f.prepare(),phase='owner-finding-correction-initial';assert.deepEqual(progress.assignments,{'1':[id],'2':[],'3':[]});
 const child=JSON.parse(readFileSync(join(f.dir,phase+'-1.json'),'utf8'));
 writeFileSync(join(f.root,'items',id+'.md'),source(id).replace('A complete argument.','A complete argument with its missing convention explicit.'));
 for(const unit of ['1','2','3']){
  const ids=unit==='1'?[id]:[],label=workerLabel(phase,1,unit);
  f.save(workerReport(f.root,f.run,phase,1,unit),{run:f.run,phase,round:1,unit,input_sha256:digest(child),decisions:[],created_items:[],downstream:[],reviews:ids.map(id=>({id,disposition:'repaired',...reviewContextHashes(f.root,[id])[id],...ev})),root_finding_resolutions:ids.map(id=>({defect_id:record.defect_id,status:'fixed',subjects:[id],...ev})),scientific_correction_adjudications:[]});
  f.save(join(f.root,'research',f.run+'-dispatch','alpha-repair-'+label+'.result.json'),{ok:true,run:f.run,role:'alpha-repair',label,model:MODELS.sol61.id,provider_effort:'high',covers:[phase+':'+unit],ended_at:'2026-10-22T00:03:00Z'});
 }
 assert.equal(f.prepare().parent_collected,true);
 const parent=JSON.parse(readFileSync(join(f.dir,'initial-1-collected.json'),'utf8'));
 assert.equal(parent.published_local_repairs.length,1);assert.equal(parent.native_explanatory_edit_review.reviews.length,1);assert.equal(parent.native_owner_finding_decisions.length,1);
 assert.ok(parent.changed.includes('alg-caption'));assert.ok(parent.changed.includes('thm-published'));assert.ok(parent.changed.includes('thm-referred'));
 assert.deepEqual(JSON.parse(readFileSync(f.originalPath,'utf8')),f.originalReport);
 assert.deepEqual(collect(f.root,f.run,'initial',1),parent);
});

test('sealed adoption retains genuine old context and ordinary consumer checking rejects it after a supplier interface change',t=>{
 const f=fixture(t);f.prepare();f.finish();f.prepare();const old=f.completion().reviews[0];
 assert.equal(reviewMatchesCurrent(readLibraryItems(f.root),f.current(),old),true);
 writeFileSync(join(f.root,'items/thm-referred.md'),source('thm-referred','A later authorized supplier interface will require an actual fresh consumer review.'));
 assert.equal(f.completion().reviews[0].review_context_sha256,old.review_context_sha256);
 assert.equal(reviewMatchesCurrent(readLibraryItems(f.root),f.current(),old),false);
});

test('a resealed tampered child receipt cannot extend native adoption to an unreviewed draft',t=>{
 const f=fixture(t);f.prepare();f.finish();f.prepare();const path=join(f.dir,explanatoryReviewPhase+'-1-collected.json');
 const saved=JSON.parse(readFileSync(path,'utf8'));saved.guards['thm-unrelated']=f.current()['thm-unrelated'];
 const {sha256,...payload}=saved;f.save(path,{...payload,sha256:digest(payload)});assert.throws(f.completion,/target guards/);
});

for(const fragment of ['# Heading','### Heading','###### Heading','~~~python','```js','[link](https://example.com)','[link][ref]','[ref]: https://example.com','<https://example.com>'])test('Remarks guard rejects unsupported added prose structure '+fragment,()=>{
 const before=caption('alg-caption'),current=before.replace('The horizontal coordinate',fragment+'\nThe horizontal coordinate');assert.throws(()=>remarksOnly(before,current));
});
for(const name of ['demo-batch-19.pages.json','demo-batch-19.proof-contracts.json','demo-proof-contracts.json'])test('read-only native completion rejects metadata mutation '+name,t=>{
 const f=fixture(t);f.prepare();f.finish();writeFileSync(join(f.root,'research',name),'tampered');assert.throws(f.completion,/metadata/);
});

test('read-only completion rejects newly created run metadata',t=>{const f=fixture(t);f.prepare();f.finish();f.save(join(f.root,'research/demo-batch-20.proof-contracts.json'),{});assert.throws(f.completion,/metadata inventory/);});
