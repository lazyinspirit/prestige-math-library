import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../tools/item-hash.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`;
const receipt=`${base}/step2-gate-boundary-integration.json`,archive=`${base}/step2-gate-boundary-contracts-before`;
if(existsSync(receipt))throw Error('Already integrated');
const norm=s=>String(s).replace(/\s+/g,' ').trim();
const hash=s=>createHash('sha256').update(s).digest('hex');
const docs=new Map(),changes=[],defects=[];
function document(batch){if(!docs.has(batch)){const path=`research/${run}-batch-${batch}.proof-contracts.json`,raw=readFileSync(path,'utf8');docs.set(batch,{path,raw,data:JSON.parse(raw)});}return docs.get(batch);}
for(let lane=1;lane<=12;lane++){
 const packet=JSON.parse(readFileSync(`${base}/step2-boundary-packets/lane-${lane}.json`));
 const path=`${base}/step2-boundary-reviews/lane-${lane}.json`,review=JSON.parse(readFileSync(path));
 const items=new Map(review.items.map(i=>[i.id,i]));
 if(items.size!==packet.items.length||review.items.length!==packet.items.length)throw Error(`lane${lane} item count`);
 for(const input of packet.items){
  const result=items.get(input.id);if(!result)throw Error(`Missing ${input.id}`);
  const source=readFileSync(input.source,'utf8'),guard=itemHashGuard(source),cases=new Map(result.cases.map(r=>[r.case,r]));
  if(cases.size!==input.flagged_rows.length||result.cases.length!==input.flagged_rows.length)throw Error(`case count ${input.id}`);
  const doc=document(input.batch),contract=doc.data.contracts[input.id];
  for(const flag of input.flagged_rows){
   const old=flag.original,r=cases.get(old.case);if(!r)throw Error(`Missing ${input.id}/${old.case}`);
   if(r.input_status!==old.status||![old.reason,old.evidence].filter(x=>typeof x==='string').includes(r.input_text))throw Error(`Original mismatch ${input.id}/${old.case}`);
   const index=contract.boundaries.findIndex(x=>x.case===old.case),current=contract.boundaries[index];
   if(index<0||JSON.stringify(current)!==JSON.stringify(old))throw Error(`Contract changed ${input.id}/${old.case}`);
   if(!['checked','not_applicable'].includes(r.status)||!['replace','uphold'].includes(r.decision))throw Error(`Invalid decision ${input.id}`);
   if(typeof r.review_reason!=='string'||r.review_reason.trim().length<40)throw Error(`Short reason ${input.id}/${old.case}`);
   if(!Array.isArray(r.source_excerpts)||!r.source_excerpts.length)throw Error(`No source excerpts ${input.id}/${old.case}`);
   const excerptSources=new Map([[input.source,source]]);
   for(const loc of r.source_locations??[]){const path=String(loc).replace(/:\d+(?::\d+)?$/,'');if(existsSync(path)&&path.endsWith('.md'))excerptSources.set(path,readFileSync(path,'utf8'));}
   for(const q of r.source_excerpts){
    const text=typeof q==='string'?q:q.text??q.excerpt;
    const path=typeof q==='object'?(q.path??q.location?.replace(/:\d+(?::\d+)?$/,'')):null;
    const candidates=path?[excerptSources.get(path)??(existsSync(path)?readFileSync(path,'utf8'):'')]:[...excerptSources.values()];
    if(typeof text!=='string'||!candidates.some(s=>norm(s).includes(norm(text))))throw Error(`Source excerpt mismatch ${input.id}/${old.case}`);
   }
   if(!r.source_locations?.length)throw Error(`No source anchor ${input.id}`);
   if(r.mathematical_defect)defects.push({id:input.id,case:old.case,defect:r.mathematical_defect,review:path});
   let text=r.status==='checked'?r.evidence:r.reason;
   if(typeof text!=='string'||!text.trim())throw Error(`Missing disposition ${input.id}/${old.case}`);
   // Attach an explicit current claim heading when a reviewer supplied its
   // exact section excerpt but wrote the explanation without its heading.
   if(r.status==='checked'&&!/\b(?:Statement|Definition|Example|Counterexample|step\s+\d+\.\d+)\b/.test(text)){
    const heading=/^## (Statement(?: refuted)?|Definition|Example|Counterexample)\s*$/m.exec(source)?.[1]??(/^kind:\s*remark\s*$/m.test(source)&&/^## Remarks\s*$/m.test(source)?'Descriptive statement in Remarks':null);
    if(!heading)throw Error(`No canonical evidence anchor ${input.id}`);
    text=`${heading}: ${text}`;
   }
   const by=r.reviewer??result.reviewer??review.reviewer;if(typeof by!=='string'||!by.trim())throw Error(`No reviewer ${input.id}`);
   const next={case:old.case,status:r.status,[r.status==='checked'?'evidence':'reason']:text};
   const bound={upheld:true,by,reason:r.review_reason,item_sha256:guard,row_sha256:hash(JSON.stringify({case:next.case,status:next.status,text})),evidence_file:path};
   next.template_review={...bound};next.reviewed={...bound};
   contract.boundaries[index]=next;
   changes.push({id:input.id,batch:input.batch,case:old.case,old_status:old.status,status:r.status,reviewer:by,evidence_file:path,item_sha256:guard});
  }
 }
}
// Source findings must have a separately completed repair/disposition. The
// receipt retains them; this integration grants no mathematical acceptance.
const known=new Map([
 ['lem-na-fortin-transfers-discrete-infsup','step2-fortin-repair-report.json'],
 ['lem-erf-series-geometric-tail','step2-special-zero-repair-report.json'],
 ['lem-fresnel-series-geometric-tail','step2-special-zero-repair-report.json'],
 ['lem-na-periodic-mps-to-open-tt','step2-mps-zero-repair-report.json'],
 ['thm-afem-p1-residual-reliability-and-local-efficiency','step2-afem-local-repair-report.json'],
 ['lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound','step2-lane10-source-repair-report.json'],
 ['lem-na-nedelec-edge-unisolvence','step2-lane10-source-repair-report.json'],
 ['ex-smooth-scattered-surface-matern-rate','step2-matern-index-repair-report.json'],
 ['prop-two-species-continuous-and-discrete-turing-criterion','step2-turing-trace-repair-report.json'],
 ['thm-pe26-condition-number-2d-polylogarithmic','step2-condition-number-repair-report.json'],
 ['ex-diagonal-tensor-has-large-minimal-tt-ranks','step2-diagonal-tt-repair-report.json'],
 ['thm-na-continuous-stokes-divergence-infsup','step2-stokes-normalization-repair-report.json'],
 ['lem-pe26-preconditioned-operator-norm-bound','step2-pe26-zero-repair-report.json'],
 ['thm-hp-simplex-p-dependent-face-trace-inverse','step2-hp-trace-choice-repair-report.json'],
 ['lem-afem-data-oscillation-reduction-under-marked-refinement','step2-afem-oscillation-repair-report.json'],
 ['thm-maxwell-yee-strict-cfl-modified-energy','step2-yee-zero-repair-report.json'],
]);
for(const d of defects)if(!known.has(d.id)||!existsSync(`${base}/${known.get(d.id)}`))throw Error(`Undispositioned source defect ${d.id}: ${d.defect}`);
for(const d of docs.values())if(readFileSync(d.path,'utf8')!==d.raw)throw Error(`Concurrent contract change ${d.path}`);
mkdirSync(archive,{recursive:true});
for(const [batch,d]of docs){writeFileSync(`${archive}/batch-${batch}.json`,d.raw,{flag:'wx'});writeFileSync(d.path,JSON.stringify(d.data,null,2)+'\n');}
writeFileSync(receipt,JSON.stringify({run,at:new Date().toISOString(),native_review_coverage:false,archive,lanes:12,items:new Set(changes.map(r=>r.id)).size,rows:changes.length,source_findings:defects,changes},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({items:new Set(changes.map(r=>r.id)).size,rows:changes.length,contracts:docs.size,findings:defects.length}));
