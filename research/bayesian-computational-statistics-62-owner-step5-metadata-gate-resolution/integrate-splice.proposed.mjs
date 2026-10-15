#!/usr/bin/env node
// ROOT REVIEW REQUIRED. Preparation only: this file has not been executed.
// Invoking with --apply performs the scoped native transcription and publication.
import {readFileSync,writeFileSync,readdirSync,mkdirSync,statSync,lstatSync,existsSync,renameSync,openSync,closeSync,fsyncSync,chmodSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {createHash,randomUUID} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {isDeepStrictEqual as eq} from 'node:util';
import {sharedWriteLock} from '/home/lazyinspirit/Projects/prestige-math-library/tools/step5-shared-write-lock.mjs';
const ROOT='/home/lazyinspirit/Projects/prestige-math-library';
const RUN='bayesian-computational-statistics-62';
const Q='quantum-computing-algorithms-60-2026-10-15';
const OUT=join(ROOT,'research',`${RUN}-owner-step5-metadata-gate-resolution`);
const assert=(v,m)=>{if(!v)throw Error(m);};
assert(process.argv.includes('--apply'),'Proposal only. Root must review, then explicitly invoke with --apply.');
const owner=`root-${RUN}-splice-${process.pid}-${randomUUID()}`;
const held=sharedWriteLock(ROOT,'acquire',owner);
assert(held.acquired,held.message);
const stamp=new Date().toISOString().replaceAll(':','-');
const work=join(OUT,`integration-${stamp}-${process.pid}`),shadow=join(work,'shadow');
const inputs=new Map();
const hash=b=>createHash('sha256').update(b).digest('hex');
const readBound=rel=>{
 const p=join(ROOT,rel);assert(lstatSync(p).isFile(),`Not a regular input: ${rel}`);
 const b=readFileSync(p);if(inputs.has(rel))assert(inputs.get(rel).equals(b),`Input changed during capture: ${rel}`);
 inputs.set(rel,b);return b;
};
const jsonBound=rel=>JSON.parse(readBound(rel));
const stateFor=r=>JSON.parse(readFileSync(join(ROOT,'.autopilot',r,'state.json')));
function processRows(){
 const p=spawnSync('ps',['-eo','pid=,comm=,args='],{encoding:'utf8'});
 assert(p.status===0,'Cannot inspect live dispatch processes');return p.stdout.split('\n');
}
function guards(){
 const b=stateFor(RUN);
 assert(b.run===RUN&&b.stage==='5.9-repair'&&b.paused===true,'BCS must be paused at 5.9-repair');
 const pending=Object.values(b.dispatches??{}).filter(d=>d.startedAt&&!d.endedAt);
 assert(!pending.length,`BCS state has undrained dispatches: ${pending.map(d=>d.label).join(', ')}`);
 const live=processRows().filter(line=>/\bnode\b/.test(line)&&/dispatch/.test(line)&&line.includes(RUN));
 assert(!live.length,`BCS dispatch process remains live: ${live.join('\n')}`);
 const q=stateFor(Q);
 // Strict allowlist, matching the currently observed independent construction stage.
 // Never pause/resume or mutate the foreign controller from this script.
 assert(q.run===Q&&q.stage==='1-scaffold','Foreign quantum controller is outside inspected non-plan-writing 1-scaffold stage');
 return {at:new Date().toISOString(),bcs:{stage:b.stage,paused:b.paused,pending:pending.length},quantum:{stage:q.stage,paused:q.paused},note:'Read-only stage guard; all independent owner plan writers must also honor the shared lock.'};
}
function copyBound(rel){const b=readBound(rel),p=join(shadow,rel);mkdirSync(dirname(p),{recursive:true});writeFileSync(p,b);return b;}
function walk(rel){
 const p=join(ROOT,rel);assert(lstatSync(p).isDirectory(),`Expected genuine directory: ${rel}`);
 for(const name of readdirSync(p).sort()){
  const child=join(rel,name),s=lstatSync(join(ROOT,child));
  assert(!s.isSymbolicLink(),`Unexpected symlink: ${child}`);
  if(s.isDirectory())walk(child);else {assert(s.isFile(),`Unexpected file type: ${child}`);copyBound(child);}
 }
}
function atomicBytes(path,bytes,mode){
 const temp=join(dirname(path),`.${path.split('/').at(-1)}.${process.pid}.${randomUUID()}.tmp`);
 const fd=openSync(temp,'wx',mode??0o644);
 try{writeFileSync(fd,bytes);fsyncSync(fd);}finally{closeSync(fd);}
 if(mode!==undefined)chmodSync(temp,mode);renameSync(temp,path);
}
const id=i=>typeof i==='string'?i:i.id;
const ids=p=>(p.items??[]).map(id);
const strip=p=>Object.fromEntries(Object.entries(p).filter(([k])=>!['items','requires'].includes(k)));
try{
 const initialGuard=guards();mkdirSync(join(shadow,'research'),{recursive:true});
 writeFileSync(join(work,'guard-before.json'),JSON.stringify(initialGuard,null,2)+'\n');
 const planRel='research/plan-spec.json',beforeBytes=copyBound(planRel),before=JSON.parse(beforeBytes);
 const names=readdirSync(join(ROOT,'research')).filter(n=>new RegExp(`^${RUN}-batch-[0-9]+\\.pages\\.json$`).test(n)).sort((a,b)=>Number(a.match(/-batch-(\d+)/)[1])-Number(b.match(/-batch-(\d+)/)[1]));
 assert(names.length===62,'Expected the approved 62 current batch manifests');
 const manifests=names.map(name=>({name,batch:Number(name.match(/-batch-(\d+)/)[1]),pages:JSON.parse(copyBound(`research/${name}`))}));
 // acceptedBatch enumerates research manifests and reads this genuine state tree.
 walk(`research/${RUN}-scope-review`);
 const pageMap=new Map(before.pages.map(p=>[p.id,p]));assert(pageMap.size===before.pages.length,'Duplicate plan page IDs');
 const runPages=new Map(),updates=[];
 for(const m of manifests){let mismatch=false;
  for(const p of m.pages){assert(!runPages.has(p.id),`Duplicate run page ${p.id}`);runPages.set(p.id,p);
   const old=pageMap.get(p.id);assert(old,`Unknown page ${p.id}`);assert(eq(ids(old),ids(p)),`Ordered scope IDs changed: ${p.id}`);
   if(!eq(old.items??[],p.items??[])||!eq(old.requires??[],p.requires??[]))mismatch=true;
  }if(mismatch)updates.push(m);
 }
 const edge={batch:38,page:'langevin-monte-carlo-mala-and-ula',supplierPage:'hamiltonian-monte-carlo-and-leapfrog',item:'lem-ula-fixed-step-gaussian-kernel-exponential-drift',supplier:'lem-real-line-exponential-tail-integrable'};
 const reqMismatches=[];
 for(const m of updates)for(const p of m.pages)if(!eq(pageMap.get(p.id).requires??[],p.requires??[]))reqMismatches.push({batch:m.batch,page:p.id});
 for(const r of reqMismatches){
  assert(r.batch===edge.batch&&r.page===edge.page,'Unadjudicated requires change outside the actual u38 edge');
  const old=pageMap.get(edge.page).requires??[],now=runPages.get(edge.page).requires??[];
  assert(eq(now,[...old,edge.supplierPage]),'u38 requires change is not the exact appended supplier page');
 }
 // Bind actual native acceptance evidence and current source use, not a synthetic review.
 const reportRel=`research/${RUN}-step5-v2/step5-v2-initial-r1-u38.json`;
 const reportBytes=readBound(reportRel),report=JSON.parse(reportBytes),reportText=reportBytes.toString();
 assert(report.run===RUN&&report.phase==='initial'&&String(report.unit)==='38','Unexpected native u38 report identity');
 assert(reportText.includes('Fixed-step drift: new proof step 1.4')&&reportText.includes(edge.supplier)&&reportText.includes('adds the Hamiltonian Monte Carlo page requirement'),'Native u38 evidence no longer describes exact accepted edge');
 const acceptedReview=report.reviews?.find(row=>row.id===edge.item);
 assert(acceptedReview&&acceptedReview.uncertain===false&&['repaired','unaffected'].includes(acceptedReview.disposition),'Native u38 report lacks its genuine completed item disposition');
 const carrier=readBound(`items/${edge.item}.md`).toString();assert(carrier.includes(edge.supplier),'Current u38 carrier no longer uses supplier');
 readBound(`items/${edge.supplier}.md`);
 const manifestItem=runPages.get(edge.page).items.find(i=>id(i)===edge.item);
 assert(manifestItem?.deps?.includes(edge.supplier),'Current manifest omits actual u38 supplier');
 writeFileSync(join(work,'native-u38-evidence.json'),reportBytes);
 const logs=[];
 for(const m of updates){
  const args=[join(ROOT,'tools/splice-plan.mjs'),'--run',RUN,'--batch',String(m.batch),'--update'];
  if(reqMismatches.some(r=>r.batch===m.batch))args.push('--accept-requires');
  const result=spawnSync(process.execPath,args,{cwd:shadow,encoding:'utf8',maxBuffer:10*1024*1024});
  logs.push({batch:m.batch,args,status:result.status,stdout:result.stdout,stderr:result.stderr});
  writeFileSync(join(work,'native-commands.json'),JSON.stringify(logs,null,2)+'\n');
  assert(!result.error&&result.status===0,`Native splice batch ${m.batch} failed`);
 }
 for(const name of names)assert(readFileSync(join(shadow,'research',name)).equals(inputs.get(`research/${name}`)),`Native splice mutated manifest unexpectedly: ${name}`);
 const candidateBytes=readFileSync(join(shadow,planRel)),after=JSON.parse(candidateBytes);
 assert(eq(Object.keys(before),Object.keys(after)),'Plan top-level keys changed');
 assert(eq({...before,pages:null},{...after,pages:null}),'Non-page plan data changed');
 assert(eq(before.pages.map(p=>p.id),after.pages.map(p=>p.id)),'Plan page IDs/order changed');
 const updatedPages=new Set(updates.flatMap(m=>m.pages.map(p=>p.id)));
 for(let n=0;n<before.pages.length;n++){
  const a=before.pages[n],b=after.pages[n];
  if(!updatedPages.has(a.id)){assert(eq(a,b),`Untouched/foreign plan page changed: ${a.id}`);continue;}
  assert(eq(strip(a),strip(b)),`Non-items/requires fields changed: ${a.id}`);
  assert(eq(ids(a),ids(b)),`Ordered item IDs changed: ${a.id}`);
  const manifest=runPages.get(a.id);assert(eq(b.items??[],manifest.items??[]),`Items not current: ${a.id}`);
  assert(eq(b.requires??[],manifest.requires??[]),`Requires not current: ${a.id}`);
 }
 // All 62 manifest copies, all genuine scope-state inputs, native report and
 // actual source evidence must remain byte-identical, including file-set identity.
 assert(eq(names,readdirSync(join(ROOT,'research')).filter(n=>new RegExp(`^${RUN}-batch-[0-9]+\\.pages\\.json$`).test(n)).sort((a,b)=>Number(a.match(/-batch-(\d+)/)[1])-Number(b.match(/-batch-(\d+)/)[1]))),'Manifest file set changed');
 for(const [rel,bytes] of inputs)assert(readFileSync(join(ROOT,rel)).equals(bytes),`Live input changed; recompute before publication: ${rel}`);
 const finalGuard=guards();writeFileSync(join(work,'guard-before-publication.json'),JSON.stringify(finalGuard,null,2)+'\n');
 const receipts=updates.length?[...updates.map(m=>`research/${RUN}-splice-${m.batch}.json`),`research/${RUN}-splice-refusals.json`]:[];
 for(const rel of receipts){const r=JSON.parse(readFileSync(join(shadow,rel)));assert(r.run===RUN,`Foreign receipt ${rel}`);if(rel.endsWith('splice-refusals.json'))assert(r.refusals.length===0,'Native splice withheld a batch');}
 const preimages=join(work,'preimages');mkdirSync(preimages,{recursive:true});
 writeFileSync(join(preimages,'plan-spec.json'),beforeBytes);
 for(const rel of receipts)if(existsSync(join(ROOT,rel)))writeFileSync(join(preimages,rel.split('/').at(-1)),readFileSync(join(ROOT,rel)));
 const summary={kind:'native-scoped-splice-publication',run:RUN,at:new Date().toISOString(),batches:updates.map(m=>m.batch),plan_before:hash(beforeBytes),plan_after:hash(candidateBytes),input_hashes:Object.fromEntries([...inputs].map(([p,b])=>[p,hash(b)])),native_receipts:receipts,gate_or_review_claim:false};
 writeFileSync(join(work,'publication-prepared.json'),JSON.stringify(summary,null,2)+'\n');
 // Last possible preimage check; shared lock excludes participating writers.
 assert(readFileSync(join(ROOT,planRel)).equals(beforeBytes),'Plan drifted immediately before publication');
 if(updates.length){
  atomicBytes(join(ROOT,planRel),candidateBytes,statSync(join(ROOT,planRel)).mode&0o777);
  for(const rel of receipts)atomicBytes(join(ROOT,rel),readFileSync(join(shadow,rel)),existsSync(join(ROOT,rel))?statSync(join(ROOT,rel)).mode&0o777:0o644);
 }
 writeFileSync(join(work,'published.json'),JSON.stringify(summary,null,2)+'\n');
 console.log(JSON.stringify({published:true,work,batches:summary.batches,plan_after:summary.plan_after}));
}finally{sharedWriteLock(ROOT,'release',owner);}
