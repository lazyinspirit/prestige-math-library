import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,copyFileSync} from 'node:fs';
import {tmpdir} from 'node:os';import {join,resolve} from 'node:path';import {createHash} from 'node:crypto';import {pathToFileURL,fileURLToPath} from 'node:url';import {spawnSync} from 'node:child_process';
const repo=process.cwd(),codeDir=fileURLToPath(new URL('.',import.meta.url));
const toolRoot=mkdtempSync(join(tmpdir(),'unchanged-page-code-'));
const tracked=spawnSync('git',['ls-files','-z','tools'],{cwd:repo,encoding:'utf8'});assert.equal(tracked.status,0);
for(const path of tracked.stdout.split('\0').filter(p=>/\.(?:mjs|mts|json)$/.test(p))){mkdirSync(join(toolRoot,path,'..'),{recursive:true});copyFileSync(join(repo,path),join(toolRoot,path));}
for(const name of ['step3-owner-required-page-routes.mjs','step3-scope.mjs'])copyFileSync(join(codeDir,name),join(toolRoot,'tools',name));
process.env.PRESTIGE_MATH_REPO=repo;
const {loadRequiredPageRoutes,requiredPageCarrier,requiredPageHash,requiredPageVerdictAllowed,requiredPageClosureEvidence}=await import(pathToFileURL(join(toolRoot,'tools/step3-owner-required-page-routes.mjs')));
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
function unchanged(){const f=fixture();
 for(const label of ['pre','post']){const ref=f.entry[label+'_snapshot'],s=JSON.parse(readFileSync(join(f.root,ref.path)));s.manifest=['thm-consumer'];f.put(ref.path,s);f.entry[label+'_snapshot']=f.link(ref.path);}
 f.finding.defect='ill-formed';f.finding.evidence='Only unrelated external page formatting retrofit alleged.';
 const doc=JSON.parse(readFileSync(join(f.root,f.entry.findings.path)));doc.findings=[f.finding];f.put(f.entry.findings.path,doc);f.entry.findings=f.link(f.entry.findings.path);f.entry.finding_sha256=requiredPageHash(f.finding);
 const native=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));native.tail=JSON.stringify(doc);f.put(f.entry.native_result.path,native);f.entry.native_result=f.link(f.entry.native_result.path);
 f.entry.routing_basis='owner-unchanged-required-page-context-v1';f.entry.scope_policy='claude9-external-formatting-only-v1';f.entry.edits=[];
 f.put('research/before.md',readFileSync(join(f.root,'research/after.md'),'utf8'));f.entry.before=f.link('research/before.md');
 f.entry.page_item_guards=[{id:'lem-supplier',guard_sha256:itemHashGuard(readFileSync(join(f.root,'items/lem-supplier.md'),'utf8'))}];
 f.put('research/review.md',`Owner review r outside thm-consumer ${f.entry.before.sha256} ${f.entry.after.sha256}; CLAUDE.md#9 formatting scope only, unchanged published page, no mathematical acceptance.`);f.entry.review=f.link('research/review.md');f.save();return f;}
// Opt into native page/null provenance without mutating a real native carrier.
// These fixture documents are synthetic; every native reference is rebound so
// failures below exercise semantic guards rather than stale fixture hashes.
function rebindOriginal(f) {
 const doc=JSON.parse(readFileSync(join(f.root,f.entry.findings.path)));
 doc.findings=[f.finding];f.put(f.entry.findings.path,doc);
 f.entry.findings=f.link(f.entry.findings.path);
 f.entry.finding_sha256=requiredPageHash(f.finding);
 const native=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));
 native.tail=JSON.stringify(doc);f.put(f.entry.native_result.path,native);
 f.entry.native_result=f.link(f.entry.native_result.path);
}
function unchangedNativePage() {
 const f=unchanged();f.finding.subject_type='page';f.finding.consumer_id=null;
 f.entry.original_finding_basis='native-page-null-consumer-owner-bound-consumer-v1';
 rebindOriginal(f);f.save();return f;
}
test('explicit unchanged native page/null route preserves original and all verdict limits',()=>{
 const f=unchangedNativePage();try{
  const findingBytes=readFileSync(join(f.root,f.entry.findings.path));
  const resultBytes=readFileSync(join(f.root,f.entry.native_result.path));
  const route=loadRequiredPageRoutes(f.root,'r','1').get('reader:1:1');
  assert.equal(route.original.subject_type,'page');assert.equal(route.original.consumer_id,null);
  assert.equal(route.entry.consumer_id,'thm-consumer');
  const normalized=f.normalized();assert.equal(normalized.consumer_id,null);assert.equal(normalized.subject_type,'page');
  const c=requiredPageCarrier(f.root,'r','1',normalized);assert.equal(c.unchanged_context,true);
  assert.equal(normalized.observed_sha256,null);assert.equal(normalized.pre_sha256,undefined);
  assert.deepEqual(findingBytes,readFileSync(join(f.root,f.entry.findings.path)));
  assert.deepEqual(resultBytes,readFileSync(join(f.root,f.entry.native_result.path)));
  for(const verdict of ['false_positive','confirmed_nonfatal','escalated'])assert.equal(requiredPageVerdictAllowed(c,verdict),true);
  for(const verdict of ['confirmed_fatal','accepted_repair','context_accepted','accepted','repaired'])assert.equal(requiredPageVerdictAllowed(c,verdict),false);
  const closure=requiredPageClosureEvidence(f.root,'r');
  for(const field of ['findings','report','native_result','prompt','pre_snapshot','post_snapshot','manifest','before','after','review'])
   assert.equal(closure[f.entry[field].path],f.entry[field].sha256);
 }finally{f.close();}
});
for(const[name,change]of[
 ['missing original provenance opt-in',f=>delete f.entry.original_finding_basis],
 ['unknown original provenance opt-in',f=>f.entry.original_finding_basis='any-page'],
 ['null original provenance opt-in',f=>f.entry.original_finding_basis=null],
 ['non-null native consumer even when equal to witness',f=>{f.finding.consumer_id=f.entry.consumer_id;rebindOriginal(f);}],
 ['omitted native consumer',f=>{delete f.finding.consumer_id;rebindOriginal(f);}],
 ['published-dependency disguised as native page',f=>{f.finding.subject_type='published-dependency';f.finding.consumer_id=f.entry.consumer_id;rebindOriginal(f);}],
 ['non-formatting native defect',f=>{f.finding.defect='false-claim';rebindOriginal(f);}],
 ['missing scope policy',f=>delete f.entry.scope_policy],
 ['nonempty edits on native unchanged context',f=>f.entry.edits=[{before:'Published',after:'Changed'}]],
 ['changed current page',f=>f.put(f.entry.current_path,'changed')],
 ['changed item mathematics with refreshed logical-path guard',f=>{const p='items/lem-supplier.md';f.put(p,readFileSync(join(f.root,p),'utf8')+'new mathematics');f.entry.dependency_path[1].guard_sha256=itemHashGuard(readFileSync(join(f.root,p),'utf8'));}],
 ['removed actual dependency edge despite refreshed source guard',f=>{const p='items/thm-consumer.md';f.put(p,'---\nid: thm-consumer\nstatus: draft\ndeps: []\n---\n');f.entry.dependency_path[0].guard_sha256=itemHashGuard(readFileSync(join(f.root,p),'utf8'));}],
 ['failed native completion with refreshed reference',f=>{const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.ok=false;f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);}],
 ['native tail differs despite refreshed reference',f=>{const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.tail='{}';f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);}],
 ['wrong prompt path',f=>f.entry.prompt.path='research/other.prompt.md'],
 ['report omits routing witness',f=>{f.put(f.entry.report.path,'r outside only');f.entry.report=f.link(f.entry.report.path);}],
 ...['pre','post'].flatMap(label=>[
  [label+' page inventory omitted',f=>{const ref=f.entry[label+'_snapshot'],v=JSON.parse(readFileSync(join(f.root,ref.path)));delete v.page_manifest;f.put(ref.path,v);f.entry[label+'_snapshot']=f.link(ref.path);}],
  [label+' item inventory omits witness',f=>{const ref=f.entry[label+'_snapshot'],v=JSON.parse(readFileSync(join(f.root,ref.path)));v.manifest=[];f.put(ref.path,v);f.entry[label+'_snapshot']=f.link(ref.path);}]]),
 ['unrequired foreign page',f=>{f.put(f.entry.manifest.path,[{id:'owned',requires:[],items:[{id:'thm-consumer'}]}]);f.entry.manifest=f.link(f.entry.manifest.path);}],
 ['owner review lacks scope-only declaration',f=>{f.put(f.entry.review.path,`r outside thm-consumer ${f.entry.before.sha256} ${f.entry.after.sha256}`);f.entry.review=f.link(f.entry.review.path);}],
])test('native unchanged rejects '+name,()=>{const f=unchangedNativePage();try{change(f);f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'));}finally{f.close();}});
test('new original-finding opt-in is invalid on existing edited-page routing',()=>{
 const f=fixture();try{f.entry.original_finding_basis='native-page-null-consumer-owner-bound-consumer-v1';f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'),/original finding basis/);}finally{f.close();}
});
function unchangedOriginPage() {
 const f=unchangedNativePage();
 f.entry.routing_basis='owner-unchanged-required-page-origin-context-v1';
 f.entry.consumer_id=null;f.entry.dependency_path=[];f.entry.origin_path='library/test/owned.md';
 const origin='---\npage: owned\nstatus: draft\nrequires: [outside]\nitems: [thm-consumer]\nexamples: []\n---\n';
 f.put(f.entry.origin_path,origin);
 f.put(f.entry.report.path,'Fixture reader r opens owned and outside, recording page-level formatting only.');
 f.entry.report=f.link(f.entry.report.path);
 for(const label of ['pre','post']) {
  const ref=f.entry[label+'_snapshot'],snap=JSON.parse(readFileSync(join(f.root,ref.path)));
  snap.page_hashes={owned:{file_sha256:sha(origin)}};
  f.put(ref.path,snap);f.entry[label+'_snapshot']=f.link(ref.path);
 }
 f.put(f.entry.review.path,`Owner review r owned outside ${f.entry.before.sha256} ${f.entry.after.sha256}; CLAUDE.md#9 formatting context unchanged; no mathematical acceptance; no assigned item consumer.`);
 f.entry.review=f.link(f.entry.review.path);f.save();return f;
}
test('explicit origin-only unchanged context needs no invented consumer or item path',()=>{
 const f=unchangedOriginPage();try {
  // Remove the logical edge, refreshing its ordinary item guard: page-level
  // context is intentionally not claiming this unrelated item is a supplier.
  f.put('items/thm-consumer.md','---\nid: thm-consumer\nstatus: draft\ndeps: []\n---\n');
  const nativeBytes=readFileSync(join(f.root,f.entry.native_result.path));
  const route=loadRequiredPageRoutes(f.root,'r','1').get('reader:1:1');
  assert.equal(route.entry.consumer_id,null);assert.deepEqual(route.entry.dependency_path,[]);
  assert.equal(route.original.consumer_id,null);assert.equal(route.original.subject_type,'page');
  const c=requiredPageCarrier(f.root,'r','1',f.normalized());assert.equal(c.unchanged_context,true);
  assert.deepEqual(nativeBytes,readFileSync(join(f.root,f.entry.native_result.path)));
  for(const v of ['false_positive','confirmed_nonfatal','escalated'])assert.equal(requiredPageVerdictAllowed(c,v),true);
  for(const v of ['accepted','accepted_repair','confirmed_fatal','context_accepted'])assert.equal(requiredPageVerdictAllowed(c,v),false);
 }finally{f.close();}
});
for(const[name,change]of[
 ['invented assigned consumer',f=>f.entry.consumer_id='thm-consumer'],
 ['invented item dependency path',f=>f.entry.dependency_path=[{id:'thm-consumer'},{id:'lem-supplier'}]],
 ['missing explicit original provenance',f=>delete f.entry.original_finding_basis],
 ['non-null original native consumer',f=>{f.finding.consumer_id='thm-consumer';rebindOriginal(f);}],
 ['non-formatting original finding',f=>{f.finding.defect='false-claim';rebindOriginal(f);}],
 ['source origin lacks requires despite manifest edge',f=>f.put(f.entry.origin_path,'---\npage: owned\nrequires: []\n---\n')],
 ['manifest lacks requires despite source edge',f=>{f.put(f.entry.manifest.path,[{id:'owned',requires:[],items:[{id:'thm-consumer'}]}]);f.entry.manifest=f.link(f.entry.manifest.path);}],
 ['report omits origin',f=>{f.put(f.entry.report.path,'r outside only');f.entry.report=f.link(f.entry.report.path);}],
 ['report omits flagged page',f=>{f.put(f.entry.report.path,'r owned only');f.entry.report=f.link(f.entry.report.path);}],
 ...['pre','post'].flatMap(label=>[
  [label+' misses origin page inventory',f=>{const ref=f.entry[label+'_snapshot'],v=JSON.parse(readFileSync(join(f.root,ref.path)));v.page_manifest=[];f.put(ref.path,v);f.entry[label+'_snapshot']=f.link(ref.path);}],
  [label+' misses origin hash',f=>{const ref=f.entry[label+'_snapshot'],v=JSON.parse(readFileSync(join(f.root,ref.path)));delete v.page_hashes;f.put(ref.path,v);f.entry[label+'_snapshot']=f.link(ref.path);}],
  [label+' wrong origin raw hash',f=>{const ref=f.entry[label+'_snapshot'],v=JSON.parse(readFileSync(join(f.root,ref.path)));v.page_hashes.owned.file_sha256='0'.repeat(64);f.put(ref.path,v);f.entry[label+'_snapshot']=f.link(ref.path);}] ]),
 ['current origin changed since native observations',f=>f.put(f.entry.origin_path,readFileSync(join(f.root,f.entry.origin_path),'utf8')+'changed')],
 ['published context item guard missing',f=>f.entry.page_item_guards=[]],
 ['native tail mismatch',f=>{const v=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));v.tail='{}';f.put(f.entry.native_result.path,v);f.entry.native_result=f.link(f.entry.native_result.path);}],
 ['page edit claimed',f=>f.entry.edits=[{before:'Published',after:'Changed'}]],
 ['changed current required page',f=>f.put(f.entry.current_path,'changed')],
])test('origin-only context rejects '+name,()=>{const f=unchangedOriginPage();try{change(f);f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'));}finally{f.close();}});
test('unchanged native context routes exact real page, retains finding and unbound history',()=>{const f=unchanged();try{const original=readFileSync(join(f.root,f.entry.findings.path));const c=requiredPageCarrier(f.root,'r','1',f.normalized());assert.equal(c.unchanged_context,true);assert.equal(c.item_sha256,undefined);assert.deepEqual(original,readFileSync(join(f.root,f.entry.findings.path)));assert.equal(f.normalized().observed_sha256,null);assert.equal(f.normalized().pre_sha256,undefined);for(const verdict of ['false_positive','confirmed_nonfatal','escalated'])assert.equal(requiredPageVerdictAllowed(c,verdict),true);for(const verdict of ['accepted','repaired','accepted_repair','reviewed_no_defect','confirmed_fatal','context_accepted'])assert.equal(requiredPageVerdictAllowed(c,verdict),false);}finally{f.close();}});
for(const[name,change]of[
 ...['pre','post'].map(label=>['missing '+label+' native page inventory',f=>{const ref=f.entry[label+'_snapshot'],s=JSON.parse(readFileSync(join(f.root,ref.path)));delete s.page_manifest;f.put(ref.path,s);f.entry[label+'_snapshot']=f.link(ref.path);}]),
 ...['pre','post'].flatMap(label=>[
  ['missing '+label+' native item inventory',f=>{const ref=f.entry[label+'_snapshot'],s=JSON.parse(readFileSync(join(f.root,ref.path)));delete s.manifest;f.put(ref.path,s);f.entry[label+'_snapshot']=f.link(ref.path);}],
  ['wrong '+label+' native consumer',f=>{const ref=f.entry[label+'_snapshot'],s=JSON.parse(readFileSync(join(f.root,ref.path)));s.manifest=['thm-other'];f.put(ref.path,s);f.entry[label+'_snapshot']=f.link(ref.path);}]]),
 ['changed current page',f=>f.put(f.entry.current_path,'changed')],
 ['changed after archive with valid updated reference',f=>{f.put(f.entry.after.path,readFileSync(join(f.root,f.entry.after.path),'utf8')+'extra prose');f.entry.after=f.link(f.entry.after.path);}],
 ['nonempty edits',f=>f.entry.edits=[{before:'Published',after:'Unchanged'}]],
 ['wrong scope policy',f=>f.entry.scope_policy='unrestricted'],
 ['missing opt in',f=>delete f.entry.routing_basis],
 ['original findings changed',f=>f.put(f.entry.findings.path,{batch:'1',findings:[]})],
 ['original native completion changed',f=>{const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.tail='{}';f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);}],
 ['wrong origin requires',f=>{f.put(f.entry.manifest.path,[{id:'owned',requires:[],items:[{id:'thm-consumer'}]}]);f.entry.manifest=f.link(f.entry.manifest.path);}],
 ['page acquired other run-manifest ownership',f=>f.put('research/r-batch-2.pages.json',[{id:'outside',items:[]}])],
 ['source context changed',f=>f.put('items/lem-supplier.md',readFileSync(join(f.root,'items/lem-supplier.md'),'utf8')+'source change')],
 ['missing context guard',f=>f.entry.page_item_guards=[]],
 ['unbound review scope',f=>{f.put(f.entry.review.path,'r outside thm-consumer '+f.entry.before.sha256);f.entry.review=f.link(f.entry.review.path);}],
 ['wrong actual dependency edge',f=>{f.put('items/thm-consumer.md','---\nid: thm-consumer\nstatus: draft\ndeps: []\n---\n');f.entry.dependency_path[0].guard_sha256=itemHashGuard(readFileSync(join(f.root,'items/thm-consumer.md'),'utf8'));}],
])test('unchanged rejects '+name,()=>{const f=unchanged();try{change(f);f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'));}finally{f.close();}});
test('old edited route retains real prose repair and zero-edit rejection',()=>{const f=fixture();try{assert.equal(loadRequiredPageRoutes(f.root,'r','1').size,1);const c=requiredPageCarrier(f.root,'r','1',f.normalized());assert.equal(c.unchanged_context,undefined);assert.equal(requiredPageVerdictAllowed(c,'confirmed_fatal'),true);f.entry.edits=[];f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'),/exact small prose edits/);}finally{f.close();}});
test('old edited route retains unique body-edit and exact reconstruction guards',()=>{const f=fixture();try{f.entry.edits=[{before:'status',after:'modified'}];f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'),/nonprose|unaccounted/);}finally{f.close();}});
// Exercise actual staged Step3 scope integration on a disposable fixture only.
for(const [shape,make] of [['dependency',unchanged],['native-page-null',unchangedNativePage],['origin-page-only',unchangedOriginPage]])test('scope retains independent verdict and ledger guards for '+shape,()=>{const f=make();try{
 for(const path of tracked.stdout.split('\0').filter(p=>/\.(?:mjs|mts|json)$/.test(p))){mkdirSync(join(f.root,path,'..'),{recursive:true});copyFileSync(join(repo,path),join(f.root,path));}
 for(const name of ['step3-owner-required-page-routes.mjs','step3-scope.mjs'])copyFileSync(join(codeDir,name),join(f.root,'tools',name));
 const run=(...args)=>spawnSync(process.execPath,[join(f.root,'tools/step3-scope.mjs'),...args,'--root',f.root,'--run','r'],{cwd:f.root,encoding:'utf8',env:{...process.env,PRESTIGE_MATH_REPO:repo}});
 const ok=(...args)=>{const r=run(...args);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 f.put('library/test/owned.md','---\npage: owned\nstatus: draft\nrequires: [outside]\nitems: [thm-consumer]\nexamples: []\n---\n');f.put('research/r-alpha-groups.json',[{label:'g',covers:['1']}]);f.put('research/r-batch-1.proof-contracts.json',{version:1,scope:['thm-consumer'],contracts:{'thm-consumer':{}}});
 ok('hash','--batch','1','--label','pre');ok('hash','--batch','1','--label','post');f.entry.pre_snapshot=f.link(f.entry.pre_snapshot.path);f.entry.post_snapshot=f.link(f.entry.post_snapshot.path);f.save();ok('post-reader','--batch','1');
 const scope=JSON.parse(readFileSync(join(f.root,'research/r-step3-scope-1.json')));assert.equal(scope.reader_findings.length,1);assert.ok(!scope.refuter_scope.includes('outside'));f.put('research/r-refute-1.json',{batch:'1',opened:scope.refuter_scope,not_opened:[],flagged:[],coverage_note:'Fixture exact assigned scope'});ok('collect','--batch','1');
 f.put('research/defect-ledger.jsonl',JSON.stringify({run:'r',defect_id:'fixture-format-scope',subject:'outside',caught_at_stage:'3a-adjudicate',severity:'fatal',disposition:'false-positive'})+'\n');
 const decision={obligation:'reader:1:1',id:'outside',route:'reader',verdict:'false_positive',defect_ids:['fixture-format-scope'],evidence:'Independent fixture Alpha determines published required-page formatting is outside selected-frontier repair scope under CLAUDE9.',historical_delta_unknown:true,owner_resolution:'Original observation is unbound; current unchanged published carrier is routed only for scope adjudication.'};const save=()=>f.put('research/r-alpha-batch-1-3a-decisions.json',{version:1,run:'r',group:'batch-1',decisions:[decision]});save();ok('stamp');ok('check','--batch','1','--phase','adjudicate');
 for(const verdict of ['confirmed_fatal','accepted_repair','context_accepted']){decision.verdict=verdict;save();const r=run('check','--batch','1','--phase','adjudicate');assert.notEqual(r.status,0);assert.match(r.stdout+r.stderr,/unchanged-required-page-verdict/);}
 decision.verdict='confirmed_nonfatal';save();f.put('research/defect-ledger.jsonl',JSON.stringify({run:'r',defect_id:'fixture-format-scope',subject:'outside',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition:'nonfatal-recorded'})+'\n');ok('stamp');ok('check','--batch','1','--phase','adjudicate');
 for(const disposition of ['fixed','narrowed','dropped']){f.put('research/defect-ledger.jsonl',JSON.stringify({run:'r',defect_id:'fixture-format-scope',subject:'outside',caught_at_stage:'3a-adjudicate',severity:'nonfatal',disposition})+'\n');const rejected=run('check','--batch','1','--phase','adjudicate');assert.notEqual(rejected.status,0);assert.match(rejected.stdout+rejected.stderr,/unchanged-required-page-ledger/);}
 decision.verdict='escalated';save();const blocked=run('check','--batch','1','--phase','adjudicate');assert.notEqual(blocked.status,0);assert.match(blocked.stdout+blocked.stderr,/owner-escalation/);
 decision.verdict='false_positive';save();ok('stamp');rmSync(join(f.root,'research/defect-ledger.jsonl'));assert.notEqual(run('check','--batch','1','--phase','adjudicate').status,0);
 }finally{f.close();}});

function unchangedNativePage(){const f=unchanged();
 f.finding.subject_type='page';f.finding.consumer_id=null;
 const doc=JSON.parse(readFileSync(join(f.root,f.entry.findings.path)));doc.findings=[f.finding];
 f.put(f.entry.findings.path,doc);f.entry.findings=f.link(f.entry.findings.path);f.entry.finding_sha256=requiredPageHash(f.finding);
 const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.tail=JSON.stringify(doc);f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);
 f.entry.native_finding_basis='native-page-null-consumer-owner-bound-consumer-v1';f.save();return f;
}
test('explicit unchanged page/null opt-in preserves native shape and all verdict limits',()=>{const f=unchangedNativePage();try{
 const old=readFileSync(join(f.root,f.entry.findings.path));const n=f.normalized();const c=requiredPageCarrier(f.root,'r','1',n);
 assert.equal(n.subject_type,'page');assert.equal(n.consumer_id,null);assert.equal(c.unchanged_context,true);assert.equal(c.item_sha256,undefined);
 assert.equal(n.observed_sha256,null);assert.equal(n.pre_sha256,undefined);assert.deepEqual(old,readFileSync(join(f.root,f.entry.findings.path)));
 for(const v of ['false_positive','confirmed_nonfatal','escalated'])assert.equal(requiredPageVerdictAllowed(c,v),true);
 for(const v of ['confirmed_fatal','accepted','accepted_repair','repaired','context_accepted'])assert.equal(requiredPageVerdictAllowed(c,v),false);
}finally{f.close();}});
for(const[name,change]of[
 ['missing separate native basis',f=>delete f.entry.native_finding_basis],
 ['wrong separate native basis',f=>f.entry.native_finding_basis='arbitrary'],
 ['dependency path missing',f=>f.entry.dependency_path=[]],
 ['nonempty edits',f=>f.entry.edits=[{before:'Published',after:'Other'}]],
 ['page item guards missing',f=>f.entry.page_item_guards=[]],
 ['snapshot item inventory missing',f=>{const p=f.entry.pre_snapshot.path;const n=JSON.parse(readFileSync(join(f.root,p)));delete n.manifest;f.put(p,n);f.entry.pre_snapshot=f.link(p);}],
 ['native structured output differs',f=>{const p=f.entry.native_result.path;const n=JSON.parse(readFileSync(join(f.root,p)));n.tail='{}';f.put(p,n);f.entry.native_result=f.link(p);}],
 ['non-null native consumer',f=>{f.finding.consumer_id='thm-consumer';const p=f.entry.findings.path;const d=JSON.parse(readFileSync(join(f.root,p)));d.findings=[f.finding];f.put(p,d);f.entry.findings=f.link(p);f.entry.finding_sha256=requiredPageHash(f.finding);const n=JSON.parse(readFileSync(join(f.root,f.entry.native_result.path)));n.tail=JSON.stringify(d);f.put(f.entry.native_result.path,n);f.entry.native_result=f.link(f.entry.native_result.path);}],
 ['native basis on edited route',f=>{f.entry.routing_basis='native-page-null-consumer-owner-bound-consumer-v1';}],
])test('unchanged page/null rejects '+name,()=>{const f=unchangedNativePage();try{change(f);f.save();assert.throws(()=>loadRequiredPageRoutes(f.root,'r','1'));}finally{f.close();}});

test.after(()=>rmSync(toolRoot,{recursive:true,force:true}));
