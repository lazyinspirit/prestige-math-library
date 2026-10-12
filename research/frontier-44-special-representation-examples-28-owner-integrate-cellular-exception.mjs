// The owner's one bounded exceptional deletion, plus unchanged frozen repairs
// and actual prerequisite instantiation. Consumer holds remain unresolved.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {runPages,dependencyLevels} from '../tools/item-dependency-levels.mjs';
const run='frontier-44-special-representation-examples-28';
const base=`research/${run}-owner-cell-head-classification-repair`;
const dir=`${base}/owner-authorized-phrase-deletion-exception`,out=`${dir}/root-integration`;
const read=p=>JSON.parse(readFileSync(p,'utf8')),sha=b=>createHash('sha256').update(b).digest('hex');
const authorization=`research/${run}-owner-cellular-one-bounded-exception-authorization.json`;
if(read(authorization).owner_answer!=='Authorize this one bounded exception')throw Error('Owner authorization required');
const guarded=read(`${dir}/source20-exceptional-deletion-guarded-successor.json`);
const frozen20=read(`${base}/source20-round2-final-guarded-candidate.json`);
const frozen21=read(`${base}/source21-round2-surgical-consumer-candidate.json`);
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
for(const patch of guarded.patches){
  const original=frozen20.patches.find(p=>p.id===patch.id),expected=structuredClone(original.after);
  if(patch.id==='thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions'){
    if(!expected.statement.includes(' and some Specht module is reducible'))throw Error('Original false clause not found');
    expected.statement=expected.statement.replace(' and some Specht module is reducible','');
  }
  if(patch.id==='def-type-a-hecke-specht-module-and-cell-form')expected.deps.push(...guarded.exceptional_action.dependency_only_instantiation.added_deps);
  if(!same(expected,patch.after))throw Error(`Unexpected extra exception edit ${patch.id}`);
}
const state=read(`.autopilot/${run}/state.json`);
if(!state.paused||state.stage!=='1-scaffold'||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Pause and drain');
const proposals=[read(`${dir}/proposed-source20-exceptional.pages.json`),read(`${dir}/proposed-source21-frozen-instantiation.pages.json`)];
for(const [n,packet,proposed] of [[20,guarded,proposals[0]],[21,frozen21,proposals[1]]]){
  if(sha(readFileSync(packet.native_guard.path))!==packet.native_guard.sha256)throw Error(`Native${n} guard changed`);
  const actual=read(packet.native_guard.path);
  for(const patch of packet.patches){
    const find=(pages,id)=>pages.flatMap(p=>p.items).find(i=>i.id===id);
    if(!same(find(actual,patch.id),patch.before)||!same(find(proposed,patch.id),patch.after))throw Error(`Guarded object mismatch ${patch.id}`);
  }
}
const verdictPath=`${dir}/exceptional-action-proof-instantiation-and-current-consumer-verdict.json`,verdict=read(verdictPath);
for(const g of [verdict.actual_new50,verdict.new50_final_actual_acceptance,...verdict.full_actual_proof_carriers])
  if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Supplier proof drift ${g.path}`);
const all=runPages(process.cwd(),run).filter(p=>!['20','21'].includes(p.batch)).concat(proposals.flatMap((pages,j)=>pages.map(p=>({...p,batch:String(j+20)}))));
const levels=dependencyLevels(all,{validateLabels:false});if(levels.errors.length)throw Error(levels.errors.join('\n'));
for(const pages of proposals)for(const p of pages){for(const i of p.items)i.dependency_level=levels.levels.get(i.id);p.items.sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));}
const planPath='research/plan-spec.json',plan=read(planPath),req=verdict.source_bookkeeping.page_requires_patch;
const page=plan.pages.find(p=>p.id===req.page);if(!same(page.requires,req.before))throw Error('Canonical requires drift');page.requires=req.after;
mkdirSync(out);const before=[];
const files=[`research/${run}-batch-20.pages.json`,`research/${run}-batch-21.pages.json`,planPath];
for(let j=0;j<files.length;j++){const bytes=readFileSync(files[j]),before_file=`${out}/${j}.before.json`;writeFileSync(before_file,bytes,{flag:'wx'});before.push({path:files[j],sha256:sha(bytes),before_file});}
for(const g of before)if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Last-minute input drift ${g.path}`);
writeFileSync(files[0],JSON.stringify(proposals[0],null,2)+'\n');writeFileSync(files[1],JSON.stringify(proposals[1],null,2)+'\n');writeFileSync(planPath,JSON.stringify(plan,null,2)+'\n');
const receipt={version:1,run,at:new Date().toISOString(),authorization:{path:authorization,sha256:sha(readFileSync(authorization))},
  action:'Exact single authorized phrase deletion, unchanged frozen20/21 repairs, and actual independently proved50 prerequisite instantiation',
  original_repair_rounds:2,maximum_rounds:2,exceptional_action_count:1,counter_reset:false,
  before,after:files.map(path=>({path,sha256:sha(readFileSync(path))})),
  evidence:{path:verdictPath,sha256:sha(readFileSync(verdictPath))},
  unresolved_consumer_subjects:['prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one','ex-a-weight-one-block-decomposition-matrix'],
  readiness_registered:false,main_gate_attempt:false,engine_state_written:false,
  next_action:'Same reviewer actual integrated check; retain holds on two additional false consumers. Owner extension required before those extra corrections.'};
writeFileSync(`${out}/registration.json`,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({registration:`${out}/registration.json`,after:receipt.after,consumer_holds:receipt.unresolved_consumer_subjects}));
