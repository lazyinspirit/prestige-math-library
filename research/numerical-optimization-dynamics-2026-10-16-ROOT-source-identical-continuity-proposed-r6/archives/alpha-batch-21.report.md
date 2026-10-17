# Batch 21 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-21`.

Scope: two touched obligations, no page, reader or refuter findings.

## Inverse lemma, level 1

All seven steps checked against the algorithm Definition. Positive pivots (j+1)/j and reversible elimination/back substitution construct the unique solution for every real r. Negative-minimum propagation terminates at the zero endpoint. The barrier q=x(1-x)/2 satisfies A_h q=1 and 0<=q<=1/8, yielding both signed comparisons, including R=0. N=1 works with p_1=2; N=0 is excluded. No AC or finite-precision claim. Reader and refuter have no unresolved findings. No defect found.

Evidence: current `items/alg-centered-difference-dirichlet-bvp.md` Definition and `items/lem-centered-difference-dirichlet-inverse-maxnorm.md` proof; reader-21.md, reader-findings-21.json, refute-21.json. Initial risk-report: zero errors, three HIGH items. Risk review recorded; no decision owed for this untouched item.

Next: finish second-order theorem prerequisite review, then the two touched examples.

## Second-order theorem, level 2

Read the current truncation lemma, Taylor remainder corollary and scalar triangle inequality, then the theorem's four steps. C4 regularity meets the Taylor supplier's hypotheses on both closed intervals even at N=1. Remainder signs give tau=-(R_-+R_+)/h² and ||tau||≤Mh²/12. Subtracting residuals yields A_h e=rho-tau; the inverse estimate gives Mh²/96+||rho||/8. Boundary errors vanish under the fixed closure, and exact algorithm output has rho=0. Zero M and zero residual are covered. No defect; risk review complete. No decision owed for this untouched item.

Prerequisites read: `items/lem-centered-difference-dirichlet-truncation-residual.md`, `items/cor-taylor-remainder-bound.md`, `items/lem-of-triangle-inequality.md`. Their exact statements justify the uses; the published scalar inequality proof derives the nonstrict order addition explicitly. No published defect found.

## Quadratic example, level 2

All three current verification steps checked: differentiating x(1-x)/2 gives -u''=1; the stencil is exactly h² before division, endpoints zero; unique solvability identifies the output for every N≥1, including sole sample 1/8 at N=1. Pre/post item and manifest hashes agree; only the contract hash changed. Current contract step 1.1 has a stale F3 input absent from the actual proof and Facts. This is audit metadata, not a mathematical defect. Remove that input and record reviewed_no_defect with change_kind audit_enrichment.

Next: finish the sharp inverse-norm example and hash-bound delta review, then local checks.

## Sharp inverse norm example, level 2

Checked all five verification steps and the three actual cited suppliers. The scalar triangle inequality supplies the norm triangle axiom. Finite row estimates give the upper induced-norm bound and a sign vector on a maximizing row attains it, including zero entries. At N=3, multiplication of the integer numerator matrix by T gives 4I; division by 64 gives the inverse of 16T. Row sums are 6/64, 8/64, 6/64. The general inverse lemma supplies the uniform upper bound; this exact instance proves sharpness. At N=1 the inverse is [1/8]; N=0 is excluded. No AC is used. Risk review complete.

Accept the reader repair adding `lem-of-triangle-inequality` to deps, declaring F3 and using it in verification 1.1; record one closed nonfatal citation-missing defect. The omitted scalar inequality was immediately available and does not invalidate the calculation. Updated the manifest dependency mirror to include this supplier. Statement and Definition are unchanged, so there is no triggered consumer repair. No new item edits, judge invalidations, page changes or withdrawals.

## Delta evidence

Both current raw item SHA256 values equal their post-reader snapshots. Quadratic item: `4f1c317cea337f4c7b4140e0b0686e60f6b2d05cedd5e24bfe4946e9e7fcd5a7`, identical pre/post; its contract changed from `3b2c08a58e2235534e55783f84b986f66f17b7508e320361872f7f1327ac7194` to `39877e12f0bbd1e9634a1c77c94b25592d4a06056448e3c4a9d17f5f88a69b7b`. Current proof uses no F3; the stale contract input was removed as audit normalization. Sharp-norm item: pre `eafb20eb15611d393ba9072ce07446dbe1aed2872da9bba2a7e45d4d64282683`, post/current `cd3eb6214f7cf2335f4f5c5c9808837df4f0ec68834c6d1304578fbb57b8074b`; reader-21.md documents the citation addition, which the complete current proof independently justifies. Engine owns final current decision hashes.

## Sources and prerequisites

Independent local proofs establish the exact constants. Opened the pinned FNC revision URL; it returned a cache miss, so no exact-revision source verification is claimed. The accessible MIT OCW Lecture 5, PDF page 5, lines 348–373, gives the Poisson stencil, exact Dirichlet closure, and the first-order Neumann caveat: https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf . This corroborates method context; it is not used to substitute for the local inverse/error proofs. FNC alternate URL also failed. No unfamiliar or unresolved mathematical prerequisite remains.

Owning manifest inspected; batch cross-batch dependency artifact is empty. Actual external suppliers are the published Taylor-remainder bound and triangle inequality, read as prerequisite context. No published defect found; published content remains read-only. Frontier dependency note records their actual uses and no open supplier repair.

## Checks and blockers

The first strict contract check caught a citation-quote mismatch in the reader-added F3 quotation: the supplier has a blank line before its displayed formula. Synchronized that exact quotation without changing the mathematical claim or item. This is mechanical quote normalization; no defect-ledger row was created for it. Final check results follow below. No mathematical blockers or escalations. No judgments, stamps, agent dispatch or gate cycle performed.

Final focused checks (all exit 0):

- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-21.proof-contracts.json --strict`: 7/7 items checked, zero errors/warnings after quotation normalization.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-21.proof-contracts.json --require-reviewed`: seven items routed, all three HIGH reviews complete, zero errors. The initial invocation without this flag was also run.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-centered-difference-dirichlet-quadratic-exact.md items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md`: two checked, zero failing.
- `node tools/rendercheck.mjs items/ex-centered-difference-dirichlet-quadratic-exact.md items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md`: two files, no rendering or YAML errors.
- `node tools/proof-layout.mjs items/ex-centered-difference-dirichlet-quadratic-exact.md items/ex-dirichlet-inverse-infinity-norm-tight-at-n3.md`: two items, eight steps, zero defects. Run once after the review; no item edits or formatter followed it.
- Defect-ledger append succeeded through its serialized append tool and refreshed the generated view. Closed row: `numerical-optimization-dynamics-2026-10-16-3a-b21-D001`, nonfatal citation omission. No ledger row for metadata normalization or diagnostic failures.

Completed outputs contain exactly the two owed touched decisions. No item carrier was edited by Alpha; the accepted reader carrier remains unchanged. Metadata changes are the three risk reviews, quadratic step-input normalization, sharp-norm exact quotation and manifest dependency mirror, plus the required dependency note and closed ledger row. No pending action remains for this dispatch; engine stamping and gates remain with the engine.
