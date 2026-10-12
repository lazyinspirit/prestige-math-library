import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {recordStep1,step1Decision} from '../tools/step1-decisions.mjs';
import {loadStep3,itemHash} from '../tools/step3-decisions.mjs';
const run='frontier-44-special-representation-examples-28';
const dir=`research/${run}-owner-native24-cyclotomic-consumer-review/native25-consumer-review`;
const out=`${dir}/root-step1-registration-round2`,sha=b=>createHash('sha256').update(b).digest('hex');
const evidence={path:`${dir}/final-actual-afterbinding-round2.json`,sha256:'27f84e9ad294c27bf57fde932c2ad265e14eddb7c58c4359b00b48c3c7e81161'};
if(sha(readFileSync(evidence.path))!==evidence.sha256)throw Error('Verdict changed');
const verdict=JSON.parse(readFileSync(evidence.path));
if(verdict.verdict!=='SUFFICIENT_STEP1_FINAL_ACTUAL_AFTERBINDING_ALL28')throw Error('Actual acceptance required');
for(const g of verdict.raw_current_guards){
  if(g.absent){if(existsSync(g.path))throw Error(`Unexpected new item ${g.path}`);}
  else if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Guard drift ${g.path}`);
}
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`));
if(!state.paused||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Pause and drain');
const s=loadStep3(process.cwd(),run);
for(const e of verdict.subjects)if(itemHash(s,e.id,e.deps)!==e.sha256)throw Error(`Current reviewed input mismatch ${e.id}`);
mkdirSync(out);const before=[],rows=[];
for(const entry of verdict.subjects){
  const file=`research/${run}-step1-${entry.id}.json`;
  if(existsSync(file)){
    const bytes=readFileSync(file),before_file=`${out}/${entry.id}.before.json`;
    writeFileSync(before_file,bytes,{flag:'wx'});before.push({path:file,sha256:sha(bytes),before_file});
  }
  const row=recordStep1(process.cwd(),{run,item:entry.id,decision:'ready',owner:true,dependencies:entry.deps,
    reason:`Final2 same-original-reviewer actual supplier/consumer sufficiency: ${evidence.path}. Complete local Step1 scaffold proof routes; no independent audit, publication or old20 acceptance. Original20 remains exhausted and held.`});
  if(row.sha256!==entry.sha256)throw Error(`API input changed ${entry.id}`);rows.push(row);
}
const fresh=loadStep3(process.cwd(),run);
for(const row of rows)if(!step1Decision(fresh,row.item).closed)throw Error(`Record not current ${row.item}`);
const receipt={version:1,run,at:new Date().toISOString(),action:'Normal recordStep1 API final readiness for28 actual NEW25 subjects after same reviewer final2 sufficiency',
  repair_round:2,maximum_rounds:2,evidence,before,rows,current_raw_guards_verified:verdict.raw_current_guards.length,
  all28_current:true,old20_held:true,counter_reset:false,gate_attempt:false,engine_state_written:false};
writeFileSync(`${out}/registration.json`,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({subjects:rows.length,current:true,registration:`${out}/registration.json`,old20_held:true}));
