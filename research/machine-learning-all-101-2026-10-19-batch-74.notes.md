# Batch 74 — Hedge and online gradient descent

Run: machine-learning-all-101-2026-10-19 · role: beta · batch: 74 · pair: hedge-and-online-gradient-descent.

## Scope and controlling plan

- Read CLAUDE.md, README.md, SCHEMA.md, and the Step 1 sections of WORKFLOW.md; read the assigned batch task, beta scaffold brief, dependency-order task, current owner directions, the full ML-66 design in research/plan-machine-learning-track.md, the corresponding A/B rows in research/plan-spec.json, the current Batch 74 scaffold manifest, and research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json.
- The current owner directions are present and contain no ML-66-specific exception. The ML-66 design and the controlling plan-spec description agree on the two algorithms, the second-order Hedge inequality, the 2 sqrt(T log N) specialization, the 3/2 DG sqrt(T) OGD rate, the D=0 and G=0 branches, the nonexpansive projection interface, Countable Choice, examples, and the absence of a claimed lower bound.
- The task scaffold initially had empty item inventories. The Batch 74 manifest now records the four planned A-page interfaces and three B-page examples before item authoring. Batch 74 is dependency level 1 with prerequisite batch 73; the observed scheduling input is fce6be55d2ff133ed223fedc43c9755a4f53dccf17a3a0be3fbfafd0d0266d1c.
- No shared plan, published item, engine state, verdict, or other pair is in this write scope.

## Plan and source-locator decisions

- No mathematical conflict was found between the complete ML-66 design section and plan-spec.json. The task's four page-level prerequisites match the plan-spec rows.
- The refreshed source wording cites Hazan's current second-edition PDF as PDF pages 23–38 and 63–76, with parenthetical printed-page ranges that do not match the retrieved edition's running page labels. Following the exact current sections and source text, source evidence records section names and the inspected PDF page labels; it does not assert the inconsistent parenthetical mapping.
- The direct browser open of the Hazan PDF timed out. The same full text was retrieved through the ar5iv HTML conversion and the complete relevant Hedge and OGD arguments were inspected. The author-hosted PDF remains the cited source and will receive the ordinary local source-fetch-check stamp. The recovery resolved the retrieval issue; no source is dropped and no source-resolution escalation is claimed.
- The OGD source proof reaches a bound on twice the regret and then displays 3DG sqrt(T); the target 3/2 DG sqrt(T) follows by dividing both sides by two. The local proof writes this normalization explicitly.
- Hazan's lower-bound discussion leaves a step as an exercise. No matching minimax lower bound is included.

## Inventory and item dependency levels

The item levels use actual in-run logical suppliers. Batch 73 supplies def-online-decision-protocol at level 0, def-adversary-and-feedback-model at level 1, and def-static-dynamic-and-strongly-adaptive-regret at level 2. Published external suppliers do not raise levels.

| Item | Page | Level | Principal in-run suppliers |
|---|---|---:|---|
| alg-hedge | A | 2 | def-adversary-and-feedback-model |
| alg-online-gradient-descent | A | 2 | def-adversary-and-feedback-model |
| thm-hedge-static-regret | A | 3 | alg-hedge, def-static-dynamic-and-strongly-adaptive-regret |
| thm-online-gradient-descent-regret | A | 3 | alg-online-gradient-descent, def-static-dynamic-and-strongly-adaptive-regret |
| ex-hedge-two-experts | B | 3 | alg-hedge, Batch 73 protocol definitions |
| ex-projected-gradient-on-an-interval | B | 3 | alg-online-gradient-descent |
| cex-ogd-infeasible-comparator | B | 4 | thm-online-gradient-descent-regret, alg-online-gradient-descent |

Authoring order is the two algorithms, the two regret theorems, the two direct examples, then the infeasible-comparator counterexample. No cycle is present.

## Actual prerequisite inspection

- Read the actual Batch 73 draft bodies of def-online-decision-protocol, def-adversary-and-feedback-model, and def-static-dynamic-and-strongly-adaptive-regret. Their current statements support the online choice/feedback order, oblivious full-information timing, and fixed-comparator expected static-regret convention. The bodies are present; this check does not claim their native workflow acceptance.
- Read the complete statements and proofs of the published Euclidean projection variational inequality, Hilbert projection existence theorem, and nonexpansive projection lemma. The VI sign used below is inner-product of z minus P_K(z) with u minus P_K(z) is nonpositive. The Hilbert existence theorem assumes Countable Choice; the OGD nondegenerate branch carries exactly def-countable-choice. The Euclidean VI proof uses the nearest-point theorem, and the nonexpansive proof uses the Hilbert variational characterization.
- Read the actual subgradient definition and differentiable-convex gradient-inequality theorem. The smooth branch uses an open convex neighborhood so the supplier applies to every pair in K. The nonsmooth branch states the subgradient inequality explicitly for every comparator in K.
- Read the Euclidean inner-product definition, real Hilbert-space definition, and choice-free componentwise completeness proof for R^d, with d >= 1; these provide the Hilbert-space instance required by the projection theorem.
- Read the finite-regret definition and expectation supplier bodies used by Hedge. The sampled losses are finite-valued and bounded in the [0,1] specialization; the proof uses the indicator expectation identity and linearity only.
- The required Hilbert-space page also contains Riesz representation, but this finite-dimensional projected update uses Hilbert completeness and projection geometry only; no Riesz representation claim is imported.
- The proof dependencies of the published projection suppliers are transitive context. thm-projection-onto-a-nonempty-closed-convex-set explicitly spends Countable Choice only to select the minimizing sequence; its remaining argument uses the stated Hilbert, infimum, metric-closure, norm-continuity, and parallelogram facts. No stronger choice principle is imported.

## Sources read and result disposition

- Elad Hazan, Introduction to Online Convex Optimization, second edition, https://arxiv.org/pdf/1909.05207: section 1.3.3 and Theorem 1.5/proof, PDF pages 33–35; section 3.1 Algorithm 8 and Theorem 3.1/proof, PDF pages 63–66. The complete Hedge potential argument supports the nonnegative-loss second-order bound. The complete OGD calculation supports the projected update and the scheduled regret estimate. The lower-bound exercise is out of scope.
- Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11, https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf: sections 11.7.2, 11.7.4, and 11.8.1, PDF pages 156–162. The complete FTRL regret derivation and entropy/Gibbs expert update were inspected, as were the OGD projection update and convex-to-linear comparison. The notes label the latter proposition informal and say additional assumptions are needed; no missing source assumptions are imported.
- The full texts were inspected through the browser's PDF/HTML views. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-74.coverage.json --stamp` returned `4/4 source(s) fetch-verified (4 newly stamped)` and `4/4 resolved (0 drops)`. The later gate-only check returned 4/4 verified and 4/4 resolved. Result dispositions and per-item support are recorded in the coverage file and source-evidence carrier.

## Supplier editorial observations for the owner

The following published prerequisite statements/definitions contain inline item links under the active uninterrupted-statement rule. They are outside Batch 74's write scope and are left untouched; the owner must route any repair and consumer duty:

- def-convex-and-strictly-convex-functions-on-euclidean-sets — its Definition includes inline links to def-convex-subset-of-euclidean-space and def-interval.
- def-convex-subset-of-euclidean-space — its Definition includes an inline link to def-interval.
- def-countable-choice — its Definition includes inline links to def-choice-function and def-countable.
- def-expectation-of-a-nonnegative-or-integrable-random-variable — its Definition includes an inline link to def-integrable-real-and-complex-functions-and-their-integrals.
- def-euclidean-inner-product — its Definition contains inline links to def-natural-numbers, lem-nat-order-is-membership, def-function-space, def-vector-space, lem-metrics-on-rn, def-finite-sum, lem-finite-sum-laws, lem-of-square-positive, def-integer-power, thm-of-square-roots, lem-standard-basis-of-f-n, rem-rn-conventions-and-scope, def-norm-and-normed-space, and thm-cauchy-schwarz-and-the-euclidean-norm.
- def-hilbert-space — its Definition includes inline links to def-real-and-complex-inner-product-space, def-complete-metric-space, cor-inner-product-induces-a-norm, and def-banach-space.
- def-interval — its Definition includes inline links to def-complete-ordered-field, def-ordered-field, def-real-order, rem-sup-conventions, and def-bounded-set.
- def-jacobian-matrix-and-gradient — its Definition includes inline links to lem-standard-basis-of-f-n and def-directional-and-partial-derivatives.
- def-metric-topology — its Definition includes inline links to def-metric-space, def-metric-ball, and def-equivalent-metrics.
- def-natural-logarithm — its Definition includes an inline link to cor-exponential-is-a-bijection-onto-positive-reals.
- def-random-element-and-real-random-variable — its Definition includes inline links to def-measurable-function-between-measurable-spaces and def-borel-sigma-algebra.
- def-real-exponential-function-and-e — its Definition includes inline links to lem-exponential-series-has-infinite-radius, def-factorial-and-falling-factorial, def-canonical-natural, lem-of-naturals-positive, def-integer-power, def-series, and def-real-power-series-and-radius-of-convergence.
- def-subgradient-and-subdifferential — its Definition includes inline links to the convex-set and Euclidean-inner-product definitions.
- thm-euclidean-space-complete — its Statement includes inline links to lem-real-line-is-a-metric-space, def-complete-metric-space, and lem-metrics-on-rn.
- thm-differentiable-convex-functions-and-gradient-inequality — its Statement includes inline links to its subgradient and gradient definitions.
- thm-projection-onto-a-nonempty-closed-convex-set — its Statement includes inline links to Countable Choice and Hilbert space.
- lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive — its Statement includes inline links to Countable Choice, Hilbert space, and the projection theorem.

A bounded Statement/Definition scan of the transitive supplier closure also found the following outside-scope inline-link observations. These are editorial findings only; they do not claim mathematical review or approval of these items:

- def-real-and-complex-inner-product-space — Definition links to def-inner-product-space, def-inner-product-norm, and def-complex-conjugate-real-imaginary-part-and-modulus.
- thm-infimum-property — Statement links to def-infimum; lem-inf-epsilon links to def-bounded-set; def-infimum links to def-bounded-set and lem-sup-unique.
- cor-archimedean-reciprocal — Statement links to def-complete-ordered-field, thm-of-archimedean, and def-field.
- def-relative-normed-convexity-and-separation — Definition links to def-norm-and-normed-space, def-complex-norm-and-complex-normed-space, lem-complex-norm-realification-is-a-real-norm, def-dual-space-of-a-normed-space, and def-metric-topology.
- thm-metric-closure-characterisation — Statement links to def-metric-space, def-metric-interior-closure-boundary, def-metric-bounded-diameter, and def-metric-topology; lem-metric-limits-unique links to def-metric-space and def-metric-convergence.
- def-inner-product-space — Definition links to def-complex-conjugate-real-imaginary-part-and-modulus and def-sesquilinear-and-hermitian-forms-over-a-field-with-involution; def-inner-product-norm links to def-inner-product-space, thm-nth-roots-exist, and cor-triangle-inequality-for-inner-product-norm.
- def-complex-conjugate-real-imaginary-part-and-modulus — Definition links to thm-complex-numbers-form-a-field, cor-cauchy-reals-lub-complete, and thm-of-square-roots.
- def-probability-measure — Definition links to def-measure and def-measure-space; def-measurable-function-between-measurable-spaces links to def-measurable-space; def-borel-sigma-algebra links to def-topological-space and thm-generated-sigma-algebra-exists-and-is-minimal.
- def-nonnegative-lebesgue-integral — Definition links to def-extended-real-valued-measurable-function, def-integral-of-a-nonnegative-simple-function, and def-nonnegative-simple-measurable-function; def-integrable-real-and-complex-functions-and-their-integrals links to prop-closure-properties-of-measurable-functions-used-by-the-integral and def-complex-conjugate-real-imaginary-part-and-modulus.
- def-real-power-series-and-radius-of-convergence — Definition links to def-integer-power, def-series, and def-extended-reals; def-factorial-and-falling-factorial links to thm-recursion, def-nat-finite-sum-and-product, thm-induction-principle, thm-omega-is-peano-system, lem-nat-mult-identity, lem-nat-mult-cancellative, lem-nat-nonzero-is-successor, lem-nat-add-cancellative, lem-nat-mult-associative, lem-nat-mult-commutative, and def-nat-multiplication.
- def-integer-power — Definition links to def-ordered-field, def-field, thm-recursion, lem-power-laws, lem-of-no-zero-divisors, lem-of-inverse-unique, def-integers, lem-nat-embeds-int, def-int-operations, and thm-int-ordered-ring; def-canonical-natural links to def-field, def-natural-numbers, and thm-recursion; lem-of-naturals-positive links to def-field.
- def-series — Definition links to def-real-numbers, def-sequence, def-finite-sum, def-real-limit, and lem-limit-unique.

These editorial observations do not alter the mathematical interfaces quoted for this batch. The actual relevant supplier bodies and proof arguments were inspected.

## Item-by-item authoring log

- alg-hedge — authored at item level 2. It takes finite nonnegative full-information loss vectors, starts all weights at one, normalizes positive weights, samples an expert, then updates each weight by exp(-epsilon times its revealed loss). Direct in-run suppliers: def-online-decision-protocol and def-adversary-and-feedback-model; published suppliers: def-random-element-and-real-random-variable and def-real-exponential-function-and-e. Sources: Hazan §1.3.3, Algorithm 1 and Theorem 1.5; Ma §11.7.4. Its normalization is well-defined by positivity of the finite exponential factors. No proof phase applies. Final scoped checks pass; its non-owner Step 1 record is ready. No unresolved supplier.

- alg-online-gradient-descent — authored at item level 2. It defines smooth and subgradient feedback branches, uses eta_t=D/(G sqrt(t)) when D,G>0, and keeps the current iterate in the D=0 or G=0 cases. Countable Choice is required only in the nondegenerate branch that calls the Hilbert projection theorem. Its direct suppliers include the online/full-information protocol, Euclidean inner product and convexity definitions, gradient inequality, subgradient definition, Euclidean completeness, projection existence, and projection nonexpansiveness for measurability. Sources: Hazan §3.1, Algorithm 8 and Theorem 3.1; Ma §11.8.1. No proof phase applies. Final scoped checks pass; its non-owner Step 1 record is ready. No unresolved supplier.

- thm-hedge-static-regret — authored at item level 3. It proves the nonnegative-loss second-order bound by a weight-potential argument, derives the 2 sqrt(T log N) specialization for [0,1] losses and N>=2, and treats N=1 separately. The expected sampled-loss step uses the indicator expectation identity and expectation linearity; all random losses in that specialization are bounded. Direct in-run suppliers: alg-hedge, protocol/oblivious-feedback definitions, and the static-regret definition. Published suppliers: expectation/indicator/linearity, natural logarithm, and exponential inequalities. Sources: Hazan Theorem 1.5 and proof; Ma §§11.7.2 and 11.7.4. No choice axiom or minimax lower bound is used. Final proof contract, precheck, and proof-layout pass; its non-owner Step 1 record is ready. No unresolved supplier.

- thm-online-gradient-descent-regret — authored at item level 3. It proves the per-comparator bound for every u in K and states the static-regret consequence when the finite-horizon minimum is attained. The D=0 and G=0 branches are handled separately; only D,G>0 uses Countable Choice for metric-projection existence. The proof separates projection existence/measurability, the variational-inequality distance step, convex linearization, telescoping, schedule summation, and attained-minimizer substitution. Sources: Hazan Theorem 3.1 and proof; Ma §§11.7.2 and 11.8.1. No lower-bound claim is made. Final proof contract, precheck, renderer, and proof-layout pass; its non-owner Step 1 record is ready. No unresolved supplier.

- ex-hedge-two-experts — authored at item level 3. For the fixed two-round vectors (0,1) and (1,0) with epsilon=log 2, it computes the distributions (1/2,1/2) and (2/3,1/3), expected cumulative loss 7/6, best fixed expert loss 1, and expected static regret 1/6. Direct in-run suppliers: alg-hedge and the Batch 73 protocol, feedback, and regret definitions. Published suppliers: the natural logarithm, exponential reciprocal, indicator expectation, and expectation linearity. Sources: Hazan §1.3.3; Ma §11.7.4. The complete finite calculation uses no independence or choice axiom. Final finite check and proof contract pass; its non-owner Step 1 record is ready. No unresolved supplier.

- ex-projected-gradient-on-an-interval — authored at item level 3. It verifies the metric projection onto [0,1] from the variational inequality and computes one subgradient OGD update from x_1=1/4 to x_2=0. The interval's nonemptiness, closedness, convexity, diameter, subgradient, and Countable Choice conditions are stated and checked. Direct in-run supplier: alg-online-gradient-descent. Sources: Hazan §§2.1.1 and 3.1; Ma §11.8.1. A TikZ number line shows the trial point and its projection; the verification does not rely on the diagram. Final finite check and proof-layout pass; its non-owner Step 1 record is ready. No unresolved supplier.

- cex-ogd-infeasible-comparator — authored at item level 4. On K=[0,1], T=2, f_t(x)=-x on all of R, G=D=1, x_1=0, and u=2, the learner's cumulative loss is -1, the infeasible comparator's is -4, and regret 3 exceeds (3/2)sqrt(2). The set, loss hypotheses, gradient, and both projected iterates are verified. The theorem is cited only to identify the stronger false extension; the counterexample proof is direct. Sources: Hazan Theorem 3.1; Ma §11.8.1. Final finite check and proof-layout pass; its non-owner Step 1 record is ready. No unresolved supplier.

## Final scoped validation and readiness

- `node tools/tsx-run.mjs tools/author-check.mts machine-learning-all-101-2026-10-19 74` passed. The saved `research/machine-learning-all-101-2026-10-19-author-check-74.json` has `ok: true`; precheck passed all five proof-bearing items, rendercheck passed all nine items/pages, content-policy passed all seven items, and strict proof-contract validation passed 5/5 with zero warnings.
- Explicit `node tools/proof-layout.mjs` over the seven assigned items passed: 7 items, 24 proof steps, 0 defects. The standalone final precheck also passed; both algorithm definitions were not applicable.
- The scoped `depcheck` passed for all seven assigned items, with 0 errors and 0 warnings; its checked dependency closure contains 618 items and 257 pages. `source-fetch-check` passed 4/4 verified and 4/4 resolved, with 0 drops.
- The current Batch 73 + Batch 74 manifests give 14 items with no dependency-level errors or cycles. Batch 74 labels recompute as 2, 2, 3, 3, 3, 3, and 4 in item order. All seven item dependency lists and labels match the Batch 74 manifest. All 11 cross-batch item edges to Batch 73 have matching rows and no missing/extra edges. Both A/B page files contain frontmatter only, and all authored statements are free of inline references.
- `node tools/step1-decisions.mjs record` wrote seven non-owner `ready` records, one for each assigned item, with the exact examined dependency IDs. The current Batch 73 bodies were verified as interfaces; their draft status is not represented as acceptance. Completion and these records are not independent approval.
- Run-wide checks remain open outside this pair. `item-dependency-levels.mjs check` reports empty scaffold inventories on other pages (including vc-dimension-growth-and-pac-classification and algorithmic-stability-and-generalization). `batch-dependency-levels.mjs check` reports a stale run artifact after broader manifest changes; the shared artifact was not rewritten. `proof-contract-coverage.mjs` stops on the empty inventory for distribution-shift-and-domain-adaptation. These do not change the successful scoped calculations or Batch 74 artifacts.

## Run state observed at handoff

The last `autopilot status` read came from `.autopilot/machine-learning-all-101-2026-10-19` and reported `running`, updated 2026-10-18T21:54:34.746Z: `1-scaffold`, 41/101 assignments covered, no worker in flight, and the existing owner-repair blocker for unrelated items. `git log -5 --oneline` had HEAD `50139bdcb6` (“Defer compact construction artifact scans until author drain”). Batch 74 did not modify `.autopilot/`, the shared dependency-level artifact, shared plans, published items, or verdicts.

## Run state observed before authoring

Autopilot status reported the run at 1-scaffold, with no worker in flight and an owner-repair hold in research/machine-learning-all-101-2026-10-19-step1-blockers.json for other rejected/incomplete items. This batch continues independently. No engine state or blocker record was changed.
