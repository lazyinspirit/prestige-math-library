#!/usr/bin/env node
// Mechanical anchor-format supplement. Immutable V1; proposal-only V2.
import fs from'node:fs';import path from'node:path';import{createHash}from'node:crypto';import{boundarySchemaErrors,rowHash}from'../../machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/revision-2/collect-v2.mjs';
const base='research/machine-learning-all-101-2026-10-19-owner-boundary-batches27-35/your-proposal',out=base+'/version-2',routing='research/machine-learning-all-101-2026-10-19-owner-boundary-root-integration/your-proposal/revision-2/remaining-by-reader-1.json',routed=JSON.parse(fs.readFileSync(routing)).groups['/root/step2_margin53'].rows;
const sha=x=>createHash('sha256').update(x).digest('hex'),assert=(x,m)=>{if(!x)throw Error(m);},write=(p,x)=>{if(fs.existsSync(p)){assert(fs.readFileSync(p,'utf8')===String(x),'immutable output differs '+p);return;}fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,x,{flag:'wx'});};
const clauses={
 'def-restricted-additive-noise-model':'Definition, final sentence: “If the model has no edges, the restricted condition is vacuous.” The preceding intermediate-set and finite positive conditioning-density clauses cover the empty conditioning tuple.',
 'def-differential-privacy-and-adjacency':'Definition, database finite-support clause, probability-kernel clause, and event-privacy clause with epsilon>=0 and0<=delta<=1, followed by the explicit pure-privacy designation at delta=0.',
 'def-exponential-mechanism-utility-sensitivity':'Definition, nonempty finite R and attained finite maximum of adjacent-pair utility differences; final sentence restricts the exponential mechanism to the positive-sensitivity case.',
 'def-global-l1-sensitivity':'Definition, d>=1, the displayed finite-coordinate L1 norm, and the attained finite maximum over add/remove neighbors.',
 'def-laplace-distribution':'Definition, positive-exponential/reflection mixture for b>0 and final sentence defining Lap(0) as the point mass at0; the axiom_use frontmatter states the inherited Countable Choice branch.',
 'alg-fedavg':'Definition, positive integer inputs and1<=S<=N, the explicit local update, and the two numbered aggregation branches, including the unchanged contribution of unselected clients in count-weighted mode.',
 'alg-local-sgd':'Definition, common initialization at time0 and the two proposal-versus-synchronization branches, with the explicit average over all positive K workers.',
 'alg-scaffold':'Definition, positive N,d,R,K,S and stepsizes, OptionII formula, selected/unselected control updates, and the following explicit server-control mean invariant and permission for zero initial controls.',
 'def-federated-objective-and-client-sampling':'Definition, the two objective formulas and the following paragraph assigning probability binomial(N,S)^-1 to every S-subset for1<=S<=N.',
 'def-scaffold-analysis-trajectory-and-errors':'Definition, query-point drift E_r formula, anchor/stored-gradient initialization at x0, and the explicit sentence “Thus Xi_0=0” following the tracking-error formula.',
};
const proofAnchors={
 'ex-add-remove-noisy-count':'steps 1.1 and 2.1',
 'ex-finite-range-private-selection':'steps 1.1, 1.2 and 2.1',
 'ex-postprocessing-private-noisy-count':'steps 1.1 and 2.1',
 'ex-record-level-versus-client-level-adjacency':'steps 1.1 and 2.1',
 'lem-dp-approximate-kernel-purification':'steps 1.1, 4.1 and 5.1',
 'lem-dp-pure-privacy-loss-kl-bound':'steps 1.1, 2.1 and 4.1',
 'lem-dp-test-function-extension':'steps 1.1, 2.1 and 3.1',
 'ex-client-data-locality-does-not-imply-dp':'step 1.1',
 'ex-local-versus-periodic-synchronization':'steps 1.1 and 2.1',
 'ex-scaffold-control-correction':'step 1.1',
 'ex-two-client-shifted-optima':'steps 1.1, 1.2 and 2.1',
 'lem-convex-gradient-step-nonexpansive':'steps 1.1, 2.1 and 3.1',
 'lem-fedavg-one-round-progress':'steps 1.1, 1.2 and 2.1',
 'lem-federated-recursion-averaging':'steps 1.1, 1.2 and 2.1',
 'lem-local-sgd-client-drift':'steps 1.1 and 1.2',
 'lem-local-sgd-sampling-variance':'steps 1.1 and 2.1',
 'lem-local-sgd-weighted-recursion':'steps 1.1, 1.2 and 2.1',
 'lem-perturbed-strong-convexity':'steps 1.1 and 2.1',
 'lem-relaxed-euclidean-squared-norm':'steps 1.1 and 1.2',
 'lem-scaffold-convex-control-lag':'steps 1.1 and 2.1',
 'lem-scaffold-convex-round-progress':'steps 1.1, 2.1 and 3.1',
 'lem-scaffold-nonconvex-round-progress':'steps 1.1, 2.1 and 3.1',
 'lem-smooth-convex-gradient-difference':'steps 1.1, 1.2 and 2.1',
 'lem-uniform-client-sampling-moments':'steps 1.1 and 2.1',
 'thm-fedavg-under-gradient-dissimilarity':'steps 1.1, 2.1 and 3.1',
 'thm-local-sgd-convex-round-complexity':'steps 1.1, 2.1 and 3.1',
 'thm-scaffold-convex-and-nonconvex-rates':'steps 1.1, 1.2 and 1.3',
};
const batches=[],supplement=[],schema=[];
for(const batch of[27,28,29,30]){const v1Path=`${base}/batch-${batch}/operations.json`,v1Raw=fs.readFileSync(v1Path,'utf8'),v1=JSON.parse(v1Raw),v2=structuredClone(v1),contract=v1.field_operations[0].path,raw=fs.readFileSync(contract,'utf8'),doc=JSON.parse(raw),candidate=structuredClone(doc),guard=`${out}/batch-${batch}/before/${contract}`;write(guard,raw);
 for(const op of v2.field_operations){const beforeOp=v1.field_operations.find(x=>x.json_pointer===op.json_pointer),idx=Number(op.json_pointer.split('/').at(-1)),current=doc.contracts[op.id].boundaries[idx],source=fs.readFileSync(op.source_path,'utf8');assert(source===fs.readFileSync(op.source_raw_guard,'utf8'),'source changed since genuine full read '+op.id);assert(JSON.stringify(current)===JSON.stringify(op.expected_value),'current boundary preimage changed '+op.id);op.contract_raw_guard=guard;
 const target=routed.find(r=>r.batch===batch&&r.id===op.id&&r.axis===op.case);
 if(target){const after=op.replacement_value,old=after.evidence;assert(after.status==='checked'&&old===target.evidence_context_from_v1,'routing differs from immutableV1');let anchor;
 if(clauses[op.id])anchor=clauses[op.id];
 else if(op.id==='rem-differential-privacy-scope-and-limitations')anchor=op.case==='one'?'The statement in the Remark, “Differential privacy limits the effect of one record on a release”, supplies the one-record scope.':'The statement in axiom_use, “No choice axiom is used.”, accompanies the Remark, which makes no measure-construction claim.';
 else {const embedded=[...old.matchAll(/\d+\.\d+/g)].map(x=>x[0]).filter(x=>target.available_native_step_ids.includes(x));if(embedded.length)anchor='Proof/Verification, '+[...new Set(embedded)].map(x=>'step '+x).join(', ');
 else if(op.case==='nonempty-choice'&&old.includes('Facts[A2]')){const m=/^(\d+\.\d+)[\s\S]*?(?=^\d+\.\d+|$(?![\s\S]))/gm;const paragraphs=[...source.matchAll(m)].filter(x=>x[0].includes('A2'));assert(paragraphs.length,'actualA2 proof-use missing '+op.id);anchor='Proof, step '+paragraphs[0][1]+', with the explicitly declared Facts[A2] conditional-expectation assumption';}
 else {anchor='Proof/Verification, '+proofAnchors[op.id];assert(!anchor.includes('undefined'),'no substantive anchor '+op.id+' '+op.case);}}
 for(const m of anchor.matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/g))assert(target.available_native_step_ids.includes(m[1]),'missing actual native step '+op.id+' '+m[1]);
 after.evidence=old+' Anchor: '+anchor+'.';after.template_review.row_sha256=rowHash(after);assert(JSON.stringify({...after,evidence:old,template_review:{...after.template_review,row_sha256:beforeOp.replacement_value.template_review.row_sha256}})===JSON.stringify(beforeOp.replacement_value),'non-anchor substantive change');supplement.push({batch,id:op.id,case:op.case,v1_packet:v1Path,v1_evidence:old,v2_evidence:after.evidence,actual_anchor:anchor,existing_native_step_ids:target.available_native_step_ids});}
 const errors=boundarySchemaErrors(op.replacement_value,source);schema.push({batch,id:op.id,case:op.case,errors});assert(!errors.length,'native boundary schema '+JSON.stringify(errors));candidate.contracts[op.id].boundaries[idx]=op.replacement_value;
 }
 v2.version=2;v2.original_packet=v1Path;v2.original_packet_sha256=sha(v1Raw);v2.anchor_format_revision_only=true;v2.source_read_scope='The genuine full source reads and substantive flagged-axis dispositions are preserved from V1; this V2 supplement adds actual existing proof-step or exact source-clause anchors only, without new mathematical review credit.';write(`${out}/batch-${batch}/operations.json`,JSON.stringify(v2,null,2)+'\n');write(`${out}/batch-${batch}/candidates/${contract}`,JSON.stringify(candidate,null,2)+'\n');batches.push({batch,operations:`batch-${batch}/operations.json`,objects:v2.field_operations.length,anchored_evidence_changes:routed.filter(r=>r.batch===batch).length});
}
assert(supplement.length===167,'not167');write(out+'/index.json',JSON.stringify({version:2,run:'machine-learning-all-101-2026-10-19',author:'/root/step2_margin53',immutable:true,batches},null,2)+'\n');write(out+'/anchor-supplement.json',JSON.stringify({version:2,rows:167,new_mathematical_review:false,routing,changes:supplement},null,2)+'\n');write(out+'/native-boundary-schema-validation.json',JSON.stringify({version:2,kind:'pure exported boundarySchemaErrors validation only',gate:false,rows:schema.length,errors:schema.flatMap(x=>x.errors),checks:schema},null,2)+'\n');write(out+'/source-read-ledger.json',fs.readFileSync(base+'/source-read-ledger.json'));console.log(JSON.stringify({v2_full_packet_objects:schema.length,evidence_anchors:supplement.length,schema_errors:0,batches}));
