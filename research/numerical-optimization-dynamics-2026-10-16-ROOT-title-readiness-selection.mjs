import fs from 'node:fs';
import {loadStep3} from '../tools/frontier-snapshot.mjs';
import {yaml} from '../tools/pathway-lib.mjs';
const run='numerical-optimization-dynamics-2026-10-16',root=process.cwd(),s=loadStep3(root,run);
const seeds=['lem-ctrl1-control-box-is-weakly-closed','lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous'];
const logical=new Map();
for(const [id,row]of s.items){
 const raw=fs.readFileSync(`items/${id}.md`,'utf8'),fm=yaml().parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
 logical.set(id,[...new Set([row.item,fm].flatMap(x=>[...(x.deps??[]),...(x.justified_by??[]),...(x.forward_refs??[])]))]);
}
const changed=new Set(seeds);let added=true;
while(added){added=false;for(const[id,deps]of logical)if(!changed.has(id)&&deps.some(x=>changed.has(x))){changed.add(id);added=true;}}
const previous=JSON.parse(fs.readFileSync(`research/${run}-owner-step3-final-current-r1-binding-prepared.json`));
const original=new Set(previous.items.map(x=>x.item));
const items=[...changed].filter(x=>original.has(x)).sort(),batches=[...new Set(items.map(x=>s.items.get(x).page.batch))].sort((a,b)=>+a-+b);
const selection={version:1,run,seeds,items,batches,excluded_real_new_helpers:[...changed].filter(x=>!original.has(x)),reason:'Exact declared current logical/justification/forward dependency closure affected by two title-only manifest mirrors; no mathematical review or source change.'};
const out=`research/${run}-ROOT-final-title-mirrors/readiness-selection.json`;fs.writeFileSync(out,JSON.stringify(selection,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({items:items.length,batches,excluded:selection.excluded_real_new_helpers}));
