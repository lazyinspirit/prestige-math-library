#!/usr/bin/env node
// Read-only source-exact metadata verifier. No files, gates, or acceptance records are written.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../../..');
const {yaml}=await import(pathToFileURL(path.join(root,'tools/pathway-lib.mjs')).href);
const read=p=>fs.readFileSync(p,'utf8');
const json=p=>JSON.parse(read(p));
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const must=(condition,message)=>{if(!condition)throw Error(message);};
const cfg=json(path.join(here,'config.json'));
const sourceCache=new Map();
function source(id){
  const file=`items/${id}.md`;
  if(!sourceCache.has(file))sourceCache.set(file,read(path.join(root,file)));
  return sourceCache.get(file);
}
function sections(text){
  const headings=[...text.matchAll(/^##[ \t]+([^\r\n]+)\r?\n/gm)];
  return new Map(headings.map((m,i)=>[m[1].trim(),text.slice(m.index+m[0].length,headings[i+1]?.index??text.length).trim()]));
}
function proofRows(id){
  const out=[];
  for(const [name,body] of sections(source(id)))if(['Proof','Verification','Refutation','Counterexample'].includes(name)){
    const starts=[...body.matchAll(/^(\d+\.\d+)[ \t]+/gm)];
    for(let i=0;i<starts.length;i++){
      const m=starts[i],paragraph=body.slice(m.index+m[0].length,starts[i+1]?.index??body.length).trim();
      const end=paragraph.match(/\s+\[([^\[\]]+)\]\s*(?:∎)?\s*$/);
      must(end,`${id} ${m[1]}: complete proof paragraph has no final tag array`);
      out.push({step:m[1],claim:paragraph.slice(0,end.index),inputs:end[1].split(',').map(s=>s.trim())});
    }
  }
  must(new Set(out.map(r=>r.step)).size===out.length,`${id}: duplicate proof labels`);
  return out;
}
const before=new Map(),proposed=new Map(),metadataStates=[];
for(const file of cfg.files){
  const name=path.basename(file),b=read(path.join(here,'before',name)),p=read(path.join(here,'proposed',name));
  before.set(file,JSON.parse(b));proposed.set(file,JSON.parse(p));
  const current=read(path.join(root,file));
  must(current===b||current===p,`${file}: canonical metadata is neither guarded original nor exact proposed payload`);
  metadataStates.push({file,state:current===b?'guarded-before':'exact-proposed'});
}
// Replay every exact field operation against the full original metadata projection.
const replay=Object.fromEntries([...before].map(([p,v])=>[p,structuredClone(v)]));
for(const op of cfg.operations){
  let parent=replay;
  for(const key of op.path.slice(0,-1)){must(parent!=null&&Object.hasOwn(parent,key),`Missing operation parent ${op.path.join('/')}`);parent=parent[key];}
  const key=op.path.at(-1);
  must(equal(parent[key],op.before),`Stale before field ${op.path.join('/')}`);
  parent[key]=structuredClone(op.after);
}
for(const [file,payload] of proposed)must(equal(replay[file],payload),`${file}: payload contains changes outside declared operations`);
for(const file of cfg.source_guards)must(fs.readFileSync(path.join(root,file)).equals(fs.readFileSync(path.join(here,'sources',path.basename(file)))),`${file}: actual source differs from complete guarded source bytes`);
const manifest=[...proposed].find(([p])=>p.endsWith('.pages.json'))?.[1];
const contractCarrier=[...proposed].find(([p])=>p.endsWith('.proof-contracts.json'))?.[1];
must(manifest&&contractCarrier,'Nonempty manifest and contracts required');
const itemIds=manifest.flatMap(p=>p.items.map(i=>i.id));
must(itemIds.length>0&&new Set(itemIds).size===itemIds.length,'Empty or repeated manifest inventory');
must(equal([...itemIds].sort(),[...contractCarrier.scope].sort()),'Manifest/contract scope differs');
let proofs=0,paragraphs=0,citations=0,depLists=0;
for(const page of manifest)for(const item of page.items){
  const text=source(item.id),front=text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  must(front,`${item.id}: missing source frontmatter`);
  const fm=yaml().parse(front[1]);
  must(equal(item.deps??[],fm.deps??[]),`${item.id}: manifest deps differ from actual source deps`);depLists++;
  const contract=contractCarrier.contracts[item.id];must(contract,`${item.id}: missing contract`);
  const actual=proofRows(item.id),declared=[...(contract.derivations??[]),...(contract.routine_steps??[])];
  must(actual.length===declared.length,`${item.id}: proof paragraph inventory differs`);
  for(const row of actual){
    const stored=declared.filter(d=>d.step===row.step);must(stored.length===1,`${item.id} ${row.step}: missing or repeated derivation`);
    must(stored[0].claim===row.claim,`${item.id} ${row.step}: complete proof paragraph differs`);
    must(equal(stored[0].inputs,row.inputs),`${item.id} ${row.step}: final tag array differs`);paragraphs++;
  }
  if(actual.length)proofs++;
  const facts=sections(text).get('Facts & Assumptions')??'',labels=[...facts.matchAll(/^\[([FAL]\d+)\][ \t]*/gm)],expected=[];
  for(let i=0;i<labels.length;i++){
    const m=labels[i],body=facts.slice(m.index+m[0].length,labels[i+1]?.index??facts.length);
    const uses=actual.filter(r=>r.inputs.includes(m[1])||r.claim.includes(`[${m[1]}]`)).map(r=>r.step);
    for(const supplier of new Set([...body.matchAll(/\[\[([^\]|#]+)/g)].map(x=>x[1])))expected.push({fact:m[1],supplier,uses});
  }
  must(expected.length===(contract.citations??[]).length,`${item.id}: current fact-citation inventory differs`);
  for(const e of expected){
    const found=(contract.citations??[]).filter(c=>c.fact===e.fact&&c.source===e.supplier);must(found.length===1,`${item.id}: missing/repeated ${e.fact}/${e.supplier}`);
    const cite=found[0];must(equal(cite.uses,e.uses),`${item.id}: ${e.fact}/${e.supplier} proof-use labels differ`);
    const section=sections(source(cite.source)).get(cite.source_section);
    must(section!==undefined,`${cite.source}: missing cited section ${cite.source_section}`);
    must(cite.quote===section,`${item.id}: ${cite.source} quote differs from complete whole current ${cite.source_section} section`);citations++;
  }
}
const shape=v=>Array.isArray(v)?`array[${v.length}]`:typeof v==='string'?`string[${v.length}]`:v===null?'null':typeof v==='object'?`object[${Object.keys(v).length}]`:typeof v;
console.log(JSON.stringify({status:'pass',read_only:true,metadataStates,scope:{items:itemIds.length,proofs,completeProofParagraphs:paragraphs,finalTagArrays:paragraphs,completeWholeSectionCitations:citations,manifestDepLists:depLists,fullByteSourceGuards:cfg.source_guards.length},operationCount:cfg.operations.length,operations:cfg.operations.map(op=>({path:op.path.join('/'),before:shape(op.before),after:shape(op.after)})),acceptance_or_gate_or_recertification_granted:false},null,2));
