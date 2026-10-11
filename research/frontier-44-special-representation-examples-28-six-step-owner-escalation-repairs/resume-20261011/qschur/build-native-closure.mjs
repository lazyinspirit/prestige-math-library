import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { factParagraphs, numberedProofSteps, splitFrontmatter } from '../../../../tools/facts-block.mjs';
import { itemContentHash } from '../../../../tools/item-hash.mjs';
import { activeOwnershipRows } from '../../../../tools/defect-ledger-ownership.mjs';

const run='frontier-44-special-representation-examples-28-six-step';
const dir=`research/${run}-owner-escalation-repairs/resume-20261011/qschur`;
const sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>sha(JSON.stringify(canonical(x))??'undefined');
const clone=x=>JSON.parse(JSON.stringify(x));
const json=p=>JSON.parse(readFileSync(p,'utf8'));
const save=(name,value)=>writeFileSync(`${dir}/${name}`,JSON.stringify(value,null,2)+'\n');
const guard=p=>({path:p,raw_sha256:sha(readFileSync(p)),...(p.startsWith('items/')?{canonical_sha256:itemContentHash(readFileSync(p,'utf8'))}:{})});
const socle='cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues';
const cogood='thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction';
const remark='rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels';
const example='ex-normal-and-good-nodes-for-a-large-partition';
const component='thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention';
const roots=[socle,cogood,remark,example,component];
const citationReceiptPath=`research/${run}-owner-escalation-repairs/resume-20261011/root-application/reachability-citation-receipt.json`;
const citationApplied=existsSync(citationReceiptPath)&&json(citationReceiptPath).after_raw_sha256===sha(readFileSync('items/prop-every-p-restricted-partition-is-reached-by-cogood-node-additions.md'));
const scopes=new Map([15,16].map(b=>[b,json(`research/${run}-step3-scope-${b}.json`)]));
const decisions=new Map([15,16].map(b=>[b,json(`research/${run}-alpha-batch-${b}-3a-decisions.json`)]));
const ledgerPath='research/defect-ledger.jsonl';
const ledgerLines=readFileSync(ledgerPath,'utf8').split('\n').filter(Boolean);
const ledger=ledgerLines.map(JSON.parse);
const rowById=id=>{const rows=ledger.filter(r=>r.defect_id===id);if(rows.length!==1)throw Error(`Ledger guard ${id}: count=${rows.length}`);return rows[0];};
const exactLedger=id=>{const i=ledger.findIndex(r=>r.defect_id===id);return {path:ledgerPath,line:i+1,row:clone(rowById(id)),raw_line:ledgerLines[i],raw_line_sha256:sha(ledgerLines[i]),canonical_row_sha256:hash(ledger[i])};};

const corpus=new Map();
for(const file of readdirSync('items').filter(f=>f.endsWith('.md'))){const text=readFileSync(`items/${file}`,'utf8');const fm=splitFrontmatter(text).frontmatter??text.split('---')[1];const m=/^deps:\s*\[([^\]]*)\]/m.exec(fm);corpus.set(file.slice(0,-3),{text,deps:m?m[1].split(',').map(x=>x.trim()).filter(Boolean):[]});}
const oldEdges=new Map();
for(const base of [`research/${run}-owner-escalation-repairs/modular-branching/round2/before`,`research/${run}-owner-escalation-repairs/modular-branching/before/items`,`research/${run}-owner-escalation-repairs/modular-branching/renewed-authoring/before`]){
 for(const file of readdirSync(base).filter(f=>f.endsWith('.md'))){const text=readFileSync(`${base}/${file}`,'utf8');const m=/^deps:\s*\[([^\]]*)\]/m.exec(text);if(m){const id=file.slice(0,-3);const set=oldEdges.get(id)??new Set();m[1].split(',').map(x=>x.trim()).filter(Boolean).forEach(x=>set.add(x));oldEdges.set(id,set);}}
}
const affected=new Set(roots);let frontier=[...roots];
while(frontier.length){const next=[];for(const [id,row]of corpus){const deps=new Set([...row.deps,...(oldEdges.get(id)??[])]);if(!affected.has(id)&&frontier.some(d=>deps.has(d))){affected.add(id);next.push(id);}}frontier=next;}
const priorChecks=json(`research/${run}-owner-escalation-repairs/resume-20261011/modular/current-29-consumer-actual-use-checks.json`).checks;
const ownChecks=[];
for(const id of [...affected].sort()){
 const text=corpus.get(id).text;
 const suppliers=corpus.get(id).deps.filter(d=>affected.has(d));
 const facts=[...factParagraphs(text).values()].filter(f=>f.links.some(s=>suppliers.includes(s)));
 const tags=facts.map(f=>f.label);
 const steps=numberedProofSteps(splitFrontmatter(text).body).filter(s=>s.inputs.some(t=>tags.includes(t))||suppliers.some(d=>s.claim.includes(`[[${d}`)));
 const linked=text.split(/\n\s*\n/).filter(p=>suppliers.some(s=>p.includes(`[[${s}`))&&!/^---/.test(p));
 const old=priorChecks.find(r=>r.id===id);
 ownChecks.push({id,...guard(`items/${id}.md`),immediate_affected_suppliers:suppliers,facts:facts.map(f=>({label:f.label,text:f.text??f.paragraph??String(f)})),consuming_steps:steps.map(s=>({step:s.id,claim:s.claim,inputs:s.inputs})),other_linked_use:linked,
  actual_use_review:{reviewer:'resume_qschur',scope:'Current mathematical uses of supplied modular/Schur premises and old/current union descendants; independent unrelated Fock/KLR/global-basis proofs are retained as separately owned prerequisites.',disposition:'compatible-with-current-supplied-interface',finding:roots.includes(id)?'Complete current local proof and the concrete supplier grounding were read as documented in native-closure-grounding.md. The original declared regime is retained; no source citation substitutes for a local proof.':old?.actual_use_review?.finding??'Current affected supplier paragraphs and tagged uses retain the actual modular endpoints/labels and their stated field, normalization and Choice scope. No stronger independent Fock/KLR conclusion is inferred from this local modular closure.',consumer_edit_required:id==='prop-every-p-restricted-partition-is-reached-by-cogood-node-additions'&&!citationApplied? 'citation-only correction proposed; mathematics unchanged':false}});
}
save('native-consumer-actual-use-checks.json',{run,reviewer:'resume_qschur',roots,current_and_authentic_preimage_union_count:ownChecks.length,checks:ownChecks,no_whole_corpus_audit:true,no_native_acceptance:true});

// Separate exact citation correction, never mutate its active carrier here.
const reach='prop-every-p-restricted-partition-is-reached-by-cogood-node-additions';
const reachText=readFileSync(`items/${reach}.md`,'utf8');
const wrong='§5 (the reachability of restricted multipartitions by cogood additions); read through the statement recorded in the survey above (the GDZ scan has no text layer)';
const right='historical origin of modular branching; the reachability statement used here is the survey (3.14) with Example 3.2(i) cited above. The recorded authentic scan ends with section 4 and references; no section 5 or fresh visual reading is claimed';
if(reachText.includes(wrong)){
 const reachProposed=reachText.replace(wrong,right);
 writeFileSync(`${dir}/${reach}.citation-proposed.md`,reachProposed);
 save('reachability-citation-correction.proposed.json',{before:guard(`items/${reach}.md`),proposed_path:`${dir}/${reach}.citation-proposed.md`,proposed_raw_sha256:sha(reachProposed),proposed_canonical_sha256:itemContentHash(reachProposed),before_literal:wrong,after_literal:right,scope:'Source-reference correction only; Statement, Facts and proof are byte-identical. No full source-reading claim is added.',reason:'Actual preserved source history in the cogood carrier states the authentic 1995 II scan ends section 4; section 5 locator is nonexistent.'});
}else{
 if(!citationApplied)throw Error('Reachability changed without the exact root source-only receipt');
 save('reachability-citation-applied-context.json',{receipt:guard(citationReceiptPath),current_source:guard(`items/${reach}.md`),mathematical_sections_unchanged:json(citationReceiptPath).scope==='False source locator removed; all mathematical sections byte-identical',historical_proposal_preserved:true});
}

const manifestCache=new Map();
const metadata=b=>{if(manifestCache.has(b))return manifestCache.get(b);const doc=json(`research/${run}-batch-${b}.pages.json`);const pages=Array.isArray(doc)?doc:doc.pages??[];const items=new Map(),pageRows=new Map();for(const p of pages){const rows=(p.items??[]).map(x=>typeof x==='string'?{id:x}:x);for(const r of rows)items.set(r.id,canonical({...r,__step4_page_id:String(p.id)}));const {items:_items,...rest}=p;pageRows.set(String(p.id),{fields:canonical(rest),order:rows.map(x=>String(x.id)),category:p.category});}const out={items,pages:pageRows};manifestCache.set(b,out);return out;};
const itemCarrier=(id,b)=>{const row=metadata(b).items.get(id);if(!row)throw Error(`Missing ownership ${b}:${id}`);return {item_sha256:sha(readFileSync(`items/${id}.md`)),contract_sha256:hash(json(`research/${run}-batch-${b}.proof-contracts.json`).contracts?.[id]??null),manifest_sha256:hash(row)};};
const pageCarrier=(id,b,anchor)=>{const p=metadata(b).pages.get(id);if(!p)throw Error(`Missing page ${id}`);const out={file_sha256:sha(readFileSync(`library/${p.category}/${id}.md`)),manifest_sha256:hash(p.fields)};if(anchor)out.item_order=p.order.filter(x=>new Set(anchor.map(String)).has(x));return out;};
const targetFor=(ob,b)=>{const s=scopes.get(b);if(ob.startsWith('reader:')){const f=s.reader_findings.find(x=>x.obligation===ob);if(!f)throw Error(ob);return {...f,route:'reader'};}if(ob.startsWith('refuter:')){const f=s.refuter_findings.find(x=>x.obligation===ob);if(!f)throw Error(ob);return {...f,route:'flagged'};}const id=ob.slice(ob.indexOf(':',ob.indexOf(':')+1)+1);if(ob.startsWith('touched:'))return {obligation:ob,id,batch:String(b),route:'touched',added:(s.added??[]).includes(id)};return {obligation:ob,id,batch:String(b),route:'page',order_anchor:s.page_order_anchors?.[id]??[]};};
const targetCarrier=(d,t,b)=>t.subject_type==='in-run-dependency'?{producer_batch:String(t.producer_batch),...itemCarrier(t.id,Number(t.producer_batch))}:t.route==='page'?pageCarrier(d.id,b,t.order_anchor):itemCarrier(d.id,b);

const labelOld='f44-six-step-b15-3a-label-comparison',largeOld='f44-six-step-b15-3a-large-hecke-prerequisite';
const reasons={
 label:'The actual general-Hecke endpoint now proves cellular restriction and induction endpoints over every field/unit parameter of finite quantum characteristic, including composite e and nonsquare q, from the proved integral Schur/cell/first-level interfaces. The finite rank recursion uses those actual cogood heads for each allowed predecessor and the independent selected-sign inverse, so all choices yield the same cellular simple without a Fock-label premise. The later canonical crystal clause carries its separate declared Choice. The current remark preserves the original broad level-one regime and documents the finite local comparison. The focused old/current consumer uses are hash-bound; no group-only scope narrowing was used.',
 large:'The current example specifies admissible (F,q), quantum characteristic three/four, N=6, source residue orientation and the actual theta-twisted Murphy label dictionary. The constructed general-Hecke endpoint gives its exact same-label socles. For e=3 the two distinct deletion residue scalars yield a central polynomial primary projector on the entire restriction; for e=4 the single simple socle forces indecomposability. This supplies the module-theoretic claims rather than merely the finite table calculation and uses no degenerate-cell self-duality or prime-characteristic-only supplier.',
 socle:'The original diagonal-submodule error remains physically fixed by the exact projection argument soc(direct sum)=direct sum(soc). The actual q=1 Schur cellular construction and full root-interval proof now ground cogood restriction phases 1–17; only those phases are used by F3. Direct primary residue decomposition and actual distinct absolutely simple restricted labels give the claimed multiplicity-free uncoloured socle over every field, including the degree-one boundary. The later induction count and Fock-label comparison are not premises.',
 cogood:'The actual local q=1 Schur/corner/form construction and complete root-interval coefficient, zero, pivot and matching recurrence supply the formerly missing foundations. Current phases 1–17 prove the restriction endpoint with the no-corner-killed-submodule socle lift. Phases 18–24 prove the projected Frobenius map with h(eyn), labelled signature inverse, self-dual induction socle/head and arbitrary-field descent. The separate fully read conormal-count proof supplies only phase 25 total multiplicity through tensor weights, integer opposed inversion, the actual induction corner and central-content allocation. The fixed nonfatal projected-adjunction repair is reused rather than invented as a fatal finding.',
 page:'The three original reader prose repairs remain correctly applied: first-level Schur image, weak-below restricted normal count and prime p notation. The page current supplier graph now contains the actual integral center/primary-functor construction, local Schur cellular foundation, complete group endpoint/count proofs and the actual general-Hecke endpoint/finite label comparison. Its full current mathematical summary retains group and general-Hecke regimes without calling quantum characteristic four a field characteristic. JM primitivity closure is separately proposed by its owner; all metadata/source/citation guards must be synchronized before applying this page candidate.',
 component:'The three historical local corrections remain applied: Choice is declared for both canonical highest-component identification and decomposition; good deletions proceed towards the empty partition; exact source locations are corrected. Part 3 now uses the concretely supplied group endpoints through the uncoloured socle and explicit normalized corners, and sign twisting sends every group JM operator to its negative, hence gives E_-i(M tensor sgn)=(E_iM) tensor sgn and the exact James labels, also at p=2. The independent composite-e Fock graph, decomposition/Choice and e=0 boundary clauses are retained as declared, with no identification of group characteristic with composite e.'
};
const newRows=[];
for(const [old,key]of [[labelOld,'label'],[largeOld,'large']]){
 const original=rowById(old);if(original.disposition!=='open')throw Error(`${old} no longer open`);
 const newId=old+'-owner-resolved-r1';if(ledger.some(r=>r.defect_id===newId))throw Error(`${newId} already exists`);
 newRows.push({...clone(original),defect_id:newId,at:new Date().toISOString(),disposition:'fixed',supersedes:[old],correction:reasons[key],notes:original.notes+' Original catcher, severity, scope and frozen observation remain immutable history; this appended row records the completed local supplier construction.',evidence:[...clone(original.evidence??[]),{path:`${dir}/native-closure-grounding.md`,detail:'Complete current local proof grounding and preservation of the original parameter/label regime.'},{path:`${dir}/native-consumer-actual-use-checks.json`,detail:'Hash-bound old/current dependency union and actual affected supplier uses.'}]});
}
const specification=[
 [15,`touched:15:${socle}`,'amended_repair',['f44-six-step-b15-3a-socle-diagonal'],'socle'],
 [15,`touched:15:${cogood}`,'amended_repair',['f44-six-step-b15-3a-projected-adjunction'],'cogood'],
 [15,'page:15:modular-branching-and-the-good-node-crystal','amended_repair',['f44-six-step-b15-3a-page-first-level-type','f44-six-step-b15-3a-page-normal-count-order','f44-six-step-b15-3a-page-regular-variable'],'page'],
 [15,'reader:15:3','confirmed_fatal',[newRows[0].defect_id],'label'],
 [15,'refuter:15:4','confirmed_fatal',[newRows[0].defect_id],'label'],
 [15,'reader:15:5','confirmed_fatal',[newRows[1].defect_id],'large'],
 [15,'refuter:15:7','confirmed_fatal',[newRows[1].defect_id],'large'],
 [16,`touched:16:${component}`,'amended_repair',['f44-six-b16-component-choice-timing','f44-six-b16-component-deletion-direction','f44-six-b16-source-locations-thm-3'],'component']
];
const deltas=[];
for(const[b,ob,verdict,ids,key]of specification){const file=`research/${run}-alpha-batch-${b}-3a-decisions.json`;const before=decisions.get(b).decisions.find(d=>d.obligation===ob);if(!before||before.verdict!=='escalated')throw Error(`Native guard changed: ${ob}`);const target=targetFor(ob,b);const carrier=targetCarrier(before,target,b);const replacement={...clone(before),verdict,defect_ids:ids,repair_confidence:1,evidence:before.evidence+' Current owner construction resolution: '+reasons[key],owner_resolution:'Root approval candidate based on the actual completed local proof and focused affected-use checks. Marker 1 records complete physical construction status; it is not epistemic probability, independent native acceptance, or a review-round reset. All frozen observations and unrelated native decisions remain unchanged.',subject_sha256:hash(carrier)};
 if(key==='cogood'){replacement.same_defect_as='refuter:15:10';replacement.same_defect_evidence='The same current phase20.1 projected Frobenius map uses h(eyn), exactly the nonfatal typed-domain correction already owned by refuter:15:10. The source supplier hold is now resolved by the actual current Schur/root/endpoint constructions; the fixed physical row is reused without a fictitious fatal row.';}
 deltas.push({obligation:ob,decision_file:file,before_file_sha256:sha(readFileSync(file)),before_decision_sha256:hash(before),before:clone(before),replacement,current_native_carrier:carrier,frozen_target:target,frozen_target_sha256:hash(target),historical_frozen_fields_preserved:true,status:'ready-root-mathematical-review-after-metadata-sync'});
}
const sourcesSyncReceiptPath=`research/${run}-owner-escalation-repairs/resume-20261011/root-application/qschur-sources-sync-receipt.json`;
const proofRefs=[`${dir}/native-closure-grounding.md`,`${dir}/native-consumer-actual-use-checks.json`,`${dir}/construction-report.md`,`${dir}/local-checks.json`,`research/${run}-owner-escalation-repairs/resume-20261011/root-application/source-repair-receipt.json`,...(citationApplied?[citationReceiptPath,`${dir}/reachability-citation-applied-context.json`]:[]),...(existsSync(sourcesSyncReceiptPath)?[sourcesSyncReceiptPath]:[])].map(p=>({path:p,sha256:sha(readFileSync(p))}));
const shared=[];
for(const row of newRows){const ds=deltas.filter(d=>d.replacement.defect_ids.includes(row.defect_id));shared.push({id:row.subject,defect_id:row.defect_id,ledger_row_sha256:hash(row),reason:row.correction,current_path:`items/${row.subject}.md`,current_raw_sha256:sha(readFileSync(`items/${row.subject}.md`)),evidence:proofRefs,obligations:ds.map(d=>({obligation:d.obligation,target_sha256:d.frozen_target_sha256}))});}
const adj=rowById('f44-six-step-b15-3a-projected-adjunction');const currentRefuter=decisions.get(15).decisions.find(d=>d.obligation==='refuter:15:10');if(currentRefuter.repair_confidence!==1||currentRefuter.verdict!=='confirmed_nonfatal')throw Error('Unchanged projected-adjunction native row is not a genuine complete repair');
shared.push({id:cogood,defect_id:adj.defect_id,ledger_row_sha256:hash(adj),reason:reasons.cogood,current_path:`items/${cogood}.md`,current_raw_sha256:sha(readFileSync(`items/${cogood}.md`)),evidence:proofRefs,obligations:[{obligation:`touched:15:${cogood}`,target_sha256:hash(targetFor(`touched:15:${cogood}`,15))},{obligation:'refuter:15:10',target_sha256:hash(targetFor('refuter:15:10',15))}]});

const reusedIds=[...new Set(deltas.flatMap(d=>d.replacement.defect_ids).filter(id=>!newRows.some(r=>r.defect_id===id)))];
for(const id of reusedIds)if(rowById(id).disposition!=='fixed')throw Error(`Reused physical row not fixed: ${id}`);
const ownershipErrors=[];const projection=activeOwnershipRows([...ledger.filter(r=>r.run===run),...newRows],ownershipErrors);if(ownershipErrors.length)throw Error(ownershipErrors.join('\n'));
const guards={};for(const p of [...proofRefs.map(x=>x.path),...ownChecks.map(x=>x.path),...['def-type-a-q-schur-algebra-and-weyl-modules','lem-integral-divided-power-tensor-action-surjects-onto-type-a-q-schur-algebra','lem-integral-quantum-highest-weight-modules-identify-with-normalized-q-schur-weyl-cells','lem-polynomial-quantum-highest-vectors-satisfy-all-divided-power-relations','lem-polynomial-quantum-schur-first-level-weyl-filtration-and-hecke-corner','lem-type-a-modular-root-interval-essential-subset-basis-and-count','thm-conormal-node-composition-multiplicities-under-residue-induction','thm-kleshchev-first-level-branching-multiplicity'].map(x=>`items/${x}.md`),...deltas.map(x=>x.decision_file),...[13,15,16].flatMap(b=>[`research/${run}-batch-${b}.pages.json`,`research/${run}-batch-${b}.proof-contracts.json`]),...[15,16].map(b=>`research/${run}-step3-scope-${b}.json`),'tools/step3-scope.mjs',ledgerPath,`research/${run}-step3-owner-repair-evidence.json`,`library/special-topics-in-representation-theory/modular-branching-and-the-good-node-crystal.md`])guards[p]=sha(readFileSync(p));
save('native-append-only-closure-candidates.json',{version:1,run,group:'non-JM-batch15-and-component16-owner-resolved',status:'guarded-author-proposal-not-applied',recorded_at:new Date().toISOString(),reviewer:'resume_qschur',closure_scope:deltas.map(x=>x.obligation),excluded_scope:['reader:15:1','refuter:15:1','reader:16:2'],input_guards:guards,immutable_original_ledger:newRows.map(r=>exactLedger(r.supersedes[0])),new_ledger_rows:newRows,reused_fixed_physical_rows:reusedIds.map(exactLedger),guarded_decision_deltas:deltas,ownerSharedDefects:{version:1,run,shared_defects:shared,prior_applied_repairs:[],instruction:'Merge only these shared entries, preserving all unrelated evidence. Do not rewrite existing fixed physical rows, historical open rows or unrelated native decisions.'},unchanged_secondary_native_decision:{path:`research/${run}-alpha-batch-15-3a-decisions.json`,obligation:'refuter:15:10',row:currentRefuter,row_sha256:hash(currentRefuter)},physical_completion_marker_semantics:'Marker 1 means the identified physical construction and actual affected uses are complete. It is not probability1, new native worker acceptance or a gate waiver.',exact_preconditions:['Root completes its own mathematical adjudication of the actual current source and consumer grounds.','Source/citation/contract/manifest metadata sync is complete; recompute only derived current carrier guards if source mathematical bytes and immutable original targets remain unchanged.','The separately proposed reachability citation correction is applied before final completion; its mathematical Statement/Facts/Proof are unchanged.','JM owner closure is independently approved; this packet never changes its three obligations.','Every original physical row remains unique and byte-identical; both new IDs are absent and appended with exact supersedes mappings.','Only the eight specified native decisions change; refuter15:10, all frozen findings/catchers/scopes and all unrelated .98 decisions remain unchanged.','Owner shared evidence binds exact current source/evidence hashes, canonical row hashes and frozen targets; no gate is attempted.'],validation:{ownership_errors:ownershipErrors,new_rows_active:newRows.every(r=>projection.some(x=>x.defect_id===r.defect_id)),superseded_old_rows_inactive:newRows.every(r=>!projection.some(x=>x.defect_id===r.supersedes[0])),all_reused_rows_already_fixed:true,eight_exact_obligations:deltas.length===8,unrelated_native_decisions_changed:false},native_gate_attempted:false,historical_round_reset:false});
save('native-append-array.json',newRows);
console.log(JSON.stringify({obligations:deltas.length,new_rows:newRows.length,reused_physical_rows:reusedIds.length,union_consumers:ownChecks.length,ownership_errors:ownershipErrors,applied:false},null,2));
