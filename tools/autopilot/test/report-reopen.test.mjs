import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, readdirSync, symlinkSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { reverseCommittedPatch } from '../../autopilot-report-reopen.mjs';
import { spawnSync, execFileSync } from 'node:child_process';
const SOURCE = process.env.AUTOPILOT_TEST_REPO || fileURLToPath(new URL('../../..', import.meta.url));
const CANDIDATE = process.env.STEP6_CANDIDATE_TOOLS || join(SOURCE, 'tools');
function fixture(t, configure = () => {}) {
 const root = mkdtempSync(join(tmpdir(), 'report-reopen-cli-')); t.after(() => rmSync(root, { recursive:true, force:true }));
 const put = (path, text) => { mkdirSync(dirname(join(root,path)),{recursive:true}); writeFileSync(join(root,path), typeof text === 'string' ? text : JSON.stringify(text)); };
 for (const dir of ['research','items','library/algebra','tools/autopilot/bin','.autopilot/demo','research/demo-dispatch']) mkdirSync(join(root,dir),{recursive:true});
 for (const p of readdirSync(join(SOURCE,'tools'))) if (!['step6-report.mjs','publication-ready.mjs','autopilot','autopilot-report-reopen.mjs'].includes(p)) symlinkSync(join(SOURCE,'tools',p),join(root,'tools',p));
 for (const p of readdirSync(join(SOURCE,'tools/autopilot'))) if (p !== 'bin') symlinkSync(join(SOURCE,'tools/autopilot',p),join(root,'tools/autopilot',p));
 for (const p of ['step6-report.mjs','publication-ready.mjs']) copyFileSync(join(SOURCE,'tools',p),join(root,'tools',p));
 copyFileSync(join(SOURCE,'tools/autopilot/bin/autopilot.mts'),join(root,'tools/autopilot/bin/autopilot.mts'));
 put('WORKFLOW.md','Original policy\n');
 put('briefs/tasks/frontier-dependency-ledger.md','Original shared dependency-review brief.\n');
 writeFileSync(join(root,'tools/step6-report.mjs'), readFileSync(join(root,'tools/step6-report.mjs'),'utf8') + '\n// Original fixture before bounded core repair.\n');
 put('items/thm-owned.md','---\nid: thm-owned\nkind: theorem\nstatus: draft\ndeps: [def-context]\n---\n## Proof\n\nOwned proof.\n');
 put('items/def-context.md','---\nid: def-context\nkind: definition\nstatus: published\n---\n## Definition\n\nPublished prerequisite context.\n');
 put('library/algebra/owned-page.md','---\npage: owned-page\nstatus: draft\nitems: [thm-owned]\n---\nOwned page.\n');
 put('research/foreign-scope-ledger.json',{run:'foreign',pages:[{id:'foreign-page',kind:'A'}]});
 put('research/foreign-alpha-batch-1-3a.md','Genuine foreign Alpha report.');
 put('research/foreign-dispatch/alpha-3a-batch-1.result.json',{run:'foreign',role:'alpha',label:'3a-batch-1',ok:true});
 put('research/demo-scope-ledger.json',{run:'demo',pages:[{id:'owned-page'}]});
 put('research/demo-batch-1.pages.json',[{id:'owned-page',items:['thm-owned']}]);
 put('research/plan-spec.json',{pages:[{id:'owned-page',items:['thm-owned']}]});
 put('research/defect-ledger.jsonl',''); put('research/published-consumer-supplier-ledger.md','');
 put('research/demo-pathway-closure.json',{run:'demo',briefs:[]}); put('research/demo-judge-closure.json',{run:'demo',closed:true});
 put('research/demo-touches.json',{snapshots:[]});
 // The real readiness --verify --inspect does not call pathway verification;
 // generate its first exact receipt through that diagnostic, then seal it.
 configure(put);
 const call = (tool,args) => spawnSync(process.execPath,[join(root,'tools',tool),...args,'--run','demo','--root',root],{encoding:'utf8'});
 copyFileSync(join(CANDIDATE,'publication-ready.mjs'),join(root,'tools/publication-ready.mjs'));
 let ready = call('publication-ready.mjs',['--verify','--inspect']); assert.equal(ready.status,0,ready.stderr);
 let parsed = JSON.parse(ready.stdout); delete parsed.protected_tree_rows; delete parsed.protected_tree_projection_values; put('research/demo-publication-readiness.json',parsed);
 // Keep this readiness policy unchanged in the repair commit for fixture simplicity.
 put('research/demo-step6-evidence.json',{version:2,run:'demo',input_sha256:{}});
 const git = args => execFileSync('git',args,{cwd:root,stdio:['ignore','pipe','pipe']});
 git(['init','-b','main']); git(['config','user.email','fixture@example.invalid']); git(['config','user.name','Fixture']); git(['add','.']); git(['commit','-m','fixture original']);
 // Snapshot after the original Git baseline; runtime state is excluded.
 assert.equal(call('step6-report.mjs',['snapshot']).status,0);
 for(const p of ['step6-report.mjs','autopilot-report-reopen.mjs']) copyFileSync(join(CANDIDATE,p),join(root,'tools',p));
 copyFileSync(join(CANDIDATE,'autopilot/bin/autopilot.mts'),join(root,'tools/autopilot/bin/autopilot.mts'));
 git(['add','tools']); git(['commit','-m','bounded report integrity repair']);
 const stages = {'5-freeze':{doneAt:'earlier'},'6-readiness-v2':{doneAt:'passed'},'6-evidence-v2':{doneAt:'passed'},'6-report-baseline-v2':{enteredAt:'entered'}};
 const dispatches = {};
 for(const [id,label] of [['6-readiness-v2','readiness-v2'],['6-evidence-v2','step6-evidence-v2'],['6-report-baseline-v2','report-baseline-v2']]) {
  dispatches[`${id}:${label}`]={role:'tool',label,startedAt:'started',endedAt:'ended'};
  put(`research/demo-dispatch/tool-${label}.result.json`,{run:'demo',ok:true,role:'tool',label,covers:['all']});
  put(`research/demo-dispatch/tool-${label}.attempt-1.result.json`,{run:'demo',ok:true,role:'tool',label,covers:['all']});
 }
 put('.autopilot/demo/events.jsonl','');
 put('.autopilot/demo/state.json',{run:'demo',paused:true,stage:'6-report-baseline-v2',stages,dispatches,blockers:[{stage:'6-report-baseline-v2',reason:'race'}]});
 const cli = (...args) => spawnSync(process.execPath,[join(SOURCE,'tools/tsx-run.mjs'),join(root,'tools/autopilot/bin/autopilot.mts'),'reopen-report','--repo',root,'--state-dir',join(root,'.autopilot/demo'),'--run','demo','--authorization','.autopilot/demo/auth.json',...args],{encoding:'utf8',maxBuffer:16*1024*1024});
 const authorize = () => { const inspected=cli('--inspect'); assert.equal(inspected.status,0,inspected.stderr); const guards=JSON.parse(inspected.stdout); put('.autopilot/demo/auth.json',{authorized_by:'owner',authorization:'Owner authorizes exact bounded pre-report integrity repair and fresh native suffix execution.',guards}); return guards; };
 return {root,put,cli,authorize};
}
test('production CLI preserves original bytes and earlier stages, then requires fresh native suffix coverage',t=>{
 const f=fixture(t), guards=f.authorize();
 assert.equal(guards.prerequisite_context.length,1);
 const originals=guards.artifacts.map(row=>[row.path,readFileSync(join(f.root,row.path))]);
 const result=f.cli(); assert.equal(result.status,0,result.stderr);
 const archive=join(f.root,'.autopilot/demo/report-reopen-before');
 for(const [path,bytes] of originals){assert.deepEqual(readFileSync(join(archive,path)),bytes);assert.equal(existsSync(join(f.root,path)),false);}
 const state=JSON.parse(readFileSync(join(f.root,'.autopilot/demo/state.json')));
 assert.equal(state.stages['5-freeze'].doneAt,'earlier'); assert.equal(state.paused,true); assert.equal(state.stage,'6-readiness-v2');
 for(const id of guards.reopen_stages) assert.equal(state.stages[id],undefined);
 assert.deepEqual(state.dispatches,{}); assert.equal(JSON.parse(readFileSync(join(archive,'receipt.json'))).native_coverage_created,false);
 assert.notEqual(f.cli().status,0,'second recovery cannot overwrite the historical archive');
});
for(const [name,mutate] of [
 ['changed published prerequisite context',f=>f.put('items/def-context.md','changed context')],
 ['changed mathematics',f=>f.put('items/thm-owned.md','changed proof')],
 ['unrelated protected source',f=>f.put('tools/unrelated-policy.mjs','changed unrelated policy')],
 ['changed readiness input',f=>f.put('research/demo-judge-closure.json',{run:'demo',closed:false})],
 ['report already started',f=>{const p='.autopilot/demo/state.json';const s=JSON.parse(readFileSync(join(f.root,p)));s.stages['6-owner-report-v2']={enteredAt:'forbidden'};f.put(p,s);}],
 ['stale owner authorization',f=>f.put('research/demo-owner/step6-integrity-lock-escalation/new-note.md','added after owner sealing')],
 ['changed old evidence',f=>f.put('research/demo-step6-evidence.json',{version:2,run:'demo',input_sha256:{},invented:true})],
]) test(`production recovery CLI refuses ${name} without retiring baseline`,t=>{
 const f=fixture(t);f.authorize();const before=readFileSync(join(f.root,'research/demo-step6-report-integrity.json'));mutate(f);
 const result=f.cli();assert.notEqual(result.status,0,result.stdout);assert.deepEqual(readFileSync(join(f.root,'research/demo-step6-report-integrity.json')),before);
});

test('production recovery accepts only exact original brief prefix plus native sealed foreign Alpha append',t=>{
 const f=fixture(t),path='briefs/tasks/frontier-dependency-ledger.md';
 const before=readFileSync(join(f.root,path),'utf8');
 f.put(path,before+'\n<!-- foreign-alpha-batch-1-3a:begin -->\nForeign review: research/foreign-alpha-batch-1-3a.md\n<!-- foreign-alpha-batch-1-3a:end -->\n');
 const guards=f.authorize();assert.equal(guards.shared_brief_append.prefix_bytes,Buffer.byteLength(before));assert.equal(guards.shared_brief_append.reports.length,1);
 const result=f.cli();assert.equal(result.status,0,result.stderr);
 assert.equal(readFileSync(join(f.root,path),'utf8').startsWith(before),true);
 assert.deepEqual(readFileSync(join(f.root,'.autopilot/demo/report-reopen-before/original-brief-prefix.md')),Buffer.from(before));
});
test('production recovery refuses a changed byte within the original shared brief',t=>{
 const f=fixture(t);f.put('briefs/tasks/frontier-dependency-ledger.md','edited old evidence\n');
 const result=f.cli('--inspect');assert.notEqual(result.status,0);assert.match(result.stderr,/shared brief changed/);
});

test('historical committed hunk reversal preserves other existing source hunks and rejects mismatched content',()=>{
 const patch='diff --git a/p b/p\n--- a/p\n+++ b/p\n@@ -1,3 +1,3 @@\n context\n-old threshold\n+zero threshold\n tail\n';
 assert.equal(reverseCommittedPatch('foreign paragraph\ncontext\nzero threshold\ntail\n',patch),'foreign paragraph\ncontext\nold threshold\ntail\n');
 assert.throws(()=>reverseCommittedPatch('context\nchanged threshold\ntail\n',patch),/exact unique match/);
});


test('native JSON diagnostics flush complete multi-megabyte inventories to pipes', async t => {
 const f = fixture(t);
 const added = Array.from({length:7000}, (_, i) => `tools/diagnostic-${String(i).padStart(5,'0')}-${'x'.repeat(150)}.txt`);
 for (const path of added) f.put(path, 'protected diagnostic fixture\n');
 const integrity = join(f.root,'research/demo-step6-report-integrity.json');
 const before = readFileSync(integrity);
 const call = (tool,args) => spawnSync(process.execPath,
  [join(f.root,'tools',tool),...args,'--run','demo','--root',f.root],
  {encoding:'utf8',maxBuffer:256*1024*1024});
 await t.test('publication-ready --verify --inspect emits every protected row', () => {
  const result = call('publication-ready.mjs',['--verify','--inspect']);
  assert.ifError(result.error); assert.equal(result.status,0,result.stderr);
  const ready = JSON.parse(result.stdout);
  assert.ok(Buffer.byteLength(result.stdout)>1024*1024,'exercise asynchronous pipe output above 1 MiB');
  t.diagnostic(`ready JSON bytes: ${Buffer.byteLength(result.stdout)}`);
  assert.equal(ready.protected_tree_rows.length,ready.protected_tree_files);
  assert.equal(ready.protected_tree_paths.length+ready.protected_tree_projections.length,ready.protected_tree_files);
  assert.deepEqual(ready.protected_tree_paths.filter(path=>path.startsWith('tools/diagnostic-')),added);
  const rows = new Map(ready.protected_tree_rows.map(row=>row.split('\0')));
  for (const path of added) assert.match(rows.get(path),/^[a-f0-9]{64}$/);
 });
 await t.test('step6-report recovery-inventory emits every current and changed path', () => {
  const result = call('step6-report.mjs',['recovery-inventory']);
  assert.ifError(result.error); assert.equal(result.status,0,result.stderr);
  const inventory = JSON.parse(result.stdout);
  assert.ok(Buffer.byteLength(result.stdout)>1024*1024,'exercise asynchronous pipe output above 1 MiB');
  t.diagnostic(`inventory JSON bytes: ${Buffer.byteLength(result.stdout)}`);
  assert.deepEqual(Object.keys(inventory.now).filter(path=>path.startsWith('tools/diagnostic-')),added);
  for (const path of added) assert.match(inventory.now[path],/^[a-f0-9]{64}$/);
  // The fixture's bounded core repair is also a genuine changed input.
  const original = JSON.parse(before).protected_tree;
  const expected = [...new Set([...Object.keys(original),...Object.keys(inventory.now)])]
   .filter(path=>original[path]!==inventory.now[path]).sort();
  assert.deepEqual(inventory.changed,expected);
  assert.ok(added.every(path=>inventory.changed.includes(path)));
  assert.deepEqual(inventory.scoped,[]);
 });
 assert.deepEqual(readFileSync(integrity),before,'diagnostics preserve the frozen report baseline');
});

// Ownership survives foreign metadata/manifest reconciliation only when an
// exact item identity and native page assignment were already sealed.
function foreignOwnerFixture(t, consumed = false) {
 const f=fixture(t,put=>{
  if (consumed) put('items/thm-owned.md','---\nid: thm-owned\nkind: theorem\nstatus: draft\ndeps: [def-context, lem-foreign]\n---\n## Proof\n\nOwned proof.\n');
  put('research/foreign-scope-ledger.json',{run:'foreign',pages:[{id:'foreign-page',kind:'A',batch:'1'}]});
  put('research/plan-spec.json',{pages:[{id:'owned-page',items:['thm-owned']},{id:'foreign-page',kind:'A',category:'algebra'}]});
  put('library/algebra/foreign-page.md','---\npage: foreign-page\nstatus: draft\n---\nForeign page.\n');
  put('items/lem-foreign.md','---\nid: lem-foreign\nkind: lemma\norigin: pipeline\npipeline_run: foreign\nstatus: draft\n---\nOriginal foreign proof.\n');
  put('research/foreign-batch-1.pages.json',[{id:'foreign-page',kind:'A',category:'algebra',items:[{id:'lem-foreign',kind:'lemma'}]}]);
  put('research/foreign-step1-lem-foreign.json',{version:1,run:'foreign',item:'lem-foreign',owner:true,decision:'ready'});
  put('research/foreign-dispatch/beta-batch-1.result.json',{run:'foreign',role:'beta',label:'batch-1',ok:true,runner:'codex',process_exit_code:0,attempt:1,covers:['1']});
  put('research/foreign-dispatch/beta-batch-1.attempt-1.prompt.md','run: foreign\nrole: beta\nlabel: batch-1\ncovers: 1\nAssigned `foreign-page` in `algebra`.\n');
 });
 f.put('research/foreign-batch-1.pages.json',[{id:'foreign-page',kind:'A',category:'algebra',reconciled:true,items:[{id:'lem-foreign',kind:'lemma'}]}]);
 f.put('items/lem-foreign.md','---\nid: lem-foreign\nkind: lemma\norigin: pipeline\npipeline_run: foreign\nstatus: draft\n---\nCurrent foreign proof.\n');
 return f;
}
test('production recovery preserves sealed foreign owner item authoring after manifest reconciliation',t=>{
 const f=foreignOwnerFixture(t),guards=f.authorize();
 assert.ok(guards.scoped_foreign_changes.includes('items/lem-foreign.md'));
 const before=readFileSync(join(f.root,'items/lem-foreign.md'));
 const result=f.cli(); assert.equal(result.status,0,result.stderr);
 assert.deepEqual(readFileSync(join(f.root,'items/lem-foreign.md')),before);
});
for(const [name,mutate] of [
 ['changed sealed owner identity',f=>f.put('research/foreign-step1-lem-foreign.json',{version:1,run:'foreign',item:'lem-foreign',owner:true,decision:'ready',invented:true})],
 ['unsealed owner identity',f=>f.put('research/foreign-step1-lem-invented.json',{version:1,run:'foreign',item:'lem-invented',owner:true,decision:'ready'})],
 ['changed native assignment',f=>f.put('research/foreign-dispatch/beta-batch-1.attempt-1.prompt.md','different page assignment')],
 ['changed native result',f=>f.put('research/foreign-dispatch/beta-batch-1.result.json',{run:'foreign',role:'beta',label:'batch-1',ok:true,written_by:'autopilot'})],
 ['wrong canonical category',f=>f.put('research/plan-spec.json',{pages:[{id:'owned-page',items:['thm-owned']},{id:'foreign-page',kind:'A',category:'other'}]})],
 ['wrong current page identity',f=>f.put('library/algebra/foreign-page.md','---\npage: invented-page\n---\n')],
 ['wrong source identity',f=>f.put('items/lem-foreign.md','---\nid: lem-invented\nkind: lemma\norigin: pipeline\npipeline_run: foreign\n---\n')],
 ['wrong pipeline owner',f=>f.put('items/lem-foreign.md','---\nid: lem-foreign\nkind: lemma\norigin: pipeline\npipeline_run: other\n---\n')],
 ['wrong source kind',f=>f.put('items/lem-foreign.md','---\nid: lem-foreign\nkind: theorem\norigin: pipeline\npipeline_run: foreign\n---\n')],
 ['symlink source',f=>{rmSync(join(f.root,'items/lem-foreign.md'));symlinkSync(join(f.root,'items/thm-owned.md'),join(f.root,'items/lem-foreign.md'));}],
]) test(`production recovery refuses foreign owner fallback with ${name}`,t=>{
 const f=foreignOwnerFixture(t);mutate(f);
 if(name==='unsealed owner identity') {
  f.put('items/lem-invented.md','---\nid: lem-invented\nkind: lemma\norigin: pipeline\npipeline_run: foreign\n---\n');
  f.put('research/foreign-batch-1.pages.json',[{id:'foreign-page',kind:'A',category:'algebra',items:[{id:'lem-invented',kind:'lemma'}]}]);
 }
 const before=readFileSync(join(f.root,'research/demo-step6-report-integrity.json'));
 const result=f.cli('--inspect');assert.notEqual(result.status,0,result.stdout);
 assert.deepEqual(readFileSync(join(f.root,'research/demo-step6-report-integrity.json')),before);
});

test('production recovery keeps a foreign owner item consumed by owning readiness protected',t=>{
 const f=foreignOwnerFixture(t,true);
 const before=readFileSync(join(f.root,'research/demo-step6-report-integrity.json'));
 const result=f.cli('--inspect');assert.notEqual(result.status,0,result.stdout);
 assert.deepEqual(readFileSync(join(f.root,'research/demo-step6-report-integrity.json')),before);
});
