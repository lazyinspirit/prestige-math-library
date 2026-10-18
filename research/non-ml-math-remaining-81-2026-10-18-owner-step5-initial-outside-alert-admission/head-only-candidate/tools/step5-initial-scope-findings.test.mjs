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
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const run='test-initial-alert',id='def-test-dmc',dir=`research/${run}-step5-v2`,dispatch=`research/${run}-dispatch`;
// Synthetic execution/reading strings test provenance mechanics only. They do
// not claim real native execution, source reading, mathematical review or gates.
function fixture(t,version=2){
 const root=mkdtempSync(join(tmpdir(),'initial-outside-alert-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 for(const path of ['items',dir,dispatch,`.autopilot/${run}`])mkdirSync(join(root,path),{recursive:true});
 const put=(path,value)=>writeFileSync(join(root,path),typeof value==='string'?value:JSON.stringify(value));
 const text=`---\nid: ${id}\nkind: definition\ntitle: Fixture\nstatus: draft\n---\n\n## Definition\n\nThe fixture source has the exact current coordinate product requiring a local label convention.\n`;
 put(`items/${id}.md`,text);const guard=itemHashGuard(text);
 const frontier=freezeFrontier({run,batches:[{id:'1',items:[id]},{id:'2',items:['lem-assigned']} ]});
 const initial={run,phase:'initial',round:1,adjudicationSchemaVersion:1,frontier_ids:frontier.ids,units:['1','2'],assignments:{'1':[],'2':[{id:'lem-assigned'}]},before:{[id]:guard,'lem-assigned':'a'.repeat(64)}};
 put(`${dir}/frontier.json`,frontier);put(`${dir}/baseline.json`,initial.before);put(`${dir}/step4-verdicts.json`,[{id,model:MODELS.luna.id,keep:true}]);put(`${dir}/initial-1.json`,initial);
 put(`research/${run}-batch-1.pages.json`,[{items:[{id}]}]);put(`research/${run}-batch-2.pages.json`,[{items:[{id:'lem-assigned'}]}]);
 const state={run,stage:'5.1-adjudicate',paused:true,dispatches:{done:{startedAt:'2026-09-30T10:00:00Z',endedAt:'2026-09-30T11:00:00Z'}}};put(`.autopilot/${run}/state.json`,state);
 const empty={run,phase:'initial',round:1,unit:'1',input_sha256:hash(initial),completion:'mechanical-zero-work',mathematical_review:false,reviews:[],decisions:[],created_items:[],downstream:[],ledger_updates:[]};
 put(`${dir}/step5-v2-initial-r1-u1.json`,empty);put(`${dispatch}/tool-step5-v2-empty-initial-r1-u1.result.json`,{run,ok:true,covers:['1'],role:'tool',written_by:'autopilot',label:'step5-v2-empty-initial-r1-u1'});
 const alert={id,path:`items/${id}.md`,route:'frontier owner',affected_use:'Definition has the displayed coordinate product without an explicit shifted-coordinate labeling convention.',reason:'The owner should examine this unchanged separate supplier; this worker did not edit or adjudicate it.'};
 const outputAlert={id,route:'frontier owner',affected_use:'Its inspected definition likewise uses a coordinate product without declaring its local block-coordinate labels.',reason:'This separate carrier needs its frontier owner to examine the coordinate convention without claiming an assigned repair.'};
 const finding={id,ledger:'canonical-defect-ledger',action:'record-open-finding',severity:'nonfatal',uncertain:false,route:'frontier-owner',reason:alert.reason};
 const report={run,phase:'initial',round:1,unit:'2',input_sha256:hash(initial),ledger_updates:version===1?[finding]:[],repair_notes:{outside_lane_alerts:[alert]}};
 const output={...report,repair_notes:{outside_lane_alerts:[outputAlert]}};
 const label='step5-v2-initial-r1-u2',stem=`${dispatch}/alpha-adjudicate-${label}.attempt-1`,reportPath=`${dir}/${label}.json`,stable=`${dispatch}/alpha-adjudicate-${label}.result.json`;
 const result={run,ok:true,covers:['2'],role:'alpha-adjudicate',label,runner:'codex',model:MODELS.sol61.id,provider_effort:'high',attempt:1,evidence_tag:'.attempt-1',started_at:'2026-09-30T10:00:00Z',ended_at:'2026-09-30T11:00:00Z',process_exit_code:0,exit_code:0,timed_out:false,terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true,error_events:0},log:`${stem}.log`,prompt:`${stem}.prompt.md`};
 const nativeRecord=`exec\ncat items/${id}.md\n succeeded in 1ms:\n${text}\n`;
 const putNative=()=>{
  empty.input_sha256=hash(initial);put(`${dir}/step5-v2-initial-r1-u1.json`,empty);
  report.input_sha256=hash(initial);output.input_sha256=hash(initial);put(reportPath,report);put(stable,result);put(`${stem}.result.json`,result);
  put(`${stem}.prompt.md`,`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: 2\noutput: ${reportPath}\ninput_sha256:"${hash(initial)}"`);
  put(`${stem}.log`,`${nativeRecord}\ncodex\n${JSON.stringify(output)}\ntokens used\n123\n`);
 };putNative();
 const evidenceFile=`research/${run}-root-review.md`,beforeFile=`research/${run}-before.md`;
 put(evidenceFile,'Synthetic root fixture confirmation of complete current source, exact native report/output correspondence and concrete label repair; no real audit.');put(beforeFile,text);
 const owner_review={reviewed_by:'root',confirmed_defect:true,reviewed_at:'2026-10-01T10:00:00Z',reason:'Root fixture has read the complete current source and confirms the exact coordinate convention issue in the native alert.',evidence_file:evidenceFile,proposed_edits:[{source_excerpt:'requiring a local label convention',proposed_replacement:'with explicit shifted coordinate labels'}],full_current_source_read:true,source_raw_sha256:hash(text),outside_alert_correspondence:{confirmed_same_alert:true,report_excerpt:'displayed coordinate product',output_excerpt:'without declaring its local block-coordinate labels',reason:'The two actual native objects describe the same unchanged source coordinate-index convention, and root confirms their literal correspondence.'}};
 const entry={id,batch:'1',unit:'2',route:'frontier-owner',current_guard_sha256:guard,owner_review,...(version===1?{open_finding_index:0,finding,output_finding_index:0,output_finding:finding,source_read:{native_log_record:nativeRecord,source_excerpt:'The fixture source has the exact current coordinate product'}}:{origin_kind:'native-outside-lane-alert',outside_alert_index:0,alert,output_alert_index:0,output_alert:outputAlert,source_read:{mode:'owner-current-source-confirmation',native_full_read_adopted:false,before_file:beforeFile,before_raw_sha256:hash(text),source_excerpt:'The fixture source has the exact current coordinate product'}})};
 const request={version,kind:'owner-confirmed-native-initial-scope-findings',run,authorized_by:'owner',owner_identity:'/root',native_coverage_adopted:false,recorded_at:'2026-10-01T11:00:00Z',original_count:2,bindings:{},entries:[entry]};
 const files=[`${dir}/frontier.json`,`${dir}/baseline.json`,`${dir}/step4-verdicts.json`,`${dir}/initial-1.json`,`${dir}/step5-v2-initial-r1-u1.json`,`${dispatch}/tool-step5-v2-empty-initial-r1-u1.result.json`,reportPath,stable,`${stem}.result.json`,`${stem}.prompt.md`,`${stem}.log`,`research/${run}-batch-1.pages.json`,`research/${run}-batch-2.pages.json`,evidenceFile,beforeFile];
 const requestPath=`research/${run}-request.json`;
 const save=()=>{request.bindings=Object.fromEntries(files.map(p=>[p,hash(readFileSync(join(root,p),'utf8'))]));put(requestPath,request);};save();
 const record=()=>recordInitialScopeFindings(root,run,requestPath);
 const collect=()=>{const row=JSON.parse(readFileSync(join(root,`research/${run}-step5-initial-scope-findings.json`),'utf8'));const evidence=Object.fromEntries(Object.entries(row.bindings).map(([p,h])=>[join(root,p),h]));put(`${dir}/initial-1-collected.json`,{run,phase:'initial',round:1,errors:[],evidence});return row;};
 return {root,put,text,initial,state,report,output,result,request,entry,files,requestPath,reportPath,stable,stem,alert,outputAlert,putNative,save,record,collect};
}
test('opt-in v2 preserves exact outside-alert objects and grants work only before real initial collection',t=>{
 const f=fixture(t);const before=readFileSync(join(f.root,f.reportPath),'utf8');const result=f.record();assert.deepEqual(result.ids,[id]);assert.equal(result.native_coverage_adopted,false);assert.equal(result.mathematical_review,false);
 assert.equal(readFileSync(join(f.root,f.reportPath),'utf8'),before);assert.equal(readFileSync(join(f.root,`items/${id}.md`),'utf8'),f.text);
 assert.equal(loadInitialScopeFindings(f.root,run,{requireCollection:false}).entries[0].origin_kind,'native-outside-lane-alert');assert.throws(()=>loadInitialScopeFindings(f.root,run),/nonregular\/outside evidence/);
 f.collect();f.state.stage='5.2-impact';f.state.paused=false;f.put(`.autopilot/${run}/state.json`,f.state);assert.equal(loadInitialScopeFindings(f.root,run).entries.length,1);
});
test('v1 ordinary native open findings retain original success and source-read guards',t=>{
 const f=fixture(t,1);f.record();f.collect();assert.equal(loadInitialScopeFindings(f.root,run).entries.length,1);
});
for(const defect of ['v1-alert','unknown-kind','report-object','output-object','report-index','output-index','route','output-route','output-path','added-finding','assigned-source','original-reject','changed-current','snapshot','native-reading-claim','missing-full-root-read','root-source-hash','no-correspondence','wrong-excerpt','no-literal-edits','ambiguous-edits','early-review','no-owner-evidence','wrong-owner','foreign-id','active-writer','not-paused','wrong-stage','impact-exists','dispatch-exists','failed-native','wrong-model','wrong-effort','missing-original-handoff','stable-differs','wrong-prompt','wrong-final-identity']){
 test(`v2 outside alert rejects ${defect}`,t=>{
  const f=fixture(t),e=f.entry,r=f.request;
  if(defect==='v1-alert')r.version=1;
  if(defect==='unknown-kind')e.origin_kind='invented-origin';
  if(defect==='report-object')e.alert={...e.alert,reason:'Different fabricated report text'};
  if(defect==='output-object')e.output_alert={...e.output_alert,reason:'Different fabricated output text'};
  if(defect==='report-index')e.outside_alert_index=2;
  if(defect==='output-index')e.output_alert_index=2;
  if(defect==='route'){f.alert.route='outside maintenance';f.putNative();}
  if(defect==='output-route'){f.outputAlert.route='frontier-owner';f.putNative();}
  if(defect==='output-path'){f.outputAlert.path='items/def-other.md';f.putNative();}
  if(defect==='added-finding')e.finding={action:'record-open-finding'};
  if(defect==='assigned-source'){f.initial.assignments['1']=[{id}];f.put(`${dir}/initial-1.json`,f.initial);f.putNative();}
  if(defect==='original-reject')f.put(`${dir}/step4-verdicts.json`,[{id,model:MODELS.luna.id,keep:false}]);
  if(defect==='changed-current')f.put(`items/${id}.md`,f.text+'changed current math\n');
  if(defect==='snapshot')f.put(e.source_read.before_file,f.text+'forged original\n');
  if(defect==='native-reading-claim')e.source_read.native_full_read_adopted=true;
  if(defect==='missing-full-root-read')delete e.owner_review.full_current_source_read;
  if(defect==='root-source-hash')e.owner_review.source_raw_sha256='0'.repeat(64);
  if(defect==='no-correspondence')delete e.owner_review.outside_alert_correspondence;
  if(defect==='wrong-excerpt')e.owner_review.outside_alert_correspondence.output_excerpt='invented source discrepancy';
  if(defect==='no-literal-edits'){e.owner_review.proposed_edits=[];e.owner_review.candidate_patch_file=e.owner_review.evidence_file;}
  if(defect==='ambiguous-edits')e.owner_review.proposed_edits[0].source_excerpt='missing original text';
  if(defect==='early-review')e.owner_review.reviewed_at='2026-09-01T00:00:00Z';
  if(defect==='no-owner-evidence')f.put(e.owner_review.evidence_file,'short');
  if(defect==='wrong-owner')e.batch='2';
  if(defect==='foreign-id')e.id='def-foreign';
  if(defect==='active-writer'){f.state.dispatches.live={startedAt:'2026-10-01'};f.put(`.autopilot/${run}/state.json`,f.state);}
  if(defect==='not-paused'){f.state.paused=false;f.put(`.autopilot/${run}/state.json`,f.state);}
  if(defect==='wrong-stage'){f.state.stage='5.2-impact';f.put(`.autopilot/${run}/state.json`,f.state);}
  if(defect==='impact-exists')f.put(`${dir}/impact-initial-1.json`,{});
  if(defect==='dispatch-exists')f.put(`${dispatch}/alpha-repair-step5-v2-impact-initial-r1-u1.result.json`,{});
  if(defect==='failed-native'){f.result.ok=false;f.putNative();}
  if(defect==='wrong-model'){f.result.model='wrong-model';f.putNative();}
  if(defect==='wrong-effort'){f.result.provider_effort='medium';f.putNative();}
  if(defect==='stable-differs')f.put(f.stable,{...f.result,extra:'different stable bytes'});
  if(defect==='wrong-prompt')f.put(`${f.stem}.prompt.md`,'wrong prompt');
  if(defect==='wrong-final-identity'){f.output.unit='1';f.putNative();}
  f.save();if(defect==='missing-original-handoff')rmSync(join(f.root,`${dir}/step5-v2-initial-r1-u1.json`));
  assert.throws(f.record);assert.equal(existsSync(join(f.root,`research/${run}-step5-initial-scope-findings.json`)),false);
 });
}
test('after freeze, registry mutation/addition/removal is rejected by the existing exact binding',t=>{
 const f=fixture(t);f.record();const p=join(f.root,`research/${run}-step5-initial-scope-findings.json`),pack={input_evidence:{[p]:hash(readFileSync(p,'utf8'))}};
 checkFrozenInitialScopeFindingInput(f.root,run,pack);f.put(`research/${run}-step5-initial-scope-findings.json`,'{}');assert.throws(()=>checkFrozenInitialScopeFindingInput(f.root,run,pack),/changed after/);rmSync(p);assert.throws(()=>checkFrozenInitialScopeFindingInput(f.root,run,pack),/changed after/);
});
test('v1 does not acquire the root-only source-reading alternative',t=>{
 const f=fixture(t,1);delete f.entry.source_read.native_log_record;f.entry.source_read.mode='owner-current-source-confirmation';f.save();assert.throws(f.record,/source-read observation/);
});
function sparseFixture(t){
 const f=fixture(t),e=f.entry;
 for(const key of ['alert','output_alert','outside_alert_index','output_alert_index'])delete e[key];
 const finding={ledger:'canonical-defect-ledger',action:'record-open-finding',id,route:'frontier-owner',locus:`items/${id}.md#Definition`,finding:'The unassigned no-feedback Definition has a rate divided by the blocklength without requiring a positive blocklength.',minimality:'Owner should state positive blocklength, check message-set nonemptiness and examine all actual direct consumers.',uncertain:false,source_urls:[],familiar:true};
 const summary={...finding,finding:'This unassigned definition also divides its rate by the blocklength, but lacks the positive-domain restriction.'};delete summary.locus;
 f.report.ledger_updates=[finding];f.output.ledger_updates=[summary];
 e.origin_kind='native-open-finding';e.open_finding_index=0;e.finding=finding;e.output_finding_index=0;e.output_finding=summary;
 delete e.owner_review.outside_alert_correspondence;
 e.owner_review.open_finding_correspondence={confirmed_same_finding:true,report_excerpt:'without requiring a positive blocklength',output_excerpt:'lacks the positive-domain restriction',reason:'These two exact original native objects both identify the same undefined zero-blocklength rate, confirmed separately by the root reading.'};
 e.owner_review.classification={severity:'fatal',defect_type:'logic',reason:'Root confirms that the fixture domain permits zero blocklength while its stated rate divides by that blocklength.'};
 f.putNative();f.save();return {...f,finding,summary};
}
test('typed v2 unclassified native finding preserves omitted severity/reason and routes only current work',t=>{
 const f=sparseFixture(t);f.record();f.collect();const entries=loadInitialScopeFindings(f.root,run).entries;
 assert.equal(entries[0].origin_kind,'native-open-finding');assert.equal(Object.hasOwn(entries[0].finding,'severity'),false);assert.equal(Object.hasOwn(entries[0].finding,'reason'),false);
 assert.equal(f.report.ledger_updates[0].action,'record-open-finding');assert.equal(f.initial.assignments['1'].length,0);
});
for(const defect of ['fabricated-severity','fabricated-reason','wrong-action','uncertain','wrong-locus','wrong-output','missing-classification','wrong-classification','missing-correspondence','wrong-excerpt','assigned','rejected','wrong-kind','no-root-snapshot']){
 test(`typed unclassified finding rejects ${defect}`,t=>{
  const f=sparseFixture(t),e=f.entry;
  if(defect==='fabricated-severity')f.finding.severity='fatal';
  if(defect==='fabricated-reason')f.finding.reason='An added native reason that did not exist in the actual observed object.';
  if(defect==='wrong-action')f.finding.action='record-fixed-finding';
  if(defect==='uncertain')f.finding.uncertain=true;
  if(defect==='wrong-locus')f.finding.locus=`items/${id}.md#Proof`;
  if(defect==='wrong-output')e.output_finding={...f.summary,id:'def-other'};
  if(defect==='missing-classification')delete e.owner_review.classification;
  if(defect==='wrong-classification')e.owner_review.classification.defect_type='invented';
  if(defect==='missing-correspondence')delete e.owner_review.open_finding_correspondence;
  if(defect==='wrong-excerpt')e.owner_review.open_finding_correspondence.report_excerpt='An invented report excerpt about an unrelated mathematical issue';
  if(defect==='assigned'){f.initial.assignments['1']=[{id}];f.put(`${dir}/initial-1.json`,f.initial);}
  if(defect==='rejected')f.put(`${dir}/step4-verdicts.json`,[{id,model:MODELS.luna.id,keep:false}]);
  if(defect==='wrong-kind')f.put(`items/${id}.md`,f.text.replace('kind: definition','kind: theorem'));
  if(defect==='no-root-snapshot')delete e.source_read.before_file;
  f.putNative();f.save();assert.throws(f.record);
 });
}
test('v2 retains the exact legacy open-finding branch when no typed origin is requested',t=>{
 const f=fixture(t,1);f.request.version=2;f.save();f.record();f.collect();assert.equal(loadInitialScopeFindings(f.root,run).entries.length,1);
});
