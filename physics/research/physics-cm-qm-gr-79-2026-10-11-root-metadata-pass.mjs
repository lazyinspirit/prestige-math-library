// Root metadata preparation; preserves item bodies and all review/boundary evidence.
import {readFileSync,writeFileSync,readdirSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
import {readItem} from '../tools/physics-support/physics-content.mjs';
import {dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {SOURCE_SECTIONS,sourceSectionText,splitFrontmatter,factParagraphs,numberedProofSteps} from '../tools/physics-support/facts-block.mjs';
const run='physics-cm-qm-gr-79-2026-10-11';
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const guards=new Map(),usedSources=new Set();
const read=p=>{const raw=readFileSync(p,'utf8');if(!guards.has(p))guards.set(p,sha(raw));return JSON.parse(raw);};
const state=read(`.physics-autopilot/${run}/state.json`);
if(Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writers active');
if(!process.argv.includes('--owners-drained'))throw Error('Root outside-owner drain attestation required');
const started=new Date().toISOString(),dir=`research/${run}-root-metadata-pass/${started.replaceAll(':','-')}`;
mkdirSync(`${dir}/before`,{recursive:true});
const imports=new Set(read('research/math-imports.json').files.map(r=>r.path));
const files=readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).sort((a,b)=>Number(a.match(/-batch-(\d+)/)[1])-Number(b.match(/-batch-(\d+)/)[1]));
if(files.length!==79)throw Error('Exact 79-batch frontier required');
const docs=files.map(n=>({path:`research/${n}`,pages:read(`research/${n}`)}));
const pages=docs.flatMap(d=>d.pages),subjects=new Set(pages.flatMap(p=>p.items.map(i=>i.id)));
if(subjects.size!==1551)throw Error(`Unexpected frontier size ${subjects.size}`);
const items=new Map(),aliases=new Map(),ambiguous=new Set();
for(const name of readdirSync('items').filter(n=>n.endsWith('.md'))){
 try{
  const item=readItem(`items/${name}`);guards.set(`items/${name}`,sha(item.raw));if(items.has(item.id))ambiguous.add(item.id);items.set(item.id,item);
  for(const a of item.aliases??[])aliases.set(a,[...(aliases.get(a)??[]),item.id]);
 }catch(error){if(subjects.has(name.slice(0,-3)))throw error;}
}
const source=id=>{
 const canonical=items.has(id)?id:aliases.get(id)?.length===1?aliases.get(id)[0]:null;
 if(!canonical||!items.has(canonical)||ambiguous.has(canonical))throw Error(`Missing or ambiguous used supplier ${id}`);
 usedSources.add(`items/${canonical}.md`);
 return items.get(canonical);
};
const changes=[];
function save(path,value){
 const before=readFileSync(path,'utf8'),after=typeof value==='string'?value:JSON.stringify(value,null,2)+'\n';
 if(before===after)return;
 if(process.argv.includes('--check-only'))throw Error(`Metadata reconciliation required before recertification: ${path}; no bytes changed`);
 if(guards.has(path)&&guards.get(path)!==sha(before))throw Error(`Changed loaded input ${path}`);
 if(imports.has(path))throw Error(`Imported snapshot mutation forbidden: ${path}`);
 const backup=join(dir,'before',path);mkdirSync(join(backup,'..'),{recursive:true});writeFileSync(backup,before);
 if(readFileSync(path,'utf8')!==before)throw Error(`Concurrent mutation ${path}`);
 writeFileSync(path,after);guards.set(path,sha(after));changes.push({path,before_sha256:sha(before),after_sha256:sha(after)});
 writeFileSync(`${dir}/changes.json`,JSON.stringify(changes,null,2)+'\n');
}
const section=item=>{
 for(const heading of SOURCE_SECTIONS){const text=sourceSectionText(item.body,heading)?.trim();if(text)return text;}
 return null;
};
// Split malformed multi-ID wikilinks into the same individual citations.
for(const id of subjects){
 const actual=source(id),path=`items/${id}.md`;
 const formatted=actual.raw.replace(/\[\[([a-z]+-[a-z0-9-]+(?:,\s*[a-z]+-[a-z0-9-]+)+)\]\]/g,(_all,list)=>{
  const targets=list.split(',').map(s=>s.trim());for(const token of targets)source(token);
  return targets.map(token=>'[['+token+']]').join(', ');
 });
 if(formatted!==actual.raw){save(path,formatted);items.set(id,readItem(path));}
}
// Cached metadata takes its values from the actual owned authored carrier.
for(const page of pages)for(const item of page.items){
 const actual=source(item.id);
 if(actual.id!==item.id)throw Error('Owned manifest identity resolves only through an alias: '+item.id);
 for(const key of ['kind','domain','title','deps','dependency_roles','justified_by','forward_refs','external_refs','physical_scope']){
  if(actual[key]!==undefined)item[key]=structuredClone(actual[key]);
  else if(['justified_by','forward_refs','external_refs'].includes(key)&&item[key]!==undefined)item[key]=[];
 }
 const claim=section(actual);if(claim&&actual.kind!=='experiment')item.statement=claim;
}
const graph=dependencyLevels(pages,{validateLabels:false});
if(graph.errors.length)throw Error(graph.errors.join('\n'));
const ordered=[...graph.items].sort(([a],[b])=>graph.levels.get(a)-graph.levels.get(b)||a.localeCompare(b));
for(const [id,{item}] of ordered){
 const level=graph.levels.get(id);item.dependency_level=level;
 const actual=source(id),path=`items/${id}.md`,{fm,body}=splitFrontmatter(actual.raw);
 if(actual.dependency_level!==level){
  if(!/^dependency_level:\s*\d+\s*$/m.test(fm))throw Error(`Missing scalar dependency_level ${id}`);
  const updated=actual.raw.replace(/^dependency_level:\s*\d+\s*$/m,`dependency_level: ${level}`);
  if(splitFrontmatter(updated).body!==body)throw Error(`Unexpected body mutation ${id}`);
  save(path,updated);
 }
}
for(const doc of docs)save(doc.path,doc.pages);
// Parser-derived caches only; risk_review, boundary and source evidence are retained.
for(const doc of docs){
 const path=doc.path.replace('.pages.json','.proof-contracts.json');
 if(!existsSync(path))throw Error(`Missing scoped contract ${path}`);
 const contractsDoc=read(path),contracts=contractsDoc.contracts??contractsDoc;
 for(const page of doc.pages)for(const item of page.items){
  if(!contracts[item.id])continue;
  const actual=source(item.id),facts=[...factParagraphs(actual.body).values()],steps=numberedProofSteps(actual.body);
  if(!facts.length||!steps.length)continue;
  const original=contracts[item.id];
  const priorCitations=new Map((original.citations??[]).filter(Boolean).map(c=>[c.fact+'|'+c.source,c]));
  const priorDerivations=new Map((original.derivations??[]).filter(Boolean).map(d=>[d.step,d]));
  const priorRoutine=new Map((original.routine_steps??[]).filter(Boolean).map(d=>[d.step,d]));
  const stepIds=new Set(steps.map(s=>s.id));
  const parsed=steps.map(s=>({...s,tokens:new Set([...s.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].filter(m=>m[2]||/^step\s/.test(m[0])||stepIds.has(m[1])).map(m=>m[1]??m[2]))}));
  const citations=[];
  for(const fact of facts)for(const id of [...new Set(fact.links)]){
   const supplier=source(id);let selected=null;
   for(const heading of SOURCE_SECTIONS){const quote=sourceSectionText(supplier.body,heading)?.trim();if(quote){selected={source_section:heading,quote};break;}}
   if(!selected)throw Error(`Missing citable section ${item.id}:${id}`);
   citations.push({...priorCitations.get(fact.label+'|'+id),fact:fact.label,source:id,...selected,uses:parsed.filter(s=>s.tokens.has(fact.label)).map(s=>s.id)});
  }
  const refreshed=parsed.map(s=>{
   const inputs=[...s.inputs],have=new Set(inputs.map(t=>t.replace(/^step\s+/,'')));
   for(const token of s.tokens)if(!have.has(token))inputs.push(/^\d/.test(token)?`step ${token}`:token);
   const prior=priorRoutine.get(s.id)??priorDerivations.get(s.id);
   return {...prior,id:prior?.id??`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs};
  });
  contracts[item.id]={...original,citations,derivations:refreshed.filter(s=>!priorRoutine.has(s.step)),
   ...(original.routine_steps!==undefined?{routine_steps:refreshed.filter(s=>priorRoutine.has(s.step))}:{})};
 }
 save(path,contractsDoc);
}
const relevant=[...new Set([...usedSources,...docs.map(d=>d.path),...docs.map(d=>d.path.replace('.pages.json','.proof-contracts.json'))])];
for(const path of relevant)if(sha(readFileSync(path))!==guards.get(path))throw Error(`Input changed during metadata preparation ${path}`);
const report={version:1,run,mode:'dependency-ordered metadata-only preparation',started_at:started,finished_at:new Date().toISOString(),subjects:ordered.map(([id])=>id),inputs:relevant.map(path=>({path,sha256:guards.get(path)})),changes,mathematical_review:false,gate_permission:false};
writeFileSync(`${dir}/report.json`,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({report:`${dir}/report.json`,subjects:ordered.length,changed_files:changes.length}));
