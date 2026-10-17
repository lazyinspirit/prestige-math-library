import {readFileSync as read,writeFileSync as write,copyFileSync as copy} from 'node:fs';
import {createHash} from 'node:crypto';
import {factParagraphs,numberedProofSteps,sectionText,splitFrontmatter} from '../../tools/physics-support/facts-block.mjs';
import {parseFrontmatter} from '../../tools/physics-support/content-policy-lib.mjs';
const root=new URL('../../',import.meta.url),base=new URL('./',import.meta.url),path='research/physics-remaining-80-2026-10-17-batch-70.proof-contracts.json',file=new URL(path,root),raw=read(file),doc=JSON.parse(raw),old=structuredClone(doc),changes=[];
const selected=['lem-tgr-even-radial-center-regularity','thm-tgr-tov-regular-center-local-existence','thm-tgr-constant-density-star-verified','thm-tgr-constrained-entropy-tov-criticality','cex-tgr-constant-density-critical-center','cex-tgr-incompressible-causal-transport'];
const sha=x=>createHash('sha256').update(x).digest('hex');
for(const id of selected){
 const text=read(new URL(`items/${id}.md`,root),'utf8'),facts=factParagraphs(text),steps=numberedProofSteps(text),e=doc.contracts[id];
 const currentPairs=new Set([...facts].flatMap(([fact,r])=>r.links.map(source=>fact+'|'+source)));
 e.citations=e.citations.filter(c=>{if(currentPairs.has(c.fact+'|'+c.source))return true;changes.push({id,kind:'retired-native-obsolete-citation',citation:c});return false;});
 for(const [fact,info]of facts)for(const source of info.links){
  const uses=steps.filter(s=>s.inputs.includes(fact)).map(s=>s.id);if(!uses.length)continue;
  let row=e.citations.find(c=>c.fact===fact&&c.source===source);
  const src=read(new URL(`items/${source}.md`,root),'utf8'),fm=parseFrontmatter(splitFrontmatter(src).fm),preferred=(fm.kind==='definition'||fm.kind==='algorithm')?'Definition':fm.kind==='example'?'Example':'Statement';
  if(!row){const quote=sectionText(src,preferred).trim();if(!quote)throw Error('Missing source section '+source);row={fact,source,source_section:preferred,quote,uses};e.citations.push(row);changes.push({id,kind:'actual-fact-citation',fact,source,uses});}
  else{
   const actual=sectionText(src,row.source_section).trim();if(!actual.includes(row.quote.trim())){if(!actual)throw Error('Missing existing section');changes.push({id,kind:'quote-refresh',fact,source});row.quote=actual;}
   if(JSON.stringify(row.uses)!==JSON.stringify(uses)){changes.push({id,kind:'actual-fact-uses',fact,source,before:row.uses,after:uses});row.uses=uses;}
  }
 }
 for(const d of e.derivations){
  const s=steps.find(s=>s.id===d.step);if(!s)throw Error('Step removed '+id+' '+d.step);
  // Preserve actual contextual earlier-step mentions as well as trailing proof tags.
  const refs=[...s.claim.matchAll(/\bstep\s+(\d+\.\d+)\b/g)].map(m=>'step '+m[1]);const inputs=[...new Set([...s.inputs,...refs])];
  if(d.claim!==s.claim||JSON.stringify(d.inputs)!==JSON.stringify(inputs)){changes.push({id,kind:'derivation-sync',step:d.step});d.claim=s.claim;d.inputs=inputs;}
 }
}
for(const [id,e]of Object.entries(old.contracts)){
 if(!selected.includes(id)){if(JSON.stringify(e)!==JSON.stringify(doc.contracts[id]))throw Error('Unrelated contract modified');continue;}
 for(const [k,v]of Object.entries(e))if(!['citations','derivations'].includes(k)&&JSON.stringify(v)!==JSON.stringify(doc.contracts[id][k]))throw Error('Unrelated worksheet field modified');
}
if(!read(file).equals(raw))throw Error('Concurrent worksheet edit');copy(file,new URL('before/batch-70.proof-contracts.json',base));write(file,JSON.stringify(doc,null,2)+'\n');write(new URL('worksheet-sync.json',base),JSON.stringify({recorded_at:new Date().toISOString(),path,before_raw_sha256:sha(raw),current_raw_sha256:sha(read(file)),selected,changes,preserved:'Every boundary, status/hash stamp, finite check, risk review and all unselected entries. Actual six native-repaired scientific citation/derivation fields only.'},null,2)+'\n');console.log('Scientific worksheet sync: '+changes.length+' precise records.');
