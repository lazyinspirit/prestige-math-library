import {lensSourceIdenticalReversionContinuity,LENS_REVERSION_POLICY} from './step3-owner-lens-reversion-successor.mjs';
// Explicit source-identical reversion continuity; no new verdict or review credit.
import {readFileSync,lstatSync} from 'node:fs';
import {resolve,relative,sep} from 'node:path';
import {createHash} from 'node:crypto';
const sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>sha(JSON.stringify(canonical(x))??'undefined');
const RUN='machine-learning-all-101-2026-10-19',ID='lem-du-neighborhood-gram-and-hessian-control';
export const SOURCE_IDENTICAL_REVERSION_POLICY='step3-source-identical-reversion-risk-only-v1';
const PINS={
  "native_result": {
    "path": "research/machine-learning-all-101-2026-10-19-dispatch/alpha-3a-batch-45.attempt-1.result.json",
    "sha256": "c6102a0710049d0229e407a5b875f5ea811f750e25412846dbfff3ce9ae71e91"
  },
  "native_prompt": {
    "path": "research/machine-learning-all-101-2026-10-19-dispatch/alpha-3a-batch-45.attempt-1.prompt.md",
    "sha256": "fe7117500f4c94eef804ec8194aa849bf5932fda737b7b2d0946b6c38b9223cb"
  },
  "native_report": {
    "path": "research/machine-learning-all-101-2026-10-19-alpha-batch-45-3a.md",
    "sha256": "631b564bdb7a9bc7fa44a3966460a9bb5de7ef321c972748913b81dc08f4ab24"
  },
  "native_assignment": {
    "path": "research/machine-learning-all-101-2026-10-19-alpha-batch-45-3a-order.task.md",
    "sha256": "fe426ce94708d517f1f11672adba6826484fc43ff30a476af7c4aabba8320c6e"
  },
  "native_decisions": {
    "path": "research/machine-learning-all-101-2026-10-19-owner-step3-acceptance-continuity/your-proposal/du-reversion-evidence/native-decision-observation.json",
    "sha256": "17893c5dc9f646f0422ec32c33490fb23ec88639aea26cb302296a3a9afb6b43"
  },
  "pre_snapshot": {
    "path": "research/machine-learning-all-101-2026-10-19-step3-hash-45-pre.json",
    "sha256": "9bdbc6cf2efb60cb7296061d39aec2928e13c18d763e7176022da100c18e146d"
  },
  "pre_source": {
    "path": "research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/lem-du-neighborhood-gram-and-hessian-control.md",
    "sha256": "226fbab7c7225ee0dec857494c557b2797d632b60d60d234740e25f23d815076"
  },
  "pre_manifest": {
    "path": "research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/research/machine-learning-all-101-2026-10-19-batch-45.pages.json",
    "sha256": "937d05598cdaea4754324365678222306f6605d8169a68e332b0e24d69d90880"
  },
  "pre_contract": {
    "path": "research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/research/machine-learning-all-101-2026-10-19-batch-45.proof-contracts.json",
    "sha256": "810933e82173e4b93767964aa192562df786d666cddb6401f27e8ac747337710"
  }
};
const REVIEW='ff2cd071474090bcb25de8838b3725de4ad6bb9f3a703ed9e1f98d20c05b5b16';
const read=(root,path)=>{
 if(typeof path!=='string'||path.startsWith('/')||path.split('/').some(x=>!x||x==='.'||x==='..'))throw Error('unsafe path');
 let current=resolve(root);for(const part of path.split('/')){current=resolve(current,part);const s=lstatSync(current);if(s.isSymbolicLink())throw Error('symlink');}
 if(!lstatSync(current).isFile()||relative(resolve(root),current).startsWith('..'+sep))throw Error('not regular');
 return readFileSync(current,'utf8');
};
const manifestRow=(doc,id)=>{
 const pages=Array.isArray(doc)?doc:doc?.pages;if(!Array.isArray(pages))throw Error('manifest');
 const rows=pages.flatMap(p=>(p.items??[]).filter(x=>x?.id===id).map(x=>({...x,__step4_page_id:p.id})));
 if(rows.length!==1)throw Error('unique home');return rows[0];
};
const semanticDecision=d=>{const {subject_sha256,...rest}=d;return rest;};
export function sourceIdenticalReversionContinuity(root,run,decision,target,before,current,entry){
 if(entry?.policy===LENS_REVERSION_POLICY)return lensSourceIdenticalReversionContinuity(root,run,decision,target,before,current,entry);
 if(!entry||entry.policy!==SOURCE_IDENTICAL_REVERSION_POLICY||entry.id!==decision?.id||entry.obligation!==decision?.obligation)return false;
 try{
  const allowed=['version','policy','run','id','obligation','owner_identity','reason','target_sha256','pre_carrier_sha256','current_carrier_sha256','risk_review_sha256','independent_execution_coverage_adopted',...Object.keys(PINS)];
  if(Object.keys(entry).some(k=>!allowed.includes(k))||entry.version!==1||entry.run!==run||run!==RUN||decision.id!==ID||entry.owner_identity!=='/root'||typeof entry.reason!=='string'||entry.reason.trim().length<80||entry.independent_execution_coverage_adopted!==false)return false;
  if(decision.obligation!==`touched:45:${ID}`||decision.route!=='touched'||decision.verdict!=='reverted_change'||target.id!==ID||String(target.batch)!=='45'||target.route!=='touched'||target.stabilized||target.added||entry.target_sha256!==hash(target)||entry.pre_carrier_sha256!==hash(before)||entry.current_carrier_sha256!==hash(current))return false;
  const data={};for(const[k,pin]of Object.entries(PINS)){
   const ref=entry[k];if(!ref||Object.keys(ref).sort().join(',')!=='path,sha256'||ref.path!==pin.path||ref.sha256!==pin.sha256)return false;
   const text=read(root,ref.path);if(sha(text)!==pin.sha256)return false;data[k]=text;
  }
  const result=JSON.parse(data.native_result),snapshot=JSON.parse(data.pre_snapshot),native=JSON.parse(data.native_decisions);
  if(result.run!==run||result.role!=='alpha'||result.label!=='3a-batch-45'||result.attempt!==1||result.ok!==true||result.exit_code!==0||result.timed_out===true||result.covers?.length!==1||String(result.covers[0])!=='45'||result.terminal_summary?.task_completed!==true||result.terminal_summary?.task_aborted===true)return false;
  if(snapshot.version!==2||snapshot.run!==run||String(snapshot.batch)!=='45'||snapshot.label!=='pre'||!Array.isArray(snapshot.manifest)||!snapshot.manifest.includes(ID)||hash(snapshot.hashes?.[ID])!==hash(before))return false;
  if(native.run!==run||native.group!=='batch-45'||!Array.isArray(native.decisions))return false;
  const originals=native.decisions.filter(d=>d.obligation===decision.obligation);if(originals.length!==1||hash(semanticDecision(originals[0]))!==hash(semanticDecision(decision)))return false;
  if(!data.native_assignment.includes(`batch 45, ${ID} — touched, risk review`)||!data.native_report.includes(ID)||!data.native_report.includes('reverted_change')||!data.native_prompt.includes('3a-batch-45'))return false;
  const source=read(root,`items/${ID}.md`),manifest=JSON.parse(read(root,`research/${run}-batch-45.pages.json`)),contracts=JSON.parse(read(root,`research/${run}-batch-45.proof-contracts.json`));
  if(source!==data.pre_source||sha(source)!==before.item_sha256||current.item_sha256!==before.item_sha256)return false;
  const preRow=manifestRow(JSON.parse(data.pre_manifest),ID),row=manifestRow(manifest,ID);
  if(hash(row)!==hash(preRow)||hash(row)!==before.manifest_sha256||current.manifest_sha256!==before.manifest_sha256)return false;
  const old=JSON.parse(data.pre_contract)?.contracts?.[ID],now=contracts?.contracts?.[ID];
  if(!old||!now||Object.hasOwn(old,'risk_review')||!Object.hasOwn(now,'risk_review')||hash(old)!==before.contract_sha256||hash(now)!==current.contract_sha256)return false;
  const {risk_review,...rest}=now;
  if(hash(rest)!==hash(old)||risk_review?.status!=='complete'||risk_review.reviewer!=='alpha-batch-45'||typeof risk_review.notes!=='string'||!risk_review.notes.trim()||hash(risk_review)!==REVIEW||entry.risk_review_sha256!==REVIEW)return false;
  return true;
 }catch{return false;}
}
