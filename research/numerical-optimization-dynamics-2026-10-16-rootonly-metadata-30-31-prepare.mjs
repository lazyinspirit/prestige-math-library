import fs from 'node:fs';
import path from 'node:path';
import {factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter} from '../tools/facts-block.mjs';
const R='numerical-optimization-dynamics-2026-10-16';
const dir=`research/${R}-rootonly-metadata-30-31-data`;
if(fs.existsSync(dir))throw Error('Preview already exists; do not overwrite it');
for(const d of ['before','proposed','sources'])fs.mkdirSync(`${dir}/${d}`,{recursive:true});
const inputs=new Map(),changes=[];
function source(id){const p=`items/${id}.md`;const b=fs.readFileSync(p);inputs.set(p,b);return b.toString();}
function change(obj,key,value,locus){if(JSON.stringify(obj[key])!==JSON.stringify(value)){changes.push({locus,before:obj[key],after:value});obj[key]=value;}}
const outputs=[];
for(const batch of [30,31]){
 const filename=`${R}-batch-${batch}.proof-contracts.json`,p=`research/${filename}`,raw=fs.readFileSync(p),doc=JSON.parse(raw);
 for(const [id,c] of Object.entries(doc.contracts)){
  const md=source(id),body=splitFrontmatter(md).body,steps=numberedProofSteps(body),byStep=new Map(steps.map(s=>[s.id,s]));
  for(const [i,d] of c.derivations.entries()){
   const s=byStep.get(d.step);if(!s)continue;
   change(d,'claim',s.claim,`${p}#/contracts/${id}/derivations/${i}/claim`);
   if(batch===31&&id==='ex-binomial-guard-prevents-invalid-counts-but-changes-noise'&&d.step==='1.1')change(d,'inputs',s.inputs,`${p}#/contracts/${id}/derivations/${i}/inputs`);
  }
  for(const [i,cit] of c.citations.entries()){
   const section=sourceSectionText(splitFrontmatter(source(cit.source)).body,cit.source_section)?.trim();
   if(!section)throw Error(`Missing source section ${cit.source}`);
   if(!section.includes(cit.quote.trim()))change(cit,'quote',section,`${p}#/contracts/${id}/citations/${i}/quote`);
  }
  if(batch===31&&id==='ex-binomial-guard-prevents-invalid-counts-but-changes-noise'){
   const src='alg-critical-reaction-binomial-guarded-tau-leaping';
   if(!c.citations.some(a=>a.fact==='A1'&&a.source===src)){
    const cit={fact:'A1',source:src,source_section:'Definition',quote:sourceSectionText(splitFrontmatter(source(src)).body,'Definition').trim(),uses:['1.1']};
    const insert=c.citations.findIndex(a=>a.fact==='A1');
    c.citations.splice(insert,0,cit);changes.push({locus:`${p}#/contracts/${id}/citations/${insert}`,before:null,after:cit,operation:'insert-A1-supplier'});
   }
  }
 }
 const out=Buffer.from(JSON.stringify(doc,null,2)+'\n');if(!raw.equals(out))outputs.push({p,filename,raw,out});
}
const filename=`${R}-batch-30.pages.json`,p=`research/${filename}`,raw=fs.readFileSync(p),doc=JSON.parse(raw);
const item=doc.flatMap(p=>p.items).find(i=>i.id==='thm-adaptive-em-predictable-grid-strong-error');
if(!item.statement.includes('maximum step h'))throw Error('Manifest old summary changed');
change(item,'statement',item.statement.replace('maximum step h','step lengths bounded by deterministic 0<h<=T (one may take h=min{h_max,T})'),`${p}#strong-error/statement`);
outputs.push({p,filename,raw,out:Buffer.from(JSON.stringify(doc,null,2)+'\n')});
for(const o of outputs){fs.writeFileSync(`${dir}/before/${o.filename}`,o.raw);fs.writeFileSync(`${dir}/proposed/${o.filename}`,o.out);}
for(const [p,b] of inputs)fs.writeFileSync(`${dir}/sources/${path.basename(p)}`,b);
const preview={run:R,purpose:'ROOT ONLY metadata mirror proposal; no mathematical acceptance or canonical metadata edits',files:outputs.map(o=>o.p),changes,source_guards:[...inputs.keys()],actual_given:source('thm-adaptive-em-predictable-grid-strong-error').match(/\*\*Given:\*\*[^\n]*/)?.[0],note:'Contracts contain no Given text field; given remains the actual source assumption. Derivation claims and explicit tag inputs mirror the current source. All untouched keys and recorded review/risk/verification fields preserved.'};
fs.writeFileSync(`${dir}/preview.json`,JSON.stringify(preview,null,2)+'\n');
console.log(JSON.stringify({directory:dir,files:outputs.map(o=>o.p),changes:changes.map(x=>x.locus),sources:inputs.size},null,2));
