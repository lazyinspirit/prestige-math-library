#!/usr/bin/env node
// Read-only candidate/field guards and targeted cycle checks; not a native gate.
import {readFileSync,readdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {splitFrontmatter} from '../../tools/facts-block.mjs';
import {parseFrontmatter} from '../../tools/content-policy-lib.mjs';
import {frontmatterList} from '../../tools/frontmatter-list.mjs';
const base=dirname(fileURLToPath(import.meta.url)),root=resolve(base,'../..');
const read=p=>readFileSync(resolve(root,p),'utf8'),equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const assert=(condition,message)=>{if(!condition)throw Error(message)};
const p=JSON.parse(readFileSync(resolve(base,'proposal.json'),'utf8'));
for(const [path,text] of Object.entries(p.source_guards))assert(read(path)===text,'Source drift '+path);
const proposedMetadata=new Map();
for(const change of p.source_changes){
  assert(read(change.path)===change.before,'Candidate raw preimage drift '+change.path);
  const before=splitFrontmatter(change.before),after=splitFrontmatter(change.after);
  assert(before.body===after.body,'Mathematical body changed '+change.path);
  const old=parseFrontmatter(before.fm),next=parseFrontmatter(after.fm);
  assert(equal(next[change.field],change.after_values),'Proposed field mismatch '+change.path);
  const strippedOld={...old},strippedNext={...next};delete strippedOld[change.field];delete strippedNext[change.field];
  assert(equal(strippedOld,strippedNext),'Other metadata changed '+change.path);
  proposedMetadata.set(old.id,next);
}
for(const op of p.manifest_field_changes){
  let doc=JSON.parse(read(op.file));for(const key of op.path.slice(0,-1))doc=doc[key];const key=op.path.at(-1);
  assert(op.before_absent?!(key in doc):equal(doc[key],op.before),'Manifest field guard '+op.file+'/'+op.path.join('/'));
  assert(equal(op.after,proposedMetadata.get(doc.id)[key]),'Manifest mirror differs from source '+doc.id);
}
// Full index is supplier resolution only. Reachability checks are restricted to
// precisely the 13 proposed ordinary edges, with the proposed deps in memory.
const nodes=new Map(),aliases=new Map();
for(const file of readdirSync(resolve(root,'items')).filter(f=>f.endsWith('.md'))){
  const text=read('items/'+file),{fm}=splitFrontmatter(text);const id=/^id:\s*["']?([^\s"']+)/m.exec(fm)?.[1];if(!id)continue;
  const deps=proposedMetadata.get(id)?.deps??frontmatterList(fm,'deps');nodes.set(id,deps);
  for(const alias of frontmatterList(fm,'aliases'))aliases.set(alias,id);
}
const canonical=id=>aliases.get(id)??id;
function route(start,goal){const queue=[[canonical(start)]],visited=new Set();while(queue.length){const path=queue.pop(),id=path.at(-1);if(id===goal)return path;if(visited.has(id))continue;visited.add(id);for(const dep of nodes.get(id)??[])queue.push([...path,canonical(dep)]);}return null;}
let checked=0;
for(const change of p.source_changes.filter(c=>c.field==='deps')){
  const id=parseFrontmatter(splitFrontmatter(change.after).fm).id;
  const added=change.after_values.filter(x=>!change.before_values.includes(x));assert(added.length===1,'Expected one exact missing prerequisite '+id);
  const supplier=added[0];assert(!proposedMetadata.get(id).forward_refs?.includes(supplier),'Duplicate forward/logical edge '+id);
  assert(nodes.has(canonical(supplier)),'Unresolved supplier '+supplier);const cycle=route(supplier,id);assert(!cycle,'Proposed logical cycle '+JSON.stringify(cycle));checked++;
}
assert(checked===13,'Wrong proposed ordinary edge count');
console.log(JSON.stringify({mode:'read-only; no native gate',source_candidates:p.source_changes.length,manifest_fields:p.manifest_field_changes.length,ordinary_edges_checked:checked,new_cycle_paths:[],mathematical_bodies_changed:0},null,2));
