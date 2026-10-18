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
import {recordInitialMetadataHistory,loadInitialMetadataHistory,initialMetadataSupportingHistory} from './step5-initial-metadata-history.mjs';
import {collect,prepareImpact} from './step5-workflow.mjs';
const run='metadata-fixture',dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`,nativeId='ex-box-muller-finite-midpoint-tail',unassigned='lem-unassigned',context='def-context',discharged='def-discharged';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
function fixture(t,version=2){
 const root=mkdtempSync(join(tmpdir(),'initial-level-history-'));t.after(()=>rmSync(root,{recursive:true,force:true}));for(const p of ['items',dir,dispatch,`.autopilot/${run}`])mkdirSync(join(root,p),{recursive:true});
 const put=(p,v)=>writeFileSync(join(root,p),typeof v==='string'?v:JSON.stringify(v));
 const source=(id,kind,level,deps,status='draft',extra='')=>`---\nid: ${id}\nkind: ${kind}\ntitle: ${id}\nstatus: ${status}\ndependency_level: ${level}\ndeps: ${JSON.stringify(deps)}\n${extra}---\n\n## ${kind==='definition'?'Definition':'Statement'}\n\nA fixed complete interface for ${id}.\n\n## Proof\n\n1.1 The original full proof of this fixture. [given] ∎\n`;
 const nativeOriginal=source(nativeId,'example',version===2?9:2,[context]),nativeBefore=nativeOriginal.replace('original full proof','reviewed repaired proof'),nativeAfter=nativeBefore.replace(`dependency_level: ${version===2?9:2}`,'dependency_level: 1');
 const unassignedBefore=source(unassigned,'lemma',version===2?9:2,[nativeId]),unassignedAfter=unassignedBefore.replace('dependency_level: 9','dependency_level: 2');
 const defOriginal=source(discharged,'definition',0,[]),defAfter=source(discharged,'definition',0,[],'draft',`justified_by: [${nativeId}]\n`),ctx=source(context,'definition',0,[],'published');
 const current={[nativeId]:nativeAfter,[unassigned]:unassignedAfter,[discharged]:defAfter,[context]:ctx};for(const [id,s]of Object.entries(current))put(`items/${id}.md`,s);
 const beforeFiles={[nativeId]:`research/${nativeId}-before.md`,[unassigned]:`research/${unassigned}-before.md`};put(beforeFiles[nativeId],nativeBefore);put(beforeFiles[unassigned],unassignedBefore);
 const frontier=freezeFrontier({run,batches:[{id:'1',items:[nativeId,discharged]},{id:'2',items:[context,unassigned]}]}),baseline={[nativeId]:itemHashGuard(nativeOriginal),[unassigned]:itemHashGuard(unassignedBefore),[discharged]:itemHashGuard(defOriginal),[context]:itemHashGuard(ctx)};
 const verdicts=frontier.ids.map(id=>({id,model:MODELS.luna.id,keep:![nativeId,discharged].includes(id),item_sha256:baseline[id],context_sha256:'c'.repeat(64)})),rejected=verdicts.filter(v=>!v.keep),pack={version:2,adjudicationSchemaVersion:1,repair_scope:'frontier',run,phase:'initial',round:1,judge_model:MODELS.luna.id,frontier_ids:frontier.ids,units:['1','2'],assignments:{'1':rejected,'2':[]},rejected,before:baseline,before_statements:Object.fromEntries(Object.entries({...current,[nativeId]:nativeOriginal,[discharged]:defOriginal,[unassigned]:unassignedBefore}).map(([id,s])=>[id,statementHash(s)])),input_evidence:{[join(root,dir,'step4-verdicts.json')]:hash(verdicts)}};
 for(const [name,v]of Object.entries({'frontier.json':frontier,'baseline.json':baseline,'step4-verdicts.json':verdicts,'initial-1.json':pack}))put(`${dir}/${name}`,v);
 const m1=`research/${run}-batch-1.pages.json`,m2=`research/${run}-batch-2.pages.json`,row=(id,kind,level,deps,extra={})=>({id,kind,title:id,deps,dependency_level:level,...extra});
 const old1=[{id:'page-one',items:[row(nativeId,'example',version===2?9:2,[context]),row(discharged,'definition',0,[],{justified_by:version===2?[]:[nativeId]})]}],new1=structuredClone(old1);new1[0].items[0].dependency_level=1;new1[0].items[1].justified_by=[nativeId];
 const old2=[{id:'page-two',items:[row(context,'definition',0,[]),row(unassigned,'lemma',version===2?9:2,[nativeId])]}],new2=structuredClone(old2);new2[0].items[1].dependency_level=2;
 put(m1,new1);put(m2,new2);const mb1='research/manifest-1-before.json',mb2='research/manifest-2-before.json';put(mb1,old1);put(mb2,old2);
 const report={run,phase:'initial',round:1,unit:'1',input_sha256:hash(pack),decisions:rejected.map(v=>({...v,outcome:'confirmed_nonfatal',reason:'A concrete fixture source defect was actually corrected in the original native wave.',uncertain:false,source_urls:[],familiar:true})),reviews:[{id:nativeId,disposition:'repaired',post_sha256:itemHashGuard(nativeBefore),review_context_sha256:'b'.repeat(64),reason:'The authentic original native post contains the proof correction before its purely numeric label adjustment.',uncertain:false,source_urls:[],familiar:true},{id:discharged,disposition:'repaired',post_sha256:itemHashGuard(defAfter),review_context_sha256:'d'.repeat(64),reason:'The authentic original native source contains its nonempty logical-discharge metadata.',uncertain:false,source_urls:[],familiar:true}],created_items:[],downstream:[],ledger_updates:[],supporting_evidence:{[join(root,m1)]:hash(old1),[join(root,m2)]:hash(old2)}};
 const empty={run,phase:'initial',round:1,unit:'2',input_sha256:hash(pack),completion:'mechanical-zero-work',written_by:'step5-workflow',mathematical_review:false,reviews:[],decisions:[],created_items:[],downstream:[],ledger_updates:[],gate_resolutions:[]};
 const label='step5-v2-initial-r1-u1',stem=`${dispatch}/alpha-adjudicate-${label}.attempt-1`,dp=`${dispatch}/alpha-adjudicate-${label}.result.json`,rp=`${dir}/${label}.json`,result={run,role:'alpha-adjudicate',label,runner:'codex',model:MODELS.sol61.id,provider_effort:'high',covers:['1'],ok:true,attempt:1,evidence_tag:'.attempt-1',started_at:'2026-10-01T10:00:00Z',ended_at:'2026-10-01T11:00:00Z',exit_code:0,process_exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0},log:`${stem}.log`,prompt:`${stem}.prompt.md`};
 const output=structuredClone(report),sync=()=>{report.input_sha256=hash(pack);output.input_sha256=hash(pack);empty.input_sha256=hash(pack);put(rp,report);put(`${dir}/step5-v2-initial-r1-u2.json`,empty);put(dp,result);put(`${stem}.result.json`,result);put(`${stem}.log`,`\ncodex\n${JSON.stringify(output)}\ntokens used\n100\n`);put(`${stem}.prompt.md`,`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: 1\noutput: ${rp}\ninput_sha256:"${hash(pack)}"`);};sync();
 const zeroLabel='step5-v2-empty-initial-r1-u2';put(`${dispatch}/tool-${zeroLabel}.result.json`,{run,role:'tool',label:zeroLabel,covers:['2'],ok:true,written_by:'autopilot',ended_at:'2026-10-01T11:00:00Z'});
 const observed=(role,label,covers)=>({stage:'5.1-adjudicate',role,label,covers,attempt:1,lastExitOk:true,startedAt:'2026-10-01T09:59:00Z',endedAt:'2026-10-01T11:01:00Z'}),state={run,stage:'5.1-adjudicate',paused:true,dispatches:{[`5.1-adjudicate:${label}`]:observed('alpha-adjudicate',label,['1']),[`5.1-adjudicate:${zeroLabel}`]:observed('tool',zeroLabel,['2'])}},request={version:1,run,id:'actual-fixture-hold',group:'5.1-adjudicate',stages:['5.1-adjudicate'],at:'2026-10-01T12:00:00Z'};put(`.autopilot/${run}/state.json`,state);put(`.autopilot/${run}/owner-gate-request.json`,request);
 const payload={version,reason:'The actual fixture completed initial handoffs precede strictly mechanical numeric dependency labels and source-backed manifest mirror correction, with no scientific source-body or original native evidence change.',carriers:[{path:m1,before_file:mb1},...(version===2?[{path:m2,before_file:mb2}]:[])],...(version===2?{source_levels:[{id:nativeId,before:9,after:1,before_file:beforeFiles[nativeId],historical_basis:'native-post'},{id:unassigned,before:9,after:2,before_file:beforeFiles[unassigned],historical_basis:'baseline-keep'}]}:{source_level:{id:nativeId,before:2,after:1,before_file:beforeFiles[nativeId]}})};
 return {root,put,payload,pack,baseline,verdicts,report,output,empty,result,state,request,stem,dp,rp,current,nativeBefore,nativeAfter,unassignedBefore,unassignedAfter,beforeFiles,new1,new2,old1,old2,m1,m2,mb1,mb2,sync,record:()=>recordInitialMetadataHistory(root,run,payload)};
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
