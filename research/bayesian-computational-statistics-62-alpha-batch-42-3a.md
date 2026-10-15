# Batch 42 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-42`.

Scope: one touched obligation, `touched:42:lem-one-step-kalman-gaussian-conditioning`; no reader, refuter or page obligations. Review follows the generated dependency order. Reader and refuter findings arrays are empty. No judgment, stamping or engine transition is performed.

## Level 0 completed

`lem-independent-noise-extends-a-conditional-law`: current three-step proof and all nine direct supplier interfaces checked. Kernel integration twice supplies evaluation measurability; fixed-conditioning-event finite measures agree on rectangles by independence and extend by pi-lambda; measurable pushforward preserves the identity. Probability masses are finite, target-empty and null-event cases hold, and no AC is used. The iterated-section formula in F3 is supplied through `def-product-measure-on-sigma-finite-spaces`, explicitly named by the cited theorem. Complete review recorded in the batch contract. No defect or decision owed.

Sources checked so far: the actual local supplier Definition/Statement and relevant proofs, as named above and in the contract citations. No external full-text reading claimed.

The review checkpoints below follow that order, completing each risk review before moving upward.

## Level 1 algorithm completed

`alg-kalman-filter`: full procedure and all four suppliers checked. Positive dimensions type both columnwise triangular solves; eliminating their intermediate gives the stated gain. SPD innovations provide the unique positive-diagonal Cholesky factor. Singular state/noise covariances and T=0 are permitted; no additional choice or numerical-stability claim occurs. Risk review complete; no defect or decision owed.

## Level 1 touched lemma completed

`lem-one-step-kalman-gaussian-conditioning`: **accepted_repair**, confidence 1. The explicit positive integer dimensions agree with `def-multivariate-normal-law`, `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal` and `thm-multivariate-normal-conditional-law`. All three proof steps checked: affine projections give the joint Gaussian block, the SPD observed block licenses conditioning with PSD Schur complement, and expansion proves Joseph form even for singular P,Q,R. The batch-6 supplier proof explicitly constructs a measurable kernel by translating an independent Gaussian residual; it permits singular state and residual covariance.

Frozen pre source hash: `a14b7c799cef9b9aaed221e9d3883b8efea8a00b46191fb92ca74f3957918fa1`; frozen post and actual current raw source hash: `3df935f812c3228b8042350d2210a593bccbcdf2e58ece4ea9b36623c498159c`. Frozen manifest hash is unchanged. The reader report documents the dimension insertion and empty-boundary contract synchronization; the earlier `research/bayesian-computational-statistics-62-owner-step2-gate1-canonical-format-before/lem-one-step-kalman-gaussian-conditioning.md` independently shows the omitted dimensions. That earlier archive is not represented as an exact pre-reader byte copy. No unknown historical change is asserted repaired; acceptance concerns the reported dimension clarification and the independently verified exact reader-post current source.

Direct-consumer search across items finds `thm-kalman-filter-is-exact-posterior` and `lem-kalman-filter-is-exact-conditional-on-nonlinear-path` only. The former uses positive state/observation dimensions from the model Definition. The latter fixes a nonlinear path and explicitly invokes exactly that same finite linear-Gaussian model (its defining conditional model also states this). Both satisfy the added hypotheses. No consumer repair or next-hop change is needed, including outside batch 42. AC is explicit in the supplier and inherited by both consumers. Complete risk review recorded. Closed ledger row: `bcs62-b42-positive-gaussian-dimensions`.

External source check: [Särkkä (2013)](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf), Theorem 4.2 and its full derivation, printed pp. 56–58, equations (4.17)–(4.29); Appendix A.1, printed pp. 209–210, Lemmas A.1–A.2, equations (A.2)–(A.5). These match the prediction and Schur update formulas. The appendix uses density notation and inverse formulas; it is not treated as proving the singular extension. That extension and everywhere-kernel measurability are proved by the actual local Gaussian suppliers reviewed above. Joseph form was checked directly by expansion. No reading of Law–Stuart–Zygalakis is claimed.

## Level 2 exactness theorem completed

`thm-kalman-filter-is-exact-posterior`: all four steps and all current direct suppliers reviewed. Initial law on singleton history handles T=0. Finite mutual independence makes the new noise pair independent of the preceding state and observations; the level-0 noise lemma supplies the history-indexed joint law. For each fixed history the one-step result applies in positive dimensions with deterministic PSD covariance and SPD innovation. The triangular solves give the same gain by multiplying through L and L-transpose. Affine means and fixed covariance give a measurable translated-Gaussian kernel.

In step 3.1 the assertion identifying the iterated history law follows from the conditional-law event identity first for rectangle indicators and then for nonnegative functions by simple approximation. Fixing a state event, the two finite measures on history space agree on rectangles and extend by pi-lambda. This is a valid short measure-theoretic inference, not a missing supplier. No density ratio, inverse of singular state covariance, or pointwise uniqueness on null histories is used. Joseph form follows from the previously checked one-step equality. The published path-law theorem identifies the independent-noise representation with the kernel model; the batch-41 existence theorem has the required standard-Borel finite-horizon hypotheses. Complete risk review recorded; no additional defect or decision owed.

## Level 3 completed: `ex-kalman-filter-singular-prior-positive-innovation`

Reviewed both verification steps and all six current dependencies. The realization X0=(Z,Z) has zero mean and rank-one PSD covariance P=[[1,1],[1,1]], since u^T P u=(u1+u2)^2 and (1,-1) is a null vector. With F=I2 and Q=0, prediction preserves P; H=(1,0), R=1 gives S=2>0, K=(1/2,1/2)^T and at y=2 the mean is (1,1). Exact multiplication gives K S K^T=P/2, so posterior covariance is P/2, still PSD and singular. The zero process noise is an admissible degenerate Gaussian independent of all variables; measurement independence is explicit. Applying the reviewed exactness theorem supplies a normalized kernel section at the specified null-probability observation, without asserting pointwise uniqueness. State dimension two, observation dimension one and T=1 meet all domains; AC is inherited as declared. Reader/refuter have no finding and exact arithmetic confirms every numerical assertion.

## Level 3 completed: `ex-scalar-kalman-filter-update`

Reviewed both verification steps and all five current dependencies. Independent X0,q1,r1 each N(0,1), F=H=1 and Q=R=1 give predicted mean zero, variance 2, innovation y=2 and S=3>0. Solving yields K=2/3, updated mean 4/3 and covariance 2-(2/3)*3*(2/3)=2/3>0. The reviewed exactness theorem therefore supplies precisely N(4/3,2/3) as the selected probability-kernel value. Positive scalar dimensions, one-step endpoint and explicit independent centered noise assumptions satisfy its model and SPD-innovation domain. Conditioning on the specified real value uses a chosen everywhere kernel, never a positive-probability event quotient or uniqueness claim. AC is inherited only through Gaussian/model suppliers. No iff or degeneracy assertion requires additional handling. Reader/refuter findings are empty; no independent defect.

## Contract and dependency maintenance

The first strict batch contract check found one stale citation quote: the exactness theorem F6 still quoted the one-step lemma before the positive-dimension insertion. Updated that quote to the actual full current Statement. This is necessary audit synchronization of the accepted supplier repair, with no new mathematical finding, source edit, or separate routed decision. The second strict check passes all six entries. The batch manifest, dependency arrays, provenance and verification records require no change. All six current item sources match their immutable reader-post raw hashes; the only contract changes made here are six risk reviews and that F6 quotation.

Maintained the five current in-run supplier interfaces in the batch-42 cross-batch input, with exact hypotheses and use locations. In particular the previously open exactness/filtering-definition row is now verified by current-source review, independently of earlier owner-readiness assertions. Preserved all other rows and their historical evidence. Updated the owned-consumer note in `briefs/tasks/frontier-dependency-ledger.md` and refreshed the engine-derived unified ledger through its tool.

## Checks and outcome

- Initial `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-42.proof-contracts.json`: exit 0, six HIGH/CRITICAL items routed. All six now have specific complete reviews.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-42.proof-contracts.json --strict`: first found the stale F6 quotation; after synchronization, exit 0, zero errors/warnings, 6/6 items checked.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-one-step-kalman-gaussian-conditioning.md`: exit 0, one proof checked, zero failures.
- `node tools/rendercheck.mjs items/lem-one-step-kalman-gaussian-conditioning.md`: exit 0; actual KaTeX and renderer YAML parse pass.
- `node tools/frontier-dependency-ledger.mjs refresh --run bayesian-computational-statistics-62`: exit 0, refreshed and deduplicated.
- All six actual item raw SHA256 values equal the frozen reader-post item hashes. Decision inventory is exactly the single owed touched obligation; no extra decisions are supplied for risk-only carriers or unflagged pages.
- A mistaken discovery invocation of nonexistent `tools/proof-contracts.mjs --help` failed with MODULE_NOT_FOUND; the actual singular `tools/proof-contract.mjs` was then used successfully. This is a command-discovery error, not a content defect.

Final risk and actual-renderer layout results are recorded below. No item was edited by this adjudicator; the accepted reader-edited lemma is included in the final layout check. No formatter was run on repository items in this adjudication.

Published findings: none. No published file was edited and no published ledger lock was needed. No escalation or unresolved mathematical prerequisite remains. No withdrawal was proposed or removed. This is local adjudication and focused validation only; the engine retains decision sealing and the complete gate battery.

Final checks: `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-42.proof-contracts.json --require-reviewed` exited 0 (six routed items, zero errors). `node tools/proof-layout.mjs items/lem-one-step-kalman-gaussian-conditioning.md` exited 0 (one item, three steps, zero defects). Handoff complete: one accepted repair, six complete risk reviews, no blockers.
