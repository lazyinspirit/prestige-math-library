import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {MODELS} from './models.mjs';
import {recordedPublishedRepair} from './published-repair-policy.mjs';
import {recordInitialPublishedMaintenance,loadInitialPublishedMaintenance,isInitialPublishedMaintenance,initialPublishedSupportingHistory} from './step5-initial-published-maintenance.mjs';
import {validateReports,collect,prepareImpact,reviewContextHashes,reviewMatchesCurrent} from './step5-workflow.mjs';
import {readLibraryItems} from './step5-rounds.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const run='test-initial-published',id='thm-published',consumer='lem-consumer',dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`;
// Synthetic fixtures authenticate metadata mechanics only. No actual native
// execution, mathematical review, precheck/render run or acceptance is claimed.
function fixture(t,{interfaceChange=true,metadata=true,extraPublished=false,sourceJustified=undefined}={}){
 const root=mkdtempSync(join(tmpdir(),'initial-published-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 for(const d of ['items','library/test',dir,dispatch,`.autopilot/${run}`])mkdirSync(join(root,d),{recursive:true});
 const put=(p,x)=>writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x));
 const original=`---\nid: ${id}\nkind: theorem\ntitle: Published fixture\nstatus: published\ndependency_level: 0\ndeps: []\n${sourceJustified===undefined?'':`justified_by: ${JSON.stringify(sourceJustified)}\n`}verification:\n  audited: 2026-08-01\n---\n\n## Statement\n\nOriginal sound interface.\n\n## Proof\n\nOriginal proof.\n`;
 const originalFile=`research/${run}-original.md`,priorPath=`research/${run}-prior.json`,currentPath=`research/${run}-current.json`;
 const before=original.replace('  audited: 2026-08-01',`  repair: ${priorPath}`).replace('Original proof.','First recorded proof correction.');
 let after=before.replace(priorPath,currentPath).replace('First recorded proof correction.','Second recorded proof correction.');
 if(interfaceChange)after=after.replace('Original sound interface.','Corrected sound interface with its complete hypothesis.');
 if(metadata)after=after.replace('deps: []','deps: [def-context]').replace('dependency_level: 0','dependency_level: 1');
 const context='---\nid: def-context\nkind: definition\ntitle: Context\nstatus: published\ndeps: []\n---\n\n## Definition\n\nA context definition.\n';
 const draft=`---\nid: ${consumer}\nkind: lemma\ntitle: Consumer\nstatus: draft\ndeps: [${id}]\n---\n\n## Statement\n\nA consequence of [[${id}]].\n\n## Proof\n\nA complete fixture proof.\n`;
 put(originalFile,original);put(`items/${id}.md`,before);put(`items/${consumer}.md`,draft);put('items/def-context.md',context);
 const oldReview=reviewContextHashes(root,[consumer])[consumer];
 const beforeFile=`research/${run}-before.md`,currentFile=`research/${run}-after.md`;put(beforeFile,before);put(currentFile,after);put(`items/${id}.md`,after);
 const claim={version:1,run,id,group:'owner-fixture',pre_sha256:itemHashGuard(original),claimed_at:'2026-09-01T00:00:00Z'};
 const claimsPath=`research/${run}-step3-published-claims.jsonl`;put(claimsPath,JSON.stringify(claim)+'\n');
 const claimsSnapshot=`research/${run}-claims.jsonl`,ledgerSnapshot=`research/${run}-ledger.md`;put(claimsSnapshot,JSON.stringify(claim)+'\n');
 function receipt(text,marker,date){
  const guard=itemHashGuard(text),evidence=`\n${id} ${guard}: exact synthetic local repair marker.\n`;
  return {value:{version:1,kind:'recorded-local-published-repair',id,run,group:claim.group,correction:'Synthetic correction of the fixture mathematical carrier.',content_sha256:guard,before_file:originalFile,before_raw_sha256:hash(original),pre_sha256:itemHashGuard(original),recorded_at:date,ledger_marker:marker,ledger_sha256:hash(evidence),local_checks:Object.fromEntries(['precheck','rendercheck'].map(tool=>[tool,{checked_at:date,content_sha256:guard,exit_code:0,command:['node',`tools/${tool}${tool==='precheck'?'.mts':'.mjs'}`,`items/${id}.md`],output:tool==='precheck'?`PASS items/${id}.md\n1 checked, 0 failing`:'OK — 1 file(s)'}]))},block:`<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n`};
 }
 const prior=receipt(before,'prior-marker','2026-09-02T00:00:00Z'),successor=receipt(after,'new-marker','2026-10-01T10:00:00Z');
 put(priorPath,prior.value);successor.value.previous_repair={path:priorPath,sha256:hash(JSON.stringify(prior.value))};put(currentPath,successor.value);
 const ledger=prior.block+successor.block;put('research/published-consumer-supplier-ledger.md',ledger);put(ledgerSnapshot,ledger);
 const extra='thm-unrecognized',extraText=original.replaceAll(id,extra);
 if(extraPublished)put(`items/${extra}.md`,extraText);
 const frontier=freezeFrontier({run,batches:[{id:'1',items:extraPublished?[id,extra]:[id]},{id:'2',items:[consumer]}]});
 const baseline={[id]:itemHashGuard(before),[consumer]:itemHashGuard(draft),'def-context':itemHashGuard(context)};
 if(extraPublished)baseline[extra]=itemHashGuard(extraText);
 const rejected={id:consumer,model:MODELS.luna.id,context_sha256:'c'.repeat(64),keep:false};
 const verdicts=[{id,model:MODELS.luna.id,context_sha256:'b'.repeat(64),keep:false},rejected];
 const pack={version:2,adjudicationSchemaVersion:1,repair_scope:'frontier',frontier_ids:frontier.ids,run,phase:'initial',round:1,judge_model:MODELS.luna.id,units:['1','2'],assignments:{'1':[],'2':[rejected]},before:baseline,before_statements:{[id]:statementHash(before),[consumer]:statementHash(draft),'def-context':statementHash(context)},before_aliases:{},home_pages:{'1':['published'],'2':['consumer']},rejected:[rejected],input_evidence:{[join(root,dir,'step4-verdicts.json')]:hash(verdicts)}};
 if(extraPublished)pack.before_statements[extra]=statementHash(extraText);
 put(`${dir}/frontier.json`,frontier);put(`${dir}/baseline.json`,baseline);put(`${dir}/step4-verdicts.json`,verdicts);put(`${dir}/initial-1.json`,pack);
 const empty={run,phase:'initial',round:1,unit:'1',input_sha256:hash(pack),completion:'mechanical-zero-work',written_by:'step5-workflow',mathematical_review:false,decisions:[],reviews:[],created_items:[],downstream:[],ledger_updates:[],gate_resolutions:[]};
 const zeroLabel='step5-v2-empty-initial-r1-u1',zeroResult={role:'tool',label:zeroLabel,run,covers:['1'],ok:true,written_by:'autopilot',ended_at:'2026-09-30T11:00:00Z'};
 put(`${dir}/step5-v2-initial-r1-u1.json`,empty);put(`${dispatch}/tool-${zeroLabel}.result.json`,zeroResult);
 const report={run,phase:'initial',round:1,unit:'2',input_sha256:hash(pack),decisions:[{...rejected,outcome:'false_positive',reason:'The consumer fixture claim is sound under the original supplier interface.',uncertain:false,source_urls:[],familiar:true}],reviews:[{id:consumer,disposition:'unaffected',...oldReview,reason:'The actual fixture original consumer was reviewed against the old published supplier interface.',uncertain:false,source_urls:[],familiar:true}],created_items:[],downstream:[],ledger_updates:[]};
 const label='step5-v2-initial-r1-u2',stem=`${dispatch}/alpha-adjudicate-${label}.attempt-1`,rp=`${dir}/${label}.json`,dp=`${dispatch}/alpha-adjudicate-${label}.result.json`;
 const result={run,role:'alpha-adjudicate',label,runner:'codex',model:MODELS.sol61.id,provider_effort:'high',covers:['2'],ok:true,attempt:1,evidence_tag:'.attempt-1',started_at:'2026-09-30T10:00:00Z',ended_at:'2026-09-30T11:00:00Z',exit_code:0,process_exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0},prompt:`${stem}.prompt.md`,log:`${stem}.log`};
 const putNative=()=>{put(rp,report);put(dp,result);put(`${stem}.result.json`,result);put(`${stem}.prompt.md`,`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: 2\noutput: ${rp}\ninput_sha256:"${hash(pack)}"`);put(`${stem}.log`,`\ncodex\n${JSON.stringify(report)}\ntokens used\n123\n`);};putNative();
 const state={run,stage:'5.1-adjudicate',paused:true,dispatches:{[`5.1-adjudicate:${zeroLabel}`]:{role:'tool',covers:['1'],attempt:1,lastExitOk:true,startedAt:'2026-09-30T10:00:00Z',endedAt:'2026-09-30T11:00:00Z'},[`5.1-adjudicate:${label}`]:{role:'alpha-adjudicate',covers:['2'],attempt:1,lastExitOk:true,startedAt:'2026-09-30T10:00:00Z',endedAt:'2026-09-30T11:00:00Z'}}};
 const nativeRequest={version:1,run,group:'5.1-adjudicate',stages:['5.1-adjudicate'],id:'actual-fixture-owner-request',at:'2026-10-01T11:00:00Z'};put(`.autopilot/${run}/state.json`,state);put(`.autopilot/${run}/owner-gate-request.json`,nativeRequest);
 const m1=`research/${run}-batch-1.pages.json`,m2=`research/${run}-batch-2.pages.json`,oldManifest=[{id:'published',items:[{id,kind:'theorem',title:'Published fixture',deps:[],dependency_level:0}]}],newManifest=structuredClone(oldManifest);
 if(metadata){newManifest[0].items[0].deps=['def-context'];newManifest[0].items[0].dependency_level=1;}
 if(extraPublished){const row={id:extra,kind:'theorem',title:'Published fixture',deps:[],dependency_level:0};oldManifest[0].items.push(row);newManifest[0].items.push({...row});}
 const consumerManifest=[{id:'consumer',items:[{id:consumer,kind:'lemma',title:'Consumer',deps:[id]}]}];put(m1,newManifest);put(m2,consumerManifest);
 const mb=`research/${run}-manifest-before.json`,ma=`research/${run}-manifest-after.json`,mc=`research/${run}-manifest-consumer.json`;put(mb,oldManifest);put(ma,newManifest);put(mc,consumerManifest);
 const repairFile=`research/${run}-root-repair.json`,consumersFile=`research/${run}-consumer-dispositions.json`;
 const rootRepair={version:1,run,id,authorized_by:'owner',reviewed_by:'root',repairer:'/root/fixture-supplier-owner',confirmed_defect:true,native_execution_coverage_adopted:false,reviewed_at:'2026-10-01T09:00:00Z',before_raw_sha256:hash(before),current_raw_sha256:hash(after),reason:'Actual synthetic root source confirmation describes the mathematical correction and preserves all original native evidence.'};
 const consumers={version:1,run,supplier:id,reviewer:rootRepair.repairer,full_affected_scope_checked:true,native_execution_coverage_adopted:false,items:[{id:consumer,disposition:'sound',affected_use:'The consumer directly invokes the published supplier in its Statement and proof.',reason:'The fixture owner confirms the corrected interface retains the consumer conclusion under all its stated hypotheses.'}]};put(repairFile,rootRepair);put(consumersFile,consumers);
 successor.value.owner_maintenance={root_repair:{path:repairFile,sha256:hash(JSON.stringify(rootRepair))},consumer_dispositions:{path:consumersFile,sha256:hash(JSON.stringify(consumers))}};put(currentPath,successor.value);
 const entry={id,before_file:beforeFile,current_file:currentFile,prior_receipt:{path:priorPath,sha256:hash(JSON.stringify(prior.value))},current_receipt:{path:currentPath,sha256:hash(JSON.stringify(successor.value))},original_claim:claim,root_repair_file:repairFile,consumer_dispositions_file:consumersFile};
 const request={version:1,kind:'owner-initial-published-maintenance',run,phase:'initial',round:1,authorized_by:'owner',owner_identity:'/root',historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false,recorded_at:'2026-10-01T12:00:00Z',reason:'The actual fixture published carriers were excluded from native adjudication and receive ordinary recorded local repairs with unchanged native historical consumer reports.',owner_gate_request_id:nativeRequest.id,original_count:frontier.ids.length,bindings:{},entries:[entry],claims_snapshot_file:claimsSnapshot,ledger_snapshot_file:ledgerSnapshot,manifests:[{path:m1,archive:ma,sha256:hash(JSON.stringify(newManifest))},{path:m2,archive:mc,sha256:hash(JSON.stringify(consumerManifest))}],metadata_carriers:metadata?[{path:m1,before_file:mb,current_file:ma}]:[]};
 const files=[`${dir}/frontier.json`,`${dir}/baseline.json`,`${dir}/step4-verdicts.json`,`${dir}/initial-1.json`,`${dir}/step5-v2-initial-r1-u1.json`,`${dispatch}/tool-${zeroLabel}.result.json`,rp,dp,`${stem}.result.json`,`${stem}.prompt.md`,`${stem}.log`,beforeFile,currentFile,originalFile,priorPath,currentPath,claimsSnapshot,ledgerSnapshot,ma,mb,mc,repairFile,consumersFile];
 const requestPath=`research/${run}-request.json`,save=()=>{request.bindings=Object.fromEntries(files.map(p=>[p,hash(readFileSync(join(root,p),'utf8'))]));put(requestPath,request);};save();
 const now={...baseline,[id]:itemHashGuard(after)};
 if(extraPublished){const changed=extraText.replace('Original proof.','Unrecognized extra published correction.');put(`items/${extra}.md`,changed);now[extra]=itemHashGuard(changed);}
 return {root,put,original,before,after,draft,pack,baseline,frontier,report,empty,result,state,nativeRequest,prior:prior.value,successor:successor.value,priorPath,currentPath,claim,entry,request,requestPath,files,save,putNative,repairFile,consumersFile,rootRepair,consumers,m1,mb,ma,newManifest,now,record:()=>recordInitialPublishedMaintenance(root,run,requestPath)};
}
test('strict bridge authenticates both ordinary published endpoints and preserves native historical rows/current post',t=>{
 const f=fixture(t);assert.equal(recordedPublishedRepair(f.root,id,f.before,f.priorPath).ok,true);assert.equal(recordedPublishedRepair(f.root,id,f.after,f.currentPath).ok,true);
 const plain=validateReports(f.pack,[f.empty,f.report],f.now,{root:f.root});assert.ok(plain.errors.some(x=>x===`unlicensed or unreviewed change ${id}`));
 f.record();const bridge=loadInitialPublishedMaintenance(f.root,run,{current:true});assert.equal(isInitialPublishedMaintenance(bridge,f.pack,f.now),true);
 const checked=validateReports(f.pack,[f.empty,f.report],f.now,{root:f.root,publishedMaintenance:bridge});assert.deepEqual(checked.errors,[]);assert.equal(checked.changed.includes(id),false);assert.deepEqual(checked.reviews,f.report.reviews);
 const oldNative=readFileSync(join(f.root,dir,'step5-v2-initial-r1-u2.json'),'utf8');const receipt=collect(f.root,run,'initial',1);
 assert.equal(receipt.post[id],itemHashGuard(f.after));assert.deepEqual(receipt.reviews,f.report.reviews);assert.deepEqual(receipt.decisions,f.report.decisions);
 assert.ok(receipt.external_supplier_changes.includes(id));assert.ok(receipt.external_supplier_restatements.includes(id));assert.ok(receipt.downstream.includes(consumer));assert.equal(receipt.published_maintenance.current_review_granted,false);
 assert.equal(readFileSync(join(f.root,dir,'step5-v2-initial-r1-u2.json'),'utf8'),oldNative);
 const impact=prepareImpact(f.root,run,'impact-initial',1);
 assert.ok(Object.values(impact.assignments).flat().includes(consumer));
 assert.equal(Object.values(impact.assignments).flat().includes(id),false,'published item never becomes a native repair/judgment subject');
 const library=readLibraryItems(f.root,{run});assert.equal(reviewMatchesCurrent(library,receipt.post,f.report.reviews[0],receipt.post),false,'old interface review is not relabeled current');
});
test('proof-only published successor retains current v3 consumer interface context without a fake review',t=>{
 const f=fixture(t,{interfaceChange:false,metadata:false});f.record();const receipt=collect(f.root,run,'initial',1);
 assert.ok(receipt.external_supplier_changes.includes(id));assert.deepEqual(receipt.external_supplier_restatements,[]);
 assert.equal(reviewMatchesCurrent(readLibraryItems(f.root,{run}),receipt.post,f.report.reviews[0],receipt.post),true);
});
for(const defect of ['before','baseline','before-interface','unpublished','kind','proved','prior-receipt','current-receipt','missing-prior-link','wrong-prior-link','same-marker','claim','owner','root-repair','consumer-owner','missing-consumer','active','wrong-stage','not-paused','wrong-native-request','after-collect','after-impact','impact-dispatch','forged-native','wrong-effort','wrong-prompt','immutable-differs','missing-original-unit','assigned-published','bad-mirror','extra-metadata']){
 test(`initial published bridge rejects ${defect}`,t=>{
  const f=fixture(t),e=f.entry;
  if(defect==='before')f.put(e.before_file,f.before+'forged original\n');
  if(defect==='baseline'){f.baseline[id]='0'.repeat(64);f.put(`${dir}/baseline.json`,f.baseline);}
  if(defect==='before-interface'){f.pack.before_statements[id]='0'.repeat(64);f.put(`${dir}/initial-1.json`,f.pack);}
  if(['unpublished','kind','proved'].includes(defect)){const text=defect==='unpublished'?f.after.replace('status: published','status: draft'):defect==='kind'?f.after.replace('kind: theorem','kind: lemma'):f.after.replace('status: published','status: published\nproved_here: false');f.put(e.current_file,text);f.put(`items/${id}.md`,text);}
  if(defect==='prior-receipt')f.prior.content_sha256='0'.repeat(64);
  if(defect==='current-receipt')f.successor.local_checks.precheck.exit_code=1;
  if(defect==='missing-prior-link')delete f.successor.previous_repair;
  if(defect==='wrong-prior-link')f.successor.previous_repair.sha256='0'.repeat(64);
  if(defect==='same-marker')f.successor.ledger_marker=f.prior.ledger_marker;
  if(['prior-receipt','current-receipt','missing-prior-link','wrong-prior-link','same-marker'].includes(defect)){f.put(f.priorPath,f.prior);f.put(f.currentPath,f.successor);e.prior_receipt.sha256=hash(JSON.stringify(f.prior));e.current_receipt.sha256=hash(JSON.stringify(f.successor));}
  if(defect==='claim')e.original_claim={...f.claim,claimed_at:'2026-08-01T00:00:00Z'};
  if(defect==='owner')e.original_claim={...f.claim,group:'wrong'};
  if(defect==='root-repair'){f.rootRepair.current_raw_sha256='0'.repeat(64);f.put(f.repairFile,f.rootRepair);}
  if(defect==='consumer-owner'){f.consumers.reviewer='/root/other';f.put(f.consumersFile,f.consumers);}
  if(defect==='missing-consumer'){f.consumers.items=[];f.put(f.consumersFile,f.consumers);f.successor.owner_maintenance.consumer_dispositions.sha256=hash(JSON.stringify(f.consumers));f.put(f.currentPath,f.successor);e.current_receipt.sha256=hash(JSON.stringify(f.successor));}
  if(defect==='active')f.state.dispatches.live={startedAt:'2026-10-01'};
  if(defect==='wrong-stage')f.state.stage='5.2-impact';
  if(defect==='not-paused')f.state.paused=false;
  if(['active','wrong-stage','not-paused'].includes(defect))f.put(`.autopilot/${run}/state.json`,f.state);
  if(defect==='wrong-native-request'){f.nativeRequest.group='4-judge';f.put(`.autopilot/${run}/owner-gate-request.json`,f.nativeRequest);}
  if(defect==='after-collect')f.put(`${dir}/initial-1-collected.json`,{});
  if(defect==='after-impact')f.put(`${dir}/impact-initial-1.json`,{});
  if(defect==='impact-dispatch')f.put(`${dispatch}/alpha-repair-step5-v2-impact-initial-r1-u1.result.json`,{});
  if(defect==='forged-native'){f.result.ok=false;f.putNative();}
  if(defect==='wrong-effort'){f.result.provider_effort='medium';f.putNative();}
  if(defect==='wrong-prompt')f.put(`${dispatch}/alpha-adjudicate-step5-v2-initial-r1-u2.attempt-1.prompt.md`,'wrong prompt');
  if(defect==='immutable-differs')f.put(`${dispatch}/alpha-adjudicate-step5-v2-initial-r1-u2.attempt-1.result.json`,{...f.result,extra:true});
  if(defect==='assigned-published'){f.pack.assignments['1']=[{id}];f.put(`${dir}/initial-1.json`,f.pack);}
  if(defect==='bad-mirror'){f.newManifest[0].items[0].deps=[];f.put(f.ma,f.newManifest);f.put(f.m1,f.newManifest);f.request.manifests[0].sha256=hash(JSON.stringify(f.newManifest));}
  if(defect==='extra-metadata'){f.newManifest[0].items[0].statement='invented';f.put(f.ma,f.newManifest);f.put(f.m1,f.newManifest);f.request.manifests[0].sha256=hash(JSON.stringify(f.newManifest));}
  f.save();if(defect==='missing-original-unit')rmSync(join(f.root,dir,'step5-v2-initial-r1-u1.json'));
  assert.throws(f.record);assert.equal(existsSync(join(f.root,dir,'initial-1-owner-published-maintenance.json')),false);
 });
}
test('an omitted changed published subject remains rejected under a genuine loaded bridge',t=>{
 const f=fixture(t,{extraPublished:true});f.record();const bridge=loadInitialPublishedMaintenance(f.root,run,{current:true});
 const result=validateReports(f.pack,[f.empty,f.report],f.now,{root:f.root,publishedMaintenance:bridge});
 assert.ok(result.errors.includes('unlicensed or unreviewed change thm-unrecognized'));
 assert.ok(result.errors.includes('change without confirmed adjudication thm-unrecognized'));
});
test('historical manifest bridge preserves authentic native supporting bytes through later append-only ledger/claim changes',t=>{
 const f=fixture(t);f.record();const oldHash=hash(readFileSync(join(f.root,f.mb),'utf8'));
 const support=initialPublishedSupportingHistory({root:f.root,run},join(f.root,f.m1),oldHash);assert.equal(support.archive,join(f.root,f.mb));
 f.put('research/published-consumer-supplier-ledger.md',readFileSync(join(f.root,'research/published-consumer-supplier-ledger.md'),'utf8')+'\nAn unrelated later ledger append.\n');
 const claimsPath=`research/${run}-step3-published-claims.jsonl`;f.put(claimsPath,readFileSync(join(f.root,claimsPath),'utf8')+JSON.stringify({id:'thm-other',group:'other'})+'\n');
 assert.equal(loadInitialPublishedMaintenance(f.root,run).ids.has(id),true);
});

import {execFileSync} from 'node:child_process';
function firstConsumerFixture(t){
 const f=fixture(t),child='ex-first-consumer',before=`---\nid: ${child}\nkind: example\ntitle: First consumer fixture\nstatus: published\ndeps: [${id}]\nverification:\n  audited: 2026-08-01\n---\n\n## Example\n\nThe original full example claim remains unchanged.\n\n## Facts & Assumptions\n\n[F1] The original supplier quote has a construction detail requiring a focused correction. [[${id}]]\n\n## Verification\n\nThe fixture verification uses its supplier's actual sound conclusion.\n`;
 const beforeFile=`research/${run}-first-consumer-before.md`,afterFile=`research/${run}-first-consumer-after.md`,receiptPath=`research/${run}-first-consumer-repair.json`;
 const after=before.replace('  audited: 2026-08-01',`  repair: ${receiptPath}`).replace('original supplier quote has a construction detail requiring a focused correction','corrected supplier quote retains its complete sound conclusion without the stale detail');
 f.put(`items/${child}.md`,before);f.put(beforeFile,before);f.put(afterFile,after);
 const git=(...args)=>execFileSync('git',['-C',f.root,'-c','user.name=Fixture','-c','user.email=fixture@example.invalid','-c','commit.gpgsign=false','-c','core.hooksPath=/dev/null',...args],{env:{...process.env,GIT_AUTHOR_DATE:'2026-08-15T00:00:00Z',GIT_COMMITTER_DATE:'2026-08-15T00:00:00Z'},stdio:'pipe'}).toString().trim();
 git('init','-q');git('add',`items/${child}.md`);git('commit','-qm','Original audited published example');const commit=git('rev-parse','HEAD');f.put(`items/${child}.md`,after);
 f.baseline[child]=itemHashGuard(before);f.pack.before_statements[child]=statementHash(before);f.now[child]=itemHashGuard(after);
 f.put(`${dir}/baseline.json`,f.baseline);f.put(`${dir}/initial-1.json`,f.pack);f.report.input_sha256=hash(f.pack);f.empty.input_sha256=hash(f.pack);f.put(`${dir}/step5-v2-initial-r1-u1.json`,f.empty);f.putNative();
 const claim={version:1,run,id:child,group:'owner-fixture-consumer',pre_sha256:itemHashGuard(before),claimed_at:'2026-09-01T00:00:00Z'};
 const claimsPath=`research/${run}-step3-published-claims.jsonl`,claims=readFileSync(join(f.root,claimsPath),'utf8')+JSON.stringify(claim)+'\n';f.put(claimsPath,claims);f.put(f.request.claims_snapshot_file,claims);
 const guard=itemHashGuard(after),marker='first-consumer-marker',evidence=`\n${child} ${guard}: first ordinary consumer repair.\n`;
 const publication={commit,path:`items/${child}.md`,before_raw_sha256:hash(before)};
 const repairFile=`research/${run}-first-consumer-root.json`,consumersFile=`research/${run}-first-consumer-dispositions.json`;
 const rootRepair={...f.rootRepair,id:child,before_raw_sha256:hash(before),current_raw_sha256:hash(after)};
 const dispositions={...f.consumers,supplier:child,items:[]};f.put(repairFile,rootRepair);f.put(consumersFile,dispositions);
 const receipt={version:1,kind:'recorded-local-published-repair',run,id:child,group:claim.group,correction:'First ordinary necessary correction of the unchanged-claim consumer quote.',content_sha256:guard,before_file:beforeFile,before_raw_sha256:hash(before),pre_sha256:itemHashGuard(before),recorded_at:'2026-10-01T10:00:00Z',prior_publication_commit:commit,previous_publication:publication,ledger_marker:marker,ledger_sha256:hash(evidence),local_checks:Object.fromEntries(['precheck','rendercheck'].map(tool=>[tool,{checked_at:'2026-10-01T10:00:00Z',content_sha256:guard,exit_code:0,command:['node',`tools/${tool}${tool==='precheck'?'.mts':'.mjs'}`,`items/${child}.md`],output:tool==='precheck'?`PASS items/${child}.md\n1 checked, 0 failing`:'OK — 1 file(s)'}])),owner_maintenance:{root_repair:{path:repairFile,sha256:hash(JSON.stringify(rootRepair))},consumer_dispositions:{path:consumersFile,sha256:hash(JSON.stringify(dispositions))}}};f.put(receiptPath,receipt);
 const ledgerPath='research/published-consumer-supplier-ledger.md',ledger=readFileSync(join(f.root,ledgerPath),'utf8')+`<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n`;f.put(ledgerPath,ledger);f.put(f.request.ledger_snapshot_file,ledger);
 f.consumers.items.push({id:child,disposition:'repaired',affected_use:'The existing example consumes the original selected published supplier through its explicit fact quote.',reason:'The same scientific owner removes only the stale construction detail while preserving the entire example claim and sound supplier use.'});f.put(f.consumersFile,f.consumers);f.successor.owner_maintenance.consumer_dispositions.sha256=hash(JSON.stringify(f.consumers));f.put(f.currentPath,f.successor);f.entry.current_receipt.sha256=hash(JSON.stringify(f.successor));
 const rejection=JSON.parse(readFileSync(join(f.root,dir,'step4-verdicts.json'),'utf8')).find(row=>row.id===id);
 const entry={id:child,origin_kind:'first-recorded-consumer-repair',before_file:beforeFile,current_file:afterFile,current_receipt:{path:receiptPath,sha256:hash(JSON.stringify(receipt))},original_claim:claim,prior_publication:publication,root_repair_file:repairFile,consumer_dispositions_file:consumersFile,consumer_of:{supplier:id,original_rejection:rejection,affected_use:'The original supplier quote has a construction detail requiring a focused correction.',current_use:'The corrected supplier quote retains its complete sound conclusion without the stale detail.',reason:'This existing audited example directly consumes the original selected-published rejection; the same source owner confirms and repairs its stale quote without changing the example claim.'}};
 f.request.entries.push(entry);f.files.push(beforeFile,afterFile,receiptPath,repairFile,consumersFile);f.save();return {...f,child,childEntry:entry,childReceipt:receipt,childReceiptPath:receiptPath};
}
test('first ordinary audited consumer repair authenticates original publication without fabricating a prior repair',t=>{
 const f=firstConsumerFixture(t);assert.equal(recordedPublishedRepair(f.root,f.child,readFileSync(join(f.root,f.childEntry.current_file),'utf8'),f.childReceiptPath).ok,true);f.record();
 const loaded=loadInitialPublishedMaintenance(f.root,run,{current:true});assert.equal(loaded.ids.has(f.child),true);assert.equal(Object.hasOwn(f.childEntry,'prior_receipt'),false);
 assert.deepEqual(validateReports(f.pack,[f.empty,f.report],f.now,{root:f.root,publishedMaintenance:loaded}).errors,[]);
});
for(const defect of ['fabricated-prior','wrong-publication','wrong-supplier','wrong-rejection','wrong-owner','missing-parent-disposition','changed-claim','new-audit'])test(`first ordinary consumer repair rejects ${defect}`,t=>{
 const f=firstConsumerFixture(t),e=f.childEntry;
 if(defect==='fabricated-prior')e.prior_receipt=f.entry.prior_receipt;
 if(defect==='wrong-publication')e.prior_publication.commit='0'.repeat(40);
 if(defect==='wrong-supplier')e.consumer_of.supplier='thm-unknown';
 if(defect==='wrong-rejection')e.consumer_of.original_rejection={...e.consumer_of.original_rejection,keep:true};
 if(defect==='wrong-owner'){const path=e.root_repair_file,obj=JSON.parse(readFileSync(join(f.root,path),'utf8'));obj.repairer='/root/other';f.put(path,obj);}
 if(defect==='missing-parent-disposition'){f.consumers.items=f.consumers.items.filter(row=>row.id!==f.child);f.put(f.consumersFile,f.consumers);f.successor.owner_maintenance.consumer_dispositions.sha256=hash(JSON.stringify(f.consumers));f.put(f.currentPath,f.successor);f.entry.current_receipt.sha256=hash(JSON.stringify(f.successor));}
 if(defect==='changed-claim'){const text=readFileSync(join(f.root,e.current_file),'utf8').replace('The original full example claim remains unchanged.','A narrower and different example claim.');f.put(e.current_file,text);f.put(`items/${f.child}.md`,text);}
 if(defect==='new-audit'){const text=readFileSync(join(f.root,e.current_file),'utf8').replace('verification:\n','verification:\n  audited: 2026-10-01\n');f.put(e.current_file,text);f.put(`items/${f.child}.md`,text);}
 f.save();assert.throws(f.record);
});
test('authenticated exclusion cannot be enlarged by mutating the returned set or guards',t=>{
 const f=fixture(t);f.record();const loaded=loadInitialPublishedMaintenance(f.root,run,{current:true});loaded.ids.add(consumer);loaded.guards[consumer]=f.now[consumer];
 assert.throws(()=>validateReports(f.pack,[f.empty,f.report],f.now,{root:f.root,publishedMaintenance:loaded}),/guarded loading/);
});

function emptyMirror(f,{beforeValue=[],afterValue=[],removeAfter=false}={}){
 const before=JSON.parse(readFileSync(join(f.root,f.mb),'utf8'));before[0].items[0].justified_by=beforeValue;
 if(removeAfter)delete f.newManifest[0].items[0].justified_by;else f.newManifest[0].items[0].justified_by=afterValue;
 f.put(f.mb,before);f.put(f.ma,f.newManifest);f.put(f.m1,f.newManifest);f.request.manifests[0].sha256=hash(JSON.stringify(f.newManifest));f.save();
}
for(const sourceJustified of [undefined,[]])test(`optional empty source ${sourceJustified===undefined?'absent':'array'} accepts unchanged empty manifest array`,t=>{
 const f=fixture(t,{sourceJustified});emptyMirror(f);f.record();assert.equal(loadInitialPublishedMaintenance(f.root,run,{current:true}).entries.length,1);
});
test('explicit empty optional manifest removal retains exact historical archives',t=>{
 const f=fixture(t);emptyMirror(f,{removeAfter:true});const original=readFileSync(join(f.root,f.mb),'utf8');f.record();assert.equal(readFileSync(join(f.root,f.mb),'utf8'),original);assert.equal(loadInitialPublishedMaintenance(f.root,run,{current:true}).entries.length,1);
});
test('absent optional manifest accepts explicit source empty array',t=>{
 const f=fixture(t,{sourceJustified:[]});f.record();assert.equal(loadInitialPublishedMaintenance(f.root,run,{current:true}).entries.length,1);
});
for(const [label,value]of [['null',null],['nonempty',['def-context']],['string',''],['object',{}]])test(`optional normalization rejects manifest ${label}`,t=>{
 const f=fixture(t);emptyMirror(f,{beforeValue:value,afterValue:value});assert.throws(f.record,/source mirror/);
});
for(const [label,value]of [['null',null],['nonempty',['def-context']],['string','']])test(`optional normalization rejects source ${label} against empty manifest`,t=>{
 const f=fixture(t,{sourceJustified:value});emptyMirror(f);assert.throws(f.record,/source mirror/);
});
test('optional normalization never authorizes a nonpublished manifest carrier',t=>{
 const f=fixture(t),m=f.request.manifests[1],old=JSON.parse(readFileSync(join(f.root,m.archive),'utf8')),before=`research/${run}-nonpublished-before.json`;old[0].items[0].justified_by=[];f.put(before,old);f.files.push(before);f.request.metadata_carriers.push({path:m.path,before_file:before,current_file:m.archive});f.save();assert.throws(f.record,/not an exact old\/current published-source mirror/);
});
