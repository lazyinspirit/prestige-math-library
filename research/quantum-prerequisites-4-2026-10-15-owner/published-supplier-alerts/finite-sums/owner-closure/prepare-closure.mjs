import { readFileSync,writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { recordedPublishedRepair } from '../../../../../tools/published-repair-policy.mjs';
import { itemHashGuard } from '../../../../../tools/item-hash.mjs';
const root=process.cwd(),base=fileURLToPath(new URL('.',import.meta.url));
const run='quantum-prerequisites-4-2026-10-15';
const owner=`research/${run}-owner`;
const sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>sha(JSON.stringify(canonical(x)));
const read=p=>readFileSync(p,'utf8');
const decisionPath=`research/${run}-alpha-batch-3-3a-decisions.json`,decisionRaw=read(decisionPath),doc=JSON.parse(decisionRaw);
const scopePath=`research/${run}-step3-scope-3.json`,scope=JSON.parse(read(scopePath));
const ledgerPath='research/defect-ledger.jsonl',ledgerRaw=read(ledgerPath),allRows=ledgerRaw.split(/\r?\n/).filter(Boolean).map(JSON.parse);
const publicPath='research/published-consumer-supplier-ledger.md',publicRaw=read(publicPath);
const sources=['def-finite-sum','lem-finite-sum-laws'];
const findings=['qp4-b3-published-lower-index-gap','qp4-b3-published-splitting-gap'];
const refs=[`${owner}/published-supplier-alerts/finite-sums/ASSESSMENT.md`,`${owner}/published-supplier-alerts/finite-sums/consumer-inventory.json`,`${owner}/published-supplier-alerts/finite-sums/owner-source-integration.json`];
const at=new Date().toISOString(),newRows=[],bindings=[],edits=[],policies=[];
const review={version:1,run,reviewed_by:'delegated-owner-resolution',cycle:2,scope:'Final narrow closure of the two published natural-gap findings; not a whole-item or transitive proof audit',status:'complete',evidence:[],consumer:{id:'ex-complex-coordinate-and-path-transport',raw_sha256:sha(read('items/ex-complex-coordinate-and-path-transport.md')),disposition:'Current F12 and steps1.8/2.2/3.2 use primitive prefix sums and an independent d-induction; no continuing draft defect is asserted.'},risk_prerequisites:{scope:'Only exact repaired unique-gap and block-splitting clauses plus primitive natural order, addition, commutativity, cancellation; prior typed-interface congruence retained',status:'supplied',finding_status:'Historical real gaps, now recorded locally corrected; original Alpha report remains unchanged',global_audit_claimed:false},public_classification:'Retain A-P with the exact notation/proof correction recorded complete; do not promote to A-R or imply a whole-item audit.'};
for(let i=0;i<2;i++) {
 const id=sources[i],p=`items/${id}.md`,text=read(p),receiptPath=`${owner}/published-repairs/${id}.json`,receipt=JSON.parse(read(receiptPath)),before=read(receipt.before_file);
 const valid=recordedPublishedRepair(root,id,text,receiptPath);if(!valid.ok)throw Error(JSON.stringify(valid));policies.push({id,...valid});
 const decision=doc.decisions.find(x=>x.obligation===`reader:3:${i+1}`);if(decision.verdict!=='escalated')throw Error('no longer exact escalation');
 const target=scope.reader_findings.find(x=>x.obligation===decision.obligation);
 if(hash({item_sha256:sha(before)})!==target.observed_sha256||decision.observed_sha256!==target.observed_sha256)throw Error('before does not authenticate original observation');
 const currentCarrier={item_sha256:sha(text)},current=hash(currentCarrier);
 if(current===target.observed_sha256)throw Error('repair not changed: priorAppliedRepair would be needed');
 if(itemHashGuard(text)!==itemHashGuard(read(join(base,'../proposed/items',id+'.md'))))throw Error('integrated math differs from reviewed proposal');
 const oldRow=allRows.find(x=>x.defect_id===findings[i]);if(oldRow.disposition!=='deferred')throw Error('row no longer deferred');
 const fixedId=findings[i]+'-owner-fixed';if(allRows.some(x=>x.defect_id===fixedId))throw Error('closure id already exists');
 const explanation=i===0?'Current Definition constructs the unique natural d with m+d=n+1 from natural order, commutativity and cancellation and explicitly binds half-open labels. All lower-bound domains, recursive values and empty sums/products remain intact.':'Current L1/L7 and Proof1.3 prove sum and product splitting for every additive gap d, then select the unique order witness m+d=n, including d=0 and m=n=0. The entire Statement remains unchanged.';
 const evidence=`Owner resolution after the genuine native Alpha escalation: historical finding confirmed and its exact published correction is now recorded. ${explanation} recordedPublishedRepair validates ${receiptPath}; canonical content ${receipt.content_sha256}. The current assigned consumer uses prefix recursion and its own d-induction. Typed-interface congruence in the retained consumer inventory covers the Definition clarification without claiming unrelated proof audits. This is an owner disposition of the finding, not a fabricated native Alpha approval or new whole-item audit.`;
 const row={...oldRow,defect_id:fixedId,at:oldRow.at,closed_at:at,closed_by_role:'owner',disposition:'fixed',supersedes:[oldRow.defect_id],description:evidence,repair_confidence:1,evidence:[...oldRow.evidence,{path:receiptPath,note:'Authentic policy-valid recorded local published correction'},{path:`${owner}/published-supplier-alerts/finite-sums/owner-closure/current-prerequisite-review.json`,note:'Second/final owner closure assessment; not native Alpha approval'}],owner_resolution:'Recorded local published correction; original detection, severity, and native evidence preserved.'};
 newRows.push(row);
 const after={...decision,verdict:'confirmed_fatal',evidence,defect_ids:[fixedId],repair_confidence:1,owner_resolution:`Explicit owner closure of ${decision.obligation}; original escalation archived under finite-sums/owner-closure/before. Native report/result and observed fingerprint remain unchanged.`,owner_adjudication:{basis:'recorded-local-published-repair',receipt:receiptPath,receipt_sha256:sha(read(receiptPath)),original_defect_id:oldRow.defect_id,prerequisite_review:`${owner}/published-supplier-alerts/finite-sums/owner-closure/current-prerequisite-review.json`}};
 edits.push({path:decisionPath,pointer:`/decisions/${doc.decisions.indexOf(decision)}`,before:structuredClone(decision),after});Object.assign(decision,after);
 bindings.push({obligation:decision.obligation,id,original_observed_sha256:target.observed_sha256,authenticated_before_file:receipt.before_file,before_raw_sha256:sha(before),current_raw_sha256:sha(text),current_canonical_sha256:itemHashGuard(text),current_decision_carrier:currentCarrier,expected_subject_sha256_for_native_stamp:current,priorAppliedRepair_required:false,reason:'Current published raw-byte carrier differs from the immutable observed carrier, so the unchanged-carrier exception is neither needed nor invoked.'});
 review.evidence.push({id,status:'complete',confidence:1,scope:'Exact finding repaired and prerequisite interface supplied',explanation,recorded_repair:receiptPath,current_raw_sha256:sha(text),canonical_sha256:itemHashGuard(text),before_raw_sha256:sha(before),before_observation_authenticated:true,proposal_mathematics_identical:true});
}
writeFileSync(join(base,'before/decisions.json'),decisionRaw);
writeFileSync(join(base,'before/two-original-ledger-rows.jsonl'),ledgerRaw.split(/\r?\n/).filter(line=>line&&findings.includes(JSON.parse(line).defect_id)).join('\n')+'\n');
writeFileSync(join(base,'proposed-decisions.json'),JSON.stringify(doc,null,2)+'\n');
writeFileSync(join(base,'ledger-append.json'),JSON.stringify(newRows,null,2)+'\n');
writeFileSync(join(base,'projected-run-ledger.jsonl'),[...allRows.filter(x=>x.run===run),...newRows].map(x=>JSON.stringify(x)).join('\n')+'\n');
writeFileSync(join(base,'source-fingerprint-bindings.json'),JSON.stringify(bindings,null,2)+'\n');
writeFileSync(join(base,'current-prerequisite-review.json'),JSON.stringify(review,null,2)+'\n');
writeFileSync(join(base,'recorded-repair-policy-results.json'),JSON.stringify({argv:['node',`${owner}/published-supplier-alerts/finite-sums/owner-closure/prepare-closure.mjs`],policies},null,2)+'\n');
// Index entries stay in their existing A-P section; authenticated receipt markers are untouched.
const publicEdits=[];
for(let i=0;i<2;i++) {
 const id=sources[i],line=publicRaw.split('\n').find(x=>x.startsWith('| `'+id+'` |'));
 if(!line)throw Error('missing index');
 publicEdits.push({path:publicPath,before_literal:line,after_literal:`| \`${id}\` | A-P retained. The exact natural-gap finding is now locally corrected by the authentic recorded published repair \`${owner}/published-repairs/${id}.json\`; supplier-first integration preserves the typed finite-sum/product interface and empty cases. The current draft consumer uses prefix recursion independently. This records this correction only, not a new whole-item audit or A-R promotion. Historical native escalation retained in \`research/${run}-alpha-batch-3-3a.md\`; closure evidence: \`${owner}/published-supplier-alerts/finite-sums/owner-closure/current-prerequisite-review.json\`. |`});
}
const addendum=`\n\n## ${run} — finite-sum owner correction closure\n\nThe earlier batch-3 pending descriptions above record the native Alpha handoff before owner integration. Both exact gaps are now corrected by authentic recorded-local-published-repair receipts at ${owner}/published-repairs/def-finite-sum.json and ${owner}/published-repairs/lem-finite-sum-laws.json. Existing A-P classification is retained with this local correction complete; no whole-item audit or new native acceptance is claimed. Original reader/refuter observations, Alpha decisions archive, report and successful dispatch result remain unchanged. The current assigned draft consumer uses primitive prefix sums and an independent d-induction; the historical published findings remain confirmed rather than reclassified as false positives. Final focused prerequisite review and source bindings: ${owner}/published-supplier-alerts/finite-sums/owner-closure/.\n`;
writeFileSync(join(base,'public-ledger-delta.json'),JSON.stringify({path:publicPath,raw_sha256:sha(publicRaw),replacements:publicEdits,append:addendum,retain_classification:'A-P',classification_count_delta:0,immutable_markers_untouched:true},null,2)+'\n');
const guards=[decisionPath,scopePath,publicPath,`research/${run}-alpha-batch-3-3a.md`,`research/${run}-dispatch/alpha-3a-batch-3.result.json`,`research/${run}-reader-findings-3.json`,`research/${run}-refute-3.json`,...sources.map(id=>`items/${id}.md`),...sources.map(id=>`${owner}/published-repairs/${id}.json`),...sources.map(id=>`${owner}/published-repairs/${id}.before.md`),`research/${run}-step3-published-claims.jsonl`,`${owner}/published-supplier-alerts/finite-sums/owner-source-integration.json`,`research/${run}-batch-3.proof-contracts.json`].map(path=>({path,raw_sha256:sha(read(path))}));
writeFileSync(join(base,'guarded-closure-manifest.json'),JSON.stringify({version:1,run,kind:'proposal-only owner adjudication closure',cycle:2,guards,ledger_preimage:{path:ledgerPath,raw_sha256:sha(ledgerRaw),specific_original_rows:allRows.filter(x=>findings.includes(x.defect_id)).map(row=>({defect_id:row.defect_id,row_sha256:hash(row)}))},decision_edits:edits,ledger_append_file:'ledger-append.json',risk_prerequisite_evidence:'current-prerequisite-review.json',contract_edits:[],no_prior_applied_repair_receipt_needed:true,native_stamp_required_later:true,refuter_decisions_unchanged:JSON.stringify(doc.decisions.slice(2))===JSON.stringify(JSON.parse(decisionRaw).decisions.slice(2)),native_alpha_approval_claimed:false},null,2)+'\n');
console.log(JSON.stringify({valid_recorded_repairs:policies.length,decisions_proposed:edits.length,append_only_closure_rows:newRows.length,current_hashes_differ_from_original_observations:true,refuter_decisions_unchanged:true,contract_edits:0}));

for (const [source,dest] of [[`research/${run}-alpha-batch-3-3a.md`,'alpha-report.md'],[`research/${run}-dispatch/alpha-3a-batch-3.result.json`,'alpha-result.json'],[`research/${run}-reader-findings-3.json`,'reader-findings.json'],[`research/${run}-refute-3.json`,'refuter-findings.json']]) writeFileSync(join(base,'before',dest),read(source));
