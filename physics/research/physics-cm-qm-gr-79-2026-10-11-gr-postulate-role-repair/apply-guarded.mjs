import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadPhysicsRepository, validatePhysicsContent } from '../../../tools/physics-support/physics-content.mjs';
import { loadStep3, itemHash } from '../../../tools/physics-support/frontier-snapshot.mjs';
import { recordStep1, step1Decision } from '../../../tools/physics-support/step1-decisions.mjs';
const run='physics-cm-qm-gr-79-2026-10-11', dir=`research/${run}-gr-postulate-role-repair`, root=process.cwd();
const sha=x=>createHash('sha256').update(x).digest('hex'), read=p=>readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const save=(p,x)=>writeFileSync(`${dir}/${p}`,JSON.stringify(x,null,2)+'\n');
const bindings=json(`${dir}/bindings.json`), own=bindings.affected_readiness_descendants.filter(r=>r.batch==='69');
const ids=['post-gr-einstein-field-law','post-gr-classical-gravitational-action'], suppliers=['post-gr-spacetime-and-classical-domain','post-gr-field-and-matter-assumptions'];
const guards=[...bindings.supplier_carriers,bindings.manifests_and_evidence[0],...own.flatMap(r=>[r.carrier,r.readiness])];
for(const g of guards) if(sha(readFileSync(g.path))!==g.raw_sha256) throw Error(`Changed guarded input: ${g.path}`);
const liveBefore=loadStep3(root,run);
for(const r of own) if(itemHash(liveBefore,r.id,r.readiness.row.dependencies)!==r.readiness.current_native_input_sha256) throw Error(`Changed own readiness inputs: ${r.id}`);
const state=json(`.physics-autopilot/${run}/state.json`);
if(!state.dispatches['1-scaffold:batch-69']?.endedAt || Object.values(state.dispatches).some(d=>!d.endedAt && (d.label==='batch-69'||d.covers?.includes('69')))) throw Error('Batch69 writer not drained');
const manifestPath=`research/${run}-batch-69.pages.json`, beforeManifest=read(manifestPath), proposedManifest=read(`${dir}/proposed/batch-69.pages.json`);
const original=json(manifestPath), patched=structuredClone(original); let slots=0;
for(const page of patched) for(const item of page.items??[]) if(ids.includes(item.id)) for(const supplier of suppliers) { if(item.dependency_roles[supplier]!=='physical-assumption') throw Error('Unexpected manifest slot'); item.dependency_roles[supplier]='formulation-prerequisite';slots++; }
if(slots!==4 || JSON.stringify(patched,null,2)+'\n'!==proposedManifest) throw Error('Non-slot manifest change');
const mutations=[];
for(const id of ids){const path=`items/${id}.md`,before=read(path);let expected=before;
 for(const supplier of suppliers){const old=`  ${supplier}: physical-assumption`;if(expected.split(old).length!==2)throw Error('Unexpected carrier slot');expected=expected.replace(old,`  ${supplier}: formulation-prerequisite`);}
 const after=read(`${dir}/proposed/items/${id}.md`);if(after!==expected)throw Error('Non-slot carrier change');
 if(before.split('\n---\n').slice(1).join('\n---\n')!==after.split('\n---\n').slice(1).join('\n---\n'))throw Error('Body changed');
 mutations.push({path,before,after});
}
mutations.push({path:manifestPath,before:beforeManifest,after:proposedManifest});
for(const m of mutations)writeFileSync(m.path,m.after);
const repo=loadPhysicsRepository(root,null,new Set()),errors=validatePhysicsContent({...repo,pages:[],selectedItems:new Set(ids),selectedPages:new Set()});
save('production-validator-postcheck.json',{at:new Date().toISOString(),selection:ids,errors,production:true});
if(errors.length)throw Error('Production validator failed; retain evidence and escalate');
mkdirSync(`${dir}/before/readiness`,{recursive:true});
const refreshed=[],preserved=[];
const ordered=[...ids,...own.map(r=>r.id).filter(id=>!ids.includes(id))];
for(const id of ordered){const binding=own.find(r=>r.id===id),path=binding.readiness.path,old=json(path);
 if(sha(readFileSync(path))!==binding.readiness.raw_sha256)throw Error(`Readiness changed before refresh ${id}`);
 writeFileSync(`${dir}/before/readiness/${id}.json`,readFileSync(path));
 if(old.decision!=='ready'||old.owner){preserved.push({id,reason:'Nonordinary or escalated row retained',row:old});continue;}
 const reason=old.reason+' Metadata currency refresh after four formulation-prerequisite role corrections on the two batch-69 postulates and matching manifest rows; public formulations, bodies, scopes and dependency IDs unchanged. Local focused metadata validator has zero errors; historical source/physics assertions are not newly audited. Receipt: '+dir+'/integration-receipt.json.';
 const row=recordStep1(root,{run,item:id,decision:'ready',dependencies:old.dependencies,reason,owner:false});
 refreshed.push({id,before_raw_sha256:binding.readiness.raw_sha256,after_raw_sha256:sha(readFileSync(path)),row});
}
const final=loadStep3(root,run), untouched=[];
for(const r of bindings.affected_readiness_descendants.filter(r=>r.batch!=='69')){const path=`research/${run}-step1-${r.id}.json`,row=existsSync(path)?json(path):null;untouched.push({id:r.id,batch:r.batch,carrier_raw_sha256:existsSync(`items/${r.id}.md`)?sha(readFileSync(`items/${r.id}.md`)):null,readiness_path:path,readiness_raw_sha256:row?sha(readFileSync(path)):null,row,current_native_input_sha256:row?itemHash(final,r.id,row.dependencies):null,written:false});}
save('integration-receipt.json',{at:new Date().toISOString(),cycle:1,maximum_cycles:2,authorization:'Root explicit exact eight role-value release',metadata_only:true,role_values_changed:8,body_scope_deps_unchanged:true,production_files_written:mutations.map(m=>({path:m.path,before_raw_sha256:sha(m.before),after_raw_sha256:sha(m.after)})),scoped_validator_errors:errors,readiness_refreshed:refreshed,readiness_preserved:preserved,own_currency:own.map(r=>({id:r.id,...step1Decision(final,r.id)})),untouched_consumers:untouched,no_controls_or_gates:true});
console.log(JSON.stringify({role_values_changed:8,errors:errors.length,refreshed:refreshed.length,preserved:preserved.length,untouched_consumers:untouched.length}));
