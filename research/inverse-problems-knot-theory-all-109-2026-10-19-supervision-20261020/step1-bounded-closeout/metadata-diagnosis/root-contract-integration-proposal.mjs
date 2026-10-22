#!/usr/bin/env node
// ROOT-ONLY PROPOSAL. Author has not executed it. No gates/hashes/readiness/item edits.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {splitFrontmatter,numberedProofSteps} from '../../../../tools/facts-block.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const args=process.argv.slice(2),value=k=>args[args.indexOf(k)+1];
assert(args.includes('--decisions')&&args.includes('--archive-dir'));
const decision=JSON.parse(fs.readFileSync(value('--decisions'),'utf8'));
assert.equal(decision.run,RUN);assert.equal(decision.authorized_by,'/root');
assert.equal(decision.frontier_policy,'preserve-1471-context-only');
assert(Array.isArray(decision.contracts));
const apply=args.includes('--apply');
if(apply){
 assert.equal(decision.all_mathematical_writers_drained,true);
 if(decision.requires_root_registry_adoption) {
  assert(typeof decision.root_registry_adoption_record==='string');
  assert(fs.existsSync(decision.root_registry_adoption_record));
 }
}
const homes=new Map();
for(let b=1;b<=109;b++)for(const p of JSON.parse(fs.readFileSync(`research/${RUN}-batch-${b}.pages.json`,'utf8')))
 for(const i of p.items){assert(!homes.has(i.id));homes.set(i.id,b);}
assert.equal(homes.size,1471);
const plans=[],seen=new Set();
for(const row of decision.contracts){
 assert(homes.has(row.id)&&!seen.has(row.id));seen.add(row.id);
 assert(Array.isArray(row.accepted_scope_evidence)&&row.accepted_scope_evidence.length,
  `Root must bind actual accepted original scope for ${row.id}`);
 for(const file of row.accepted_scope_evidence)assert(fs.existsSync(file));
 assert(typeof row.accepted_scope==='string'&&row.accepted_scope.trim());
 if(row.mathematics_unchanged){
  assert.equal(row.action,'regenerate-existing');
  assert.equal(Object.keys(row.metadata_overrides??{}).length,0,'Mapping-only refresh cannot clear holds');
 }
 assert(['regenerate-existing','explicit-entry','metadata-only','preserve-held'].includes(row.action));
 const file=`research/${RUN}-batch-${homes.get(row.id)}.proof-contracts.json`;
 const doc=JSON.parse(fs.readFileSync(file,'utf8')),entry=doc.contracts?.[row.id];
 if(row.action==='regenerate-existing'){
  assert(entry,`No existing entry: ${row.id}`);
  const steps=numberedProofSteps(splitFrontmatter(fs.readFileSync(`items/${row.id}.md`,'utf8')).body);
  assert(steps.length,'Native regen skips no-step items; supply exact explicit entry');
  const stale=(entry.routine_steps??[]).filter(s=>!steps.some(t=>t.id===s.step)).map(s=>s.step);
  assert.deepEqual(row.remove_stale_routine_steps??[],stale,
   'Explicit exact mechanical stale routine mapping removal required');
 }
 if(row.action==='metadata-only')assert(entry,`No existing metadata entry: ${row.id}`);
 if(row.action==='explicit-entry'){
  assert(row.entry&&typeof row.entry==='object'&&!Array.isArray(row.entry));
  assert(typeof row.boundary_decision_evidence==='string'&&row.boundary_decision_evidence.trim(),
   'Missing/replaced boundaries require actual root accepted evidence, never generic default reasons');
 }
 if(row.metadata_overrides)for(const key of Object.keys(row.metadata_overrides))
  assert(['proof_status','proof_status_evidence','authoring_status','status','risk_review','owner_metadata_note','source_boundary'].includes(key));
 plans.push({row,file});
}
console.log(JSON.stringify({mode:apply?'root-apply':'proposal-only',subjects:plans.map(p=>({id:p.row.id,file:p.file,action:p.row.action})),limits:'No new acceptance, boundary review, gates, readiness or coverage inferred.'},null,2));
if(!apply)process.exit(0);
const archive=value('--archive-dir');fs.mkdirSync(archive,{recursive:true});
for(const {file}of plans){const dest=path.join(archive,file);if(!fs.existsSync(dest)){fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(file,dest,fs.constants.COPYFILE_EXCL);}}
for(const {row,file}of plans){
 if(row.action==='preserve-held')continue;
 if(row.action==='regenerate-existing'){
  if(row.remove_stale_routine_steps?.length){
   const current=JSON.parse(fs.readFileSync(file,'utf8'));
   current.contracts[row.id].routine_steps=current.contracts[row.id].routine_steps.filter(s=>!row.remove_stale_routine_steps.includes(s.step));
   fs.writeFileSync(file,JSON.stringify(current,null,2)+'\n');
  }
  const p=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',file,row.id],{stdio:'inherit'});
  assert.equal(p.status,0,'Stop on native metadata regeneration error');
 }
 const doc=JSON.parse(fs.readFileSync(file,'utf8'));
 if(row.action==='metadata-only')assert(doc.contracts?.[row.id],`No existing metadata entry: ${row.id}`);
 if(row.action==='explicit-entry'){
  doc.contracts??={};doc.contracts[row.id]=row.entry;
  if(!doc.scope.includes(row.id))doc.scope.push(row.id);
 }
 Object.assign(doc.contracts[row.id],row.metadata_overrides??{});
 // Historical evidence is archived intact. This explicit integration note is
 // scope/provenance metadata and does not impersonate a native review receipt.
 doc.contracts[row.id].owner_metadata_note={...(typeof doc.contracts[row.id].owner_metadata_note==='object'?doc.contracts[row.id].owner_metadata_note:{}),accepted_scope:row.accepted_scope,accepted_scope_evidence:row.accepted_scope_evidence,source_boundary:row.source_boundary??null,historical_preimage:path.join(archive,file),new_math_acceptance:false};
 fs.writeFileSync(file,JSON.stringify(doc,null,2)+'\n');
}
