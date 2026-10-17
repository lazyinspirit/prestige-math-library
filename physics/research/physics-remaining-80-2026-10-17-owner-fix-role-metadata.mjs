// Mechanical dependency-role corrections from native physics-content failures.
import {readFileSync,writeFileSync,readdirSync,mkdirSync,renameSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-role-metadata-48'),sha=b=>createHash('sha256').update(b).digest('hex');
const state=JSON.parse(readFileSync(join(root,'.physics-autopilot',run,'state.json')));if(Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writer active');
const events=readFileSync(join(root,'.physics-autopilot',run,'events.jsonl'),'utf8').trim().split('\n').map(JSON.parse),failure=[...events].reverse().find(x=>x.type==='gate'&&x.id==='physics-content'&&x.code!==0);if(!failure)throw Error('No actual failed gate');
const ids=[...new Set([...failure.output.matchAll(/ERROR [a-z-]+ \[([^\]]+)\]/g)].map(x=>x[1]))];if(ids.length!==13)throw Error('Unexpected failure scope');
const pending=new Map(),changes=[];
for(const id of ids){const path=join(root,'items',id+'.md'),item=readItem(path),boundary=item.raw.indexOf('\n---',4);let fm=item.raw.slice(0,boundary),tail=item.raw.slice(boundary);const roles={...item.dependency_roles},edits=[];
 for(const [dep,old] of Object.entries(roles)){const bad=['postulate','experiment'].includes(item.kind)&&['physical-assumption','physical-result','empirical-premise'].includes(old),exact=(id==='pthm-emg-charged-dust-balance'&&dep==='def-emg-charged-dust-model')||(id==='pthm-qsm-local-regulated-interacting-gibbs'&&dep==='def-qsm-local-coercive-regulated-model');if(!bad&&!exact)continue;
 const from='  '+dep+': '+old,to='  '+dep+': formulation-prerequisite';if(fm.split(from).length!==2)throw Error('Ambiguous role '+id+' '+dep);fm=fm.replace(from,to);roles[dep]='formulation-prerequisite';edits.push({supplier:dep,before:old,after:'formulation-prerequisite'});
 }
 if(!edits.length)throw Error('No targeted repair '+id);const next=fm+tail;if(next.slice(next.indexOf('\n---',4))!==tail)throw Error('Body changed');pending.set(path,{before:item.raw,after:next});changes.push({id,edits,source_path:'items/'+id+'.md',source_before_sha256:sha(item.raw),source_after_sha256:sha(next),full_body_byte_identical:true,body_sha256:sha(item.body),public_claim_physical_scope_and_dependencies_unchanged:true,roles});
}
if(changes.reduce((n,x)=>n+x.edits.length,0)!==15)throw Error('Unexpected correction count');
for(const name of readdirSync(join(root,'research')).filter(n=>new RegExp('^'+run+'-batch-\\d+\\.pages\\.json$').test(n))){const p=join(root,'research',name),before=readFileSync(p,'utf8'),pages=JSON.parse(before);let changed=false;for(const page of pages)for(const item of page.items){const row=changes.find(x=>x.id===item.id);if(row){item.dependency_roles=row.roles;changed=true;}}if(changed)pending.set(p,{before,after:JSON.stringify(pages,null,2)+'\n'});}
for(const [p,v] of pending)if(readFileSync(p,'utf8')!==v.before)throw Error('Concurrent mutation '+p);
mkdirSync(join(out,'before'),{recursive:true});const files=[];for(const [p,v] of pending){const relative=p.slice(root.length),archive=join(out,'before',relative);mkdirSync(join(archive,'..'),{recursive:true});writeFileSync(archive,v.before);const temp=p+'.owner-temp';writeFileSync(temp,v.after);renameSync(temp,p);files.push({path:relative,before:sha(v.before),after:sha(v.after)});}
const result={run,at:new Date().toISOString(),qualification:'Fifteen metadata role corrections only. Postulates use earlier physical model material for formulation, not deduction. Two physical model definitions are formulation inputs, not postulates or proven physics results. Root read exact affected postulate bodies and both theorem/definition interfaces. No public text, physical scope, dependencies, formula or proof changed; no scientific re-audit/consumer propagation claimed.',native_gate_failure:failure,changes,files,body_changes:0,gate_attempt:false};writeFileSync(join(out,'completion.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({items:changes.length,corrected_roles:15,files:files.length,body_changes:0}));
