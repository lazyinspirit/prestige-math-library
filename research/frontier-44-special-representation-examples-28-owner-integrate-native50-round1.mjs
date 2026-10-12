// Guarded owner integration of the reviewed NEW50 first-repair proposal.
// No readiness decisions, engine transitions, audit stamps or counter changes.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dependencyLevels,runPages} from '../tools/item-dependency-levels.mjs';
const run='frontier-44-special-representation-examples-28';
const dir=`research/${run}-owner-native50-independent-supplier-construction`;
const out=`${dir}/root-integration-round1`;
const hash=b=>createHash('sha256').update(b).digest('hex');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const candidatePath=`${dir}/native50-round1-coherent-guarded-candidate.json`;
const proposalPath=`${dir}/native50-round1-proposed.pages.json`;
const handoff=read(`${dir}/final-round1-handoff.json`);
const candidate=read(candidatePath),proposal=read(proposalPath);
if(existsSync(`${out}/registration.json`))throw Error('Preserve completed integration receipt');
for(const g of [...handoff.files,...candidate.full_proof_guards])
  if(hash(readFileSync(g.path))!==g.sha256)throw Error(`Changed reviewed carrier ${g.path}`);
const state=read(`.autopilot/${run}/state.json`);
if(state.run!==run||!state.paused||state.stage!=='1-scaffold')throw Error('Run must be paused at unclosed Step1');
if(Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writer not drained');
const ended=state.dispatches['1-scaffold:batch-50'];
if(!ended?.endedAt||!ended.lastExitOk)throw Error('Genuine batch50 success required');
const manifest=candidate.native_guard.path,original=read(manifest);
if(hash(readFileSync(manifest))!==candidate.native_guard.sha256)throw Error('Native guard changed');
for(const patch of candidate.patches){
  const before=original.find(p=>p.id===patch.page)?.items.find(i=>i.id===patch.id);
  if(!same(before,patch.before))throw Error(`Changed original object ${patch.id}`);
  if(!same(proposal.find(p=>p.id===patch.page)?.items.find(i=>i.id===patch.id),patch.after))
    throw Error(`Proposed object does not match reviewed patch ${patch.id}`);
}
const all=runPages(process.cwd(),run).filter(p=>p.batch!=='50').concat(proposal.map(p=>({...p,batch:'50'})));
const levels=dependencyLevels(all,{validateLabels:false});
if(levels.errors.length)throw Error(levels.errors.join('\n'));
for(const p of proposal)for(const i of p.items)
  if(i.dependency_level!==levels.levels.get(i.id))throw Error(`Incorrect proposed level ${i.id}`);
const planPath='research/plan-spec.json',plan=read(planPath);
for(const patch of candidate.page_field_patches){
  const page=plan.pages.find(p=>p.id===patch.page);
  if(!same(page?.[patch.field],patch.before))throw Error(`Canonical page metadata changed ${patch.page}`);
  page[patch.field]=patch.after;
}
mkdirSync(out,{recursive:true});
const before=[];
for(const [path,name] of [[manifest,'native50.before.pages.json'],[planPath,'plan-spec.before.json']]){
  const bytes=readFileSync(path),before_file=`${out}/${name}`;
  writeFileSync(before_file,bytes,{flag:'wx'});before.push({path,sha256:hash(bytes),before_file});
}
// Recheck guards immediately before the two writes; the paused controller owns
// neither file while no dispatch is active.
for(const g of before)if(hash(readFileSync(g.path))!==g.sha256)throw Error(`Integration drift ${g.path}`);
writeFileSync(manifest,JSON.stringify(proposal,null,2)+'\n');
writeFileSync(planPath,JSON.stringify(plan,null,2)+'\n');
const receipt={version:1,run,at:new Date().toISOString(),repair_round:1,maximum_rounds:2,
  action:'Guarded NEW50 proposal and exact canonical prerequisite metadata integration',
  before,after:before.map(g=>({path:g.path,sha256:hash(readFileSync(g.path))})),
  proposal:{path:proposalPath,sha256:hash(readFileSync(proposalPath))},
  candidate:{path:candidatePath,sha256:hash(readFileSync(candidatePath))},
  root_review:'Read all three complete local proof carriers; checked the dependency ordering, universal annihilation, split-basis determinant argument, trace dominance upgrade, cross-pairing and unit-form argument. Local examination, not an independent workflow audit.',
  writer_drain:{endedAt:ended.endedAt,lastExitOk:ended.lastExitOk},
  inventory:proposal.reduce((n,p)=>n+p.items.length,0),
  old20_counter_reset:false,readiness_registered:false,engine_state_written:false,
  next_action:'Source bookkeeping and same-reviewer actual after-binding sufficiency/consumer checks before readiness'};
writeFileSync(`${out}/registration.json`,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({registration:`${out}/registration.json`,inventory:receipt.inventory,after:receipt.after}));
