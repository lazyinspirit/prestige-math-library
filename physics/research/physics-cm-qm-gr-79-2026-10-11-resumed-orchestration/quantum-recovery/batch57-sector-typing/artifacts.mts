import {existsSync,writeFileSync} from 'node:fs';
import {stages} from '../../../../tools/physics-autopilot/stages/mathlib.mts';
const repo=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',stage=stages.find(s=>s.id==='1-scaffold');
const rows=[56,57,58].map(n=>{const files=stage.artifacts({repo,run},String(n));return {batch:n,artifact_count:files.length,missing:files.filter(p=>!existsSync(repo+'/'+p))};});
writeFileSync('research/'+run+'-resumed-orchestration/quantum-recovery/batch57-sector-typing/artifact-current.json',JSON.stringify({command:'Native stages[1-scaffold].artifacts exact units56/57/58, read-only; no gate',rows},null,2)+'\n');console.log(JSON.stringify(rows,null,2));process.exitCode=rows.some(r=>r.missing.length)?1:0;
