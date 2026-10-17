// Read-only native-parser metadata inventory; no recertify/hash/gate invocation.
import fs from 'node:fs';
import path from 'node:path';
import { loadStep3 } from '../../tools/step3-decisions.mjs';
import { dependencyLevels } from '../../tools/item-dependency-levels.mjs';
import { yaml } from '../../tools/pathway-lib.mjs';
import { splitFrontmatter } from '../../tools/step6-lib.mjs';
const run='numerical-optimization-dynamics-2026-10-16';
const D=path.dirname(new URL(import.meta.url).pathname);const root=process.cwd();
const snapshot=loadStep3(root,run);const graph=dependencyLevels(snapshot.pages);
const frozen=new Set([1,33,77]);const rows=[],discrepancies=[],operations=[],retained=new Map();
const manifestCache=new Map();
const retain=p=>{if(!retained.has(p))retained.set(p,fs.readFileSync(p,'utf8'));return retained.get(p);};
for(const [id,{item,page}]of [...graph.items].sort(([a],[b])=>a.localeCompare(b))){
 const batch=Number(page.batch),mp=`research/${run}-batch-${batch}.pages.json`;
 if(!manifestCache.has(mp))manifestCache.set(mp,JSON.parse(fs.readFileSync(mp,'utf8')));
 const pages=manifestCache.get(mp);const pi=pages.findIndex(p=>p.id===page.id);const ii=pages[pi].items.findIndex(it=>it.id===id);const source=`items/${id}.md`;
 const checks=[];let fm=null,raw=null;
 if(!item.kind||!item.title?.trim()||!Array.isArray(item.deps))checks.push({field:'manifest-shape',actual:item,expected:'nonempty kind, nonempty title, array deps'});
 if(!fs.existsSync(source))checks.push({field:'source-existence',actual:false,expected:true});
 else{
  try{raw=fs.readFileSync(source,'utf8');fm=yaml().parse(splitFrontmatter(raw).frontmatter);}
  catch(e){checks.push({field:'renderer-yaml',actual:e.message,expected:'parseable source frontmatter'});}
  if(fm){
   for(const field of ['id','kind','title'])if(fm[field]!==item[field])checks.push({field,source_value:fm[field]??null,manifest_value:item[field]??null,native_expected:field==='id'?id:item[field]});
   if(!['draft','published'].includes(fm.status))checks.push({field:'status',source_value:fm.status??null,native_expected:['draft','published']});
   if(fm.dependency_level!==graph.levels.get(id))checks.push({field:'dependency_level',source_value:fm.dependency_level??null,manifest_value:item.dependency_level??null,native_expected:graph.levels.get(id)});
   let depsEqual=false;
   try{depsEqual=JSON.stringify([...(fm.deps??[])].sort())===JSON.stringify([...item.deps].sort());}catch{}
   if(!depsEqual)checks.push({field:'deps',source_value:fm.deps??[],manifest_value:item.deps??null,native_expected:'source and manifest sorted dependency arrays exactly equal'});
  }
 }
 const record={id,batch,page:page.id,source,manifest:mp,manifest_item_path:[pi,'items',ii],source_metadata:fm?Object.fromEntries(['id','kind','title','status','deps','dependency_level'].map(k=>[k,fm[k]??null])):null,manifest_metadata:Object.fromEntries(['id','kind','title','status','deps','dependency_level'].map(k=>[k,item[k]??null])),computed_dependency_level:graph.levels.get(id),discrepancies:checks,frozen_target:frozen.has(batch)};
 rows.push(record);
 for(const c of checks){
  retain(mp);if(raw!==null)retained.set(source,raw);
  const issue={...record,discrepancies:undefined,field:c.field,comparison:c,manifest_row_guard:item,fullbyte_guards:[{path:mp,expected_full_bytes_file:path.join(D,'before',mp)},...(raw!==null?[{path:source,expected_full_bytes_file:path.join(D,'before',source)}]:[])]};
  discrepancies.push(issue);
  if(['kind','title'].includes(c.field)&&typeof fm[c.field]==='string'&&fm[c.field].trim()&&!frozen.has(batch)){
   operations.push({target:mp,path:[pi,'items',ii,c.field],pointer:`/${pi}/items/${ii}/${c.field}`,id,batch,field:c.field,before:item[c.field],after:fm[c.field],reason:'Unambiguous exact mirror of actual current renderer-parsed source '+c.field+'. No public claim expansion or source change.',fullbyte_guards:issue.fullbyte_guards,row_guard:item,status:'DRAFT root review and fresh current guards required'});
  }
 }
}
for(const [p,raw]of retained){const dest=path.join(D,'before',p);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,raw,{flag:'wx'});}
const out={run,scope:{batches:manifestCache.size,pages:snapshot.pages.length,items:graph.items.size},method:'Read actual loadStep3 frontier and native dependencyLevels; renderer pathway-lib yaml().parse and native step6 splitFrontmatter. Reproduces only metadata comparisons from owner-gate-supervision recertify, with all failures collected instead of first throw. No recertify/frontierInputs/itemHash/hash/layout/gate/test invocation.',counts:{items:rows.length,discrepant_items:rows.filter(r=>r.discrepancies.length).length,field_discrepancies:discrepancies.length,surgical_title_kind_operations:operations.length,frozen_discrepancies:discrepancies.filter(r=>r.frozen_target).length,native_graph_errors:graph.errors.length},graph_errors:graph.errors,operations,discrepancies,frozen_target_batches:[...frozen],rows,limits:['Status is checked by the native allowed-source-status test, not by imposing an optional manifest status.','Native graph validates manifest dependency labels; source levels are compared to computed native levels. No level edits are proposed.','Deps compare sorted arrays including multiplicity, exactly as native recertification. No dependency/ID/status repair is guessed.','Batches1,33,77 whole manifests/contracts remain frozen. Any discrepancy there is inventory only.','Full byte snapshots are read observations. Root refreshes guards and active/queued-writer protection; this is not a drain, acceptance or recertification receipt.']};
fs.writeFileSync(path.join(D,'inventory-and-operations.json'),JSON.stringify(out,null,2)+'\n',{flag:'wx'});
fs.writeFileSync(path.join(D,'concise-operations.json'),JSON.stringify(operations,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({scope:out.scope,counts:out.counts,issues:discrepancies.map(r=>({id:r.id,batch:r.batch,field:r.field,comparison:r.comparison})),graph_errors:graph.errors}));
