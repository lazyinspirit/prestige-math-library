import {readFileSync,writeFileSync} from 'node:fs';
import {loadStep3} from '../../../../tools/step3-decisions.mjs';
import {step3OwnerCreationClaim} from '../../../../tools/step3-owner-creation.mjs';
const run='frontier-44-special-representation-examples-28-six-step';const b=`research/${run}-owner-escalation-repairs/resume-20261011/integration`;
const ids=JSON.parse(readFileSync(`${b}/owner-creation/index.json`)).receipts.map(x=>x.id);ids.push('lem-polynomial-quantum-highest-vectors-satisfy-all-divided-power-relations','lem-cyclotomic-klr-partial-frobenius-caps-satisfy-two-color-terminal-contractions','lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form');const s=loadStep3(process.cwd(),run);writeFileSync(`${b}/final-current-native-creation-claims.json`,JSON.stringify({run,at:new Date().toISOString(),claims:ids.map(id=>({id,...step3OwnerCreationClaim(s,id)}))},null,2)+'\n');console.log('17 current native claims');
