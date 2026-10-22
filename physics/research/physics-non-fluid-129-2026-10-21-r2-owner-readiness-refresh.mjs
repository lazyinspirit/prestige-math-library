import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep1Record} from '../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',stateDir=`.physics-autopilot/${run}`;
const json=p=>JSON.parse(readFileSync(p));
if(existsSync(`${stateDir}/controller.lock`)||Object.values(json(`${stateDir}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native writers not drained');
const prep=[`research/${run}-owner-focused-round2.json`,`research/${run}-owner-invertible-import-round2.json`,`research/${run}-owner-drained-metadata-final.json`,`research/${run}-owner-drained-render-final.json`,`research/${run}-owner-drained-proof-layout.json`,`research/${run}-owner-drained-content-policy-final.json`];
for(const p of prep)if(!existsSync(p))throw Error('Missing actual preparation '+p);
for(const p of prep.slice(2)){const d=json(p);if((d.errors?.length??0)||(d.summary?.errors??0))throw Error('Unresolved preparation '+p);}
const focused=json(prep[0]),radiation=focused.current_readiness_dispositions.filter(r=>r.batch===7).map(r=>r.id),csm=focused.current_readiness_dispositions.filter(r=>r.batch===85).map(r=>r.id),allowed=new Set([...focused.current_readiness_dispositions.map(r=>r.id),'def-qftx-frobenius-semisimple-model','prop-qftx-frobenius-genus-amplitude','prop-qftx-frobenius-positive-reflection','ex-qftx-dual-number-topological-model']);
const s=loadStep1Record(root,run),records=[],archive=`research/${run}-owner-inactive-reconciliation/readiness-before-refresh`;
if(existsSync(archive))throw Error('Readiness application already started; inspect preserved receipt before repeating');
for(const [id]of s.items){const d=step1Decision(s,id);if(d.closed)continue;if(!d.row)throw Error('Missing author record '+id);if(d.row.decision==='escalated'&&!allowed.has(id))throw Error('Undisposed escalation '+id);
 const special=id.includes('-td-')?'Published TD metadata/editorial correspondence and exact contract quotes checked; original publication/proof provenance preserved. ':id.includes('frobenius')||id==='ex-qftx-dual-number-topological-model'?'Inactive supplier reconciliation resolved the actual imported-source hold; current interface applications checked by the same supplier reviewer. ':id.includes('emx-')&&radiation.includes(id)?'Radiation prerequisite declarations and two fact labels reconciled without changing the conditional physical claims; current proof contract and placement checked. ':csm.includes(id)?'Current published finite-alphabet supplier fits the local construction; historical source-run readiness correctly remains unchanged. ':'';
 records.push({item:id,decision:'ready',dependencies:d.row.dependencies,reason:special+`Owner current-input authoring readiness after actual dependency-ordered metadata, rendered proof layout, render and strict contract checks on the 36 authored pairs. Retains the original author's examined-context IDs. Changed invertible/FTC supplier applications were checked in ${prep[1]}; focused dispositions in ${prep[0]}. Original authoring evidence and prior rows preserved. This is a current Step1 disposition, not independent proof acceptance, publication or full129-pair native gate coverage.`});}
mkdirSync(archive,{recursive:true});
for(const row of records){const p=`research/${run}-step1-${row.item}.json`;writeFileSync(`${archive}/${row.item}.json`,readFileSync(p));}
const rows=recordStep1Batch(root,{run,records,owner:true});
const fresh=loadStep1Record(root,run),notCurrent=[...fresh.items.keys()].filter(id=>!step1Decision(fresh,id).closed);
const hashes=Object.fromEntries(prep.map(p=>[p,createHash('sha256').update(readFileSync(p)).digest('hex')]));
writeFileSync(`research/${run}-owner-inactive-reconciliation/readiness-application.json`,JSON.stringify({run,at:new Date().toISOString(),records:rows.map(r=>({item:r.item,sha256:r.sha256})),preparation:hashes,current_authored_items:fresh.items.size,not_current:notCurrent,full_run_gate_attempted:false},null,2)+'\n');
console.log(JSON.stringify({refreshed:rows.length,current_items:fresh.items.size,notCurrent}));
if(notCurrent.length)process.exitCode=1;
