import fs from 'node:fs';
import {loadStep3} from '../tools/frontier-snapshot.mjs';
import {yaml} from '../tools/pathway-lib.mjs';
import {dependencyLevels} from '../tools/item-dependency-levels.mjs';
const run='numerical-optimization-dynamics-2026-10-16',root=process.cwd(),s=loadStep3(root,run);
const seeds=['alg-implicit-shifted-bidiagonal-qr-with-deflation','alg-rank-thresholded-least-squares-by-svd','alg-critical-reaction-binomial-guarded-tau-leaping','ex-chebyshev-lobatto-endpoint-clustering','thm-variable-step-bdf2-order-two-under-ratio-bound'];
const logical=new Map(),metas=new Map();
for(const[id,row]of s.items){const raw=fs.readFileSync(`items/${id}.md`,'utf8'),fm=yaml().parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);metas.set(id,fm);logical.set(id,[...new Set([row.item,fm].flatMap(x=>[...(x.deps??[]),...(x.justified_by??[]),...(x.forward_refs??[])]))]);}
const changed=new Set(seeds);let grew=true;while(grew){grew=false;for(const[id,deps]of logical)if(!changed.has(id)&&deps.some(x=>changed.has(x))){changed.add(id);grew=true;}}
const original=new Set(JSON.parse(fs.readFileSync(`research/${run}-owner-step3-final-current-r1-binding-prepared.json`)).items.map(x=>x.item));
const graph=dependencyLevels(s.pages,{validateLabels:false});if(graph.errors.length)throw Error(graph.errors.join('\n'));
const levels=[...s.items].filter(([id,row])=>metas.get(id).dependency_level!==graph.levels.get(id)||row.item.dependency_level!==graph.levels.get(id)).map(([id,row])=>({id,batch:row.page.batch,before_source:metas.get(id).dependency_level,before_manifest:row.item.dependency_level,after:graph.levels.get(id)}));
if(levels.some(x=>!original.has(x.id)||!changed.has(x.id)))throw Error('Unexpected new-helper level or out-of-closure change: '+JSON.stringify(levels.filter(x=>!original.has(x.id)||!changed.has(x.id))));
const items=[...changed].filter(id=>original.has(id)).sort(),batches=[...new Set(items.map(id=>s.items.get(id).page.batch))].sort((a,b)=>+a-+b);
const output=`research/${run}-ROOT-step3-gate-r1-native-integration/readiness-selection.json`,selection={version:1,run,seeds,items,batches,level_changes:levels,excluded_real_new_helpers:[...changed].filter(id=>!original.has(id)),reason:'Current declared logical/justification/forward consumer closure affected by four actual source repairs and one current bibliography mirror; proof-contract-only worksheet repairs change no construction item inputs.'};
fs.writeFileSync(output,JSON.stringify(selection,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({items:items.length,batches,level_changes:levels.length,excluded:selection.excluded_real_new_helpers}));
