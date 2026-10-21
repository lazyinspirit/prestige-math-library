import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,mkdirSync,readFileSync,writeFileSync,copyFileSync,rmSync,existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve,join,dirname } from 'node:path';
import { fileURLToPath,pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
const repo=process.cwd(),proposal=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const code=mkdtempSync(join(tmpdir(),'unmanifested-code-'));
const tracked=spawnSync('git',['ls-files','-z','tools'],{encoding:'utf8'});assert.equal(tracked.status,0);
for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(code,p)),{recursive:true});copyFileSync(join(repo,p),join(code,p));}
for(const name of ['step3-owner-unmanifested-draft-context.mjs','step3-scope.mjs','step3-close.mjs','step3-adjudication-order.mjs'])copyFileSync(join(proposal,'tools',name),join(code,'tools',name));
process.env.PRESTIGE_MATH_REPO=repo;
const api=await import(pathToFileURL(join(code,'tools/step3-owner-unmanifested-draft-context.mjs')));
const {requiredPageHash:hash}=await import(pathToFileURL(join(code,'tools/step3-owner-required-page-routes.mjs')));
const {prepareStep3AdjudicationOrder}=await import(pathToFileURL(join(code,'tools/step3-adjudication-order.mjs')));
const sha=x=>createHash('sha256').update(x).digest('hex');
function fixture(){
 const root=mkdtempSync(join(tmpdir(),'unmanifested-fixture-'));
 const put=(p,x)=>{mkdirSync(dirname(join(root,p)),{recursive:true});writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');};
 const link=p=>({path:p,sha256:sha(readFileSync(join(root,p)))});
 const source='---\nid: lem-helper\nstatus: draft\npipeline_run: r\ndeps: []\n---\n\n## Statement\nUnchanged helper.\n';
 const consumer='---\nid: thm-consumer\nstatus: draft\npipeline_run: r\ndeps: [lem-helper]\n---\n\n## Statement\nConsumer.\n';
 put('items/lem-helper.md',source);put('items/thm-consumer.md',consumer);
 const manifest=[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:['lem-helper']}]}];
 put('research/r-batch-1.pages.json',manifest);put('research/r-capture/manifest.json',manifest);put('research/r-capture/source.md',source);put('research/r-capture/consumer.md',consumer);
 const finding={id:'lem-helper',subject_type:'in-run-dependency',consumer_id:'thm-consumer',observed_source:{snapshot:'current',item_sha256:sha(source)},location:'Statement',defect:'ill-formed',evidence:'Fixture reader reports inline link in helper statement.',severity:'fatal'};
 const findings={batch:'1',findings:[finding],coverage_note:'Genuine fixture findings.'};put('research/r-reader-findings-1.json',findings);put('research/r-capture/findings.json',findings);put('research/r-reader-1.md','Fixture full reader report.');
 const prompt='research/r-dispatch/reader-reader-1.attempt-1.prompt.md';put(prompt,'Actual fixture native assignment.');
 const native='research/r-dispatch/reader-reader-1.attempt-1.result.json';
 put(native,{attempt:1,run:'r',role:'reader',label:'reader-1',covers:['1'],ok:true,exit_code:0,process_exit_code:0,timed_out:false,ended_at:'2020-01-01T00:00:00Z',prompt:join(root,prompt),tail:JSON.stringify(findings),terminal_summary:{task_completed:true,task_aborted:false}});
 const entry={version:1,run:'r',policy:api.UNMANIFESTED_POLICY,owner_identity:'/root',reviewed:true,mathematical_acceptance:false,edit_permission:false,coverage_adopted:false,at:'2020-01-02T00:00:00Z',reason:'Owner authorizes only routing of the genuine native observation to its assigned consumer Alpha, with unchanged unmanifested draft context and no invented home.',batch:'1',index:1,id:'lem-helper',consumer_id:'thm-consumer',finding_sha256:hash(finding),findings:link('research/r-capture/findings.json'),native_result:link(native),prompt:link(prompt),reader_report:link('research/r-reader-1.md'),observed_source:link('research/r-capture/source.md'),consumer_source:link('research/r-capture/consumer.md'),consumer_manifest:link('research/r-capture/manifest.json'),consumer_manifest_original_path:'research/r-batch-1.pages.json'};
 const save=()=>put('research/r-step3-owner-unmanifested-draft-context.json',{version:1,run:'r',policy:api.UNMANIFESTED_POLICY,authorized_by:'owner',authorization:'Actual fixture root authorization for bounded read-only context routing.',contexts:[entry]});save();
 return {root,put,link,entry,save,finding,source,consumer,manifest,normalized:()=>api.bindUnmanifestedDraftContext(root,'r','1',{...finding,obligation:'reader:1:1'}),close:()=>rmSync(root,{recursive:true,force:true})};
}
test('authentic route preserves native source/label and binds no producer ownership',()=>{const f=fixture();try{const raw=readFileSync(join(f.root,'research/r-reader-findings-1.json'));const n=f.normalized();assert.equal(n.subject_type,'unmanifested-draft-dependency');assert.equal(n.producer_batch,undefined);const c=api.unmanifestedDraftCarrier(f.root,'r','1',n);assert.equal(c.item_sha256,f.entry.observed_source.sha256);assert.ok(c.unchanged_context);assert.deepEqual(readFileSync(join(f.root,'research/r-reader-findings-1.json')),raw);assert.equal(api.loadUnmanifestedDraftContexts(f.root,'r','2').size,0);}finally{f.close();}});
for(const [name,change] of [
 ['acceptance claim',f=>f.entry.mathematical_acceptance=true],['edit permission',f=>f.entry.edit_permission=true],['coverage adoption',f=>f.entry.coverage_adopted=true],['invented indexed finding',f=>f.entry.index=2],['changed prompt',f=>f.put(f.entry.prompt.path,'new')],['changed archived source',f=>f.put(f.entry.observed_source.path,'new')],['changed current body',f=>f.put('items/lem-helper.md',f.source+'new')],['changed current metadata',f=>f.put('items/lem-helper.md',f.source.replace('draft','published'))],['wrong run marker',f=>f.put('items/lem-helper.md',f.source.replace('pipeline_run: r','pipeline_run: other'))],['invented frontier home',f=>f.put('research/r-batch-2.pages.json',[{id:'foreign',items:[{id:'lem-helper'}]}])],['duplicate consumer home',f=>f.put('research/r-batch-2.pages.json',f.manifest)],['source edge removed',f=>f.put('items/thm-consumer.md',f.consumer.replace('deps: [lem-helper]','deps: []'))],['manifest edge removed',f=>f.put('research/r-batch-1.pages.json',[{id:'owned',items:[{id:'thm-consumer',deps:[]}]}])],['rewritten canonical finding',f=>f.put('research/r-reader-findings-1.json',{batch:'1',findings:[]})],['incomplete structured tail',f=>{const p=f.entry.native_result.path,n=JSON.parse(readFileSync(join(f.root,p)));n.tail='clipped';f.put(p,n);f.entry.native_result=f.link(p);}],['failed native execution',f=>{const p=f.entry.native_result.path,n=JSON.parse(readFileSync(join(f.root,p)));n.process_exit_code=1;f.put(p,n);f.entry.native_result=f.link(p);}]
])test(`fails closed: ${name}`,()=>{const f=fixture();try{change(f);f.save();assert.throws(()=>f.normalized());}finally{f.close();}});
test('missing registry, forged normalized finding and duplicate authority fail closed',()=>{const f=fixture();try{const n=f.normalized();assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',{...n,producer_batch:'2'}));assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',{...n,evidence:'Different evidence'}));f.put('research/r-step3-owner-unmanifested-draft-context.json',{version:1,run:'r',policy:api.UNMANIFESTED_POLICY,authorized_by:'owner',authorization:'Actual root authorization with forty characters minimum.',contexts:[f.entry,f.entry]});assert.throws(()=>f.normalized());rmSync(join(f.root,'research/r-step3-owner-unmanifested-draft-context.json'));assert.equal(api.loadUnmanifestedDraftContexts(f.root,'r','1').size,0);assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',n));}finally{f.close();}});
test('ordinary owned consumer proof edits retain direct edge but require a new current seal',()=>{const f=fixture();try{const n=f.normalized();const before=api.unmanifestedDraftCarrier(f.root,'r','1',n);f.put('items/thm-consumer.md',f.consumer+'Owned consumer proof amendment.');const after=api.unmanifestedDraftCarrier(f.root,'r','1',n);assert.notEqual(hash(before),hash(after));assert.equal(n.observed_sha256,f.normalized().observed_sha256);}finally{f.close();}});
test('all fixed/acceptance verdicts rejected; only independent nonfatal, false positive or escalation',()=>{for(const v of ['confirmed_fatal','accepted','repaired','accepted_repair','context_accepted'])assert.equal(api.unmanifestedDraftVerdictAllowed(v),false);for(const v of ['confirmed_nonfatal','false_positive','escalated'])assert.equal(api.unmanifestedDraftVerdictAllowed(v),true);});
test('closure freezes history, allows legitimate later source repair, detects archive mutation',()=>{const f=fixture();try{const before=api.unmanifestedDraftClosureEvidence(f.root,'r');f.put('research/r-step3-closure.json',{version:3,run:'r',status:'closed',basis:'dependency-ordered-step3a'});f.put('items/lem-helper.md',f.source+'Later ordinary owner repair.');assert.deepEqual(api.unmanifestedDraftClosureEvidence(f.root,'r'),before);assert.throws(()=>f.normalized());f.put(f.entry.observed_source.path,'changed history');assert.throws(()=>api.unmanifestedDraftClosureEvidence(f.root,'r'));}finally{f.close();}});
test('native split, collect, Alpha order, stamp and ordinary ledger preserve read-only context',()=>{const f=fixture();try{
 for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(f.root,p)),{recursive:true});copyFileSync(join(code,p),join(f.root,p));}
 copyFileSync(join(code,'tools/step3-owner-unmanifested-draft-context.mjs'),join(f.root,'tools/step3-owner-unmanifested-draft-context.mjs'));
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});
 const ok=(...a)=>{const r=run(...a);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});
 ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');
 const registryPath=join(f.root,'research/r-step3-owner-unmanifested-draft-context.json'),authority=readFileSync(registryPath);rmSync(registryPath);assert.notEqual(run('split','--batch','1').status,0);writeFileSync(registryPath,authority);ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));assert.deepEqual(scope.manifest_post,['thm-consumer']);assert.ok(!scope.refuter_scope.includes('lem-helper'));assert.equal(scope.reader_findings[0].subject_type,'unmanifested-draft-dependency');
 const order=prepareStep3AdjudicationOrder(f.root,'r',{label:'batch-1',scopeGroup:'g',covers:['1']});assert.match(readFileSync(join(f.root,order),'utf8'),/no producer home or native coverage/);
 f.put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Actual exact scope fixture refutation.'});ok('collect','--batch','1');ok('check','--batch','1','--phase','split');
 const ledger={run:'r',defect_id:'helper-context',subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'};
 f.put('research/defect-ledger.jsonl',JSON.stringify(ledger)+'\n');
 const d={obligation:'reader:1:1',id:'lem-helper',consumer_id:'thm-consumer',route:'reader',verdict:'confirmed_nonfatal',defect_ids:['helper-context'],evidence:'Independent fixture Alpha records nonfatal unchanged-context maintenance without any repair acceptance.'};
 const save=()=>f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions:[d]});save();ok('stamp');ok('check','--batch','1','--phase','adjudicate');ok('check','--batch','1','--phase','final');
 const decisionsPath=join(f.root,'research/r-alpha-batch-1-3a-decisions.json'),stamped=readFileSync(decisionsPath);
 const stale=JSON.parse(stamped);stale.decisions[0].subject_sha256='a'.repeat(64);f.put('research/r-alpha-batch-1-3a-decisions.json',stale);assert.notEqual(run('check','--batch','1','--phase','final').status,0);writeFileSync(decisionsPath,stamped);
 ledger.disposition='open';f.put('research/defect-ledger.jsonl',JSON.stringify(ledger)+'\n');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);ledger.disposition='nonfatal-recorded';f.put('research/defect-ledger.jsonl',JSON.stringify(ledger)+'\n');
 d.verdict='confirmed_fatal';ledger.severity='fatal';ledger.disposition='fixed';f.put('research/defect-ledger.jsonl',JSON.stringify(ledger)+'\n');save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
 }finally{f.close();}});

test('independent reproduction: scalar consumer deps falsely treated as actual direct edge',()=>{const f=fixture();try{
 f.put('items/thm-consumer.md',f.consumer.replace('deps: [lem-helper]','deps: lem-helper'));
 assert.doesNotThrow(()=>f.normalized());
}finally{f.close();}});
test('independent reproduction: scalar manifest deps falsely treated as actual direct edge',()=>{const f=fixture();try{
 f.put('research/r-batch-1.pages.json',[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:'lem-helper'}]}]);
 assert.doesNotThrow(()=>f.normalized());
}finally{f.close();}});

test.after(()=>rmSync(code,{recursive:true,force:true}));
