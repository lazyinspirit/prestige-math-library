// Execute only after actual Step2 scientific releases and all native writers drain.
// Source-to-manifest transcription and dependency labels, never proof certification.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
import {sourceSectionText} from '../../tools/physics-support/facts-block.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const run='physics-remaining-80-2026-10-17';
const stateDir=join(root,'.physics-autopilot',run);
const releasePath=join(stateDir,'owner-step2-all-science-released.json');
const out=join(root,'research',run+'-owner-step2-metadata');
const read=p=>readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const sha=b=>createHash('sha256').update(b).digest('hex');
if(!existsSync(releasePath))throw Error('Await actual complete Step2 scientific release');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed amendment');
const release=json(releasePath);
if(release.all_scientific_escalations_resolved!==true||!release.reports?.length||!Array.isArray(release.new_local_items))throw Error('Incomplete actual release');
const extraCase=json(join(stateDir,'owner-step2-additional-dependency-case.json'));
if(extraCase.status!=='resolved scientific repair; mechanical join pending')throw Error('Additional dependency case still open');
for(const binding of release.source_bindings??[])if(sha(readFileSync(join(root,binding.path)))!==binding.sha256)throw Error('Source changed after actual scientific release '+binding.path);
const reports=()=>{for(const r of release.reports)if(sha(readFileSync(join(root,r.path)))!==r.sha256)throw Error('Changed scientific report '+r.path);};
const drain=()=>{
 const state=json(join(stateDir,'state.json'));
 if(state.stage!=='2-scope-review'||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Step2 native workers not drained');
 for(let n=1;n<=80;n++){
  const s=json(join(root,'research',run+'-scope-review','batch-'+n,'state.json'));
  if(s.phase!=='accepted')throw Error('Unresolved native scope '+n);
 }
};
reports();drain();
const originals=new Map(),sources=new Map(),pages=[];
for(let n=1;n<=80;n++){
 const file=join(root,'research',run+'-batch-'+n+'.pages.json'),raw=read(file);
 originals.set(file,raw);
 for(const page of JSON.parse(raw)){
  pages.push({...page,batch:String(n)});
  for(const claim of page.items){
   if(sources.has(claim.id))throw Error('Duplicate subject '+claim.id);
   const path=join(root,'items',claim.id+'.md'),item=readItem(path);
   if(item.id!==claim.id||item.status!=='draft')throw Error('Unexpected source identity/status '+claim.id);
   sources.set(claim.id,{path,item,claim});
   for(const key of ['kind','title','domain','library','deps','dependency_roles','physical_scope','empirical_premises','provenance','sources','forward_refs','external_refs','justified_by','aliases','relations']){
    if(item[key]!==undefined)claim[key]=item[key];
    else if(['forward_refs','external_refs','justified_by','empirical_premises','aliases','relations'].includes(key))delete claim[key];
   }
   for(const heading of ['Statement','Statement refuted','Definition','Postulate','Example','Algorithm','Remark']){
    const text=sourceSectionText(item.body,heading)?.trim();
    if(text){claim.statement=text;break;}
   }
  }
 }
}
const expected=709+release.new_local_items.length;
if(sources.size!==expected||pages.length!==160)throw Error('Unexpected actual frontier');
for(const id of release.new_local_items)if(!sources.has(id))throw Error('Unregistered approved local prerequisite '+id);
const graph=dependencyLevels(pages,{validateLabels:false});
if(graph.errors.length)throw Error(graph.errors.join('\n'));
const pending=new Map(),levelChanges=[];
for(const [id,{path,item,claim}] of sources){
 const level=graph.levels.get(id);
 if(!Number.isSafeInteger(level))throw Error('Missing dependency level '+id);
 claim.dependency_level=level;
 if(item.dependency_level===level)continue;
 const boundary=item.raw.indexOf('\n---',4);
 if(boundary<0)throw Error('Missing frontmatter '+id);
 let fm=item.raw.slice(0,boundary);
 fm=/^dependency_level:/m.test(fm)?fm.replace(/^dependency_level:[^\n]*$/m,'dependency_level: '+level):fm+'\ndependency_level: '+level;
 const next=fm+item.raw.slice(boundary);
 originals.set(path,item.raw);pending.set(path,next);
 levelChanges.push({id,before:item.dependency_level??null,after:level,body_unchanged:true});
}
for(let n=1;n<=80;n++)pending.set(join(root,'research',run+'-batch-'+n+'.pages.json'),JSON.stringify(pages.filter(p=>p.batch===String(n)).map(({batch,...page})=>page),null,2)+'\n');
reports();drain();
for(const [path,raw] of originals)if(read(path)!==raw)throw Error('Concurrent metadata mutation '+path);
for(const {path,item} of sources.values())if(read(path)!==item.raw)throw Error('Concurrent source mutation '+path);
mkdirSync(join(out,'before'),{recursive:true});
const files=[];
for(const [path,next] of pending){
 const old=originals.get(path);if(old===next)continue;
 const relative=path.slice(root.length),archive=join(out,'before',relative);
 mkdirSync(join(archive,'..'),{recursive:true});writeFileSync(archive,old,{flag:'wx'});
 writeFileSync(path+'.owner-temp',next);renameSync(path+'.owner-temp',path);
 files.push({path:relative,before:sha(old),after:sha(next)});
}
const bindings=[...sources].map(([id,{path,item}])=>({id,path:path.slice(root.length),sha256:sha(readFileSync(path)),body_sha256:sha(item.body)}));
const completion={run,at:new Date().toISOString(),qualification:'Actual current-source transcription and dependency labels only. Scientific decisions remain in preserved native/owner reports; readiness and full Step2 gates remain.',subjects:expected,pages:160,batches:80,release:{path:releasePath.slice(root.length),sha256:sha(readFileSync(releasePath))},files,levelChanges,source_bindings:bindings};
writeFileSync(join(out,'completion.json'),JSON.stringify(completion,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({subjects:expected,pages:160,changed_files:files.length,level_changes:levelChanges.length}));
