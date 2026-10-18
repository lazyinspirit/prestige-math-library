// Root-only current metadata integration; this grants no native coverage or mathematical acceptance.
import {readFileSync as read,writeFileSync as write,existsSync as exists,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/pathway-lib.mjs';
import {splitFrontmatter,SOURCE_SECTIONS,sourceSectionText} from '../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/step3-completed-owner-metadata-before`,receipt=`${base}/step3-completed-owner-metadata-integration.json`;
if(exists(receipt))throw Error('Non-overwriting integration already done');
const state=JSON.parse(read(`.autopilot/${run}/state.json`));
if(!state.paused||state.stage!=='3a-adjudicate'||Object.values(state.dispatches).some(d=>!d.endedAt))throw Error('Require native paused/drained current Step3 boundary');
const sha=x=>createHash('sha256').update(x).digest('hex'),changes=[];
function save(path,next){const old=read(path,'utf8');if(old===next)return;const dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});write(dest,old,{flag:'wx'});write(path,next);changes.push({path,before_raw_sha256:sha(old),after_raw_sha256:sha(next)});}
const mathEvidence={
 11:{reviewer:'/root/gaussian_planning',path:`${base}/step3-gaussian-final-owner-resolution-proposal.json`,ids:['lem-gaussian-matrix-law-normalization-and-second-moments','lem-finite-scan-range-basis-is-borel','lem-power-rangefinder-projector-is-borel'],notes:'Actual native helper proofs independently completed and all25 old/current affected carriers checked by the same owner. Density-weighted monotone limit, ambient Borel-stratum induction, finite bounded expectation and measurable composition are explicit. Native creation and original completed review remain separately attributed.'},
 17:{reviewer:'/root/gaussian_planning',path:`${base}/step3-gaussian-final-owner-resolution-proposal.json`,ids:['lem-gaussian-squared-norm-tail','thm-gaussian-oblivious-l2-subspace-embedding'],notes:'The actual Gaussian normalization/product independence supplier is now proved under the same Countable Choice and explicitly used. Same owner reviewed complete actual supplier-first tail and embedding proofs, preserving every Statement and constant; completed old/current25-carrier closure is recorded.'},
 54:{reviewer:'/root/scope34_hdiv_owner',path:`${base}/step3-afem54-owner-repair-report.json`,ids:['thm-afem-p1-residual-reliability-and-local-efficiency','thm-afem-error-and-oscillation-contraction','thm-afem-p1-poisson-optimal-complexity'],notes:'The original edge-neighbor patch is explicitly refined by the fixed three-generation pattern; reference cell tests and full-tent edge lifting are prolonged into every further fine space. Both incident residuals are controlled with uniform constants. Contraction and optimality retain their conclusions with the factor-four cumulative count. The same owner checked all actual old/current consumers, then the subsequent ordered refinement extension.'},
 63:{reviewer:'/root/scope34_hdiv_owner',path:`${base}/step3-afem54-order63-owner-repair-report.json`,ids:['lem-curved-nvb-closure-preserves-matching-traces','alg-delaunay-seeded-curved-uniform-nvb-refinement','thm-curved-uniform-nvb-quality-and-termination'],notes:'Supplier matching now explicitly includes whole faces, including vertices. Persistent root and child binary identifiers are assigned before every pending selection, curved seed triangle order is explicit, and rollback retries the same ordered forest. Same owner checked full25-item/five-page affected old/current closure; all geometric and termination claims remain proved.'},
 67:{reviewer:'/root/gate_url_linear',path:`${base}/step3-lebesgue67-owner-repair-report.json`,ids:['thm-ale-one-dimensional-reynolds-transport-identity','thm-ale-reynolds-transport-identity'],notes:'Published Lebesgue-criterion converse Proof3.2 is surgically corrected to use the high-oscillation grid cells and null grid skeleton. The full iff and both independently checked ALE sufficient-direction uses are sound; no ALE source repair is required. Ordinary pre-edit published claim and current locally checked repair receipt are recorded separately.'},
};
const sourceCache=new Map();
const source=id=>{if(!sourceCache.has(id)){const raw=read(`items/${id}.md`,'utf8'),parts=splitFrontmatter(raw);sourceCache.set(id,{raw,body:parts.body,meta:yaml().parse(parts.fm)});}return sourceCache.get(id);};
for(const batch of [11,17,54,63,67]){
 const manifest=`research/${run}-batch-${batch}.pages.json`,pages=JSON.parse(read(manifest));
 for(const p of pages){
  const pagePath=`library/${p.category}/${p.id}.md`,meta=yaml().parse(splitFrontmatter(read(pagePath,'utf8')).fm),placed=[...(meta.items??[]),...(meta.examples??[])];
  if(placed.length!==new Set(placed).size)throw Error('duplicate placement');
  const old=new Map(p.items.map(i=>[i.id,i]));
  for(const id of old.keys())if(!placed.includes(id))throw Error('Dropped original '+id);
  p.items=placed.map(id=>{const s=source(id);if(s.meta.status!=='draft')throw Error('Not owned draft '+id);const row={...old.get(id)};
   if(!old.has(id))throw Error('Native addition must already have authentic manifest '+id);
   for(const key of ['id','kind','title','deps','justified_by','provenance','sources','generation']){if(s.meta[key]!==undefined)row[key]=s.meta[key];else delete row[key];}
   for(const h of SOURCE_SECTIONS){const claim=sourceSectionText(s.body,h)?.trim();if(claim){row.statement=claim;break;}}
   return row;});
 }
 save(manifest,JSON.stringify(pages,null,2)+'\n');
 const contractPath=`research/${run}-batch-${batch}.proof-contracts.json`,j=JSON.parse(read(contractPath)),e=mathEvidence[batch];
 if(!exists(e.path))throw Error('Missing actual owner report');
 for(const id of e.ids){const c=j.contracts[id];if(!c)throw Error('Missing contract '+id);if(c.risk_review)c.prior_risk_reviews=[...(c.prior_risk_reviews??[]),c.risk_review];c.risk_review={status:'complete',reviewer:e.reviewer,notes:e.notes,owner_evidence:e.path,native_execution_credit:false};}
 if(batch===63){const evidence=`${base}/step3-curved63-historical-owner-resolution-proposal.json`;if(!exists(evidence))throw Error('Missing recovered proof review');for(const id of ['ex-isoparametric-unit-disk-mesh','lem-curved-boundary-lift-residual']){const c=j.contracts[id];if(c.risk_review)c.prior_risk_reviews=[...(c.prior_risk_reviews??[]),c.risk_review];c.risk_review={status:'complete',reviewer:'/root/gate_coverage_source_kinds',notes:'The exact full original source was recovered as inert source text from the immutable reader log and its frozen pre-reader raw hash verified. Same owner reviewed the complete historical delta, current proof and all actual supplier/consumer interfaces. Native square-domain amendment is retained; no historical uncertainty remains for acceptance. Original native mathematical review and historical hold remain preserved in prior_risk_reviews and the native report.',owner_evidence:evidence,native_execution_credit:false};}}
 save(contractPath,JSON.stringify(j,null,2)+'\n');
}
write(receipt,JSON.stringify({version:1,run,at:new Date().toISOString(),changes,archive,scope:'Completed owner source metadata and explicitly attributed current risk reviews in11/17/54/63/67 only. Source content, native results/reports and frozen observations unchanged. Contract citations/derivations and dependency levels still require current integration; no gate or native acceptance credit.',native_coverage_granted:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({changed:changes.length,receipt}));
