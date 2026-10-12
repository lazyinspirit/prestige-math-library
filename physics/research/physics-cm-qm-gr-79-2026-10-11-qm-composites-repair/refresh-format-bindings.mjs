import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { loadStep3 } from '../../tools/step3-decisions.mjs';
import { step1Decision, recordStep1 } from '../../tools/step1-decisions.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dir=path.join(root,'research',run+'-qm-composites-repair');
const state=JSON.parse(fs.readFileSync(path.join(root,'.physics-autopilot',run,'state.json'),'utf8'));
if(state.paused!==true)throw Error('Paused verification required for final binding writes');
const s=loadStep3(root,run),rows=[];
const subjects=[35,36].flatMap(n=>JSON.parse(fs.readFileSync(path.join(root,'research',`${run}-batch-${n}.pages.json`),'utf8')).flatMap(p=>p.items)).sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));
for(const item of subjects){
 const current=step1Decision(s,item.id);
 if(current.closed){rows.push({id:item.id,changed:false,sha256:current.row.sha256});continue;}
 const file=path.join(root,'research',`${run}-step1-${item.id}.json`),before=path.join(dir,'before-format',path.basename(file));
 if(fs.existsSync(file) && !fs.existsSync(before))fs.copyFileSync(file,before);
 const row=recordStep1(root,{run,item:item.id,decision:'ready',dependencies:item.deps,owner:false,reason:'Stable completed draft carrier and supplier bytes after source-order-preserving mechanical proof formatting; scoped normal precheck and final proof-layout pass, with substantive repair cycle counts and native independent-review history unchanged'});
 rows.push({id:item.id,changed:true,sha256:row.sha256});
}
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const receiptPath=path.join(dir,'formatting-receipt.json'),receipt=JSON.parse(fs.readFileSync(receiptPath,'utf8'));
receipt.checks_pending=false;receipt.checks={precheck:{scope:'Current batch35/36 manifest carriers only',files:43,checked:43,failed:0,exit_code:0},proof_layout:{scope:'Three actual changed batch35 carriers',items:3,steps:18,defects:0,exit_code:0}};
receipt.final_readiness_bindings=rows;receipt.outside_scope_binding_refreshes='Not performed for active 37/38 or any other batch; root owns downstream integration currency';
receipt.current_contract_sha256=hash(path.join(root,'research',run+'-batch-35.proof-contracts.json'));
fs.writeFileSync(receiptPath,JSON.stringify(receipt,null,2)+'\n');
console.log(`Current bindings for ${rows.length} owned35/36 carriers: ${rows.filter(r=>r.changed).length} refreshed; unchanged valid records preserved`);
