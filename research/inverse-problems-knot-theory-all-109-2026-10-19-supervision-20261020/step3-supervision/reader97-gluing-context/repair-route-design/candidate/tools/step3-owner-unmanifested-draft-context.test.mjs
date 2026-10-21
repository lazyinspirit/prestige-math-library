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
 ['archived YAML scalar deps',f=>{f.put(f.entry.consumer_source.path,f.consumer.replace('deps: [lem-helper]','deps: lem-helper'));f.entry.consumer_source=f.link(f.entry.consumer_source.path);} ],
 ['current YAML scalar deps',f=>f.put('items/thm-consumer.md',f.consumer.replace('deps: [lem-helper]','deps: lem-helper'))],
 ['archived manifest scalar deps',f=>{f.put(f.entry.consumer_manifest.path,[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:'lem-helper'}]}]);f.entry.consumer_manifest=f.link(f.entry.consumer_manifest.path);} ],
 ['current manifest scalar deps',f=>f.put('research/r-batch-1.pages.json',[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:'lem-helper'}]}])],
 ['invalid ID in dependency array',f=>f.put('items/thm-consumer.md',f.consumer.replace('deps: [lem-helper]','deps: [lem-helper, "bad id"]'))],
 ['wrong reader prose path',f=>{f.put('research/r-capture/invented-reader.md','Fixture full reader report.');f.entry.reader_report=f.link('research/r-capture/invented-reader.md');}],
 ['changed canonical reader prose',f=>f.put('research/r-reader-1.md','Rewritten prose not captured by the registered raw hash.')],
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
test.after(()=>rmSync(code,{recursive:true,force:true}));

function refuterFixture(f,extra=['lem-helper']){
 const scope={version:2,run:'r',batch:'1',manifest_post:['thm-consumer'],refuter_scope:['thm-consumer'],reader_findings:[f.normalized()]};f.put('research/r-step3-scope-1.json',scope);
 const flagged=[{id:'lem-helper',location:'Statement, opening',defect:'ill-formed',evidence:'Actual refuter independently observes the unchanged helper inline formatting.',severity:'fatal'},{id:'thm-consumer',location:'title',defect:'overstrong-title-or-statement',evidence:'Actual refuter observes an owned title qualification defect.',severity:'fatal'}];
 const report={batch:'1',opened:['thm-consumer',...extra],not_opened:[],flagged,coverage_note:'Fresh genuine fixture refuter read assigned carrier and registered direct supplier.'};
 const prompt='research/r-dispatch/refuter-refute-1.attempt-1.prompt.md';f.put(prompt,'Actual refuter prompt.');f.put('research/r-refute-1.json',report);
 const result={run:'r',role:'refuter',label:'refute-1',attempt:1,covers:['1'],ok:true,exit_code:0,process_exit_code:0,timed_out:false,ended_at:'2020-01-03T00:00:00Z',prompt:join(f.root,prompt),tail:JSON.stringify(report),terminal_summary:{task_completed:true,task_aborted:false}};
 for(const p of ['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'])f.put(p,result);
 return {scope,report,result,prompt,flagged,raw:()=>({...flagged[0],obligation:'refuter:1:1'})};
}
test('extra opened and flagged context binds exact native output, reader authority and same observed carrier',()=>{const f=fixture();try{const x=refuterFixture(f);const raw=readFileSync(join(f.root,'research/r-refute-1.json'));assert.ok(api.validateUnmanifestedRefuterOpened(f.root,'r','1','lem-helper',x.scope));const n=api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope);assert.equal(n.owner_unmanifested_refuter_context.reader_obligation,'reader:1:1');assert.equal(n.observed_sha256,f.normalized().observed_sha256);assert.equal(n.consumer_id,'thm-consumer');assert.equal(n.producer_batch,undefined);assert.ok(api.unmanifestedDraftCarrier(f.root,'r','1',n).owner_unmanifested_refuter_context);assert.deepEqual(readFileSync(join(f.root,'research/r-refute-1.json')),raw);}finally{f.close();}});
for(const [name,change] of [
 ['different original flag', (f,x)=>x.flagged[0].evidence='forged rewritten evidence'],
 ['canonical native report changed',(f,x)=>f.put('research/r-refute-1.json',{...x.report,coverage_note:'Rewritten after native completion.'})],
 ['wrong refuter prompt binding',(f,x)=>{x.result.prompt='wrong/path';for(const p of ['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'])f.put(p,x.result);}],
 ['failed original refuter',(f,x)=>{x.result.ok=false;for(const p of ['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'])f.put(p,x.result);}],
 ['stable and attempt mismatch',(f,x)=>{x.result.tail='clipped';f.put('research/r-dispatch/refuter-refute-1.result.json',x.result);}],
 ['edited exact helper',(f,x)=>f.put('items/lem-helper.md',f.source+'New edit.')],
 ['missing reader anchor',(f,x)=>x.scope.reader_findings=[]],
 ['unassigned consumer',(f,x)=>x.scope.manifest_post=[]],
 ['context invented as assigned coverage',(f,x)=>x.scope.refuter_scope.push('lem-helper')],
 ['target not actually opened',(f,x)=>{x.report.opened=['thm-consumer'];x.result.tail=JSON.stringify(x.report);f.put('research/r-refute-1.json',x.report);for(const p of ['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'])f.put(p,x.result);}]
])test(`refuter context rejects ${name}`,()=>{const f=fixture();try{const x=refuterFixture(f);change(f,x);assert.throws(()=>api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope));}finally{f.close();}});
test('changed refuter prompt after collection invalidates the frozen observation seal',()=>{const f=fixture();try{const x=refuterFixture(f);const n=api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope);f.put(x.prompt,'tampered after collection');assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',n));}finally{f.close();}});
test('multiple registered observations of same helper are ambiguous without a native consumer field',()=>{const f=fixture();try{
 const x=refuterFixture(f);const report=JSON.parse(readFileSync(join(f.root,f.entry.findings.path)));report.findings.push(f.finding);f.put(f.entry.findings.path,report);f.put('research/r-reader-findings-1.json',report);f.entry.findings=f.link(f.entry.findings.path);
 const native=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));native.tail=JSON.stringify(report);f.put(f.entry.native_result.path,native);f.entry.native_result=f.link(f.entry.native_result.path);const e2={...f.entry,index:2};f.put('research/r-step3-owner-unmanifested-draft-context.json',{version:1,run:'r',policy:api.UNMANIFESTED_POLICY,authorized_by:'owner',authorization:'Root authorization for two genuinely indexed reader observations of same helper.',contexts:[f.entry,e2]});x.scope.reader_findings=[f.normalized(),api.bindUnmanifestedDraftContext(f.root,'r','1',{...f.finding,obligation:'reader:1:2'})];assert.throws(()=>api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope),/ambiguous/);
 }finally{f.close();}});
test('refuter context native lifecycle keeps BOTH flags, same-defect sharing, strict coverage, seals and closure evidence',()=>{const f=fixture();try{
 for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(f.root,p)),{recursive:true});copyFileSync(join(code,p),join(f.root,p));}copyFileSync(join(code,'tools/step3-owner-unmanifested-draft-context.mjs'),join(f.root,'tools/step3-owner-unmanifested-draft-context.mjs'));
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});const ok=(...a)=>{const r=run(...a);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json'))),x=refuterFixture(f);f.put('research/r-step3-scope-1.json',scope);
 x.report.opened=[...scope.refuter_scope,'lem-helper'];x.result.tail=JSON.stringify(x.report);f.put('research/r-refute-1.json',x.report);for(const p of ['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'])f.put(p,x.result);
 ok('collect','--batch','1');ok('check','--batch','1','--phase','split');const collected=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));assert.equal(collected.refuter_findings.length,2);assert.equal(collected.refuter_findings[0].obligation,'refuter:1:1');assert.equal(collected.refuter_findings[1].obligation,'refuter:1:2');assert.ok(!collected.refuter_scope.includes('lem-helper'));assert.deepEqual(collected.refuter_context_opened,['lem-helper']);
 // An unrelated extra context remains rejected even with a registered helper.
 const savedReport=readFileSync(join(f.root,'research/r-refute-1.json'));
 const nativePaths=['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'];
 const invalidExtra={...x.report,opened:[...x.report.opened,'lem-unrelated']};f.put('research/r-refute-1.json',invalidExtra);for(const p of nativePaths)f.put(p,{...x.result,tail:JSON.stringify(invalidExtra)});
 const extraRejected=run('collect','--batch','1');assert.notEqual(extraRejected.status,0);assert.match(extraRejected.stderr,/lem-unrelated/);
 const missingRequired={...x.report,opened:x.report.opened.filter(id=>id!=='thm-consumer')};f.put('research/r-refute-1.json',missingRequired);for(const p of nativePaths)f.put(p,{...x.result,tail:JSON.stringify(missingRequired)});assert.notEqual(run('collect','--batch','1').status,0);
 writeFileSync(join(f.root,'research/r-refute-1.json'),savedReport);for(const p of nativePaths)f.put(p,x.result);
 const decisions=[{obligation:'reader:1:1',id:'lem-helper',consumer_id:'thm-consumer',route:'reader',verdict:'confirmed_nonfatal',defect_ids:['helper-shared'],evidence:'Alpha independently finds unchanged helper formatting nonfatal maintenance.'},{obligation:'refuter:1:1',id:'lem-helper',consumer_id:'thm-consumer',route:'flagged',verdict:'confirmed_nonfatal',defect_ids:['helper-shared'],same_defect_as:'reader:1:1',same_defect_evidence:'Both independently reviewed obligations concern the same unchanged helper source carrier and inline statement formatting.',evidence:'Alpha independently adjudicates actual refuter observation, without inheriting the reader decision.'},{obligation:'refuter:1:2',id:'thm-consumer',route:'flagged',verdict:'false_positive',defect_ids:['owned-title'],evidence:'Alpha independently inspects the actual owned title and rejects this fixture counterexample.'}];
 f.put('research/defect-ledger.jsonl',[{run:'r',defect_id:'helper-shared',subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'},{run:'r',defect_id:'owned-title',subject:'thm-consumer',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'false-positive'}].map(x=>JSON.stringify(x)).join('\n')+'\n');
 const save=()=>f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions});save();ok('stamp');ok('check','--batch','1','--phase','adjudicate');ok('check','--batch','1','--phase','final');
 const evidence=api.unmanifestedDraftClosureEvidence(f.root,'r');assert.ok(evidence['research/r-dispatch/refuter-refute-1.attempt-1.result.json']);assert.ok(evidence['research/r-refute-1.json']);assert.ok(evidence['research/r-dispatch/refuter-refute-1.attempt-1.prompt.md']);
 f.put('research/r-step3-closure.json',{version:3,run:'r',status:'closed',basis:'dependency-ordered-step3a'});f.put('items/lem-helper.md',f.source+'Later legitimate owner source repair.');assert.deepEqual(api.unmanifestedDraftClosureEvidence(f.root,'r'),evidence);f.put('items/lem-helper.md',f.source);rmSync(join(f.root,'research/r-step3-closure.json'));
 decisions.pop();save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
 }finally{f.close();}});

test('legacy version3 scope without applicable opt-in retains empty context defaults',()=>{const f=fixture();try{const v3={version:3,run:'r',batch:'2',items:[]};assert.equal(api.unmanifestedRefuterContexts(f.root,'r','2',v3).size,0);rmSync(join(f.root,'research/r-step3-owner-unmanifested-draft-context.json'));assert.equal(api.unmanifestedRefuterContexts(f.root,'r','1',{...v3,batch:'1'}).size,0);}finally{f.close();}});
test('actual applicable registered context still requires version2 scope',()=>{const f=fixture();try{assert.throws(()=>api.unmanifestedRefuterContexts(f.root,'r','1',{version:3,run:'r',batch:'1',items:['thm-consumer']}),/wrong registered reader scope/);}finally{f.close();}});

function ownerCurrentFixture(){
 const f=fixture();f.source=f.source.replace('Unchanged helper.','Current first assertion supplies the precise smooth proper disk implication used by the assigned consumer.');f.consumer=f.consumer.replace('Consumer.','The assigned consumer uses exactly the first assertion with a compact smooth orientable exterior and a whole boundary torus.');
 f.put('items/lem-helper.md',f.source);f.put('items/thm-consumer.md',f.consumer);f.put('research/r-capture/owner-current-source.md',f.source);f.put('research/r-capture/consumer.md',f.consumer);
 f.finding={...f.finding,subject_type:'in-flight-item',consumer_id:null,observed_source:null,severity:'nonfatal'};
 const findings={batch:'1',findings:[f.finding],coverage_note:'Actual fixture reader preserves absent consumer and source observation.'};
 f.put('research/r-reader-findings-1.json',findings);f.put('research/r-capture/findings.json',findings);
 f.put('research/r-reader-1.md','The actual reader prose names lem-helper and thm-consumer as separate observed source and assigned use, without attributing a native source hash.');
 const native=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));native.tail=JSON.stringify(findings);f.put(f.entry.native_result.path,native);
 const e=f.entry;e.native_finding_basis=api.OWNER_CURRENT_CONTEXT_BASIS;e.owner_context_consumer_id=e.consumer_id;delete e.consumer_id;delete e.observed_source;e.owner_current_source=f.link('research/r-capture/owner-current-source.md');e.consumer_source=f.link('research/r-capture/consumer.md');e.findings=f.link('research/r-capture/findings.json');e.native_result=f.link(e.native_result.path);e.reader_report=f.link('research/r-reader-1.md');e.finding_sha256=hash(f.finding);
 const clause='Current first assertion supplies the precise smooth proper disk implication used by the assigned consumer.';
 const premise='The assigned consumer uses exactly the first assertion with a compact smooth orientable exterior and a whole boundary torus.';
 const delegated={run:'r',reviewer:'/root/fixture_reviewer',completed:true,mathematical_acceptance:false,native_coverage_adopted:false,source_repaired:false,original_obligation:'reader:1:1',supplier_id:'lem-helper',routing_consumer_witness:'thm-consumer',used_clause:clause,consumer_premise_quotes:[premise]};f.put('research/r-capture/delegated-current-review.json',delegated);f.put('research/r-capture/current-provenance.json',{source:e.owner_current_source,consumer:e.consumer_source,history:'No native source observation supplied.'});
 const rootReview={version:1,run:'r',owner_identity:'/root',recorded_at:'2020-01-01T12:00:00Z',completed:true,full_current_proof_read:true,affected_consumer_use_reviewed:true,source_repaired:false,mathematical_acceptance:false,native_coverage_adopted:false,obligation:'reader:1:1',supplier_id:'lem-helper',routing_consumer_witness:'thm-consumer',delegated_review:f.link('research/r-capture/delegated-current-review.json'),current_provenance:f.link('research/r-capture/current-provenance.json'),current_source:e.owner_current_source,current_consumer:e.consumer_source};
 for(const key of ['root_actual_reading','interface_result','preserved_gap','history','limits'])rootReview[key]='Actual fixture owner review records only current source and its first-assertion assigned use, with the unrelated gap and absent historical native observation explicitly preserved.';
 f.put('research/r-capture/root-current-review.json',rootReview);e.owner_current_review=f.link('research/r-capture/root-current-review.json');f.save();
 f.normalized=()=>api.bindUnmanifestedDraftContext(f.root,'r','1',{...f.finding,obligation:'reader:1:1'});
 return {...f,delegated,rootReview,saveReview:()=>{f.put('research/r-capture/root-current-review.json',rootReview);e.owner_current_review=f.link('research/r-capture/root-current-review.json');f.save();}};
}
test('owner-current basis preserves exact native nulls and binds a distinct current carrier',()=>{const f=ownerCurrentFixture();try{const original=readFileSync(join(f.root,'research/r-reader-findings-1.json'));const n=f.normalized();assert.equal(n.consumer_id,null);assert.equal(n.observed_source,null);assert.equal(n.observed_sha256,null);assert.equal(n.owner_context_consumer_id,'thm-consumer');assert.match(n.observation_basis,/unbound-native-observation/);assert.ok(api.unmanifestedDraftCarrier(f.root,'r','1',n).item_sha256);assert.deepEqual(readFileSync(join(f.root,'research/r-reader-findings-1.json')),original);}finally{f.close();}});
for(const [name,change] of [
 ['unknown basis',f=>f.entry.native_finding_basis='other'],
 ['invented native consumer attribution',f=>f.entry.consumer_id='thm-consumer'],
 ['invented historical source ref',f=>f.entry.observed_source=f.entry.owner_current_source],
 ['missing root review',f=>delete f.entry.owner_current_review],
 ['not root adopted',f=>{f.rootReview.owner_identity='/root/fixture_reviewer';f.saveReview();}],
 ['missing full current proof review',f=>{f.rootReview.full_current_proof_read=false;f.saveReview();}],
 ['review claims acceptance',f=>{f.rootReview.mathematical_acceptance=true;f.saveReview();}],
 ['consumer use unreviewed',f=>{f.rootReview.affected_consumer_use_reviewed=false;f.saveReview();}],
 ['wrong review obligation',f=>{f.rootReview.obligation='reader:1:2';f.saveReview();}],
 ['source archive changed',f=>f.put(f.entry.owner_current_source.path,'Different archive')],
 ['current source edited',f=>f.put('items/lem-helper.md',f.source+'Edited')],
 ['current assigned use changed',f=>f.put('items/thm-consumer.md',f.consumer.replace('compact smooth orientable exterior','noncompact exterior'))],
 ['nonliteral supplier clause',f=>{f.delegated.used_clause='A purported supplier clause which does not literally occur in the current archived source.';f.put('research/r-capture/delegated-current-review.json',f.delegated);f.rootReview.delegated_review=f.link('research/r-capture/delegated-current-review.json');f.saveReview();}],
 ['nonliteral consumer premise',f=>{f.delegated.consumer_premise_quotes=['A purported consumer premise which does not occur in the archived assigned consumer.'];f.put('research/r-capture/delegated-current-review.json',f.delegated);f.rootReview.delegated_review=f.link('research/r-capture/delegated-current-review.json');f.saveReview();}],
 ['native prose lacks routing witness',f=>{f.put('research/r-reader-1.md','lem-helper only, with no consumer witness.');f.entry.reader_report=f.link('research/r-reader-1.md');}],
 ['source deps scalar',f=>f.put('items/thm-consumer.md',f.consumer.replace('deps: [lem-helper]','deps: lem-helper'))],
 ['manifest deps scalar',f=>f.put('research/r-batch-1.pages.json',[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:'lem-helper'}]}])],
 ['helper acquires frontier home',f=>f.put('research/r-batch-2.pages.json',[{id:'outside',items:[{id:'lem-helper'}]}])]
])test(`owner-current rejects ${name}`,()=>{const f=ownerCurrentFixture();try{change(f);f.save();assert.throws(()=>f.normalized());}finally{f.close();}});
test('native nullable observation cannot be rewritten even if owner entry retains a consumer witness',()=>{for(const field of ['consumer_id','observed_source']){const f=ownerCurrentFixture();try{f.finding[field]=field==='consumer_id'?'thm-consumer':{snapshot:'current',item_sha256:f.entry.owner_current_source.sha256};const report={batch:'1',findings:[f.finding],coverage_note:'Changed native shape fixture.'};f.put('research/r-reader-findings-1.json',report);f.put(f.entry.findings.path,report);f.entry.findings=f.link(f.entry.findings.path);f.entry.finding_sha256=hash(f.finding);const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.tail=JSON.stringify(report);f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);f.save();assert.throws(()=>f.normalized());}finally{f.close();}}});
test('owner-current native lifecycle projects original nulls, requires independent decision and truthful history resolution',()=>{const f=ownerCurrentFixture();try{
 for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(f.root,p)),{recursive:true});copyFileSync(join(code,p),join(f.root,p));}copyFileSync(join(code,'tools/step3-owner-unmanifested-draft-context.mjs'),join(f.root,'tools/step3-owner-unmanifested-draft-context.mjs'));
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});const ok=(...a)=>{const r=run(...a);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json'))),n=scope.reader_findings[0];assert.equal(n.observed_source,null);assert.equal(n.consumer_id,null);assert.equal(n.observed_sha256,null);assert.equal(n.owner_context_consumer_id,'thm-consumer');assert.deepEqual(scope.manifest_post,['thm-consumer']);assert.ok(!scope.refuter_scope.includes('lem-helper'));assert.equal(api.unmanifestedRefuterContexts(f.root,'r','1',scope).size,1);
 const order=prepareStep3AdjudicationOrder(f.root,'r',{label:'batch-1',scopeGroup:'g',covers:['1']});assert.match(readFileSync(join(f.root,order),'utf8'),/OWNER-CURRENT SOURCE ONLY/);
 f.put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Actual refuter opens only assigned scope, no helper coverage claimed.'});ok('collect','--batch','1');ok('check','--batch','1','--phase','split');
 f.put('research/defect-ledger.jsonl',JSON.stringify({run:'r',defect_id:'owner-current-gap',subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'})+'\n');
 const d={obligation:'reader:1:1',id:'lem-helper',consumer_id:null,owner_context_consumer_id:'thm-consumer',route:'reader',verdict:'confirmed_nonfatal',defect_ids:['owner-current-gap'],historical_delta_unknown:true,owner_resolution:'Independent Alpha reviews the current source and assigned use only; original native consumer/source observations remain null.',evidence:'Alpha independently records the separate current criterion gap as nonfatal maintenance; first assertion use is sound and no source repair is claimed.'};
 const save=()=>f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions:[d]});save();ok('stamp');ok('check','--batch','1','--phase','adjudicate');ok('check','--batch','1','--phase','final');
 const evidence=api.unmanifestedDraftClosureEvidence(f.root,'r');for(const p of [f.entry.owner_current_source.path,f.entry.owner_current_review.path,f.rootReview.delegated_review.path,f.rootReview.current_provenance.path])assert.ok(evidence[p]);
 f.put('research/r-step3-closure.json',{version:3,run:'r',status:'closed',basis:'dependency-ordered-step3a'});f.put('items/lem-helper.md',f.source+'Later legitimate owner repair.');assert.deepEqual(api.unmanifestedDraftClosureEvidence(f.root,'r'),evidence);f.put('items/lem-helper.md',f.source);rmSync(join(f.root,'research/r-step3-closure.json'));
 d.historical_delta_unknown=false;save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
 }finally{f.close();}});

for(const field of ['consumer_id','observed_source','observed_sha256'])test(`nullable carrier rejects missing explicit ${field}`,()=>{const f=ownerCurrentFixture();try{const n=f.normalized();assert.equal(n[field],null);delete n[field];assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',n),new RegExp(`changed routed ${field}`));}finally{f.close();}});
for(const field of ['owner_context_consumer_id','owner_current_context_basis'])test(`exact71 carrier rejects invented null optional ${field}`,()=>{const f=fixture();try{const n=f.normalized();assert.equal(Object.hasOwn(n,field),false);n[field]=null;assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',n),new RegExp(`changed routed ${field}`));}finally{f.close();}});

function multipleConsumersFixture(){
 const f=fixture(),consumer2=f.consumer.replaceAll('thm-consumer','thm-consumer-two');f.put('items/thm-consumer-two.md',consumer2);f.put('research/r-capture/consumer-two.md',consumer2);
 const manifest=[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:['lem-helper']},{id:'thm-consumer-two',deps:['lem-helper']}]}];f.put('research/r-batch-1.pages.json',manifest);f.put('research/r-capture/manifest.json',manifest);f.entry.consumer_manifest=f.link('research/r-capture/manifest.json');
 const finding2={...f.finding,consumer_id:'thm-consumer-two'},report={batch:'1',findings:[f.finding,finding2],coverage_note:'Actual reader independently checks the same direct helper at two assigned consumer uses.'};f.put('research/r-reader-findings-1.json',report);f.put('research/r-capture/findings.json',report);f.entry.findings=f.link('research/r-capture/findings.json');
 const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.tail=JSON.stringify(report);f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);
 const second={...f.entry,index:2,consumer_id:'thm-consumer-two',finding_sha256:hash(finding2),consumer_source:f.link('research/r-capture/consumer-two.md')};
 const saveMultiple=()=>f.put('research/r-step3-owner-unmanifested-draft-context.json',{version:1,run:'r',policy:api.UNMANIFESTED_POLICY,authorized_by:'owner',authorization:'Root authorizes separate read-only routing for each genuine assigned direct consumer observation.',contexts:[f.entry,second]});saveMultiple();
 const rows=()=>[f.normalized(),api.bindUnmanifestedDraftContext(f.root,'r','1',{...finding2,obligation:'reader:1:2'})];
 return {...f,second,rows,saveMultiple};
}
test('multiple actual assigned consumers retain distinct reader anchors without inventing flag attribution',()=>{const f=multipleConsumersFixture();try{const rows=f.rows();const scope={version:2,run:'r',batch:'1',manifest_post:['thm-consumer','thm-consumer-two'],refuter_scope:['thm-consumer','thm-consumer-two'],reader_findings:rows};const contexts=api.unmanifestedRefuterContexts(f.root,'r','1',scope);assert.equal(contexts.get('lem-helper').ambiguous,true);assert.equal(contexts.get('lem-helper').contexts.length,2);assert.notEqual(rows[0].owner_unmanifested_draft_context.entry_sha256,rows[1].owner_unmanifested_draft_context.entry_sha256);for(const r of rows)assert.ok(api.unmanifestedDraftCarrier(f.root,'r','1',r).item_sha256);}finally{f.close();}});
test('native two-consumer lifecycle: no extra read and unflagged extra read pass, ambiguous flag rejects',()=>{const f=multipleConsumersFixture();try{
 for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(f.root,p)),{recursive:true});copyFileSync(join(code,p),join(f.root,p));}copyFileSync(join(code,'tools/step3-owner-unmanifested-draft-context.mjs'),join(f.root,'tools/step3-owner-unmanifested-draft-context.mjs'));
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});const ok=(...a)=>{const r=run(...a);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer, thm-consumer-two]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer','thm-consumer-two'],contracts:{'thm-consumer':{},'thm-consumer-two':{}}});ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));assert.equal(scope.reader_findings.length,2);assert.ok(!scope.refuter_scope.includes('lem-helper'));
 const prompt='research/r-dispatch/refuter-refute-1.attempt-1.prompt.md';f.put(prompt,'Actual independent refuter assignment.');
 const nativePaths=['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'];
 const setNative=report=>{f.put('research/r-refute-1.json',report);const result={attempt:1,run:'r',role:'refuter',label:'refute-1',covers:['1'],ok:true,exit_code:0,process_exit_code:0,timed_out:false,ended_at:'2020-01-03T00:00:00Z',prompt:join(f.root,prompt),tail:JSON.stringify(report),terminal_summary:{task_completed:true,task_aborted:false}};for(const p of nativePaths)f.put(p,result);};
 const noExtra={batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Actual independent native refuter reads only required coverage, without a supplier extra read.'};setNative(noExtra);ok('collect','--batch','1');ok('check','--batch','1','--phase','split');
 const extra={...noExtra,opened:[...scope.refuter_scope,'lem-helper'],coverage_note:'Actual native refuter additionally reads shared direct supplier context and reports no supplier flag.'};setNative(extra);const rawReport=readFileSync(join(f.root,'research/r-refute-1.json'));ok('collect','--batch','1');ok('check','--batch','1','--phase','split');const collected=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));assert.equal(collected.reader_findings.length,2);assert.deepEqual(collected.refuter_context_opened,['lem-helper']);assert.equal(collected.refuter_findings.length,0);assert.deepEqual(readFileSync(join(f.root,'research/r-refute-1.json')),rawReport);
 const ambiguous={...extra,flagged:[{id:'lem-helper',location:'Statement',defect:'ill-formed',evidence:'A consumer-free refuter flag cannot select one of two genuine registered consumer anchors.',severity:'fatal'}]};setNative(ambiguous);const rejected=run('collect','--batch','1');assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/ambiguous registered consumer context for refuter flag/);
 // Restore the genuine positive fixture input, not a real native report: all files are disposable.
 setNative(extra);ok('collect','--batch','1');
 const decisions=scope.reader_findings.map((r,i)=>({obligation:r.obligation,id:r.id,consumer_id:r.consumer_id,route:'reader',verdict:'false_positive',defect_ids:[`consumer-context-${i+1}`],evidence:'Independent fixture Alpha reads this exact current helper and this separate assigned consumer use, rejects the reported formatting defect and claims no source edit.'}));
 f.put('research/defect-ledger.jsonl',decisions.map(d=>JSON.stringify({run:'r',defect_id:d.defect_ids[0],subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'false-positive'})).join('\n')+'\n');f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions});ok('stamp');ok('check','--batch','1','--phase','adjudicate');ok('check','--batch','1','--phase','final');
 // Still reject unrelated extra context, even when the report is genuine and complete.
 setNative({...extra,opened:[...extra.opened,'lem-unrelated']});assert.notEqual(run('collect','--batch','1').status,0);
 }finally{f.close();}});


test('owner-current allows unrelated owned Statement repair, reseals full consumer, and rejects any reviewed quote change',()=>{const f=ownerCurrentFixture();try{
 const n=f.normalized(),before=api.unmanifestedDraftCarrier(f.root,'r','1',n);
 const archive=readFileSync(join(f.root,f.entry.consumer_source.path));
 f.put('items/thm-consumer.md',f.consumer+'\nUnrelated owned statement ambiguity corrected by its actual Alpha.\n');
 const after=api.unmanifestedDraftCarrier(f.root,'r','1',n);
 assert.notEqual(after.consumer_item_sha256,before.consumer_item_sha256);
 assert.deepEqual(readFileSync(join(f.root,f.entry.consumer_source.path)),archive);
 assert.equal(n.consumer_id,null);assert.equal(n.observed_source,null);assert.equal(n.observed_sha256,null);
 f.put('items/thm-consumer.md',f.consumer.replace(f.delegated.consumer_premise_quotes[0],'Changed relevant premise.'));
 assert.throws(()=>f.normalized(),/current reviewed consumer premise changed/);
}finally{f.close();}});

test('nullable refuter extra flag authenticates unique current context and retains both flags without historical source',()=>{const f=ownerCurrentFixture();try{
 const x=refuterFixture(f),reader=f.normalized();x.scope.reader_findings=[reader];
 f.put('research/r-step3-scope-1.json',x.scope);
 const nativeReport=readFileSync(join(f.root,'research/r-refute-1.json'));
 assert.equal(api.unmanifestedRefuterContexts(f.root,'r','1',x.scope).size,1);
 assert.equal(api.validateUnmanifestedRefuterOpened(f.root,'r','1','lem-helper',x.scope),true);
 const n=api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope);
 assert.equal(n.consumer_id,null);assert.equal(n.observed_source,null);assert.equal(n.observed_sha256,null);
 assert.equal(n.owner_context_consumer_id,'thm-consumer');
 assert.equal(n.owner_unmanifested_refuter_context.source_sha256,undefined);
 assert.equal(n.owner_unmanifested_refuter_context.historical_source_observed,false);
 assert.equal(n.owner_unmanifested_refuter_context.owner_current_source_sha256,f.entry.owner_current_source.sha256);
 assert.ok(api.unmanifestedDraftCarrier(f.root,'r','1',n).consumer_item_sha256);
 assert.equal(x.report.flagged.length,2);assert.equal(x.report.flagged[1].id,'thm-consumer');
 assert.deepEqual(readFileSync(join(f.root,'research/r-refute-1.json')),nativeReport);
 for(const k of ['consumer_id','observed_source','observed_sha256']){const forged={...n,[k]:'invented'};assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',forged));}
 f.put(x.prompt,'Changed authentic prompt');assert.throws(()=>api.unmanifestedDraftCarrier(f.root,'r','1',n));
}finally{f.close();}});

test('nullable refuter context does not infer a routing witness when two reader anchors exist',()=>{const f=ownerCurrentFixture();try{
 const x=refuterFixture(f),doc=JSON.parse(readFileSync(join(f.root,f.entry.findings.path)));doc.findings.push(f.finding);
 f.put(f.entry.findings.path,doc);f.put('research/r-reader-findings-1.json',doc);f.entry.findings=f.link(f.entry.findings.path);
 const native=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));native.tail=JSON.stringify(doc);f.put(f.entry.native_result.path,native);f.entry.native_result=f.link(f.entry.native_result.path);
 const e2={...f.entry,index:2};f.put('research/r-step3-owner-unmanifested-draft-context.json',{version:1,run:'r',policy:api.UNMANIFESTED_POLICY,authorized_by:'owner',authorization:'Root authority for genuine duplicate context-reader observations; no native refuter consumer attribution.',contexts:[f.entry,e2]});
 // The second owner-review anchor cannot be guessed or copied: it has its own
 // required obligation. Reject even before a refuter can choose an anchor.
 assert.throws(()=>api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope));
}finally{f.close();}});


test('current-only refuter lifecycle keeps independent flags, null observation, rows and owned consumer repair',()=>{const f=ownerCurrentFixture();try{
 for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(f.root,p)),{recursive:true});copyFileSync(join(code,p),join(f.root,p));}copyFileSync(join(code,'tools/step3-owner-unmanifested-draft-context.mjs'),join(f.root,'tools/step3-owner-unmanifested-draft-context.mjs'));
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});const ok=(...a)=>{const r=run(...a);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json'))),x=refuterFixture(f);f.put('research/r-step3-scope-1.json',scope);
 x.report.flagged[0].severity='nonfatal';x.report.opened=[...scope.refuter_scope,'lem-helper'];x.result.tail=JSON.stringify(x.report);f.put('research/r-refute-1.json',x.report);for(const p of ['research/r-dispatch/refuter-refute-1.result.json','research/r-dispatch/refuter-refute-1.attempt-1.result.json'])f.put(p,x.result);
 const nativeBytes=readFileSync(join(f.root,'research/r-refute-1.json'));
 ok('collect','--batch','1');ok('check','--batch','1','--phase','split');
 const collected=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));
 assert.equal(collected.refuter_findings.length,2);const n=collected.refuter_findings[0];
 for(const k of ['consumer_id','observed_source','observed_sha256'])assert.equal(n[k],null);
 assert.ok(!collected.refuter_scope.includes('lem-helper'));assert.deepEqual(collected.refuter_context_opened,['lem-helper']);
 const currentHistory={consumer_id:null,owner_context_consumer_id:'thm-consumer',historical_delta_unknown:true,owner_resolution:'Independent Alpha adjudicates current helper and exact reviewed premises only; native observations and consumer attribution remain absent.'};
 const decisions=[{...currentHistory,obligation:'reader:1:1',id:'lem-helper',route:'reader',verdict:'confirmed_nonfatal',defect_ids:['helper-reader-gap'],evidence:'Independent reader obligation preserves the separate unresolved criterion gap without inventing historical bytes.'},
 {...currentHistory,obligation:'refuter:1:1',id:'lem-helper',route:'flagged',verdict:'confirmed_nonfatal',defect_ids:['helper-refuter-gap'],evidence:'Independent actual refuter flag is separately adjudicated as current nonfatal criterion maintenance with no borrowed observation.'},
 {obligation:'refuter:1:2',id:'thm-consumer',route:'flagged',verdict:'false_positive',defect_ids:['owned-title'],evidence:'Independent Alpha inspects the actual owned title and rejects this synthetic fixture counterexample.'}];
 f.put('research/defect-ledger.jsonl',[{run:'r',defect_id:'helper-reader-gap',subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'},
 {run:'r',defect_id:'helper-refuter-gap',subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'},
 {run:'r',defect_id:'owned-title',subject:'thm-consumer',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'false-positive'}].map(x=>JSON.stringify(x)).join('\n')+'\n');
 const save=()=>f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions});save();ok('stamp');ok('check','--batch','1','--phase','adjudicate');
 // The current-only authority must not prevent an ordinary owned repair away
 // from its exact reviewed use; all full carrier hashes must become fresh.
 f.put('items/thm-consumer.md',f.consumer+'\nUnrelated owned Statement ambiguity correction.\n');
 assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0,'old full consumer decision seal becomes stale');
 ok('stamp');ok('check','--batch','1','--phase','adjudicate');
 const evidence=api.unmanifestedDraftClosureEvidence(f.root,'r');assert.ok(evidence['research/r-dispatch/refuter-refute-1.attempt-1.result.json']);assert.ok(evidence['research/r-refute-1.json']);
 assert.deepEqual(readFileSync(join(f.root,'research/r-refute-1.json')),nativeBytes);
 decisions.splice(1,1);save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0,'reader verdict cannot discharge refuter obligation');
}finally{f.close();}});

function repairedFixture(){
 const f=fixture();
 f.source='---\nid: lem-helper\nstatus: draft\npipeline_run: r\ndeps: []\n---\n\n## Statement\nFor the supplied regular data, the complete nonlinear gluing conclusion holds.\n\n## Facts & Assumptions\n\n[F1] The exact finite input interfaces remain unchanged.\n\n## Proof\n\n1.1 The normal inverse is asserted without its needed formula. [F1]\n\n2.1 The exhaustion conclusion is asserted without its boundary estimate. [step 1.1] ∎\n';
 f.consumer='---\nid: thm-consumer\nstatus: draft\npipeline_run: r\ndeps: [lem-helper, thm-published-supplier]\n---\n\n## Statement\nThe primary construction uses the gluing collars only for the supplied regular finite-level trajectories.\n';
 f.manifest=[{id:'owned',category:'test',items:[{id:'thm-consumer',deps:['lem-helper','thm-published-supplier']}]}];
 f.put('items/lem-helper.md',f.source);f.put('research/r-capture/source.md',f.source);
 f.put('items/thm-consumer.md',f.consumer);f.put('research/r-capture/consumer.md',f.consumer);
 f.put('research/r-batch-1.pages.json',f.manifest);f.put('research/r-capture/manifest.json',f.manifest);
 f.put('items/thm-published-supplier.md','---\nid: thm-published-supplier\nstatus: published\ndeps: []\n---\n\n## Statement\nThe quotient norm is complete.\n');
 const published={id:'thm-published-supplier',subject_type:'published-dependency',consumer_id:'thm-consumer',observed_source:null,location:'Statement opening',defect:'ill-formed',evidence:'The published completeness sentence has a recoverable grammatical defect.',severity:'nonfatal'};
 f.finding={...f.finding,observed_source:{snapshot:'current',item_sha256:sha(f.source)},location:'Proof1.1 and2.1',defect:'unlicensed-inference',evidence:'The inverse lacks its formula and the finite-interval boundary estimate is missing.',severity:'fatal'};
 const doc={batch:'1',findings:[published,f.finding],coverage_note:'Two original independent findings, editorial published context and fatal exact helper.'};
 for(const p of ['research/r-reader-findings-1.json','research/r-capture/findings.json'])f.put(p,doc);
 const native=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));native.tail=JSON.stringify(doc);f.put(f.entry.native_result.path,native);
 Object.assign(f.entry,{index:2,finding_sha256:hash(f.finding),findings:f.link('research/r-capture/findings.json'),native_result:f.link(f.entry.native_result.path),observed_source:f.link('research/r-capture/source.md'),consumer_source:f.link('research/r-capture/consumer.md'),consumer_manifest:f.link('research/r-capture/manifest.json'),owner_repair_basis:api.OWNER_REPAIRED_CONTEXT_BASIS,defect_id:'helper-fatal',at:'2020-01-05T00:00:00Z'});
 const edits=[{before:'The normal inverse is asserted without its needed formula.',after:'The normal inverse is obtained from the supplied patched operator and its uniform error estimate.'},{before:'The exhaustion conclusion is asserted without its boundary estimate.',after:'The exhaustion conclusion follows from the established uniform finite-interval boundary estimate.'}];
 f.after=edits.reduce((s,e)=>s.replace(e.before,e.after),f.source);
 f.put('research/r-capture/root-before.md',f.source);f.put('research/r-capture/root-after.md',f.after);f.put('items/lem-helper.md',f.after);
 Object.assign(f.entry,{owner_repair_before:f.link('research/r-capture/root-before.md'),owner_repair_after:f.link('research/r-capture/root-after.md')});
 f.application={version:1,run:'r',owner_identity:'/root',completed:true,source_repaired:true,mathematical_acceptance:false,native_coverage_adopted:false,original_obligation:'reader:1:2',supplier_id:'lem-helper',recorded_at:'2020-01-02T00:00:00Z',before:f.entry.owner_repair_before,after:f.entry.owner_repair_after,edits};
 f.put('research/r-capture/application.json',f.application);f.entry.owner_repair_record=f.link('research/r-capture/application.json');
 const used='The normal inverse is obtained from the supplied patched operator and its uniform error estimate.';
 const premise='The primary construction uses the gluing collars only for the supplied regular finite-level trajectories.';
 f.delegated={run:'r',reviewer:'/root/primary',completed:true,full_current_proof_read:true,affected_consumer_use_reviewed:true,mathematical_acceptance:false,native_coverage_adopted:false,original_obligation:'reader:1:2',supplier_id:'lem-helper',routing_consumer_witness:'thm-consumer',current_source:f.entry.owner_repair_after,current_consumer:f.entry.consumer_source,used_clause:used,consumer_premise_quotes:[premise]};
 f.put('research/r-capture/primary.json',f.delegated);
 const explanation='Actual fixture owner read the entire corrected helper and the primary use independently, preserving the original fatal evidence and all remaining boundaries.';
 f.review={version:1,run:'r',owner_identity:'/root',completed:true,full_current_proof_read:true,affected_consumer_use_reviewed:true,source_repaired:true,mathematical_acceptance:false,native_coverage_adopted:false,original_obligation:'reader:1:2',supplier_id:'lem-helper',routing_consumer_witness:'thm-consumer',recorded_at:'2020-01-03T00:00:00Z',current_source:f.entry.owner_repair_after,current_consumer:f.entry.consumer_source,application:f.entry.owner_repair_record,delegated_review:f.link('research/r-capture/primary.json'),root_actual_reading:explanation,repair_result:explanation,history:explanation,limits:explanation};
 f.put('research/r-capture/root-review.json',f.review);f.entry.owner_repair_review=f.link('research/r-capture/root-review.json');
 f.normalized=()=>api.bindUnmanifestedDraftContext(f.root,'r','1',{...f.finding,obligation:'reader:1:2'});
 f.independent={recorded_at:'2020-01-06T00:00:00Z',independent:true,full_current_proof_read:true,affected_consumer_use_reviewed:true,original_obligation:'reader:1:2',supplier_id:'lem-helper',consumer_id:'thm-consumer',current_source:f.entry.owner_repair_after,current_consumer:f.entry.consumer_source,application:f.entry.owner_repair_record,used_clause:used,consumer_premise_quotes:[premise],original_gap_resolutions:[explanation+' Inverse formula and normal-complement estimate were independently checked.',explanation+' Finite-interval boundary estimate and exhaustion were independently checked.']};
 f.save();return f;
}
test('repaired exact mode preserves native before and seals current after without ownership fiction',()=>{const f=repairedFixture();try{
 const original=readFileSync(join(f.root,'research/r-reader-findings-1.json'));const n=f.normalized();const c=api.unmanifestedDraftCarrier(f.root,'r','1',n);
 assert.equal(n.obligation,'reader:1:2');assert.equal(n.observed_source.item_sha256,sha(f.source));assert.equal(n.severity,'fatal');assert.equal(n.producer_batch,undefined);
 assert.equal(c.item_sha256,sha(f.after));assert.equal(c.observed_before_sha256,sha(f.source));assert.equal(c.owner_repaired_context,true);assert.equal(c.unchanged_context,undefined);
 assert.deepEqual(original,readFileSync(join(f.root,'research/r-reader-findings-1.json')));
 for(const v of ['confirmed_fatal','escalated'])assert.equal(api.unmanifestedDraftVerdictAllowed(v,c),true);
 for(const v of ['false_positive','confirmed_nonfatal','accepted','repaired','accepted_repair','context_accepted'])assert.equal(api.unmanifestedDraftVerdictAllowed(v,c),false);
 const scope={version:2,run:'r',batch:'1',manifest_post:['thm-consumer'],reader_findings:[n],refuter_scope:['thm-consumer']};assert.equal(api.unmanifestedRefuterContexts(f.root,'r','1',scope).size,1);
 const d={id:'lem-helper',obligation:'reader:1:2',consumer_id:'thm-consumer',verdict:'confirmed_fatal',repair_confidence:1,defect_ids:['helper-fatal'],independent_repair_review:f.independent};
 api.validateUnmanifestedRepairDecision(f.root,'r',c,d);
 const closure=api.unmanifestedDraftClosureEvidence(f.root,'r');for(const k of ['owner_repair_before','owner_repair_after','owner_repair_record','owner_repair_review'])assert.equal(closure[f.entry[k].path],f.entry[k].sha256);
 }finally{f.close();}});
for(const[name,change]of[
 ['unknown basis',f=>f.entry.owner_repair_basis='permissive'],
 ['mixed nullable basis',f=>f.entry.native_finding_basis=api.OWNER_CURRENT_CONTEXT_BASIS],
 ['before not native bytes',f=>{f.put(f.entry.owner_repair_before.path,'forged');f.entry.owner_repair_before=f.link(f.entry.owner_repair_before.path);}],
 ['after Statement changed',f=>{f.put(f.entry.owner_repair_after.path,f.after.replace('complete nonlinear gluing conclusion','narrow nonlinear gluing conclusion'));f.entry.owner_repair_after=f.link(f.entry.owner_repair_after.path);}],
 ['after Facts changed',f=>{f.put(f.entry.owner_repair_after.path,f.after.replace('finite input interfaces','new input interfaces'));f.entry.owner_repair_after=f.link(f.entry.owner_repair_after.path);}],
 ['after deps changed',f=>{f.put(f.entry.owner_repair_after.path,f.after.replace('deps: []','deps: [lem-new]'));f.entry.owner_repair_after=f.link(f.entry.owner_repair_after.path);}],
 ['application absent',f=>delete f.entry.owner_repair_record],
 ['application not actual completed',f=>{f.application.completed=false;f.put(f.entry.owner_repair_record.path,f.application);f.entry.owner_repair_record=f.link(f.entry.owner_repair_record.path);}],
 ['review not whole helper',f=>{f.review.full_current_proof_read=false;f.put(f.entry.owner_repair_review.path,f.review);f.entry.owner_repair_review=f.link(f.entry.owner_repair_review.path);}],
 ['review omits primary use',f=>{f.review.affected_consumer_use_reviewed=false;f.put(f.entry.owner_repair_review.path,f.review);f.entry.owner_repair_review=f.link(f.entry.owner_repair_review.path);}],
 ['root review adopted as mathematics',f=>{f.review.mathematical_acceptance=true;f.put(f.entry.owner_repair_review.path,f.review);f.entry.owner_repair_review=f.link(f.entry.owner_repair_review.path);}],
 ['current helper drift',f=>f.put('items/lem-helper.md',f.after+'drift')],
 ['reviewed consumer drift',f=>f.put('items/thm-consumer.md',f.consumer+'drift')],
 ['invented helper home',f=>f.put('research/r-batch-2.pages.json',[{id:'new',items:[{id:'lem-helper'}]}])],
 ['current consumer direct edge removed',f=>f.put('items/thm-consumer.md',f.consumer.replace('lem-helper, ',''))],
 ['premature root review',f=>{f.review.recorded_at='2019-01-01T00:00:00Z';f.put(f.entry.owner_repair_review.path,f.review);f.entry.owner_repair_review=f.link(f.entry.owner_repair_review.path);}],
])test('repaired mode rejects '+name,()=>{const f=repairedFixture();try{change(f);f.save();assert.throws(()=>f.normalized());}finally{f.close();}});
test('repaired decision cannot inherit owner review or omit full independent gap review',()=>{const f=repairedFixture();try{const c=api.unmanifestedDraftCarrier(f.root,'r','1',f.normalized());const d={id:'lem-helper',obligation:'reader:1:2',consumer_id:'thm-consumer',verdict:'confirmed_fatal',repair_confidence:1,defect_ids:['helper-fatal'],independent_repair_review:f.independent};for(const edit of [x=>delete x.independent_repair_review,x=>x.repair_confidence=0.99,x=>x.defect_ids=['other'],x=>x.independent_repair_review.full_current_proof_read=false,x=>x.independent_repair_review.original_gap_resolutions=[]]){const bad=structuredClone(d);edit(bad);assert.throws(()=>api.validateUnmanifestedRepairDecision(f.root,'r',c,bad));}}finally{f.close();}});
test('repaired source requires the explicit mode; legacy byte equality is unchanged',()=>{const f=repairedFixture();try{delete f.entry.owner_repair_basis;f.save();assert.throws(()=>f.normalized(),/context source edited/);}finally{f.close();}});
test('two original findings survive ordinary repaired-context split collect order and fatal-fixed final',()=>{const f=repairedFixture();try{
 for(const p of tracked.stdout.split('\0').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(join(f.root,p)),{recursive:true});copyFileSync(join(code,p),join(f.root,p));}
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});
 const ok=(...a)=>{const r=run(...a);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});
 ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));assert.equal(scope.reader_findings.length,2);assert.equal(scope.reader_findings[0].id,'thm-published-supplier');assert.equal(scope.reader_findings[1].severity,'fatal');assert.ok(!scope.manifest_post.includes('lem-helper'));assert.ok(!scope.refuter_scope.includes('lem-helper'));
 const order=prepareStep3AdjudicationOrder(f.root,'r',{label:'batch-1',scopeGroup:'g',covers:['1']});assert.match(readFileSync(join(f.root,order),'utf8'),/WHOLE current helper proof/);
 f.put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Actual required scope only; no helper refuter coverage invented.'});ok('collect','--batch','1');ok('check','--batch','1','--phase','split');
 const editorial={obligation:'reader:1:1',id:'thm-published-supplier',consumer_id:'thm-consumer',route:'reader',verdict:'confirmed_nonfatal',defect_ids:['published-editorial'],evidence:'Independent Alpha retains the separate recoverable published completeness wording issue as nonfatal maintenance.'};
 const d={obligation:'reader:1:2',id:'lem-helper',consumer_id:'thm-consumer',route:'reader',verdict:'confirmed_fatal',repair_confidence:1,defect_ids:['helper-fatal'],evidence:'Independent Alpha read the whole current helper, root repair evidence and primary consumer use, and independently checked both original fatal analytic gaps.',independent_repair_review:f.independent};
 const save=()=>f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions:[editorial,d]});
 const row={run:'r',defect_id:'helper-fatal',subject:'lem-helper',caught_at_stage:'3a-adjudicate',severity:'fatal',disposition:'fixed',adjudication_ref:[{path:'research/r-alpha-batch-1-3a-decisions.json',obligation:'reader:1:2'}]};
 const ledger=()=>f.put('research/defect-ledger.jsonl',[{run:'r',defect_id:'published-editorial',subject:'thm-published-supplier',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'},row].map(x=>JSON.stringify(x)).join('\n')+'\n');
 save();ledger();ok('stamp');ok('check','--batch','1','--phase','adjudicate');ok('check','--batch','1','--phase','final');
 for(const v of ['confirmed_nonfatal','false_positive','accepted_repair','context_accepted']){d.verdict=v;save();const stamped=run('stamp');if(stamped.status===0)assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);else assert.notEqual(stamped.status,0);}d.verdict='confirmed_fatal';
 for(const disposition of ['open','narrowed','dropped','nonfatal-recorded']){row.disposition=disposition;ledger();save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);}row.disposition='fixed';ledger();
 delete d.independent_repair_review;save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);d.independent_repair_review=f.independent;
 d.repair_confidence=0.99;save();ok('stamp');assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);d.repair_confidence=1;save();ok('stamp');ok('check','--batch','1','--phase','final');
 const path='research/r-alpha-batch-1-3a-decisions.json',sealed=JSON.parse(readFileSync(join(f.root,path)));sealed.decisions[1].subject_sha256='0'.repeat(64);f.put(path,sealed);assert.notEqual(run('check','--batch','1','--phase','final').status,0);
 const evidence=api.unmanifestedDraftClosureEvidence(f.root,'r');f.put('research/r-step3-closure.json',{version:3,run:'r',status:'closed',basis:'dependency-ordered-step3a'});f.put('items/lem-helper.md',f.after+'Later authorized change.');assert.deepEqual(api.unmanifestedDraftClosureEvidence(f.root,'r'),evidence);f.put(f.entry.owner_repair_after.path,'tampered archive');assert.throws(()=>api.unmanifestedDraftClosureEvidence(f.root,'r'));
 }finally{f.close();}});

test('repaired context allows genuine extra read only, never an inherited refuter flag',()=>{const f=repairedFixture();try{const x=refuterFixture(f);assert.equal(api.validateUnmanifestedRefuterOpened(f.root,'r','1','lem-helper',x.scope),true);assert.throws(()=>api.bindUnmanifestedRefuterContext(f.root,'r','1',x.raw(),x.scope),/cannot inherit an extra refuter flag/);}finally{f.close();}});
