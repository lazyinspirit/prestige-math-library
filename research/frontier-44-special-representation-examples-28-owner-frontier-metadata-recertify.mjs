// Stable full-frontier metadata/hash recertification immediately before a gate.
// Reuses current readiness evidence; performs no mathematical rereview or writes.
import {readFileSync,writeFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3} from '../tools/step3-decisions.mjs';
import {step1Decision} from '../tools/step1-decisions.mjs';
import {dependencyLevels,orderedItems} from '../tools/item-dependency-levels.mjs';
const run='frontier-44-special-representation-examples-28',root=process.cwd(),output=process.argv[2];
if(!output?.startsWith(`research/${run}-`))throw Error('Explicit run-local fresh report path required');
if(existsSync(output))throw Error('Preserve previous recertification; choose a fresh report path');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(state.run!==run||!state.paused)throw Error('Pause and drain this run before recertification');
// Writer drain is independently established by native status before invoking
// this script; result presence alone is not a claim of process completion.
const sha=b=>createHash('sha256').update(b).digest('hex');
const paths=readdirSync('research').filter(p=>new RegExp(`^${run}-batch-\\d+\\.(pages|coverage)\\.json$`).test(p)).map(p=>`research/${p}`);
const rawBefore=paths.map(path=>({path,sha256:sha(readFileSync(path))}));
const snapshot=loadStep3(root,run);
if(snapshot.pages.length!==100||snapshot.pages.some(p=>!p.items?.length))throw Error('Incomplete current50-pair frontier');
const levels=dependencyLevels(snapshot.pages);if(levels.errors.length)throw Error(levels.errors.join('\n'));
const ordered=orderedItems(snapshot.pages),rows=[];
for(const {id,item,page,level} of ordered){
  if(!item.kind||!item.title?.trim()||!Array.isArray(item.deps))throw Error(`Malformed scaffold metadata: ${id}`);
  const canonical=`items/${id}.md`;
  if(!item.statement?.trim()&&!existsSync(canonical))throw Error(`Statement carrier missing: ${id}`);
  if(!item.strategy?.trim()&&!existsSync(canonical)){
    const batch=snapshot.items.get(id).page.batch,notes=`research/${run}-batch-${batch}.notes.md`;
    if(!existsSync(notes)||!readFileSync(notes,'utf8').trim())throw Error(`Strategy carrier missing: ${id}`);
    if(!rawBefore.some(g=>g.path===notes))rawBefore.push({path:notes,sha256:sha(readFileSync(notes))});
  }
  const decision=step1Decision(snapshot,id);if(!decision.closed)throw Error(`Unresolved/currentness failure: ${id}: ${decision.reason}`);
  rows.push({id,page,dependency_level:level,current_input_sha256:decision.row.sha256,existing_evidence_decision:decision.row.decision,owner:decision.row.owner});
}
for(const g of rawBefore)if(sha(readFileSync(g.path))!==g.sha256)throw Error(`Manifest drift during pass: ${g.path}`);
// Fresh loader also checks relevant supplier bytes and semantic plan metadata,
// which can change without a frontier manifest edit.
const fresh=loadStep3(root,run);
if(fresh.items.size!==rows.length)throw Error('Inventory drift');
for(const row of rows){const decision=step1Decision(fresh,row.id);if(!decision.closed||decision.row.sha256!==row.current_input_sha256)throw Error(`Fresh input drift: ${row.id}`);}
const report={version:1,run,at:new Date().toISOString(),scope:'All50pairs/100pages, exact current populated manifests',mode:'formatting/metadata/hash-only, existing mathematical evidence reused',subjects:rows.length,pages:100,dependency_ordered_pass:rows,manifest_guards:rawBefore,all_current_readiness:true,native_writer_drain:'Required independently from native status before this pass',mathematical_rereview:false,gate_attempt:false,engine_gate_stamps_written:false};
writeFileSync(output,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({subjects:rows.length,pages:100,report:output,mathematical_rereview:false}));
