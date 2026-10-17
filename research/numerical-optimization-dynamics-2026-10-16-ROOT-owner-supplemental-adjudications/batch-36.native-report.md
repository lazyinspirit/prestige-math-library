# Batch 36 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-36`.

## Level 0 completed

`def-linear-multistep-method-consistency-order-and-root-condition`: amended repair. The reader correctly made order universal across IVPs and smooth solutions, enabling polynomial tests. Independently confirmed an additional coordinate defect: the cited IVP convention uses coordinates i<d, whereas the norm evaluated undefined x_d and omitted x_0. Corrected its range to 0<=i<d. Kept d>=1, k>=1, all coefficients, residuals and root conditions. Repair confidence: 1. Updated owned contract mirrors; no judge record existed. Pre/post snapshots bind the order edit; the coordinate correction is this adjudication's further change. All direct item uses were searched and their actual coefficient/root/order/norm uses read. They need no source changes from the corrected norm. Outside-batch quote mirrors require owner refresh; the separately identified batch65 F8 copy remains outside scope.

`lem-variable-step-adams-lagrange-weights`: all four steps sound, including empty product at k=1, nonzero denominators, finite interpolation uniqueness and integration. Risk review complete; no decision owed.

Sources read: FNC https://fncbook.com/multistep/ (6.6.1–6.6.3; source LTE is scaled by h, our residual is unscaled); https://fncbook.com/zerostability/ (root-condition section). Local convention: `def-vector-valued-derivative-and-integral`, derivative section, and `def-euclidean-inner-product`, Definition first two paragraphs. No arbitrary choice is used.

Next: complete level 1 supplier reviews, then the explicit Dahlquist branch finding, remaining risk reviews and reader downstream citation disposition. Local checks pending. Published suppliers read only; no confirmed published defect.

## Level 1 completed

`alg-adams-pece-one-correction`: procedure correct, including k=1, oldest stored sample, predicted evaluation and post-correction failure branches. No decision owed; risk review complete.

`lem-companion-powers-bounded-under-root-condition` and `lem-linear-multistep-order-conditions-from-taylor`: reviewed_no_defect, change_kind metadata, defect_ids empty. Snapshots show identical item hashes before/after reading and changed contract hashes only. The reader refreshed their Definition excerpts. Independently read all cited supplier statements: companion convention/iteration/characteristic polynomial; FTA and algebraic closure; Jordan existence/block definitions/block-triangular characteristic polynomial; scalar Taylor. Both directions are sound, including nilpotent blocks, repeated interior/unit roots, real witnesses and m=0/1 moment tests. Updated the owned Definition quote after the index correction. Risk reviews complete. The polynomial test in arbitrary fixed dimension is interpreted componentwise (one nonzero coordinate), an immediate derivation, not a fatal gap.

The interpolation/local-defect supplier was also read in full for upcoming BDF2 reviews: coefficients from nodes 0,-1,-(1+1/r) and componentwise third-derivative remainders agree; compact positive ratio range supplies uniformity.

## Level 2 in progress

`alg-variable-step-bdf2-with-selected-implicit-branch`: all exact-root and invalid-grid/evaluation branches sound, N=1 empty loop checked. Risk review complete. No decision owed.

`thm-dahlquist-equivalence-for-linear-multistep-methods`: refuter:36:1 confirmed_nonfatal; touched carrier amended_repair. Repaired explicit output existence/in-K estimates in 1.2 and 2.1 and common radius bootstrap in 3.1. For exact histories the explicit error is -tau/alpha_k; for nearby histories it is bounded by (B+hD)eta_0. A uniform tube and small eta_0 give in-K outputs, after which the adapted norm estimate applies. No Statement, hypotheses or dependencies changed. All necessity tests checked independently, including repeated unit roots and the nonzero consistency-slope drift. Repair confidence 1; no prior judge stamp present. Risk review complete.

Level 2 completed: the repeated-unit-root counterexample, one-pass PECE example and simple-unit-circle example are sound by direct substitution. Checked the exact exponential/Euler/quarter-turn supplier statements. The counterexample has mu2=2 and amplification N relative to the starter; the PECE multipliers are 5/2 and -1/5 at -3; the unit-circle modes have period dividing four. All three risk reviews complete; no decisions owed.

## Levels 3 and 4 completed

`ex-uniform-step-bdf2-satisfies-dahlquist-conditions`: moments and factorization checked; -4h^3/3 defect and the 5/18+4h^3/9 branch estimate justify every Dahlquist hypothesis. Risk review complete; no decision owed.

`thm-variable-step-bdf2-order-two-under-ratio-bound`: forced increment recurrence, absorption, weighted error E_n, finite product bound and sum h_n^3<=TH^2 checked. The two-sided ratio, starter, smoothness, tube and selected-root hypotheses are all used correctly. Critical equality r_*=1+sqrt(2) is excluded. No first-exit circularity: each admitted history has its next root in K before the error estimate is applied. Risk review complete; no decision owed.

Source cross-check: Söderlind, Fekete and Faragó, https://real.mtak.hu/85237/1/B111_BIT.pdf, title page and section 4, PDF pages 12–13, equations (4.1)–(4.6). These establish the homogeneous increment multiplier and ratio threshold; nonlinear convergence is proved locally. The actual paper does not have authors Wang and Zhang. Routed algorithm/theorem reference titles require correction; nonrouted interpolation and increment supplier reference copies are owner alerts.

Corrected the BIT authors in the two routed carriers (`alg-variable-step-bdf2-with-selected-implicit-branch`, `thm-variable-step-bdf2-order-two-under-ratio-bound`), their manifest source mirrors and batch source-coverage title. URLs, procedure and theorem statements are unchanged. This is a source attribution repair, confidence 1. The nonrouted interpolation/increment carriers still contain the same bad author string and are explicitly handed to the owner; they were opened only as prerequisite context. Historical author notes are preserved.

## Reader finding and owner handoffs

`reader:36:1`, `lem-bdf2-root-locus-location`: confirmed_nonfatal. Independently reviewed the full current consumer, its batch52 F2 quote and its actual suppliers. The current F2 quote still has the pre-reader order wording. The root-locus proof correctly derives P_z, excludes zeta=0 and uses w=1/zeta to obtain Re z=(1-Re w)^2+(1-|w|^2)/2. For |zeta|>1 the second term is positive; unit-circle equality forces w=1 and z=0. The missing universal order quantifier and the coordinate correction do not alter that scalar use. Do not repair batch52 here: the sealed ROOT route explicitly has edit_permission false. Record the finding as nonfatal-recorded and retain owner action to refresh the F2 Definition excerpt.

Historical limit: observation_basis is unbound; historical_delta_unknown remains true. The dispatch explicitly authorizes disposition of this unbound finding after independent current review. Durable ROOT-sealed registration and ROOT-review record the supplier's exact pre/post carriers and the current consumer registration, but expressly do not bind the missing original observed consumer bytes or accept its mathematics. The normal nonfatal verdict rests on the present stale quote and the independently checked scalar proof, not an invented historical fingerprint. No prior escalation was cleared.

Additional owner actions: refresh outside-batch exact Definition mirrors following the norm correction; review batch65 `cor-constant-step-bdf2-order-two-with-consistent-start` F8, which copies sum_{i=1}^d v_i^2 despite the cited i<d convention. The existing proposal remains present at `research/numerical-optimization-dynamics-2026-10-16-owner-reader36-supnorm-index-proposal/`; no outside-scope source was edited.

## Decision and defect accounting

Exactly six frozen-scope obligations decided: four touched carriers, reader:36:1 and refuter:36:1. Two touched lemmas receive metadata-only reviewed_no_defect with empty defect IDs; the definition and Dahlquist theorem receive amended_repair. The touched theorem/refuter finding share one defect with explicit same-defect evidence. Additional source-attribution corrections affect risk-only carriers and are recorded here and in individual closed ledger rows; they introduce no extra frozen-scope decisions. All completed repairs have confidence 1. The citation handoff is nonfatal-recorded, not falsely marked fixed.

Updated the definition manifest with the universal order quantifier as well as the norm correction: the reader had refreshed owned contract excerpts but left this manifest text stale. Owned cross-batch IVP evidence and the frontier ledger note are updated; refresh succeeded. Stable IDs and proposed withdrawals were preserved (none added or removed).

## Final local checks and remaining work

All commands below exited 0 on this dispatch's final content:

- `node tools/tsx-run.mjs tools/reflow.mts` on the four changed item paths: all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those paths: two proof-bearing items checked, zero failures; definition/algorithm have no phase proof.
- `node tools/rendercheck.mjs` on those four paths: all four parse, including real KaTeX and renderer YAML.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-36.proof-contracts.json --strict`: 16/16 checked, zero errors/warnings.
- `node tools/risk-report.mjs` on the batch36 contract before review, then `--require-reviewed` after review: zero errors; all twelve HIGH/CRITICAL records are complete.
- Final, single batched `node tools/proof-layout.mjs items/def-linear-multistep-method-consistency-order-and-root-condition.md items/thm-dahlquist-equivalence-for-linear-multistep-methods.md items/alg-variable-step-bdf2-with-selected-implicit-branch.md items/thm-variable-step-bdf2-order-two-under-ratio-bound.md`: four items, thirteen proof steps, zero defects.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`: refreshed and deduplicated.
- `node tools/defect-ledger.mjs append --file /tmp/nod-b36-3a-defect-rows.json`: six valid rows appended under its lock; generated view refreshed.

The current direct-reference A-page prose was read and remains accurate. The current batch52 manifest declares the independently reviewed root-locus lemma and all five actual dependencies. A bounded scan of current run contract citations found exactly one outside stale Definition quote: batch52, `lem-bdf2-root-locus-location`, F2. Thus the earlier generic outside-quote alert is concretely this one mirror; it is not an assertion of additional unseen stale copies.

No substantial unmet mathematical prerequisite or unresolved local risk review remains. Remaining owner work is the expressly out-of-scope batch52 citation refresh, batch65 F8 index-copy review, and the nonrouted interpolation/increment BIT-author copies. No published mathematical defect was confirmed; published carriers and their ledger remain untouched. No withdrawn claim, added page/pair, source statement narrowing, new axiom, judge stamp, hash stamp, judgment cycle, gate battery, scheduling action, publication or commit was performed. Engine-owned hashing and gate execution remain pending.
