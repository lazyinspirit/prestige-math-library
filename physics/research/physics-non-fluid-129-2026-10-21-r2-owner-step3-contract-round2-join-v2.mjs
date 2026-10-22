// Root actual adoption of released case reviews, research-only successor.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../tools/physics-support/item-hash.mjs';
const r='physics-non-fluid-129-2026-10-21-r2',b=`research/${r}-owner-step3-root-adoption/contracts-current-round2`,p=`research/${r}-owner-step3-boundary-current-combined`;
const sha=x=>createHash('sha256').update(x).digest('hex'),read=x=>JSON.parse(readFileSync(x)),guards=[];
function guard(path){const bytes=readFileSync(path);guards.push({path,sha256:sha(bytes)});return JSON.parse(bytes);}
const fresh=guard(`${b}/merged.proposal.json`),sem=guard(`${p}/merged.semantic-proposal.round2.final.json`),table=guard(`${p}/proposal.final.json`);
const frozen=table.immutable_base_guard;if(sha(readFileSync(frozen.path))!==frozen.sha256)throw Error('Immutable semantic input differs');
for(const g of table.owner_input_guards)if(sha(readFileSync(g.path))!==g.sha256)throw Error('Owner evidence differs '+g.path);
for(const[id,e]of Object.entries(fresh.contracts)){
 const prior=sem.contracts[id];if(!prior)throw Error('No reviewed semantic contract '+id);
 if(prior.boundaries)e.boundaries=structuredClone(prior.boundaries);
 if(id==='post-tgrx-free-collapse-scattering')for(const k of ['physics_review','risk_review','prior_step3_native_risk_review'])if(prior[k])e[k]=structuredClone(prior[k]);
}
const changes=[];
for(const row of table.rows){
 const entry=fresh.contracts[row.id],n=entry.boundaries.findIndex(b=>b.case===row.case);if(n<0)throw Error('No boundary row');
 const bnd=structuredClone(row.semantic_after_row),ev=row.owner_case_evidence;
 const specific=['mathematical_reasoning','item_specific_actual_reasoning','concrete_item_reasoning','reasoning','concrete_reasoning','reason','issue'].map(k=>ev[k]).find(x=>typeof x==='string'&&x.trim().length>=40);
 if(!specific)throw Error('No concrete current review '+row.id+'/'+row.case);
 const path=`items/${row.id}.md`,raw=readFileSync(path,'utf8'),binding=table.source_bindings[row.id];
 if(sha(raw)!==(binding.observed_current_sha256??binding.reviewed_sha256))throw Error('Actual source differs '+row.id);
 guards.push({path,sha256:sha(raw)});
 const reason=`Root adopts /root/${row.owner} current case review in ${row.owner_proposal}: ${specific} Source reading limits and exact support remain in the sealed proposal; no independent native proof acceptance is asserted.`;
 const stamp={upheld:true,by:`/root adopting /root/${row.owner}`,reason,item_sha256:itemHashGuard(raw),row_sha256:sha(JSON.stringify({case:bnd.case,status:bnd.status,text:bnd.reason??bnd.evidence??''}))};
 bnd.template_review=stamp;
 if(bnd.status==='not_applicable')bnd.reviewed=stamp;
 entry.boundaries[n]=bnd;changes.push({id:row.id,case:row.case,owner:row.owner,semantic_changed:row.semantic_changed});
}
const output=`${b}/merged.adopted-proposal.v2.json`;if(existsSync(output))throw Error('Preserve prior output');
writeFileSync(output,JSON.stringify(fresh,null,2)+'\n');
for(let n=1;n<=129;n++){const doc=read(`${b}/batch-${n}.proposal.json`);for(const id of Object.keys(doc.contracts))doc.contracts[id]=fresh.contracts[id];writeFileSync(`${b}/batch-${n}.adopted-proposal.v2.json`,JSON.stringify(doc,null,2)+'\n');}
writeFileSync(`${b}/semantic-adoption.v2.json`,JSON.stringify({run:r,at:new Date().toISOString(),reviewed_rows:changes.length,changes,guards,production_edits:false,native_gate_success:false},null,2)+'\n');console.log(JSON.stringify({scope:fresh.scope.length,adopted_cases:changes.length,output}));
