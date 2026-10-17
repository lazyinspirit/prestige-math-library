#!/usr/bin/env node
// ROOT ONLY: source-derived, surgical metadata projection; not a gate or acceptance.
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {splitFrontmatter, factParagraphs, numberedProofSteps, sourceSectionText, SOURCE_SECTIONS} from '../../tools/facts-block.mjs';
import {frontmatterList} from '../../tools/frontmatter-list.mjs';
const base=path.relative(process.cwd(),path.dirname(fileURLToPath(import.meta.url)));
const manifest='research/numerical-optimization-dynamics-2026-10-16-batch-53.pages.json';
const contracts='research/numerical-optimization-dynamics-2026-10-16-batch-53.proof-contracts.json';
const configPath=path.join(base,'metadata-mirror-config.json');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const digest=x=>sha(JSON.stringify(x));
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const save=(p,x)=>fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');
const guards=new Map();
function item(id){const p=`items/${id}.md`, raw=fs.readFileSync(p);guards.set(p,sha(raw));return splitFrontmatter(raw.toString());}
function supplier(id,section){const b=item(id).body;const selected=section??[...SOURCE_SECTIONS].find(s=>sourceSectionText(b,s)?.trim());const quote=sourceSectionText(b,selected)?.trim();if(!quote)throw Error(`No source section ${id}:${selected}`);return {source_section:selected,quote};}
// Same explicit-token rule as proof-contract.mjs; parsing remains owned by facts-block.
function uses(steps,label){return steps.filter(s=>[...s.text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].some(m=>m[2]===label)).map(s=>s.id);}
function get(doc,keys){return keys.reduce((x,k)=>x[k],doc);}
function set(doc,keys,value){let obj=doc;for(const k of keys.slice(0,-1))obj=obj[k];obj[keys.at(-1)]=value;}
function project(m,c){const out={manifest:structuredClone(m),contracts:structuredClone(c)}, ops=[];
 function change(target,keys,value,selector){const before=get(out[target],keys);if(JSON.stringify(before)===JSON.stringify(value))return;ops.push({target,path:keys,before_sha256:digest(before),after_sha256:digest(value),selector});set(out[target],keys,value);}
 for(let pi=0;pi<m.length;pi++)for(let ii=0;ii<m[pi].items.length;ii++){
  const id=m[pi].items[ii].id,{fm,body}=item(id), entry=c.contracts[id];if(!entry)throw Error(`No contract ${id}`);
  change('manifest',[pi,'items',ii,'deps'],frontmatterList(fm,'deps'),{op:'frontmatter-list',item:id,key:'deps'});
  const facts=factParagraphs(body), steps=numberedProofSteps(body), old=entry.citations??[], citations=[];
  for(const fact of facts.values())for(const source of fact.links){
   const previous=old.find(x=>x.fact===fact.label&&x.source===source);
   const actualUses=uses(steps,fact.label);if(!actualUses.length)throw Error(`Unconsumed fact ${id}:${fact.label}`);
   const section=previous?.source_section;
   citations.push({...previous,fact:fact.label,source,...supplier(source,section),uses:actualUses,
    ...(previous?{}:{use_explanation:`${fact.label} supplies the interface explicitly cited by proof steps ${actualUses.join(', ')}; source text is mirrored verbatim.`})});
  }
  change('contracts',['contracts',id,'citations'],citations,{op:'citations-from-full-facts-and-proof',item:id});
  const seen=new Set();
  for(const field of ['derivations','routine_steps']){
   const rows=(entry[field]??[]).map(row=>{const step=steps.find(s=>s.id===row.step);if(!step)throw Error(`Stale classified step ${id}:${row.step}`);seen.add(step.id);return {...row,claim:step.claim,inputs:step.inputs};});
   if(field==='derivations')for(const step of steps)if(![...(entry.derivations??[]),...(entry.routine_steps??[])].some(r=>r.step===step.id)){seen.add(step.id);rows.push({id:`derive-${step.id}`,step:step.id,claim:step.claim,inputs:step.inputs});}
   change('contracts',['contracts',id,field],rows,{op:'full-numbered-proof-claims-and-tags',item:id,field});
  }
  const excerpts=(entry.supplier_excerpts??[]).map(x=>({...x,...supplier(x.source,x.source_section)}));
  change('contracts',['contracts',id,'supplier_excerpts'],excerpts,{op:'full-supplier-sections',item:id});
 }
 return {...out,ops};
}
const verifyProposed=process.argv.includes('--verify-proposed');
const m=read(verifyProposed?path.join(base,'metadata-proposed-pages.json'):manifest),c=read(verifyProposed?path.join(base,'metadata-proposed-contracts.json'):contracts), p=project(m,c);
if(process.argv.includes('--prepare')){
 if(fs.existsSync(configPath))throw Error('Preparation exists; preserve it and review instead of overwriting');
 const dest=path.join(base,'metadata-preparation-before');fs.mkdirSync(dest);
 for(const f of [manifest,contracts])fs.copyFileSync(f,path.join(dest,path.basename(f)));
 const config={version:1,manifest,contracts,source_guards:[...guards].map(([path,raw_sha256])=>({path,raw_sha256})),operations:p.ops};save(configPath,config);
 save(path.join(base,'metadata-proposed-pages.json'),p.manifest);save(path.join(base,'metadata-proposed-contracts.json'),p.contracts);
 save(path.join(base,'metadata-mirror-diff.json'),p.ops.map(o=>({target:o.target,path:o.path,selector:o.selector,before_sha256:o.before_sha256,after_sha256:o.after_sha256})));
 console.log(JSON.stringify({status:'prepared-only',operations:p.ops.length,source_guards:guards.size,scope:c.scope.length}));
}else{
 const cfg=read(configPath);for(const g of cfg.source_guards)if(sha(fs.readFileSync(g.path))!==g.raw_sha256)throw Error(`Source drift ${g.path}`);
 const docs={manifest:m,contracts:c};const mode=(process.argv.includes('--verify')||verifyProposed)?'verify':process.argv.includes('--apply')?'apply':'preview';
 if(mode==='verify'){
  if(p.ops.length)throw Error(`Source-exactness mismatch: ${p.ops.length} projected fields differ`);
  console.log(JSON.stringify({status:verifyProposed?'proposed-source-exact':'canonical-source-exact',scope:c.scope.length,source_guards:cfg.source_guards.length,parser:'tools/facts-block.mjs + tools/frontmatter-list.mjs',acceptance:false}));
 }else{
  if(p.ops.length!==cfg.operations.length)throw Error('Projection operation count drift');
  for(let i=0;i<cfg.operations.length;i++){
   const o=cfg.operations[i],now=p.ops[i];if(JSON.stringify(o)!==JSON.stringify(now))throw Error(`Projection drift operation ${i}`);
   if(digest(get(docs[o.target],o.path))!==o.before_sha256)throw Error(`Metadata field drift ${o.path}`);
  }
  if(mode==='apply'){
   const archive=path.join(base,`metadata-mirror-applied-${new Date().toISOString().replace(/[^0-9TZ]/g,'')}`);fs.mkdirSync(archive);
   for(const [target,file] of Object.entries({manifest,contracts})){fs.copyFileSync(file,path.join(archive,`before-${path.basename(file)}`));save(file,p[target]);fs.copyFileSync(file,path.join(archive,`final-${path.basename(file)}`));}
   save(path.join(archive,'receipt.json'),{status:'metadata-projection-applied',operations:cfg.operations.length,source_guards:cfg.source_guards.length,acceptance:false});
   console.log(JSON.stringify({status:'applied',archive}));
  }else console.log(JSON.stringify({status:'preview-only',operations:p.ops.length,source_guards:guards.size,canonical_writes:0}));
 }
}
