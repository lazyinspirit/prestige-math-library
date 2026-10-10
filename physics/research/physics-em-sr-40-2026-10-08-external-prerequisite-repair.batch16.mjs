import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { frontmatterList } from '../../tools/physics-support/frontmatter-list.mjs';
const root = new URL('../', import.meta.url);
const read = p => readFileSync(new URL(p, root), 'utf8');
const digest = s => createHash('sha256').update(s).digest('hex');
const prefix = 'research/physics-em-sr-40-2026-10-08-external-prerequisite-repair.batch16';
const planText = read('research/plan-spec.json'), plan = JSON.parse(planText);
const pins = JSON.parse(read('research/math-imports.json'));
const pinned = new Map(pins.files.map(x => [x.path, x.sha256]));
const scalar = (text,key) => {const s=text.match(new RegExp(`^${key}:\\s*(.*)$`,'m'))?.[1]; if(!s) return null; if(s.startsWith('"')) return JSON.parse(s); return s.replace(/^'(.*)'$/, '$1');};
const homes = new Map(), pages = new Map(), existing = new Map(), aliases = new Map();
for (const [path, hash] of pinned) {
  if (!path.startsWith('library/') && !path.startsWith('items/')) continue;
  const text=read(path);
  if(digest(text)!==hash) throw Error(`Snapshot mismatch: ${path}`);
  if(scalar(text,'status')!=='published') throw Error(`Not published: ${path}`);
  if(path.startsWith('library/')) {
    const id=scalar(text,'page'), items=[...frontmatterList(text,'items'),...frontmatterList(text,'examples')];
    const row={id,title:scalar(text,'title'),category:path.split('/')[1],library:'mathematics',status:'published',path,sha256:hash,items};
    pages.set(id,row);
    for(const item of items) { if(!homes.has(item)) homes.set(item,row); }
  } else {
    const id=path.split('/').at(-1).slice(0,-3); existing.set(id,{id,deps:frontmatterList(text,'deps'),path,sha256:hash});
    for(const alias of frontmatterList(text,'aliases')) aliases.set(alias,id);
  }
}
const manifests=readdirSync(new URL('research/',root)).filter(f=>f==='physics-em-sr-40-2026-10-08-batch-16.pages.json').sort().map(f=>({path:`research/${f}`,text:read(`research/${f}`)}));
const current=manifests.flatMap(m=>JSON.parse(m.text));
const localItems=new Map([1,2,3,13,14,15,16].flatMap(n=>JSON.parse(read(`research/physics-em-sr-40-2026-10-08-batch-${n}.pages.json`))).flatMap(p=>p.items.map(item=>[item.id,{...item,page:p.id}])));
const mapping=[], unmapped=[];
for(const p of current) for(const item of p.items) for(const dep of item.deps) {
  const canonical=aliases.get(dep)??dep;
  if(localItems.has(canonical)) continue;
  const supplier=existing.get(canonical),home=homes.get(canonical);
  if(!supplier||!home) {unmapped.push({consumer_page:p.id,consumer_item:item.id,supplier_item:dep}); continue;}
  mapping.push({consumer_page:p.id,consumer_item:item.id,supplier_item:dep,canonical_supplier_item:canonical,supplier_home:home.id,supplier_item_path:supplier.path,supplier_item_sha256:supplier.sha256,supplier_page_path:home.path,supplier_page_sha256:home.sha256,dependency_role:item.dependency_roles?.[dep]??null});
}
const used=new Map(), queue=mapping.map(r=>r.canonical_supplier_item);
for(let i=0;i<queue.length;i++) {const id=aliases.get(queue[i])??queue[i];if(used.has(id))continue;const supplier=existing.get(id);if(!supplier)throw Error(`Unresolved imported transitive dep ${id}`);used.set(id,supplier);queue.push(...supplier.deps);}
const directHomeIds=[...new Set(mapping.map(x=>x.supplier_home))].sort();
const transitiveHomeIds=[...new Set([...used.keys()].map(id=>homes.get(id)?.id).filter(Boolean))].sort();
const byId=new Map(plan.pages.map(p=>[p.id,p]));
const absentDirect=directHomeIds.filter(id=>!byId.has(id));
const absentTransitive=transitiveHomeIds.filter(id=>!byId.has(id));
const closure=(id,seen=new Set())=>{for(const dep of byId.get(id)?.requires??[])if(!seen.has(dep)){seen.add(dep);closure(dep,seen);}return seen;};
const changes=[];
for(const p of current) {
 const canon=byId.get(p.id);if(!canon)throw Error(`Unknown page ${p.id}`);
 const needs=directHomeIds.filter(id=>mapping.some(r=>r.consumer_page===p.id&&r.supplier_home===id));
 const missing=needs.filter(id=>!closure(p.id).has(id));
 if(missing.length) changes.push({page:p.id,old_requires:[...canon.requires],added_requires:missing,new_requires:[...canon.requires,...missing],order:canon.order});
}
const report={version:1,run:'physics-em-sr-40-2026-10-08',at:new Date().toISOString(),before_plan_sha256:digest(planText),manifest_snapshots:manifests.map(m=>({path:m.path,sha256:digest(m.text)})),scaffolded_items:current.reduce((n,p)=>n+p.items.length,0),stable_local_context_items:localItems.size,direct_home_count:directHomeIds.length,absent_direct:absentDirect,transitive_supplier_count:used.size,transitive_home_count:transitiveHomeIds.length,absent_transitive:absentTransitive,unmapped,mapping,changes};
writeFileSync(new URL(`${prefix}.inspection.json`,root),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({before_plan_sha256:report.before_plan_sha256,items:report.scaffolded_items,direct_homes:directHomeIds.length,absent_direct:absentDirect.length,transitive_supplier_count:used.size,transitive_homes:transitiveHomeIds.length,absent_transitive:absentTransitive.length,changed_pages:changes.length,unmapped},null,2));

// Proposal only: do not write canonical plan, native manifests or readiness while writers run.
const proposed=JSON.parse(planText), proposedById=new Map(proposed.pages.map(p=>[p.id,p]));
const maxP=Math.max(...proposed.pages.filter(p=>p.kind==='P').map(p=>p.order));
const firstLocal=Math.min(...proposed.pages.filter(p=>p.kind!=='P').map(p=>p.order));
if(!(maxP<firstLocal))throw Error('No reserved P ordering interval');
const added=absentTransitive.map((id,i)=>{const source=pages.get(id);return {id,title:source.title,kind:'P',category:source.category,library:'mathematics',status:'published',requires:[],items:[],order:maxP+(firstLocal-maxP)*(i+1)/(absentTransitive.length+1)};});
for(const page of added){if(!(maxP<page.order&&page.order<firstLocal))throw Error('P order precision');proposed.pages.push(page);proposedById.set(page.id,page);}
const proposedClosure=(id,seen=new Set())=>{for(const dep of proposedById.get(id)?.requires??[])if(!seen.has(dep)){seen.add(dep);proposedClosure(dep,seen);}return seen;};
const applied=[];
for(const c of changes.slice().sort((a,b)=>a.order-b.order)){const page=proposedById.get(c.page),missing=c.added_requires.filter(id=>!proposedClosure(page.id).has(id));if(missing.length){page.requires.push(...missing);applied.push({...c,added_requires:missing,new_requires:[...page.requires]});}}
const afterText=JSON.stringify(proposed,null,2)+'\n';
const result={...report,changes:applied,scaffolded_items:current.reduce((n,p)=>n+p.items.length,0),proposal_only:true,approved_to_write_canonical:false,proposed_plan_sha256:digest(afterText),proposed_added_P_pages:added.map(p=>({...p,source_path:pages.get(p.id).path,source_sha256:pages.get(p.id).sha256})),reserved_order_interval:{lower:maxP,upper:firstLocal},live_writer_separation:'Root reports active batches4,17,18,20. No canonical plan, manifest, task, ledger, readiness or engine state write; proposal awaiting confirmed drain.'};
writeFileSync(new URL(`${prefix}.proposal.json`,root),JSON.stringify(result,null,2)+'\n');
writeFileSync(new URL(`${prefix}.proposed-plan.json`,root),afterText);
console.log(JSON.stringify({actual_batch16_items:result.scaffolded_items,mapping_edges:mapping.length,direct_home_count:directHomeIds.length,missing_direct_homes:absentDirect,missing_transitive_home_count:absentTransitive.length,proposed_added_P_pages:added.length,changes:applied.map(c=>({page:c.page,added_requires:c.added_requires})),reserved_order_interval:result.reserved_order_interval,canonical_plan_unchanged:read('research/plan-spec.json')===planText},null,2));
