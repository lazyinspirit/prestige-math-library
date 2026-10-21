// One exact restored-source carrier successor; no verdict or coverage is created.
import {readFileSync,lstatSync} from 'node:fs';
import {resolve,relative,sep} from 'node:path';
import {createHash} from 'node:crypto';
export const LENS_REVERSION_POLICY='step3-lens68-source-identical-two-boundary-reversion-v1';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19',ID='def-lens-space-surgery-orientation-convention';
const DEFECT='ipkt109-b68-3a-lens-zero-convention';
export const LENS_REVERSION_PINS={
  "native_result": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-dispatch/alpha-3a-batch-68.attempt-1.result.json",
    "sha256": "b6e46f9edf885ae12bd25ff524d85ff3aa691ae83f5ff3316ca21aef986878d7"
  },
  "native_prompt": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-dispatch/alpha-3a-batch-68.attempt-1.prompt.md",
    "sha256": "d73049d122e25173daa5971d71bf5200d4b4a790463a5e0651f6cba051e12f33"
  },
  "native_report": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/inverse-problems-knot-theory-all-109-2026-10-19-alpha-batch-68-3a.md",
    "sha256": "04ba63fb5be98eb02f830860f8683484337ca9d7df21436285322b1dab0f84d5"
  },
  "native_assignment": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-alpha-batch-68-3a-order.task.md",
    "sha256": "1594a8c43a4eec7d97e04aa26310b99eaee1b0d0163278cef36f34dd4448ef82"
  },
  "native_decisions": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/inverse-problems-knot-theory-all-109-2026-10-19-alpha-batch-68-3a-decisions.json",
    "sha256": "7c3a126d9c8bf2821f9e413feee2cc67ec984e6bde2b7902b8d8c8981bbc14ce"
  },
  "pre_snapshot": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/inverse-problems-knot-theory-all-109-2026-10-19-step3-hash-68-pre.json",
    "sha256": "271ecc99db37575ca0e8d6320e4117643fd8b9ccac664f527749e6f2fa147da3"
  },
  "pre_source": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/commit66722-def-lens-space-surgery-orientation-convention.md",
    "sha256": "6bf4b0f073d93b4c930b3677c360a2c26c6abcdb1e904d63b98d33ee53303dc9"
  },
  "pre_manifest": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/commit66722-pages.json",
    "sha256": "d1b8205ed631c8ce27aee2070a9d4eca1dd8d83d4c874606bd16d44d3eb10c11"
  },
  "pre_contract": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/commit66722-proof-contracts.json",
    "sha256": "497506a2e85ee34e18ec7f11bd66b70dc9a0af66c78b0c73102dea8b1bb77997"
  },
  "native_ledger": {
    "path": "research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step3-supervision/gate-r2-two-carrier-decisions/archives/actual-ledger-rows.json",
    "sha256": "2263a693792aac4fdb1da714820fb764cd502d11d8917c7d2ab99b09261f244d"
  }
};
const sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>sha(JSON.stringify(canonical(x))??'undefined');
const read=(root,path)=>{
 if(typeof path!=='string'||path.startsWith('/')||path.split('/').some(x=>!x||x==='.'||x==='..'))throw Error('unsafe path');
 let current=resolve(root);for(const part of path.split('/')){current=resolve(current,part);if(lstatSync(current).isSymbolicLink())throw Error('symlink');}
 if(!lstatSync(current).isFile()||relative(resolve(root),current).startsWith('..'+sep))throw Error('not regular');
 return readFileSync(current,'utf8');
};
const row=(doc)=>{
 const pages=Array.isArray(doc)?doc:doc?.pages;if(!Array.isArray(pages))throw Error('manifest');
 const rows=pages.flatMap(p=>(p.items??[]).filter(x=>x?.id===ID).map(x=>({...x,__step4_page_id:p.id})));
 if(rows.length!==1)throw Error('unique home');return rows[0];
};
const semanticDecision=d=>{const{subject_sha256,...rest}=d;return rest;};
export function lensSourceIdenticalReversionContinuity(root,run,decision,target,before,current,entry){
 if(entry?.policy!==LENS_REVERSION_POLICY)return false;
 try{
  const allowed=['version','policy','run','id','obligation','owner_identity','reason','target_sha256','pre_carrier_sha256','current_carrier_sha256','independent_execution_coverage_adopted',...Object.keys(LENS_REVERSION_PINS)];
  if(Object.keys(entry).some(k=>!allowed.includes(k))||entry.version!==1||run!==RUN||entry.run!==run||entry.id!==ID||entry.owner_identity!=='/root'||typeof entry.reason!=='string'||entry.reason.trim().length<80||entry.independent_execution_coverage_adopted!==false)return false;
  if(decision?.id!==ID||decision.obligation!==`touched:68:${ID}`||entry.obligation!==decision.obligation||decision.route!=='touched'||decision.verdict!=='reverted_change'||decision.repair_confidence!==1||hash(decision.defect_ids)!==hash([DEFECT]))return false;
  if(target?.id!==ID||String(target.batch)!=='68'||target.route!=='touched'||target.direct||target.stabilized||target.added||entry.target_sha256!==hash(target)||entry.pre_carrier_sha256!==hash(before)||entry.current_carrier_sha256!==hash(current))return false;
  const data={};for(const[k,pin]of Object.entries(LENS_REVERSION_PINS)){
   const ref=entry[k];if(!ref||Object.keys(ref).sort().join(',')!=='path,sha256'||ref.path!==pin.path||ref.sha256!==pin.sha256)return false;
   const text=read(root,ref.path);if(sha(text)!==pin.sha256)return false;data[k]=text;
  }
  const result=JSON.parse(data.native_result),snapshot=JSON.parse(data.pre_snapshot),native=JSON.parse(data.native_decisions);
  if(result.run!==run||result.role!=='alpha'||result.label!=='3a-batch-68'||result.attempt!==1||result.ok!==true||result.exit_code!==0||result.timed_out===true||result.covers?.length!==1||String(result.covers[0])!=='68'||result.terminal_summary?.task_completed!==true||result.terminal_summary?.task_aborted===true)return false;
  if(snapshot.version!==2||snapshot.run!==run||String(snapshot.batch)!=='68'||snapshot.label!=='pre'||!snapshot.manifest?.includes(ID)||hash(snapshot.hashes?.[ID])!==hash(before))return false;
  if(native.run!==run||native.group!=='batch-68'||!Array.isArray(native.decisions))return false;
  const originals=native.decisions.filter(d=>d.obligation===decision.obligation);if(originals.length!==1||hash(semanticDecision(originals[0]))!==hash(semanticDecision(decision)))return false;
  if(!data.native_prompt.includes('3a-batch-68')||!data.native_assignment.includes(ID)||!data.native_report.includes('reverted_change')||!data.native_report.includes('Restored the exact pre-reader item bytes'))return false;
  const originalRows=JSON.parse(data.native_ledger).filter(x=>x.run===run&&x.defect_id===DEFECT);
  const liveRows=read(root,'research/defect-ledger.jsonl').split('\n').filter(Boolean).map(x=>JSON.parse(x)).filter(x=>x.run===run&&x.defect_id===DEFECT);
  if(originalRows.length!==1||liveRows.length!==1||originalRows[0].subject!==ID||originalRows[0].disposition!=='false-positive'||hash(originalRows[0])!==hash(liveRows[0]))return false;
  const source=read(root,`items/${ID}.md`),manifest=JSON.parse(read(root,`research/${run}-batch-68.pages.json`)),contracts=JSON.parse(read(root,`research/${run}-batch-68.proof-contracts.json`));
  if(source!==data.pre_source||sha(source)!==before.item_sha256||current.item_sha256!==before.item_sha256)return false;
  const preRow=row(JSON.parse(data.pre_manifest)),nowRow=row(manifest);
  if(hash(preRow)!==before.manifest_sha256||hash(nowRow)!==hash(preRow)||current.manifest_sha256!==before.manifest_sha256)return false;
  const old=JSON.parse(data.pre_contract)?.contracts?.[ID],now=contracts?.contracts?.[ID];
  if(!old||!now||hash(old)!==before.contract_sha256||hash(now)!==current.contract_sha256||!Array.isArray(old.boundaries)||old.boundaries.length!==8)return false;
  if(old.boundaries[1]?.case!=='zero'||old.boundaries[4]?.case!=='endpoints')return false;
  const expected=JSON.parse(JSON.stringify(old));
  expected.boundaries[1]={case:'zero',status:'checked',evidence:'The broad genus-one gluing definition includes S^1 x S^2 when meridians coincide; the notation L(p,q) is separately restricted to p>0. No L(0,q) symbol is assigned.'};
  expected.boundaries[4]={...old.boundaries[4],evidence:'The Definition defines the broad class by gluing two solid tori and restricts the named L(p,q) family to coprime integers p>0 and q. It assigns no L(0,q) symbol; the allowed pair p=1,q=0 is included.'};
  return hash(now)===hash(expected);
 }catch{return false;}
}
