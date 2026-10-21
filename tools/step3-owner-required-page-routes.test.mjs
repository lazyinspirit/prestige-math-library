import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, copyFileSync, symlinkSync, readdirSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
const repo=resolve(process.env.HH_PROPOSAL_REPO ?? process.cwd());
const proposal=resolve(process.env.HH_PROPOSAL_DIR ?? fileURLToPath(new URL('..', import.meta.url)));
const toolRoot=mkdtempSync(join(tmpdir(),'required-page-code-'));
// Keep the tracked dependency graph in its production hierarchy. A flat
// three-helper clone omits step3-manifest-history and its workflow imports.
const trackedTools=spawnSync('git',['ls-files','-z','tools'],{cwd:repo,encoding:'utf8'});assert.equal(trackedTools.status,0);
for(const path of trackedTools.stdout.split('\0').filter(p=>/\.(?:mjs|mts|json)$/.test(p))) {
  mkdirSync(join(toolRoot,path,'..'),{recursive:true});copyFileSync(join(repo,path),join(toolRoot,path));
}
const toolSource=name=>existsSync(join(proposal,'tools',name)) ? join(proposal,'tools',name) : join(repo,'tools',name);
copyFileSync(toolSource('step3-owner-required-page-routes.mjs'),join(toolRoot,'tools/step3-owner-required-page-routes.mjs'));
process.env.PRESTIGE_MATH_REPO=repo;
const {loadRequiredPageRoutes,requiredPageCarrier,requiredPageHash,requiredPageClosureEvidence}=await import(pathToFileURL(join(toolRoot,'tools/step3-owner-required-page-routes.mjs')));
const {itemHashGuard}=await import(pathToFileURL(join(toolRoot,'tools/item-hash.mjs')));
const sha=x=>createHash('sha256').update(x).digest('hex');
function fixture() {
 const root=mkdtempSync(join(tmpdir(),'required-page-fixture-'));const put=(p,v)=>{mkdirSync(join(root,p,'..'),{recursive:true});writeFileSync(join(root,p),typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');};
 const link=p=>({path:p,sha256:sha(readFileSync(join(root,p)))});
 const before='---\npage: outside\nstatus: published\nitems: [lem-supplier]\nexamples: []\n---\n\nDraft status claim.\n';const after=before.replace('Draft status claim.','Published status claim.');
 put('library/test/outside.md',after);put('research/before.md',before);put('research/after.md',after);
 const consumer='---\nid: thm-consumer\nstatus: draft\ndeps: [lem-supplier]\n---\n\n## Statement\nConsumer.\n';const supplier='---\nid: lem-supplier\nstatus: published\ndeps: []\n---\n\n## Statement\nSupplier.\n';
 put('items/thm-consumer.md',consumer);put('items/lem-supplier.md',supplier);
 put('research/r-batch-1.pages.json',[{id:'owned',category:'test',requires:['outside'],items:[{id:'thm-consumer'}]}]);
 const finding={id:'outside',subject_type:'published-dependency',consumer_id:'thm-consumer',observed_source:null,location:'Page prose',defect:'false-claim',severity:'fatal',evidence:'The page incorrectly says draft.'};const doc={batch:'1',findings:[finding],coverage_note:'Fixture native reader opened actual assigned files.'};
 put('research/r-reader-findings-1.json',doc);put('research/r-reader-1.md','Fixture reader r outside thm-consumer observes stale page prose.');
 put('research/r-dispatch/reader-reader-1.attempt-1.prompt.md','Fixture reader assignment, outside required by owned page.');
 put('research/r-dispatch/reader-reader-1.attempt-1.result.json',{run:'r',role:'reader',label:'reader-1',covers:['1'],ok:true,exit_code:0,process_exit_code:0,ended_at:'2020-01-01T00:00:00Z',prompt:join(root,'research/r-dispatch/reader-reader-1.attempt-1.prompt.md'),tail:JSON.stringify(doc)});
 for(const label of ['pre','post'])put(`research/r-step3-hash-1-${label}.json`,{version:2,run:'r',batch:'1',label,page_manifest:['owned']});
 put('research/review.md',`Fixture focused owner review r outside thm-consumer ${sha(before)} ${sha(after)}; status-only correction; no mathematics changes; original full-byte observation unknown.`);
 const entry={version:1,policy:'owner-step3-required-published-page-route-v1',run:'r',owner_identity:'/root',mathematical_acceptance:false,historical_page_observation_bound:false,observation_basis:'unbound-native-reader; owner-current-before capture only',batch:'1',index:1,page:'outside',origin_page:'owned',consumer_id:'thm-consumer',reviewed:true,reason:'Fixture owner checked exact status prose against the actual published page inventory and current direct supplier dependency; no historical reader page bytes exist.',at:'2020-01-02T00:00:00Z',findings:link('research/r-reader-findings-1.json'),report:link('research/r-reader-1.md'),native_result:link('research/r-dispatch/reader-reader-1.attempt-1.result.json'),prompt:link('research/r-dispatch/reader-reader-1.attempt-1.prompt.md'),pre_snapshot:link('research/r-step3-hash-1-pre.json'),post_snapshot:link('research/r-step3-hash-1-post.json'),manifest:link('research/r-batch-1.pages.json'),finding_sha256:requiredPageHash(finding),current_path:'library/test/outside.md',before:link('research/before.md'),after:link('research/after.md'),edits:[{before:'Draft status claim.',after:'Published status claim.'}],dependency_path:[{id:'thm-consumer',guard_sha256:itemHashGuard(consumer)},{id:'lem-supplier',guard_sha256:itemHashGuard(supplier)}],review:link('research/review.md')};
 const save=()=>put('research/r-step3-owner-required-page-routes.json',{version:1,run:'r',policy:entry.policy,routes:[entry]});save();
 const normalized=()=>{const route=loadRequiredPageRoutes(root,'r','1').get('reader:1:1');const {observed_source,...original}=finding;return {...original,obligation:'reader:1:1',owner_required_page_route:route.binding,observed_sha256:null,observation_basis:'unbound'};};
 return {root,put,link,entry,save,finding,normalized,close:()=>rmSync(root,{recursive:true,force:true})};
}
test('genuine foreign page route preserves original finding and has actual page carrier, no item carrier',()=>{const f=fixture();try{const original=readFileSync(join(f.root,'research/r-reader-findings-1.json'));const routes=loadRequiredPageRoutes(f.root,'r','1');assert.equal(routes.size,1);assert.equal(routes.get('reader:1:1').original.subject_type,'published-dependency');const carrier=requiredPageCarrier(f.root,'r','1',f.normalized());assert.ok(carrier.file_sha256);assert.equal(carrier.item_sha256,undefined);assert.deepEqual(readFileSync(join(f.root,'research/r-reader-findings-1.json')),original);assert.deepEqual(loadRequiredPageRoutes(f.root,'r','2'),new Map());}finally{f.close();}});
for(const [name,change] of [
 ['nonowner',f=>f.entry.owner_identity='/root/worker'],['invented review coverage',f=>f.entry.mathematical_acceptance=true],['invented observation',f=>f.entry.historical_page_observation_bound=true],['no review',f=>f.entry.reviewed=false],['wrong page',f=>f.entry.page='other'],['wrong consumer',f=>f.entry.consumer_id='other'],['wrong batch evidence',f=>f.entry.manifest.path='research/r-batch-2.pages.json'],['wrong finding hash',f=>f.entry.finding_sha256='a'.repeat(64)],['unknown original index',f=>f.entry.index=2],['ambiguous edit',f=>f.entry.edits=[{before:'status',after:'condition'}]],['unsupported extra edit',f=>f.entry.edits=[]],['unbound prompt',f=>f.put(f.entry.prompt.path,'changed prompt')],['unbound native report',f=>f.put(f.entry.report.path,'changed report')],['rewritten original finding',f=>f.put(f.entry.findings.path,{batch:'1',findings:[]})],['changed pre snapshot',f=>f.put(f.entry.pre_snapshot.path,{})],['changed actual page',f=>f.put(f.entry.current_path,'Changed current source')],['unpublished page item',f=>f.put('items/lem-supplier.md','---\nid: lem-supplier\nstatus: draft\ndeps: []\n---\n')],['consumer changed',f=>f.put('items/thm-consumer.md','---\nid: thm-consumer\nstatus: draft\ndeps: []\n---\n')],['duplicate physical page',f=>f.put('library/other/outside.md',readFileSync(join(f.root,'library/test/outside.md'),'utf8'))],['misidentified supplier',f=>f.put('items/lem-supplier.md','---\nid: lem-other\nstatus: published\ndeps: []\n---\n')],['wrong dependency path',f=>f.entry.dependency_path.pop()],['page added to run scope',f=>f.put('research/r-batch-2.pages.json',[{id:'outside',items:[]}])],['changed manifest requires',f=>{f.put(f.entry.manifest.path,[{id:'owned',requires:[],items:[{id:'thm-consumer'}]}]);f.entry.manifest=f.link(f.entry.manifest.path);}],['malformed native attempt',f=>{f.put(f.entry.native_result.path,{run:'r',ok:true});f.entry.native_result=f.link(f.entry.native_result.path);}],['forged native completion',f=>{const x=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));x.tail=JSON.stringify({batch:'1',findings:[]});f.put(f.entry.native_result.path,x);f.entry.native_result=f.link(f.entry.native_result.path);}]
])test(`fails closed: ${name}`,()=>{const f=fixture();try{change(f);f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'));}finally{f.close();}});
test('no registry cannot fabricate outside authority',()=>{const f=fixture();try{rmSync(join(f.root,'research/r-step3-owner-required-page-routes.json'));assert.equal(loadRequiredPageRoutes(f.root,'r','1').size,0);assert.throws(()=>requiredPageCarrier(f.root,'r','1',{...f.finding,obligation:'reader:1:1'}));}finally{f.close();}});
test('current route rejects fictitious observation and missing authority annotation',()=>{const f=fixture();try{const n=f.normalized();assert.throws(()=>requiredPageCarrier(f.root,'r','1',{...n,observed_sha256:'a'.repeat(64)}));assert.throws(()=>requiredPageCarrier(f.root,'r','1',{...n,owner_required_page_route:undefined}));assert.throws(()=>requiredPageCarrier(f.root,'r','1',{...n,pre_sha256:'a'.repeat(64)}));}finally{f.close();}});
test('duplicate entries fail closed',()=>{const f=fixture();try{f.put('research/r-step3-owner-required-page-routes.json',{version:1,run:'r',policy:f.entry.policy,routes:[f.entry,f.entry]});assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'),/duplicate/);}finally{f.close();}});
test.after(()=>rmSync(toolRoot,{recursive:true,force:true}));

test('native scope lifecycle retains exact foreign-page reader obligation, independently adjudicates ledger, and seals real page',async()=>{
 const {spawnSync}=await import('node:child_process');const f=fixture();
 try {
  // Copy only Git-tracked tool source, never private state, environment files or logs.
  const tracked=spawnSync('git',['ls-files','-z','tools'],{cwd:repo,encoding:'utf8'});assert.equal(tracked.status,0);
  for(const path of tracked.stdout.split('\0').filter(p=>/\.(?:mjs|mts|json)$/.test(p))) {
    mkdirSync(join(f.root,path,'..'),{recursive:true});copyFileSync(join(repo,path),join(f.root,path));
  }
  for(const name of ['step3-owner-required-page-routes.mjs','step3-scope.mjs','step3-close.mjs'])copyFileSync(toolSource(name),join(f.root,'tools',name));
  const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});
  const ok=(...args)=>{const r=run(...args);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
  f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nitems: [thm-consumer]\nexamples: []\n---\n\nAssigned page.\n');
  f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);
  f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});
  ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');
  f.entry.pre_snapshot=f.link(f.entry.pre_snapshot.path);f.entry.post_snapshot=f.link(f.entry.post_snapshot.path);f.save();
  // A missing authority still produces the original out-of-scope diagnostic.
  const authority=readFileSync(join(f.root,'research/r-step3-owner-required-page-routes.json'));
  rmSync(join(f.root,'research/r-step3-owner-required-page-routes.json'));
  const rejected=run('split','--batch','1');assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/unopened or out-of-scope item outside/);
  writeFileSync(join(f.root,'research/r-step3-owner-required-page-routes.json'),authority);
  const original=readFileSync(join(f.root,'research/r-reader-findings-1.json'));
  ok('post-reader','--batch','1');
  const frozenPost=readFileSync(join(f.root,'research/r-step3-hash-1-post.json'));
  ok('post-reader','--batch','1');
  assert.deepEqual(readFileSync(join(f.root,'research/r-step3-hash-1-post.json')),frozenPost);
  const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));
  assert.equal(scope.reader_findings.length,1);assert.equal(scope.reader_findings[0].obligation,'reader:1:1');assert.equal(scope.reader_findings[0].subject_type,'published-dependency');assert.equal(scope.reader_findings[0].observed_sha256,null);
  assert.ok(!scope.refuter_scope.includes('outside'));assert.ok(!scope.page_manifest_post.includes('outside'));assert.deepEqual(scope.manifest_post,['thm-consumer']);
  f.put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Fixture independent refuter opens exactly the assigned scope.'});
  ok('collect','--batch','1');ok('check','--batch','1','--phase','split');
  f.put('research/defect-ledger.jsonl',JSON.stringify({run:'r',defect_id:'fixture-page-status',subject:'outside',caught_at_stage:'3a-adjudicate',severity:'fatal',disposition:'fixed'})+'\n');
  const decision={obligation:'reader:1:1',id:'outside',route:'reader',verdict:'confirmed_fatal',defect_ids:['fixture-page-status'],evidence:'Fixture independent Alpha confirms original stale page status and verifies exact owner correction against actual published inventory.',historical_delta_unknown:true,owner_resolution:'Exact current before/after archive binds owner repair; original full-byte native observation remains unknown.'};
  f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions:[decision]});
  ok('stamp');ok('check','--batch','1','--phase','adjudicate');
  const stamped=JSON.parse(readFileSync(join(f.root,'research/r-alpha-batch-1-3a-decisions.json')));assert.equal(stamped.decisions[0].subject_sha256,requiredPageHash(requiredPageCarrier(f.root,'r','1',scope.reader_findings[0])));
  // Routing grants neither ledger closure nor a fabricated independent decision.
  const ledger=readFileSync(join(f.root,'research/defect-ledger.jsonl'));
  rmSync(join(f.root,'research/defect-ledger.jsonl'));
  assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
  writeFileSync(join(f.root,'research/defect-ledger.jsonl'),ledger);
  const open=JSON.parse(ledger);open.disposition='open';f.put('research/defect-ledger.jsonl',JSON.stringify(open)+'\n');
  assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
  writeFileSync(join(f.root,'research/defect-ledger.jsonl'),ledger);
  const withoutResolution=JSON.parse(JSON.stringify(stamped));delete withoutResolution.decisions[0].owner_resolution;
  f.put('research/r-alpha-batch-1-3a-decisions.json',withoutResolution);
  assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
  const withoutSeal=JSON.parse(JSON.stringify(stamped));delete withoutSeal.decisions[0].subject_sha256;
  f.put('research/r-alpha-batch-1-3a-decisions.json',withoutSeal);
  assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
  // A fabricated null item carrier cannot pass, even at final closure.
  stamped.decisions[0].subject_sha256=requiredPageHash({item_sha256:null});f.put('research/r-alpha-batch-1-3a-decisions.json',stamped);
  assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
  assert.notEqual(run('check','--batch','1','--phase','final').status,0);
  ok('stamp');ok('check','--batch','1','--phase','final');
  ok('hash','--batch','1','--label','post-3a');ok('verify-post-3a');
  // Construct a fixture closure from the authentic artifact projection without
  // running unrelated plan gates. Native verify must protect route history.
  const frozen={};for(const n of readdirSync(join(f.root,'research'))) {
    if(n.startsWith('r-step3-hash-') || n.startsWith('r-step3-scope-') || n.startsWith('r-reader-findings-')
      || /^r-reader-\d+\.md$/.test(n) || n.startsWith('r-refute-') || n.endsWith('-3a-decisions.json'))
      frozen['research/'+n]=sha(readFileSync(join(f.root,'research',n)));
  }
  Object.assign(frozen,requiredPageClosureEvidence(f.root,'r'));
  f.put('research/r-step3-closure.json',{version:3,basis:'dependency-ordered-step3a',run:'r',status:'closed',artifacts:Object.fromEntries(Object.entries(frozen).sort(([a],[b])=>a.localeCompare(b))),step3_ledger_rows_count:1,step3_ledger_rows_sha256:sha(JSON.stringify([JSON.parse(ledger)]))});
  const closeVerify=()=>spawnSync(process.execPath,[join(f.root,'tools/step3-close.mjs'),'verify','--run','r','--root',f.root],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});
  assert.equal(closeVerify().status,0);
  const registryPath='research/r-step3-owner-required-page-routes.json';const registry=readFileSync(join(f.root,registryPath));
  writeFileSync(join(f.root,registryPath),Buffer.concat([registry,Buffer.from(' ')]));assert.notEqual(closeVerify().status,0);
  writeFileSync(join(f.root,registryPath),registry);assert.equal(closeVerify().status,0);
  f.put('research/review.md','Changed historical review');assert.notEqual(closeVerify().status,0);
  f.put('library/test/outside.md','Changed foreign source after approval');assert.notEqual(run('verify-post-3a').status,0);
  assert.deepEqual(readFileSync(join(f.root,'research/r-reader-findings-1.json')),original);
 }finally{f.close();}
});

test('without the new registry closure artifact mapping preserves historical insertion order for versions 2 and 3',()=>{
 // Pin the historical expression so this remains a regression after the
 // proposed implementation becomes the live tools file.
 const original='const artifactHashes = (version = 3) => Object.fromEntries(artifactNames(version).map((name) => [\n  `research/${name}`, sha256(readFileSync(R(\'research\', name))),\n]));\nconst jsonl =';
 const proposed=readFileSync(toolSource('step3-close.mjs'),'utf8');
 const extract=source=>source.slice(source.indexOf('const artifactHashes ='),source.indexOf('const jsonl ='));
 // The real native artifact projection is evaluated with deterministic read
 // inputs. Include punctuation/case keys whose locale ordering differs from
 // the historical artifactNames().sort() ordering.
 const names=['r-step3-hash-Z.json','r-step3-hash-a.json','r-step3-hash-_context.json'].sort();
 const evaluate=(source,version)=>{
  let calls=0;
  const fn=Function('artifactNames','sha256','readFileSync','R','requiredPageClosureEvidence','root','run',
   'homeAlphaClosureEvidence','foreignRefuterClosureEvidence','foreignReaderClosureEvidence','downstreamConsumerClosureEvidence','closureEvidence','ownerRepairEvidenceClosure','nativeOriginClosureEvidence',
   'OBSERVATION_EVIDENCE_POLICY','OWNER_REPAIR_EVIDENCE_FREEZE_POLICY','NATIVE_ORIGIN_FREEZE_POLICY','unmanifestedDraftClosureEvidence',
   extract(source)+'\nreturn artifactHashes;')(
   ()=>names,sha,path=>'fixture bytes for '+path,(...parts)=>parts.join('/'),()=>{calls++;return {};},'/fixture','r',
   ()=>({}),()=>({}),()=>({}),()=>({}),()=>({}),()=>({}),()=>({}),'fixture-observation-policy','fixture-repair-policy','fixture-native-policy',()=>({}));
  const value=fn(version);return {value,calls};
 };
 for(const version of [2,3]) {
  const before=evaluate(original,version),after=evaluate(proposed,version);
  assert.deepEqual(after.value,before.value);
  assert.deepEqual(Object.keys(after.value),Object.keys(before.value));
  assert.equal(JSON.stringify(after.value),JSON.stringify(before.value));
  assert.equal(after.calls,version===3?1:0,'version 2 must never consult the new registry');
 }
});
