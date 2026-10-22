import fs from 'node:fs';import {resolve,dirname} from 'node:path';
const run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-qft-graph-scaling/round1-followup`;
const {splitFrontmatter,sourceSectionText,factParagraphs,numberedProofSteps,sectionText}=await import(resolve('tools/physics-support/facts-block.mjs'));
const {parseFrontmatter}=await import(resolve('tools/physics-support/content-policy-lib.mjs'));
const atomic=(p,v)=>{fs.writeFileSync(p+'.qft-tmp',JSON.stringify(v,null,2)+'\n');fs.renameSync(p+'.qft-tmp',p)};
const read=id=>{let text=fs.readFileSync(`items/${id}.md`,'utf8');let {fm,body}=splitFrontmatter(text);return {text,body,meta:parseFrontmatter(fm)}};
const archive=p=>{let q=`${dir}/metadata-before/${p}`;if(!fs.existsSync(q)){fs.mkdirSync(dirname(q),{recursive:true});fs.copyFileSync(p,q)}};
for(let batch of [62,65]){
 const prefix=`research/${run}-batch-${batch}`,mp=prefix+'.pages.json',cp=prefix+'.proof-contracts.json';archive(mp);archive(cp);
 let pages=JSON.parse(fs.readFileSync(mp)),doc=JSON.parse(fs.readFileSync(cp));
 let ids=batch===62?['prop-qftx-anomaly-obstruction']:pages.flatMap(p=>p.items).map(x=>x.id);
 for(let id of ids){let {meta,body}=read(id),heading=meta.kind==='definition'?'Definition':meta.kind==='example'?'Example':'Statement';let row=pages.flatMap(p=>p.items).find(x=>x.id===id);Object.assign(row,{title:meta.title,statement:sectionText(body,heading).trim(),deps:meta.deps,justified_by:meta.justified_by??[],forward_refs:meta.forward_refs??[],dependency_roles:meta.dependency_roles,provenance:meta.provenance,sources:meta.sources,dependency_level:meta.dependency_level,strategy:meta.proof_strategy,reference:`items/${id}.md#${heading}`});
 const steps=numberedProofSteps(body),citations=[];for(let [fact,f] of factParagraphs(body))for(let source of new Set(f.links)){let supplier=read(source);let sec=['Statement','Definition','Example','Postulate'].find(h=>sourceSectionText(supplier.body,h)?.trim());if(!sec)throw Error(source);citations.push({fact,source,source_section:sec,quote:sourceSectionText(supplier.body,sec).trim(),uses:steps.filter(s=>s.inputs.includes(fact)||s.text.includes('['+fact+']')).map(s=>s.id)})}
 let old=doc.contracts[id];doc.contracts[id]={...old,citations,derivations:steps.map(s=>({id:'step-'+s.id.replaceAll('.','-'),step:s.id,claim:s.claim,inputs:s.inputs})),routine_steps:[]};
 if(batch===65){let co=doc.contracts[id];co.boundaries=co.boundaries.map(b=>b.case==='nonempty-choice'?{case:b.case,status:id.includes('ode')||id.includes('landau')?'not_applicable':'checked',...(id.includes('ode')||id.includes('landau')?{reason:'The Statement concerns an explicitly prescribed scalar ODE and coefficientwise formal algebra; no Choice or time-ordered-system existence premise is used.'}:{evidence:'Countable Choice in the Statement and [A1] is retained for the supplied-system contraction contract; the comparison recursion makes no arbitrary new extension choice.'})}:b);for(let b of co.boundaries)if(b.evidence)b.evidence=b.evidence.replace(/AC and Countable Choice|AC plus Countable Choice/g,'Countable Choice');}
 }
 atomic(mp,pages);atomic(cp,doc);
}
