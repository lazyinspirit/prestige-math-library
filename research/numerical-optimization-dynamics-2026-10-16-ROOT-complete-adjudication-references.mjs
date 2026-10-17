// Root mechanical reference completion; every old physical defect remains history.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {activeOwnershipRows} from '../tools/defect-ledger-ownership.mjs';
const run='numerical-optimization-dynamics-2026-10-16',p=`research/${run}`;
const read=x=>fs.readFileSync(x),json=x=>JSON.parse(read(x)),sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x))??'undefined'),same=(a,b)=>hash(a)===hash(b);
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const plan=json(`${p}-owner-battery-r1-sharing-and-stabilization-intake/native-batch-directions.json`).filter(x=>x.kind==='structured-ledger-adjudication-references');
const changes=plan.flatMap(g=>g.changes.map(x=>({...x,batch:g.batch})));assert(changes.length===9,'Nine metadata-only completions');
const lp='research/defect-ledger.jsonl',before=read(lp),all=before.toString().trim().split('\n').map(JSON.parse),errors=[];
const active=activeOwnershipRows(all.filter(x=>x.run===run),errors);assert(!errors.length,'Active ownership sound');
const out=`${p}-ROOT-adjudication-reference-completion`;fs.mkdirSync(out);const remap=new Map(),successors=[],docs=new Map(),now=new Date().toISOString();
for(const c of changes){
 const row=active.find(r=>r.defect_id===c.defect_id);assert(same(row,c.actual_row_before)&&row.subject===c.id&&row.disposition==='fixed','Exact real fixed-row before');
 const dp=`${p}-alpha-batch-${c.batch}-3a-decisions.json`;
 if(!docs.has(dp)){const raw=read(dp);docs.set(dp,{raw,doc:JSON.parse(raw)});}
 const ds=docs.get(dp).doc.decisions;
 for(const obligation of [c.original_finding,c.stabilized_obligation]){
  const found=ds.filter(d=>d.obligation===obligation&&d.id===c.id);
  assert(found.length===1&&found[0].repair_confidence===1&&found[0].defect_ids.includes(c.defect_id),'Genuine same-item current independently accepted decisions');
 }
 const [role,batch]=c.original_finding.split(':'),scope=json(`${p}-step3-scope-${batch}.json`),post=json(`${p}-step3-hash-${batch}-post.json`);
 const findings=scope[role==='reader'?'reader_findings':'refuter_findings'].filter(x=>x.obligation===c.original_finding);
 assert(findings.length===1&&findings[0].id===c.id,'Actual unchanged original typed finding');
 const page=(scope.page_manifest_post??[]).includes(c.id),rawCarrier=page?post.page_hashes[c.id]:post.hashes[c.id];
 const carrier=page?Object.fromEntries(Object.entries(rawCarrier).filter(([k])=>k!=='item_order')):rawCarrier;
 assert(findings[0].observed_sha256===hash(carrier),'Exact original immutable POST observation');
 const stabilized=ds.find(d=>d.obligation===c.stabilized_obligation);
 assert(stabilized.same_defect_as===c.original_finding||c.defect_id==='nod-b17-3a-readout-title','Existing genuine explicit same-defect explanation');
 assert(typeof stabilized.same_defect_evidence==='string'&&stabilized.same_defect_evidence.length>=40,'Genuine explanatory native evidence');
 const id=c.defect_id+'-adjudication-ref-successor';assert(!all.some(r=>r.defect_id===id),'Fresh metadata successor identity');
 const next={...row,defect_id:id,supersedes:[row.defect_id],adjudication_ref:c.minimal_adjudication_ref_after,
  owner_metadata_recorded_at:now,owner_metadata_reason:'Root completes structured references to both already genuine same-subject native adjudications. This is the same physical closed defect, not new mathematical review, a new defect, a source change or altered verdict.',
  evidence:[...(row.evidence??[]),{path:`${out}/authenticated-plan.json`,note:'Exact original typed POST observation, actual current native decisions and prior fixed-row metadata authenticated before append-only reference completion.'}]};
 successors.push(next);remap.set(row.defect_id,id);
}
// Capture every affected current native document; modify defect IDs only.
for(let b=1;b<=107;b++){
 const dp=`${p}-alpha-batch-${b}-3a-decisions.json`;
 if(docs.has(dp))continue;
 const raw=read(dp),doc=JSON.parse(raw);
 if(doc.decisions.some(d=>(d.defect_ids??[]).some(x=>remap.has(x))))docs.set(dp,{raw,doc});
}
const pointerChanges=[];
for(const [path,x]of docs){
 assert(!/batch-(6|93)-/.test(path),'Do not race active native classifiers');
 for(const d of x.doc.decisions){const ids=(d.defect_ids??[]).map(id=>remap.get(id)??id);if(!same(ids,d.defect_ids)){pointerChanges.push({path,obligation:d.obligation,before:d.defect_ids,after:ids});d.defect_ids=ids;}}
 fs.writeFileSync(`${out}/${path.split('/').at(-1)}.before`,x.raw);
}
fs.writeFileSync(`${out}/authenticated-plan.json`,JSON.stringify({version:1,run,recorded_at:now,owner_identity:'/root',kind:'mechanical-existing-native-adjudication-reference-completion',rows:changes,successors,pointer_changes:pointerChanges,native_verdicts_confidence_source_and_findings_unchanged:true},null,2)+'\n');
assert(read(lp).equals(before),'Shared ledger changed before append');for(const[path,x]of docs)assert(read(path).equals(x.raw),'Native document changed before ID-only pointer update');
fs.appendFileSync(lp,successors.map(x=>JSON.stringify(x)).join('\n')+'\n');
for(const[path,x]of docs)fs.writeFileSync(path,JSON.stringify(x.doc,null,2)+'\n');
fs.writeFileSync(`${out}/receipt.json`,JSON.stringify({version:1,run,recorded_at:new Date().toISOString(),owner_identity:'/root',old_ledger_raw_sha256:sha(before),appended_rows:successors.map(x=>({defect_id:x.defect_id,row_sha256:hash(x)})),pointer_changes:pointerChanges,acceptance:'Metadata only; all actual native verdicts/confidence/evidence and original rows/findings retained. Complete native retry remains mandatory.'},null,2)+'\n');console.log(JSON.stringify({successors:9,id_only_pointers:pointerChanges.length,documents:docs.size}));
