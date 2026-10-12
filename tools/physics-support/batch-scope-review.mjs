// Step 2 reviews and repairs content. The owner orchestrator recertifies it.
import { existsSync, realpathSync, readFileSync, writeFileSync, mkdirSync, renameSync, readdirSync, unlinkSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadStep3 } from './frontier-snapshot.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { yaml } from './pathway-lib.mjs';
import { physicalInterface } from './physics-interface.mjs';
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const assert=(ok,message)=>{if(!ok)throw Error(message);};
const safe=value=>{assert(/^[a-zA-Z0-9_-]+$/.test(value??''),'Invalid identity');return String(value);};
const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
const atomic=(path,value)=>{mkdirSync(resolve(path,'..'),{recursive:true});const tmp=`${path}.${process.pid}.tmp`;writeFileSync(tmp,JSON.stringify(value,null,2)+'\n');renameSync(tmp,path);};
export const loopDir=(root,run,batch)=>join(root,'research',`${safe(run)}-scope-review`,`batch-${safe(batch)}`);
const label=(batch,phase,round)=>`scope-${phase}-${batch}-${round}`;
const reportPath=(root,run,batch,phase,round)=>join(loopDir(root,run,batch),`${phase}-${round}.json`);
function snapshot(ctx){return ctx.scopeSnapshot??=loadStep3(ctx.repo,ctx.run);}
function readScopeItems(root){
  return readdirSync(join(root,'items')).filter(name=>name.endsWith('.md')).map(name=>{
    const text=readFileSync(join(root,'items',name),'utf8'), fm=text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'';
    const deps=[...new Set(['deps','justified_by','forward_refs'].flatMap(key=>frontmatterList(fm,key)))];
    return {id:name.slice(0,-3),deps,references:[...text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1]),aliases:frontmatterList(fm,'aliases')};
  });
}
function publicInterface(text){
  return [physicalInterface(text), ...[...text.replace(/^---\r?\n[\s\S]*?\r?\n---/,'').matchAll(/^##[ \t]+(?:Statement|Definition|Postulate|Observations|Uncertainty|Setup|Procedure|Interpretation)[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm)].map(m=>m[0].replace(/\r\n/g,'\n').trim())];
}
export function batchInput(root,run,batch,pass=null){
  const s=pass?snapshot(pass):loadStep3(root,run), pages=s.pages.filter(page=>page.batch===String(batch));
  assert(pages.length&&pages.every(p=>p.items?.length),`Batch ${batch}: empty inventory`);
  const inventory={pages:pages.map(p=>p.id),items:[...new Set([...pages.flatMap(p=>p.items.map(i=>i.id)),...(loopState(root,run,batch).added_items??[])])],pairs:[...s.pairs].filter(([,pair])=>pair[0].batch===String(batch)).map(([id])=>id)};
  return {inventory,snapshot:s};
}
export function loopState(root,run,batch,pass=null){
  const path=join(loopDir(root,run,batch),'state.json');
  const state=existsSync(path)?read(path):{version:1,run,batch:String(batch),reviews:[],repairs:[],phase:'review'};
  if(state.phase==='review'&&state.reviews.length>=2||state.phase==='repair'&&state.repairs.length>=1){state.phase='held';state.reason='Single local repair exhausted; owner resolution required';}
  return state;
}
function save(ctx,batch,state){atomic(join(loopDir(ctx.repo,ctx.run,batch),'state.json'),state);}
export function accepted(root,run,batch){return loopState(root,run,batch).phase==='accepted';}
export function engineRepairEligible(ctx,batch){return loopState(ctx.repo,ctx.run,batch).phase!=='held';}
export function loopPattern(ctx,batches){
  const labels=[];
  for(const batch of batches){const s=loopState(ctx.repo,ctx.run,batch);if(s.phase==='accepted')labels.push(`tool-scope-accepted-${batch}`);if(s.prepared&&s.phase!=='held')labels.push(`${s.prepared.role}-${s.prepared.label}`);}
  return labels.length?new RegExp(`^(?:${labels.join('|')})\\.result\\.json$`):/^(?!)$/;
}
/** Actual item and page prerequisites; never infer order from batch numbers. */
export function prerequisiteBatches(root, run, batch, pass=null) {
  const snapshot = pass ? (pass.scopeSnapshot??=loadStep3(root,run)) : loadStep3(root,run), home = new Map(snapshot.pages.map(page => [page.id, page.batch]));
  const out = new Set(), deps = new Set();
  for (const page of snapshot.pages.filter(page => page.batch === String(batch))) {
    for (const id of page.requires ?? []) if (home.has(id) && home.get(id) !== String(batch)) out.add(home.get(id));
    for (const item of page.items ?? []) {
      const path=join(root,'items',`${item.id}.md`);
      const text=existsSync(path)?readFileSync(path,'utf8'):'';
      const fm=yaml().parse(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};
      for (const id of [...(item.deps??[]),...(fm.deps??[])]) deps.add(id);
    }
  }
  // Most construction inventories are empty, and canonical dependencies already
  // have manifest owners. Read the corpus only when a used ID needs aliases.
  const unresolved = new Set([...deps].filter(id => !snapshot.items.has(id)
    && !existsSync(join(root, 'items', `${id}.md`))));
  const aliases = new Map();
  if (unresolved.size) {
    const library = pass ? (pass.scopeLibrary??=readScopeItems(root)) : readScopeItems(root);
    const canonical = new Set(library.map(item => item.id));
    for (const item of library) for (const alias of item.aliases ?? [])
      if (unresolved.has(alias) && !canonical.has(alias)) {
        assert(!aliases.has(alias) || aliases.get(alias) === item.id, `Ambiguous alias ${alias}`);
        aliases.set(alias, item.id);
      }
  }
  for (const id of deps) {
    const owner = snapshot.items.get(aliases.get(id) ?? id)?.page.batch;
    if (owner && owner !== String(batch)) out.add(owner);
  }
  return [...out].sort((a,b) => Number(a)-Number(b));
}

/** Full transitive consumer cone, including definitions and nonlogical uses. */
export function consumers(root, changed, extra = [], current = null) {
  const items = current??readScopeItems(root), byId = new Map(items.map(item => [item.id, item]));
  for (const item of extra) {
    const current=byId.get(item.id);
    byId.set(item.id,current?{...current,deps:[...new Set([...(item.deps??[]),...(current.deps??[])])],
      references:[...new Set([...(item.references??[]),...(current.references??[])])]}:item);
  }
  const aliases = new Map();
  for (const item of [...items,...extra]) for (const alias of item.aliases ?? []) if (!byId.has(alias)) {
    assert(!aliases.has(alias) || aliases.get(alias) === item.id, `Ambiguous alias ${alias}`); aliases.set(alias,item.id);
  }
  const reverse = new Map();
  for (const item of byId.values()) for (const dep of [...(item.deps ?? []), ...(item.references ?? [])]) {
    const id = aliases.get(dep) ?? dep;
    if (!reverse.has(id)) reverse.set(id, []);
    reverse.get(id).push(item.id);
  }
  const paths = new Map();
  for(const root of changed){
    const seen=new Set([root]),queue=[[root]];
    for (let i=0; i<queue.length; i++) for (const id of reverse.get(queue[i].at(-1)) ?? []) {
      if (seen.has(id)) continue;
      seen.add(id); const path=[...queue[i],id]; queue.push(path);
      if(id!==root){if(!paths.has(id))paths.set(id,[]);paths.get(id).push(path);}
    }
  }
  return [...paths].map(([id,all]) => ({ id,path:all[0],paths:all })).sort((a,b)=>a.id.localeCompare(b.id));
}

export function repairScope(ctx,batch,library=null){
  const s=loopState(ctx.repo,ctx.run,batch);if(s.prepared?.simple_loop&&s.prepared.write_files)return {files:s.prepared.write_files,batches:s.prepared.write_batches,consumers:s.prepared.consumer_scope??[]};
  const input=batchInput(ctx.repo,ctx.run,batch,ctx),owner=s.phase==='held', roots=new Set(input.inventory.items);
  library??=ctx.scopeLibrary??=readScopeItems(ctx.repo);
  const known=new Set(library.map(i=>i.id));
  if(owner)for(const [phase,rows] of [['review',s.reviews],['repair',s.repairs],['owner',s.owner_repairs??[]]]){
    const last=rows.at(-1);if(last)for(const f of read(reportPath(ctx.repo,ctx.run,batch,phase,last.round)).findings??[])if(known.has(f.id))roots.add(f.id);
  }
  const affected=consumers(ctx.repo,[...roots],library,library), ids=new Set([...roots,...affected.map(i=>i.id)]);
  const owned=owner?ids:new Set(input.inventory.items), locks=new Set([String(batch)]), homes=new Set([String(batch)]);
  for(const id of ids){const home=input.snapshot.items.get(id)?.page.batch;if(home){locks.add(home);if(owner)homes.add(home);}}
  const files=new Set([...owned].map(id=>`items/${id}.md`));
  for(const page of input.snapshot.pages)if(homes.has(page.batch))files.add(`library/${page.category}/${page.id}.md`);
  const imports=join(ctx.repo,'research','math-imports.json');if(existsSync(imports))for(const row of read(imports).files??[])files.delete(row.path);
  return {files:[...files],batches:[...locks],consumers:affected};
}
export function repairCohort(ctx,batch){
  const s=loopState(ctx.repo,ctx.run,batch),cohort=new Set([String(batch)]);
  if(s.phase!=='repair')return [...cohort];
  const homes=new Set(repairScope(ctx,batch).batches);
  for(const b of new Set(snapshot(ctx).pages.map(p=>p.batch))){
    if(b===String(batch))continue;
    const p=loopState(ctx.repo,ctx.run,b).prepared;
    if(p?.write_batches?.some(home=>homes.has(home)))cohort.add(b);
  }
  return [...cohort];
}
export function batchPlans(ctx,batches,slots=30){
  const selected=[],reserved=new Set();
  for(const batch of batches){
    const s=loopState(ctx.repo,ctx.run,batch),writes=s.phase==='repair';
    const locks=writes?repairScope(ctx,batch).batches:[];if(locks.some(b=>reserved.has(b)))continue;
    const p=batchPlan(ctx,batch);if(p){selected.push(p);for(const b of locks)reserved.add(b);}
    if(selected.length>=slots)break;
  }
  return selected;
}
export function batchPlan(ctx,batch,library=null){
  const s=loopState(ctx.repo,ctx.run,batch);if(s.phase==='accepted')return null;
  assert(engineRepairEligible(ctx,batch),`Batch ${batch} held for owner resolution`);
  const phase=s.phase,round=phase==='review'?s.reviews.length:s.repairs.length+1;
  assert(phase==='review'?round<2:round<=1,'Single local repair budget exhausted; owner resolution required');
  const dir=loopDir(ctx.repo,ctx.run,batch),task=join(dir,`${phase}-${round}.task.md`),role=phase==='review'?'scope-reviewer':'scope-repairer';
  if(!s.prepared?.simple_loop){
    const input=batchInput(ctx.repo,ctx.run,batch,ctx),p={phase,round,role,label:label(batch,phase,round),inventory:input.inventory,simple_loop:true};
    if(phase!=='review'){
      const scope=repairScope(ctx,batch,library);Object.assign(p,{write_files:scope.files,write_batches:scope.batches,consumer_scope:scope.consumers});
      p.before_interfaces=Object.fromEntries(scope.files.filter(f=>f.startsWith('items/')).map(f=>[f.slice(6,-3),publicInterface(readFileSync(join(ctx.repo,f),'utf8'))]));
    }
    s.prepared=p;atomic(join(dir,`${phase}-${round}.input.json`),p);save(ctx,batch,s);
    const prior=s.reviews.at(-1);
    writeFileSync(task,`# Batch ${batch}: ${phase} ${round}\n\nRun: ${ctx.run}\nBatch: ${batch}\nRound: ${round}\n`
      +`Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.\n`
      +`Pages: ${p.inventory.pages.join(', ')}\nItems: ${p.inventory.items.join(', ')}\n`
      +(prior?`Consolidated findings: ${JSON.stringify(read(reportPath(ctx.repo,ctx.run,batch,'review',prior.round)).findings)}\n`:'')
      +(phase!=='review'?`Authorized source files: ${JSON.stringify(p.write_files)}. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.\n`:'')
      +`Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.\n`
      +`Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.\n`
      +`Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.\n`
      +`Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.\n`
      +`Previous repair consumers: ${JSON.stringify(s.repairs.at(-1)?.consumers??[])}.\n`);
  }
  const p=s.prepared,previous=s[phase==='review'?'reviews':'repairs'].at(-1);
  const receipt=previous?join(ctx.dispatchDir,`${role}-${label(batch,phase,previous.round)}.result.json`):null,session=receipt&&existsSync(receipt)?read(receipt).session_id:null;
  return {role,label:p.label,job:phase==='review'?'audit':'authoring',covers:[String(batch)],brief:`briefs/scope-${phase==='review'?'reviewer':'repairer'}.md`,task:relative(ctx.repo,task),outputSchema:'briefs/schemas/batch-scope-review.json',resultArtifact:relative(ctx.repo,reportPath(ctx.repo,ctx.run,batch,phase,round)),sessionHome:join(dir,`${role}-session`),...(session?{resumeSession:session}:{}),timeout:14400};
}
export function collectBatch(ctx,batch){
  const s=loopState(ctx.repo,ctx.run,batch),p=s.prepared;if(!p||s.phase==='accepted'||s.phase==='held')return s;
  const receipt=join(ctx.dispatchDir,`${p.role}-${p.label}.result.json`);if(!existsSync(receipt)||read(receipt).ok!==true)return s;
  const done=read(receipt);assert(done.run===ctx.run&&done.role===p.role&&same(done.covers??[],[String(batch)]),'Wrong worker receipt');
  const row=read(reportPath(ctx.repo,ctx.run,batch,p.phase,p.round));
  if(row.decision==='escalate'&&!row.reviewed_items?.length&&!row.reviewed_pages?.length){
    // An unreadable sandbox is a dispatch failure, not a completed mathematical round.
    s.reason=row.reason;s.phase='held';delete s.prepared;save(ctx,batch,s);return s;
  }
  assert(row.version===1&&row.run===ctx.run&&row.batch===String(batch)&&row.round===p.round,'Wrong batch report identity');
  assert(same(row.reviewed_items,p.inventory.items)&&row.reviewed_items.length===p.inventory.items.length&&same(row.reviewed_pages,p.inventory.pages)&&row.reviewed_pages.length===p.inventory.pages.length,'Incomplete batch report');
  assert(['accept','repair','escalate'].includes(row.decision)&&Array.isArray(row.findings)&&Array.isArray(row.consumer_checks),'Invalid batch verdict');
  assert(row.decision!=='accept'||!row.findings.length,'Acceptance has unresolved findings');
  if(p.phase==='review'){
    const required=s.repairs.at(-1)?.consumers??[];assert(required.every(i=>row.consumer_checks.some(c=>c.id===i.id)),'Reviewer omitted affected consumers');
    s.reviews.push({round:p.round,decision:row.decision});s.phase=row.decision==='accept'?'accepted':row.decision==='escalate'||s.reviews.length>=2?'held':'repair';
  }else{
    const changed=[];
    for(const [id,before] of Object.entries(p.before_interfaces??{})){
      const file=join(ctx.repo,'items',`${id}.md`);assert(existsSync(file),'Repair removed approved source scope');
      if(JSON.stringify(publicInterface(readFileSync(file,'utf8')))!==JSON.stringify(before))changed.push(id);
    }
    const affected=changed.length?consumers(ctx.repo,changed):[];
    for(const old of p.consumer_scope??[])if(old.paths.some(path=>changed.includes(path[0]))&&!affected.some(i=>i.id===old.id))affected.push(old);
    assert(affected.every(i=>row.consumer_checks.some(c=>c.id===i.id)),'Repair omitted affected consumers');
    assert(row.consumer_checks.every(c=>c.decision==='accept')||row.decision==='escalate','Unresolved consumer repair requires escalation');
    assert(row.decision!=='repair','Repairer must finish or escalate');
    delete ctx.scopeLibrary;delete ctx.scopeSnapshot;
    const entry={round:p.round,changed,consumers:affected};
    s.repairs.push(entry);s.phase=row.decision==='escalate'?'held':'review';
  }
  s.reason=row.reason;delete s.prepared;save(ctx,batch,s);
  if(s.phase==='accepted')atomic(join(ctx.dispatchDir,`tool-scope-accepted-${batch}.result.json`),{run:ctx.run,role:'tool',label:`scope-accepted-${batch}`,covers:[String(batch)],ok:true});
  return s;
}
export function resolveOwner(root,run,batch,{decision='accept',reason,reviewer}){
  const s=loopState(root,run,batch);assert(s.phase==='held'||s.phase==='review'&&s.owner_resolution?.decision==='continue','Owner resolution requires hold');
  assert(['accept','continue'].includes(decision)&&reason?.trim()&&reviewer?.trim(),'Specify owner decision, reason and reviewer');
  const receipt={version:1,run,batch:String(batch),decision:'accept',reason,reviewer,at:new Date().toISOString(),review_count:s.reviews.length,repair_count:s.repairs.length};
  atomic(join(loopDir(root,run,batch),`owner-${Date.now()}.json`),receipt);s.owner_resolution=receipt;s.phase='accepted';s.reason=reason;delete s.prepared;save({repo:root,run},batch,s);return receipt;
}
export function checkBatches(root,run){const s=loadStep3(root,run),batches=[...new Set(s.pages.map(p=>p.batch))];for(const b of batches)assert(accepted(root,run,b),`Batch ${b} is not accepted`);return batches.length;}
if(process.argv[1] && import.meta.url===pathToFileURL(realpathSync(process.argv[1])).href){
  try{
    const args=process.argv.slice(2),run=args[args.indexOf('--run')+1];
    const option=name=>args.includes(`--${name}`)?args[args.indexOf(`--${name}`)+1]:undefined;
    assert(args.includes('--run'),'Specify --run');
    if(args[0]==='owner-resolve')console.log(JSON.stringify(resolveOwner(process.cwd(),run,option('batch'),
      {decision:option('decision'),reason:option('reason'),reviewer:option('reviewer')})));
    else {assert(args[0]==='check','Usage: batch-scope-review.mjs check|owner-resolve --run RUN');
      console.log(`batch-scope-review: ${checkBatches(process.cwd(),run)} batch(es) accepted`);}
  }catch(error){console.error(error.message);process.exitCode=1;}
}
