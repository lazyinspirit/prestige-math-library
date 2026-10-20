import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { verifierGroupMLChecks } from './finite-smoke-verifier-group-ml.mjs';
const operations=JSON.parse(readFileSync(new URL('../finite-smoke-operations.json',import.meta.url),'utf8')).operations;
const outcomes=[];
for(const op of operations){const smoke=op.new[0],callback=verifierGroupMLChecks[smoke.check];assert.equal(typeof callback,'function');const result=callback(smoke);assert.equal(result.ok,true,result.summary);outcomes.push({id:op.path[1],check:smoke.check,...result});}
let rejected=0;
for(const [name,callback] of Object.entries(verifierGroupMLChecks)){
  for(const bad of [{fixture:'not-a-supported-fixture'},{check:'different-check'},{case:'different-case'},{parameters:{}},{selector:'different'},null,[]]){const out=callback(bad);assert.equal(out.ok,false,`${name} accepted invalid selector ${JSON.stringify(bad)}`);rejected++;}
}
console.log(JSON.stringify({scope:'Focused staged callbacks only; bounded numerical checks, not proofs or native gate credit',rows:outcomes.length,checks:Object.keys(verifierGroupMLChecks).length,rejected,outcomes},null,2));
