// Exact guarded first-repair integration; readiness is a separate owner act.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dependencyLevels,runPages} from '../tools/item-dependency-levels.mjs';
const run='frontier-44-special-representation-examples-28';
const dir=`research/${run}-owner-native24-cyclotomic-consumer-review/native25-consumer-review`;
const out=`${dir}/root-integration-round1`,read=p=>JSON.parse(readFileSync(p,'utf8'));
const sha=b=>createHash('sha256').update(b).digest('hex');
const handoffPath=`${dir}/coherent-first-repair-sufficiency-and-integration-handoff.json`;
const handoff=read(handoffPath),guards=read(handoff.raw_guards.receipt_path);
if(sha(readFileSync(handoff.raw_guards.receipt_path))!==handoff.raw_guards.receipt_sha256)throw Error('Guard packet changed');
if(existsSync(`${out}/registration.json`))throw Error('Preserve completed integration');
for(const g of guards.raw_current_guards)
  if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Input drift ${g.path}`);
if(sha(readFileSync(handoff.candidate.path))!==handoff.candidate.sha256)throw Error('Candidate drift');
const state=read(`.autopilot/${run}/state.json`);
if(state.run!==run||!state.paused||state.stage!=='1-scaffold'||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Pause and drain this run');
const path=`research/${run}-batch-25.pages.json`,original=read(path);
const currentNativeGuard=guards.raw_current_guards.find(g=>g.path.endsWith(`/${run}-batch-25.pages.json`));
if(!currentNativeGuard||sha(readFileSync(path))!==currentNativeGuard.sha256)throw Error('Native25 current guarded preimage changed');
const proposed=read(handoff.candidate.path),beforeIds=new Map(original.flatMap(p=>p.items.map(i=>[i.id,{i,p}])));
for(const p of proposed)for(const i of p.items){
  const prior=beforeIds.get(i.id);
  if(prior&&(prior.p.id!==p.id||prior.i.kind!==i.kind||prior.i.title!==i.title))throw Error(`Identity drift ${i.id}`);
}
if(proposed.flatMap(p=>p.items).length!==28)throw Error('Wrong candidate inventory');
const planPath='research/plan-spec.json',plan=read(planPath),homes=new Map();
for(const p of plan.pages)for(const i of p.items??[])homes.set(i.id,p);
const all=runPages(process.cwd(),run).filter(p=>p.batch!=='25').concat(proposed.map(p=>({...p,batch:'25'})));
for(const p of all)for(const i of p.items)homes.set(i.id,p);
const existingDeps=new Set(original.flatMap(p=>p.items.flatMap(i=>i.deps??[])));
const addedRequires=[];
const a=proposed.find(p=>p.kind==='A');
for(const i of a.items)for(const dep of i.deps){
  if(existingDeps.has(dep))continue;
  const home=homes.get(dep);if(!home)throw Error(`Missing actual supplier home ${dep}`);
  if(home.id===a.id||a.requires.includes(home.id))continue;
  if(home.kind==='B'||Number(home.order)>=Number(a.order))throw Error(`Invalid earlier supplier home ${home.id}`);
  a.requires.push(home.id);addedRequires.push(home.id);
}
const planned=plan.pages.find(p=>p.id===a.id);
if(JSON.stringify(planned.requires)!==JSON.stringify(original.find(p=>p.id===a.id).requires))throw Error('Canonical requires drift');
planned.requires=a.requires;
const levels=dependencyLevels(all,{validateLabels:false});if(levels.errors.length)throw Error(levels.errors.join('\n'));
for(const p of proposed){for(const i of p.items)i.dependency_level=levels.levels.get(i.id);p.items.sort((x,y)=>x.dependency_level-y.dependency_level||x.id.localeCompare(y.id));}
mkdirSync(out,{recursive:true});const before=[];
for(const [f,name] of [[path,'native25.before.pages.json'],[planPath,'plan-spec.before.json']]){
  const bytes=readFileSync(f),before_file=`${out}/${name}`;writeFileSync(before_file,bytes,{flag:'wx'});before.push({path:f,sha256:sha(bytes),before_file});
}
for(const g of before)if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Last-moment drift ${g.path}`);
writeFileSync(path,JSON.stringify(proposed,null,2)+'\n');writeFileSync(planPath,JSON.stringify(plan,null,2)+'\n');
const receipt={version:1,run,at:new Date().toISOString(),repair_round:1,maximum_rounds:2,
  action:'Exact reviewed28-item NEW25 first-repair integration; only dependency levels/order and declared earlier prerequisite homes added',
  handoff:{path:handoffPath,sha256:sha(readFileSync(handoffPath))},before,
  after:before.map(g=>({path:g.path,sha256:sha(readFileSync(g.path))})),
  actual_raw_guards_verified:guards.raw_current_guards.length,addedRequires,inventory:28,
  root_local_examination:'Read the four full helper drafts and the repaired quantum/Fock, integral-sector, graph and head-normalization interfaces. Reviewed local proof construction, not a workflow independent audit.',
  readiness_registered:false,old_counters_reset:false,engine_state_written:false,
  next_action:'Same original reviewer actual after-binding final sufficiency, source bookkeeping and normal owner readiness after supplier50 closes'};
writeFileSync(`${out}/registration.json`,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({registration:`${out}/registration.json`,after:receipt.after,addedRequires}));
