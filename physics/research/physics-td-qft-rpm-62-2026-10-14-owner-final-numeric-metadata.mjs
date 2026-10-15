// Root-only mechanical integration after every source writer releases ownership.
// No proof/interface changes, gate authorization, or independent acceptance.
import {readFileSync, writeFileSync, mkdirSync, renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml, split} from '../../tools/physics-support/pathway-lib.mjs';
const run='physics-td-qft-rpm-62-2026-10-14';
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const proposal=read(`research/${run}-owner-native-gate-preparation/numeric-metadata-proposal.json`);
const docs=new Map(),writes=new Map(),changedItems=[];
const doc=path=>{if(!docs.has(path))docs.set(path,read(path));return docs.get(path)};
for(const change of proposal.source_dependency_mirror_proposals){
 const fm=yaml().parse(split(readFileSync(`items/${change.id}.md`,'utf8')).fm);
 if(JSON.stringify(fm.deps)!==JSON.stringify(change.after))throw Error(`Stale dependency proposal ${change.id}`);
 const pages=doc(change.manifest),row=pages.flatMap(p=>p.items).find(x=>x.id===change.id);
 if(!row||JSON.stringify(row.deps)!==JSON.stringify(change.before))throw Error(`Changed manifest ${change.id}`);
 row.deps=fm.deps;row.dependency_roles=fm.dependency_roles;
}
for(const change of proposal.source_numeric_changes){
 const raw=readFileSync(change.path,'utf8'),parts=split(raw),fm=yaml().parse(parts.fm);
 if(fm.dependency_level!==change.before)throw Error(`Stale numeric proposal ${change.id}`);
 if(fm.status!=='draft')throw Error(`Non-draft source ${change.id}`);
 const next=/^dependency_level:/m.test(parts.fm)
  ?parts.fm.replace(/^dependency_level:.*$/m,`dependency_level: ${change.after}`)
  :`${parts.fm.trimEnd()}\ndependency_level: ${change.after}`;
 writes.set(change.path,raw.replace(parts.fm,next));changedItems.push(change.path);
}
for(const change of proposal.manifest_numeric_changes){
 const pages=doc(change.manifest),row=pages.find(p=>p.id===change.page)?.items.find(x=>x.id===change.id);
 if(!row||row.dependency_level!==change.before)throw Error(`Stale manifest numeric proposal ${change.id}`);
 row.dependency_level=change.after;
}
const planPath='research/plan-spec.json',plan=read(planPath);
for(const[path,pages]of docs){
 writes.set(path,JSON.stringify(pages,null,2)+'\n');
 for(const page of pages){const planned=plan.pages.find(p=>p.id===page.id);if(!planned)throw Error(`Missing approved page ${page.id}`);planned.items=page.items.map(x=>({...x}));planned.requires=page.requires;}
}
if(docs.size)writes.set(planPath,JSON.stringify(plan,null,2)+'\n');
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const archive=`research/${run}-owner-final-numeric-metadata/${stamp}`;mkdirSync(archive,{recursive:true});
const files=[];
for(const[path,data]of writes){
 const before=readFileSync(path);writeFileSync(`${archive}/${path.replaceAll('/','__')}.before`,before);
 writeFileSync(`${path}.tmp`,data);renameSync(`${path}.tmp`,path);
 files.push({path,before_sha256:createHash('sha256').update(before).digest('hex'),sha256:createHash('sha256').update(data).digest('hex')});
}
const receipt={run,owner:'/root',at:new Date().toISOString(),changed_items:changedItems,files,proof_interface_changed:false,gate_authorization:false,independent_acceptance:false};
writeFileSync(`${archive}/receipt.json`,JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({changed_items:changedItems.length,files:files.length,receipt:`${archive}/receipt.json`}));
