import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { frontmatterList } from '../../tools/physics-support/frontmatter-list.mjs';
const root=new URL('../',import.meta.url),read=p=>readFileSync(new URL(p,root),'utf8'),hash=s=>createHash('sha256').update(s).digest('hex');
const prefix='research/physics-em-sr-40-2026-10-08-external-prerequisite-repair.batch3';
const before=read('research/plan-spec.json'),plan=JSON.parse(before),byId=new Map(plan.pages.map(p=>[p.id,p]));
const pins=JSON.parse(read('research/math-imports.json')).files,homes=new Map(),suppliers=new Map(),pages=new Map();
const scalar=(s,k)=>{const v=s.match(new RegExp(`^${k}:\\s*(.*)$`,'m'))?.[1];return v?.startsWith('"')?JSON.parse(v):v?.replace(/^'(.*)'$/,'$1');};
for(const pin of pins){if(!pin.path.startsWith('items/')&&!pin.path.startsWith('library/'))continue;const text=read(pin.path);if(hash(text)!==pin.sha256||scalar(text,'status')!=='published')throw Error(`Invalid import ${pin.path}`);if(pin.path.startsWith('items/')){const id=pin.path.split('/').at(-1).slice(0,-3);suppliers.set(id,{id,path:pin.path,sha256:pin.sha256,deps:frontmatterList(text,'deps')});}else{const id=scalar(text,'page'),row={id,path:pin.path,sha256:pin.sha256,title:scalar(text,'title'),category:pin.path.split('/')[1],status:'published'};pages.set(id,row);for(const item of [...frontmatterList(text,'items'),...frontmatterList(text,'examples')])if(!homes.has(item))homes.set(item,row);}}
const batch=JSON.parse(read('research/physics-em-sr-40-2026-10-08-batch-3.pages.json'));
const mappings=[],missing=[];
const closure=(id,seen=new Set())=>{for(const dep of byId.get(id)?.requires??[])if(!seen.has(dep)){seen.add(dep);closure(dep,seen);}return seen;};
for(const page of batch)for(const item of page.items)for(const dep of item.deps){if(!suppliers.has(dep))continue;const home=homes.get(dep);if(!home)throw Error(`Missing home ${dep}`);mappings.push({consumer_page:page.id,consumer_item:item.id,supplier_item:dep,supplier_item_sha256:suppliers.get(dep).sha256,supplier_page:home.id,supplier_page_path:home.path,supplier_page_sha256:home.sha256,statement:item.statement,strategy:item.strategy,dependency_role:item.dependency_roles?.[dep]});if(!closure(page.id).has(home.id))missing.push({page:page.id,home:home.id});}
const used=new Map(),queue=mappings.map(r=>r.supplier_item);for(let i=0;i<queue.length;i++){const id=queue[i];if(used.has(id))continue;const row=suppliers.get(id);if(!row)throw Error(`Missing transitive ${id}`);used.set(id,row);queue.push(...row.deps);}
const context=[...new Set([...used.keys()].map(id=>{if(!homes.has(id))throw Error(`Unhomed ${id}`);return homes.get(id).id;}))].sort();
const absent=context.filter(id=>!byId.has(id));
if(absent.length)throw Error(`New transitive P context requires reserved-order planning: ${absent}`);
const changes=[];
for(const page of batch.slice().sort((a,b)=>a.order-b.order)){const canonical=byId.get(page.id),old=[...canonical.requires];const needed=[...new Set(mappings.filter(r=>r.consumer_page===page.id).map(r=>r.supplier_page))].filter(id=>!closure(page.id).has(id)).sort();if(needed.length){canonical.requires.push(...needed);changes.push({page:page.id,old_requires:old,added_requires:needed,new_requires:[...canonical.requires],order:canonical.order});}}
const after=JSON.stringify(plan,null,2)+'\n';if(read('research/plan-spec.json')!==before)throw Error('Concurrent plan writer');
writeFileSync(new URL(`${prefix}.before-plan.json`,root),before);writeFileSync(new URL('research/plan-spec.json',root),after);
const result={run:'physics-em-sr-40-2026-10-08',at:new Date().toISOString(),before_plan_sha256:hash(before),after_plan_sha256:hash(after),mapping:mappings,transitive_supplier_count:used.size,transitive_home_count:context.length,transitive_homes:context,added_P_pages:absent,changes};
writeFileSync(new URL(`${prefix}.json`,root),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({before_plan_sha256:result.before_plan_sha256,after_plan_sha256:result.after_plan_sha256,mappings:mappings.length,transitive_supplier_count:used.size,transitive_homes:context.length,new_P_homes:absent.length,changes},null,2));
