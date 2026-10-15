# Step 3a reader report — batch 55

Run: `bayesian-computational-statistics-62`  
Role: reader  
Output findings: `research/bayesian-computational-statistics-62-reader-findings-55.json`

## Scope and inventory

I reviewed the active batch-55 manifest, both assigned pages, all 27 item carriers, the current proof-contract artifact, and the four prerequisite pages named by the A-page manifest. The live manifest contains 21 A-page items and 6 B-page examples. The batch authoring notes still describe an earlier 17-item A-page inventory; I used the current manifest and carriers for scope and reviewed the notes only as historical evidence.

### Assigned pages

- `library/bayesian-computational-statistics/asymptotically-robust-permutation-tests.md` (A page)
- `library/bayesian-computational-statistics/asymptotically-robust-permutation-tests-examples.md` (B page)

### Assigned A-page items, read in dependency order

The item IDs below are the exact `items/<id>.md` carrier paths.

- Level 0: `def-two-sample-u-statistic-parameter`; `lem-finite-population-permutation-clt`; `lem-hypergeometric-binomial-contiguity-for-permutation-samples`; `lem-general-measurable-finite-group-randomization-validity`; `lem-random-permutation-variance-by-transpositions`.
- Level 1: `def-two-sample-order-r-u-statistic-and-first-projections`; `lem-permutation-consistency-from-iid-mixture`.
- Level 2: `lem-permutation-mixture-coupling-for-two-sample-u-statistics`; `lem-two-sample-u-statistic-projections-well-defined`.
- Level 3: `lem-pooled-mixture-projection-and-variance`; `lem-two-sample-u-statistic-hoeffding-decomposition`.
- Level 4: `lem-two-sample-u-statistic-degenerate-remainder-order`; `def-studentized-two-sample-u-statistic`.
- Level 5: `thm-two-sample-u-statistic-projection-clt`; `cor-two-sample-permutation-exact-under-equal-distributions`; `thm-two-sample-u-statistic-permutation-clt-under-weak-null`; `alg-studentized-two-sample-u-permutation-test`.
- Level 6: `thm-two-sample-u-statistic-permutation-clt-under-mixed-centering`; `thm-studentized-two-sample-u-statistic-permutation-validity`.
- Level 7: `thm-studentized-permutation-validity-under-mixed-assignment-centering`; `thm-studentized-wilcoxon-validity-under-heterogeneous-laws`.

### Assigned B-page items

- Level 3: `cex-weak-null-does-not-imply-mixed-assignment-centering`.
- Level 5: `cex-positive-kernel-second-moment-does-not-imply-nondegenerate-projections`.
- Level 8: `ex-same-mean-unequal-variance-studentized-permutation-test`; `ex-exact-versus-weak-two-sample-null`; `ex-studentized-rank-u-statistic-under-weak-null`; `cex-extra-sqrt-m-after-standard-error-studentization-diverges`.

### Prerequisite pages and item dependencies inspected

Prerequisite pages: `library/bayesian-computational-statistics/finite-group-permutation-inference.md`; `library/probability/martingale-inequalities-and-convergence.md`; `library/mathematical-statistics/conformal-prediction-and-exchangeable-ranks.md`; `library/statistical-models-and-experiments/horvitz-thompson-variance-and-srswor.md`.

I opened all 37 distinct direct item dependencies listed by the current batch manifest: `cor-cauchy-schwarz-inequality-for-l-two`; `cor-characteristic-function-criterion-for-weak-convergence`; `cor-chebyshev-inequality-for-random-variables`; `def-axiom-of-choice`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-finite-population-and-sampling-design`; `def-group`; `def-group-action`; `def-identically-distributed-and-iid-random-variables`; `def-independent-random-elements`; `def-measurable-function-between-measurable-spaces`; `def-moments-variance-and-covariance`; `def-probability-measure`; `def-product-sigma-algebra-and-finite-product-sigma-algebras`; `def-simple-random-sampling-without-replacement`; `def-square-integrable-martingale-difference-array-and-variance-clock`; `def-statistic-and-estimator`; `def-uniform-finite-probability-space`; `lem-characteristic-function-of-a-normal-law`; `lem-characteristic-functions-under-affine-maps-and-independent-sums`; `lem-conditional-hoeffding-bound-for-bounded-martingale-differences`; `lem-coordinate-maps-and-permutations-are-measurable-on-finite-products`; `lem-finite-multiset-randomized-rank-is-uniform`; `thm-arithmetic-and-lattice-operations-preserve-measurability`; `thm-cauchy-schwarz-finite`; `thm-chebyshev-inequality`; `thm-factorization-of-expectations-for-independent-variables`; `thm-finite-group-permutation-validity`; `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`; `thm-lindeberg-feller-central-limit-theorem-sufficiency`; `thm-lindeberg-levy-iid-central-limit-theorem`; `thm-martingale-central-limit-theorem`; `thm-real-stirling-formula`; `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`; `thm-slutsky-for-real-random-variables`; `thm-srswor-mean-variance-and-finite-population-correction`; `thm-tower-property-of-conditional-expectation`.

For the exactness corollary, I additionally opened `def-measurable-finite-group-permutation-setup` and `def-measurable-finite-group-orbit-pvalues`, the definitions used by the direct supplier `thm-finite-group-permutation-validity`. I read that supplier's Statement and proof; its finite-group invariance and rank conclusions match the corollary's use.

## Mathematical review

- **Definitions and projections:** The parameter definition preserves the measurable product domain and imposes no null or antisymmetry condition. The order-$r$ statistic, first projections, section-integral well-definedness, pooled-mixture projection, and two-sample Hoeffding decomposition have the stated domains and coefficients. The canonical-coordinate argument gives the required orthogonality and the (O(N^{-2})) degenerate remainder bound under the uniform mixed second-moment hypothesis.
- **Finite-population CLT:** The row variance and empirical variance converge under uniform integrability of squares. The successive-revelation martingale has the displayed predictable variance clock, which tends to one after studentization; the maximal increment condition follows from the UI tail bound. The proof addresses varying conditional permutation spaces by giving a rowwise version of the martingale-CLT characteristic-function argument, then uses finite-grid monotonicity for uniform CDF convergence.
- **Hypergeometric transfer and coupling:** The likelihood-ratio expansion has limit ((1-s)^{-1/2}exp[-sZ^2/(2(1-s))]), whose mean is one; the resulting UI bound proves the required hypergeometric-to-binomial contiguity direction. The exact-(p_N) mixture transfer uses this direction correctly. The local coupling variance estimate accounts for transpositions that hit the mismatch set and those that do not, and yields the asserted (L^2) rate without importing the source's assignment-wise centering or sample-fraction-rate hypotheses.
- **Permutation CLTs and studentization:** Antisymmetry centers the full permuted U-statistic under the pooled mixture even when individual mixed assignments are not centered. The mixture first projection has UI squares and convergent variance; the finite-population CLT gives the conditional linear limit, while the higher-order remainder and two-permutation second-moment argument yield the conditional CDF limit. The direct theorem, its all-assignment-centered specialization, the true-sampling projection CLT, and both studentized results preserve their distinct scales and hypotheses. The studentizer proof requires direct conditional permutation consistency for general joint estimates and proves the separate-group sufficient condition only for its stated case.
- **Algorithm and exactness:** The algorithm specifies the sample/kernel/variance inputs, alternatives, complete (N!) enumeration, per-permutation recomputation of both variance estimates, zero-denominator branch, multiplicity convention, and both inclusive and tie-randomized outputs. The equal-law corollary applies the finite-group result to the invariant product law and a measurable statistic, including zero-denominator permutations.
- **Examples:** The order-2 counterexample has weak-null value zero but a mixed-assignment mean (1/2); its direct and pooled projection variances are positive. The Rademacher example has positive kernel second moment with zero first projections. The mean-difference example's true and raw permutation variances are (5/3) and (7/3), respectively, and its equal-tail raw test is asymptotically conservative. The exact-versus-weak example distinguishes product-law invariance from a parameter null. For the discrete sign-rank example, the four assignment second moments are (1,1,1/2,5/8); the pooled projection variance at (p=1/2) is (81/256), and the finite-support estimates are consistent both under the original samples and the permutation law. The extra-$\sqrt m$ counterexample proves divergence of the incorrectly rescaled pivot under both the sampling and conditional permutation laws.
- **Contracts and page prose:** The current proof-contract artifact has 27 records. I compared the step maps for the main local suppliers, the weak-null/studentized chain, the Wilcoxon specialization, the algorithm, and the examples against their current carriers; they were used as evidence only. The A-page summary matches the proved claims and scale caveat. The B-page summary matches the examples and counterexamples.

## Source passages consulted

I checked the cited source passages relevant to the arguments, not the full cited books or reports:

- [Chung and Romano, Stanford Technical Report 2011-09](https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf): Theorem 3.1 and Remark 3.1 (PDF pp. 18–19), Theorem 3.2 and Example 3.1 (PDF pp. 20–21), Lemmas A.1–A.2 and proofs (PDF pp. 34–39), and the Theorem 3.1–3.2 proof passages (PDF pp. 43–45). The source's assignment-wise centering and fixed-mixture rate conditions are explicit; the local batch proofs establish their stronger claims independently.
- [Chung and Romano, Stanford Technical Report 2011-05](https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf): §3.4 Lemmas 3.2–3.3 and Remarks 3.2–3.4 (PDF pp. 21–22), with the complete contiguity and consistency-transfer proofs (PDF pp. 31–35). The local lemmas use the exact triangular mixture and do not claim the source's reverse-contiguity conclusion.
- [Major, Chapter 9, “Some Results About U-statistics”](https://static.renyi.hu/~major/articles/lect-note1.pdf): Theorem 9.1 and its Hoeffding-decomposition proof (printed pp. 77–78); the local two-sample decomposition is proved in the assigned item.
- [Hemerik and Goeman, “Exact Testing with Random Permutations”](https://arxiv.org/pdf/1411.7565): fixed-group rank validity (§2.1, PDF pp. 3–5) and the tie-randomized p-value formula (§3.4, PDF pp. 14–15).

The finite-permutation variance estimate and the strengthened exact-mixture coupling are proved locally; I did not rely on Chatterjee's permutation concentration result as an imported theorem.

## Edits, defects, and verdicts

- **Edits:** None. No confirmed item or A-page defect required repair. Accordingly, no item contract, judge record, reflow, precheck, or proof-layout artifact was changed or regenerated.
- **Defects not edited:** None identified in the assigned carriers or the dependencies used to verify them.
- **A-page verdict:** No confirmed mathematical, citation, definition, statement, algorithm, proof, or page-summary defect found.
- **B/examples-page verdict:** No confirmed mathematical, computation, witness, title, citation, or page-summary defect found.
- **Blocker:** None.

## Coverage note

All assigned items and pages, the four manifest prerequisite pages, and all direct item dependencies listed by the manifest were opened. Source review was limited to the specific passages and locators listed above. The older batch notes' 17-item A inventory predates the current 21-item A manifest; all four added A carriers were included in this independent review. No item was repaired, so no changed-item formatting or validation command was applicable.
