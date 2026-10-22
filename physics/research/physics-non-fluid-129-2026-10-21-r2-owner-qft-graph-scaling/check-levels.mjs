import fs from 'node:fs';
import {dependencyLevels} from '../../../tools/physics-support/item-dependency-levels.mjs';
const run='physics-non-fluid-129-2026-10-21-r2';
const pages=[58,59,60].flatMap(batch=>JSON.parse(fs.readFileSync(`research/${run}-batch-${batch}.pages.json`)).map(p=>({...p,batch})));
const r=dependencyLevels(pages);const report={command:['node',process.argv[1]],scope:'batch60 and its exact in-run supplier batches58/59',checked_at:new Date().toISOString(),errors:r.errors,levels:Object.fromEntries(r.levels)};
fs.writeFileSync(`research/${run}-owner-qft-graph-scaling/dependency-levels-final.json`,JSON.stringify(report,null,2)+'\n');console.log(r.items.size+' items, '+pages.length+' pages, '+r.errors.length+' errors');if(r.errors.length){console.log(r.errors);process.exitCode=1;}
