#!/usr/bin/env node
// Exactly14 supplemental accepted source bindings; metadata extraction only.
// Does not execute contract regeneration, hashes, gates, readiness or canonical edits.
import fs from'node:fs';
import assert from'node:assert/strict';
import{isProofBearing}from'../../../../tools/proof-bearing.mjs';
import{factParagraphs,numberedProofSteps,splitFrontmatter}from'../../../../tools/facts-block.mjs';
import{yaml}from'../../../../tools/pathway-lib.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19',BASE=`research/${RUN}-supervision-20261020/step1-bounded-closeout`,D=`${BASE}/metadata-diagnosis`;
const args=process.argv.slice(2),value=k=>{const i=args.indexOf(k);return i<0?undefined:args[i+1];};
assert(args.includes('--registry'),'Root supplies adopted supplemental14 registry');
const registryPath=value('--registry'),registry=JSON.parse(fs.readFileSync(registryPath,'utf8'));
assert.equal(registry.run,RUN);assert.equal(registry.adopted_by_root,true);assert.equal(registry.adopted_by,'/root');
assert(Array.isArray(registry.entries)&&registry.entries.length===14);
const ids=new Set(registry.entries.map(r=>r.id));assert.equal(ids.size,14);
const homes=new Map();
for(let b=1;b<=109;b++)for(const p of JSON.parse(fs.readFileSync(`research/${RUN}-batch-${b}.pages.json`,'utf8')))
 for(const i of p.items){assert(!homes.has(i.id));homes.set(i.id,{batch:b,page:p.id});}
assert.equal(homes.size,1471);
const rows=[],observations=[];
for(const accepted of registry.entries){
 const id=accepted.id;assert(homes.has(id));const home=homes.get(id);
 const canonical=`items/${id}.md`,{fm,body}=splitFrontmatter(fs.readFileSync(canonical,'utf8')),meta=yaml().parse(fm);
 const cf=`research/${RUN}-batch-${home.batch}.proof-contracts.json`,doc=JSON.parse(fs.readFileSync(cf,'utf8')),entry=doc.contracts?.[id];
 assert(entry&&typeof entry==='object',`Supplemental14 existing contract required; root decides separately if absent: ${id}`);
 const steps=numberedProofSteps(body),facts=[...factParagraphs(body).values()];
 const verdict=accepted.independent_review?.recorded_verdict??accepted.verdict;
 const record=accepted.independent_review?.final_record??accepted.final_record??accepted.acceptance_record;
 assert(typeof record==='string'&&fs.existsSync(record),`Actual final review metadata required: ${id}`);
 assert(/pass|accept/i.test(verdict??''),`Literal accepted final verdict required: ${id}`);
 const stepIds=new Set(steps.map(s=>s.id));const metadata_overrides={};
 for(const key of ['proof_status','authoring_status','status'])if(typeof entry[key]==='string'&&/hold|block|incomplete|pending|escalat|unresolved/.test(entry[key]))metadata_overrides[key]='complete';
 if(entry.risk_review&&/hold|block|incomplete|pending|escalat|unresolved/.test(entry.risk_review.status??''))metadata_overrides.risk_review={...entry.risk_review,status:'complete',owner_metadata_note:'Historical metadata hold superseded at exact supplemental root-adopted source-qualified original scope; no new risk review claimed.'};
 if(Object.keys(metadata_overrides).length)metadata_overrides.proof_status_evidence='Historical status metadata integrated from exact final supplemental root adoption and independent final report; imported dependencies retain their declared source boundaries. No new proof review or readiness credit.';
 rows.push({id,action:steps.length?'regenerate-existing':'metadata-only',accepted_scope:accepted.scope??'Exact original Statement at literal hypotheses, with preserved prior proof portions and explicitly imported established dependencies at final reviewed source boundaries.',accepted_scope_evidence:[registryPath,record],source_boundary:{sources:meta.sources??null,provenance:meta.provenance??null,axiom_use:meta.axiom_use??null},metadata_overrides,...(steps.length?{remove_stale_routine_steps:(entry.routine_steps??[]).filter(s=>!stepIds.has(s.step)).map(s=>s.step)}:{no_argument_note:'No numbered supplied argument to regenerate; preserve existing entry; no manufactured steps.'})});
 observations.push({id,canonical,batch:home.batch,page:home.page,contract_file:cf,isProofBearing:isProofBearing(body),numbered_sections:steps.map(s=>({step:s.id,inputs:s.inputs})),facts:facts.map(f=>({label:f.label,links:f.links,text:f.text})),accepted_scope_metadata:accepted,existing_boundaries_preserved:true});
}
const out={run:RUN,authorized_by:'/root',frontier_policy:'preserve-1471-context-only',all_mathematical_writers_drained:false,requires_root_registry_adoption:true,root_registry_adoption_record:registryPath,contracts:rows,observations,limits:['Only these14 source-qualified bindings refreshed; no whole-inventory repetition or old proof audit.','All existing boundaries/classifications/risk history retained except exact literal stale routine mappings and root-accepted status supersessions.','Conway definition current Proof/F1/F2 is parsed as supplied, never inferred from old no-argument metadata.','No contract/canonical/hash/gate/readiness actions performed.']};
const output=value('--output')??`${D}/root-fourteen-contract-extension.proposal.json`;
fs.writeFileSync(output,JSON.stringify(out,null,2)+'\n');
if(args.includes('--merge-with')){
 const base=JSON.parse(fs.readFileSync(value('--merge-with'),'utf8'));
 assert.equal(base.run,RUN);const byId=new Map(base.contracts.map(r=>[r.id,r]));for(const r of rows)byId.set(r.id,r);
 base.contracts=[...byId.values()];base.supplemental_fourteen_registry=registryPath;base.supplemental_fourteen_ids=[...ids];
 base.all_mathematical_writers_drained=false;
 // Keep root's original proposal historical lists, but explicitly supersede any
 // now-obsolete no-argument exclusion for these14 IDs.
 base.excluded_nonproof_missing=(base.excluded_nonproof_missing??[]).filter(r=>!ids.has(r.id));
 base.unmatched_scope_decisions=(base.unmatched_scope_decisions??[]).filter(r=>!ids.has(r.id));
 base.prior_proposal_counts=base.counts;
 base.counts={actions:base.contracts.length,by_action:Object.fromEntries(['explicit-entry','regenerate-existing','metadata-only'].map(k=>[k,base.contracts.filter(r=>r.action===k).length])),supplemental_originals:14,unmatched_scope:base.unmatched_scope_decisions.length};
 const merged=value('--merged-output')??`${D}/root-required-plus-fourteen-contract-decisions.proposal.json`;
 fs.writeFileSync(merged,JSON.stringify(base,null,2)+'\n');
}
console.log(JSON.stringify({output,items:rows.length,proof_bearing:observations.filter(r=>r.isProofBearing).length,numbered_steps:observations.reduce((n,r)=>n+r.numbered_sections.length,0)}));
