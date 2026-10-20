import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, copyFileSync, readdirSync, symlinkSync, rmSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
const repo = resolve(process.env.INCIDENTAL_REPO ?? process.cwd());
const run = 'machine-learning-all-101-2026-10-19';
const proposal = resolve(process.env.INCIDENTAL_PROPOSAL ?? join(repo, `research/${run}-owner-step3-incidental-published-context/your-proposal-v2`));
const code = mkdtempSync(join(tmpdir(), 'incidental-context-code-'));
copyFileSync(fileURLToPath(new URL('./step3-owner-incidental-published-context.mjs', import.meta.url)), join(code, 'policy.mjs'));
symlinkSync(join(repo, 'tools/pathway-lib.mjs'), join(code, 'pathway-lib.mjs'));
const { incidentalPublishedNonfatalContexts: check } = await import(pathToFileURL(join(code, 'policy.mjs')));
const { ownerRepairEvidenceClosure } = await import(pathToFileURL(join(repo, 'tools/step3-owner-stabilized-source-identical-continuity.mjs')));
const digest = x => createHash('sha256').update(x).digest('hex');
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'incidental-context-fixture-'));
  const e = JSON.parse(readFileSync(join(proposal, 'registry-entry.json')));
  const row = JSON.parse(readFileSync(join(proposal, 'before/active-row.json')));
  const put = (path, value) => { mkdirSync(dirname(join(root,path)), {recursive:true}); writeFileSync(join(root,path), typeof value === 'string' ? value : JSON.stringify(value,null,2)+'\n'); };
  const copy = path => { mkdirSync(dirname(join(root,path)), {recursive:true}); copyFileSync(join(repo,path),join(root,path)); };
  for (const path of [e.supplier.path,e.consumer.path,e.maintenance.path]) copy(path);
  const refs = value => {
    if (!value || typeof value !== 'object') return;
    if (value.path && value.sha256) copy(value.path);
    for (const child of Object.values(value)) refs(child);
  };
  refs(e);
  for (const name of readdirSync(join(repo,'research')).filter(n=>n.startsWith(`${run}-batch-`)&&n.endsWith('.pages.json'))) copy('research/'+name);
  const registry = {version:1,run,incidental_published_nonfatal_contexts:[e]};
  const groups = [{label:'batch-1',covers:['1']}];
  const current = () => check(root,run,registry,[row],groups);
  const updateRef = (ref,value) => { put(ref.path,value); ref.sha256=digest(readFileSync(join(root,ref.path))); };
  return {root,e,row,registry,groups,put,current,updateRef,close:()=>rmSync(root,{recursive:true,force:true})};
}
const withFixture = fn => { const f=fixture();try {fn(f);} finally {f.close();} };
test('default no opt-in does not inspect files or contextualize any row',()=>{
  assert.deepEqual([...check('/no-such-root','another-run',null,[],[])],[]);
  assert.deepEqual([...check('/no-such-root',run,{version:1,run,incidental_published_nonfatal_contexts:[]},[],[])],[]);
});
test('real authenticated Alpha1 alert, current sources/use and pending maintenance match exactly',()=>withFixture(f=>{
  assert.deepEqual([...f.current()],['ml101-b1-3a-published-box-source']);
  assert.equal(f.row.disposition,'nonfatal-recorded');
  assert.equal(f.e.source_repaired,false);
  assert.equal(f.e.native_execution_coverage_adopted,false);
}));
test('unrelated appended published maintenance is allowed; deletion of the actual quote fails',()=>withFixture(f=>{
  const text=readFileSync(join(f.root,f.e.maintenance.path),'utf8');
  f.put(f.e.maintenance.path,text+'\nUnrelated later maintenance.\n');assert.equal(f.current().size,1);
  f.put(f.e.maintenance.path,text.replace('pending owner bibliographic maintenance','completed owner bibliographic maintenance'));
  assert.throws(f.current,/maintenance/);
}));
test('freezer recursively pins every own-run reference but never an operational transcript',()=>withFixture(f=>{
  f.put(`research/${run}-step3-owner-repair-evidence.json`,f.registry);
  const frozen=ownerRepairEvidenceClosure(f.root,run,{required:true});
  assert.equal(frozen[f.e.native_result.path],f.e.native_result.sha256);
  assert.equal(frozen[f.e.owner_review.path],f.e.owner_review.sha256);
  assert.equal(frozen[f.e.supplier.archive.path],f.e.supplier.sha256);
  assert.equal(frozen[f.e.maintenance.quote_archive.path],f.e.maintenance.quote_archive.sha256);
  assert.ok(Object.keys(frozen).every(p=>!p.endsWith('.log')));
  f.put(f.e.owner_review.path,'{}');assert.throws(()=>ownerRepairEvidenceClosure(f.root,run,{required:true}),/evidence/);
}));
const invalid = [
 ['hidden transcript reference', f=>f.e.extra_evidence={path:`research/${run}-dispatch/a.log`,sha256:'a'.repeat(64)}],
 ['fatal ledger row', f=>f.row.severity='fatal'],
 ['fixed disposition', f=>f.row.disposition='fixed'],
 ['another existing row', f=>f.e.defect_id='ml101-b1-3a-nyu-author'],
 ['new native coverage', f=>f.e.native_execution_coverage_adopted=true],
 ['source repair credit', f=>f.e.source_repaired=true],
 ['whole supplier acceptance', f=>f.e.whole_supplier_acceptance=true],
 ['new run', f=>f.e.run='another-run'],
 ['duplicate authority', f=>f.registry.incidental_published_nonfatal_contexts.push(structuredClone(f.e))],
 ['wrong owner group', f=>f.groups[0].label='batch-2'],
 ['duplicate current owner', f=>f.groups.push({label:'batch-other',covers:['1']})],
 ['scalar manifest dependency', f=>{const path=`research/${run}-batch-1.pages.json`;const d=JSON.parse(readFileSync(join(f.root,path)));for(const p of d)for(const v of p.items)if(v.id===f.e.consumer_id)v.deps=f.e.supplier_id;f.put(path,d);}],
 ['absent manifest dependency array', f=>{const path=`research/${run}-batch-1.pages.json`;const d=JSON.parse(readFileSync(join(f.root,path)));for(const p of d)for(const v of p.items)if(v.id===f.e.consumer_id)delete v.deps;f.put(path,d);}],
 ['supplier added to frontier', f=>{const path=`research/${run}-batch-1.pages.json`;const d=JSON.parse(readFileSync(join(f.root,path)));d[0].items.push({id:f.e.supplier_id});f.put(path,d);}],
 ['consumer removed from home', f=>{const path=`research/${run}-batch-1.pages.json`;const d=JSON.parse(readFileSync(join(f.root,path)));for(const p of d)p.items=p.items.filter(v=>(v.id??v)!==f.e.consumer_id);f.put(path,d);}],
 ['source drift', f=>f.put(f.e.supplier.path,readFileSync(join(f.root,f.e.supplier.path),'utf8')+'\n')],
 ['new source and refreshed digest', f=>{const raw=readFileSync(join(f.root,f.e.consumer.path),'utf8').replace('Full AC','ZF');f.updateRef(f.e.consumer,raw);f.updateRef(f.e.consumer.archive,raw);}],
 ['failed native result with refreshed digest', f=>{const d=JSON.parse(readFileSync(join(f.root,f.e.native_result.path)));d.ok=false;f.updateRef(f.e.native_result,d);}],
 ['rewritten native report with refreshed digest', f=>f.updateRef(f.e.native_report,readFileSync(join(f.root,f.e.native_report.path),'utf8')+'\nOwner supplement.\n')],
 ['rewritten native prompt with refreshed digest', f=>f.updateRef(f.e.native_prompt,'Replacement prompt')],
 ['transcript evidence substitute', f=>{f.e.owner_review.path=`research/${run}-dispatch/a.log`;f.e.owner_review.sha256='a'.repeat(64);}],
 ['root review not complete', f=>{const d=JSON.parse(readFileSync(join(f.root,f.e.owner_review.path)));d.completed=false;f.updateRef(f.e.owner_review,d);}],
 ['incorrect choice premise', f=>{const d=JSON.parse(readFileSync(join(f.root,f.e.owner_review.path)));d.supplier_premise='No choice needed';f.updateRef(f.e.owner_review,d);}],
 ['unrelated used proof clause', f=>{const d=JSON.parse(readFileSync(join(f.root,f.e.owner_review.path)));d.consumer_step='2.1 unrelated';f.updateRef(f.e.owner_review,d);}],
 ['missing pending maintenance', f=>f.put(f.e.maintenance.path,'No pending alert.')],
];
for(const [name,mutate] of invalid)test(`rejects ${name}`,()=>withFixture(f=>{mutate(f);assert.throws(f.current);}));
test.after(()=>rmSync(code,{recursive:true,force:true}));
