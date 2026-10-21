import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import {freezeFrontier} from './step5-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {MODELS} from './models.mjs';
import {recordInitialScopeFindings,loadInitialScopeFindings,checkFrozenInitialScopeFindingInput} from './step5-initial-scope-findings.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const IDS=['lem-connected-diagram-bracket-span-bound-and-alternating-equality','lem-connected-alternating-link-is-nonsplit'];
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
// Synthetic isolated execution, source and root-review records exercise guards;
// using actual allowed IDs does not claim real review, execution or acceptance.
function fixture(t,{id=IDS[0],run=RUN,unit='105',batch='105',ordinary=false}={}){
 const root=mkdtempSync(join(tmpdir(),'initial-result-alert-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`;
 for(const path of ['items',dir,dispatch,`.autopilot/${run}`])mkdirSync(join(root,path),{recursive:true});
 const put=(path,value)=>writeFileSync(join(root,path),typeof value==='string'?value:JSON.stringify(value));
 const text=`---\nid: ${id}\nkind: lemma\ntitle: Fixture\nstatus: draft\n---\n\n## Statement\n\nThe fixture source has the exact current coordinate product requiring a local label convention.\n`;
 put(`items/${id}.md`,text);const guard=itemHashGuard(text);
 const frontier=freezeFrontier({run,batches:[{id:batch,items:[id,'lem-assigned']}]});
 const initial={run,phase:'initial',round:1,adjudicationSchemaVersion:1,frontier_ids:frontier.ids,units:[unit],assignments:{[unit]:[{id:'lem-assigned'}]},before:{[id]:guard,'lem-assigned':'a'.repeat(64)}};
 put(`${dir}/frontier.json`,frontier);put(`${dir}/baseline.json`,initial.before);put(`${dir}/step4-verdicts.json`,[{id,model:MODELS.luna.id,keep:true}]);put(`${dir}/initial-1.json`,initial);
 const manifest=`research/${run}-batch-${batch}.pages.json`;put(manifest,[{items:[{id},{id:'lem-assigned'}]}]);
 const state={run,stage:'5.1-adjudicate',paused:true,dispatches:{done:{startedAt:'2026-09-30T10:00:00Z',endedAt:'2026-09-30T11:00:00Z'}}};put(`.autopilot/${run}/state.json`,state);
 const alert={id,path:`items/${id}.md`,route:'frontier owner',affected_use:'The fixture result uses the coordinate product without an explicit local shifted-coordinate convention.',reason:'If the local coordinate convention allows this expression, the owner should examine its actual current domain.',minimality:'Resolve the actual local convention before deciding whether the unchanged result interface needs any repair.'};
 const summary={...alert,reason:'If the convention admits this expression, its actual current domain needs a focused owner examination.',minimality:'Resolve or explicitly cite the actual coordinate convention before deciding whether this carrier needs a repair.'};
 const finding={id,ledger:'canonical-defect-ledger',action:'record-open-finding',severity:'nonfatal',uncertain:false,route:'frontier-owner',reason:alert.reason};
 const index=IDS.indexOf(id)===1?1:0,alerts=Array.from({length:index+1},()=>null);alerts[index]=alert;
 const summaries=Array.from({length:index+1},()=>null);summaries[index]=summary;
 const report={run,phase:'initial',round:1,unit,input_sha256:hash(initial),ledger_updates:ordinary?[finding]:[],repair_notes:{outside_lane_alerts:alerts}};
 const output={...report,repair_notes:{outside_lane_alerts:summaries}};
 const label=`step5-v2-initial-r1-u${unit}`,stem=`${dispatch}/alpha-adjudicate-${label}.attempt-1`,reportPath=`${dir}/${label}.json`,stable=`${dispatch}/alpha-adjudicate-${label}.result.json`;
 const result={run,ok:true,covers:[unit],role:'alpha-adjudicate',label,runner:'codex',model:MODELS.sol61.id,provider_effort:'high',attempt:1,evidence_tag:'.attempt-1',started_at:'2026-09-30T10:00:00Z',ended_at:'2026-09-30T11:00:00Z',process_exit_code:0,exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0},log:`${stem}.log`,prompt:`${stem}.prompt.md`};
 const nativeRecord=`exec\ncat items/${id}.md\n succeeded in 1ms:\n${text}\n`;
 const putNative=()=>{report.input_sha256=hash(initial);output.input_sha256=hash(initial);put(reportPath,report);put(stable,result);put(`${stem}.result.json`,result);put(`${stem}.prompt.md`,`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: ${unit}\noutput: ${reportPath}\ninput_sha256:"${hash(initial)}"`);put(`${stem}.log`,`${nativeRecord}\ncodex\n${JSON.stringify(output)}\ntokens used\n123\n`);};putNative();
 const evidenceFile=`research/${run}-root-review.md`,beforeFile=`research/${run}-before.md`;
 put(evidenceFile,'Synthetic full-current-source root fixture confirmation with exact conditional alert correspondence and literal local convention edit; no actual review.');put(beforeFile,text);
 const review={reviewed_by:'root',confirmed_defect:true,reviewed_at:'2026-10-01T10:00:00Z',reason:'The synthetic root review has inspected the entire current fixture and confirms the specific convention issue for ordinary work.',evidence_file:evidenceFile,proposed_edits:[{source_excerpt:'requiring a local label convention',proposed_replacement:'with explicit shifted coordinate labels'}],full_current_source_read:true,source_raw_sha256:hash(text),outside_alert_correspondence:{confirmed_same_alert:true,report_excerpt:'coordinate product without an explicit',output_excerpt:'coordinate product without an explicit',reason:'The root fixture confirms these separately preserved conditional native objects identify the same local coordinate domain concern, without fabricating severity.'}};
 const entry={id,batch,unit,route:'frontier-owner',current_guard_sha256:guard,owner_review:review,...(ordinary?{open_finding_index:0,finding,output_finding_index:0,output_finding:finding,source_read:{native_log_record:nativeRecord,source_excerpt:'The fixture source has the exact current coordinate product'}}:{origin_kind:'native-observed-result-alert',outside_alert_index:index,alert,output_alert_index:index,output_alert:summary,source_read:{mode:'owner-current-source-confirmation',native_full_read_adopted:false,before_file:beforeFile,before_raw_sha256:hash(text),source_excerpt:'The fixture source has the exact current coordinate product'}})};
 const request={version:2,kind:'owner-confirmed-native-initial-scope-findings',run,authorized_by:'owner',owner_identity:'/root',native_coverage_adopted:false,recorded_at:'2026-10-01T11:00:00Z',original_count:2,bindings:{},entries:[entry]};
 const files=[`${dir}/frontier.json`,`${dir}/baseline.json`,`${dir}/step4-verdicts.json`,`${dir}/initial-1.json`,reportPath,stable,`${stem}.result.json`,`${stem}.prompt.md`,`${stem}.log`,manifest,evidenceFile,beforeFile],requestPath=`research/${run}-request.json`;
 const save=()=>{request.bindings=Object.fromEntries(files.map(p=>[p,hash(readFileSync(join(root,p),'utf8'))]));put(requestPath,request);};save();
 const record=()=>recordInitialScopeFindings(root,run,requestPath);
 const registry=`research/${run}-step5-initial-scope-findings.json`;
 const collect=()=>{const row=JSON.parse(readFileSync(join(root,registry),'utf8'));put(`${dir}/initial-1-collected.json`,{run,phase:'initial',round:1,errors:[],evidence:Object.fromEntries(Object.entries(row.bindings).map(([p,h])=>[join(root,p),h]))});};
 return {root,id,run,unit,batch,dir,dispatch,put,text,initial,state,report,output,result,request,entry,files,reportPath,stable,stem,alert,summary,putNative,save,record,collect,registry,manifest};
}
for(const id of IDS)test(`exact observed result ${id} preserves separate conditional raw objects and grants work only`,t=>{
 const f=fixture(t,{id}),before=readFileSync(join(f.root,f.reportPath),'utf8');assert.notDeepEqual(f.alert,f.summary);const r=f.record();assert.equal(r.mathematical_review,false);assert.equal(r.native_coverage_adopted,false);assert.deepEqual(r.ids,[id]);
 assert.equal(readFileSync(join(f.root,f.reportPath),'utf8'),before);assert.equal(readFileSync(join(f.root,`items/${id}.md`),'utf8'),f.text);
 const e=loadInitialScopeFindings(f.root,f.run,{requireCollection:false}).entries[0];assert.deepEqual(e.alert,f.alert);assert.deepEqual(e.output_alert,f.summary);assert.equal(Object.hasOwn(e.alert,'severity'),false);assert.equal(Object.hasOwn(e.alert,'ledger'),false);
 assert.throws(()=>loadInitialScopeFindings(f.root,f.run),/nonregular\/outside evidence/);f.collect();f.state.stage='5.2-impact';f.state.paused=false;f.put(`.autopilot/${f.run}/state.json`,f.state);assert.equal(loadInitialScopeFindings(f.root,f.run).entries.length,1);
 const p=join(f.root,f.registry),pack={input_evidence:{[p]:hash(readFileSync(p,'utf8'))}};checkFrozenInitialScopeFindingInput(f.root,f.run,pack);f.put(f.registry,'{}');assert.throws(()=>checkFrozenInitialScopeFindingInput(f.root,f.run,pack),/changed after/);
});
test('u40 ordinary supported nonfatal lemma finding does not need the new typed branch',t=>{
 const f=fixture(t,{id:'lem-ip-gaussian-beam-null-bicharacteristic',unit:'40',batch:'40',ordinary:true});f.record();f.collect();const e=loadInitialScopeFindings(f.root,f.run).entries[0];assert.equal(e.origin_kind,undefined);assert.equal(e.finding.severity,'nonfatal');
});
for(const options of [{run:'foreign-run'},{unit:'104',batch:'104'},{id:'lem-foreign-result'}])test(`observed-result inventory rejects ${JSON.stringify(options)}`,t=>{const f=fixture(t,options);assert.throws(f.record,/exact run\/unit\/item\/index/);});
for(const defect of ['v1','old-alert-branch','no-type','wrong-report-index','wrong-output-index','extra-report-field','extra-output-field','missing-minimality','short-minimality','output-missing-path','report-path','output-path','route','output-route','different-raw-report','different-raw-output','finding-field','native-severity','assigned','reject','changed-current','changed-baseline','definition','snapshot','reading-claim','native-span','no-full-read','wrong-raw-hash','no-correspondence','wrong-excerpt','no-literal-edits','ambiguous-edit','early-review','no-evidence','duplicate-owner','active','unpaused','impact','impact-dispatch','failed-native','wrong-model','wrong-prompt','wrong-final-identity','stable-differs','stale-binding'])test(`observed-result rejects ${defect}`,t=>{
 const f=fixture(t),e=f.entry;
 if(defect==='v1')f.request.version=1;
 if(defect==='old-alert-branch')e.origin_kind='native-outside-lane-alert';
 if(defect==='no-type')delete e.origin_kind;
 if(defect==='wrong-report-index')e.outside_alert_index=1;
 if(defect==='wrong-output-index')e.output_alert_index=1;
 if(defect==='extra-report-field')f.alert.extra='invented';
 if(defect==='extra-output-field')f.summary.extra='invented';
 if(defect==='missing-minimality')delete f.alert.minimality;
 if(defect==='short-minimality')f.summary.minimality='short';
 if(defect==='output-missing-path')delete f.summary.path;
 if(defect==='report-path')f.alert.path='items/lem-other.md';
 if(defect==='output-path')f.summary.path='items/lem-other.md';
 if(defect==='route')f.alert.route='outside owner';
 if(defect==='output-route')f.summary.route='frontier-owner';
 if(defect==='different-raw-report')e.alert={...f.alert,reason:'Invented replacement reason not present in the original indexed native alert.'};
 if(defect==='different-raw-output')e.output_alert={...f.summary,reason:'Invented replacement reason not present in the original immutable final alert.'};
 if(defect==='finding-field')e.finding={severity:'fatal'};
 if(defect==='native-severity')f.alert.severity='fatal';
 if(defect==='assigned'){f.initial.assignments[f.unit].push({id:f.id});f.put(`${f.dir}/initial-1.json`,f.initial);}
 if(defect==='reject')f.put(`${f.dir}/step4-verdicts.json`,[{id:f.id,model:MODELS.luna.id,keep:false}]);
 if(defect==='changed-current')f.put(`items/${f.id}.md`,f.text+'altered current math');
 if(defect==='changed-baseline'){const b={...f.initial.before,[f.id]:'b'.repeat(64)};f.initial.before=b;f.put(`${f.dir}/baseline.json`,b);f.put(`${f.dir}/initial-1.json`,f.initial);}
 if(defect==='definition')f.put(`items/${f.id}.md`,f.text.replace('kind: lemma','kind: definition'));
 if(defect==='snapshot')f.put(e.source_read.before_file,f.text+'invented before');
 if(defect==='reading-claim')e.source_read.native_full_read_adopted=true;
 if(defect==='native-span')e.source_read.native_log_span={start_byte:0,end_byte:20,sha256:'a'.repeat(64)};
 if(defect==='no-full-read')delete e.owner_review.full_current_source_read;
 if(defect==='wrong-raw-hash')e.owner_review.source_raw_sha256='0'.repeat(64);
 if(defect==='no-correspondence')delete e.owner_review.outside_alert_correspondence;
 if(defect==='wrong-excerpt')e.owner_review.outside_alert_correspondence.output_excerpt='Invented matching prose absent from the original final alert';
 if(defect==='no-literal-edits'){e.owner_review.proposed_edits=[];e.owner_review.candidate_patch_file=e.owner_review.evidence_file;}
 if(defect==='ambiguous-edit')e.owner_review.proposed_edits[0].source_excerpt='absent';
 if(defect==='early-review')e.owner_review.reviewed_at='2026-09-01T00:00:00Z';
 if(defect==='no-evidence')f.put(e.owner_review.evidence_file,'short');
 if(defect==='duplicate-owner')f.put(f.manifest,[{items:[{id:f.id},{id:f.id}]}]);
 if(defect==='active'){f.state.dispatches.live={startedAt:'2026-10-01'};f.put(`.autopilot/${f.run}/state.json`,f.state);}
 if(defect==='unpaused'){f.state.paused=false;f.put(`.autopilot/${f.run}/state.json`,f.state);}
 if(defect==='impact')f.put(`${f.dir}/impact-initial-1.json`,{});
 if(defect==='impact-dispatch')f.put(`${f.dispatch}/alpha-repair-step5-v2-impact-initial-r1-u105.result.json`,{});
 if(defect==='failed-native')f.result.ok=false;
 if(defect==='wrong-model')f.result.model='wrong';
 if(defect==='wrong-final-identity')f.output.unit='104';
 f.putNative();
 if(defect==='wrong-prompt')f.put(`${f.stem}.prompt.md`,'forged prompt');
 if(defect==='stable-differs')f.put(f.stable,{...f.result,extra:'different stable'});
 f.save();if(defect==='stale-binding')f.put(`${f.stem}.prompt.md`,'changed after binding');
 assert.throws(f.record);assert.equal(existsSync(join(f.root,f.registry)),false);
});

const HAKEN='thm-haken-normal-essential-disk-existence';
function hakenFixture(t,options={}){
 const f=fixture(t,{id:HAKEN,unit:'104',batch:'104',...options}),e=f.entry;
 const text=f.text.replace('kind: lemma','kind: theorem'),guard=itemHashGuard(text);
 f.text=text;f.put(`items/${f.id}.md`,text);f.initial.before[f.id]=guard;
 f.put(`${f.dir}/baseline.json`,f.initial.before);f.put(`${f.dir}/initial-1.json`,f.initial);e.current_guard_sha256=guard;
 f.put(e.source_read.before_file,text);e.source_read.before_raw_sha256=hash(text);e.owner_review.source_raw_sha256=hash(text);
 const finding={ledger:'canonical-defect-ledger',action:'record-open-finding',id:f.id,route:'frontier-owner; unassigned existing frontier item, no edit made',affected_use:`items/${f.id}.md: the fixture Statement allows an embedded disk without the qualification required by its normalization supplier.`,invalidated_claim:'The initial supplier application does not discharge the actual categorical domain for the fixture disk.',minimality:'Preserve the entire Statement and insert the explicit continuous-map-to-PL-disk bridge before the normalization call.',reason:'The unassigned fixture carrier has a missing categorical bridge, while its restricted assigned application remains sound.',uncertain:false,source_urls:['https://pi.math.cornell.edu/~hatcher/3M/3Mfds.pdf'],familiar:false};
 const summary={...finding,reason:'This same missing categorical bridge needs the unchanged supplier owner; the assigned narrower application is sound.'};
 const alert={id:f.id,status:'reported_to_frontier_owner',edited:false};
 f.report.ledger_updates=Array(8).fill(null);f.report.ledger_updates[7]=finding;
 f.output.ledger_updates=Array(8).fill(null);f.output.ledger_updates[7]=summary;
 f.report.repair_notes.outside_lane_alerts=[alert];delete f.output.repair_notes.outside_lane_alerts;
 delete e.output_alert;delete e.output_alert_index;
 e.origin_kind='native-observed-result-finding';e.open_finding_index=7;e.output_finding_index=7;e.finding=finding;e.output_finding=summary;e.outside_alert_index=0;e.alert=alert;
 delete e.owner_review.outside_alert_correspondence;
 e.owner_review.open_finding_correspondence={confirmed_same_finding:true,report_excerpt:'initial supplier application does not discharge',output_excerpt:'initial supplier application does not discharge',reason:'The exact separate saved report and immutable final findings identify the same missing categorical bridge; the sparse notification only confirms the routed item identity.'};
 e.owner_review.classification={severity:'nonfatal',defect_type:'logic',reason:'The root fixture separately classifies the actual missing categorical bridge for new current review without changing the native object.'};
 f.putNative();f.save();return {...f,finding,summary,alert};
}
test('u104 authentic sparse report notification binds paired ledger7 findings, never invents final alert or native severity',t=>{
 const f=hakenFixture(t);const native=readFileSync(join(f.root,f.reportPath),'utf8');f.record();f.collect();const e=loadInitialScopeFindings(f.root,f.run).entries[0];
 assert.equal(readFileSync(join(f.root,f.reportPath),'utf8'),native);assert.deepEqual(e.finding,f.finding);assert.deepEqual(e.output_finding,f.summary);assert.deepEqual(e.alert,{id:HAKEN,status:'reported_to_frontier_owner',edited:false});assert.equal(e.finding.familiar,false);assert.equal(Object.hasOwn(e.finding,'severity'),false);assert.equal(Object.hasOwn(e,'output_alert'),false);
});
for(const options of [{run:'foreign-run'},{unit:'103',batch:'103'},{id:'thm-foreign-result'}])test(`Haken observed inventory rejects ${JSON.stringify(options)}`,t=>{const f=hakenFixture(t,options);assert.throws(f.record,/exact observed Haken/);});
for(const defect of ['v1','old-type','wrong-index','wrong-output-index','wrong-alert-index','wrong-alert-id','edited','status','extra-sparse-field','fake-final-alert','extra-finding-field','extra-output-field','fake-native-severity','familiar','uncertain','source-url','route','source-path','different-output-object','wrong-kind','classification','classification-kind','correspondence','literal','native-read','missing-root-read','missing-before','missing-patch'])test(`Haken observed finding rejects ${defect}`,t=>{
 const f=hakenFixture(t),e=f.entry;
 if(defect==='v1')f.request.version=1;
 if(defect==='old-type')e.origin_kind='native-open-finding';
 if(defect==='wrong-index')e.open_finding_index=6;
 if(defect==='wrong-output-index')e.output_finding_index=6;
 if(defect==='wrong-alert-index')e.outside_alert_index=1;
 if(defect==='wrong-alert-id')f.alert.id='thm-other';
 if(defect==='edited')f.alert.edited=true;
 if(defect==='status')f.alert.status='accepted';
 if(defect==='extra-sparse-field')f.alert.route='frontier-owner';
 if(defect==='fake-final-alert')f.output.repair_notes.outside_lane_alerts=[f.alert];
 if(defect==='extra-finding-field')f.finding.extra='invented';
 if(defect==='extra-output-field')f.summary.extra='invented';
 if(defect==='fake-native-severity')f.finding.severity='fatal';
 if(defect==='familiar')f.finding.familiar=true;
 if(defect==='uncertain')f.summary.uncertain=true;
 if(defect==='source-url')f.finding.source_urls=['https://example.org/fake.pdf'];
 if(defect==='route')f.finding.route='frontier-owner';
 if(defect==='source-path')f.summary.affected_use='items/thm-other.md: this wrong source path does not match the actual observed original carrier.';
 if(defect==='different-output-object')e.output_finding={...f.summary,reason:'Invented native reason not in the actual final indexed finding.'};
 if(defect==='wrong-kind')f.put(`items/${f.id}.md`,f.text.replace('kind: theorem','kind: lemma'));
 if(defect==='classification')delete e.owner_review.classification;
 if(defect==='classification-kind')e.owner_review.classification.defect_type='invented';
 if(defect==='correspondence')delete e.owner_review.open_finding_correspondence;
 if(defect==='literal')e.owner_review.open_finding_correspondence.output_excerpt='Invented new phrase absent from all native prose';
 if(defect==='native-read')e.source_read.native_full_read_adopted=true;
 if(defect==='missing-root-read')delete e.owner_review.full_current_source_read;
 if(defect==='missing-before')delete e.source_read.before_file;
 if(defect==='missing-patch')e.owner_review.proposed_edits=[];
 f.putNative();f.save();assert.throws(f.record);
});
