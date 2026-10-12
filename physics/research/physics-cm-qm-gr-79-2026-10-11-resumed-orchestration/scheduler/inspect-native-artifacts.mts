import fs from 'node:fs';
import path from 'node:path';
import { stages } from '../../../../tools/physics-autopilot/stages/mathlib.mts';
import { prerequisiteBatches } from '../../../../../prestige-math-library/tools/physics-support/batch-scope-review.mjs';
const run='physics-cm-qm-gr-79-2026-10-11';
const repo=process.cwd();const ctx:any={repo,run,doctor:false};
const stage:any=stages.find(s=>s.id==='1-scaffold');
const checked=new Map<string,any>();
function visit(batch:string){if(checked.has(batch))return;const suppliers=prerequisiteBatches(repo,run,batch);const files=stage.artifacts(ctx,batch);const missing=files.filter((f:string)=>!fs.existsSync(path.resolve(repo,f)));checked.set(batch,{batch,suppliers,missing});for(const supplier of suppliers)visit(supplier);}
visit('59');const rows=[...checked.values()];
console.log(JSON.stringify({at:new Date().toISOString(),run,problemRows:rows.filter(x=>x.batch!=='59'&&x.missing.length),suppliersChecked:rows.length-1},null,2));
fs.writeFileSync(`research/${run}-resumed-orchestration/scheduler/native59-artifact-readiness.json`,JSON.stringify({at:new Date().toISOString(),run,scope:'Read-only actual native stage artifact and prerequisite selectors; no stage plan, gates, transitions or state mutation.',rows},null,2)+'\n');
