import {readFileSync,writeFileSync,renameSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',root=process.cwd(),archive=`research/${run}-owner-ribbon-page-edges`;
const hash=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(readFileSync(p));
if(existsSync(archive))throw Error('Application archive exists; inspect before repeating');
const state=read(`.physics-autopilot/${run}/state.json`);
const additions=['tensor-and-fusion-categories','braided-and-symmetric-monoidal-categories','free-groups-and-presentations','principal-series-representations-of-gl-n-over-a-finite-field','unitary-fusion-spaces-f-and-r-symbols-and-anyon-models'];
const requests=[{batch:75,id:'qftx-ribbon-braid-representations',add:additions,sourceWriterReleased:true}];
const planPath='research/plan-spec.json',planBytes=readFileSync(planPath),plan=JSON.parse(planBytes),byId=new Map(plan.pages.map(p=>[p.id,p]));
if(byId.size!==plan.pages.length)throw Error('Ambiguous canonical plan');
const imports=read('research/math-imports.json'),contextBindings=[];
for(const id of additions){if(byId.has(id))throw Error('Review existing P context before reuse '+id);const matches=imports.files.filter(f=>f.path.startsWith('library/')&&f.path.endsWith('/'+id+'.md'));if(matches.length!==1)throw Error('Ambiguous imported published page '+id);const pin=matches[0],bytes=readFileSync(pin.path),source=readItem(pin.path);if(hash(bytes)!==pin.sha256||source.page!==id||source.status!=='published'||!source.title?.trim()||(source.library??'mathematics')!=='mathematics')throw Error('Invalid published context '+id);const row={id,title:source.title,kind:'P',category:pin.path.split('/')[1],library:'mathematics',requires:[],items:[],order:0};plan.pages.push(row);byId.set(id,row);contextBindings.push({path:pin.path,sha256:hash(bytes),row});}
const writes=new Map(),before=new Map([[planPath,planBytes]]),observations=[];
for(const req of requests){
 const d=state.dispatches[`1-scaffold:batch-${req.batch}`];if(!d?.endedAt||!d.lastExitOk)throw Error('Native writer still active '+req.batch);
 const p=byId.get(req.id);if(p?.kind!=='A'||p.category.startsWith('fluid-dynamics'))throw Error('Wrong approved page');
 const previous=[...p.requires];p.requires=[...new Set([...p.requires,...req.add])];
 for(const id of p.requires){const supplier=byId.get(id);if(!supplier||Number(supplier.order)>=Number(p.order))throw Error('Missing/forward prerequisite '+id);}
 const manifestPath=`research/${run}-batch-${req.batch}.pages.json`,raw=readFileSync(manifestPath),pages=JSON.parse(raw),owned=pages.find(x=>x.id===req.id);
 if(!owned)throw Error('Missing manifest owner');
 const changed=JSON.stringify(owned.requires)!==JSON.stringify(p.requires);
 if(changed){if(!req.sourceWriterReleased)throw Error('Outside manifest writer has not released '+req.batch);before.set(manifestPath,raw);const inventories=JSON.stringify(pages.map(x=>x.items));owned.requires=p.requires;if(inventories!==JSON.stringify(pages.map(x=>x.items)))throw Error('Inventory changed');writes.set(manifestPath,Buffer.from(JSON.stringify(pages,null,2)+'\n'));}
 // The Hawking scientific owner is currently repairing item interfaces. Its
 // already-correct manifest is observed, never rewritten by this operation.
 if(req.sourceWriterReleased){const path=`library/${p.category}/${p.id}.md`,bytes=readFileSync(path),text=bytes.toString(),actual=readItem(path);if(actual.page!==p.id)throw Error('Wrong source page');if(JSON.stringify(actual.requires??[])!==JSON.stringify(p.requires)){
  const value='requires:\n'+p.requires.map(x=>'  - '+x).join('\n');let updated;
  if(/^requires:/m.test(text))updated=text.replace(/^requires:[^\n]*(?:\n[ \t]+[^\n]*)*/m,value);
  else {const end=text.indexOf('\n---',4);if(end<0)throw Error('Missing closing delimiter');updated=text.slice(0,end)+'\n'+value+text.slice(end);}
  before.set(path,bytes);writes.set(path,Buffer.from(updated));
 }}
 observations.push({batch:req.batch,page:req.id,previous_requires:previous,current_requires:p.requires,manifest_changed:changed,concurrent_manifest_rewrite:false});
}
const visiting=new Set(),done=new Set();function visit(id){if(done.has(id))return;if(visiting.has(id))throw Error('Page cycle '+id);const p=byId.get(id);if(!p)throw Error('Unknown page '+id);visiting.add(id);for(const dep of p.requires??[])visit(dep);visiting.delete(id);done.add(id);}for(const r of requests)visit(r.id);
writes.set(planPath,Buffer.from(JSON.stringify(plan,null,2)+'\n'));
const receipt=read('research/math-imports.json');for(const path of writes.keys())if(receipt.files.some(f=>f.path===path))throw Error('Imported destination '+path);
mkdirSync(archive);
for(const [path,bytes]of before){const out=`${archive}/before/${path}`;mkdirSync(out.slice(0,out.lastIndexOf('/')),{recursive:true});writeFileSync(out,bytes);}
for(const [path]of writes)if(hash(readFileSync(path))!==hash(before.get(path)))throw Error('Concurrent target edit '+path);
for(const [path,bytes]of writes){const temp=`${path}.owner-${process.pid}.tmp`;writeFileSync(temp,bytes);renameSync(temp,path);}
const changes=[...writes].map(([path,bytes])=>({path,before_sha256:hash(before.get(path)),after_sha256:hash(bytes)}));
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,at:new Date().toISOString(),owner:'/root',observations,changes,new_existing_published_context:contextBindings,reachable_plan_pages:done.size,note:'Surgical owner prerequisite metadata reconciliation on released targets only. No global preserving-items sync while unrelated authors write their manifests. Inventories/claims/proofs/statuses retained; current readiness and later full native gates remain required.'},null,2)+'\n');
console.log(JSON.stringify({pages:observations,changedFiles:changes.map(x=>x.path)}));
