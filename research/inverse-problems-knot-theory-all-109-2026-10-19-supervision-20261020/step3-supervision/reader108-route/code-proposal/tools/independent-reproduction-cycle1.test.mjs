import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import * as api from './step3-owner-assigned-consumer-witness.mjs';
const sha=b=>createHash('sha256').update(b).digest('hex');
function fixture(t) {
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'assigned-witness-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 const put=(p,x)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),typeof x==='string'?x:JSON.stringify(x));};
 const ref=(p,x)=>{put(p,x);return{path:p,sha256:sha(fs.readFileSync(path.join(root,p)))}};
 const source=(id,deps=[])=>`---\nid: ${id}\nkind: lemma\nstatus: draft\npipeline_run: r\ndeps: ${JSON.stringify(deps)}\n---\nProof for ${id}.\n`;
 const supplier=source('lem-supplier'),actual=source('alg-actual',['lem-supplier']),named=source('def-named');
 for(const [id,body] of [['lem-supplier',supplier],['alg-actual',actual],['def-named',named]])put('items/'+id+'.md',body);
 put('research/r-batch-1.pages.json',[{id:'own',items:[{id:'def-named',deps:[]},{id:'alg-actual',deps:['lem-supplier']}]}]);put('research/r-batch-2.pages.json',[{id:'foreign',items:['lem-supplier']}]);
 const original={id:'lem-supplier',subject_type:'in-run-dependency',consumer_id:'def-named',observed_source:{snapshot:'current',item_sha256:sha(supplier)},location:'Proof',defect:'ill-formed',evidence:'Native proof-format observation.',severity:'nonfatal'};
 const findings={batch:'1',findings:[original],coverage_note:'Original complete native JSON.'};put('research/r-reader-findings-1.json',findings);
 const report='Native report lem-supplier def-named '+sha(supplier);put('research/r-reader-1.md',report);
 const stem='research/r-dispatch/reader-reader-1.attempt-1',prompt=ref(stem+'.prompt.md','Actual native prompt.'),last=ref(stem+'.last-message.json',findings);
 const native=ref(stem+'.result.json',{run:'r',role:'reader',label:'reader-1',attempt:1,session_id:'session',covers:['1'],ok:true,exit_code:0,process_exit_code:0,timed_out:false,terminal_summary:{task_completed:true,final_response_present:true},ended_at:'2026-10-21T01:00:00Z',prompt:'/repo/'+prompt.path,tail:'clipped tail'});
 const archivedFindings=ref('research/r-archive/findings.json',findings),evidence=ref('research/r-archive/use-evidence.json',{literal_use:'Actual assigned algorithm invokes the supplier directly.'});
 const capture=ref('research/r-archive/capture.json',{version:1,run:'r',owner_identity:'/root',basis:'root-capture-of-existing-native-last-message-no-native-output-digest',native_output_digest_absent:true,native_tail_complete:false,native_result_sha256:native.sha256,prompt_sha256:prompt.sha256,native_last_message_sha256:last.sha256,findings_sha256:archivedFindings.sha256,native_attempt:1,native_session_id:'session',at:'2026-10-21T01:01:00Z',evidence:'Root explicitly captures this existing complete native last-message. The clipped result tail is not a full output attestation and no native digest is claimed.'});
 const observed=ref('research/r-archive/source.md',supplier),consumer=ref('research/r-archive/consumer.md',actual);
 const ownerReview=ref('research/r-archive/review.json',{run:'r',owner_identity:'/root',obligation:'reader:1:1',native_consumer_id:'def-named',actual_consumer_id:'alg-actual',source_sha256:observed.sha256,consumer_sha256:consumer.sha256,actual_declared_edge:'deps',native_severity:'nonfatal',original_obligation_owed:true,native_acceptance_claimed:false,evidence:'Root reviews this exact supplier observation and actual direct assigned use. The named definition has no such edge; original obligation remains independently owed.',evidence_refs:[evidence]});
 const carrier={item_sha256:sha(supplier),contract_sha256:'a'.repeat(64),manifest_sha256:'b'.repeat(64)};
 const snap=(n,ids,hashes)=>ref(`research/r-step3-hash-${n}-pre.json`,{version:2,run:'r',batch:n,label:'pre',manifest:ids,hashes});
 const e={version:1,policy:api.ASSIGNED_WITNESS_POLICY,run:'r',owner_identity:'/root',reviewed:true,mathematical_acceptance:false,edit_permission:false,scope_waiver:false,home_coverage_owed:true,origin_batch:'1',producer_batch:'2',index:1,id:'lem-supplier',consumer_id:'def-named',actual_consumer_id:'alg-actual',scope_misattribution:'named-and-actual-consumers-both-assigned',reason:'Owner confirms the named definition does not consume this supplier, while the already-assigned algorithm has a genuine declared direct edge. No dependency is invented.',at:'2026-10-21T01:02:00Z',findings:archivedFindings,report:ref('research/r-archive/report.md',report),native_result:native,prompt,native_last_message:last,capture,origin_pre:snap('1',['def-named','alg-actual'],{}),producer_pre:snap('2',['lem-supplier'],{'lem-supplier':carrier}),observed_source:observed,actual_consumer:consumer,owner_review:ownerReview,edge_kind:'deps',finding_sha256:api.assignedWitnessHash(original)};
 const doc={version:1,run:'r',policy:api.ASSIGNED_WITNESS_POLICY,authorized_by:'owner',authorization:'Root explicitly authorizes only these exact same-assignment observation witnesses.',routes:[e]};
 const save=()=>put('research/r-step3-owner-assigned-consumer-witnesses.json',doc);save();
 const dependencies=new Map([['lem-supplier',{producer_batch:'2',consumers:new Map([['alg-actual',['alg-actual','lem-supplier']]])}]]);
 return{root,put,ref,e,doc,save,original,dependencies,current:{producer_batch:'2',...carrier},finding:()=>({obligation:'reader:1:1',...structuredClone(original)})};
}
test('explicit registration preserves native attribution and requires ordinary existing actual path',t=>{
 const f=fixture(t),finding=f.finding(),route=api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies);
 assert.equal(route.e.actual_consumer_id,'alg-actual');assert.equal(finding.consumer_id,'def-named');
 finding.owner_assigned_consumer_witness=route.binding;finding.owner_actual_consumer_id='alg-actual';
 assert.ok(api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies));
 assert.ok(api.assignedConsumerWitnessClosureEvidence(f.root,'r')[f.e.native_last_message.path]);
});
test('default absent registry does not repair wrong named route; removed registration rejects bound authority',t=>{
 const f=fixture(t),finding=f.finding(),route=api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies);
 finding.owner_assigned_consumer_witness=route.binding;finding.owner_actual_consumer_id='alg-actual';
 fs.unlinkSync(path.join(f.root,'research/r-step3-owner-assigned-consumer-witnesses.json'));
 assert.equal(api.assignedConsumerWitness(f.root,'r','1',f.finding(),f.dependencies),null);
 assert.equal(f.dependencies.get('lem-supplier').consumers.has('def-named'),false);
 assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies),/unregistered/);
});
for(const [label,mutate] of Object.entries({
 'native consumer mutation':f=>{f.original.consumer_id='alg-actual'},
 'acceptance expansion':f=>{f.e.mathematical_acceptance=true},
 'permission expansion':f=>{f.e.edit_permission=true},
 'duplicate registration':f=>{f.doc.routes.push(structuredClone(f.e))},
 'actual consumer no edge':f=>{f.put('items/alg-actual.md','Changed')},
 'duplicate producer home':f=>{f.put('research/r-batch-3.pages.json',[{id:'fake',items:['lem-supplier']}])},
 'foreign actual consumer':f=>{f.e.actual_consumer_id='foreign-consumer'},
 'unbound archive':f=>{f.e.observed_source.sha256='c'.repeat(64)},
 'native result rewritten':f=>{f.put(f.e.native_result.path,'{}')},
 'complete last-message rewritten':f=>{f.put(f.e.native_last_message.path,'{}')},
 'capture not root':f=>{const x=JSON.parse(fs.readFileSync(path.join(f.root,f.e.capture.path)));x.owner_identity='other';f.e.capture=f.ref('research/r-archive/bad-capture.json',x)},
 'capture claims full tail':f=>{const x=JSON.parse(fs.readFileSync(path.join(f.root,f.e.capture.path)));x.native_tail_complete=true;f.e.capture=f.ref('research/r-archive/bad-capture.json',x)},
 'native output digest unexpectedly present':f=>{const x=JSON.parse(fs.readFileSync(path.join(f.root,f.e.native_result.path)));x.output_sha256='a'.repeat(64);f.e.native_result=f.ref(f.e.native_result.path,x)},
 'lost producer baseline':f=>{const x=JSON.parse(fs.readFileSync(path.join(f.root,f.e.producer_pre.path)));delete x.hashes['lem-supplier'].contract_sha256;f.e.producer_pre=f.ref(f.e.producer_pre.path,x)},
 'obligation waived':f=>{const x=JSON.parse(fs.readFileSync(path.join(f.root,f.e.owner_review.path)));x.original_obligation_owed=false;f.e.owner_review=f.ref('research/r-archive/bad-review.json',x)},
 'selected scalar with alternate array':f=>{const body='---\nid: alg-actual\nstatus: draft\npipeline_run: r\ndeps: lem-supplier\njustified_by: [lem-supplier]\n---\n';f.e.actual_consumer=f.ref('research/r-archive/bad-consumer.md',body)},
}))test('reject '+label,t=>{const f=fixture(t);mutate(f);f.save();assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',f.finding(),f.dependencies));});
test('missing actual path, changed frozen authority and altered finding text reject',t=>{
 const f=fixture(t);assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',f.finding(),new Map()),/ordinary assigned/);
 let finding=f.finding();finding.evidence+=' Changed';assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies),/native finding changed/);
 finding=f.finding();finding.owner_assigned_consumer_witness={path:'invented',entry_sha256:'a'.repeat(64)};finding.owner_actual_consumer_id='alg-actual';assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies),/binding changed/);
});
test('refuter anchor preserves independent flag and current observation',t=>{
 const f=fixture(t),finding={obligation:'refuter:1:1',owner_assigned_reader_obligation:'reader:1:1',id:'lem-supplier',consumer_id:'def-named',subject_type:'in-run-dependency',observed_source:{snapshot:'current',item_sha256:'f'.repeat(64)},location:'Independent',defect:'ill-formed',evidence:'Independent current flag',severity:'fatal'};
 assert.ok(api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies));assert.equal(finding.evidence,'Independent current flag');assert.equal(finding.severity,'fatal');
});
test('frozen evidence tolerates later live repairs but never archive mutation',t=>{
 const f=fixture(t),before=api.assignedConsumerWitnessClosureEvidence(f.root,'r');f.put('items/alg-actual.md','Later repair');
 assert.throws(()=>api.loadAssignedConsumerWitnesses(f.root,'r'));
 assert.deepEqual(api.assignedConsumerWitnessClosureEvidence(f.root,'r',{frozenArtifacts:before}),before);
 f.put(f.e.observed_source.path,'History changed');assert.throws(()=>api.assignedConsumerWitnessClosureEvidence(f.root,'r',{frozenArtifacts:before}));
});

test('staged CLI split/collect/check retain complete native finding and independent same-id flag',t=>{
 const f=fixture(t),proposal=path.dirname(new URL(import.meta.url).pathname),repoTools=path.dirname(fs.realpathSync(path.join(proposal,'pathway-lib.mjs')));
 fs.mkdirSync(path.join(f.root,'tools'));
 for(const name of fs.readdirSync(repoTools))fs.symlinkSync(path.join(repoTools,name),path.join(f.root,'tools',name));
 for(const name of ['risk-report.mjs','step3-scope.mjs','step3-owner-assigned-consumer-witness.mjs']) {
  const dest=path.join(f.root,'tools',name);if(fs.existsSync(dest))fs.unlinkSync(dest);fs.copyFileSync(path.join(proposal,name),dest);
 }
 const cli=(...args)=>spawnSync(process.execPath,[path.join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root],{cwd:f.root,encoding:'utf8'});
 const ok=(...args)=>{const r=cli(...args);assert.equal(r.status,0,r.stderr+r.stdout);return r;};
 f.put('research/r-batch-1.pages.json',[{id:'own',category:'test',items:[{id:'def-named',deps:[]},{id:'alg-actual',deps:['lem-supplier']}]}]);
 f.put('research/r-batch-2.pages.json',[{id:'foreign',category:'test',items:['lem-supplier']}]);
 f.put('library/test/own.md','---\npage: own\n---\n');f.put('library/test/foreign.md','---\npage: foreign\n---\n');
 f.put('research/r-alpha-groups.json',[{label:'batch-1',covers:['1']}]);
 f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['def-named','alg-actual'],contracts:{'def-named':{},'alg-actual':{}}});
 f.put('research/r-batch-2.proof-contracts.json',{version:1,scope:['lem-supplier'],contracts:{'lem-supplier':{}}});
 for(const n of ['1','2'])for(const label of ['pre','post'])ok('hash','--run','r','--batch',n,'--label',label);
 for(const [key,n]of [['origin_pre','1'],['producer_pre','2']])f.e[key]={path:`research/r-step3-hash-${n}-pre.json`,sha256:sha(fs.readFileSync(path.join(f.root,`research/r-step3-hash-${n}-pre.json`)))};
 f.save();const registered=fs.readFileSync(path.join(f.root,'research/r-step3-owner-assigned-consumer-witnesses.json'));fs.unlinkSync(path.join(f.root,'research/r-step3-owner-assigned-consumer-witnesses.json'));const defaultSplit=cli('split','--run','r','--batch','1');assert.notEqual(defaultSplit.status,0);assert.match(defaultSplit.stderr,/assigned consumer reaching/);f.put('research/r-step3-owner-assigned-consumer-witnesses.json',registered.toString());
 const original=fs.readFileSync(path.join(f.root,'research/r-reader-findings-1.json'),'utf8');
 ok('split','--run','r','--batch','1');let scope=JSON.parse(fs.readFileSync(path.join(f.root,'research/r-step3-scope-1.json')));
 assert.ok(scope.refuter_scope.includes('lem-supplier'));assert.equal(scope.reader_findings[0].consumer_id,'def-named');assert.equal(scope.reader_findings[0].owner_actual_consumer_id,'alg-actual');assert.equal(scope.reader_findings[0].dependency_path[0].id,'alg-actual');
 f.put('items/lem-supplier.md',fs.readFileSync(path.join(f.root,'items/lem-supplier.md'),'utf8')+'Later ordinary producer repair.\n');
 f.put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[{id:'lem-supplier',location:'New independent location',defect:'ill-formed',evidence:'Independent refuter current-source observation.',severity:'fatal'}],coverage_note:'Opened all required assigned and supplier bodies.'});
 ok('collect','--run','r','--batch','1');scope=JSON.parse(fs.readFileSync(path.join(f.root,'research/r-step3-scope-1.json')));
 assert.equal(scope.refuter_findings[0].owner_assigned_reader_obligation,'reader:1:1');assert.equal(scope.refuter_findings[0].evidence,'Independent refuter current-source observation.');assert.equal(scope.refuter_findings[0].severity,'fatal');assert.notEqual(scope.refuter_findings[0].observed_source.item_sha256,scope.reader_findings[0].observed_source.item_sha256);
 assert.equal(fs.readFileSync(path.join(f.root,'research/r-reader-findings-1.json'),'utf8'),original);
 const result=cli('check','--run','r','--phase','adjudicate');assert.doesNotMatch(result.stderr,/assigned consumer reaching|invalid frozen dependency path|findings no longer match|assigned consumer witness:/);assert.notEqual(result.status,0,'ordinary ledger decisions still owed');
});

test('frozen path substitution and frozen registry replacement reject',t=>{
 const f=fixture(t),finding=f.finding(),route=api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies);
 finding.owner_assigned_consumer_witness=route.binding;finding.owner_actual_consumer_id='alg-actual';finding.producer_carrier_at_split=f.current;
 finding.dependency_path=[{id:'alg-actual',item_sha256:f.e.actual_consumer.sha256},{id:'lem-supplier',item_sha256:f.current.item_sha256}];
 assert.ok(api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies));finding.dependency_path[0].item_sha256='a'.repeat(64);assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',finding,f.dependencies),/frozen actual path/);
 const frozen=api.assignedConsumerWitnessClosureEvidence(f.root,'r');f.doc.authorization+=' Extra';f.save();assert.throws(()=>api.assignedConsumerWitnessClosureEvidence(f.root,'r',{frozenArtifacts:frozen}),/frozen witness evidence/);
});

function consistentNativeMutation(f,mutate) {
 const n=JSON.parse(fs.readFileSync(path.join(f.root,f.e.native_result.path)));mutate(n);f.e.native_result=f.ref(f.e.native_result.path,n);
 const c=JSON.parse(fs.readFileSync(path.join(f.root,f.e.capture.path)));c.native_result_sha256=f.e.native_result.sha256;
 if(n.session_id===undefined)delete c.native_session_id;else c.native_session_id=n.session_id;
 f.e.capture=f.ref(f.e.capture.path,c);f.save();
}
for(const [name,edit]of[
 ['contradictory aborted native completion',n=>n.terminal_summary.task_aborted=true],
 ['missing native session',n=>delete n.session_id],
 ['autopilot-written synthetic native carrier',n=>n.written_by='autopilot']
])test('independent semantic guard must reject '+name,t=>{const f=fixture(t);consistentNativeMutation(f,edit);assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',f.finding(),f.dependencies));});
test('independent archive guard must reject canonical report via dot-segment alias',t=>{const f=fixture(t);f.e.report={path:'research/r-archive/../r-reader-1.md',sha256:sha(fs.readFileSync(path.join(f.root,'research/r-reader-1.md')))};f.save();assert.throws(()=>api.assignedConsumerWitness(f.root,'r','1',f.finding(),f.dependencies));});
