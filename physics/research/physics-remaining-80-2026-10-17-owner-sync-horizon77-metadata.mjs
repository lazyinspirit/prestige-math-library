// Owner mechanical transcription only; no proof acceptance or gate authority.
import {readFileSync,readdirSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
import {sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-horizon77-metadata-42');
if(existsSync(join(out,'completion.json')))throw Error('Already transcribed; preserve history and use a new amendment');
const state=JSON.parse(readFileSync(join(root,'.physics-autopilot',run,'state.json')));
const stable=new Set(['77']);
if(!existsSync(join(root,'research',run+'-owner-batch77-residual-firstlaw-final.json')))throw Error('Await scientific batch77 final release');
const sha=b=>createHash('sha256').update(b).digest('hex'),pending=new Map(),originals=new Map(),sources=new Map(),pages=[];
const read=p=>readFileSync(p,'utf8');
const set=(p,body)=>{if(!originals.has(p))originals.set(p,read(p));pending.set(p,body);};
const manifests=readdirSync(join(root,'research')).filter(x=>new RegExp('^'+run+'-batch-\\d+\\.pages\\.json$').test(x));
for(const name of manifests){
 const batch=name.match(/-batch-(\d+)/)[1],path=join(root,'research',name),rows=JSON.parse(read(path));
 for(const page of rows){
  page.batch=batch;pages.push(page);
  if(!stable.has(batch))continue;
  for(const claim of page.items){
   if(!claim?.id)throw Error('Unfinished stable inventory '+page.id);
   const path=join(root,'items',claim.id+'.md'),item=readItem(path);sources.set(claim.id,{path,item,claim,page});
   if(item.id!==claim.id||!['draft','published'].includes(item.status))throw Error('Invalid source '+claim.id);
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
const graph=dependencyLevels(pages,{validateLabels:false});
const unresolved=graph.errors.filter(x=>!x.endsWith(': empty scaffold inventory'));
if(unresolved.length)throw Error(unresolved.join('\n'));
const changes=[];
for(const [id,{path,item,claim,page}] of sources){
 const level=graph.levels.get(id);if(!Number.isSafeInteger(level))throw Error('Missing level '+id);
 claim.dependency_level=level;
 if(item.dependency_level!==level){
  const boundary=item.raw.indexOf('\n---',4);if(boundary<0)throw Error('Frontmatter missing '+id);
  let fm=item.raw.slice(0,boundary),tail=item.raw.slice(boundary);
  if(/^dependency_level:/m.test(fm))fm=fm.replace(/^dependency_level:[^\n]*$/m,'dependency_level: '+level);
  else fm+='\ndependency_level: '+level;
  const next=fm+tail;if(next.slice(next.indexOf('\n---',4))!==tail)throw Error('Body mutation '+id);
  set(path,next);changes.push({id,batch:page.batch,from:item.dependency_level??null,to:level,before_raw_sha256:sha(item.raw),after_raw_sha256:sha(next),body_unchanged:true});
 }
}
for(const name of manifests){
 const batch=name.match(/-batch-(\d+)/)[1];if(!stable.has(batch))continue;
 const rows=pages.filter(p=>p.batch===batch).map(({batch,...p})=>p);set(join(root,'research',name),JSON.stringify(rows,null,2)+'\n');
}
// Recheck current exact files and successful native ownership before writing.
const current=JSON.parse(read(join(root,'.physics-autopilot',run,'state.json')));
for(const batch of stable){const d=current.dispatches['1-scaffold:batch-'+batch];if(!d?.endedAt||d.lastExitOk!==true)throw Error('Writer scope changed '+batch);}
for(const [path,body] of originals)if(read(path)!==body)throw Error('Concurrent mutation '+path);
for(const {path,item} of sources.values())if(read(path)!==item.raw)throw Error('Concurrent source mutation '+path);
mkdirSync(join(out,'before'),{recursive:true});
const fileRows=[];
for(const [path,next] of pending){
 const prev=originals.get(path);if(prev===next)continue;
 const relative=path.slice(root.length),archive=join(out,'before',relative);mkdirSync(join(archive,'..'),{recursive:true});writeFileSync(archive,prev);
 const temp=path+'.owner-temp';writeFileSync(temp,next);renameSync(temp,path);fileRows.push({path:relative,before:sha(prev),after:sha(next)});
}
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Mechanical current-source transcription and dependency labels for successful native scopes only; no science audit/readiness/gate claim. In-flight/empty inventories excluded, never passed.',stable_batches:[...stable],stable_items:sources.size,excluded_empty_inflight:graph.errors.filter(x=>x.endsWith(': empty scaffold inventory')),changes,files:fileRows},null,2)+'\n');
console.log(JSON.stringify({stable_batches:stable.size,stable_items:sources.size,level_changes:changes.length,changed_files:fileRows.length}));
