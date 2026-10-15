// Root-only current-run numeric metadata; preserves every source body.
import {readFileSync,writeFileSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml,split} from '../../tools/physics-support/pathway-lib.mjs';
import {runPages,dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
const run='physics-td-qft-rpm-62-2026-10-14';
if(!process.argv.includes('--writers-drained'))throw Error('Root must confirm final source handoffs');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const science=read('research/'+run+'-owner-scope-review-qed45-47-round-1/final-release.json');
if(science.source_write_released!==true&&science.sources_released_for_root_integration!==true&&science.source_write_release!==true)throw Error('Final QED release is not explicit');
const pages=runPages(process.cwd(),run),graph=dependencyLevels(pages,{validateLabels:false});
if(graph.errors.length)throw Error(graph.errors.join('\n'));
if(pages.length!==128||graph.items.size!==686||!graph.items.has('lem-tdmath-diagonal-model-hilbert-and-domain'))throw Error('Current registered frontier must contain 686 items on 128 pages, including approved new11');
const manifests=new Map(),writes=new Map(),changed=[];
const mf=batch=>{const p='research/'+run+'-batch-'+batch+'.pages.json';if(!manifests.has(p))manifests.set(p,read(p));return manifests.get(p)};
for(const[id,{item,page}]of graph.items){
 const path='items/'+id+'.md',raw=readFileSync(path,'utf8'),parts=split(raw),fm=yaml().parse(parts.fm),level=graph.levels.get(id);
 if(fm.id!==id||fm.status!=='draft')throw Error('Wrong identity or non-draft run item '+id);
 if(JSON.stringify(fm.deps)!==JSON.stringify(item.deps))throw Error('Source dependency mirror is stale '+id);
 if(fm.dependency_level!==level){
  const next=/^dependency_level:/m.test(parts.fm)?parts.fm.replace(/^dependency_level:.*$/m,'dependency_level: '+level):parts.fm.trimEnd()+'\ndependency_level: '+level;
  const output=raw.replace(parts.fm,next);
  if(split(output).body!==parts.body)throw Error('Numeric update changed body '+id);
  writes.set(path,output);changed.push({id,path,before:fm.dependency_level,after:level});
 }
 if(item.dependency_level!==level){const row=mf(page.batch).find(p=>p.id===page.id).items.find(i=>i.id===id);row.dependency_level=level;}
}
const plan=read('research/plan-spec.json');
for(const[path,rows]of manifests){
 writes.set(path,JSON.stringify(rows,null,2)+'\n');
 for(const page of rows){const p=plan.pages.find(x=>x.id===page.id);if(!p)throw Error('Missing approved page '+page.id);p.items=page.items.map(i=>({...i}));}
}
if(manifests.size)writes.set('research/plan-spec.json',JSON.stringify(plan,null,2)+'\n');
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),archive='research/'+run+'-owner-step2-numeric-metadata/'+stamp;
mkdirSync(archive,{recursive:true});const records=[];const hash=x=>createHash('sha256').update(x).digest('hex');
for(const[path,data]of writes){const before=readFileSync(path);writeFileSync(archive+'/'+path.replaceAll('/','__')+'.before',before);records.push({path,before_sha256:hash(before),after_sha256:hash(data)});}
for(const[path,data]of writes){writeFileSync(path+'.tmp',data);renameSync(path+'.tmp',path);}
const receipt={run,owner:'/root',at:new Date().toISOString(),items:graph.items.size,changed_items:changed,writes:records,source_bodies_unchanged:true,gate_authorization:false,independent_acceptance:false,mandatory_next_action:'Run explicit proof-layout on changed source paths after this final metadata edit.'};
writeFileSync(archive+'/receipt.json',JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({items:graph.items.size,changed_sources:changed.length,writes:writes.size,receipt:archive+'/receipt.json'}));
