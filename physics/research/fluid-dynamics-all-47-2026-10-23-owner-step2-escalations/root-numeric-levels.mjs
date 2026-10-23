import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {runPages,dependencyLevels,orderedItems} from '../../../tools/physics-support/item-dependency-levels.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,out=`${base}/root-numeric-levels.json`;
if(existsSync(out))throw Error('Already applied');
const pages=runPages(process.cwd(),run),graph=dependencyLevels(pages,{validateLabels:false});
if(graph.errors.length||graph.items.size!==305||pages.length!==94)throw Error(JSON.stringify(graph.errors));
const sha=b=>createHash('sha256').update(b).digest('hex'),operations=new Map(),changes=[];
function stage(path,after){const before=rf(path,'utf8');if(before!==after)operations.set(path,{before,after});}
for(const entry of orderedItems(pages,{validateLabels:false})){
 const path=`items/${entry.id}.md`,raw=rf(path,'utf8'),m=raw.match(/^(---\n)([\s\S]*?)(\n---\n)([\s\S]*)$/);
 if(!m)throw Error('Missing metadata '+path);
 const doc=yaml().parseDocument(m[2],{uniqueKeys:true}),d=doc.toJS();
 if(doc.errors.length||d.id!==entry.id||d.status!=='draft'||JSON.stringify(d.deps)!==JSON.stringify(entry.item.deps))throw Error('Source graph mismatch '+entry.id);
 if(d.dependency_level!==entry.level){changes.push({id:entry.id,before:d.dependency_level??null,after:entry.level});doc.set('dependency_level',entry.level);stage(path,m[1]+doc.toString().trimEnd()+m[3]+m[4]);}
}
for(let n=1;n<=47;n++){
 const path=`research/${run}-batch-${n}.pages.json`,data=JSON.parse(rf(path));
 for(const p of data)for(const item of p.items)item.dependency_level=graph.levels.get(item.id);
 stage(path,JSON.stringify(data,null,2)+'\n');
}
const pp='research/plan-spec.json',plan=JSON.parse(rf(pp));
for(const p of plan.pages)for(const item of p.items??[])if(graph.items.has(item.id))item.dependency_level=graph.levels.get(item.id);
stage(pp,JSON.stringify(plan,null,2)+'\n');
const archive=`${base}/before-root-numeric-levels`;mkdirSync(archive,{recursive:false});
for(const[path,v]of operations){const dest=`${archive}/${path.replaceAll('/','__')}`;wf(dest,v.before,{flag:'wx'});v.archive=dest;}
for(const[path,v]of operations){if(rf(path,'utf8')!==v.before)throw Error('Concurrent write '+path);wf(path,v.after);}
const checked=dependencyLevels(runPages(process.cwd(),run));if(checked.errors.length)throw Error(checked.errors.join('\n'));
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),operation:'Compute actual in-frontier dependency levels in dependency order. Body bytes preserved; no scientific acceptance or gate claimed.',items:305,pages:94,changes,before:[...operations].map(([path,v])=>({path,archive:v.archive,sha256:sha(v.before),after_sha256:sha(v.after)})),complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({items:305,maximum_level:Math.max(...graph.levels.values()),source_changes:changes.length,files:operations.size}));
