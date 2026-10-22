// Drained root adoption of the released local phase proof and exact level labels.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {itemHashGuard} from '../tools/physics-support/item-hash.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-maslov-local`,out=`${base}/root-metadata-application`,read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(!process.argv.includes('--outside-writers-drained')||existsSync(out)||existsSync(`.physics-autopilot/${run}/controller.lock`))throw Error('Require real global drain and unused archive');
if(Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native source workers active');
const releasePath=`${base}/release.json`,release=read(releasePath);
if(sha(readFileSync(releasePath))!=='d6244b8a23ebb1ac8a95e59bde57810c67e1fad26f9623adbec802d58bd260d4')throw Error('Unreleased report');
for(const row of release.scope)if(sha(readFileSync(`items/${row.id}.md`))!==row.raw_sha256)throw Error('Reviewed source/consumer changed '+row.id);
for(const row of release.suppliers)if(sha(readFileSync(row.path))!==row.raw_sha256)throw Error('Actual supplier changed '+row.path);
if(sha(readFileSync(release.contract.path))!==release.contract.current_raw_sha256)throw Error('Released contract changed');
const original=new Map(),pending=new Map(),docs=new Map(),load=p=>{if(!docs.has(p)){const b=readFileSync(p);original.set(p,b);docs.set(p,JSON.parse(b));}return docs.get(p);};
const manifestPaths=readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).map(f=>`research/${f}`),pages=manifestPaths.flatMap(p=>load(p));
const proposal=read(`${base}/mirror-proposals.json`),item=load(proposal.file).flatMap(p=>p.items).find(i=>i.id===proposal.id);
if(!item)throw Error('Missing reviewed subject');
const publicMirror=[];
for(const[field,c]of Object.entries(proposal.changes)){if(JSON.stringify(item[field])!==JSON.stringify(c.before))throw Error('Exact mirror preimage differs '+field);item[field]=c.after;publicMirror.push(field);}
const actualParity=readItem(`items/${proposal.id}.md`);
if(JSON.stringify([...item.deps].sort())!==JSON.stringify([...actualParity.deps].sort())||JSON.stringify(item.dependency_roles)!==JSON.stringify(actualParity.dependency_roles))throw Error('Final source/dependency mirror differs');
const graph=dependencyLevels(pages,{validateLabels:false});if(graph.errors.length||graph.items.size!==845)throw Error('Invalid actual dependency graph '+JSON.stringify(graph.errors));
const levelChanges=[],sourceChanges=new Map();
for(const[id,{item:manifest}]of graph.items){
 const path=`items/${id}.md`,before=readFileSync(path),source=readItem(path),level=graph.levels.get(id);
 if(JSON.stringify([...(source.deps??[])].sort())!==JSON.stringify([...manifest.deps].sort()))throw Error('Unreviewed source/manifest logical declaration mismatch '+id);
 const oldManifestLevel=manifest.dependency_level;manifest.dependency_level=level;
 if(source.dependency_level===level&&oldManifestLevel===level)continue;
 const text=before.toString(),matches=[...text.matchAll(/^dependency_level:\s*\d+\s*$/gm)];if(matches.length!==1)throw Error('Bad numeric source level '+id);
 const after=Buffer.from(text.replace(/^dependency_level:\s*\d+\s*$/m,`dependency_level: ${level}`));
 if(!before.equals(after)){original.set(path,before);pending.set(path,after);sourceChanges.set(id,{path,before:before.toString(),after:after.toString()});}
 levelChanges.push({id,path,old_source_level:source.dependency_level,old_manifest_level:oldManifestLevel,new_level:level,body_and_other_metadata_unchanged:before.toString().replace(/^dependency_level:\s*\d+\s*$/m,'dependency_level: LEVEL')===after.toString().replace(/^dependency_level:\s*\d+\s*$/m,'dependency_level: LEVEL')});
}
const rebound=[];
for(const f of readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.proof-contracts\\.json$`).test(f))){const path=`research/${f}`,doc=load(path);let changed=false;
 for(const[id,entry]of Object.entries(doc.contracts??{})){
  const source=sourceChanges.get(id);if(!source)continue;
  for(const row of entry.boundaries??[]){const review=row.template_review;if(!review)continue;
   const rowSha=sha(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}));
   if(review.item_sha256!==itemHashGuard(source.before)||review.row_sha256!==rowSha)throw Error('Not current owner review before metadata-only relabel '+id+' '+row.case);
   review.item_sha256=itemHashGuard(source.after);changed=true;rebound.push({id,case:row.case,old_item_sha256:itemHashGuard(source.before),new_item_sha256:review.item_sha256,row_sha256:rowSha,reviewer:review.by,reason_unchanged:true});
  }
 }
 if(changed)pending.set(path,Buffer.from(JSON.stringify(doc,null,2)+'\n'));
}
for(const path of manifestPaths){if(JSON.stringify(JSON.parse(original.get(path)))===JSON.stringify(docs.get(path)))continue;const after=Buffer.from(JSON.stringify(docs.get(path),null,2)+'\n');if(!original.get(path).equals(after))pending.set(path,after);}
mkdirSync(`${out}/before`,{recursive:true});const changes=[];
for(const[path,after]of pending){const before=original.get(path);if(!readFileSync(path).equals(before))throw Error('Concurrent writer '+path);const archive=`${out}/before/${path}`;mkdirSync(archive.slice(0,archive.lastIndexOf('/')),{recursive:true});writeFileSync(archive,before);changes.push({path,before_sha256:sha(before),after_sha256:sha(after)});}
for(const[path,after]of pending)writeFileSync(path,after);
writeFileSync(`${out}/receipt.json`,JSON.stringify({at:new Date().toISOString(),run,scientific_release:releasePath,public_mirror_fields:publicMirror,source_levels:levelChanges,metadata_only_review_rebindings:rebound,changes,all_source_bodies_unchanged:true,frontier_items:graph.items.size,maximum_level:Math.max(...graph.levels.values()),independent_acceptance:false,full_native_gate:false},null,2)+'\n');
console.log(JSON.stringify({items:graph.items.size,source_level_changes:sourceChanges.size,all_level_changes:levelChanges.length,template_guards_rebound:rebound.length,files:changes.length,maximum_level:Math.max(...graph.levels.values())}));
