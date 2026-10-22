# Step 3a reader report — batch 98

**Run:** `physics-non-fluid-129-2026-10-21-r2`  
**Role:** reader  
**Owned batch:** `98`

## Opened inventory

Assigned pages:

- `csm-frontier-rare-event-numerics` (A): `library/classical-statistical-mechanics/csm-frontier-rare-event-numerics.md`.
- `csm-frontier-rare-event-numerics-examples` (B): `library/classical-statistical-mechanics/csm-frontier-rare-event-numerics-examples.md`.

Assigned items, reviewed in the A-page dependency order and then the B-page example:

- `thm-csm-frontier-partition-ratio-overlap`
- `alg-csm-frontier-independent-bridge-ratios`
- `thm-csm-frontier-bridge-ratio-variance`
- `alg-csm-frontier-interval-finite-partition`
- `thm-csm-frontier-interval-partition-certificate`
- `ex-csm-frontier-product-overlap-explosion`

Page prerequisites opened for scope and interface context:

- `csm-frontier-sampling-certificates`
- `csm-frontier-inverse-gibbs`
- `importance-sampling-and-weight-diagnostics`
- `interval-newton-krawczyk-and-polynomial-root-isolation`
- `outward-rounded-interval-and-ball-arithmetic`

Opened mathematical supplier items relevant to the assigned deductions:

- `alg-importance-sampling`; `thm-ordinary-importance-sampling-is-unbiased`; `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment`.
- `def-identically-distributed-and-iid-random-variables`; `thm-composition-with-borel-functions-preserves-measurability`; `thm-arithmetic-and-lattice-operations-preserve-measurability`; `lem-measurable-functions-preserve-independence`.
- `thm-integration-against-a-density`; `def-integrable-real-and-complex-functions-and-their-integrals`; `thm-change-of-variables-for-expectation`; `thm-linearity-of-the-lebesgue-integral-on-l-one`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`.
- `cor-variance-adds-for-pairwise-independent-random-variables`; `lem-variance-and-covariance-identities-for-random-variables`; `def-moments-variance-and-covariance`; `def-partial-sums-and-sample-means`.
- `def-complete-ordered-real-field`; `lem-nonnegative-square-root-exists-and-unique`; `def-dyadic-floating-point-format-and-directed-rounding`; `def-intervals-rectangles-and-complex-balls`; `def-outward-rounded-interval-and-ball-operations`; `lem-directed-dyadic-rounding-enclosure-and-error`; `lem-real-interval-arithmetic-preserves-enclosure`.

The relevant imported suppliers above are pinned in `research/math-imports.json`; raw SHA-256 checks of all 23 listed supplier carriers matched their pins. The CLT-only branch and unused prerequisite branches of the published importance-sampling results were not used to verify batch 98's finite-sample claims.

## Review and repairs

1. **`alg-csm-frontier-interval-finite-partition` — repaired definition.** The original input called `W_x` and `F_x` finite rational intervals without defining their endpoint order or explaining how those rational intervals related to the imported interval type, which permits only finite dyadic endpoints. The definition now states the maps `w` and `f`, gives ordered rational endpoints, defines closed rational input intervals, distinguishes them from the dyadic arithmetic intervals, and identifies the selected format and rounding convention. The existing overflow and unresolved branches remain explicit. The imported definitions and `lem-directed-dyadic-rounding-enclosure-and-error` support the conversion and finite-operation conventions.

2. **`alg-csm-frontier-independent-bridge-ratios` — repaired input definition.** The procedure previously used “IID” as shorthand for its sampling conditions. It now specifies a common probability space, maps into the finite power-set space, each sample mass, and mutual independence of the full finite family. This preserves the exact-draw contract and makes clear that the procedure does not generate samples or assert that approximate Gibbs trajectories are independent.

3. **`thm-csm-frontier-bridge-ratio-variance` — repaired proof and sampling statement.** Its previous Step 2.1 factorized expectations of the stage means without deriving their independence from the independence of the sample arrays. The proof now writes the finite stage blocks and gives the finite product-sum factorization for both first and second moments before telescoping the normalizer ratios. The statement now gives the sample maps, common probability space, laws, and mutual independence explicitly. The exact finite-sample formula remains conditional on those inputs.

4. **`ex-csm-frontier-product-overlap-explosion` — repaired definition.** The original `p_i^{\otimes m}` notation named a product law without defining its pointwise mass. The Example now defines `\pi_i^{(m)}(x_1,\ldots,x_m)=\prod_j p_i(x_j)`, gives the normalization conditions for the probability mass functions in its chi-square definition, and specifies the common probability space and independent sample variables. The finite sum factorization, strict positivity argument, and sample-size lower bound are sound for the stated one-stage estimator only.

All six assigned items were checked for definitions, hypotheses, dependency uses, proof steps, titles, citations, and computations. The remaining assigned claims are sound under their stated mathematical hypotheses. No empirical result or physical premise is used. No TikZ/tikzcd diagram was present or needed; these finite-sum and interval-arithmetic arguments are complete without diagrams.

The finite partition-ratio proof meets the ordinary importance-sampling hypotheses by strict positivity on the finite state space; its symbolic use of $Z_1$ only identifies the weighted random variable and does not make the unknown normalizer an algorithm input. The bridge theorem's stage means have finite moments, and the inserted finite block-sum calculation now supplies both moment factorizations. The interval certificate follows by outward endpoint enclosure and induction over the finite arithmetic DAG; its expectation claim is made only when the returned denominator lower endpoint is positive. The product-law calculation and sample-size bound apply only to the specified one-stage estimator.

For the changed definitions/statements, current item and page uses were searched. The bridge algorithm and interval algorithm each have only their assigned in-batch theorem consumer, both reviewed here; the Example has no item consumer. No additional item consumer was found.

Affected batch proof-contract entries were refreshed for the bridge theorem's changed supplier excerpt and Step 2.1, the interval certificate's changed algorithm excerpt, and the product-law Example's pointwise definition. Strict proof-contract validation passed for all four proof-bearing batch items. The changed draft carriers had no `verification.judge` record to remove; no judgment or stamp was added.

## Page verdicts

- **`csm-frontier-rare-event-numerics` (A): HOLD on the required page edge; no page-prose defect found.** Its metadata, title, five-item inventory, and empty body match the statement-first page layout. Four required page inputs are accounted for in the scoped supplier context. The required `csm-frontier-inverse-gibbs` page edge remains `open` in batch 98's cross-batch dependency record. The stored evidence says batch 96's manifest has empty item inventories, but the current `research/physics-non-fluid-129-2026-10-21-r2-batch-96.pages.json` contains seven A-page items and two B-page examples. I did not verify batch 96's current Step 1 records, so I do not infer that the edge is ready; its owner must refresh the stale rationale and resolve the actual edge state.
- **`csm-frontier-rare-event-numerics-examples` (B): PASS.** Its draft status, companion relation, title, example placement, and empty statement-first body match the manifest. The example's mathematical and proof content is repaired as above.

The batch 98 cross-batch row for `csm-frontier-sampling-certificates` is recorded `verified`; its page interface was inspected. The batch 96 row is the only unresolved page-level workflow issue observed. This page edge does not supply an item-level mathematical premise in any of the six reviewed items: all sample-generation algorithms require exact independent samples as inputs and make no claim that inverse-Gibbs or MCMC procedures produce them.

## Source checks and limits

- Art B. Owen, [*Monte Carlo Theory, Methods and Examples*](https://artowen.su.domains/mc/Ch-var-is.pdf), Chapter 9 §9.1, Theorem 9.1 and equations (9.3)–(9.4): the estimator's support condition, expectation, and finite-sample variance formula. §9.2 distinguishes unknown-normalizer ratio estimation. The local finite-set theorem proves its exact formula rather than importing a continuous-density specialization.
- Xiao-Li Meng and Wing Hung Wong, [“Simulating Ratios of Normalizing Constants via a Simple Identity: A Theoretical Exploration”](https://www3.stat.sinica.edu.tw/statistica/oldpdf/a6n43.pdf), §§1 and 3, printed pp. 831–832 and 836–837 / PDF pp. 1–2 and 5–6: common-support ratio identities and the first-order relative mean-square error for a ratio estimator. The reviewed finite-sample formulas do not import their asymptotic ratio-estimator analysis.
- Owen, [Chapter 10](https://artowen.su.domains/mc/Ch-var-adv.pdf) §10.9, printed pp. 39–45 / PDF pp. 39–45, was opened at the section introduction and its normalizing-constant context; that source is motivational for the local explicit procedure, not a proof supplier.
- Warwick Tucker, [*Validated Numerics: A Short Introduction to Rigorous Computations*](https://pup-assets.imgix.net/onix/images/9780691247656/9780691247656.pdf?fm=pdf), Chapter 1 §§1.3–1.5, printed pp. 5–18 / PDF pp. 6–19, and R. B. Kearfott, [“Interval Computations: Introduction, Uses, and Resources”](https://interval.louisiana.edu/preprints/survey.pdf), §1, printed pp. 95–97 / PDF pp. 1–3, support the cited directed-rounding and interval-arithmetic context. The local imported definitions and enclosure lemmas supply the exact conventions used by the algorithm and proof.

The external-source checks were limited to cited relevant passages; the external texts were not re-proved in full. This report reviews the direct supplier interfaces and proof branches used by batch 98; it is not an audit of every transitive prerequisite in the published suppliers' full dependency closures.

## Scoped checks

- `reflow.mts` on all four changed item files: each reported `unchanged`.
- `precheck.mts` on each changed item: four commands exited 0; the two proof-bearing items passed, and the two definitions reported 0 failing checks.
- `proof-contract.mjs ... --strict --items <four proof-bearing batch IDs> --json`: `ok: true`, zero errors and zero warnings, four items checked.
- Final `proof-layout.mjs` on the four changed item paths: 4 items, 4 proof steps, 0 defects.

## Uneditable defects and blocker

No confirmed mathematical or page-prose defect remains unedited. The current batch 98 cross-batch row for `csm-frontier-inverse-gibbs` is still open and carries evidence contradicted by the current batch 96 manifest. The dependency owner must refresh that cross-batch evidence and determine readiness; this reader did not edit another batch's page, manifest, or dependency record. The page verdict is therefore held at the page-dependency layer, while the six assigned item verdicts remain sound under their stated assumptions.
