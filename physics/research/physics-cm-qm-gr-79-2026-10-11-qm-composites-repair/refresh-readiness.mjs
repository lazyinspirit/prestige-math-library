import fs from 'node:fs';
import path from 'node:path';
import { recordStep1, step1Decision } from '../../tools/step1-decisions.mjs';
import { loadStep3 } from '../../tools/step3-decisions.mjs';
const root=process.cwd();
const run='physics-cm-qm-gr-79-2026-10-11';
const dir=path.join(root,'research',run+'-qm-composites-repair');
const pages=JSON.parse(fs.readFileSync(path.join(root,'research',run+'-batch-35.pages.json'),'utf8'));
const items=pages.flatMap(p=>p.items).sort((a,b)=>a.dependency_level-b.dependency_level || a.id.localeCompare(b.id));
const results=[];
const snapshot=loadStep3(root,run);
for(const item of items){
 const current=step1Decision(snapshot,item.id);
 if(current.closed){results.push({item:item.id,sha256:current.row.sha256,unchangedCurrentBinding:true});continue;}
 const previous=path.join(root,'research',`${run}-step1-${item.id}.json`);
 if(fs.existsSync(previous) && !fs.existsSync(path.join(dir,'before',path.basename(previous)))) fs.copyFileSync(previous,path.join(dir,'before',path.basename(previous)));
 const row=recordStep1(root,{run,item:item.id,decision:'ready',dependencies:item.deps,
  reason:'Current complete draft carrier and exact dependency metadata after authorized batch35 repair; 30-item proof-layout has zero defects; local repair receipt records focused mathematics and consumer checks, while native independent review remains pending',owner:false});
 results.push({item:item.id,sha256:row.sha256});
}
fs.writeFileSync(path.join(dir,'readiness-refresh.json'),JSON.stringify(results,null,2)+'\n');
console.log(`Refreshed ${results.length} current Step-1 carrier/input bindings; no review acceptance or audit stamps added`);
