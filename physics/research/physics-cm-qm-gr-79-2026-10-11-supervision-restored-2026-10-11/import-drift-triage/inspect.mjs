import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {markdownFiles,readItem} from '../../../../tools/physics-support/physics-content.mjs';
import {frontierMathematicsImportScope} from '../../../../tools/physics-support/frontier-import-scope.mjs';
import {readRunManifestPages} from '../../../../tools/physics-support/run-manifest-pages.mjs';
const root=resolve('physics'),run='physics-cm-qm-gr-79-2026-10-11',dest=resolve(root,'research',run+'-supervision-restored-2026-10-11/import-drift-triage');
const hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const receipt=JSON.parse(readFileSync(join(root,'research/math-imports.json')));
const originals={items:markdownFiles(join(receipt.source_root,'items')).map(readItem),pages:markdownFiles(join(receipt.source_root,'library')).filter(p=>!p.split('/').at(-1).startsWith('_')).map(p=>({...readItem(p),path:relative(receipt.source_root,p)}))};
const scope=frontierMathematicsImportScope(root,run,{planning:true,receipt,originals});
const selected=receipt.files.filter(f=>scope.paths.has(f.path));
const rows=selected.map(f=>({path:f.path,pinned:f.sha256,local:hash(join(root,f.path)),original:existsSync(join(receipt.source_root,f.path))?hash(join(receipt.source_root,f.path)):null,original_status:f.path.startsWith('items/')?readItem(join(receipt.source_root,f.path)).status:null}));
const drifts=rows.filter(r=>r.local!==r.pinned||r.original!==r.pinned||r.original_status&&r.original_status!=='published');
const current=readRunManifestPages(root,run,{allowEmptyItems:true}),owned=new Map(current.flatMap(p=>p.items.map(i=>[i.id,p.id])));
const all=markdownFiles(join(root,'items')).map(readItem),by=new Map(all.map(i=>[i.id,i])),aliases=new Map(all.flatMap(i=>(i.aliases??[]).map(a=>[a,i.id])));
const canon=t=>by.has(t)?t:aliases.get(t)??t;
const logical=['deps','justified_by'],rev=new Map();
for(const i of all)for(const fld of logical)for(const t of i[fld]??[]){const d=canon(t);if(!rev.has(d))rev.set(d,[]);rev.get(d).push(i.id);}
const cone=new Set(),queue=['def-dependent-choice'];for(let n=0;n<queue.length;n++){const i=queue[n];if(cone.has(i))continue;cone.add(i);queue.push(...(rev.get(i)??[]));}
const consumers=[...cone].filter(i=>i!=='def-dependent-choice'&&owned.has(i)).map(id=>({id,page:owned.get(id),sha256:hash(join(root,'items',id+'.md')),direct:(by.get(id).deps??[]).some(d=>canon(d)==='def-dependent-choice'),readiness_path:'research/'+run+'-step1-'+id+'.json',readiness:existsSync(join(root,'research',run+'-step1-'+id+'.json'))?JSON.parse(readFileSync(join(root,'research',run+'-step1-'+id+'.json'))):null}));
writeFileSync(join(dest,'scope-and-drift.json'),JSON.stringify({run,selection_mode:'planning:true matching native construction allowance for empty current inventories; same helper and manifests, no gates',selected_count:selected.length,context_count:scope.items.size,imported_items_count:scope.importedItems.size,drifts,selected:rows,current_consumers:consumers,input_bindings:[{path:'physics/research/math-imports.json',sha256:hash(join(root,'research/math-imports.json'))},{path:'tools/physics-support/frontier-import-scope.mjs',sha256:hash('tools/physics-support/frontier-import-scope.mjs')},...current.map(p=>({page:p.id}))]},null,2)+'\n');
console.log(JSON.stringify({selected:selected.length,drifts,consumer_count:consumers.length,direct_consumers:consumers.filter(c=>c.direct).map(c=>c.id)}));
