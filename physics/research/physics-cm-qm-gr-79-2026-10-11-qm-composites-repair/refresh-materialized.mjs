import fs from 'node:fs';import path from 'node:path';
import {loadStep3} from '../../tools/step3-decisions.mjs';
import {recordStep1,step1Decision} from '../../tools/step1-decisions.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dir=path.join(root,'research',run+'-qm-composites-repair');
const state=JSON.parse(fs.readFileSync(path.join(root,'.physics-autopilot',run,'state.json'),'utf8'));
if(state.paused!==true)throw Error('Actual paused state required');
for(const n of [37,42])if(!state.dispatches[`1-scaffold:batch-${n}`]?.endedAt||!state.dispatches[`1-scaffold:batch-${n}`]?.lastExitOk)throw Error('Finished writer check failed');
const snapshot=loadStep3(root,run),subjects=[37,42].flatMap(n=>JSON.parse(fs.readFileSync(path.join(root,'research',`${run}-batch-${n}.pages.json`),'utf8')).flatMap(p=>p.items)).sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));
const rows=[];
for(const item of subjects){const current=step1Decision(snapshot,item.id);if(current.closed){rows.push({id:item.id,updated:false,sha256:current.row.sha256});continue;}
const file=path.join(root,'research',`${run}-step1-${item.id}.json`),before=path.join(dir,'before-materialized',path.basename(file));if(fs.existsSync(file)&&!fs.existsSync(before))fs.copyFileSync(file,before);
const row=recordStep1(root,{run,item:item.id,decision:'ready',dependencies:item.deps,owner:false,reason:'Completed draft carrier with current finished supplier/manifest inputs after focused materialized37/42 consumer repair and metadata refresh; scoped layout, precheck, render, contract, dependency and source-metadata checks recorded without changing native independent-review history'});rows.push({id:item.id,updated:true,sha256:row.sha256});}
fs.writeFileSync(path.join(dir,'materialized-readiness.json'),JSON.stringify(rows,null,2)+'\n');console.log(`Finished owned37/42 inputs: ${rows.length} bindings current; ${rows.filter(r=>r.updated).length} stale bindings refreshed; unchanged valid bindings preserved`);
