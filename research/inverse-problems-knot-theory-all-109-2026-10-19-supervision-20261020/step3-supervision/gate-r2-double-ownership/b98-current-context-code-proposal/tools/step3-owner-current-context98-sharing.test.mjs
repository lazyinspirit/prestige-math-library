import {test,after} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,writeFileSync,copyFileSync,symlinkSync,mkdirSync,rmSync,readdirSync,unlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve,join,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const ROOT=process.cwd(),HERE=dirname(fileURLToPath(import.meta.url));
const stage=mkdtempSync(join(tmpdir(),'context98-code-'));
copyFileSync(join(HERE,'step3-owner-current-context98-sharing.mjs'),join(stage,'sharing.mjs'));
symlinkSync(resolve(ROOT,'tools/step3-owner-unmanifested-draft-context.mjs'),join(stage,'step3-owner-unmanifested-draft-context.mjs'));
const {ownerCurrentContext98SharedDefect:check}=await import(pathToFileURL(join(stage,'sharing.mjs')));
after(()=>rmSync(stage,{recursive:true,force:true}));
const run='inverse-problems-knot-theory-all-109-2026-10-19';
const read=p=>JSON.parse(readFileSync(resolve(ROOT,p),'utf8'));
const scope=read(`research/${run}-step3-scope-98.json`),doc=read(`research/${run}-alpha-batch-98-3a-decisions.json`);
const row=readFileSync(resolve(ROOT,'research/defect-ledger.jsonl'),'utf8').trim().split('\n').map(JSON.parse).find(r=>r.defect_id==='ipkt109-b98-3a-loop-relative-general-position');
const ids=['reader:98:1','refuter:98:2'];
const anchors=ids.map((o,i)=>({...doc.decisions.find(d=>d.obligation===o),target:{...[scope.reader_findings,scope.refuter_findings][i].find(f=>f.obligation===o),route:i?'flagged':'reader'}}));
const clone=v=>structuredClone(v);
test('actual authenticated exact98 pair accepts in both orders',()=>{
 assert.equal(check(ROOT,run,row,...anchors),true);
 assert.equal(check(ROOT,run,row,...anchors.toReversed()),true);
});
for(const [name,mutate] of [
 ['different run',x=>x.run+='-other'],['different defect row',x=>x.row.defect_id+='-other'],
 ['row fixed',x=>x.row.disposition='fixed'],['row fatal',x=>x.row.severity='fatal'],
 ['row different batch',x=>x.row.batch='99'],['missing typed reference',x=>x.row.adjudication_ref.pop()],
 ['row not closed',x=>x.row.status='open'],['row repair credit',x=>x.row.repair_cost='small'],
 ['different obligation',x=>x.a[1].obligation='refuter:99:2'],['missing link',x=>delete x.a[1].same_defect_as],
 ['short link evidence',x=>x.a[1].same_defect_evidence='same'],['different verdict',x=>x.a[1].verdict='false_positive'],
 ['native location changed',x=>x.a[0].target.location='Proof 5.1'],['native evidence changed',x=>x.a[1].target.evidence+=' changed'],
 ['invented historical hash',x=>x.a[0].target.observed_sha256='a'.repeat(64)],['missing null',x=>delete x.a[1].target.observed_source],
 ['different consumer',x=>x.a[0].target.owner_context_consumer_id+='-other'],['multi consumer',x=>x.a[1].target.owner_context_consumer_ids=['x','y']],
 ['repaired context',x=>x.a[0].target.owner_repaired_context_basis='invented'],['different registry entry',x=>x.a[0].target.owner_unmanifested_draft_context.entry_sha256='a'.repeat(64)],
 ['different reader binding',x=>x.a[1].target.owner_unmanifested_refuter_context.reader_obligation='reader:98:2'],
 ['historical attribution invented',x=>x.a[1].target.owner_unmanifested_refuter_context.historical_source_observed=true],
 ['native result binding changed',x=>x.a[1].target.owner_unmanifested_refuter_context.native_result.sha256='a'.repeat(64)],
 ['default unrelated source',x=>x.a[0].id='other-source']
])test(name,()=>{const x={run,row:clone(row),a:clone(anchors)};mutate(x);assert.equal(check(ROOT,x.run,x.row,...x.a),false);});
// A filesystem overlay changes actual authority while keeping both incoming targets intact.
for(const kind of ['registry','decision seal','native refuter report'])test(`actual ${kind} tampering rejects`,()=>{
 const temp=mkdtempSync(join(tmpdir(),'context98-evidence-'));
 try{
  for(const name of readdirSync(ROOT))if(name!=='research')symlinkSync(join(ROOT,name),join(temp,name));
  mkdirSync(join(temp,'research'));
  for(const name of readdirSync(join(ROOT,'research')))symlinkSync(join(ROOT,'research',name),join(temp,'research',name));
  const relative=kind==='registry'?`research/${run}-step3-owner-unmanifested-draft-context.json`:kind==='decision seal'?`research/${run}-alpha-batch-98-3a-decisions.json`:`research/${run}-refute-98.json`;
  const value=read(relative);
  if(kind==='registry')value.contexts=value.contexts.filter(e=>String(e.batch)!=='98');
  else if(kind==='decision seal')value.decisions.find(d=>d.obligation===ids[0]).subject_sha256='a'.repeat(64);
  else value.flagged[1].evidence+=' changed';
  unlinkSync(join(temp,relative));writeFileSync(join(temp,relative),JSON.stringify(value));
  assert.equal(check(temp,run,row,...anchors),false);
 }finally{rmSync(temp,{recursive:true,force:true});}
});
