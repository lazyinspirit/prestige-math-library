// Root-owned integration only. Default is a read-only, digest-free preview.
import fs from 'node:fs';
import path from 'node:path';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const BASE=`research/${RUN}-supervision-20261020/step2-supervision/battery2-locator-migration`;
const args=process.argv.slice(2);
const arg=(name,fallback)=>{const i=args.indexOf(name);return i<0?fallback:args[i+1];};
const inputFile=arg('--input',`${BASE}/root-apply-input.json`);
const inputRaw=fs.readFileSync(inputFile,'utf8'), input=JSON.parse(inputRaw);
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
assert(input.holds===0,'Unresolved preview holds');
assert(input.sources.length===210,'Final source scope must remain exactly210');
const docs=new Map(), sources=new Map();
for(const s of input.sources){
  assert(fs.readFileSync(s.canonical,'utf8')===s.current_text,`Source moved: ${s.canonical}`);
  assert(fs.readFileSync(s.proposed_after,'utf8')===s.current_text,`Frozen source candidate moved: ${s.canonical}`);
  sources.set(s.id,s.current_text);
}
for(const [file,raw]of Object.entries(input.contract_preimages)){
  assert(fs.readFileSync(file,'utf8')===raw,`Contract document moved: ${file}`);
  docs.set(file,JSON.parse(raw));
}
for(const change of input.entry_changes){
  const doc=docs.get(change.contract_file);
  assert(doc && same(doc.contracts[change.id],change.before_entry),`Entry preimage moved: ${change.id}`);
  doc.contracts[change.id]=structuredClone(change.after_entry);
}
const seen=new Set();
for(const rebind of input.existing_template_rebinds){
  const key=`${rebind.id}\0${rebind.case}`;assert(!seen.has(key),`Duplicate template binding: ${key}`);seen.add(key);
  const row=docs.get(rebind.contract_file)?.contracts[rebind.id]?.boundaries?.find(b=>b.case===rebind.case);
  assert(row?.template_review,`Existing review absent: ${key}`);
  assert(sources.has(rebind.id),`Missing final source: ${key}`);
  const old=JSON.parse(input.contract_preimages[rebind.contract_file]).contracts[rebind.id].boundaries.find(b=>b.case===rebind.case);
  assert(same(old.template_review,rebind.existing_template_review),`Original review guard differs: ${key}`);
  // Only the explicitly mirrored current reason may differ before digest rebinding.
  const expected={...old.template_review,reason:row.template_review.reason};
  assert(same(row.template_review,expected),`Nonreason review metadata changed: ${key}`);
}
for(const protectedRow of input.protected_rows){
  const row=docs.get(protectedRow.contract_file)?.contracts[protectedRow.id]?.boundaries?.find(b=>b.case===protectedRow.case)
    ?? JSON.parse(fs.readFileSync(protectedRow.contract_file,'utf8')).contracts[protectedRow.id].boundaries.find(b=>b.case===protectedRow.case);
  assert(same(row,protectedRow.current_row),`Previously adopted protected row changed: ${protectedRow.id}/${protectedRow.case}`);
}
if(!args.includes('--apply')){
  console.log(JSON.stringify({status:'read-only-preview',holds:0,source_guards:input.sources.length,contract_documents:docs.size,entry_mirrors:input.entry_changes.length,existing_template_rebinds:seen.size,protected_root_rows:input.protected_rows.length,hashes_computed:0,writes:0,gates_run:false},null,2));
  process.exit(0);
}
const approvalFile=arg('--approval',null);assert(approvalFile,'Explicit root approval required');
const approvalRaw=fs.readFileSync(approvalFile,'utf8'),approval=JSON.parse(approvalRaw);
assert(approval.by==='/root' && approval.approved_input===inputFile,'Root approval must name exact input');
for(const field of ['approve_exact_local_mirrors','approve_existing_template_rebind_only','metadata_and_sources_final','approve_210_source_scope','approve_six_existing_cobordism_rows'])assert(approval[field]===true,`Missing explicit approval: ${field}`);
assert(approval.source_adoption_record===input.source_adoption_record,'Wrong source adoption');
assert(approval.adopted_locator_decisions===input.locator_decision_record,'Wrong actual locator decisions');
assert(approval.adopted_text_cleanups===input.text_cleanup_record,'Wrong exact text cleanup decisions');
for(const file of [approval.source_adoption_record,approval.adopted_locator_decisions,approval.adopted_text_cleanups])assert(fs.readFileSync(file,'utf8')===input.supporting_records[file],`Adoption input moved: ${file}`);
const archive=path.resolve(approval.archive_dir??'');
assert(archive.startsWith(path.resolve(BASE)+path.sep) && !fs.existsSync(archive),'Fresh research archive directory required');
// Recheck all preimages before archive creation, digest computation, or writes.
for(const s of input.sources)assert(fs.readFileSync(s.canonical,'utf8')===s.current_text,`Source changed during preview: ${s.id}`);
for(const[file,raw]of Object.entries(input.contract_preimages))assert(fs.readFileSync(file,'utf8')===raw,`Contract changed during preview: ${file}`);
const {createHash}=await import('node:crypto');
const {itemHashGuard}=await import('../../../../tools/item-hash.mjs');
const itemHashes=new Map(),history=[];
for(const rebind of input.existing_template_rebinds){
  const row=docs.get(rebind.contract_file).contracts[rebind.id].boundaries.find(b=>b.case===rebind.case);
  const before=structuredClone(row.template_review);
  if(!itemHashes.has(rebind.id))itemHashes.set(rebind.id,itemHashGuard(sources.get(rebind.id)));
  row.template_review.item_sha256=itemHashes.get(rebind.id);
  row.template_review.row_sha256=createHash('sha256').update(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence})).digest('hex');
  history.push({id:rebind.id,case:rebind.case,before_current_template:before,after_current_template:structuredClone(row.template_review),actual_original_template:rebind.existing_template_review});
}
fs.mkdirSync(archive,{recursive:true});
const archiveFile=(name,text)=>{const out=path.join(archive,name);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,text,{flag:'wx'});};
archiveFile('root-apply-input.json',inputRaw);archiveFile('root-approval.json',approvalRaw);
for(const[file,raw]of Object.entries(input.contract_preimages))archiveFile(file,raw);
for(const[file,raw]of Object.entries(input.supporting_records))archiveFile(file,raw);
archiveFile('root-locator-migration-reconciliation.json',JSON.stringify({by:'/root',basis:'Root-adopted source-formatting/conserved-argument locator migration; prior case arguments and actual delegated reviewer identities preserved',existing_template_rebinds:history,new_review_stamps:0,new_mathematical_acceptance:false,native_alpha_credit:false,hashes_computed_by_root:true,gates_run:false},null,2)+'\n');
for(const[file,doc]of docs)fs.writeFileSync(file,JSON.stringify(doc,null,2)+'\n');
console.log(JSON.stringify({root_applied:true,entry_mirrors:input.entry_changes.length,existing_template_rebinds:history.length,contract_documents:docs.size,new_review_stamps:0,native_alpha_credit:false,archive,gates_run:false},null,2));
