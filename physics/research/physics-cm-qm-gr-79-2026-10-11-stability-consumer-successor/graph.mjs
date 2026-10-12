import{readFileSync,writeFileSync,readdirSync}from'node:fs';
import{yaml}from'../../tools/physics-support/pathway-lib.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',dir=`research/${run}-stability-consumer-successor`,prev=`research/${run}-crash-recovery/inertia-supplier-repair/materialized27-followup`;
const parse=t=>yaml().parse(t.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};
const inventory=new Map(),owners=new Map();for(const f of readdirSync('research').filter(f=>f.startsWith(run+'-batch-')&&f.endsWith('.pages.json')))for(const p of JSON.parse(readFileSync('research/'+f)))for(const i of p.items??[])owners.set(i.id,f.match(/batch-(\d+)/)[1]);
for(const f of readdirSync('items').filter(f=>f.endsWith('.md'))){const fm=parse(readFileSync('items/'+f,'utf8'));inventory.set(fm.id,{id:fm.id,batch:owners.get(fm.id)??null,deps:[...new Set(['deps','justified_by','forward_refs'].flatMap(k=>fm[k]??[]))],aliases:fm.aliases??[]});}
const aliases=new Map();for(const n of inventory.values())for(const a of n.aliases)aliases.set(a,n.id);
const rows=[...inventory.values()],old=JSON.parse(readFileSync(prev+'/expanded-before-cone.json'));
const seeds=['def-cm-equilibrium-and-lyapunov-stability','def-cm-orbital-and-linear-stability','thm-cm-euler-equations-and-torque-free-invariants','pthm-cm11-euler-equations','pthm-cm11-principal-rotations'];
const cones={};for(const seed of seeds){const seen=new Set([seed]);let moved=true;while(moved){moved=false;for(const n of rows)if(!seen.has(n.id)&&n.deps.some(d=>seen.has(aliases.get(d)??d))){seen.add(n.id);moved=true;}}cones[seed]=[...seen].sort().map(id=>inventory.get(id));}
const union=new Map();for(const list of Object.values(cones))for(const n of list)union.set(n.id,n);for(const list of Object.values(old.cones))for(const n of list)union.set(n.id,inventory.get(n.id)??n);
writeFileSync(dir+'/consumer-cone.json',JSON.stringify({at:new Date().toISOString(),reviewer:'successor /root/physics_stability_consumer_successor',archived_graph_file:prev+'/expanded-before-cone.json',old_current_alias_union:[...union.values()],current_cones:cones,aliases:[...aliases],graph_scan_scope:'identity and dependency graph only; full item reads limited to affected cone'},null,2)+'\n');console.log([...union.values()].filter(n=>n.batch&&!['1','3','4','9','20','25','27'].includes(n.batch)));
