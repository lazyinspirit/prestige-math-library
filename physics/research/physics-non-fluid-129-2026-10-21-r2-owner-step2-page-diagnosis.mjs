// Explicit frontier page-home/reading-edge metadata proposal, not a native gate.
import {readFileSync,writeFileSync,readdirSync,existsSync,mkdirSync} from 'node:fs';
import {readItem,markdownFiles} from '../tools/physics-support/physics-content.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',out=process.argv.includes('--out')?process.argv[process.argv.indexOf('--out')+1]:`research/${run}-owner-step2-root-adoption/page-prerequisites`;
if(existsSync(out))throw Error('Preserve existing diagnosis');
const read=p=>JSON.parse(readFileSync(p)),plan=read('research/plan-spec.json'),byPage=new Map(plan.pages.map(p=>[p.id,p]));
const current=readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json')).flatMap(n=>read(`research/${n}`));
const plannedHome=new Map(plan.pages.flatMap(p=>(p.items??[]).map(i=>[i.id,p.id]))),homes=new Map(),pageFiles=new Map(),ambiguous=[];
for(const path of markdownFiles('library')){
 if(path.endsWith('/_category.md'))continue;
 const p=readItem(path),id=p.page??p.id;if(!id)continue;
 const preferred=byPage.get(id)?.category;
 if(!pageFiles.has(id)||preferred&&path.split('/')[1]===preferred)pageFiles.set(id,{path,meta:p});
}
for(const[id,{path,meta}]of pageFiles)for(const item of [...(meta.items??[]),...(meta.examples??[])]){
 if(typeof item!=='string')continue;
 if(homes.has(item)&&homes.get(item)!==id)ambiguous.push({item,pages:[homes.get(item),id]});
 else homes.set(item,id);
}
const graph=new Map(plan.pages.map(p=>[p.id,new Set(p.requires??[])])),missing=new Map(),sourceExtras=[];
const key=(c,s)=>c+'\0'+s;
function edge(consumer,supplier,basis){if(!supplier||consumer===supplier)return;const k=key(consumer,supplier);if(!missing.has(k))missing.set(k,{consumer,supplier,basis:[]});missing.get(k).basis.push(basis);if(!graph.has(consumer))graph.set(consumer,new Set());graph.get(consumer).add(supplier);}
function closure(id,seen=new Set()){for(const q of graph.get(id)??[]){if(seen.has(q))continue;seen.add(q);closure(q,seen);}return seen;}
for(const p of current){
 const actual=readItem(`library/${p.category}/${p.id}.md`);
 for(const req of actual.requires??[])if(!(p.requires??[]).includes(req)){sourceExtras.push({consumer:p.id,supplier:req});edge(p.id,req,'Retain actual authored direct reading prerequisite');}
 for(const req of p.requires??[])if(!(byPage.get(p.id)?.requires??[]).includes(req))edge(p.id,req,'Retain actual manifest reading prerequisite');
}
const unresolved=[],usedHomeConflicts=[];
for(const p of current)for(const item of p.items)for(const dep of item.deps??[]){
 let canonical=dep,home=plannedHome.get(dep)??homes.get(dep);
 if(!home&&existsSync(`items/${dep}.md`)){canonical=readItem(`items/${dep}.md`).id;home=plannedHome.get(canonical)??homes.get(canonical);}
 if(!home){unresolved.push({page:p.id,item:item.id,dep});continue;}
 if(!plannedHome.has(canonical)&&ambiguous.some(a=>a.item===canonical))usedHomeConflicts.push({page:p.id,item:item.id,dep,home});
 if(home!==p.id&&!closure(p.id).has(home)&&!(p.forwardRefs??[]).includes(home))edge(p.id,home,`${item.id} exact declared dependency ${dep}`);
}
const missing_edges=[...missing.values()],newWrappers=[];
for(const e of missing_edges)if(!byPage.has(e.supplier)){
 const source=pageFiles.get(e.supplier);if(!source||source.meta.status!=='published')unresolved.push({page:e.consumer,missing_published_home:e.supplier,path:source?.path,status:source?.meta.status});
 else if(!newWrappers.some(p=>p.id===e.supplier))newWrappers.push({id:e.supplier,path:source.path,title:source.meta.title});
}
const orderErrors=missing_edges.filter(e=>byPage.has(e.supplier)&&Number(byPage.get(e.supplier).order)>=Number(byPage.get(e.consumer)?.order));
const cycles=[];for(const p of current)if(closure(p.id).has(p.id))cycles.push(p.id);
mkdirSync(out);const result={at:new Date().toISOString(),run,frontier_pages:current.length,frontier_items:current.reduce((n,p)=>n+p.items.length,0),missing_edges,new_wrappers:newWrappers,source_extras:sourceExtras,unresolved,used_home_conflicts:usedHomeConflicts,order_errors:orderErrors,cycles,native_gate:false,production_changes:false};
writeFileSync(`${out}/diagnosis.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({missing_edges:missing_edges.length,new_wrappers:newWrappers.length,source_extras:sourceExtras.length,unresolved,used_home_conflicts:usedHomeConflicts,order_errors:orderErrors,cycles}));
