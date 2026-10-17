# Eight stabilized accepted inputs: precise carrier-history corner case

Research-only bounded policy analysis. No source proof rereview, hashes, validators, engine changes, source changes, canonical metadata edits or gate results. `eight-actual-carrier-differences.json` preserves all8 actual inventory targets/decisions/carriers, candidate archived contract entries, current entries, exact recursive field differences, actual native result identities and paths. Values called SHA256 are existing native/root evidence copied unchanged, not newly computed here.

## Actual differences

All8 have `stabilized:true`, route touched, genuine current `accepted_repair`, identical source and manifest hashes to their actual immutable pre3a input, and a changed contract hash. The full contract preimage candidates are actual originals archived by root before the fresh independent continuation, not constructed inverses. Root must authenticate each candidate entry against the actual pre3a contract hash before using it.

| Batch | Item | Actual changed contract fields versus archived original |
|---|---|---|
|7|thm-forward-euler-one-step-consistency-and-local-error|risk_review only: retains original notes and appends fresh citation/source continuation|
|35|ex-euler-midpoint-rk4-fixed-time-error-slopes|risk_review only: retained original notes plus focused attribution review|
|35|ex-midpoint-order-loss-at-continuous-time-kink|risk_review only: retained original notes plus focused attribution review|
|35|prop-euler-midpoint-rk4-orders-and-stability-functions|risk_review only: retained original notes plus focused attribution review|
|77|lem-mgrit-recursive-work-and-visits|risk_review only: fresh different reviewer, old creator record preserved under prior_review|
|77|lem-mgrit-two-level-call-counts|risk_review only: fresh different reviewer, old creator record preserved under prior_review|
|49|thm-bartels-stewart-dense-operation-count|risk_review plus risk_review_history: native49 replaces native33 supplier-side review with its independent consumer acceptance, preserving both prior reviews|
|85|thm-sqp-exhaustive-active-set-qp-solve-correct-finite|risk_review and citations/F3/quote: current full Definition quote from alg-sqp-exhaustive-active-set-qp-solve after its genuine data-binding repair|

For85 the **only citation difference** is F3 quote text. Fact/source/source_section/uses stay unchanged, as do all derivations, routine steps, boundaries and other contract fields. Current F3 spells out actual Aeq/Dh, beq/-h, G/Dg, d/g, c/gradient f and exact stacked AJ/bJ. This is an exact current supplier mirror already reviewed by the actual native85 followup, not an item-source or proof change to the accepted theorem.

Candidate old contract paths for each batch B are:
`research/numerical-optimization-dynamics-2026-10-16-ROOT-current-alpha-followup-B/05-numerical-optimization-dynamics-2026-10-16-batch-B.proof-contracts.json`.
Each JSON row records the fully expanded real path. These candidate entries need root canonical-hash authentication against `research/numerical-optimization-dynamics-2026-10-16-step3-hash-B-pre-3a.json`; semantic comparison alone is not that authentication.

## Existing routes do not cover these8

Native `riskReviewOnlyDelta` permits adding a previously absent risk_review: it removes the entire current risk_review and compares that entry with the immutable prior contract hash. It cannot authenticate replacement/enrichment of a review already present, retained review history, or an exact supplier-quote refresh. All8 had an existing review in their archived original. Deleting reviews/history to force that predicate would discard genuine evidence.

Existing `sourceIdenticalAcceptanceContinuity` intentionally rejects stabilized and added targets, and hardcodes immutable post rather than pre3a. Its owner-evidence entry cannot make the rejected branch applicable. A prior-applied repair binding only handles unchanged finding-observation currency and does not bypass the accepted-post comparison. Shared defect and causal-helper bindings address actual ledger ownership, not this comparison. Creation certificates likewise do not waive accepted input currency. A new hash stamp alone cannot satisfy it, and a no-source-change accepted verdict must not be mislabeled amended.

Therefore there is no existing honest entry-only route for this exact corner case. Keep the existing original-touched continuity policy unchanged. Add a **separate narrow stabilized-acceptance continuity policy**, consumed only at the existing accepted-post comparison. This does not alter the eight native verdicts, immutable snapshots, actual source bytes, original finding observations, ledger or creation ownership.

## Proposed narrow policy and integration

Proposed policy name: `step3-stabilized-source-identical-acceptance-continuity-v1`, version1. New owner-evidence array `stabilized_source_identical_acceptance_continuities`. A separate helper/export is preferable to silently broadening v1. It should be evaluated only as another disjunct of the existing accepted_repair native-post equality check, alongside native risk-only and original-touched continuity. It must not exempt decision staleness, ledger, original findings, shared-defect, birth/origin, independent review, strict-contract or final-gate checks.

Minimal entry fields (root generates hashes, no new fields written now):

```
version: 1
policy: step3-stabilized-source-identical-acceptance-continuity-v1
run, id, obligation
target_sha256
stabilized_input_carrier_sha256
current_carrier_sha256
stabilized_input_snapshot: {path, sha256}
input_contract_preimage: {path, sha256} # genuine full original contract document
accepted_decision_archive: {path, sha256}
accepted_decision_sha256
native_result: {path, sha256}
native_assignment: {path, sha256}
native_report: {path, sha256}
allowed_review_fields: [risk_review] # actual subset, plus risk_review_history for49
supplier_quote_refreshes: []        # only85: [{fact:F3, source:alg-sqp-exhaustive-active-set-qp-solve, source_section:Definition}]
independent_execution_coverage_adopted: false
added_helper_review: null           # required structured evidence only for added77
```

The helper must verify all of the following, not trust an asserted receipt:

1. Exact run/id/obligation; actual native target must equal one returned by native `stabilizedObligations(batch,scope)` and be touched/stabilized, not a page/direct/finding. Actual current decision is accepted_repair/confidence1, preserved in the hash-bound archive as its exact unchanged object. Missing native document run uses the truthful ROOT-derived archive wrapper already proposed, with original full raw document preserved separately.
2. Exact immutable pre3a path/label/version/run/batch. Its actual typed item carrier equals the supplied stabilized_input carrier, and current item raw hash and manifest carrier equal that input exactly. Verify raw current source and actual current manifest/contract, rather than trusting inventory labels. Any later source edit is HOLD unless a separately specified complete, hash-authenticated supported source-metadata preimage branch is supplied; no automatic level8 exception.
3. Read the genuine full old contract preimage from its hash-bound research ref; the selected entry's canonical hash must equal the immutable pre3a contract_sha256. Current entry's actual hash must equal the current carrier. This supplies the missing authentic old review; never reconstruct old notes by guessing or stripping fields.
4. Full old/current contract equality after **only** explicitly allowed, actually changed review fields and listed citation quote fields are projected out. No loss of claim/inputs/step IDs/classification/score/boundary/axiom/finite evidence is admitted. The review allowance is a fixed native allowlist `risk_review`, `risk_review_history`, not arbitrary JSON pointers from an owner entry.
5. Preserve review provenance: an old risk_review must remain as exact prior_review, as an exact entry in appended risk_review_history, or as a literal original-note prefix under unchanged reviewer/status with an appended continuation. Existing history must be retained in order. Current review is complete and binds the genuine current native result/report/assignment. A report alone never supplies missing original bytes or an invented mathematical review.
6. For85's allowed quote refresh, match a unique unchanged `(fact,source,source_section)` citation pair. No other citation field may change. The whole current quote must equal the current actual source section (native whitespace normalization), with exact native citation use semantics and actual source logical dependency. Bind that actual current supplier raw reference and the genuine root supplier repair/native85 review evidence. Strict proof-contract validation must still execute and pass at runtime. This is not a waiver for arbitrary citation edits.
7. Exact whole current source claim mirror in manifest under native normalization; exact actual source frontmatter deps against manifest deps. Native actual strict per-item proof-contract validation, not an attested pass, remains mandatory just as for v1. Risk-report and all other ordinary final checks remain unchanged.
8. Stable current native result is genuine successful completed/unaborted Alpha covering the actual batch; assignment contains the actual item and report/decision are current, hash-bound. All evidence paths remain run-local research refs. Entry grants continuity of existing acceptance only; no new mathematical coverage, reader execution or original creator independence is invented.

The runtime helper needs **no new broad source audit**. It checks exact carrier/provenance continuity and invokes the existing current strict contract validator. The independently completed mathematical review remains the actual native evidence, not root-authored acceptance.

## Additional added77 guard: actual creator and different independent reviewer

The two77 targets truly have added:true and were absent from immutable reader-post. They must not enter via simply deleting an added guard. Their structured `added_helper_review` must bind:

- genuine attempt1 creator result, original creator report/decision archive and actual root birth observations;
- actual source item present in pre3a, absent from immutable reader-post, exact source raw equality across creator post/birth observation, pre3a and current for these two helpers;
- genuine later attempt2 success with **different session identity** from attempt1, begun after successful creator completion;
- exact current accepted helper decision, complete independent full-proof review notes/report for this specific helper, and its preserved creator risk record under prior_review;
- actual original defect/causal_subject/shared ownership references, without making the helper the subject of a duplicate original algorithm defect;
- all existing native origin/certification requirements independently satisfied before native acceptance; continuity evidence is not an origin certificate.

Actual evidence exists in:
`research/numerical-optimization-dynamics-2026-10-16-ROOT-native77-completed-origin-observations/ROOT-origin-observations.json` (genuine creator attempt1 ended14:31:27.604Z, both exact birth source archives/results/prompt and recorded raw hashes);
`research/numerical-optimization-dynamics-2026-10-16-ROOT-current-alpha-followup-77/` (full genuine creator archives);
`research/numerical-optimization-dynamics-2026-10-16-dispatch/alpha-3a-batch-77.attempt-2.result.json` (actual different current reviewer, session01a14523-b055-7da2-9600-20c91bb56aec, ended14:44:18.369Z);
`research/numerical-optimization-dynamics-2026-10-16-alpha-batch-77-3a.md` (complete actual specific reviews under Level6 two-level call-count and Level7 recursive cost);
current77 exact accepted decisions and contract risk_review/prior_review preserved in the analysis JSON.

Do not claim an existing auditor-certification file: `research/numerical-optimization-dynamics-2026-10-16-step3-auditor-certifications.json` did not exist at inspection. Root owns actual origin handling; this analysis neither creates nor replaces it. Actual root birth observations explicitly say they are not certification or independent acceptance. The later native77 review is the genuine independent acceptance evidence.

## Root next action

Review this bounded policy choice and authenticate the8 original contract preimage candidates once against pre3a. Seven are review-only changes;85 additionally needs the one exact F3 quote refresh. If approved, implement the separate narrow helper/callsite and root-only entry builder, with explicit negative cases for missing/forged preimage, changed source/manifest, unlisted contract change, partial quote, missing actual strict validation, and missing or same-session helper review. Keep all original v1 behavior and non-waivable native gates. Then bind only genuinely supported entries to final current carriers after pending22/33 metadata writers drain. No source/Statement rewrite, fake amended verdict, blanket pre3a rehash or deletion of genuine review evidence is required.
