import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/physics-support/pathway-lib.mjs';
import {dependencyLevels,runPages} from '../../tools/physics-support/item-dependency-levels.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,reportPath=`${base}/current-fact-attribution-13.json`,report=JSON.parse(rf(reportPath)),out=`${base}/fact-attribution-metadata-integration.json`;
if(existsSync(out)||report.rows.length!==9)throw Error('Wrong or repeated operation');
const writes=new Map(),updates=[];
for(const row of report.rows){
 const id=row.id,path=`items/${id}.md`,raw=rf(path,'utf8'),m=raw.match(/^(---\n)([\s\S]*?)(\n---\n)([\s\S]*)$/),doc=yaml().parseDocument(m[2],{uniqueKeys:true}),d=doc.toJS();
 const proposal=row.root_metadata_additions;if(!proposal||d.id!==id||d.deps.includes(proposal.deps_append))throw Error('Wrong metadata preimage '+id);
 d.deps.push(proposal.deps_append);Object.assign(d.dependency_roles,proposal.dependency_roles_add);doc.set('deps',d.deps);doc.set('dependency_roles',d.dependency_roles);
 writes.set(path,m[1]+doc.toString().trimEnd()+m[3]+m[4]);updates.push({id,deps:d.deps,dependency_roles:d.dependency_roles});
}
for(const path of [`research/${run}-batch-13.pages.json`,'research/plan-spec.json']){
 const d=JSON.parse(rf(path));for(const p of Array.isArray(d)?d:d.pages)for(const item of p.items??[]){const row=updates.find(x=>x.id===item.id);if(row){item.deps=row.deps;item.dependency_roles=row.dependency_roles;}}
 writes.set(path,JSON.stringify(d,null,2)+'\n');
}
const archive=`${base}/before-attribution-metadata`;mkdirSync(archive,{recursive:false});const sha=b=>createHash('sha256').update(b).digest('hex'),preimages=[];
for(const[path,after]of writes){const bytes=rf(path),dest=`${archive}/${path.replaceAll('/','__')}`;wf(dest,bytes,{flag:'wx'});preimages.push({path,archive:dest,sha256:sha(bytes),after_sha256:sha(after)});}
for(const[path,after]of writes)wf(path,after);
const graph=dependencyLevels(runPages(process.cwd(),run));if(graph.errors.length)throw Error(graph.errors.join('\n'));
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),scientific_report:{path:reportPath,sha256:sha(rf(reportPath))},operation:'Declare nine actual direct formulation prerequisites approved by the same scientific reviewer; retain all existing dependencies and exact bodies. Computed numeric labels remain correct.',updates,preimages,items:305,pages:94,complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({sources:updates.length,files:writes.size,numeric_levels_current:true}));
