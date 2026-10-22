import {loadStep1Record} from '../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../../../tools/physics-support/step1-decisions.mjs';
import {writeFileSync} from 'node:fs';
const run='physics-non-fluid-129-2026-10-21-r2',s=loadStep1Record(process.cwd(),run);
const decisions=['def-qftx-local-time-ordered-system','lem-qftx-balanced-local-functional-representatives'].map(id=>({id,...step1Decision(s,id)}));
const pages=['qftx-renormalization-hopf','qftx-causal-renormalization'].map(id=>{const p=s.pages.find(p=>p.id===id);return {id,batch:p.batch,requires:p.requires,items:p.items.map(x=>({id:x.id,deps:x.deps}))}});
const result={at:new Date().toISOString(),operation:'Read-only normative loadStep1Record/step1Decision, not recording or gate execution',decisions,pages};
writeFileSync(new URL('./current-normative-decision.json',import.meta.url),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
