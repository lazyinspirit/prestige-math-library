import { readFileSync,writeFileSync } from 'node:fs';
import { recordStep1 } from '../../tools/physics-support/step1-decisions.mjs';
const root=new URL('../',import.meta.url).pathname,run='physics-em-sr-40-2026-10-08';
const before=JSON.parse(readFileSync(`${root}/research/${run}-external-prerequisite-repair.recertification.before.json`,'utf8'));
const findings=JSON.parse(readFileSync(`${root}/research/${run}-external-prerequisite-repair.logic-findings.json`,'utf8')).findings;
const out=[];
for(const id of before.held_items){const row=before.rows.find(r=>r.id===id),f=findings.find(f=>f.item===id||f.direct_current_consumers.includes(id));
const reason=row.original_record.reason+'\n\nOwner-held focused review finding: '+(id===f.item?f.finding:'Direct consumer of '+f.item+' requires review after its confirmed interface correction. '+f.finding)+' Exact witness: '+f.witness+' Smallest remaining obligation: '+f.missing_obligation+' Imported page metadata is now genuinely declared and synced; this hold concerns the stable scaffold claim/strategy, not a missing page declaration. No independent audit claimed. Original author readiness evidence above is retained as history, not current acceptance. See research/'+run+'-external-prerequisite-repair.logic-findings.json.';
out.push(recordStep1(root,{run,item:id,decision:'escalated',reason,dependencies:row.original_record.dependencies,owner:true}));}
writeFileSync(`${root}/research/${run}-external-prerequisite-repair.holds.json`,JSON.stringify({run,records:out},null,2)+'\n');console.log(`${out.length} focused owner-held escalations recorded natively`);
