// Read-only current readiness observation; no native decisions/gates written.
import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const state=JSON.parse(readFileSync(root+'/.physics-autopilot/'+run+'/state.json'));
const stable=new Set(Object.values(state.dispatches).filter(d=>d.stage==='1-scaffold'&&d.endedAt&&d.lastExitOk===true).map(d=>String(d.covers[0])));
const s=loadStep1Record(root,run),open=[];let count=0;
for(const [id,h] of s.items){if(!stable.has(String(h.page.batch)))continue;count++;const d=step1Decision(s,id);if(!d.closed)open.push({id,batch:h.page.batch,decision:d});}
const result={at:new Date().toISOString(),kind:'read-only-successful-author-handoff-readiness-currency-observation',stable_batches:stable.size,subjects:count,open,gate_attempt:false};
writeFileSync(root+'/.physics-autopilot/'+run+'/owner-readiness-currency-observation.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));
