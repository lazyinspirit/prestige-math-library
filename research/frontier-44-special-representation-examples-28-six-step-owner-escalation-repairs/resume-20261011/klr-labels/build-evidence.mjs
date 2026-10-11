import fs from 'node:fs';
import crypto from 'node:crypto';
import { itemContentHash, itemSurfaceHash } from '../../../../tools/item-hash.mjs';
import { frontmatterList } from '../../../../tools/frontmatter-list.mjs';

const base='research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs';
const dest=base+'/resume-20261011/klr-labels';
const run='frontier-44-special-representation-examples-28-six-step';
const native=`research/${run}-alpha-batch-47-3a-decisions.json`;
const ids=[
 'lem-klr-two-color-jump-formula-and-strict-elementary-embeddings',
 'lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors',
 'thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda',
 'lem-cyclotomic-extension-of-scalars-respects-the-based-quotient',
 'thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis',
 'thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis'];
const sha=t=>crypto.createHash('sha256').update(t).digest('hex');
const read=p=>fs.readFileSync(p,'utf8');
const write=(p,v)=>fs.writeFileSync(dest+'/'+p,JSON.stringify(v,null,2)+'\n');
const all=new Map(fs.readdirSync('items').filter(n=>n.endsWith('.md')).map(n=>{
 const id=n.slice(0,-3), text=read('items/'+n);return [id,{id,text,deps:frontmatterList(text,'deps'),aliases:frontmatterList(text,'aliases')}];
}));
const aliases=new Map();for(const x of all.values())for(const a of x.aliases)aliases.set(a,x.id);
const resolve=x=>aliases.get(x)||x;
const graph=new Map([...all].map(([id,x])=>[id,new Set(x.deps.map(resolve))]));
const historical=[];
for(const sub of ['klr_jump/before','klr_categorification/before'])
 for(const n of fs.readdirSync(base+'/'+sub).filter(n=>n.endsWith('.md'))){
  const id=n.slice(0,-3);if(!ids.includes(id))continue;
  const p=base+'/'+sub+'/'+n,t=read(p);historical.push({path:p,raw_sha256:sha(t)});
  for(const dep of frontmatterList(t,'deps'))graph.get(id).add(resolve(dep));
 }
const reach=new Set(ids);let changed=true;
while(changed){changed=false;for(const [id,deps] of graph)if(!reach.has(id)&&[...deps].some(d=>reach.has(d))){reach.add(id);changed=true;}}
const guards={};const guard=id=>{const x=all.get(id);return {path:'items/'+id+'.md',raw_sha256:sha(x.text),content_sha256:itemContentHash(x.text),surface_sha256:itemSurfaceHash(x.text)};};
const supplierSet=new Set(ids);for(const id of ids)for(const d of graph.get(id))supplierSet.add(d);
for(const id of new Set([...supplierSet,...reach]))guards[id]=guard(id);
const extracts=t=>t.split(/\n\s*\n/).filter(p=>/\[F\d+\]|\[C\d+\]|^\d+\.\d+ /m.test(p));
const uses={
 [ids[0]]:'The categorical proof uses generic adjunction/Mackey, one-step/maximal-tail, linear divided Serre and an explicit finite-block bound. It does not use cyclotomic second adjunction, mixed mates or trace.',
 [ids[1]]:'Quantum proof uses signed adapted kernel, exact pure-second-i coproduct, integrable finite tensor residues, and abstract elementary tensor definitions; 7.1 then uses the categorical jump interface and cover descent.',
 [ids[2]]:'F2/1.1 uses generic jump/strictness; F3/2.1 uses canonical recognition and survivors. 3.1 transports the unscaled same-head cover graph; trace is not used.',
 [ids[3]]:'F1 uses the actual normalized symmetric d_i=1 characteristic-zero geometric Q generic-global theorem. 3.1 uses free exact LEFT-string quotients to identify vectors in all colors; mirror swaps FIRST/RIGHT, and raw pi-star cancels the label star.',
 [ids[4]]:'1.1/2.1 use same-head cover descent and based projection; 3.1 uses exactly the based-quotient RIGHT label. The full geometric characteristic-zero scope is retained.',
 [ids[5]]:'1.1 uses T(P(S),S-prime)=delta and the labeled lower theorem; 2.1 uses the actual highest-weight contravariant form; 3.1 keeps Psi_KK=q^def Psi_can. Raw mixed-crossing scalar is not used.',
 'prop-qg8-categorification-transports-across-the-hecke-klr-bridge':'F3/1.4 checks actual cyclic type-A quiver Q, including e=2 bidirectional edges. Clause4 uses lower/upper basis only in C0; all-field crystal/duality clauses remain both branches. Trace remains its separate F4 supplier.',
 'thm-ariki-canonical-basis-theorem-in-characteristic-zero':'F1/F2 and 1.1-1.3 transport the same RIGHT crystal labels and canonical lower/upper pairing in C0; no cellular-head label inference is made here.',
 'thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero':'F2/2.1 uses the canonical upper classes under the same isomorphism; 3.1 reads coefficients in the free simple basis. Restriction to C0 is explicit.',
 'thm-graded-specht-classes-realize-standard-fock-vectors':'F1/1.1 uses raw RIGHT-append word order and bilinear T; 3.1 identifies functionals on a field-spanning word family in both branches. It does not infer a CP global simple basis.',
 'cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group':'F3/2.1 pulls back the restricted standard basis of the UPPER dual lattice under the canonical module map. It does not use a CP lower-basis theorem.',
 'lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels':'F2/1.1 reconstructs the field-independent RIGHT crystal label from maximal last-color blocks; 2.1 uses finite vector dual normalization and nil-Hecke factorial word character, without a trace shift.',
 'lem-reduction-of-characteristic-zero-simple-modules-modulo-p':'F3/1.2 uses character injectivity; F4/2.1 uses C0 upper-basis image and field-independent restricted Specht coordinates. Separate lattice/head prerequisites are retained.',
 'thm-graded-specht-heads-classify-the-graded-simple-modules':'F4/5.1 uses C0 upper simple labels only. F6/1.2 and4.1 use all-field normalized Dpsi simples and projective HOM duality without raw Murphy-star identification. CP label assertion is expressly deferred.',
 'lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree':'1.1 uses the same extremal word to compare all-field B(Lambda) labels;2.1 uses dominance induction and actual reduced modules to identify cellular heads, not CP global-basis equality.',
 'def-graded-adjustment-polynomials-in-positive-characteristic':'Definition/F2 uses CP head/crystal comparison. 1.1 reads genuine reduced-module multiplicities; 1.2/2.1 retain CP diagonal/dominance/bar arguments; no identity adjustment matrix is inferred.',
 'thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment':'F2/1.1 uses CP reduced-module images of C0 upper vectors. 2.1/3.1 substitutes genuine adjustment multiplicities in a free normalized simple basis. It retains nontrivial adjustment freedom.',
 'ex-projective-versus-simple-grothendieck-classes-in-a-small-block':'F4/2.1 uses the same C0 canonical projective/simple labels for the explicit e=2 dual-numbers block; no new normalized-basis inference follows from unlabeled set equality.',
 'cex-specializing-v-to-one-forgets-graded-decomposition-information':'F1/F3 and1.1-2.1 use only the inherited explicit C0 block and graded decomposition formulas; label-interface completion leaves its specialization argument unchanged.',
 'rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers':'Statement/Remarks preserve C0 computation versus CP adjustment boundary; inherited crystal labels do not imply identity adjustment matrix.'
};
const consumerRows=[...reach].map(id=>({id,...guards[id],supplier_edges:[...graph.get(id)].filter(d=>reach.has(d)),assessment:uses[id],focused_use_extracts:extracts(all.get(id).text)}));
const pageRows=[];
for(const cat of fs.readdirSync('library'))if(fs.statSync('library/'+cat).isDirectory())for(const n of fs.readdirSync('library/'+cat).filter(n=>n.endsWith('.md'))){const p='library/'+cat+'/'+n,t=read(p);const hits=[...frontmatterList(t,'items'),...frontmatterList(t,'examples')].filter(id=>reach.has(resolve(id)));if(hits.length)pageRows.push({path:p,raw_sha256:sha(t),affected_inventory:hits,assessment:'Placement/interface context only; no page completion acceptance. Cyclotomic page completion overclaim belongs to diagram/root owner.'});}
const packet=JSON.parse(read(base+'/klr_categorification/escalation-resolution-packet.json'));
const originals=JSON.parse(read(native)).decisions;
const wanted=new Set([16,17,18,19,20,21,22,23].map(n=>'refuter:47:'+n));wanted.add('touched:47:'+ids[3]);
const ground={
 'refuter:47:16':'Current1.2/3.1 constructs the complete ci+j rank-two columns and boundary simplicity over general Q/all fields.3.2 obtains J<B from an actual finite containing-block bound before using J.4.1 proves both annihilation directions;4.2-6.1 calculate length difference by finite D_n saturation.7.1 supplies vacuum initial length lambda_i and height induction.3.3/8.1 check both unequal tie branches, all other colors and zero cases. No missing helper is asserted.',
 'refuter:47:17':'Current1.1 applies star to the LEFT decomposition, places divided powers on the RIGHT, conjugates projector/skew/string operators, and gives unique signed top coefficient. The later sign proof is now separately supplied.',
 'refuter:47:18':'Current2.1 uses only signed-based kernel adaptation.2.2 proves C_n=q_i^(n(n-1)/2)D_i^n by append-letter recurrence, and derives the exact sum pi_lambda(v_r) tensor F_i^(r)v_mu for lambda_i=0.3.1 forces extracted coefficient positivity from the nonzero positive finite tensor vertex;4.1 checks both i branches/all colors using explicit abstract elementary definitions;5.1 proves unsigned star by height induction.',
 'refuter:47:19':'Current6.2 proves zero extraction fixes the first component, then cycles finite supporting colors for a height bound to obtain a strict injection into a common elementary tensor with equal vacuum. Lowering words are computed in that common tensor, and injectivity in both crystals proves path independence. Actual strict positive canonical and categorical extractions are now supplied by current4.1/5.1 and jump8.1.',
 'refuter:47:20':uses[ids[3]]+' Current3.1 defines eta by its actual vector, subtracts two coefficient-one congruences in a free exact-position quotient, and forces exact label equality. Applying it to each predecessor proves all colors; vector definition proves every path agrees.',
 'refuter:47:21':uses[ids[2]]+' Both previously missing nonlinear suppliers are now physically constructed in their full unchanged scope.',
 'refuter:47:22':uses[ids[4]]+' The named missing RIGHT-label inference is supplied by current based-quotient3.1 and canonical6.2/7.1.',
 'refuter:47:23':uses[ids[5]]+' The lower label identifies the exact dual functional; quantum upper/lower duality retains that label.'};
ground['touched:47:'+ids[3]]=ground['refuter:47:20'];
const proposals=[];
for(const original of originals.filter(x=>wanted.has(x.obligation))){
 const existing=packet.decision_replacement_proposals.find(x=>x.obligation===original.obligation);
 const replacement=existing?structuredClone(existing.replacement):{...original,verdict:'confirmed_fatal',defect_ids:original.defect_ids.map(x=>x+'-resume-local-fixed')};
 replacement.evidence='OWNER proposed current-source resolution; original native observations remain historical true. '+ground[original.obligation]+' Evidence: '+dest+'/assessment.md and focused-consumer-checks.json. No new worker reading/execution, audit, gate or refunded round is claimed.';
 replacement.repair_confidence=1;
 replacement.owner_resolution={provenance:'PROPOSAL ONLY: concrete current proof check by resume_klr_labels; ROOT validation and native integration outstanding',...guards[original.id],historical_finding_preserved:true,new_execution_coverage_claimed:false};
 proposals.push({path:native,obligation:original.obligation,original_decision:original,previous_candidate:existing||null,proposed_replacement:replacement,concrete_complete_repair_grounds:ground[original.obligation],application_guard:'ROOT must validate these grounds, exact carrier/supplier/contract/manifest guards, and native policy before recording an owner complete repair. Confidence1 is a proposed resolution of the named defect, not applied acceptance or a new review round. Existing0.98 candidates are preserved above and cannot pass native as-is.'});
}
const metadataGuards=[native,base+'/klr_categorification/escalation-resolution-packet.json',base+'/klr_jump/metadata-proposals.json',base+'/quantum_unsigned_extraction/guardwrites.json',`research/${run}-batch-47.proof-contracts.json`].filter(p=>fs.existsSync(p)).map(path=>({path,raw_sha256:sha(read(path))}));
const drift=ids.map(id=>({id,current:guards[id],previous_packet:packet.current_source_hashes[id],same_raw:guards[id].raw_sha256===packet.current_source_hashes[id].raw_sha256}));
fs.mkdirSync(dest,{recursive:true});
write('input-guards.json',{version:1,run,recorded_at:new Date().toISOString(),item_guards:guards,historical_preimages:historical,metadata_guards:metadataGuards,drift,history:{source_edits:[],rounds_reset:false,source_attempts:0,gates_attempted:0,acceptance_claimed:false}});
write('focused-consumer-checks.json',{version:1,run,suppliers:ids,method:'Union old/current dependency edges and current aliases; exact actual label use of six carriers plus every reachable item. This is focused assessment, not whole-carrier acceptance.',external_consumers:consumerRows.filter(x=>!ids.includes(x.id)).length,items:consumerRows,pages:pageRows,unrelated_holds:'Separate trace/geometric supplier integration and modular/q-Schur/Fock prerequisites retain their own holds; no consumer here is accepted wholesale.'});
write('guarded-closure-proposals.json',{version:1,run,status:'root-reviewable-proposals-not-applied',proposals,source_change_requested:false,native_writes_performed:false,ledger_writes_performed:false});
const rowProposals=[];
for(const candidate of proposals){
 if(candidate.obligation.startsWith('touched:'))continue;
 const decision=candidate.proposed_replacement;
 const existing=packet.closed_ledger_row_proposals.find(x=>x.subject===decision.id);
 const row=existing?structuredClone(existing):{...structuredClone(packet.closed_ledger_row_proposals[0]),subject:decision.id,supersedes:candidate.original_decision.defect_ids};
 row.defect_id=decision.defect_ids[0];row.at=new Date().toISOString();row.item_sha256=guards[decision.id].content_sha256;row.repair_confidence=1;
 row.evidence=[{path:native,note:candidate.original_decision.evidence},{path:dest+'/assessment.md',note:candidate.concrete_complete_repair_grounds},{path:dest+'/input-guards.json',note:'Exact current raw/content/surface and supplier bindings; ROOT must validate before applying this proposed physical closure.'}];
 row.adjudication_ref=[{path:native,obligation:candidate.obligation}];
 if(decision.id===ids[3])row.adjudication_ref.unshift({path:native,obligation:'touched:47:'+ids[3]});
 rowProposals.push({previous_candidate:existing||null,proposed_row:row,application_guard:candidate.application_guard});
}
write('physical-closure-row-proposals.json',{version:1,run,status:'not-applied',rows:rowProposals,preserve_native_history:true,review_round_refund:false});
write('metadata-integration-proposal.json',{version:1,run,source_changes:[],existing_proposals:{jump:base+'/klr_jump/metadata-proposals.json',canonical:base+'/quantum_unsigned_extraction/guardwrites.json',based_and_consumers:base+'/klr_categorification/escalation-resolution-packet.json'},required:'Integrate current exact derivations/citations/deps/levels, rebind manifest/contract provenance, and preserve original native findings/round counters. No label carrier Statement changes are needed.',guards:metadataGuards});
console.log(JSON.stringify({assigned:ids.length,consumer_count:reach.size-ids.length,closure_proposals:proposals.length,source_drift:drift.filter(x=>!x.same_raw).map(x=>x.id),missing_assessments:consumerRows.filter(x=>!x.assessment).map(x=>x.id)}));
