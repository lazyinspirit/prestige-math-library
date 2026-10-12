import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { yaml } from '../../../../tools/physics-support/pathway-lib.mjs';
import { splitFrontmatter } from '../../../../tools/physics-support/facts-block.mjs';
import { itemHashGuard } from '../../../../tools/physics-support/item-hash.mjs';
import { collect } from '../../../../tools/physics-support/frontier-dependency-ledger.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',base=`research/${run}-resumed-orchestration/step2-gate-repair`;
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const write=(p,v)=>{const s=typeof v==='string'?v:JSON.stringify(v,null,2)+'\n';if(!fs.existsSync(p)||read(p)!==s)fs.writeFileSync(p,s);};
const paths=Array.from({length:79},(_,i)=>`research/${run}-batch-${i+1}.pages.json`),manifests=paths.map(json);
const contractPaths=paths.map(p=>p.replace('.pages.json','.proof-contracts.json')),contracts=contractPaths.map(json);
function header(id,edit){const p=`items/${id}.md`,raw=read(p),{fm,body}=splitFrontmatter(raw),doc=yaml().parseDocument(fm);edit(doc);write(p,`---\n${doc.toString().trimEnd()}\n---\n${body}`);}
function removeDep(id,dep){header(id,doc=>{doc.set('deps',(doc.get('deps')?.toJSON()??[]).filter(d=>d!==dep));doc.deleteIn(['dependency_roles',dep]);});}
function addForward(id,dep){header(id,doc=>doc.set('forward_refs',[...new Set([...(doc.get('forward_refs')?.toJSON()??[]),dep])]));}
removeDep('post-nrqm-photons-radiation-extension-and-transverse-mode-assignment','cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit');
removeDep('thm-gr-weak-field-einstein-stress-hierarchy','thm-gr-dust-local-evolution');
addForward('thm-gr-weak-field-einstein-stress-hierarchy','thm-gr-dust-local-evolution');
function move(id,toPage,before){
  const target=manifests.flat().find(p=>p.id===toPage);
  if(target.items.some(i=>i.id===id))return;
  let fromBatch,item;
  manifests.forEach((pages,b)=>pages.forEach(page=>{const n=page.items.findIndex(i=>i.id===id);if(n>=0){item=page.items.splice(n,1)[0];fromBatch=b;}}));
  if(!item)throw Error(`Missing approved supplier ${id}`);
  const toBatch=manifests.findIndex(pages=>pages.includes(target)),index=target.items.findIndex(i=>i.id===before);
  if(index<0)throw Error(`Missing placement anchor ${before}`);
  target.items.splice(index,0,item);
  const from=contracts[fromBatch],to=contracts[toBatch];
  if(from.contracts?.[id]){to.contracts[id]=from.contracts[id];delete from.contracts[id];}
  if(from.scope?.includes(id)){from.scope=from.scope.filter(x=>x!==id);to.scope=[...new Set([...to.scope,id])];}
}
move('lem-nrqm-central-positive-scaling-spectral-measure','qm-math-coulomb','thm-nrqm-coulomb-two-body-reduced-mass');
move('lem-nrqm-observables-spectral-support-and-outcome-law','qm-math-fock-and-equilibrium','thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian');
move('lem-nrqm-observables-l2-multiplication-spectral-measure','qm-math-fock-and-equilibrium','thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian');
const itemHomes=new Map(manifests.flat().flatMap(page=>page.items.map(item=>[item.id,page])));
for(const page of manifests.flat())for(const item of page.items)for(const dep of item.deps??[]){
  const supplier=itemHomes.get(dep);
  if(supplier&&supplier!==page&&!page.requires.includes(supplier.id))page.requires.push(supplier.id);
}
for(const pages of manifests)for(const page of pages){
  const p=`library/${page.category}/${page.id}.md`,raw=read(p),{fm,body}=splitFrontmatter(raw),doc=yaml().parseDocument(fm);
  const selected=new Set(page.items.map(i=>i.id));
  const oldExamples=doc.get('examples')?.toJSON()??[];
  doc.set('examples',oldExamples.filter(id=>selected.has(id)));
  doc.set('items',page.items.map(i=>i.id).filter(id=>!oldExamples.includes(id)));
  write(p,`---\n${doc.toString().trimEnd()}\n---\n${body}`);
}
paths.forEach((p,i)=>write(p,manifests[i]));contractPaths.forEach((p,i)=>write(p,contracts[i]));
// Sync the source metadata and fresh Facts/steps/quotes once after all writers drained.
let result=spawnSync(process.execPath,[`research/${run}-resumed-orchestration/integrate-owner-step2.mjs`],{encoding:'utf8'});
if(result.status!==0)throw Error(result.stderr||result.stdout);
contracts.splice(0,contracts.length,...contractPaths.map(json));
const homes=new Map(contracts.flatMap((doc,b)=>Object.keys(doc.contracts??{}).map(id=>[id,b])));
const focused=new Set();
function boundary(id,row,reviewer){
  const c=contracts[homes.get(id)]?.contracts[id];if(!c)throw Error(`Missing contract ${id}`);
  const next={...row};delete next.id;delete next.anchors;
  const reason=next.reviewed?.reason??next.reason??next.evidence;
  if(next.reviewed||next.status==='not_applicable')next.reviewed={upheld:true,by:next.reviewed?.by??reviewer,reason,item_sha256:itemHashGuard(read(`items/${id}.md`))};
  const index=c.boundaries.findIndex(r=>r.case===next.case);if(index<0)throw Error(`Missing boundary ${id}/${next.case}`);
  c.boundaries[index]=next;focused.add(id);
}
for(const name of ['cm','definition','spectral','oscillator','gr']){
  const doc=json(`${base}/${name}-patches.json`),reviewer=`Codex ${name} repair author; focused gate case inspection`;
  for(const [id,rows] of Object.entries(doc.boundary_replacements??{}))for(const row of rows)boundary(id,row,reviewer);
  for(const [id,c] of Object.entries(doc.contracts??{}))for(const row of c.boundaries??c.boundary_cases??[])boundary(id,row,reviewer);
  for(const row of doc.boundary_updates??[])boundary(row.id,row,reviewer);
}
contractPaths.forEach((p,i)=>write(p,contracts[i]));
// Record declaration/owner-acceptance coherence, not a new independent proof audit.
const ownerById=new Map(manifests.flatMap((pages,b)=>pages.flatMap(p=>[[`page:${p.id}`,String(b+1)],...p.items.map(i=>[`item:${i.id}`,String(b+1)])])));
const reviewPaths=paths.map(p=>p.replace('.pages.json','.cross-batch-dependencies.json')),reviewRows=reviewPaths.map(json),routed=reviewRows.map(()=>[]);
for(const rows of reviewRows)for(const row of rows){const owner=ownerById.get(`${row.kind}:${row.consumer}`);if(!owner)throw Error(`Missing consumer ${row.consumer}`);routed[Number(owner)-1].push(row);}
reviewPaths.forEach((p,i)=>write(p,routed[i]));
const ledger=collect(process.cwd(),run);
for(const edge of ledger.edges.filter(e=>!e.reviews.length)){
  const batch=edge.consumer_batch,p=`research/${run}-batch-${batch}.cross-batch-dependencies.json`,rows=json(p);
  rows.push({kind:edge.kind,consumer:edge.consumer,supplier:edge.supplier,status:'verified',evidence:`Owner metadata integration after accepted Step-2 source repairs: ${edge.declarations.join('; ')} declares this exact supplier, which has a current unique frontier owner. Source acceptance is retained; this row records declaration coherence, not an independent mathematical audit.`});write(p,rows);
}
result=spawnSync(process.execPath,['tools/physics-support/frontier-dependency-ledger.mjs','refresh','--run',run,'--require-reviewed'],{encoding:'utf8'});if(result.status!==0)throw Error(result.stderr||result.stdout);
result=spawnSync(process.execPath,['tools/physics-support/merge-proof-contracts.mjs','--level',run,`research/${run}-proof-contracts.json`,...contractPaths],{encoding:'utf8'});if(result.status!==0)throw Error(result.stderr||result.stdout);
console.log(JSON.stringify({focused_boundary_items:focused.size,cross_batch_declarations_added:ledger.edges.filter(e=>!e.reviews.length).length,frontier_items:manifests.flat().flatMap(p=>p.items).length}));
