import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {splitFrontmatter,sourceSectionText,factParagraphs,numberedProofSteps,SOURCE_SECTIONS} from '../../../../tools/physics-support/facts-block.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',base=`research/${run}-resumed-orchestration/session-recovery-20261012/batch2-balance-repair`;
const changed=new Set(['lem-cm-piecewise-c1-jump-derivative','thm-cm-compact-continuation-for-locally-lipschitz-odes','thm-cm-work-energy-balance','thm-cm-impulse-restitution-and-energy-loss','ex-cm-balances-continuation-boundary-checks','pthm-cm15-impact-balance','cex-cm15-restitution-above-one-increases-energy']);
const load=id=>splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body;
const tokens=text=>[...text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].map(m=>m[1]??m[2]);
const patches=[];
for(const batch of [2,31,19,22]){
 const path=`research/${run}-batch-${batch}.proof-contracts.json`,doc=JSON.parse(readFileSync(path));
 if([2,31].includes(batch)){
  for(const id of doc.scope){
   if(!changed.has(id))continue;
   const body=load(id),facts=factParagraphs(body),steps=numberedProofSteps(body),entry=doc.contracts[id];entry.citations=[];
   for(const [fact,record] of facts){
    const uses=steps.filter(s=>tokens(s.text).includes(fact)).map(s=>s.id);
    for(const source of [...new Set(record.links)]){
     const supplier=load(source),section=[...SOURCE_SECTIONS].find(s=>sourceSectionText(supplier,s)?.trim());if(!section)throw Error(`Missing section ${source}`);
     entry.citations.push({fact,source,source_section:section,quote:sourceSectionText(supplier,section).trim(),uses});
    }
   }
   entry.derivations=steps.map(s=>({id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs:[...new Set([...s.inputs,...tokens(s.text)])]}));entry.routine_steps=[];
   if(id==='cex-cm15-restitution-above-one-increases-energy')for(const boundary of entry.boundaries){if(boundary.status==='checked')boundary.evidence=`Statement refuted and final step 5.1: ${boundary.evidence.replace(/(?:step\s*)?\d+\.\d+/g,'the displayed local derivation')}`;}
  }
 }else for(const [id,entry] of Object.entries(doc.contracts))for(let n=0;n<(entry.citations??[]).length;n++){
  const row=entry.citations[n];if(row.source!=='thm-cm-work-energy-balance')continue;
  const before=structuredClone(row);row.quote=sourceSectionText(load(row.source),'Statement').trim();patches.push({file:path,item:id,citation_index:n,before,after:row});
 }
 mkdirSync(`${base}/metadata-candidates`,{recursive:true});writeFileSync(`${base}/metadata-candidates/batch-${batch}.proof-contracts.json`,JSON.stringify(doc,null,2)+'\n');
}
writeFileSync(`${base}/outside-contract-entry-guards.json`,JSON.stringify(patches,null,2)+'\n');
