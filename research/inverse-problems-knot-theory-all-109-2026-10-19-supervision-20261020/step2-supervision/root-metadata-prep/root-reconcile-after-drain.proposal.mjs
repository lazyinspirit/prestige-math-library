#!/usr/bin/env node
// ROOT-ONLY PROPOSAL. Author ran syntax check only. No hashes, gates, reviews,
// readiness, engine transitions, source-reading assertions or proof generation.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const argv=process.argv.slice(2),arg=k=>{const i=argv.indexOf(k);return i<0?undefined:argv[i+1];};
const root=path.resolve(arg('--root')??process.cwd()),apply=argv.includes('--apply');
assert(arg('--decisions')&&arg('--archive-dir'),'Require --decisions FILE --archive-dir DIR [--apply]');
const abs=f=>{const p=path.resolve(root,f);assert(p.startsWith(root+path.sep),'Repository-relative path required');return p;};
const guards=new Map(),changes=new Map(),issues=[];
const read=f=>{const bytes=fs.readFileSync(abs(f));if(guards.has(f))assert(bytes.equals(guards.get(f)),`Concurrent input ${f}`);else guards.set(f,bytes);return bytes.toString('utf8');};
const json=f=>JSON.parse(read(f)),same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const put=(f,next,reason)=>{const before=read(f);if(before!==next)changes.set(f,{before,next,reason});};
const load=async f=>import(pathToFileURL(abs(f)).href);
const {yaml}=await load('tools/pathway-lib.mjs'),YAML=yaml();
const {SOURCE_SECTIONS,sourceSectionText,sectionText}=await load('tools/facts-block.mjs');
const {dependencyLevels}=await load('tools/item-dependency-levels.mjs');
const {isProofBearing}=await load('tools/proof-bearing.mjs');
const D=json(arg('--decisions'));
assert.equal(D.version,1);assert.equal(D.run,RUN);assert.equal(D.authorized_by,'/root');
assert.equal(D.scope_policy,'fixed-1471-items-218-pages-109-batches');
const stateFile=`.autopilot/${RUN}/state.json`,state=json(stateFile);
assert.equal(state.run,RUN);assert.equal(state.stage,'2-scope-review');assert.equal(state.pauseAfter,'2-scope-review');
assert(!state.stages?.['2-scope-review']?.gatesPassedAt,'Do not reconcile after a completed gate snapshot');
const live=Object.entries(state.dispatches??{}).filter(([,d])=>d.startedAt&&!d.endedAt).map(([k])=>k);
if(live.length)issues.push({type:'live-native-writers',dispatches:live});
const batchLevelFile=`research/${RUN}-batch-dependency-levels.json`;
if(fs.existsSync(abs(batchLevelFile)))read(batchLevelFile); // archive prior native derived labels; do not compute them here
const states=[];
for(let n=1;n<=109;n++){const file=`research/${RUN}-scope-review/batch-${n}/state.json`;const s=json(file);assert.equal(String(s.batch),String(n));states.push({batch:String(n),phase:s.phase,file});}
const unfinished=states.filter(s=>s.phase!=='accepted');if(unfinished.length)issues.push({type:'not-all-native-accepted',batches:unfinished});
if(apply){assert.equal(D.all_external_writers_drained,true);assert(Array.isArray(D.drain_evidence)&&D.drain_evidence.length);for(const f of D.drain_evidence)read(f);assert.equal(live.length,0);assert.equal(unfinished.length,0);}
const parse=f=>{const text=read(f),m=text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);assert(m,`Malformed envelope ${f}`);const doc=YAML.parseDocument(m[2],{uniqueKeys:true});assert.equal(doc.errors.length,0,`Malformed YAML ${f}`);return {file:f,text,m,doc,fm:doc.toJS(),body:m[4]};};
const serial=p=>{let header=p.doc.toString({lineWidth:0}).trimEnd();if(p.m[1].includes('\r'))header=header.replace(/\r?\n/g,'\r\n');return p.m[1]+header+p.m[3]+p.body;};
const manifests=[],pages=new Map(),homes=new Map(),items=new Map();
for(let n=1;n<=109;n++){
 const file=`research/${RUN}-batch-${n}.pages.json`,rows=json(file);assert(Array.isArray(rows)&&rows.length===2);
 manifests.push({file,rows,batch:String(n)});
 for(const p of rows){assert(!pages.has(p.id));pages.set(p.id,{page:p,batch:String(n)});for(const i of p.items){assert(!homes.has(i.id));homes.set(i.id,p.id);}}
}
assert.equal(pages.size,218);assert.equal(homes.size,1471);
const mirror=['kind','title','deps','justified_by','forward_refs','proof_strategy','provenance','generation','local_proof_acceptance','sources','axiom_use','axiom_base','axiom_strength'];
const canonicalOverrides=D.canonical_metadata_overrides??{};
for(const id of Object.keys(canonicalOverrides))assert(homes.has(id),`Out-of-frontier override ${id}`);
function claim(p){for(const h of SOURCE_SECTIONS){const t=sourceSectionText(p.body,h)?.trim();if(t)return t;}if(p.fm.kind==='open-problem')return sectionText(p.body,'Open problem').trim();if(p.fm.id==='rem-jones-polynomial-unknot-detection-status'){const a=sectionText(p.body,'Historical question').trim(),b=sectionText(p.body,'Status').trim();if(a&&b)return `## Historical question\n\n${a}\n\n## Status\n\n${b}`;}return '';}
for(const [id,home]of homes){
 const p=parse(`items/${id}.md`);assert.equal(p.fm.id,id);assert(Array.isArray(p.fm.deps??[]));
 const o=canonicalOverrides[id];if(o){assert(Array.isArray(o.evidence)&&o.evidence.length);for(const f of o.evidence)read(f);for(const [k,v]of Object.entries(o.fields)){assert(['deps','justified_by','sources','provenance','generation','local_proof_acceptance','axiom_use','axiom_base','axiom_strength'].includes(k));p.doc.set(k,v);p.fm[k]=v;}}
 items.set(id,p);const i=pages.get(home).page.items.find(x=>x.id===id);
 for(const k of mirror){if(k==='deps')i.deps=p.fm.deps??[];else if(Object.hasOwn(p.fm,k))i[k]=p.fm[k];else delete i[k];}
 for(const k of Object.keys(i))if(/^(external_|imported_|source_reading|reading_limits)/.test(k)&&!Object.hasOwn(p.fm,k)){
  // Author-specific manifest import/reading notes are historical evidence:
  // retain them; never delete because canonical frontmatter lacks the field.
 }
 for(const[k,v]of Object.entries(p.fm))if(/^(external_|imported_|source_reading|reading_limits)/.test(k))i[k]=v;
 const c=claim(p);assert(c,`No literal defining section ${id}`);i.statement=c;
 // strategy/risk/reading notes and all other row fields survive untouched.
}
const planFile='research/plan-spec.json',plan=json(planFile),planned=new Map(plan.pages.map(p=>[p.id,p]));
for(const id of Object.keys(D.requires_overrides??{}))assert(pages.has(id),`Out-of-scope requires override ${id}`);
for(const [id,h]of pages){const pp=planned.get(id);assert(pp);const override=D.requires_overrides?.[id];
 if(override){assert(Array.isArray(override)&&new Set(override).size===override.length);h.page.requires=[...override];pp.requires=[...override];}
 else if(!same(h.page.requires??[],pp.requires??[]))issues.push({type:'requires-plan-conflict',page:id,manifest:h.page.requires,plan:pp.requires});}
const main=id=>pages.get(id)?.page.kind==='B'?(pages.get(id).page.companion??id):id;
const closure=id=>{const seen=new Set(),todo=[...(planned.get(id)?.requires??[])];while(todo.length){const x=todo.pop();if(seen.has(x))continue;seen.add(x);todo.push(...(planned.get(x)?.requires??[]));}return seen;};
const pageMissing=[];
for(const [id,p]of items){const consumer=main(homes.get(id)),seen=closure(consumer);for(const dep of p.fm.deps??[])if(homes.has(dep)){const supplier=main(homes.get(dep));if(consumer!==supplier&&!seen.has(supplier))pageMissing.push({item:id,dependency:dep,consumer_page:consumer,supplier_page:supplier});}}
if(pageMissing.length)issues.push({type:'uncovered-inrun-page-edges',edges:pageMissing});
const visit=(id,visiting=new Set(),seen=new Set())=>{assert(!visiting.has(id),`Page cycle at ${id}`);if(seen.has(id))return;visiting.add(id);for(const x of planned.get(id)?.requires??[])if(pages.has(x))visit(x,visiting,seen);visiting.delete(id);seen.add(id);};for(const id of pages.keys())visit(id);
const graph=dependencyLevels([...pages.values()].map(h=>({...h.page,batch:h.batch})),{validateLabels:false});assert.equal(graph.errors.length,0,graph.errors.join('\n'));
for(const[id,level]of graph.levels){const p=items.get(id),row=pages.get(homes.get(id)).page.items.find(x=>x.id===id);row.dependency_level=level;if(p.fm.dependency_level!==level||canonicalOverrides[id]){p.doc.set('dependency_level',level);const next=serial(p);assert.equal(parseBody(next),p.body);put(p.file,next,'Canonical metadata/level only; argument bytes preserved');}}
function parseBody(text){return text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)([\s\S]*)$/)[1];}
for(const[id,h]of pages){const p=h.page;p.items.sort((a,b)=>a.dependency_level-b.dependency_level);const f=`library/${p.category}/${id}.md`,src=parse(f);assert.equal(src.fm.page,id);src.doc.set('items',p.items.filter(i=>!['example','counterexample'].includes(i.kind)).map(i=>i.id));src.doc.set('examples',p.items.filter(i=>['example','counterexample'].includes(i.kind)).map(i=>i.id));src.doc.set('requires',p.requires??[]);put(f,serial(src),'Fixed page inventory/order/requirements; full page body preserved');}
for(const m of manifests)put(m.file,JSON.stringify(m.rows,null,2)+'\n','Literal canonical metadata and defining-section mirrors; fixed homes');
if(!same(plan,json(planFile)))put(planFile,JSON.stringify(plan,null,2)+'\n','Explicit root approved scoped requires overrides only; unrelated plan values unchanged');
// Refresh only existing deps mirrors in source-resolution alternatives. Keep
// arguments, attempts, searches, source receipts and reading limits verbatim.
const alternativeUpdates=[];
const context=new Map();
const metadata=id=>{if(items.has(id))return items.get(id);if(!context.has(id))context.set(id,parse(`items/${id}.md`));return context.get(id);};
function alternatives(x,file,pointer=''){if(!x||typeof x!=='object')return;if(!Array.isArray(x)&&x.source_resolution){for(const[a,y]of (x.source_resolution.alternatives??[]).entries())if(y.item&&Array.isArray(y.deps)){if(!fs.existsSync(abs(`items/${y.item}.md`))){issues.push({type:'unresolved-alternative-item',file,item:y.item,pointer});continue;}const p=metadata(y.item);if(!same(y.deps,p.fm.deps??[])){alternativeUpdates.push({file,pointer:pointer+'/source_resolution/alternatives/'+a+'/deps',item:y.item,before:y.deps,after:p.fm.deps??[]});y.deps=p.fm.deps??[];}}}for(const[k,v]of Object.entries(x))if(!/(history|historical|attempts|searches|receipts)/i.test(k))alternatives(v,file,pointer+'/'+k);}
const newEdges=[],contractScopeFollowups=[];
for(const m of manifests){
 for(const suffix of ['coverage','source-coverage']){const cov=`research/${RUN}-batch-${m.batch}.${suffix}.json`;if(!fs.existsSync(abs(cov)))continue;const doc=json(cov);alternatives(doc,cov);put(cov,JSON.stringify(doc,null,2)+'\n','Existing current source_resolution.alternatives deps mirrors only; source/history fields unchanged');}
 // Contracts have a separate owner script at root-contract-prep. Read only
 // their exact scope here; never regenerate claims/citations/boundaries/risks.
 const cf=`research/${RUN}-batch-${m.batch}.proof-contracts.json`,contracts=json(cf);
 const owned=m.rows.flatMap(p=>p.items.map(i=>i.id));assert(Array.isArray(contracts.scope));
 for(const id of owned){const source=items.get(id),required=isProofBearing(source.body)||source.fm.kind==='open-problem';const entry=contracts.contracts?.[id];if(required&&(!contracts.scope.includes(id)||!entry||typeof entry!=='object'||Array.isArray(entry)))issues.push({type:'missing-required-contract',id,file:cf,reason:source.fm.kind==='open-problem'?'Native status-review contract':'Supplied argument under native isProofBearing'});else if(!required&&contracts.scope.includes(id)&&!entry)contractScopeFollowups.push({id,file:cf,reason:'Proof-free item is explicitly selected in contract scope but has no entry; proof-contract --strict checks every selected row. Separate contract owner must reconcile scope, not invent a proof contract.'});}
 const ef=`research/${RUN}-batch-${m.batch}.cross-batch-dependencies.json`,ledger=json(ef);assert(Array.isArray(ledger));
 for(const p of m.rows){for(const i of p.items){for(const relation of ['deps','justified_by','forward_refs'])for(const dep of i[relation]??[])if(homes.has(dep)&&pages.get(homes.get(dep)).batch!==m.batch){const key=`${relation}:${i.id}->${dep}`,sb=pages.get(homes.get(dep)).batch;const pair=ledger.filter(x=>x.kind==='item'&&x.consumer===i.id&&x.supplier===dep&&String(x.supplier_batch)===sb);assert(pair.length<=1,`Duplicate native pair requires history-preserving migration: ${i.id} -> ${dep}`);if(pair.length){const x=pair[0],recorded=x.relation??((x.declarations??[]).some(d=>d.endsWith('#forward_refs'))&&!(x.declarations??[]).some(d=>d.endsWith('#deps'))?'forward_refs':'deps');if(recorded!==relation)issues.push({type:'existing-pair-role-migration-needed',key,file:ef,current_relation:recorded,wanted_relation:relation,action:'Migrate single current row with original record retained in historical_review_records; never append a duplicate native pair.'});}else newEdges.push({key,kind:'item',relation,consumer:i.id,supplier:dep,consumer_batch:m.batch,supplier_batch:sb,file:ef});}}
 for(const dep of p.requires??[])if(pages.has(dep)&&pages.get(dep).batch!==m.batch){const key=`page:${p.id}->${dep}`,sb=pages.get(dep).batch;const exists=ledger.some(x=>x.kind==='page'&&x.consumer===p.id&&x.supplier===dep);if(!exists)newEdges.push({key,kind:'page',consumer:p.id,supplier:dep,consumer_batch:m.batch,supplier_batch:sb,file:ef});}}
 for(const e of newEdges.filter(x=>x.file===ef)){const adoption=D.edge_adoptions?.[e.key];if(!adoption){issues.push({type:'new-crossbatch-edge-needs-owner-evidence',...e});continue;}assert(adoption.reason&&adoption.evidence?.length);for(const f of adoption.evidence)read(f);ledger.push({kind:e.kind,...(e.relation?{relation:e.relation}:{}),consumer:e.consumer,supplier:e.supplier,consumer_batch:e.consumer_batch,supplier_batch:e.supplier_batch,status:'verified',review_scope:'Current declared-interface metadata reconciliation only; mathematical scope comes solely from named original native/owner acceptance evidence.',evidence:adoption.reason,acceptance_evidence:adoption.evidence,declarations:[e.file]});}
 put(ef,JSON.stringify(ledger,null,2)+'\n','Append exact root-adopted current crossbatch edges; retain every historical record');
}
// No stale historical receipt is deleted or stamped current. Root alone later
// recalculates batch levels using the native tool (it owns input hashing).
const report={version:1,run:RUN,mode:apply?'root-apply':'read-only-plan',at:new Date().toISOString(),counts:{items:homes.size,pages:pages.size,batches:manifests.length},issues,contract_scope_followups:contractScopeFollowups,alternative_deps_updates:alternativeUpdates,new_crossbatch_edges:newEdges,mutations:[...changes].map(([file,x])=>({file,reason:x.reason})),guarded_inputs:[...guards.keys()],preserved:['all canonical argument bodies','all native histories and counters','all source reading/fetch receipts','all proof contracts (separate root-contract-prep owner)' ,'fixed frontier and page homes','engine state and readiness'],next_root_command:`node tools/batch-dependency-levels.mjs write --run ${RUN}`,hash_computations:false,mathematical_review:false};
for(const[f,bytes]of guards)assert(fs.readFileSync(abs(f)).equals(bytes),`Input changed during preparation ${f}`);
if(!apply){console.log(JSON.stringify(report,null,2));process.exit(0);}
assert.equal(issues.length,0,'Resolve every reported metadata/evidence hold before --apply');
const archive=abs(arg('--archive-dir'));assert(archive.startsWith(abs(`research/${RUN}-supervision-20261020/step2-supervision/root-metadata-prep`)+path.sep));assert(!fs.existsSync(archive),'One fresh archive per exact application');
fs.mkdirSync(archive,{recursive:true});
const index=[];for(const[f,x]of changes){const dst=path.join(archive,'preimages',f);fs.mkdirSync(path.dirname(dst),{recursive:true});fs.writeFileSync(dst,x.before,{flag:'wx'});index.push({file:f,archive:path.relative(archive,dst)});}
if(guards.has(batchLevelFile)&&!changes.has(batchLevelFile)){const dst=path.join(archive,'preimages',batchLevelFile);fs.mkdirSync(path.dirname(dst),{recursive:true});fs.writeFileSync(dst,guards.get(batchLevelFile),{flag:'wx'});index.push({file:batchLevelFile,archive:path.relative(archive,dst),purpose:'Before later root native batch-level regeneration; not changed by this script'});}
fs.writeFileSync(path.join(archive,'archive-index.json'),JSON.stringify(index,null,2)+'\n',{flag:'wx'});
// Complete preflight again AFTER archiving and BEFORE any mutation.
for(const[f,bytes]of guards)assert(fs.readFileSync(abs(f)).equals(bytes),`Concurrent write before apply ${f}`);
for(const[f,x]of changes){assert.equal(fs.readFileSync(abs(f),'utf8'),x.before);const tmp=abs(f)+`.root-step2-metadata-${process.pid}.tmp`;fs.writeFileSync(tmp,x.next,{flag:'wx'});fs.renameSync(tmp,abs(f));}
fs.writeFileSync(path.join(archive,'root-application-report.json'),JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({changed:changes.size,archive,next:report.next_root_command}));
