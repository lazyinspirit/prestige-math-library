// Rebind accepted Step1 evidence after stable supplier/metadata integration.
// This is bookkeeping, not a new mathematical review or engine transition.
import {readFileSync,writeFileSync,mkdirSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,itemHash} from '../tools/step3-decisions.mjs';
import {recordStep1,step1Decision} from '../tools/step1-decisions.mjs';
import {orderedItems} from '../tools/item-dependency-levels.mjs';
const run='frontier-44-special-representation-examples-28',root=process.cwd();
const [evidencePath,evidenceSha,planPath,out]=process.argv.slice(2);
if(!evidencePath?.startsWith(`research/${run}-`)||!out?.startsWith(`research/${run}-`))throw Error('Explicit run-local evidence and fresh receipt directory required');
const sha=b=>createHash('sha256').update(b).digest('hex');
if(sha(readFileSync(evidencePath))!==evidenceSha)throw Error('Final verdict guard changed');
const final=JSON.parse(readFileSync(evidencePath,'utf8'));
if(final.verdict!=='RESOLVED_SUFFICIENT_ACTUAL_FINAL_AFTER_BINDING')throw Error('Resolved sufficient actual after-binding verdict required');
for(const g of [...final.actual_guards,final.actual_plan,final.actual_new50,final.root_integration_receipt,final.guarded_coherent_candidate])
  if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Final actual verdict input changed ${g.path}`);
const plan=JSON.parse(readFileSync(planPath,'utf8'));
const accepted=new Map(plan.readiness_registration_after_same_reviewer_actual_acceptance.map(row=>[row.id,row]));
if(accepted.size!==14)throw Error('Expected exact14 accepted cellular repair subjects');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(state.run!==run||!state.paused||state.stage!=='1-scaffold'||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Pause and drain this run');
const paths=readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.(pages|coverage)\\.json$`).test(f)).map(f=>`research/${f}`);
paths.push('research/plan-spec.json');
const guards=paths.map(path=>({path,sha256:sha(readFileSync(path))}));
const snapshot=loadStep3(root,run),ordered=orderedItems(snapshot.pages);
if(snapshot.pages.length!==100||snapshot.items.size===0)throw Error('Exact full50-pair frontier required');
for(const subject of final.all14_current_subjects)
  if(itemHash(snapshot,subject.id,subject.actual_dependencies)!==subject.current_input_sha256)throw Error(`Reviewed accepted input hash changed ${subject.id}`);
mkdirSync(out);const rows=[],before=[],reused=[];
for(const {id,item} of ordered){
  const decision=step1Decision(snapshot,id),accept=accepted.get(id);
  if(decision.closed&&!accept){reused.push({id,sha256:decision.row.sha256});continue;}
  if(!accept&&decision.row?.decision!=='ready')throw Error(`Unresolved item outside final accepted scope ${id}: ${decision.reason}`);
  const deps=accept?accept.deps:decision.row.dependencies;
  if(accept&&JSON.stringify([...accept.deps].sort())!==JSON.stringify([...item.deps].sort()))throw Error(`Accepted dependency list drift ${id}`);
  const path=`research/${run}-step1-${id}.json`,bytes=readFileSync(path),before_file=`${out}/${id}.before.json`;
  writeFileSync(before_file,bytes,{flag:'wx'});before.push({path,sha256:sha(bytes),before_file});
  const reason=accept
    ? `Original2/2 history preserved; ONE owner-authorized repair complete with same-reviewer actual direct/indirect consumer sufficiency: ${evidencePath}. Local Step1 readiness, not an independent audit.`
    : `Metadata/input-hash refresh only after accepted supplier integration. Existing mathematical readiness is reused unchanged; same supplier reviewer consumer closure: ${evidencePath}. Prior genuine record archived at ${before_file}; no mathematical rereview or new repair round.`;
  const row=recordStep1(root,{run,item:id,decision:'ready',owner:true,dependencies:deps,reason});
  if(row.sha256!==itemHash(snapshot,id,deps))throw Error(`Input drift during pass ${id}`);
  rows.push(row);if(rows.length%10===0)console.log(JSON.stringify({registered:rows.length,last:id}));
}
for(const g of guards)if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Manifest/coverage/plan changed during pass ${g.path}`);
const fresh=loadStep3(root,run);
for(const {id} of ordered){const d=step1Decision(fresh,id);if(!d.closed)throw Error(`Final currentness check failed ${id}: ${d.reason}`);}
const receipt={version:1,run,at:new Date().toISOString(),action:'Dependency-ordered normal API readiness refresh after actual final one-time repair sufficiency',
  scope:'Exact50pairs/100pages from current manifests',subjects:ordered.length,registered:rows.length,reused:reused.length,
  evidence:{path:evidencePath,sha256:evidenceSha},plan:{path:planPath,sha256:sha(readFileSync(planPath))},
  before,rows,reused_current_records:reused,manifest_guards:guards,all_current_ready:true,
  original_repair_rounds:2,original_cap:2,exceptional_repair_count:1,counter_reset:false,
  mathematical_rereview:false,independent_audit:false,gate_attempt:false,engine_state_written:false};
writeFileSync(`${out}/registration.json`,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({subjects:ordered.length,registered:rows.length,reused:reused.length,all_current_ready:true,receipt:`${out}/registration.json`}));
