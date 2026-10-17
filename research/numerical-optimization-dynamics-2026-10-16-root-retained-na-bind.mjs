// Root-only exact final-source/row binding of focused Codex owner adjudications.
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../tools/item-hash.mjs';
const run='numerical-optimization-dynamics-2026-10-16';
const base=`research/${run}-owner-boundary-residual-intake`;
const input=`${base}/retained-na92-ROOT-intents.json`;
const intents=JSON.parse(fs.readFileSync(input,'utf8')).intents;
const out=`${base}/ROOT-retained-na92-binding`;
const must=(x,m)=>{if(!x)throw Error(m);};
const sha=x=>createHash('sha256').update(x).digest('hex');
must(intents.length===92&&!fs.existsSync(out),'Require exact new92 binding identity');
const docs=new Map(),before=new Map(),bindings=[];
for(const x of intents){
  if(!docs.has(x.file)){const raw=fs.readFileSync(x.file);before.set(x.file,raw);docs.set(x.file,JSON.parse(raw));}
  const row=docs.get(x.file).contracts[x.path[1]].boundaries[x.path[3]];
  must(JSON.stringify(row)===JSON.stringify(x.current_row_guard),'Exact row drift '+x.key);
  must(row.status==='not_applicable'&&!row.reviewed,'Unexpected prior disposition '+x.key);
  const id=x.path[1],file=`items/${id}.md`,raw=fs.readFileSync(file,'utf8');
  let reason=x.proposed_scientific_reason;
  if(id==='thm-variational-fem-control-o-h2-error')reason='The Statement supplies exact and discrete minimizers q* and q_h in Q_ad, so the admissible comparison set is nonempty. Its family language concerns per-mesh uniform estimates; it neither selects a mesh from an empty family nor asserts a global existence claim beyond its supplied minimizers. The O(h^2) bound remains conditional on the stated uniform L2 estimates.';
  if(id==='thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription')reason='The Statement fixes a successful finite transcription and its reference KKT root with the stated active-set and local basin hypotheses. The family language describes discretization-indexed instances; this local contraction claim does not select a member of an empty family. The supplied reference root makes the local ball nonempty; no nonempty constraint index set is inferred.';
  must(typeof reason==='string'&&reason.trim().length>=40&&x.original_owner_evidence.length,'Missing specific review '+x.key);
  const row_sha256=sha(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}));
  const by='Codex root owner adjudication accepting the cited named Codex source/case owner review';
  row.reviewed={upheld:true,by,reason,item_sha256:itemHashGuard(raw),row_sha256};
  bindings.push({key:x.key,file:x.file,source:file,raw_sha256:sha(raw),item_sha256:itemHashGuard(raw),row_sha256,reason,owner_evidence:x.original_owner_evidence,review_scope:'Focused original-owner source/case review accepted; root read every scientific rationale and independently checked exceptional domain/claim cases. This is an owner worksheet adjudication, not native Alpha coverage or a claim that root reread every whole proof.'});
}
for(const [file,raw]of before)must(fs.readFileSync(file).equals(raw),'Concurrent contract drift '+file);
fs.mkdirSync(out);
fs.copyFileSync(input,`${out}/approved-intents.json`);
for(const [file,raw]of before){const dest=path.join(out,'before',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,raw);}
for(const b of bindings){const raw=fs.readFileSync(b.source);must(sha(raw)===b.raw_sha256,'Current source drift '+b.key);const dest=path.join(out,'sources',b.source);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,raw);}
for(const [file,doc]of docs){must(fs.readFileSync(file).equals(before.get(file)),'Late contract drift '+file);fs.writeFileSync(file,JSON.stringify(doc,null,2)+'\n');}
fs.writeFileSync(`${out}/receipt.json`,JSON.stringify({run,at:new Date().toISOString(),root_authorized:true,bindings,template_reviews_added:0,mathematical_native_coverage_granted:false,gates_run:false},null,2)+'\n');
console.log(JSON.stringify({rows:bindings.length,files:docs.size,receipt:`${out}/receipt.json`}));
