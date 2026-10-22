#!/usr/bin/env node
// Bounded metadata preparation; writes proposals only, never canonical/contracts/hash/gates.
import fs from'node:fs';
import{isProofBearing}from'../../../../tools/proof-bearing.mjs';
import{SOURCE_SECTIONS,factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter}from'../../../../tools/facts-block.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19',BASE=`research/${RUN}-supervision-20261020/step1-bounded-closeout`,D=`${BASE}/metadata-diagnosis`;
const json=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const inv=json(`${D}/contract-integration-inventory.json`);
const registryPath=`${BASE}/root-source-qualified-66-scope-adoption-registry.json`,registry=json(registryPath);
const qualified=new Map(registry.entries.map(r=>[r.id,r]));
const mapPath=`research/${RUN}-math-resolution-map.json`,map=json(mapPath),closureScopes=new Map();
for(const [i,c]of(map.mathematical_closures??[]).entries())for(const id of c.originals??[])
 closureScopes.set(id,{scope:c.verdict??'Exact root-recorded original closure scope',evidence:[mapPath],basis:`Root-declared original230 coverage union /mathematical_closures/${i}; no fresh review`,scope_record:c});
for(const [i,c]of(map.source_status_dispositions??[]).entries())for(const id of c.ids??[])
 closureScopes.set(id,{scope:c.verdict,evidence:[mapPath,c.report?.path].filter(Boolean),basis:`Root-declared original230 source/status scope /source_status_dispositions/${i}; no solution of open question inferred`,scope_record:c});

const worksheets=json(`${D}/required-four-contract-boundary-decisions.json`);
const cache=new Map();
function body(id){if(!cache.has(id))cache.set(id,splitFrontmatter(fs.readFileSync(`items/${id}.md`,'utf8')).body);return cache.get(id);}
function accepted(r){
 const q=qualified.get(r.id);if(q)return {scope:'Exact original Statement at literal category/choice hypotheses, with preserved local segments and explicitly imported established source boundaries; see final independent report.',evidence:[q.independent_review.final_record,registryPath],basis:'root-adopted66 exact original scope registry',scope_record:q};
 const a=r.recorded_reuse_evidence?.record;
 if(a?.latest_full_acceptance!==undefined){const z=a.records?.find(x=>x.closure_record===a.latest_full_acceptance&&x.whole_source_accepted);
 if(z)return {scope:z.scope,evidence:[z.evidence.path,r.recorded_reuse_evidence.path],basis:'recorded whole-original accepted scope; no fresh currency or review',scope_record:z};}
 return closureScopes.get(r.id)??null;
}
function entry(id){const b=body(id),steps=numberedProofSteps(b),stepIds=new Set(steps.map(s=>s.id));
 const tokens=s=>{const out=new Set();for(const m of s.text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g))if(m[2])out.add(m[2]);else if(/^steps?\s/i.test(m[0])||stepIds.has(m[1]))out.add(m[1]);return out;};
 const citations=[];
 for(const f of factParagraphs(b).values())for(const src of new Set(f.links)){
 let section,quote;for(const h of SOURCE_SECTIONS){const t=sourceSectionText(body(src),h)?.trim();if(t){section=h;quote=t;break;}}
 if(!quote)throw Error(`No literal citable section ${src}`);
 citations.push({fact:f.label,source:src,source_section:section,quote,uses:steps.filter(s=>tokens(s).has(f.label)).map(s=>s.id)});
 }
 return {citations,derivations:steps.map(s=>({id:`step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:[...new Set([...s.inputs,...[...tokens(s)].map(t=>/^\d/.test(t)?`step ${t}`:t)])]})),routine_steps:[],boundaries:worksheets[id].map(([name,status,text])=>({case:name,status,[status==='checked'?'evidence':'reason']:text}))};
}
const contracts=[],excluded=[],needsRoot=[],missing=[];
for(const r of inv.rows){const proof=isProofBearing(body(r.id));
 if(r.state==='missing-entry'&&!proof){excluded.push({id:r.id,reason:'Native isProofBearing false: no supplied argument heading; no invented contract.'});continue;}
 const delta=Object.values(r.mechanical_delta).some(v=>v.length),held=r.held_fields.length>0;
 if(r.state!=='missing-entry'&&!delta&&!held)continue;
 const a=accepted(r);
 if(!a){
  if(delta&&r.state!=='missing-entry'&&numberedProofSteps(body(r.id)).length)contracts.push({id:r.id,action:'regenerate-existing',remove_stale_routine_steps:(json(r.contract_file).contracts[r.id]?.routine_steps??[]).filter(s=>!numberedProofSteps(body(r.id)).some(t=>t.id===s.step)).map(s=>s.step),mathematics_unchanged:true,mapping_evidence:[r.contract_file,`items/${r.id}.md`],accepted_scope:'No new mathematical acceptance asserted; root authorizes metadata-only actual Facts/step mapping refresh under existing native original authoring.',accepted_scope_evidence:[r.contract_file],source_boundary:r.external_boundary,metadata_overrides:{}});
  if(held)needsRoot.push({id:r.id,state:r.state,reason:'Historical held status preserved: no matching230 closure in bounded metadata. Mechanical mapping can still refresh; no proof reopening or new scope gap inferred.'});
  continue;
 }
 const row={id:r.id,action:r.state==='missing-entry'?'explicit-entry':'regenerate-existing',accepted_scope:a.scope,accepted_scope_evidence:a.evidence,acceptance_binding:a.basis,source_boundary:r.external_boundary,metadata_overrides:{}};
 if(r.state==='missing-entry'){row.entry=entry(r.id);row.boundary_decision_evidence='Explicit eight-case worksheet derived from actual literal Statement/hypotheses and named final accepted argument sections; metadata preparation, not new mathematical review.';missing.push(r.id);}
 const old=json(r.contract_file).contracts[r.id];
 const actualSteps=new Set(numberedProofSteps(body(r.id)).map(s=>s.id));
 if(row.action==='regenerate-existing'&&!actualSteps.size){row.action='metadata-only';row.no_argument_note='Definition has no supplied argument: preserve existing contract; no manufactured proof steps.';}
 if(row.action==='regenerate-existing')row.remove_stale_routine_steps=(old?.routine_steps??[]).filter(s=>!actualSteps.has(s.step)).map(s=>s.step);
 if(held){for(const h of r.held_fields){
 if(h.key==='risk_review')row.metadata_overrides.risk_review={...old.risk_review,status:'complete',owner_metadata_note:'Historical hold superseded only at matching accepted whole-original scope in accepted_scope_evidence; no new risk review claimed.'};
 else row.metadata_overrides[h.key]='complete';}
 row.metadata_overrides.proof_status_evidence='Historical metadata hold superseded at the exact accepted whole-original scope cited in owner_metadata_note; established imported dependencies remain explicit; no new proof review or native readiness credit.';}
 if(!delta&&r.state!=='missing-entry')row.action='metadata-only';
 contracts.push(row);
}
const out={run:RUN,authorized_by:'/root',frontier_policy:'preserve-1471-context-only',all_mathematical_writers_drained:false,requires_root_registry_adoption:true,root_registry_adoption_record:registryPath,registry_record:registryPath,contracts,excluded_nonproof_missing:excluded,unmatched_scope_decisions:needsRoot,counts:{genuine_missing:missing.length,excluded_nonproof:excluded.length,actions:contracts.length,by_action:Object.fromEntries(['explicit-entry','regenerate-existing','metadata-only'].map(k=>[k,contracts.filter(r=>r.action===k).length])),unmatched_scope:needsRoot.length},limits:['Proposal only; root must confirm genuine final drain before application;66 registry is adopted.','No original/provider proof audit, hash/currency checks, gates, native readiness or canonical/contract writes.','All560 helpers remain prerequisite context;1471 frontier unchanged.']};
fs.writeFileSync(`${D}/root-required-contract-decisions.proposal.json`,JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify(out.counts));
