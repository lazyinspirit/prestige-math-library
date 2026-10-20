import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,cpSync,readdirSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve,dirname,relative} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const repo=process.cwd(),candidateTools=fileURLToPath(new URL('../../',import.meta.url));
const runtime=mkdtempSync(resolve(tmpdir(),'home-alpha-code-'));
for(const p of execFileSync('git',['ls-files','tools'],{cwd:repo,encoding:'utf8'}).trim().split('\n').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(resolve(runtime,p)),{recursive:true});cpSync(resolve(repo,p),resolve(runtime,p));}
// Overlay only these code candidates, never an untracked tool tree or state.
for(const p of ['step3-owner-home-alpha-continuations.mjs','step3-scope.mjs','step3-adjudication-order.mjs','step3-close.mjs','auditor-created-items.mjs','step3-owner-source-identical-continuity.mjs','step3-owner-stabilized-source-identical-continuity.mjs','step3-owner-unchanged-page-repairs.mjs','step3-manifest-history.mjs','autopilot-report-reopen.mjs','autopilot/stages/home-alpha-continuations.mts','autopilot/stages/mathlib.step3.mts']) {
 const input=resolve(candidateTools,p);assert.ok(existsSync(input),`missing candidate ${p}`);const output=resolve(runtime,'tools',p);mkdirSync(dirname(output),{recursive:true});cpSync(input,output);
}
const api=await import(pathToFileURL(resolve(runtime,'tools/step3-owner-home-alpha-continuations.mjs')).href);
const foreign=await import(pathToFileURL(resolve(runtime,'tools/step3-owner-foreign-refuter-routes.mjs')).href);
const {withHomeAlphaContinuation}=await import(pathToFileURL(resolve(runtime,'tools/autopilot/stages/home-alpha-continuations.mts')).href);
const {covered}=await import(pathToFileURL(resolve(runtime,'tools/autopilot/src/coverage.mts')).href);
const {authorResultAllowed}=await import(pathToFileURL(resolve(runtime,'tools/auditor-created-items.mjs')).href);
const sha=(x:any)=>createHash('sha256').update(x).digest('hex');
const run='r',id='lem-foreign',P='research/r-';
function fixture(t:any){
 const root=mkdtempSync(resolve(tmpdir(),'home-alpha-case-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const put=(p:string,x:any)=>{mkdirSync(dirname(resolve(root,p)),{recursive:true});writeFileSync(resolve(root,p),typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');return {path:p,sha256:sha(readFileSync(resolve(root,p)))};};
 const link=(p:string)=>({path:p,sha256:sha(readFileSync(resolve(root,p)))});
 const finding1={id,location:'Facts F1 / Proof1.1',defect:'unlicensed-inference',severity:'nonfatal',evidence:'Supporting line requires its actual differentiability argument.'};
 const finding2={id,location:'Statement references',defect:'citation-inaccurate',severity:'nonfatal',evidence:'The cited source proves a more restricted step size statement.'};
 const report57={batch:'57',opened:['def-owned',id],not_opened:[],flagged:[finding1,finding2],coverage_note:'Actual extra context read without a declared dependency.'};
 const original_report=put(P+'archive-refute57.json',report57), origin_scope=put(P+'archive-scope57.json',{version:2,run,batch:'57',refuter_scope:['def-owned']});
 const prompt57=put(P+'dispatch/refuter-refute-57.attempt-1.prompt.md','Actual original refuter57 task.');
 const native57=put(P+'dispatch/refuter-refute-57.attempt-1.result.json',{run,role:'refuter',label:'refute-57',attempt:1,ok:true,exit_code:0,process_exit_code:0,covers:['57'],ended_at:'2026-10-19T12:53:00Z',prompt:resolve(root,prompt57.path),tail:JSON.stringify(report57)});
 put(P+'step3-scope-57.json',{version:2,run,batch:'57',refuter_scope:['def-owned']});
 put(P+'batch-57.pages.json',[{id:'owned-page',category:'test',items:[{id:'def-owned',deps:[]}]}]);
 const manifest=[{id:'home-page',category:'test',items:[{id,deps:[]}]}];
 put(P+'batch-30.pages.json',manifest);put(P+'alpha-groups.json',[{label:'j',covers:['30']},{label:'s',covers:['57']}]);
 const source=(word:string)=>`---\nid: ${id}\nkind: lemma\nstatus: draft\npipeline_run: r\ndeps: []\n---\n## Statement\nClaim.\n## Proof\n${word}\n`;
 const before=put(P+'before-source.md',source('Old proof.')),after=put(P+'after-source.md',source('Corrected proof.'));
 put(`items/${id}.md`,source('Corrected proof.'));put('library/test/home-page.md','---\npage: home-page\nstatus: draft\nitems: [lem-foreign]\nexamples: []\n---\nHome page.\n');
 put(P+'batch-30.proof-contracts.json',{version:1,scope:[id],contracts:{[id]:{}}});
 const application=put(P+'root-application.json',{run,owner_identity:'/root',native_finding_unchanged:true,files:[{path:`items/${id}.md`,before_sha256:before.sha256,after_sha256:after.sha256}]});
 const evidence=put(P+'consumer-evidence.json',{actual_fixture_consumers_read:true});
 const review=put(P+'review.json',{run,id,original_obligation:'refuter:57:1',source_before_sha256:before.sha256,source_after_sha256:after.sha256,full_current_proof_read:true,consumer_checks_complete:true,native_acceptance_claimed:false,evidence_refs:[evidence],evidence:'Actual fixture full proof reading and explicit citation correction plus unchanged consumer uses, distinct from all independent native acceptance and coverage obligations.'});
 const routes=[finding1,finding2].map((finding,index)=>{
  const defect_id=index?'citation':'supporting-line',finding_sha256=foreign.foreignRefuterHash(finding);
  const defect_record=put(P+`pending-${index}.json`,{defect_id,run,subject:id,batch:'30',class:'mathematical',subclass:finding.defect,severity:finding.severity,location:finding.location,caught_at_stage:'3a-adjudicate',disposition:'open',owner_identity:'/root',native_adjudication_claimed:false,original_obligation:`refuter:57:${index+1}`,original_finding_sha256:finding_sha256});
  const owner_review=put(P+`review-${index}.json`,{...JSON.parse(readFileSync(resolve(root,review.path),'utf8')),original_obligation:`refuter:57:${index+1}`});
  return {version:1,run,at:'2026-10-19T13:01:00Z',policy:foreign.FOREIGN_REFUTER_POLICY,owner_identity:'/root',reviewed:true,mathematical_acceptance:false,edit_permission:false,historical_observation_bound:false,observation_basis:'unbound-native-refuter; owner-registration capture only',origin_batch:'57',target_batch:'30',index:index+1,id,defect_id,finding,finding_sha256,original_report,native_result:native57,prompt:prompt57,origin_scope,source_before:before,source_after:after,application,owner_review,defect_record,reason:'Owner retains two genuine separately indexed external native findings at the actual unique current-run home, without any supplier edge or inherited mathematical acceptance.'};
 });
 put(P+'step3-owner-foreign-refuter-routes.json',{version:1,run,policy:foreign.FOREIGN_REFUTER_POLICY,authorized_by:'owner',authorization:'Owner authorizes exact required separate normal native home obligations for these two original flags.',routes});
 const scope={version:2,run,batch:'30',group:'j',manifest_post:[id],page_manifest_post:['home-page'],touched:[id],pages_touched:[],reader_findings:[],refuter_findings:[],added:[]};
 const previous_scope=put(P+'archive-scope30.json',scope);put(P+'step3-scope-30.json',scope);
 const reportPath=P+'alpha-batch-30-3a.md',decisionsPath=P+'alpha-batch-30-3a-decisions.json';
 const report='Actual old native Alpha30 report; source before later owner correction.\n';
 const decisions={version:1,run,group:'batch-30',decisions:[{obligation:`touched:30:${id}`,id,route:'touched',verdict:'accepted_repair',defect_ids:['old-defect'],repair_confidence:1,evidence:'Actual old native conclusion, not current acceptance.'}]};
 const previous_report=put(P+'archive-alpha30.md',report),previous_decisions=put(P+'archive-decisions30.json',decisions);
 put(reportPath,report);put(decisionsPath,decisions);
 const previous_prompt=put(P+'dispatch/alpha-3a-batch-30.attempt-1.prompt.md','Actual original Alpha30 canonical task.');
 const old={run,role:'alpha',label:'3a-batch-30',attempt:1,evidence_tag:'.attempt-1',session_id:'actual-old-session',ok:true,exit_code:0,process_exit_code:0,timed_out:false,covers:['30'],started_at:'2026-10-19T12:05:00Z',ended_at:'2026-10-19T12:12:00Z',terminal_summary:{task_completed:true,task_aborted:false,final_response_present:true},prompt:resolve(root,previous_prompt.path),tail:`Completed. [Report](${reportPath}) [Decisions](${decisionsPath})`};
 const previous_result=put(P+'dispatch/alpha-3a-batch-30.result.json',old),previous_attempt=put(P+'dispatch/alpha-3a-batch-30.attempt-1.result.json',old);
 const registration_manifest=put(P+'registration-manifest30.json',manifest);
 const current_inputs=[P+'step3-scope-30.json',P+'batch-30.pages.json',P+'batch-30.proof-contracts.json',`items/${id}.md`,'library/test/home-page.md'].map(link);
 const owner_capture=put(P+'home-capture.json',{version:1,run,unit:'30',owner_identity:'/root',native_acceptance_claimed:false,original_artifact_bytes_native_bound:false,report_sha256:previous_report.sha256,decisions_sha256:previous_decisions.sha256,scope_sha256:previous_scope.sha256,old_result_sha256:previous_result.sha256});
 const task=put(P+'home-task.md',`Fresh independent native review of all old owed obligations plus gate:supporting-line and gate:citation; canonical group batch-30 and outputs ${reportPath} ${decisionsPath}. No inherited acceptance.`);
 const entry={version:1,run,owner_identity:'/root',unit:'30',label:api.homeAlphaLabel('30'),canonical_group:'batch-30',mathematical_acceptance:false,previous_acceptance_inherited:false,historical_artifact_basis:'owner-captured current completed-native artifacts; no structured-output byte attestation',reason:'A genuine unrelated refuter57 discovered two separately retained findings after the ordinary completed home Alpha30. This one fresh native read adjudicates all old and new obligations independently.',writers_drained_at:'2026-10-19T13:01:00Z',previous_result,previous_attempt,previous_prompt,previous_report,previous_decisions,previous_scope,registration_manifest,current_inputs,foreign_refuter_routes:foreign.loadForeignRefuterRoutes(root,run).filter((x:any)=>x.e.target_batch==='30').map((x:any)=>x.binding),owner_capture,task};
 const registry={version:1,run,policy:api.HOME_ALPHA_POLICY,authorized_by:'owner',authorization:'Owner authorizes exactly one fresh normal native home Alpha30 context for this retained foreign finding pair.',continuations:[entry]};
 const save=()=>put(P+'step3-home-alpha-continuations.json',registry);save();
 const complete=()=>{const prefix=P+'dispatch/alpha-'+entry.label;const prompt=put(prefix+'.attempt-1.prompt.md',`# This dispatch\n\nrun: r\nrole: alpha\nlabel: ${entry.label}\ncovers: 30\n${readFileSync(resolve(root,task.path),'utf8')}`);const fresh={...old,label:entry.label,attempt:1,evidence_tag:'.attempt-1',started_at:'2026-10-19T13:02:00Z',ended_at:'2026-10-19T13:03:00Z',prompt:resolve(root,prompt.path)};put(prefix+'.attempt-1.result.json',fresh);put(prefix+'.result.json',fresh);return prefix;};
 const ctx={repo:root,run,doctor:false},dispatchDir=resolve(root,P+'dispatch');let baseCalls=0;
 const original={id:'3a-adjudicate',units:()=>['30','47'],pattern:/^alpha-(?:alpha-)?3a-(?:[a-z]+|batch-[1-9]\d*)\.result\.json$/,modelProfile:()=> 'sol61-medium',gates:['unchanged-battery'],artifacts:(_ctx:any,u:string)=>[P+`alpha-batch-${u}-3a.md`,P+`alpha-batch-${u}-3a-decisions.json`],plan:(_ctx:any,pending:string[])=>{baseCalls++;return pending.map(unit=>({role:'alpha',label:`3a-batch-${unit}`,covers:[unit],brief:'briefs/alpha-step3.md',job:'adjudication',task:['briefs/tasks/alpha-3a-adjudicate.md','canonical-order.task.md'],timeout:14400}));}};
 return {root,put,link,entry,registry,save,ctx,original,dispatchDir,reportPath,decisionsPath,complete,baseCalls:()=>baseCalls};
}
test.after(()=>rmSync(runtime,{recursive:true,force:true}));
test('registered fresh native home read preserves normal descriptor and canonical artifacts',t=>{
 const f=fixture(t),stage=withHomeAlphaContinuation(f.original),[fresh,sibling]=stage.plan(f.ctx,['30','47']);
 assert.equal(fresh.label,'3a-batch-30-foreign-refuter-continuation-1');assert.equal(fresh.role,'alpha');assert.deepEqual(fresh.covers,['30']);assert.equal(fresh.brief,'briefs/alpha-step3.md');assert.equal(fresh.timeout,14400);assert.deepEqual(fresh.task.slice(0,2),['briefs/tasks/alpha-3a-adjudicate.md','canonical-order.task.md']);assert.equal(fresh.task[2],f.entry.task.path);assert.equal(sibling.label,'3a-batch-47');assert.equal(stage.modelProfile,f.original.modelProfile);assert.equal(stage.gates,f.original.gates);assert.deepEqual(stage.artifacts(f.ctx,'30'),[f.reportPath,f.decisionsPath]);
 assert.equal(api.homeAlphaReviewIdentity(f.root,run,'30').stable_path,P+'dispatch/alpha-3a-batch-30-foreign-refuter-continuation-1.result.json');
 assert.equal(api.homeAlphaRequiredObligations(f.root,run,'30')[0].obligation,`touched:30:${id}`);
 assert.equal(foreign.foreignRefuterObligations(f.root,run,'30').length,2);
});
test('coverage excludes original single and duplicate-role aliases, admits only exact new stable',t=>{
 const f=fixture(t),p=withHomeAlphaContinuation(f.original).pattern(f.ctx);
 for(const name of ['alpha-3a-batch-30.result.json','alpha-alpha-3a-batch-30.result.json','alpha-3a-batch-30-foreign-refuter-continuation-1.attempt-1.result.json','alpha-3a-batch-30-foreign-refuter-continuation-2.result.json'])assert.equal(p.test(name),false,name);
 assert.equal(p.test('alpha-3a-batch-47.result.json'),true);assert.equal(p.test('alpha-3a-batch-30-foreign-refuter-continuation-1.result.json'),true);
 assert.equal(covered(f.dispatchDir,p).has('30'),false);
 f.put(P+'dispatch/alpha-3a-batch-30-foreign-refuter-continuation-1.result.json',{ok:true,covers:['30']});assert.equal(covered(f.dispatchDir,p).has('30'),true);
});
const negatives={
 'no genuine old success':(f:any)=>{const x=JSON.parse(readFileSync(resolve(f.root,f.entry.previous_result.path),'utf8'));x.ok=false;f.entry.previous_result=f.put(f.entry.previous_result.path,x);f.entry.previous_attempt=f.put(f.entry.previous_attempt.path,x);f.save();},
 'wrong immutable attempt':(f:any)=>{f.entry.previous_attempt=f.put(f.entry.previous_attempt.path,{});f.save();},
 'wrong original native prompt':(f:any)=>{f.put(f.entry.previous_prompt.path,'changed');},
 'wrong origin archive':(f:any)=>{f.put(f.entry.previous_report.path,'changed original artifact');},
 'fake structured output attestation':(f:any)=>{f.entry.historical_artifact_basis='full original report bound by stdout';f.save();},
 'native acceptance inherited':(f:any)=>{f.entry.previous_acceptance_inherited=true;f.save();},
 'wrong canonical group':(f:any)=>{f.entry.canonical_group='batch-30-foreign-refuter-continuation-1';f.save();},
 'wrong unit':(f:any)=>{f.entry.unit='55';f.save();},
 'missing one foreign flag':(f:any)=>{f.entry.foreign_refuter_routes.pop();f.save();},
 'duplicate foreign flag binding':(f:any)=>{f.entry.foreign_refuter_routes=[f.entry.foreign_refuter_routes[0],f.entry.foreign_refuter_routes[0]];f.save();},
 'wrong current guarded source':(f:any)=>{f.put(`items/${id}.md`,'changed');},
 'missing current contract guard':(f:any)=>{f.entry.current_inputs=f.entry.current_inputs.filter((x:any)=>!x.path.endsWith('proof-contracts.json'));f.save();},
 'changed old canonical decisions before dispatch':(f:any)=>{f.put(f.decisionsPath,{version:1,run,group:'batch-30',decisions:[]});},
 'completed fresh failure':(f:any)=>{f.put(P+'dispatch/alpha-'+f.entry.label+'.result.json',{ok:false,covers:['30']});},
 'completed attempt without stable alias':(f:any)=>{f.put(P+'dispatch/alpha-'+f.entry.label+'.attempt-1.result.json',{ok:false,covers:['30']});},
 'scope group mismatch':(f:any)=>{f.entry.previous_scope=f.put(f.entry.previous_scope.path,{version:2,run,batch:'30',group:'wrong'});f.save();},
 'unrelated task':(f:any)=>{f.entry.task=f.put(f.entry.task.path,'arbitrary context');f.save();},
};
for(const [name,mutate]of Object.entries(negatives))test(`reject ${name} BEFORE original Alpha planner writes its task`,t=>{const f=fixture(t);mutate(f);assert.throws(()=>withHomeAlphaContinuation(f.original).plan(f.ctx,['30']));assert.equal(f.baseCalls(),0);});
test('doctor and unselected siblings retain historical validation without consuming completed30 budget',t=>{const f=fixture(t);f.put(P+'dispatch/alpha-'+f.entry.label+'.result.json',{ok:false,covers:['30']});assert.doesNotThrow(()=>withHomeAlphaContinuation(f.original).plan({...f.ctx,doctor:true},['30']));assert.doesNotThrow(()=>withHomeAlphaContinuation(f.original).plan(f.ctx,['47']));});
test('native-origin label admitted only with exact registered root/run/unit and real fresh completion',t=>{const f=fixture(t);const synthetic={run,role:'alpha',label:f.entry.label,attempt:1,ok:true,started_at:'2026-10-19',ended_at:'2026-10-20',covers:['30']};assert.equal(authorResultAllowed(3,synthetic,{root:f.root,run}),false);const prefix=f.complete(),row=JSON.parse(readFileSync(resolve(f.root,prefix+'.result.json'),'utf8'));assert.equal(authorResultAllowed(3,row),false);assert.equal(authorResultAllowed(3,row,{root:f.root,run}),true);assert.equal(authorResultAllowed(3,{...row,attempt:2},{root:f.root,run}),false);assert.equal(authorResultAllowed(3,{...row,covers:['47']},{root:f.root,run}),false);assert.equal(authorResultAllowed(3,{...row,label:'3a-batch-31-foreign-refuter-continuation-1'},{root:f.root,run}),false);assert.equal(authorResultAllowed(3,{...row,label:'3a-batch-47'}),true);});
test('original archives survive canonical overwrite and freeze exact history',t=>{const f=fixture(t);const before=readFileSync(resolve(f.root,f.entry.previous_report.path));f.put(f.reportPath,'Genuine fresh native report.');f.put(f.decisionsPath,{version:1,run,group:'batch-30',decisions:[]});assert.doesNotThrow(()=>api.homeAlphaContinuations(f.root,run));assert.deepEqual(readFileSync(resolve(f.root,f.entry.previous_report.path)),before);f.complete();const hashes=api.homeAlphaClosureEvidence(f.root,run);assert.equal(hashes[f.entry.previous_report.path],f.entry.previous_report.sha256);assert.ok(hashes[P+'step3-home-alpha-continuations.json']);});

test('actual native stage table generates all old and both foreign obligations at canonical home30',async t=>{
 const f=fixture(t);const {stages}=await import(pathToFileURL(resolve(runtime,'tools/autopilot/stages/mathlib.mts')).href);
 const stage=stages.find((s:any)=>s.id==='3a-adjudicate'),ctx={...f.ctx,dispatchDir:f.dispatchDir};
 const [plan]=stage.plan(ctx,['30']);assert.equal(plan.label,f.entry.label);assert.equal(plan.role,'alpha');assert.deepEqual(plan.covers,['30']);assert.equal(plan.brief,'briefs/alpha-step3.md');assert.equal(plan.timeout,14400);
 const order=readFileSync(resolve(f.root,P+'alpha-batch-30-3a-order.task.md'),'utf8');
 for(const obligation of [`touched:30:${id}`,'gate:supporting-line','gate:citation'])assert.ok(order.includes(obligation),obligation);
 assert.deepEqual(stage.artifacts(ctx,'30'),[f.reportPath,f.decisionsPath]);
 assert.equal(stage.pattern(ctx).test('alpha-3a-batch-30.result.json'),false);
 assert.equal(stage.pattern(ctx).test('alpha-'+f.entry.label+'.result.json'),true);
});

test('closure requires exact successful fresh native receipt, attempt1 and prompt',t=>{const f=fixture(t);assert.throws(()=>api.homeAlphaClosureEvidence(f.root,run));const prefix=f.complete();assert.ok(api.homeAlphaClosureEvidence(f.root,run)[prefix+'.result.json']);f.put(prefix+'.attempt-1.result.json',{});assert.throws(()=>api.homeAlphaClosureEvidence(f.root,run));});
