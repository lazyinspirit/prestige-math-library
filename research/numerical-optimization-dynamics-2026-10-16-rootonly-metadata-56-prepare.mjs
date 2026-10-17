import fs from 'node:fs';import path from 'node:path';
import {factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter,SOURCE_SECTIONS} from '../tools/facts-block.mjs';
import {frontmatterList} from '../tools/frontmatter-list.mjs';
const R='numerical-optimization-dynamics-2026-10-16',dir=`research/${R}-rootonly-metadata-56-data`;
if(fs.existsSync(dir))throw Error('Preview exists; refusing overwrite');for(const d of ['before','proposed','sources'])fs.mkdirSync(`${dir}/${d}`,{recursive:true});
const sourceCache=new Map(),guards=new Set(),changes=[];const source=id=>{const p=`items/${id}.md`;if(!sourceCache.has(p))sourceCache.set(p,fs.readFileSync(p));return sourceCache.get(p).toString();};
function set(o,k,v,locus,inputIds=[]){if(JSON.stringify(o[k])!==JSON.stringify(v)){changes.push({locus,before:o[k],after:v});o[k]=v;for(const id of inputIds)guards.add(`items/${id}.md`);}}
const p=`research/${R}-batch-56.proof-contracts.json`,raw=fs.readFileSync(p),doc=JSON.parse(raw);
for(const[id,c]of Object.entries(doc.contracts)){
 const body=splitFrontmatter(source(id)).body,steps=numberedProofSteps(body),map=new Map(steps.map(s=>[s.id,s]));
 for(const field of ['derivations','routine_steps'])for(const[i,d]of(c[field]??[]).entries()){
  const s=map.get(d.step);if(!s)continue;set(d,'claim',s.claim,`${p}#/contracts/${id}/${field}/${i}/claim`,[id]);
  if(JSON.stringify([...d.inputs].sort())!==JSON.stringify([...s.inputs].sort()))set(d,'inputs',s.inputs,`${p}#/contracts/${id}/${field}/${i}/inputs`,[id]);
 }
 for(const[i,a]of c.citations.entries()){
  const quote=sourceSectionText(splitFrontmatter(source(a.source)).body,a.source_section)?.trim();if(!quote)throw Error('Missing section '+a.source);
  if(!quote.includes(a.quote.trim()))set(a,'quote',quote,`${p}#/contracts/${id}/citations/${i}/quote`,[a.source]);
 }
 for(const fact of factParagraphs(body).values())for(const src of fact.links){
  if(c.citations.some(a=>a.fact===fact.label&&a.source===src))continue;
  const supplierBody=splitFrontmatter(source(src)).body;let section,quote;for(const s of SOURCE_SECTIONS){const t=sourceSectionText(supplierBody,s)?.trim();if(t){section=s;quote=t;break;}}
  if(!quote)throw Error('Missing supplier '+src);
  const uses=steps.filter(s=>s.inputs.includes(fact.label)||new RegExp(`\\b${fact.label}\\b`).test(s.text)).map(s=>s.id),a={fact:fact.label,source:src,source_section:section,quote,uses};
  changes.push({locus:`${p}#/contracts/${id}/citations/${c.citations.length}`,operation:'append-current-fact-supplier',before:null,after:a});c.citations.push(a);guards.add(`items/${id}.md`);guards.add(`items/${src}.md`);
 }
}
const outputs=[{p,raw,out:Buffer.from(JSON.stringify(doc,null,2)+'\n')}];
const mp=`research/${R}-batch-56.pages.json`,mraw=fs.readFileSync(mp),manifest=JSON.parse(mraw);
for(const page of manifest)for(const item of page.items){const fm=splitFrontmatter(source(item.id)).fm;const deps=frontmatterList(fm,'deps');if(JSON.stringify([...deps].sort())!==JSON.stringify([...item.deps].sort()))set(item,'deps',deps,`${mp}#${item.id}/deps`,[item.id]);}
const mout=Buffer.from(JSON.stringify(manifest,null,2)+'\n');if(!mraw.equals(mout))outputs.push({p:mp,raw:mraw,out:mout});
for(const o of outputs){fs.writeFileSync(`${dir}/before/${path.basename(o.p)}`,o.raw);fs.writeFileSync(`${dir}/proposed/${path.basename(o.p)}`,o.out);}
for(const p of guards)fs.writeFileSync(`${dir}/sources/${path.basename(p)}`,sourceCache.get(p));
const preview={run:R,purpose:'ROOTONLY current-source metadata mirror preview; no canonical metadata edits or mathematical acceptance',files:outputs.map(o=>o.p),changes,source_guards:[...guards].sort(),note:'Exact existing claim/tag mirrors and supplier quotes only, plus three actual missing native F9/F2/F3 supplier citations and actual manifest prerequisite additions. No verdict, verification, risk, boundary, numeric-level or native-history edits.'};fs.writeFileSync(`${dir}/preview.json`,JSON.stringify(preview,null,2)+'\n');console.log(JSON.stringify({files:preview.files,changes:changes.map(c=>c.locus),source_guards:preview.source_guards},null,2));
