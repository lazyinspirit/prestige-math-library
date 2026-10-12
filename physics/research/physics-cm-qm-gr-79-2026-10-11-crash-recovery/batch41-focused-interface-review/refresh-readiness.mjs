import fs from 'node:fs';
import path from 'node:path';
import { loadStep3, itemHash } from '../../../tools/physics-support/frontier-snapshot.mjs';
import { step1Decision, recordStep1 } from '../../../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dir=path.join('research',run+'-crash-recovery/batch41-focused-interface-review');
const s=loadStep3(root,run), held=new Set(['thm-nrqm-controlled-dynamics-dollard-integrable-remainder','thm-nrqm-controlled-dynamics-dollard-channel-completeness']);
const state=JSON.parse(fs.readFileSync(path.join('.physics-autopilot',run,'state.json'),'utf8'));
for (const b of [39,40,41]) if (!state.dispatches['1-scaffold:batch-'+b]?.endedAt) throw Error('Native batch '+b+' not drained');
const rows=[];
for(const [id,live] of [...s.items].filter(([id,x])=>[39,40,41].includes(Number(x.page.batch))).sort((a,b)=>(a[1].item.dependency_level??0)-(b[1].item.dependency_level??0))){
 const prior=step1Decision(s,id),dependencies=live.item.deps??[];
 const currentHash=itemHash(s,id,dependencies);
 if(held.has(id)) {rows.push({item:id,decision:prior.row?.decision,owner:prior.row?.owner,currentHash,receiptHash:prior.row?.sha256,closed:false,disposition:'Retain native CC-only prerequisite hold; owner refresh needed if receipt hash differs.'});continue;}
 if(prior.closed){rows.push({item:id,decision:'ready',closed:true,sha256:currentHash,disposition:'Unchanged ready receipt preserved.'});continue;}
 if(prior.owner||prior.row?.owner){rows.push({item:id,decision:prior.row?.decision,closed:false,currentHash,receiptHash:prior.row?.sha256,disposition:'Owner-controlled record preserved; owner currency refresh required.'});continue;}
 const file=path.join('research',run+'-step1-'+id+'.json'),backup=path.join(dir,'before-repair',path.basename(file));
 if(fs.existsSync(file)&&!fs.existsSync(backup))fs.copyFileSync(file,backup);
 const row=recordStep1(root,{run,item:id,decision:'ready',dependencies,reason:'Focused same-reviewer cycle1/2 repair and actual affected-consumer check, or exact metadata-only prerequisite/page quote/hash currency refresh after the final39/40/41 owned layout. No new independent acceptance. Evidence: '+dir+'/repair.json',owner:false});
 rows.push({item:id,decision:row.decision,closed:true,sha256:row.sha256,archived:backup,disposition:'Refreshed necessary stale receipt after final carrier/mirror edits.'});
}
fs.writeFileSync(path.join(dir,'final-readiness.json'),JSON.stringify(rows,null,2)+'\n');
console.log(JSON.stringify({checked:rows.length,refreshed:rows.filter(r=>r.archived).length,preserved:rows.filter(r=>r.disposition.startsWith('Unchanged')).length,held:rows.filter(r=>!r.closed)}));
