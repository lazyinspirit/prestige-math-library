// Mechanical current-source transcription after the separately recorded gate52 repairs.
// Prepare only while repair owners work; execute only after their final release.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
import {sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-gate52-metadata-53');
const json=p=>JSON.parse(readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex');
const releasePath=join(root,'.physics-autopilot',run,'owner-gate52-all-repairs-released.json');
if(!existsSync(releasePath))throw Error('Await actual final repair-owner releases');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed amendment');
const release=json(releasePath);
if(release.all_assigned_repairs_resolved!==true||!Array.isArray(release.reports)||!release.reports.length)throw Error('Incomplete actual release');
for(const report of release.reports)if(sha(readFileSync(join(root,report.path)))!==report.sha256)throw Error('Changed repair report '+report.path);
const state=json(join(root,'.physics-autopilot',run,'state.json'));
for(let b=1;b<=80;b++){const d=state.dispatches['1-scaffold:batch-'+b];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Native author not drained '+b);}
const sources=new Map(),pages=[],originals=new Map(),pending=new Map();
for(let b=1;b<=80;b++){
 const path=join(root,'research',run+'-batch-'+b+'.pages.json'),raw=readFileSync(path,'utf8');originals.set(path,raw);
 for(const page of JSON.parse(raw)){
  pages.push({...page,batch:String(b)});
  for(const claim of page.items){
   if(sources.has(claim.id))throw Error('Duplicate item '+claim.id);
   const path=join(root,'items',claim.id+'.md'),item=readItem(path);
   if(item.id!==claim.id||item.status!=='draft')throw Error('Unexpected selected source identity/status '+claim.id);
   sources.set(claim.id,{path,item,claim,page});
   for(const key of ['kind','title','domain','library','deps','dependency_roles','physical_scope','empirical_premises','provenance','sources','forward_refs','external_refs','justified_by']){
    if(item[key]!==undefined)claim[key]=item[key];
    else if(['forward_refs','external_refs','justified_by'].includes(key))delete claim[key];
   }
   for(const heading of ['Statement','Statement refuted','Definition','Postulate','Example','Algorithm','Remark']){
    const text=sourceSectionText(item.body,heading)?.trim();if(text){claim.statement=text;break;}
   }
  }
 }
}
if(sources.size!==709||pages.length!==160)throw Error('Frontier scope changed');
const graph=dependencyLevels(pages,{validateLabels:false});if(graph.errors.length)throw Error(graph.errors.join('\n'));
const levelChanges=[];
for(const [id,{path,item,claim}] of sources){
 const level=graph.levels.get(id);if(!Number.isSafeInteger(level))throw Error('Missing level '+id);
 claim.dependency_level=level;
 if(item.dependency_level===level)continue;
 const boundary=item.raw.indexOf('\n---',4);if(boundary<0)throw Error('Frontmatter missing '+id);
 let fm=item.raw.slice(0,boundary);const body=item.raw.slice(boundary);
 fm=/^dependency_level:/m.test(fm)?fm.replace(/^dependency_level:[^\n]*$/m,'dependency_level: '+level):fm+'\ndependency_level: '+level;
 originals.set(path,item.raw);pending.set(path,fm+body);
 levelChanges.push({id,before:item.dependency_level??null,after:level,body_unchanged:true});
}
for(let b=1;b<=80;b++)pending.set(join(root,'research',run+'-batch-'+b+'.pages.json'),JSON.stringify(pages.filter(p=>p.batch===String(b)).map(({batch,...p})=>p),null,2)+'\n');
for(const [path,raw] of originals)if(readFileSync(path,'utf8')!==raw)throw Error('Concurrent metadata mutation '+path);
for(const {path,item} of sources.values())if(readFileSync(path,'utf8')!==item.raw)throw Error('Concurrent source mutation '+path);
for(const report of release.reports)if(sha(readFileSync(join(root,report.path)))!==report.sha256)throw Error('Concurrent repair-report mutation');
mkdirSync(join(out,'before'),{recursive:true});const files=[];
for(const [path,next] of pending){const before=originals.get(path);if(before===next)continue;const relative=path.slice(root.length),archive=join(out,'before',relative);mkdirSync(join(archive,'..'),{recursive:true});writeFileSync(archive,before);writeFileSync(path+'.owner-temp',next);renameSync(path+'.owner-temp',path);files.push({path:relative,before:sha(before),after:sha(next)});}
const bindings=[...sources].map(([id,{path,item}])=>({id,path:path.slice(root.length),sha256:sha(readFileSync(path)),body_sha256:sha(item.body)}));
const completion={run,at:new Date().toISOString(),qualification:'Mechanical source-to-manifest metadata transcription and numeric labels after actual recorded gate52 owner repairs; not proof acceptance, independent review or gate authority.',subjects:709,pages:160,batches:80,repair_release:{path:releasePath.slice(root.length),sha256:sha(readFileSync(releasePath))},files,levelChanges,source_bindings:bindings};
writeFileSync(join(out,'completion.json'),JSON.stringify(completion,null,2)+'\n');console.log(JSON.stringify({subjects:709,pages:160,changed_files:files.length,level_changes:levelChanges.length}));
