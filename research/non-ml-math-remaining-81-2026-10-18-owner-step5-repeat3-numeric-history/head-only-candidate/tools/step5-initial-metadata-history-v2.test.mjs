import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step5-rounds.mjs';
import {itemHashGuard,itemHashJudge} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {MODELS} from './models.mjs';
import {recordInitialMetadataHistory,loadInitialMetadataHistory,initialMetadataSupportingHistory,recordRepeatMetadataHistory,loadRepeatMetadataHistory} from './step5-initial-metadata-history.mjs';
import {collect,prepareImpact,advanceImpact,certify,reviewContextHashes,verifyCompletedImpact} from './step5-workflow.mjs';
const run='metadata-fixture',dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`,nativeId='ex-box-muller-finite-midpoint-tail',unassigned='lem-unassigned',context='def-context',discharged='def-discharged';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
function fixture(t,version=2){
 const repeat=version===3,phase=repeat?'repeat':'initial',round=repeat?3:1,stage=repeat?'5.5-adjudicate':'5.1-adjudicate';
 const root=mkdtempSync(join(tmpdir(),'initial-level-history-'));t.after(()=>rmSync(root,{recursive:true,force:true}));for(const p of ['items',dir,dispatch,`.autopilot/${run}`])mkdirSync(join(root,p),{recursive:true});
 const put=(p,v)=>writeFileSync(join(root,p),typeof v==='string'?v:JSON.stringify(v));
 const source=(id,kind,level,deps,status='draft',extra='')=>`---\nid: ${id}\nkind: ${kind}\ntitle: ${id}\nstatus: ${status}\ndependency_level: ${level}\ndeps: ${JSON.stringify(deps)}\n${extra}---\n\n## ${kind==='definition'?'Definition':'Statement'}\n\nA fixed complete interface for ${id}.\n\n## Proof\n\n1.1 The original full proof of this fixture. [given] ∎\n`;
 const nativeOriginal=source(nativeId,'example',version>=2?9:2,[context]),nativeBefore=repeat?nativeOriginal:nativeOriginal.replace('original full proof','reviewed repaired proof'),nativeAfter=nativeBefore.replace(`dependency_level: ${version>=2?9:2}`,'dependency_level: 1');
 const unassignedBefore=source(unassigned,'lemma',version>=2?9:2,[nativeId]),unassignedAfter=unassignedBefore.replace('dependency_level: 9','dependency_level: 2');
 const defOriginal=source(discharged,'definition',0,[]),defAfter=source(discharged,'definition',0,[],'draft',`justified_by: [${nativeId}]\n`),ctx=source(context,'definition',0,[],'published');
 const current={[nativeId]:nativeAfter,[unassigned]:unassignedAfter,[discharged]:defAfter,[context]:ctx};for(const [id,s]of Object.entries(current))put(`items/${id}.md`,s);
 const beforeFiles={[nativeId]:`research/${nativeId}-before.md`,[unassigned]:`research/${unassigned}-before.md`};put(beforeFiles[nativeId],nativeBefore);put(beforeFiles[unassigned],unassignedBefore);
 const frontier=freezeFrontier({run,batches:[{id:'1',items:[nativeId,discharged]},{id:'2',items:[context,unassigned]}]}),baseline={[nativeId]:itemHashGuard(nativeOriginal),[unassigned]:itemHashGuard(unassignedBefore),[discharged]:itemHashGuard(defOriginal),[context]:itemHashGuard(ctx)};
 const verdicts=frontier.ids.map(id=>({id,model:repeat?MODELS.sol61.id:MODELS.luna.id,keep:![nativeId,discharged].includes(id),item_sha256:baseline[id],context_sha256:'c'.repeat(64)})),rejected=verdicts.filter(v=>!v.keep),pack={version:2,adjudicationSchemaVersion:1,repair_scope:'frontier',run,phase,round,judge_model:repeat?MODELS.sol61.id:MODELS.luna.id,frontier_ids:frontier.ids,units:['1','2'],assignments:{'1':rejected,'2':[]},rejected,before:baseline,before_statements:Object.fromEntries(Object.entries({...current,[nativeId]:nativeOriginal,[discharged]:defOriginal,[unassigned]:unassignedBefore}).map(([id,s])=>[id,statementHash(s)])),input_evidence:{[join(root,dir,'step4-verdicts.json')]:hash(verdicts)}};
 for(const [name,v]of Object.entries({'frontier.json':frontier,'baseline.json':baseline,'step4-verdicts.json':verdicts,[`${phase}-${round}.json`]:pack}))put(`${dir}/${name}`,v);
 const m1=`research/${run}-batch-1.pages.json`,m2=`research/${run}-batch-2.pages.json`,row=(id,kind,level,deps,extra={})=>({id,kind,title:id,deps,dependency_level:level,...extra});
 const old1=[{id:'page-one',items:[row(nativeId,'example',version>=2?9:2,[context]),row(discharged,'definition',0,[],{justified_by:version===2?[]:[nativeId]})]}],new1=structuredClone(old1);new1[0].items[0].dependency_level=1;new1[0].items[1].justified_by=[nativeId];
 const old2=[{id:'page-two',items:[row(context,'definition',0,[]),row(unassigned,'lemma',version>=2?9:2,[nativeId])]}],new2=structuredClone(old2);new2[0].items[1].dependency_level=2;
 put(m1,new1);put(m2,new2);const mb1='research/manifest-1-before.json',mb2='research/manifest-2-before.json';put(mb1,old1);put(mb2,old2);
 const report={run,phase,round,unit:'1',input_sha256:hash(pack),decisions:rejected.map(v=>({...v,outcome:repeat&&v.id===nativeId?'false_positive':'confirmed_nonfatal',reason:'A concrete fixture source defect was actually corrected in the original native wave.',uncertain:false,source_urls:[],familiar:true})),reviews:[{id:nativeId,disposition:repeat?'unaffected':'repaired',post_sha256:itemHashGuard(nativeBefore),review_context_sha256:'b'.repeat(64),reason:'The authentic original native post contains the proof correction before its purely numeric label adjustment.',uncertain:false,source_urls:[],familiar:true},{id:discharged,disposition:'repaired',post_sha256:itemHashGuard(defAfter),review_context_sha256:'d'.repeat(64),reason:'The authentic original native source contains its nonempty logical-discharge metadata.',uncertain:false,source_urls:[],familiar:true}],created_items:[],downstream:[],ledger_updates:[],supporting_evidence:repeat?{}:{[join(root,m1)]:hash(old1),[join(root,m2)]:hash(old2)}};
 const empty={run,phase,round,unit:'2',input_sha256:hash(pack),completion:'mechanical-zero-work',written_by:'step5-workflow',mathematical_review:false,reviews:[],decisions:[],created_items:[],downstream:[],ledger_updates:[],gate_resolutions:[]};
 const label=`step5-v2-${phase}-r${round}-u1`,stem=`${dispatch}/alpha-adjudicate-${label}.attempt-1`,dp=`${dispatch}/alpha-adjudicate-${label}.result.json`,rp=`${dir}/${label}.json`,result={run,role:'alpha-adjudicate',label,runner:'codex',model:MODELS.sol61.id,provider_effort:'high',covers:['1'],ok:true,attempt:1,evidence_tag:'.attempt-1',started_at:'2026-10-01T10:00:00Z',ended_at:'2026-10-01T11:00:00Z',exit_code:0,process_exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0},log:`${stem}.log`,prompt:`${stem}.prompt.md`};
 const output=structuredClone(report),sync=()=>{report.input_sha256=hash(pack);output.input_sha256=hash(pack);empty.input_sha256=hash(pack);put(rp,report);put(`${dir}/step5-v2-${phase}-r${round}-u2.json`,empty);put(dp,result);put(`${stem}.result.json`,result);put(`${stem}.log`,`\ncodex\n${JSON.stringify(output)}\ntokens used\n100\n`);put(`${stem}.prompt.md`,`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: 1\noutput: ${rp}\ninput_sha256:"${hash(pack)}"`);};sync();
 const zeroLabel=`step5-v2-empty-${phase}-r${round}-u2`;put(`${dispatch}/tool-${zeroLabel}.result.json`,{run,role:'tool',label:zeroLabel,covers:['2'],ok:true,written_by:'autopilot',ended_at:'2026-10-01T11:00:00Z'});
 const observed=(role,label,covers)=>({stage,role,label,covers,attempt:1,lastExitOk:true,startedAt:'2026-10-01T09:59:00Z',endedAt:'2026-10-01T11:01:00Z'}),state={run,stage,paused:true,...(repeat?{stageRounds:{[stage]:round}}:{}),dispatches:{[`${stage}:${label}`]:observed('alpha-adjudicate',label,['1']),[`${stage}:${zeroLabel}`]:observed('tool',zeroLabel,['2'])}},request={version:1,run,id:'actual-fixture-hold',group:stage,stages:[stage],at:'2026-10-01T12:00:00Z'};put(`.autopilot/${run}/state.json`,state);put(`.autopilot/${run}/owner-gate-request.json`,request);
 let priorCertificate;
 if(repeat){const cert={version:2,run,phase:'impact-repeat',round:2,items:[],creations:[],evidence:{}};cert.sha256=hash(cert);priorCertificate=`${dir}/certification-impact-repeat-2.json`;put(priorCertificate,cert);const judge={version:2,run,round,verdicts,certification_sha256:cert.sha256};put(`${dir}/judge-${round}.json`,judge);pack.input_evidence={[join(root,dir,`judge-${round}.json`)]:hash(judge)};put(`${dir}/${phase}-${round}.json`,pack);sync();}
 const payload={version,...(repeat?{prior_certificate:priorCertificate}:{}),reason:'The actual fixture completed initial handoffs precede strictly mechanical numeric dependency labels and source-backed manifest mirror correction, with no scientific source-body or original native evidence change.',carriers:[{path:m1,before_file:mb1},...(version>=2?[{path:m2,before_file:mb2}]:[])],...(version>=2?{source_levels:[{id:nativeId,before:9,after:1,before_file:beforeFiles[nativeId],historical_basis:'native-post'},{id:unassigned,before:9,after:2,before_file:beforeFiles[unassigned],historical_basis:repeat?'unassigned-before':'baseline-keep'}]}:{source_level:{id:nativeId,before:2,after:1,before_file:beforeFiles[nativeId]}})};
 return {root,put,payload,pack,baseline,verdicts,report,output,empty,result,state,request,stem,dp,rp,current,nativeBefore,nativeAfter,unassignedBefore,unassignedAfter,beforeFiles,new1,new2,old1,old2,m1,m2,mb1,mb2,sync,record:()=>repeat?recordRepeatMetadataHistory(root,run,round,payload):recordInitialMetadataHistory(root,run,payload)};
}
test('v1 sole Box-Muller path retains its original strict behavior',t=>{const f=fixture(t,1),r=f.record();assert.deepEqual(r.current_review_targets,[nativeId]);assert.deepEqual(loadInitialMetadataHistory(f.root,run,{current:true}).sourceIds,[nativeId]);});
test('v2 authenticates both genuine native posts and unchanged accepted baseline labels',t=>{
 const f=fixture(t),beforeReport=readFileSync(join(f.root,f.rp),'utf8'),r=f.record(),loaded=loadInitialMetadataHistory(f.root,run,{current:true});assert.deepEqual(r.current_review_targets,[nativeId,unassigned]);assert.equal(loaded.historicalReviews.length,1);assert.equal(loaded.historicalReviews[0].id,nativeId);assert.equal(loaded.historicalGuards[unassigned],f.baseline[unassigned]);assert.equal(readFileSync(join(f.root,f.rp),'utf8'),beforeReport);
 const old=initialMetadataSupportingHistory({root:f.root,run},join(f.root,f.m1),hash(f.old1));assert.equal(readFileSync(old.archive,'utf8'),JSON.stringify(f.old1));
 f.put(`items/${nativeId}.md`,f.nativeAfter+'Later genuine owner work.\n');assert.ok(loadInitialMetadataHistory(f.root,run));assert.throws(()=>loadInitialMetadataHistory(f.root,run,{current:true}));
});
for(const defect of ['published','body-change','Statement-change','deps-change','title-change','extra-label','wrong-before','wrong-after','unknown-basis','duplicate','missing-original-label','baseline','keep-false','assigned-baseline','baseline-has-review','native-report-forged','native-output-forged','native-context-forged','unassigned-native-post','uncertain','wrong-model','failed-native','immutable-result','missing-native-log','wrong-prompt','wrong-final-identity','active','not-paused','wrong-stage','wrong-native-request','missing-handoff','omitted-source-graph','graph-cycle','manifest-title-forged','manifest-extra-field','justification-forged','source-justification-forged','after-collect','after-impact','caller-state','omitted-changed-label','wrong-supporting-preimage','missing-changed-carrier'])test(`v2 numeric history rejects ${defect}`,t=>{
 const f=fixture(t),label=f.payload.source_levels[0];
 if(defect==='published')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('status: draft','status: published'));
 if(defect==='body-change')f.put(`items/${nativeId}.md`,f.nativeAfter+'Unrelated body edit.\n');
 if(defect==='Statement-change')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('A fixed complete interface','A weaker interface'));
 if(defect==='deps-change')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('["def-context"]','[]'));
 if(defect==='title-change')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('title: '+nativeId,'title: altered'));
 if(defect==='extra-label')f.put(f.beforeFiles[nativeId],f.nativeBefore+'\ndependency_level: 9\n');
 if(defect==='wrong-before')label.before=8;
 if(defect==='wrong-after')label.after=3;
 if(defect==='unknown-basis')label.historical_basis='root-says-reviewed';
 if(defect==='duplicate')f.payload.source_levels.push({...label});
 if(defect==='missing-original-label')f.put(f.beforeFiles[nativeId],f.nativeBefore.replace('dependency_level: 9\n',''));
 if(defect==='baseline'){f.baseline[unassigned]='0'.repeat(64);f.put(`${dir}/baseline.json`,f.baseline);}
 if(defect==='keep-false'){f.verdicts.find(v=>v.id===unassigned).keep=false;f.put(`${dir}/step4-verdicts.json`,f.verdicts);}
 if(defect==='assigned-baseline'){f.pack.assignments['2']=[{id:unassigned}];f.put(`${dir}/initial-1.json`,f.pack);f.sync();}
 if(defect==='baseline-has-review'){f.report.reviews.push({id:unassigned});f.sync();}
 if(defect==='native-report-forged'){f.report.reviews[0].post_sha256='0'.repeat(64);f.sync();}
 if(defect==='native-output-forged'){f.output.reviews[0].post_sha256='0'.repeat(64);f.sync();}
 if(defect==='native-context-forged'){f.output.reviews[0].review_context_sha256='0'.repeat(64);f.sync();}
 if(defect==='unassigned-native-post'){label.historical_basis='baseline-keep';}
 if(defect==='uncertain'){f.report.reviews[0].uncertain=true;f.sync();}
 if(defect==='wrong-model'){f.result.model='wrong';f.sync();}
 if(defect==='failed-native'){f.result.ok=false;f.sync();}
 if(defect==='immutable-result')f.put(`${f.stem}.result.json`,{...f.result,ok:false});
 if(defect==='missing-native-log')rmSync(join(f.root,`${f.stem}.log`));
 if(defect==='wrong-prompt')f.put(`${f.stem}.prompt.md`,'wrong prompt');
 if(defect==='wrong-final-identity'){f.output.unit='2';f.sync();}
 if(defect==='active'){f.state.dispatches.live={startedAt:'now'};f.put(`.autopilot/${run}/state.json`,f.state);}
 if(defect==='not-paused'){f.state.paused=false;f.put(`.autopilot/${run}/state.json`,f.state);}
 if(defect==='wrong-stage'){f.state.stage='5.2-impact';f.put(`.autopilot/${run}/state.json`,f.state);}
 if(defect==='wrong-native-request'){f.request.group='4-judge';f.put(`.autopilot/${run}/owner-gate-request.json`,f.request);}
 if(defect==='missing-handoff')rmSync(join(f.root,`${dir}/step5-v2-initial-r1-u2.json`));
 if(defect==='omitted-source-graph'){f.new2[0].items.pop();f.put(f.m2,f.new2);}
 if(defect==='graph-cycle'){f.put(`items/${context}.md`,f.current[context].replace('deps: []','deps: ["'+unassigned+'"]'));f.new2[0].items[0].deps=[unassigned];f.put(f.m2,f.new2);}
 if(defect==='manifest-title-forged'){f.new1[0].items[0].title='invented';f.put(f.m1,f.new1);}
 if(defect==='manifest-extra-field'){f.new1[0].items[0].invented=true;f.put(f.m1,f.new1);}
 if(defect==='justification-forged'){f.new1[0].items[1].justified_by=[context];f.put(f.m1,f.new1);}
 if(defect==='source-justification-forged'){const text=f.current[discharged].replace(nativeId,'lem-made-up');f.put(`items/${discharged}.md`,text);f.new1[0].items[1].justified_by=['lem-made-up'];f.put(f.m1,f.new1);}
 if(defect==='after-collect')f.put(`${dir}/initial-1-collected.json`,{});
 if(defect==='after-impact')f.put(`${dir}/impact-initial-1.json`,{});
 if(defect==='omitted-changed-label')f.payload.source_levels.pop();
 if(defect==='wrong-supporting-preimage'){f.old1[0].items[0].title='forged original metadata';f.put(f.mb1,f.old1);}
 if(defect==='missing-changed-carrier')f.payload.carriers.pop();
 if(defect==='caller-state')f.payload.creation_state='research/fake-state.json';
 assert.throws(f.record);assert.equal(existsSync(join(f.root,dir,'initial-1-owner-metadata-history.json')),false);
});
test('v2 keeps native rows historical, actual post current, and queues every changed draft for real 5.2 review',t=>{
 const f=fixture(t),nativeBytes=readFileSync(join(f.root,f.rp),'utf8');f.record();const result=collect(f.root,run,'initial',1);
 assert.deepEqual(result.metadata_history_current_review_targets,[nativeId,unassigned]);assert.equal(result.post[nativeId],itemHashGuard(f.nativeAfter));assert.equal(result.post[unassigned],itemHashGuard(f.unassignedAfter));assert.deepEqual(result.historical_metadata_reviews,[f.report.reviews[0]]);assert.equal(result.reviews.some(v=>v.id===nativeId),false);assert.equal(result.reviews.some(v=>v.id===unassigned),false);assert.deepEqual(result.decisions,f.report.decisions);assert.equal(readFileSync(join(f.root,f.rp),'utf8'),nativeBytes);
 const pack=prepareImpact(f.root,run,'impact-initial',1);assert.ok(Object.values(pack.assignments).flat().includes(nativeId));assert.ok(Object.values(pack.assignments).flat().includes(unassigned));assert.deepEqual(pack.metadata_history_current_review_targets,[nativeId,unassigned]);
});

test('v3 repeat numeric history preserves actual FP/unaffected row and unassigned-before without fake keep judgment',t=>{
 const f=fixture(t,3),old=readFileSync(join(f.root,f.rp),'utf8');f.record();const h=loadRepeatMetadataHistory(f.root,run,3,{current:true});assert.deepEqual(h.sourceIds,[nativeId,unassigned]);assert.equal(h.historicalReviews.length,1);assert.equal(h.historicalReviews[0].disposition,'unaffected');assert.equal(f.report.decisions.find(r=>r.id===nativeId).outcome,'false_positive');assert.equal(readFileSync(join(f.root,f.rp),'utf8'),old);assert.equal(h.row.phase,'repeat');assert.equal(h.row.version,3);
});
test('v3 native repeat collection retains FP decision but grants zero current review and freezes both fresh impact targets',t=>{
 const f=fixture(t,3);f.record();const result=collect(f.root,run,'repeat',3);assert.deepEqual(result.decisions,f.report.decisions);assert.equal(result.reviews.some(r=>r.id===nativeId),false);assert.deepEqual(result.historical_metadata_reviews,[f.report.reviews[0]]);assert.equal(result.post[nativeId],itemHashGuard(f.nativeAfter));assert.deepEqual(result.metadata_history_current_review_targets,[nativeId,unassigned]);const pack=prepareImpact(f.root,run,'impact-repeat',3);assert.ok(Object.values(pack.assignments).flat().includes(nativeId));assert.ok(Object.values(pack.assignments).flat().includes(unassigned));assert.ok(pack.input_evidence[join(f.root,dir,'repeat-3-collected.json')]);assert.equal(Object.hasOwn(pack.input_evidence,join(f.root,dir,'initial-1-collected.json')),false);assert.throws(()=>certify(f.root,run,'impact-repeat',3));
});
for(const mode of ['body','interface','deps','title','published','extra-label','wrong-after','wrong-before','unknown-basis','fake-keep-basis','assigned-unassigned-basis','missing-carrier','foreign-carrier-field','active','wrong-stage','wrong-round','after-collect','after-impact','failed-native','bad-native-post','bad-context','bad-final','missing-unit','prior-cert','judge-pin','extra-scope','omitted-label'])test(`v3 repeat numeric history rejects ${mode}`,t=>{
 const f=fixture(t,3),label=f.payload.source_levels[0];
 if(mode==='body')f.put(`items/${nativeId}.md`,f.nativeAfter+'Extra proof material.\n');
 if(mode==='interface')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('A fixed complete interface','A different interface'));
 if(mode==='deps')f.put(`items/${nativeId}.md`,f.nativeAfter.replace(`deps: ["${context}"]`,'deps: []'));
 if(mode==='title')f.put(`items/${nativeId}.md`,f.nativeAfter.replace(`title: ${nativeId}`,'title: Forged'));
 if(mode==='published')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('status: draft','status: published'));
 if(mode==='extra-label')f.put(`items/${nativeId}.md`,f.nativeAfter.replace('dependency_level: 1','dependency_level: 1\ndependency_level: 1'));
 if(mode==='wrong-after')label.after=2;if(mode==='wrong-before')label.before=8;if(mode==='unknown-basis')label.historical_basis='invented';
 if(mode==='fake-keep-basis')f.payload.source_levels[1].historical_basis='baseline-keep';if(mode==='assigned-unassigned-basis')label.historical_basis='unassigned-before';
 if(mode==='missing-carrier')f.payload.carriers.pop();
 if(mode==='foreign-carrier-field'){const old=structuredClone(f.old1);old[0].items[0].title='Foreign old title';f.put(f.mb1,old);}
 if(['active','wrong-stage','wrong-round'].includes(mode)){if(mode==='active')f.state.dispatches.running={startedAt:'2026-10-01T12:01:00Z'};if(mode==='wrong-stage')f.state.stage='5.1-adjudicate';if(mode==='wrong-round')f.state.stageRounds['5.5-adjudicate']=2;f.put(`.autopilot/${run}/state.json`,f.state);}
 if(mode==='after-collect')f.put(`${dir}/repeat-3-collected.json`,{});if(mode==='after-impact')f.put(`${dir}/impact-repeat-3.json`,{});
 if(mode==='failed-native'){f.result.ok=false;f.sync();}if(mode==='bad-native-post'){f.report.reviews[0].post_sha256='e'.repeat(64);f.sync();}if(mode==='bad-context'){f.output.reviews[0].review_context_sha256='e'.repeat(64);f.sync();}if(mode==='bad-final'){f.output.phase='initial';f.sync();}
 if(mode==='missing-unit')rmSync(join(f.root,`${dir}/step5-v2-repeat-r3-u2.json`));
 if(mode==='prior-cert'){const cert=JSON.parse(readFileSync(join(f.root,f.payload.prior_certificate),'utf8'));cert.creations.push({id:'lem-fabricated'});f.put(f.payload.prior_certificate,cert);}
 if(mode==='judge-pin'){f.pack.input_evidence={};f.put(`${dir}/repeat-3.json`,f.pack);f.sync();}
 if(mode==='extra-scope'){f.new2[0].items.push({id:'lem-fabricated',kind:'lemma',title:'lem-fabricated',deps:[],dependency_level:0});f.put(f.m2,f.new2);}
 if(mode==='omitted-label')f.payload.source_levels.pop();assert.throws(f.record);
});

function currentRepeatImpactReports(f,pack,{oldPost=false}={}){
 for(const unit of pack.units){const label=`step5-v2-${pack.phase}-r3-u${unit}`,reviews=pack.assignments[unit].map(id=>({id,disposition:'unaffected',...reviewContextHashes(f.root,[id])[id],reason:'A genuine synthetic fresh owner review checked the complete current source and its actual supplier interfaces after the numeric metadata normalization.',uncertain:false,source_urls:[],familiar:true}));if(oldPost)for(const review of reviews)if(review.id===nativeId)review.post_sha256=itemHashGuard(f.nativeBefore);
 f.put(`${dir}/${label}.json`,{run,phase:pack.phase,round:3,unit,input_sha256:hash(pack),decisions:[],reviews,created_items:[],downstream:[],ledger_updates:[]});f.put(`${dispatch}/alpha-repair-${label}.result.json`,{run,role:'alpha-repair',label,covers:[unit],ok:true,model:MODELS.sol61.id,provider_effort:'high'});}
}
test('v3 all numeric targets need real fresh current impact rows before completed closure and certification',t=>{
 const f=fixture(t,3),contextNow=reviewContextHashes(f.root,[discharged])[discharged].review_context_sha256;f.report.reviews.find(r=>r.id===discharged).review_context_sha256=contextNow;f.output.reviews.find(r=>r.id===discharged).review_context_sha256=contextNow;f.sync();f.record();const pack=prepareImpact(f.root,run,'impact-repeat',3);currentRepeatImpactReports(f,pack);assert.equal(advanceImpact(f.root,run,'impact-repeat',3).complete,true);const closed=verifyCompletedImpact(f.root,run,'impact-repeat',3);for(const id of [nativeId,unassigned])assert.ok(closed.reviews.some(r=>r.id===id&&r.post_sha256===itemHashGuard(readFileSync(join(f.root,`items/${id}.md`),'utf8'))));
 const contexts=(root,ids)=>new Map(ids.map(id=>[id,{item_sha256:itemHashJudge(readFileSync(join(root,`items/${id}.md`),'utf8')),context_sha256:'c'.repeat(64)}]));assert.ok(certify(f.root,run,'impact-repeat',3,{contextHasher:contexts}));
});
test('v3 historical FP source review cannot replace fresh current impact row',t=>{
 const f=fixture(t,3);f.record();const pack=prepareImpact(f.root,run,'impact-repeat',3);currentRepeatImpactReports(f,pack,{oldPost:true});assert.throws(()=>advanceImpact(f.root,run,'impact-repeat',3));assert.throws(()=>certify(f.root,run,'impact-repeat',3));
});

test('v3 records paused then ordinary native resumed/drained collect succeeds without spoofing paused state',t=>{
 const f=fixture(t,3);f.record();f.state.paused=false;f.put(`.autopilot/${run}/state.json`,f.state);const result=collect(f.root,run,'repeat',3);assert.equal(result.post[nativeId],itemHashGuard(f.nativeAfter));assert.equal(f.state.paused,false);assert.deepEqual(result.historical_metadata_reviews,[f.report.reviews[0]]);
});
for(const defect of ['wrong-stage','active-writer'])test(`v3 first resumed collection rejects ${defect}`,t=>{
 const f=fixture(t,3);f.record();f.state.paused=false;if(defect==='wrong-stage')f.state.stage='5.6-impact';else f.state.dispatches.running={startedAt:'2026-10-01T12:01:00Z'};f.put(`.autopilot/${run}/state.json`,f.state);assert.throws(()=>collect(f.root,run,'repeat',3));
});

function addExistingCertifiedCreation(f,{badGuard=false}={}){
 const id='lem-existing-native-helper',text=`---\nid: ${id}\nkind: lemma\ntitle: ${id}\nstatus: draft\ndependency_level: 0\ndeps: []\n---\n\n## Statement\n\nAn existing native helper conclusion.\n\n## Proof\n\n1.1 A complete original fixture argument. [given] ∎\n`;
 f.put(`items/${id}.md`,text);const row={id,kind:'lemma',title:id,deps:[],dependency_level:0};f.new2[0].items.push(row);f.old2[0].items.push(row);f.put(f.m2,f.new2);f.put(f.mb2,f.old2);f.pack.before[id]=itemHashGuard(text);f.pack.before_statements[id]=statementHash(text);
 const cert=JSON.parse(readFileSync(join(f.root,f.payload.prior_certificate),'utf8'));cert.items=[{id,guard_sha256:badGuard?'e'.repeat(64):itemHashGuard(text)}];cert.creations=[{id,author_result:'alpha-repair-existing-helper.result.json'}];const {sha256,...body}=cert;cert.sha256=hash(body);f.put(f.payload.prior_certificate,cert);const judgePath=`${dir}/judge-3.json`,judge=JSON.parse(readFileSync(join(f.root,judgePath),'utf8'));judge.certification_sha256=cert.sha256;f.put(judgePath,judge);f.pack.input_evidence[join(f.root,judgePath)]=hash(judge);f.put(`${dir}/repeat-3.json`,f.pack);f.sync();return id;
}
test('v3 complete graph preserves existing certified creation outside original frozen IDs without new scope credit',t=>{
 const f=fixture(t,3),id=addExistingCertifiedCreation(f);f.record();const history=loadRepeatMetadataHistory(f.root,run,3);assert.ok(history.row.sources.some(s=>s.id===id));assert.ok(!history.sourceIds.includes(id));assert.ok(!f.pack.frontier_ids.includes(id));
});
test('v3 existing creation cannot borrow a different prior native certificate guard',t=>{
 const f=fixture(t,3);addExistingCertifiedCreation(f,{badGuard:true});assert.throws(f.record,/creation scope/);
});
