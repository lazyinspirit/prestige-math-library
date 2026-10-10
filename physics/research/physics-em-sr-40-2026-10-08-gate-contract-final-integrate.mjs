import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { splitFrontmatter, sourceSectionText, numberedProofSteps } from '../../tools/physics-support/facts-block.mjs';
const prefix='physics/research/physics-em-sr-40-2026-10-08';
const before=JSON.parse(readFileSync(prefix+'-gate-contract-final-before.json'));
const hashes=JSON.parse(readFileSync(prefix+'-gate-contract-final-preimage-hashes.json'));
const document=structuredClone(before), changes=[];
const normalise=s=>s.replace(/\r?\n/g,' ').replace(/\s+/g,' ').trim();
const source=(id,section)=>sourceSectionText(splitFrontmatter(readFileSync(`physics/items/${id}.md`,'utf8')).body,section);
const steps=id=>numberedProofSteps(splitFrontmatter(readFileSync(`physics/items/${id}.md`,'utf8')).body);
function change(id,path,parent,key,value,authority){
 if(JSON.stringify(parent[key])===JSON.stringify(value))return;
 changes.push({id,path,before:structuredClone(parent[key]),after:structuredClone(value),authority});parent[key]=structuredClone(value);
}
const material=JSON.parse(readFileSync(prefix+'-step3b-round1-em-material-two-contracts-proposal.json')).contracts['pthm-em-material-stationary-jumps'];
const guide=JSON.parse(readFileSync(prefix+'-step3b-round1-em-guide-contracts-proposal.json')).contracts;
for(const [id,fact,step] of [['lem-em-parameter-integrals','F1','3.1'],['lem-em-exterior-outgoing-scalar-uniqueness','L4','1.1']]){
 const authored=steps(id).find(s=>s.id===step);if(!authored || !new RegExp('\\b'+fact+'\\b').test(authored.text))throw Error(`unverified existing tag ${id} ${step} ${fact}`);
 const entry=document.contracts[id];entry.citations.forEach((c,i)=>{if(c.fact===fact)change(id,`citations[${i}].uses`,c,'uses',[...new Set([...c.uses,step])],`current frozen carrier step ${step} literal ${fact} tag; existing reviewed derivation already names this supplier`);});
 const d=entry.derivations.find(d=>d.step===step);change(id,`derivations[${d.id}].inputs`,d,'inputs',[...new Set([...d.inputs,fact])],`current frozen carrier literal step ${step} inputs`);
}
{
 const id='pthm-em-material-stationary-jumps',entry=document.contracts[id];
 entry.citations.forEach((c,i)=>{const p=material.citations.find(p=>p.fact===c.fact&&p.source===c.source);if(!p)throw Error('material proposal citation missing');change(id,`citations[${i}].uses`,c,'uses',p.uses,'completed em-material-two-contracts-proposal; preserve current quote/review fields');});
 const authored=steps(id),map=new Map(authored.map(s=>[s.id,s]));
 const proposed=material.derivations.map(d=>{if(!map.has(d.step))throw Error('proposal step absent');return {...d,claim:map.get(d.step).claim};});
 change(id,'derivations',entry,'derivations',proposed,'completed em-material-two-contracts-proposal step topology; literal claims refreshed from frozen carrier only');
 const index=entry.boundaries.findIndex(b=>b.case==='zero');change(id,`boundaries[${index}]`,entry.boundaries,index,material.boundaries.find(b=>b.case==='zero'),'completed em-material-two-contracts-proposal corrected 2.1 extraction binding');
}
for(const id of ['def-em-guide-cavity-geometry','pthm-em-rectangular-mode-candidates','pthm-em-open-rectangular-guide-completeness','pthm-em-guide-completeness']){
 const entry=document.contracts[id],index=entry.boundaries.findIndex(b=>b.case==='empty');
 change(id,`boundaries[${index}]`,entry.boundaries,index,guide[id].boundaries.find(b=>b.case==='empty'),'completed em-guide-contracts-proposal empty-boundary disposition only; preserve other newer fields');
}
const errors=JSON.parse(readFileSync(prefix+'-gate-contract-final-before-strict.json')).errors;
const spectral=JSON.parse(readFileSync(prefix+'-step3b-round1-em7-spectral-consumer-citation-proposals.json')).citations;
for(const error of errors.filter(e=>e.code==='citation-quote-mismatch')){
 const fact=error.message.split(' ')[0],entry=document.contracts[error.id];
 for(const [i,c]of entry.citations.entries()){
  if(c.fact!==fact)continue;
  const section=source(c.source,c.source_section);if(!section)throw Error(`missing existing source section ${c.source} ${c.source_section}`);
  if(normalise(section).includes(normalise(c.quote)))continue;
  const approved=[...(guide[error.id]?.citations??[]),...(error.id==='pthm-em-material-stationary-jumps'?material.citations:[]),...spectral.filter(p=>p.consumer===error.id)]
    .find(p=>p.fact===c.fact&&p.source===c.source&&p.source_section===c.source_section&&normalise(section).includes(normalise(p.quote)));
  change(error.id,`citations[${i}].quote`,c,'quote',approved?.quote??section.trim(),approved?'completed current-matching guide/spectral citation proposal; quote field only':'exact current frozen supplier named source section; literal metadata refresh of already-reviewed citation, no restatement/use change');
 }
}
if(process.argv.includes('--commit')){
 for(const[path,pin]of Object.entries(hashes))if(createHash('sha256').update(readFileSync(path)).digest('hex')!==pin)throw Error(`concurrent contract change ${path}`);
 const changedIds=new Set(changes.map(c=>c.id)),written=[];
 for(const path of Object.keys(hashes)){
  const batch=JSON.parse(readFileSync(path));const ids=batch.scope.filter(id=>changedIds.has(id));if(!ids.length)continue;
  for(const id of ids)batch.contracts[id]=document.contracts[id];
  writeFileSync(path,JSON.stringify(batch,null,2)+'\n');written.push(path);
 }
 writeFileSync(prefix+'-gate-contract-final-written.json',JSON.stringify(written,null,2)+'\n');
}
writeFileSync(prefix+'-gate-contract-final-after.json',JSON.stringify(document,null,2)+'\n');
writeFileSync(prefix+'-gate-contract-final-changes.json',JSON.stringify(changes,null,2)+'\n');
console.log(JSON.stringify({mode:process.argv.includes('--commit')?'committed':'prepared',changed_fields:changes.length,changed_items:[...new Set(changes.map(c=>c.id))]}));
