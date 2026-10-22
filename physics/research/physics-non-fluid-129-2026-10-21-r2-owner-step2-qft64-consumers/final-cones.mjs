import {consumers} from '../../../tools/physics-support/batch-scope-review.mjs';
import {writeFileSync} from 'node:fs';
const r='physics-non-fluid-129-2026-10-21-r2';
for(const [id,dir] of [['def-qftx-chiral-anomaly-interface','qft63-complexification'],['def-qftx-scaling-cocycle','qft65-scaling-type']]) {const result={at:new Date().toISOString(),root:id,method:'Actual normative consumers() default current corpus logical dependencies plus wikilink references and aliases',consumers:consumers(process.cwd(),[id])};writeFileSync(`research/${r}-owner-step2-${dir}/actual-consumer-cone.json`,JSON.stringify(result,null,2)+'\n');console.log(id,result.consumers.map(x=>x.id));}
