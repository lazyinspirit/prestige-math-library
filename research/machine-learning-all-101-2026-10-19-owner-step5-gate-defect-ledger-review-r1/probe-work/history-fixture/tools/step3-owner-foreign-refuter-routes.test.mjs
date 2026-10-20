import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, cpSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
const code=dirname(fileURLToPath(import.meta.url)), repo=process.cwd();
const runtime=mkdtempSync(resolve(tmpdir(),'foreign-route-runtime-'));
const tracked=execFileSync('git',['ls-files','tools'],{cwd:repo,encoding:'utf8'}).trim().split('\n').filter(p=>/\.(mjs|mts|json)$/.test(p));
for(const p of tracked){mkdirSync(dirname(resolve(runtime,p)),{recursive:true});cpSync(resolve(repo,p),resolve(runtime,p));}
for(const p of ['step3-owner-foreign-refuter-routes.mjs','step3-adjudication-order.mjs','step3-scope.mjs','step3-close.mjs'])if(existsSync(resolve(code,p)))cpSync(resolve(code,p),resolve(runtime,'tools',p));
const {prepareStep3AdjudicationOrder}=await import(pathToFileURL(resolve(runtime,'tools/step3-adjudication-order.mjs')));
const api=await import(pathToFileURL(resolve(runtime,'tools/step3-owner-foreign-refuter-routes.mjs')));
const sha=b=>createHash('sha256').update(b).digest('hex');
const run='demo',id='thm-foreign',prefix='research/demo-';
function fixture(t){
 const root=mkdtempSync(resolve(tmpdir(),'foreign-route-case-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const put=(p,x)=>{mkdirSync(dirname(resolve(root,p)),{recursive:true});writeFileSync(resolve(root,p),typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');return {path:p,sha256:sha(readFileSync(resolve(root,p)))};};
 const source=v=>`---\nid: ${id}\nkind: theorem\nstatus: draft\npipeline_run: demo\ndeps: []\n---\n# Foreign\n\n## Statement\nClaim.\n\n## Proof\n${v}\n`;
 const finding={id,location:'Facts & Assumptions, [F2]',defect:'false-claim',severity:'fatal',evidence:'Original unqualified variance bound is false under scaling.'};
 const report={batch:'36',opened:['thm-owned',id],not_opened:[],flagged:[finding],coverage_note:'Actual original report.'};
 const original_report=put(prefix+'original-report.json',report), origin_scope=put(prefix+'original-scope.json',{version:2,run,batch:'36',refuter_scope:['thm-owned']});
 put(prefix+'step3-scope-36.json',{version:2,run,batch:'36',refuter_scope:['thm-owned']});
 const prompt=put(prefix+'dispatch/refuter-refute-36.attempt-1.prompt.md','Genuine original native refuter assigned batch36.');
 const native_result=put(prefix+'dispatch/refuter-refute-36.attempt-1.result.json',{run,role:'refuter',label:'refute-36',attempt:1,ok:true,exit_code:0,process_exit_code:0,timed_out:false,covers:['36'],ended_at:'2026-10-19T12:12:00Z',prompt:resolve(root,prompt.path),tail:JSON.stringify(report)});
 put(prefix+'batch-36.pages.json',[{id:'owned-page',items:[{id:'thm-owned',deps:[]}]}]);
 put(prefix+'batch-47.pages.json',[{id:'foreign-page',items:[{id,deps:[]}]}]);
 const source_before=put(prefix+'before-source.md',source('Old false proof.')),source_after=put(prefix+'after-source.md',source('Corrected proof.'));
 put(`items/${id}.md`,source('Corrected proof.'));put(prefix+'batch-47.proof-contracts.json',{version:1,scope:[id],contracts:{[id]:{}}});
 const defect={defect_id:'demo-variance',run,subject:id,batch:'47',class:'mathematical',subclass:'false-claim',severity:'fatal',location:finding.location,caught_at_stage:'3a-adjudicate',disposition:'open',owner_identity:'/root',native_adjudication_claimed:false,original_obligation:'refuter:36:1',original_finding_sha256:api.foreignRefuterHash(finding)};
 const defect_record=put(prefix+'defect-record.json',defect);put('research/defect-ledger.jsonl',JSON.stringify(defect)+'\n');
 const application=put(prefix+'root-application.json',{run,owner_identity:'/root',native_finding_unchanged:true,files:[{path:`items/${id}.md`,before_sha256:source_before.sha256,after_sha256:source_after.sha256}]});
 const genuine_review_evidence=put(prefix+'focused-consumer-dispositions.json',{id,actual_fixture_evidence:'Actual fixture proof and consumers read separately from independent native verdict.'});
 const owner_review=put(prefix+'focused-proof-review.json',{run,id,evidence_refs:[genuine_review_evidence],original_obligation:'refuter:36:1',source_before_sha256:source_before.sha256,source_after_sha256:source_after.sha256,full_current_proof_read:true,consumer_checks_complete:true,native_acceptance_claimed:false,evidence:'Actual focused proof review, variance normalization repair and all genuine direct and indirect consumer dispositions retained separately from independent Alpha acceptance.'});
 const e={version:1,run,at:'2026-10-19T12:20:00Z',application,policy:api.FOREIGN_REFUTER_POLICY,owner_identity:'/root',reviewed:true,mathematical_acceptance:false,edit_permission:false,historical_observation_bound:false,observation_basis:'unbound-native-refuter; owner-registration capture only',origin_batch:'36',target_batch:'47',index:1,id,defect_id:defect.defect_id,finding,finding_sha256:api.foreignRefuterHash(finding),original_report,native_result,prompt,origin_scope,source_before,source_after,owner_review,defect_record,reason:'Retain the exact genuine original out-of-scope native finding as a separate mandatory home Alpha obligation without adding a false dependency or native coverage.'};
 const registry={version:1,run,policy:api.FOREIGN_REFUTER_POLICY,authorized_by:'owner',authorization:'Actual explicit owner opt-in for this exact independently adjudicated foreign flag.',routes:[e]};
 const save=()=>put(prefix+'step3-owner-foreign-refuter-routes.json',registry);save();
 const bindings=()=>api.loadForeignRefuterRoutes(root,run).map(x=>x.binding);
 return {root,put,e,registry,save,report,bindings};
}
test.after(()=>rmSync(runtime,{recursive:true,force:true}));
test('required actual-home gate preserves exact native flag and authentic current carrier',t=>{
 const f=fixture(t),rows=api.foreignRefuterObligations(f.root,run,'47');assert.equal(rows.length,1);assert.equal(rows[0].obligation,'gate:demo-variance');assert.deepEqual(rows[0].original_finding,f.report.flagged[0]);assert.equal(rows[0].original_obligation,'refuter:36:1');assert.equal(rows[0].historical_delta_unknown,true);assert.deepEqual(api.foreignRefuterObligations(f.root,run,'36'),[]);
 const carrier=api.foreignRefuterCarrier(f.root,run,rows[0]);assert.equal(carrier.item_sha256,f.e.source_after.sha256);assert.ok(carrier.contract_sha256);assert.ok(carrier.manifest_sha256);
 api.validateForeignRefuterContinuation(f.root,run,{unit:'36',report_sha256:f.e.original_report.sha256,foreign_refuter_routes:f.bindings()},f.report);
 assert.ok(api.foreignRefuterClosureEvidence(f.root,run)[f.e.original_report.path]);
});
const bad={
 'changed finding hash':f=>{f.e.finding_sha256='0'.repeat(64);f.save();},
 'invented reader authority':f=>{f.e.native_result=f.put(f.e.native_result.path,{run,role:'reader'});f.save();},
 'wrong native completion':f=>{let n=JSON.parse(readFileSync(resolve(f.root,f.e.native_result.path)));n.tail=JSON.stringify({...f.report,flagged:[]});f.e.native_result=f.put(f.e.native_result.path,n);f.save();},
 'native failed':f=>{let n=JSON.parse(readFileSync(resolve(f.root,f.e.native_result.path)));n.ok=false;f.e.native_result=f.put(f.e.native_result.path,n);f.save();},
 'wrong indexed finding':f=>{f.e.index=2;f.save();},
 'wrong actual home':f=>{f.e.target_batch='46';f.save();},
 'duplicate current home':f=>{f.put(prefix+'batch-46.pages.json',[{id:'other',items:[{id,deps:[]}]}]);},
 'published target':f=>{f.put(`items/${id}.md`,readFileSync(resolve(f.root,`items/${id}.md`),'utf8').replace('status: draft','status: published'));},
 'changed current identity':f=>{f.put(`items/${id}.md`,'---\nid: thm-other\nstatus: draft\npipeline_run: demo\n---\n');},
 'fake observed source':f=>{f.e.historical_observation_bound=true;f.save();},
 'owner acceptance':f=>{f.e.mathematical_acceptance=true;f.save();},
 'no pending owner record':f=>{f.e.defect_record=f.put(f.e.defect_record.path,{});f.save();},
 'different defect subject':f=>{let d=JSON.parse(readFileSync(resolve(f.root,f.e.defect_record.path)));d.subject='thm-other';f.put('research/defect-ledger.jsonl',JSON.stringify(d)+'\n');},
 'duplicate origin route':f=>{f.registry.routes.push({...f.e,defect_id:'another'});f.save();},
 'duplicate defect route':f=>{f.registry.routes.push({...f.e,index:2});f.save();},
 'missing consumer review':f=>{let r=JSON.parse(readFileSync(resolve(f.root,f.e.owner_review.path)));r.consumer_checks_complete=false;f.e.owner_review=f.put(f.e.owner_review.path,r);f.save();},
 'altered immutable report':f=>{f.put(f.e.original_report.path,{...f.report,flagged:[]});},
 'missing original prompt':f=>{rmSync(resolve(f.root,f.e.prompt.path));},
 'mutable canonical original report':f=>{f.e.original_report=f.put(prefix+'refute-36.json',f.report);f.save();},
 'mutable canonical original scope':f=>{f.e.origin_scope=f.put(prefix+'step3-scope-36.json',JSON.parse(readFileSync(resolve(f.root,f.e.origin_scope.path))));f.save();},
 'missing target contract':f=>{f.put(prefix+'batch-47.proof-contracts.json',{contracts:{}});},
};
for(const [name,mutate]of Object.entries(bad))test(`reject ${name}`,t=>{const f=fixture(t);mutate(f);assert.throws(()=>api.foreignRefuterObligations(f.root,run,'47'));});
test('continuation cannot omit, substitute or multiply foreign flag bindings',t=>{const f=fixture(t),bindings=f.bindings();for(const refs of [[],[{}],[bindings[0],bindings[0]]])assert.throws(()=>api.validateForeignRefuterContinuation(f.root,run,{unit:'36',report_sha256:f.e.original_report.sha256,foreign_refuter_routes:refs},f.report));});
test('removing registry after continuation registration fails closed',t=>{const f=fixture(t);f.put(prefix+'step3-refuter-continuations.json',{continuations:[{foreign_refuter_routes:f.bindings()}]});rmSync(resolve(f.root,prefix+'step3-owner-foreign-refuter-routes.json'));assert.throws(()=>api.foreignRefuterObligations(f.root,run,'47'));});
test('unrelated registry absent preserves ordinary continuation semantics',t=>{const root=mkdtempSync(resolve(tmpdir(),'foreign-empty-'));t.after(()=>rmSync(root,{recursive:true,force:true}));mkdirSync(resolve(root,'research'));writeFileSync(resolve(root,prefix+'step3-scope-36.json'),JSON.stringify({refuter_scope:['owned']}));assert.deepEqual(api.foreignRefuterObligations(root,run,'47'),[]);api.validateForeignRefuterContinuation(root,run,{unit:'36'},{flagged:[]});});
test('tampered derived required target cannot obtain valid stamped carrier',t=>{const f=fixture(t),[target]=api.foreignRefuterObligations(f.root,run,'47');assert.throws(()=>api.foreignRefuterCarrier(f.root,run,{...target,original_finding:{id:'fake'}}));});

test('owner registration creates no native ledger acceptance; ordinary Alpha must supply row later',t=>{const f=fixture(t);rmSync(resolve(f.root,'research/defect-ledger.jsonl'));assert.equal(api.foreignRefuterObligations(f.root,run,'47').length,1);});

test('real scope lifecycle requires independent home gate decision and ordinary closed ledger',t=>{
 const f=fixture(t);cpSync(resolve(runtime,'tools'),resolve(f.root,'tools'),{recursive:true});
 const call=(...args)=>spawnSync(process.execPath,[resolve(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run',run],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});
 const ok=(...args)=>{const r=call(...args);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put(prefix+'batch-47.pages.json',[{id:'foreign-page',category:'test',items:[{id,deps:[]}]}]);
 f.put('library/test/foreign-page.md','---\npage: foreign-page\nstatus: draft\nitems: [thm-foreign]\nexamples: []\n---\nAssigned page.\n');
 f.put(prefix+'alpha-groups.json',[{label:'p',covers:['47']}]);
 f.put(prefix+'reader-findings-47.json',{batch:'47',findings:[],coverage_note:'Fixture native reader opens actual owned scope.'});
 f.put(prefix+'reader-47.md','Fixture native47 independent review.');
 ok('hash','--batch','47','--label','pre');ok('hash','--batch','47','--label','post');ok('post-reader','--batch','47');
 const scope=JSON.parse(readFileSync(resolve(f.root,prefix+'step3-scope-47.json')));
 const order=prepareStep3AdjudicationOrder(f.root,run,{label:'batch-47',scopeGroup:'p',covers:['47']});
 assert.match(readFileSync(resolve(f.root,order),'utf8'),/gate:demo-variance/);
 assert.match(readFileSync(resolve(f.root,order),'utf8'),/Original unqualified variance bound/);
 f.put(prefix+'refute-47.json',{batch:'47',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Genuine fixture independent47 refuter retains its own exact assigned coverage.'});
 ok('collect','--batch','47');
 const decisionsPath=prefix+'alpha-batch-47-3a-decisions.json';
 f.put(decisionsPath,{version:1,run,group:'batch-47',decisions:[]});
 let r=call('check','--batch','47','--phase','adjudicate');assert.notEqual(r.status,0);assert.match(r.stderr,/did not decide gate:demo-variance/);
 const decision={obligation:'gate:demo-variance',id,route:'gate',verdict:'confirmed_fatal',defect_ids:['demo-variance'],historical_delta_unknown:true,owner_resolution:'Independent fixture Alpha preserves original unknown observed bytes and checks actual corrected proof.',evidence:'Independent fixture Alpha confirms exact original fatal variance finding and actual current corrected proof.'};
 f.put(decisionsPath,{version:1,run,group:'batch-47',decisions:[decision]});ok('stamp','--group','batch-47');
 r=call('check','--batch','47','--phase','adjudicate');assert.notEqual(r.status,0);assert.match(r.stderr,/ledger-open|not a repaired fatal/);
 const defect=JSON.parse(readFileSync(resolve(f.root,f.e.defect_record.path)));defect.disposition='fixed';f.put('research/defect-ledger.jsonl',JSON.stringify(defect)+'\n');
 ok('check','--batch','47','--phase','adjudicate');ok('check','--batch','47','--phase','final');
 // Independently chosen ordinary classifications are not predetermined by
 // the immutable owner's pending taxonomy or original fatal observation.
 for(const [verdict,severity,disposition]of [['confirmed_nonfatal','nonfatal','nonfatal-recorded'],['false_positive','fatal','false-positive']]) {
   const next={...decision,verdict};f.put(decisionsPath,{version:1,run,group:'batch-47',decisions:[next]});
   f.put('research/defect-ledger.jsonl',JSON.stringify({...defect,severity,disposition})+'\n');
   ok('stamp','--group','batch-47');ok('check','--batch','47','--phase','adjudicate');ok('check','--batch','47','--phase','final');
 }
 const saved=readFileSync(resolve(f.root,decisionsPath));f.put(decisionsPath,{version:1,run,group:'batch-47',decisions:[]});assert.notEqual(call('check','--batch','47','--phase','final').status,0);writeFileSync(resolve(f.root,decisionsPath),saved);
 rmSync(resolve(f.root,'research/defect-ledger.jsonl'));assert.notEqual(call('check','--batch','47','--phase','final').status,0);
 assert.deepEqual(JSON.parse(readFileSync(resolve(f.root,prefix+'refute-47.json'))).flagged,[]);
 assert.deepEqual(JSON.parse(readFileSync(resolve(f.root,f.e.original_report.path))).flagged,f.report.flagged);
});

test('same-batch page move invalidates earlier foreign gate stamp',t=>{const f=fixture(t),[target]=api.foreignRefuterObligations(f.root,run,'47'),before=api.foreignRefuterCarrier(f.root,run,target);f.put(prefix+'batch-47.pages.json',[{id:'moved-page',items:[{id,deps:[]}]}]);assert.notEqual(api.foreignRefuterCarrier(f.root,run,target).manifest_sha256,before.manifest_sha256);});

test('unrelated registry metadata does not invalidate an existing entry carrier',t=>{const f=fixture(t),[target]=api.foreignRefuterObligations(f.root,run,'47'),before=api.foreignRefuterCarrier(f.root,run,target);f.registry.owner_note='Another unrelated registry entry preparation note';f.save();assert.deepEqual(api.foreignRefuterCarrier(f.root,run,target),before);});

test('genuine later current proof amendment changes stamp without rewriting original source archives',t=>{const f=fixture(t),[target]=api.foreignRefuterObligations(f.root,run,'47'),before=api.foreignRefuterCarrier(f.root,run,target);f.put(`items/${id}.md`,readFileSync(resolve(f.root,`items/${id}.md`),'utf8').replace('Corrected proof.','Genuine independent Alpha amendment.'));const after=api.foreignRefuterCarrier(f.root,run,target);assert.throws(()=>api.foreignRefuterObligations(f.root,run,'47',{beforeDispatch:true}));assert.notEqual(after.item_sha256,before.item_sha256);assert.equal(sha(readFileSync(resolve(f.root,f.e.source_after.path))),f.e.source_after.sha256);});
