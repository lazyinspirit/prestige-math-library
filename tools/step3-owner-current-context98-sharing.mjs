// Exact owner-current, read-only nonfatal sharing; no historical-byte inference.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { unmanifestedDraftCarrier, OWNER_CURRENT_CONTEXT_BASIS } from './step3-owner-unmanifested-draft-context.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const ID='thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds';
const CONSUMER='thm-gordon-luecke-knot-complement-determines-knot';
const DEFECT='ipkt109-b98-3a-loop-relative-general-position';
const OBLIGATIONS=['reader:98:1','refuter:98:2'];
const LOCATIONS=['Proof 5.1, the step that puts the disk-map interior in finite PL general position relative to S','Proof 5.1'];
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=v=>createHash('sha256').update(JSON.stringify(canonical(v))??'undefined').digest('hex');
const equal=(a,b)=>hash(a)===hash(b);
const long=v=>typeof v==='string'&&v.trim().length>=40;
export function ownerCurrentContext98SharedDefect(root,run,row,left,right){
 try{
  if(run!==RUN||row?.defect_id!==DEFECT||!left||!right)return false;
  const pair=OBLIGATIONS.map(o=>[left,right].find(d=>d.obligation===o));
  if(!pair.every(Boolean)||left.obligation===right.obligation)return false;
  const read=p=>JSON.parse(readFileSync(resolve(root,p),'utf8'));
  const scope=read(`research/${run}-step3-scope-98.json`);
  const path=`research/${run}-alpha-batch-98-3a-decisions.json`;
  const document=read(path);
  if(scope.version!==2||scope.run!==run||String(scope.batch)!=='98'||document.version!==1||document.run!==run||document.group!=='batch-98')return false;
  const findings=[scope.reader_findings,scope.refuter_findings].map((list,i)=>{
   const matches=(list??[]).filter(f=>f.obligation===OBLIGATIONS[i]);
   return matches.length===1?matches[0]:null;
  });
  const decisions=OBLIGATIONS.map(o=>{const m=document.decisions.filter(d=>d.obligation===o);return m.length===1?m[0]:null;});
  if(!findings.every(Boolean)||!decisions.every(Boolean))return false;
  for(let i=0;i<2;i++){
   const f=findings[i],d=decisions[i],a=pair[i],route=i?'flagged':'reader';
   if(!equal(a.target,{...f,route})||!['obligation','id','route','verdict','same_defect_as','same_defect_evidence'].every(k=>equal(a[k],d[k])))return false;
   if(f.id!==ID||f.location!==LOCATIONS[i]||f.defect!=='unlicensed-inference'||f.severity!=='nonfatal'||f.subject_type!=='unmanifested-draft-dependency'||f.owner_current_context_basis!==OWNER_CURRENT_CONTEXT_BASIS)return false;
   if(!['consumer_id','observed_source','observed_sha256'].every(k=>f[k]===null)||f.owner_context_consumer_id!==CONSUMER||f.owner_context_consumer_ids!==undefined||f.owner_repaired_context_basis!==undefined||f.producer_batch!==undefined)return false;
   if(d.id!==ID||d.route!==route||d.verdict!=='confirmed_nonfatal'||!equal(d.defect_ids,[DEFECT])||d.consumer_id!==null||d.owner_context_consumer_id!==CONSUMER||d.owner_context_consumer_ids!==undefined||d.historical_delta_unknown!==true||!long(d.owner_resolution)||d.repair_confidence!==undefined)return false;
  }
  if(!decisions.some((d,i)=>d.same_defect_as===OBLIGATIONS[1-i]&&long(d.same_defect_evidence)))return false;
  if(!equal(findings[0].owner_unmanifested_draft_context,findings[1].owner_unmanifested_draft_context)||findings[0].owner_unmanifested_refuter_context!==undefined||findings[1].owner_unmanifested_refuter_context?.reader_obligation!==OBLIGATIONS[0]||findings[1].owner_unmanifested_refuter_context?.historical_source_observed!==false)return false;
  if(row.run!==run||String(row.batch)!=='98'||row.group!=='batch-98'||row.subject!==ID||row.class!=='accuracy'||row.subclass!=='unlicensed-inference'||row.severity!=='nonfatal'||row.caught_at_stage!=='3a-adjudicate'||row.disposition!=='nonfatal-recorded'||row.status!=='closed'||row.repair_cost!=='none'||row.historical_delta_unknown!==true)return false;
  if(!OBLIGATIONS.every(obligation=>Array.isArray(row.adjudication_ref)&&row.adjudication_ref.some(r=>r?.path===path&&r.obligation===obligation)))return false;
  const carriers=findings.map(f=>unmanifestedDraftCarrier(root,run,'98',f));
  if(!carriers.every((c,i)=>c.unchanged_context===true&&!c.owner_repaired_context&&decisions[i].subject_sha256===hash(c)))return false;
  const {owner_unmanifested_refuter_context:wrapper,...base}=carriers[1];
  return !!wrapper&&equal(carriers[0],base);
 }catch{return false;}
}
