import {readFileSync as read,writeFileSync as write,copyFileSync as copy} from 'node:fs';
import {createHash} from 'node:crypto';
import {numberedProofSteps,sectionText} from '../../tools/physics-support/facts-block.mjs';
const root=new URL('../../',import.meta.url),base=new URL('./',import.meta.url),groups=JSON.parse(read(new URL('contract-scope.json',base))),seeds=JSON.parse(read(new URL('consumer-closure.json',base))).seeds;
const add={
'lem-tgr-constant-linear-energy-causality':[['F6','def-schwartz-space-and-its-seminorms','Definition']],
'lem-tgr-perfect-linear-causality':[['F4','def-schwartz-space-and-its-seminorms','Definition']],
'lem-tgr-bulk-linear-causality':[['F4','def-schwartz-space-and-its-seminorms','Definition']],
'ex-tgrmath-bulk-speed-parameters':[['F2','lem-tgr-bulk-relaxation-entropy','Statement']]
};
const sha=x=>createHash('sha256').update(x).digest('hex'),changes=[];
for(const [batch,ids]of Object.entries(groups)){
 const path=`research/physics-remaining-80-2026-10-17-batch-${batch}.proof-contracts.json`,file=new URL(path,root),before=read(file),doc=JSON.parse(before),old=structuredClone(doc),details=[];
 for(const id of ids){
  const e=doc.contracts[id],text=read(new URL(`items/${id}.md`,root),'utf8'),steps=numberedProofSteps(text);
  if(seeds.includes(id)){
   for(const row of e.derivations){const step=steps.find(s=>s.id===row.step);if(!step)throw Error('Missing step '+id+' '+row.step);if(row.claim!==step.claim||JSON.stringify(row.inputs)!==JSON.stringify(step.inputs)){details.push({id,kind:'derivation',step:row.step});row.claim=step.claim;row.inputs=step.inputs;}}
  }
  for(const [fact,source,source_section]of add[id]??[]){
   if(e.citations.some(c=>c.fact===fact&&c.source===source))continue;
   const quote=sectionText(read(new URL(`items/${source}.md`,root),'utf8'),source_section).trim(),uses=steps.filter(s=>s.inputs.includes(fact)).map(s=>s.id);if(!uses.length)throw Error('Unused fact '+fact);
   e.citations.push({fact,source,source_section,quote,uses});details.push({id,kind:'new-citation',fact,source,uses});
  }
  for(const c of e.citations){
   if(seeds.includes(id)){const uses=steps.filter(s=>s.inputs.includes(c.fact)).map(s=>s.id);if(JSON.stringify(c.uses)!==JSON.stringify(uses)){if(!uses.length)throw Error('Unexpected empty uses');details.push({id,kind:'citation-uses',fact:c.fact,source:c.source,before:c.uses,after:uses});c.uses=uses;}}
   if(!seeds.includes(c.source)&&c.source!=='def-tgr-framework-units')continue;
   const actual=sectionText(read(new URL(`items/${c.source}.md`,root),'utf8'),c.source_section).trim();if(!actual.includes(c.quote.trim())){details.push({id,kind:'quote-refresh',fact:c.fact,source:c.source});c.quote=actual;}
  }
 }
 if(!details.length)continue;
 for(const id of ids)for(const [key,val]of Object.entries(old.contracts[id]))if(!['citations','derivations'].includes(key)&&JSON.stringify(val)!==JSON.stringify(doc.contracts[id][key]))throw Error('Unrelated field mutation');
 for(const [id,val]of Object.entries(old.contracts))if(!ids.includes(id)&&JSON.stringify(val)!==JSON.stringify(doc.contracts[id]))throw Error('Unscoped mutation');
 if(!read(file).equals(before))throw Error('Concurrent contract writer '+path);
 copy(file,new URL(`before/batch-${batch}.proof-contracts.json`,base));write(file,JSON.stringify(doc,null,2)+'\n');changes.push({path,before_raw_sha256:sha(before),current_raw_sha256:sha(read(file)),details});
}
write(new URL('worksheet-sync.json',base),JSON.stringify({recorded_at:new Date().toISOString(),changes,preserved:'All unrelated contracts, every boundary and bound review, status/hash stamps, risk records, finite checks and other keys; exactoriginal56 scientific derivations/citations and compatible consumer quote rows only.'},null,2)+'\n');console.log(JSON.stringify(changes.map(r=>({file:r.path,changes:r.details.length}))));
