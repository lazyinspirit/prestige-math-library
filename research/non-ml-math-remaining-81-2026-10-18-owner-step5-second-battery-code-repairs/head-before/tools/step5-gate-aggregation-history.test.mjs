import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {join,dirname,relative} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step5-rounds.mjs';
import {prepareGateRepairPack,verifyCompletedImpact,verifyCertification,reviewContextHashes,collect,workerLabel} from './step5-workflow.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {validateGateAggregationHistory,recordGateAggregationHistory,gateAggregationEvidenceReference} from './step5-gate-aggregation-history.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const run='test-gate-aggregation';
function fixture(){
 const root=mkdtempSync(join(tmpdir(),'gate-aggregation-fixture-')),bindings={};
 const put=(p,x)=>{mkdirSync(dirname(join(root,p)),{recursive:true});writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');return p;};
 const bind=p=>{bindings[p]=hash(readFileSync(join(root,p),'utf8'));return p;};
 const archive=(p,x)=>bind(put(p,x));
 const ids=['lem-supplier','lem-consumer','lem-indirect','thm-last'];
 const text=(id,i,changed=false)=>`---\nid: ${id}\nkind: lemma\nstatus: draft\ndeps: ${i?`[${ids[i-1]}]`:'[]'}\n---\n\n## Statement\n\n${changed?'Assume AC. ':''}A claim.\n\n## Proof\n\n1.1 A proof. ∎\n`;
 const sources=ids.map((id,i)=>({id,path:`items/${id}.md`,before:text(id,i),after:text(id,i,i===0)}));
 const documents=new Map(),next=new Map(),files=[],vectors=[];
 const save=(p,b,a=b)=>{const old=archive(`research/before/${hash(b)}`,b),fresh=archive(`research/after/${hash(a)}`,a);files.push({path:p,sha256:hash(b),archive:old,bytes:b.length});vectors.push({path:p,before_sha256:hash(b),after_sha256:hash(a),after_archive:fresh,...(p.startsWith('items/')?{guard_sha256:itemHashGuard(a)}:{})});put(p,a);};
 const encode=x=>JSON.stringify(x,null,2)+'\n';
 const boundary={case:'empty',status:'not_applicable',reason:'The original reviewed empty-input reason remains mathematically unchanged.'};
 const oldContract={kind:'lemma',boundaries:[boundary],citations:[]};
 const nextBoundary={...boundary,template_review:{upheld:true,by:'/root/fixture-reviewer',reason:'An actual focused review checks the domain and the empty-input convention.',item_sha256:itemHashGuard(sources[1].after),row_sha256:hash({case:boundary.case,status:boundary.status,text:boundary.reason})}};
 const risk={status:'complete',reviewer:'/root/fixture-reviewer',notes:'Actual focused contract and source review is retained without claiming a native scientific handoff.'};
 for(let n=1;n<=81;n++){
  const scope=n<=4?[ids[n-1]]:[],old={version:1,scope,contracts:n<=4?{[ids[n-1]]:structuredClone(oldContract)}:{}},after=structuredClone(old);
  if(n===2)after.contracts[ids[1]].boundaries=[nextBoundary];if(n===3)after.contracts[ids[2]].risk_review=risk;
  documents.set(n,old);next.set(n,after);save(`research/${run}-batch-${n}.proof-contracts.json`,encode(old),encode(after));
  save(`research/${run}-batch-${n}.pages.json`,encode([{id:`page-${n}`,items:n<=4?[{id:ids[n-1]}]:[]}]));
 }
 const aggregate=docs=>encode({version:1,level:run,scope:ids,contracts:Object.fromEntries(ids.map((id,i)=>[id,docs.get(i+1).contracts[id]]))});
 const cache=`research/${run}-proof-contracts.json`,nativeCache=aggregate(documents),currentCache=aggregate(next);save(cache,nativeCache,currentCache);
 for(const s of sources)save(s.path,s.before,s.after);
 const oldHash=hash('The old merged cache bytes are genuinely unavailable; only its exact historical native pin survives.');
 const certificate={version:2,run,phase:'impact-repeat',round:5,at:'2020-01-01T00:00:01.000Z',items:[],changed:[],evidence:{[cache]:oldHash}};certificate.sha256=hash(certificate);
 const certText=encode(certificate);save(`research/${run}-step5-v2/certification.json`,certText);save(`research/${run}-step5-v2/certification-impact-repeat-5.json`,certText);
 const frontier=freezeFrontier({run,batches:Array.from({length:81},(_,i)=>({id:String(i+1),items:i<4?[ids[i]]:[]}))});const frontierPath=archive(`research/${run}-step5-v2/frontier.json`,frontier);
 const prep=archive('research/preparation.json',{run,at:'2020-01-01T00:00:02.000Z',native_execution_coverage:false,mathematical_review_claimed:false,selected_count:4,items:ids.map(id=>({id})),guards:[{path:cache,raw_sha256:oldHash}]});
 const events=[{at:'2020-01-01T00:00:03.000Z',type:'gates',message:'5.8-gate: running 22 gate(s)'},...Array.from({length:20},(_,i)=>({at:'2020-01-01T00:00:03.000Z',type:'gate-advisory',id:`diagnostic-${i}`})),{at:'2020-01-01T00:00:04.000Z',type:'gate-advisory',id:'merge-contracts',code:0,ok:true,why:'exit 0',output:`merge-proof-contracts: wrote ${cache} with 4 scoped item(s) from 81 batch contract(s)\n`},{at:'2020-01-01T00:00:05.000Z',type:'stage-route',message:'5.8-gate (failed) → 5.9-repair'}];
 const eventPath=archive('research/native-events.json',events);put(`.autopilot/${run}/events.jsonl`,events.map(e=>JSON.stringify(e)).join('\n')+'\n');
 const sourceOp={kind:'scientific-source',id:ids[0],path:sources[0].path,before:sources[0].before,after:sources[0].after};
 const ops=[sourceOp,{kind:'actual-focused-boundary-review',contract_path:`research/${run}-batch-2.proof-contracts.json`,id:ids[1],case:'empty',before:boundary,after:nextBoundary,item_sha256:itemHashGuard(sources[1].after),review_evidence:'Actual owner focused source and boundary review with a precise current-source guard.'},{kind:'risk-or-citation-metadata',file:`research/${run}-batch-3.proof-contracts.json`,path:['contracts',ids[2],'risk_review'],before:null,value:risk}];
 const changed=vectors.filter(f=>f.path!==cache&&f.before_sha256!==f.after_sha256).map(f=>({path:f.path,before_sha256:f.before_sha256,after_sha256:f.after_sha256}));
 const capturePath='research/capture.json',proposalPath=archive('research/proposal.json',{run,before_capture:capturePath}),opsPath=archive('research/operations.json',ops);
 const capture={run,stage:'5.9-repair',paused:true,captured_at:'2020-01-01T00:00:06.000Z',items:4,pages:162,sources:sources.map(s=>({id:s.id,path:s.path,raw_sha256:hash(s.before),guard_sha256:itemHashGuard(s.before)})),files,prior_cert_evidence:certificate.evidence,native_gate_events:eventPath};archive(capturePath,capture);
 const app={run,performed_by:'/root',before_capture:capturePath,applied_at:'2020-01-01T00:00:07.000Z',completed_at:'2020-01-01T00:00:08.000Z',original_certificates_reports_and_native_state_preserved:true,review_or_native_coverage_granted:false,foreign_index_or_head_written:false,source_id:ids[0],current_vectors:vectors.filter(f=>!f.path.includes('certification')),approved_proposals:[{path:proposalPath,sha256:bindings[proposalPath]},{path:opsPath,sha256:bindings[opsPath]}],files:changed,actual_merged_cache:{exit_code:0,before_sha256:hash(nativeCache),after_sha256:hash(currentCache),command:['node','tools/merge-proof-contracts.mjs','--level',run,cache,...Array.from({length:81},(_,i)=>`research/${run}-batch-${i+1}.proof-contracts.json`)]}};
 const appPath=archive('research/application.json',app),state={run,stage:'5.9-repair',paused:true,dispatches:{}},request={run,group:'5.8-gate',stages:['5.8-gate'],at:'2020-01-01T00:00:06.000Z'};
 const statePath=archive('research/state.json',state),requestPath=archive('research/request.json',request);put(`.autopilot/${run}/state.json`,state);put(`.autopilot/${run}/owner-gate-request.json`,request);
 const tool=archive('research/native-tool.json',{role:'tool',run,label:'step5-v2-certify-impact-repeat-r5-all',covers:['all'],ok:true,written_by:'autopilot',ended_at:'2020-01-01T00:00:01.100Z'});
 const payload={version:1,kind:'owner-gate-aggregation-history',run,root,round:1,owner_identity:'/root',historical_only:true,current_review_granted:false,missing_preimage_claimed:false,recorded_at:'2020-01-01T00:00:09.000Z',reason:'The actual native battery generated a deterministic aggregation after certification; this historical transition never supplies native review or missing preimage bytes.',before_capture:capturePath,application:appPath,creation_state:statePath,creation_request:requestPath,battery_preparation:prep,frontier:frontierPath,certificate_tool:tool,original_sha256:oldHash,current_review_targets:[...ids].sort(),bindings};
 const seal=()=>({...payload,sha256:hash(payload)});
 const edit=(path,fn)=>{const value=JSON.parse(readFileSync(join(root,path),'utf8'));fn(value);put(path,value);bind(path);};
 return {root,payload,seal,put,bind,edit,appPath,capturePath,cache,ids,oldHash,cleanup:()=>rmSync(root,{recursive:true,force:true})};
}
function check(name,mutate,pattern){test(name,()=>{const f=fixture();try{mutate(f);assert.throws(()=>validateGateAggregationHistory(f.root,run,f.seal(),{current:true}),pattern);}finally{f.cleanup();}});}
test('real native aggregation reference preserves missing-preimage truth and grants no review',()=>{const f=fixture();try{const v=validateGateAggregationHistory(f.root,run,f.seal(),{current:true});assert.equal(v.original,f.oldHash);assert.deepEqual(v.targets,[...f.ids].sort());assert.equal(v.archive,undefined);recordGateAggregationHistory(f.root,run,f.payload);const ref=gateAggregationEvidenceReference({root:f.root,run},f.cache,f.oldHash);assert.equal(ref.archive,undefined);assert.equal(gateAggregationEvidenceReference({root:f.root,run},'research/other-cache.json',f.oldHash),null);assert.equal(gateAggregationEvidenceReference({root:f.root,run},f.cache,hash('unknown')),null);assert.throws(()=>recordGateAggregationHistory(f.root,run,f.payload),/already started/);}finally{f.cleanup();}});
check('forged old cache hash rejects',f=>f.payload.original_sha256=hash('forged'),/prior cache pin/);
check('changed archived certificate rejects even with owner binding refreshed',f=>{const c=JSON.parse(readFileSync(join(f.root,f.capturePath)));const p=c.files.find(x=>x.path.endsWith('/certification.json')).archive;f.edit(p,d=>d.evidence[f.cache]=hash('forged'));},/bad before bytes/);
check('unavailable old bytes cannot be claimed as an archive',f=>f.payload.missing_preimage_claimed=true,/envelope/);
check('wrong root rejects',f=>f.payload.root='/tmp/elsewhere',/envelope/);
check('wrong phase rejects',f=>f.edit(f.payload.creation_state,s=>s.stage='5.6-impact'),/boundary/);
check('active writer rejects',f=>f.edit(f.payload.creation_state,s=>s.dispatches={u:{startedAt:'now'}}),/boundary/);
check('unpaused creation rejects',f=>f.edit(f.payload.creation_state,s=>s.paused=false),/boundary/);
check('pre-request normalization time rejects',f=>f.edit(f.appPath,a=>a.applied_at='2019-01-01T00:00:00.000Z'),/chronology/);
check('fake successful merge event rejects despite rehashed owner archive',f=>{const c=JSON.parse(readFileSync(join(f.root,f.capturePath)));f.edit(c.native_gate_events,e=>e.find(x=>x.id==='merge-contracts').output='forged');},/actual native battery/);
check('failed merge rejects',f=>{const c=JSON.parse(readFileSync(join(f.root,f.capturePath)));f.edit(c.native_gate_events,e=>e.find(x=>x.id==='merge-contracts').code=1);},/actual native battery/);
check('missing graph carrier rejects',f=>f.edit(f.appPath,a=>a.current_vectors.pop()),/incomplete current graph/);
check('duplicate source graph row rejects',f=>f.edit(f.capturePath,c=>c.sources[1]=c.sources[0]),/source vector/);
check('undeclared source deletion rejects',f=>f.put('items/lem-consumer.md',''),/current input changed/);
check('unexplained live metadata edit rejects',f=>f.put(`research/${run}-batch-1.proof-contracts.json`,'{}'),/current input changed/);
check('unexplained live compiled cache edit rejects',f=>f.put(f.cache,'{}'),/current input changed/);
check('missing native tool success rejects',f=>f.edit(f.payload.certificate_tool,t=>t.ok=false),/certification tool/);
check('missing source review target rejects',f=>f.payload.current_review_targets=f.ids.slice(1).sort(),/review floor/);
check('missing indirect consumer review target rejects',f=>f.payload.current_review_targets=f.ids.slice(0,3).sort(),/review floor/);
check('extra source review target cannot widen authority',f=>f.payload.current_review_targets.push('lem-unrelated'),/review floor/);
check('source review credit flag rejects',f=>f.payload.current_review_granted=true,/envelope/);
check('application review credit flag rejects',f=>f.edit(f.appPath,a=>a.review_or_native_coverage_granted=true),/application/);
check('wrong literal metadata before rejects',f=>{const a=JSON.parse(readFileSync(join(f.root,f.appPath)));f.edit(a.approved_proposals[1].path,ops=>ops[2].before='invented');f.edit(f.appPath,a=>a.approved_proposals[1].sha256=f.payload.bindings[a.approved_proposals[1].path]);},/old literal metadata/);

test('actual gate planning keeps all four source duties with one owner in dependency order',()=>{const f=fixture();try{recordGateAggregationHistory(f.root,run,f.payload);const pack=prepareGateRepairPack(f.root,run,'gate',1,[{id:'proof-contract',code:1,output:'ERROR citation-use-unmapped [lem-supplier]: real current citation metadata finding'}]);assert.deepEqual(pack.assignments['1'],f.ids);assert.deepEqual(pack.assignments['2'],[]);assert.deepEqual(pack.assignments['3'],[]);assert.deepEqual(pack.owner_aggregation_current_review_targets,[...f.ids].sort());assert.ok(Object.keys(pack.input_evidence).length>0);}finally{f.cleanup();}});
for(const omit of ['all','supplier','indirect'])test(`real completed-impact barrier refuses missing ${omit} fresh native source rows`,()=>{const f=fixture();try{
 recordGateAggregationHistory(f.root,run,f.payload);const pack=prepareGateRepairPack(f.root,run,'gate',1,[{id:'proof-contract',code:1,output:'ERROR citation-use-unmapped [lem-supplier]: current citation metadata finding'}]);
 const prefix=`research/${run}-step5-v2/`,current=Object.fromEntries(f.ids.map(id=>[id,itemHashGuard(readFileSync(join(f.root,`items/${id}.md`),'utf8'))]));
 const contexts=reviewContextHashes(f.root,f.ids),abs=p=>join(f.root,p),missing=omit==='supplier'?f.ids[0]:f.ids[2];
 const reviews=omit==='all'?[]:f.ids.filter(id=>id!==missing).map(id=>({id,disposition:'unaffected',...contexts[id],uncertain:false,source_urls:[],familiar:true,reason:'This fixture represents an actual collected current scientific review; omitted rows supply no coverage.'}));
 const receipt={version:2,run,phase:'gate',round:1,reviews,created_items:[],changed:[],restated:[],downstream:[],post:current,evidence:{},errors:[]};f.put(prefix+'gate-1-collected.json',receipt);
 const closed={...receipt,evidence:{[abs(prefix+'gate-1-collected.json')]:hash(readFileSync(abs(prefix+'gate-1-collected.json'),'utf8'))}};
 f.put(prefix+'gate-1-closed.json',closed);f.put(prefix+'gate-1-progress.json',{version:2,run,phase:'gate',round:1,passes:['gate'],complete:true});
 assert.throws(()=>verifyCompletedImpact(f.root,run,'gate',1),/missing fresh native gate-source review/);
 }finally{f.cleanup();}});

test('actual certificate verification accepts historical relative pin but rejects changed fresh absolute cache pin',()=>{const f=fixture(),cwd=process.cwd();process.chdir(f.root);try{
 recordGateAggregationHistory(f.root,run,f.payload);assert.equal(verifyCertification(f.root,run).items.length,0,'history invents no certificate items');
 const p=`research/${run}-step5-v2/certification.json`,c=JSON.parse(readFileSync(join(f.root,p),'utf8'));c.phase='gate';c.round=1;c.evidence[join(f.root,f.cache)]=hash(readFileSync(join(f.root,f.cache),'utf8'));delete c.sha256;c.sha256=hash(c);f.put(p,c);
 assert.ok(verifyCertification(f.root,run));f.put(f.cache,'arbitrary later current cache edit');assert.throws(()=>verifyCertification(f.root,run),/Step 5 evidence changed/);
 }finally{process.chdir(cwd);f.cleanup();}});
test('historical source archive remains valid after later ordinary source edit without granting its current review',()=>{const f=fixture();try{
 recordGateAggregationHistory(f.root,run,f.payload);f.put('items/lem-supplier.md',readFileSync(join(f.root,'items/lem-supplier.md'),'utf8')+'A later actual ordinary repair.\n');
 assert.ok(gateAggregationEvidenceReference({root:f.root,run},f.cache,f.oldHash));assert.throws(()=>validateGateAggregationHistory(f.root,run,JSON.parse(readFileSync(join(f.root,`research/${run}-step5-v2/gate-1-owner-aggregation-history.json`),'utf8')),{current:true}),/current input changed/);
 }finally{f.cleanup();}});
check('forged rehashed owner certificate archives cannot replace actual immutable native certificate',f=>{
 const capture=JSON.parse(readFileSync(join(f.root,f.capturePath),'utf8')),cert=JSON.parse(readFileSync(join(f.root,`research/${run}-step5-v2/certification.json`),'utf8'));cert.evidence[f.cache]=hash('forged');delete cert.sha256;cert.sha256=hash(cert);const text=JSON.stringify(cert,null,2)+'\n';
 for(const row of capture.files.filter(x=>x.path.includes('/certification'))){f.put(row.archive,text);f.bind(row.archive);row.sha256=hash(text);}capture.prior_cert_evidence=cert.evidence;f.put(f.capturePath,capture);f.bind(f.capturePath);f.payload.original_sha256=cert.evidence[f.cache];
},/immutable native certificate/);

test('actual native collection cannot adopt unavailable old cache as worker supporting bytes',()=>{const f=fixture(),cwd=process.cwd();process.chdir(f.root);try{
 recordGateAggregationHistory(f.root,run,f.payload);const pack=prepareGateRepairPack(f.root,run,'gate',1,[{id:'proof-contract',code:1,output:'ERROR citation-use-unmapped [lem-supplier]: current citation metadata finding'}]);const contexts=reviewContextHashes(f.root,f.ids);
 for(const unit of pack.units){const label=workerLabel('gate',1,unit);f.put(`research/${run}-step5-v2/${label}.json`,{run,phase:'gate',round:1,unit,input_sha256:hash(pack),decisions:[],reviews:pack.assignments[unit].map(id=>({id,disposition:'unaffected',...contexts[id],reason:'Actual detailed native source and consumer review of the current proof and interfaces.',uncertain:false,source_urls:[],familiar:true})),created_items:[],downstream:[],ledger_updates:[],gate_resolutions:(pack.gateAssignments[unit]??[]).map(d=>({index:d.index,reason:'The actual assigned current contract diagnostic is resolved in this focused fixture without waiving any gate.',uncertain:false,source_urls:[],familiar:true})),supporting_evidence:unit==='1'?{[f.cache]:f.oldHash}:{}});f.put(`research/${run}-dispatch/alpha-repair-${label}.result.json`,{run,role:'alpha-repair',label,covers:[unit],ok:true,model:'gpt-6.1-sol',provider_effort:'high'});}
 assert.throws(()=>collect(f.root,run,'gate',1),/supporting metadata preimage unavailable/);
 }finally{process.chdir(cwd);f.cleanup();}});
