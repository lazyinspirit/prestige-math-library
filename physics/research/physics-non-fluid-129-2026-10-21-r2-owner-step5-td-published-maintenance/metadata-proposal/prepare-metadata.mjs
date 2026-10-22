import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {resolve, join} from 'node:path';
import {createHash} from 'node:crypto';
const root=process.cwd();
const {splitFrontmatter,sourceSectionText,sectionText,factParagraphs,numberedProofSteps}=await import(resolve('../tools/physics-support/facts-block.mjs'));
const {itemHashGuard}=await import(resolve('../tools/physics-support/item-hash.mjs'));
const {statementHash}=await import(resolve('../tools/physics-support/step5-statement.mjs'));
const run='physics-non-fluid-129-2026-10-21-r2';
const base=`research/${run}-owner-step5-td-published-maintenance`,out=`${base}/metadata-proposal`;
const changed=['cex-td-noncompact-phase-mixture-no-attained-maximum','pthm-td-intensive-coexistence-conditions','pthm-td-clapeyron-local'];
const affected=[...changed,'pthm-td-regular-gibbs-phase-rule','ex-td-clapeyron-linear-branches','cex-td-clapeyron-zero-volume-jump'];
const sha=text=>createHash('sha256').update(text).digest('hex');
const json=x=>JSON.stringify(x,null,2)+'\n';
const copy=x=>JSON.parse(JSON.stringify(x));
const read=p=>readFileSync(join(root,p),'utf8');
const put=(p,text)=>{if(!resolve(p).startsWith(resolve(out)+'/'))throw Error('proposal write escaped scope');writeFileSync(p,text);};
const pagePath=`research/${run}-batch-1.pages.json`,contractPath=`research/${run}-batch-1.proof-contracts.json`;
const beforePages=JSON.parse(read(`${out}/before/${pagePath}`)),pages=copy(beforePages);
const beforeContracts=JSON.parse(read(`${out}/before/${contractPath}`)),contracts=copy(beforeContracts);
const snapshots=JSON.parse(read(`${out}/inputs.json`));
const current=new Map(snapshots.inputs.filter(x=>x.path.startsWith('items/')).map(x=>{
 const id=x.path.slice(6,-3),text=read(x.snapshot),{fm,body}=splitFrontmatter(text),heading=id.startsWith('cex-')?'Statement refuted':'Statement';
 return [id,{id,text,body,section:heading,statement:(sourceSectionText(body,heading)??'').trim(),scope:fm.match(/^physical_scope:\s*(.*)$/m)?.[1],given:sectionText(body,'Facts & Assumptions').match(/\*\*Given:\*\*\s*([\s\S]*?)(?=\n\s*\n|$)/)?.[1]?.trim()??'',facts:factParagraphs(body),steps:numberedProofSteps(body),raw_sha256:sha(text),content_sha256:itemHashGuard(text),statement_sha256:statementHash(text),snapshot:x.snapshot}];
}));
const bindings=Object.fromEntries(changed.map(id=>{
 const receiptPath=`${base}/root-application/${id}.receipt.json`,receipt=JSON.parse(read(receiptPath)),s=current.get(id);
 if(receipt.content_sha256!==s.content_sha256)throw Error(`receipt/current mismatch ${id}`);
 return [id,{path:`items/${id}.md`,raw_sha256:s.raw_sha256,content_sha256:s.content_sha256,statement_sha256:s.statement_sha256,receipt:{path:receiptPath,sha256:sha(read(receiptPath))}}];
}));
const operations=[];
function update(document,path,value,basis){
 const keys=path.split('/').slice(1).map(x=>x.replace(/~1/g,'/').replace(/~0/g,'~')),obj=keys.slice(0,-1).reduce((x,k)=>x[k],document),k=keys.at(-1),old=copy(obj[k]);
 if(JSON.stringify(old)===JSON.stringify(value))return;
 operations.push({document:document===pages?pagePath:contractPath,op:'replace',path,before:old,after:copy(value),scientific_basis:basis});obj[k]=copy(value);
}
for(let p=0;p<pages.length;p++)for(let i=0;i<pages[p].items.length;i++){
 const row=pages[p].items[i];if(!changed.includes(row.id))continue;
 const s=current.get(row.id);
 update(pages,`/${p}/items/${i}/statement`,s.statement,'Exact complete current public section mirror of the root-applied local published correction; scope and model qualifications preserved.');
 update(pages,`/${p}/items/${i}/physical_scope`,s.scope,'Exact current physical_scope mirror; accumulation with fixed nonselected and auxiliary states replaces the ambiguous bilateral-transfer shorthand.');
}
for(const consumer of affected){
 const entry=contracts.contracts[consumer],original=beforeContracts.contracts[consumer];
 for(let i=0;i<entry.citations.length;i++){
  const row=entry.citations[i];if(!changed.includes(row.source))continue;
  update(contracts,`/contracts/${consumer}/citations/${i}/quote`,current.get(row.source).statement,'Replace only this stale full current-Statement quotation by the exact current supplier Statement. The original quotation is retained in immutable before metadata and field-history.json. Existing fact/source/uses identities are unchanged.');
 }
 for(let i=0;i<(entry.supplier_excerpts??[]).length;i++){
  const row=entry.supplier_excerpts[i];if(!changed.includes(row.supplier))continue;
  const source=row.supplier,s=current.get(source),prefix=`/contracts/${consumer}/supplier_excerpts/${i}`;
  update(contracts,`${prefix}/exact_statement`,s.statement,'Exact current supplier interface transcribed from the genuine applied carrier; existing historical_source_interface is preserved unchanged.');
  update(contracts,`${prefix}/status`,'Published local repair; exact current interface and this consumer use checked by /root/td_published_maintenance. Prior native/source-interface records remain historical; no new native acceptance is asserted.','Current local published status and same-owner affected-use reading, not a new native review stamp.');
  update(contracts,`${prefix}/supplier_proof_status`,`Published with recorded local repair ${bindings[source].receipt.path}; no new whole-item audit, native certification or external full-text reading is asserted.`,'Carry the genuine current local repair state and retain prior proof/status history in the archived original.');
  let hypotheses=row.relevant_hypotheses_and_conventions,use=row.consumer_use;
  if(consumer==='pthm-td-clapeyron-local'){
   hypotheses=current.get(consumer).facts.get('F3').text.trim().replace(/^\[F3\]\s*/, '');
   use='Used in proof 1.1 to obtain equal positive temperature, pressure and chemical potentials. The current Statement explicitly supplies feasible pure increments approaching zero from each sign and fixes all nonselected phase and auxiliary coordinates; no full feasible interval is required.';
  }else if(consumer==='pthm-td-regular-gibbs-phase-rule'){
   hypotheses='The supplier requires an attained entropy maximum, C2 phase entropy, finite positive temperature, and pure pairwise coordinate transfers with feasible increments approaching zero from each sign, fixing every nonselected phase and auxiliary state. This consumer explicitly supplies the stronger full two-sided transfer curves with auxiliary states fixed.';
   use='Used in proof 1.1 and 1.2 for chemical-potential equalities across phases. The consumer Statement supplies whole sufficiently small pure-transfer intervals and fixed auxiliaries, which imply the current supplier accumulation premise. Its reaction curves and zero auxiliary-entropy derivative remain separate explicit hypotheses.';
  }else if(consumer==='ex-td-clapeyron-linear-branches'){
   hypotheses='For the slope, the current supplier requires valid C1 phase/Gibbs charts, local C2 same-tag homogeneous energy representations, an attained maximum with pure pairwise transfers accumulating at zero from each sign and fixed nonselected phase/auxiliary coordinates, and a nonzero molar-volume jump. The Example supplies full two-sided pure transfer curves. The supplier latent-heat clause additionally requires interchanged full endpoint tuples; that relation is not inferred solely from the words forward and reverse in the Example.';
   use='Used in verification 1.1 and 3.1 for the branch-chart interface and in 4.1 for the 1000 Pa K^-1 slope. The 900 J mol^-1 heat value in 4.1 is independently derived from F2, whose existing second-law supplier adopts zero total entropy change for the stipulated complete-compound reversible operation; this use review does not invent a full-tuple reversal premise.';
  }else if(consumer==='cex-td-clapeyron-zero-volume-jump'){
   use='Used in counterexample 2.1 only to identify the unchanged nonzero molar-volume-jump hypothesis. The zero-set calculation is direct and this constructed counterexample assumes no stable or realized coexistence endpoint. No application of the supplier intensive-equality or reversible-heat clauses is made.';
  }
  update(contracts,`${prefix}/relevant_hypotheses_and_conventions`,hypotheses,'Exact current supplier hypotheses and the already reviewed consumer premises; no additional physical preparation or tuple identity is invented.');
  update(contracts,`${prefix}/consumer_use`,use,'Same-owner focused actual-use review retained from cycle 1 and checked against current applied source clauses.');
 }
}
const intensive='pthm-td-intensive-coexistence-conditions';
for(let i=0;i<contracts.contracts[intensive].derivations.length;i++){
 const row=contracts.contracts[intensive].derivations[i],s=current.get(intensive).steps.find(x=>x.id===row.step);if(!s)throw Error('missing step');
 update(contracts,`/contracts/${intensive}/derivations/${i}/claim`,s.claim,'Exact current numbered proof claim; ambient differentiability and maximum on feasible increments replace the unsupported full feasible-interval claim.');
 const inputs=[...s.inputs];for(const m of s.text.matchAll(/\bstep\s+(\d+\.\d+)\b|\b([FAL]\d+)\b/g)){const input=m[1]?`step ${m[1]}`:m[2];if(!inputs.includes(input))inputs.push(input);}
 update(contracts,`/contracts/${intensive}/derivations/${i}/inputs`,inputs,'Align explicit proof-step/fact dependencies, including the new references to the quotient argument of step 1.1 in steps 3.1 and 3.2.');
}
const reasons={
 zero:'Statement assumes P>=1 and finite positive temperatures. The basepoint has zero transfer, and nonzero feasible increments approach zero from each sign. Zero pressure, chemical potential or entropy change is not excluded. This row does not infer derivative equality for a direction lacking the stated accumulation premise.',
 degenerate:'Statement requires open C2 phase charts, finite positive temperatures and feasible pure increments approaching zero from each sign with all nonselected and auxiliary coordinates fixed. Isolated positive and negative transfers away from zero do not satisfy this premise. P=1 is vacuous and equal branch values are allowed.',
 'nonempty-choice':'Statement supplies finite named branches, the attained maximum and each exact local feasibility condition. The derivative-limit proof uses feasible increments arbitrarily close to zero from each sign without selecting an arbitrary infinite family of witnesses. No stronger choice or existence theorem is inferred.',
 'iff-forward':'Statement asserts conditional pairwise intensive equalities under the stated attained maximum and pure-transfer accumulation hypotheses. It does not characterize those hypotheses from equality, prove maximum attainment, or assert a converse.',
 'iff-reverse':'Statement gives no reverse inference from equal temperatures, pressures or chemical potentials to stable coexistence, transfer feasibility or existence. The claimed direction remains conditional on the exact stated model premises.'
};
for(const id of [intensive,'pthm-td-clapeyron-local'])for(let i=0;i<contracts.contracts[id].boundaries.length;i++){
 const row=contracts.contracts[id].boundaries[i],prefix=`/contracts/${id}/boundaries/${i}`;
 if(row.case_scope?.source_section==='Statement')update(contracts,`${prefix}/case_scope/source_excerpt`,current.get(id).statement,'Refresh only the current boundary scope quotation to the complete applied Statement; existing historical_case_scope remains byte-for-byte unchanged.');
 if(id===intensive&&reasons[row.case])update(contracts,`${prefix}/reason`,reasons[row.case],'Keep the existing checked/not_applicable classification while making its explanation match the applied accumulation premise rather than isolated bilateral transfer. No fresh native acceptance is asserted.');
 if(id===intensive&&row.case==='endpoints')update(contracts,`${prefix}/evidence`,'Step 4.1 excludes retained coordinates, one-sided boundary exchanges and isolated nonzero transfers away from zero. Statement and step 1.1 require feasible pure increments approaching zero from each sign; a whole feasible interval is sufficient but unnecessary.','Exact current boundary reasoning from the applied Statement and proof; no model extension is claimed.');
}
const noncompact=changed[0];
update(contracts,`/contracts/${noncompact}/finite_checks/0/expected`,'P_epsilon=(delta_{-epsilon}+delta_epsilon)/2 has coordinate integral zero and entropy s0-a*epsilon^2 tending to s0 as epsilon decreases to zero; step 1.1 proves no feasible measure attains s0.','Correct the stale expected-formula transcription (missing square) to the unchanged source verification 2.1. This is an expected symbolic check description, not an assertion of a newly executed finite computation.');
update(contracts,`/contracts/${noncompact}/current_boundary_worksheet`,{proposal:`${out}/receipt.json`,source_sha256:current.get(noncompact).raw_sha256,qualification:'Same scientific owner rechecked the existing eight boundary dispositions against the applied coordinatewise barycenter definition; bounded K gives automatic finite first moment and the two-atom witnesses remain feasible. The prior worksheet and its old source hash are preserved in before metadata and field-history.json. No new native acceptance or finite computation is asserted.'},'The prior current worksheet points to the pre-repair raw source. Bind the same-owner current-source reconciliation while preserving the original worksheet object in immutable history.');
// Preserve every pre-existing risk review and historical-source/case interface verbatim.
for(const [id,entry] of Object.entries(contracts.contracts))if(JSON.stringify(entry.risk_review)!==JSON.stringify(beforeContracts.contracts[id].risk_review))throw Error(`risk review changed ${id}`);
const history={version:1,run,kind:'exact-replaced-metadata-values-not-native-review',before_inputs:snapshots.inputs.filter(x=>x.path===pagePath||x.path===contractPath),changes:copy(operations),prior_risk_reviews:affected.map(id=>({id,risk_review:copy(beforeContracts.contracts[id].risk_review),qualification:'Original historical Alpha record preserved unchanged, not reissued or adopted as native acceptance of the applied current source.'}))};
put(`${out}/field-history.json`,json(history));
const historyRef={path:`${out}/field-history.json`,sha256:sha(read(`${out}/field-history.json`))};
for(const id of affected){
 const own=current.get(id),applied=changed.includes(id),supplierBindings=Object.fromEntries([...new Set(contracts.contracts[id].citations.map(r=>r.source).filter(s=>changed.includes(s)))].map(s=>[s,bindings[s]]));
 const value={version:1,kind:'local-published-metadata-reconciliation',scientific_owner:'/root/td_published_maintenance',scientific_review_cycle:1,source:{path:`items/${id}.md`,raw_sha256:own.raw_sha256,content_sha256:own.content_sha256,statement_sha256:own.statement_sha256},...(applied?{published_repair:bindings[id].receipt}:{}),changed_supplier_bindings:supplierBindings,current_given:own.given,current_fact_texts:Object.fromEntries([...own.facts].map(([k,v])=>[k,v.text.trim()])),history:historyRef,scientific_basis:{path:`${base}/report.md`,sha256:sha(read(`${base}/report.md`))},source_reading_limits:'Current applied local carriers and the previously guarded actual consumer uses only. No external full-text retrieval or new whole-supplier audit; all prior historical_source_interface, historical_case_scope and risk_review records are retained.',prior_risk_review_disposition:'Retained unchanged as historical Alpha evidence; no new native review or acceptance of current repaired bytes is represented by this reconciliation.',native_review:false,native_adjudication:false,independent_acceptance:false};
 const pointer=`/contracts/${id}/local_published_metadata_reconciliation`;if(Object.hasOwn(contracts.contracts[id],'local_published_metadata_reconciliation'))throw Error('reconciliation already present');
 contracts.contracts[id].local_published_metadata_reconciliation=value;operations.push({document:contractPath,op:'add',path:pointer,before_absent:true,after:copy(value),scientific_basis:'Truthful same-owner current source/Given/fact/receipt bindings and preserved historical context; this adds no native or independent acceptance stamp.'});
}
put(`${out}/candidate/${pagePath}`,json(pages));put(`${out}/candidate/${contractPath}`,json(contracts));
put(`${out}/field-changes.json`,json({version:1,run,kind:'unapplied-field-level-json-patch-with-before-values',production_edits:false,source_bindings:bindings,operations}));
put(`${out}/source-bindings.json`,json({run,bindings,actual_sources:[...current.values()].map(s=>({id:s.id,path:`items/${s.id}.md`,snapshot:s.snapshot,raw_sha256:s.raw_sha256,content_sha256:s.content_sha256,statement_sha256:s.statement_sha256})),applied_source_match_to_cycle1_proposal:changed.map(id=>({id,matches_content:itemHashGuard(read(`${base}/proposals/items/${id}.md`))===current.get(id).content_sha256})),native_acceptance:false}));
console.log(JSON.stringify({operations:operations.length,manifest_operations:operations.filter(o=>o.document===pagePath).length,contract_operations:operations.filter(o=>o.document===contractPath).length,contract_items:[...new Set(operations.filter(o=>o.document===contractPath).map(o=>o.path.split('/')[2]))],prior_risk_review:'All unchanged',candidate_only:true}));
