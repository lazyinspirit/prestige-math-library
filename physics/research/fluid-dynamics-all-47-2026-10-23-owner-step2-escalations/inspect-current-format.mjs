import {readFileSync as rf,writeFileSync as wf} from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {precheckSource} from '../../tools/physics-support/paths.mjs';
import {checkableText} from '../../tools/physics-support/precheck-text.mjs';
import {orderedItems,runPages} from '../../tools/physics-support/item-dependency-levels.mjs';
const {proposedPrecheck}=await import(pathToFileURL(precheckSource()).href);
const run='fluid-dynamics-all-47-2026-10-23',rows=[];
for(const {id} of orderedItems(runPages(process.cwd(),run))){const raw=rf(`items/${id}.md`,'utf8'),strategy=raw.match(/^proof_strategy:\s*(\S+)/m)?.[1];const result=proposedPrecheck(checkableText(raw),strategy);rows.push({id,sha256:createHash('sha256').update(raw).digest('hex'),strategy,result});}
wf(`research/${run}-owner-step2-escalations/current-canonical-diagnosis.json`,JSON.stringify({run,at:new Date().toISOString(),rows,diagnostic_only:true},null,2)+'\n');
console.log(JSON.stringify({checked:rows.length,errors:rows.filter(x=>x.result.err).map(x=>({id:x.id,error:x.result.err})),repairs:rows.filter(x=>x.result.repaired).map(x=>x.id)}));
