import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { frontmatterList } from '../../tools/physics-support/frontmatter-list.mjs';
const root = new URL('../', import.meta.url);
const read = p => readFileSync(new URL(p, root), 'utf8');
const digest = s => createHash('sha256').update(s).digest('hex');
const prefix = 'research/physics-em-sr-40-2026-10-08-reconciliation2.plan';
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
const manifests=readdirSync(new URL('research/',root)).filter(f=>/^physics-em-sr-40-2026-10-08-batch-\d+\.pages\.json$/.test(f)).sort().map(f=>({path:`research/${f}`,text:read(`research/${f}`)}));
const current=manifests.flatMap(m=>JSON.parse(m.text));
const localItems=new Map(current.flatMap(p=>p.items.map(item=>[item.id,{...item,page:p.id}])));
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
const report={version:1,run:'physics-em-sr-40-2026-10-08',at:new Date().toISOString(),before_plan_sha256:digest(planText),manifest_snapshots:manifests.map(m=>({path:m.path,sha256:digest(m.text)})),scaffolded_items:localItems.size,direct_home_count:directHomeIds.length,absent_direct:absentDirect,transitive_supplier_count:used.size,transitive_home_count:transitiveHomeIds.length,absent_transitive:absentTransitive,unmapped,mapping,changes};
writeFileSync(new URL(`${prefix}.inspection.json`,root),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({before_plan_sha256:report.before_plan_sha256,items:report.scaffolded_items,direct_homes:directHomeIds.length,absent_direct:absentDirect.length,transitive_supplier_count:used.size,transitive_homes:transitiveHomeIds.length,absent_transitive:absentTransitive.length,changed_pages:changes.length,unmapped},null,2));
if(process.argv.includes('--apply')) {
 if(unmapped.length)throw Error('Unmapped supplier: no apply');
 if(planText!==read('research/plan-spec.json'))throw Error('Plan changed during inspection');
 const maxP=Math.max(...plan.pages.filter(p=>p.kind==='P').map(p=>p.order));const minLocal=Math.min(...plan.pages.filter(p=>p.kind!=='P').map(p=>p.order));if(!(maxP<minLocal))throw Error('No context order interval');
 const added=absentTransitive.map((id,i)=>{const source=pages.get(id);if(!source)throw Error(`Unknown pin home ${id}`);return {id,title:source.title,kind:'P',category:source.category,library:'mathematics',status:'published',requires:[],items:[],order:maxP+(minLocal-maxP)*(i+1)/(absentTransitive.length+1)};});
 for(const p of added){plan.pages.push(p);byId.set(p.id,p);}
 const applied=[];
 for(const p of current.slice().sort((a,b)=>a.order-b.order)) {
  const canon=byId.get(p.id), old=[...canon.requires];
  const needed=[...new Set(mapping.filter(r=>r.consumer_page===p.id).map(r=>r.supplier_home))].sort();
  const missing=needed.filter(id=>!closure(p.id).has(id));
  if(missing.length){canon.requires.push(...missing);applied.push({page:p.id,order_before:canon.order,order_after:canon.order,old_requires:old,added_requires:missing,new_requires:[...canon.requires]});}
 }
 // Catalogue-only P additions precede every local page. No pair, item or existing edge is removed.
 const previousPages=JSON.parse(planText).pages;
 for(const original of previousPages){const now=byId.get(original.id);if(now.order!==original.order)throw Error('Existing order changed');for(const dep of original.requires??[])if(!now.requires.includes(dep))throw Error('Existing dependency removed');if(JSON.stringify(now.items)!==JSON.stringify(original.items))throw Error('Inventory changed');}
 const missingAfter=mapping.filter(r=>!closure(r.consumer_page).has(r.supplier_home));
 if(missingAfter.length)throw Error('Supplier declaration incomplete');
 const afterText=JSON.stringify(plan,null,2)+'\n';
 writeFileSync(new URL(`${prefix}.before-plan.json`,root),planText);
 writeFileSync(new URL('research/plan-spec.json',root),afterText);
 const result={...report,after_plan_sha256:digest(afterText),added_p_pages:added.map(p=>({...p,source_path:pages.get(p.id).path,source_sha256:pages.get(p.id).sha256})),changes:applied,missing_consumer_homes_after:missingAfter,transitive_supplier_context:[...used.keys()].sort().map(id=>({item:id,home:homes.get(id)?.id??null,item_sha256:used.get(id).sha256})),note:'Published P pages are prerequisite graph context only; existing P empty requires/items convention is retained. Native validator loads actual imported item/page dependency graphs; only selected local consumer declared closures gain direct used home requirements. No new authored pair or frontier subject.'};
 writeFileSync(new URL(`${prefix}.json`,root),JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify({after_plan_sha256:result.after_plan_sha256,added_p_pages:added.length,changed_pages:applied.map(r=>r.page),consumer_homes_missing:missingAfter.length},null,2));
}
