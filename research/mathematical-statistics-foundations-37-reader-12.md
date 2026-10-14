# Step 3a reader report — batch 12

Run: `mathematical-statistics-foundations-37`  
Role: independent reader  
Review date: 2026-10-14

## Run and scope

The autopilot status was recomputed from `.autopilot/mathematical-statistics-foundations-37`. The run is active at `3a-read`; no dispatch was running when checked. I used the batch-12 page manifest as an inventory, not as a verdict. I also consulted the batch notes, proof contracts, coverage record, and current supplier manifests as evidence.

## Opened inventory

### Assigned pages

- `library/mathematical-statistics/conditional-and-finite-group-exact-inference.md` (A page; 11 items).
- `library/mathematical-statistics/conditional-and-finite-group-exact-inference-examples.md` (B page; 3 examples).

The five A-page prerequisite summaries were opened: `complete-sufficiency-exponential-families-and-basu`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `conditional-distributions-and-regular-conditional-probability`, and `finite-probability-spaces-and-random-variables`. The B page's A-page requirement was also opened.

### Assigned items, in dependency order

- Level 0: `lem-conditional-kernel-tail-and-atom-evaluations-are-measurable`; `lem-randomized-probability-integral-transform`; `def-finite-group-randomization-test`; `lem-finite-multiset-randomized-rank-is-uniform`.
- Level 1: `def-randomized-conditional-p-value`; `def-orbit-rank-p-value`.
- Level 2: `thm-conditional-randomized-p-uniformity`; `thm-finite-group-randomization-validity`; `cex-noninvariant-null-invalidates-group-pvalue`.
- Level 3: `ex-finite-permutation-orbit-with-ties-and-stabilizers`.
- Level 6: `def-conditional-test-given-statistic`.
- Level 7: `thm-conditioning-on-a-nuisance-sufficient-statistic`; `thm-conditional-test-controls-unconditional-level`.
- Level 8: `ex-fishers-exact-test-from-two-binomial-samples`.

### Direct item suppliers opened

The defining or statement sections of all 37 direct suppliers outside the assigned items were opened. Two are draft suppliers in other current-run batches: `def-sufficient-statistic` (batch 5) and `def-test-size-and-power` (batch 8). The other 35 are published suppliers:

`cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-borel-sigma-algebra`, `def-complete-ordered-field`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-law-given-a-random-element`, `def-conditional-probability`, `def-cumulative-distribution-function-of-a-random-variable`, `def-extended-real-valued-measurable-function`, `def-finite-probability-space-and-event`, `def-group-action`, `def-independence-of-finite-random-variables`, `def-independent-random-elements`, `def-measure-kernel-and-probability-kernel`, `def-product-of-finite-probability-spaces`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-random-element-and-real-random-variable`, `def-sigma-algebra-generated-by-a-function`, `def-standard-borel-space`, `def-uniform-finite-probability-space`, `lem-finite-probability-basic-laws`, `lem-finite-set-has-max`, `lem-q-and-irrationals-dense-r`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `prop-measure-monotonicity`, `prop-measure-of-a-set-difference`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-conditional-integration-through-a-regular-conditional-law`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-dynkin-pi-lambda`, `thm-measurability-of-integration-against-a-kernel`, `thm-product-probability-has-independent-coordinate-events`, `thm-rationals-countable`, and `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.

The batch-12 contract has entries for all 14 items. Its derivation-step inventory matches the authored numbered steps, and the cited supplier IDs are present in the corresponding item dependencies. The edited items' derivation records and the tied-rank endpoint note were updated with the repairs below.

### Authoritative source passages checked

- Brockwell, “Universal Residuals: A Multivariate Transformation,” Lemma 2 and its proof, author-hosted [PDF pp. 6–8](https://www.stat.cmu.edu/tr/tr834/tr834.pdf): for arbitrary real laws, an independent uniform interpolation between (F(X-)) and (F(X)) is uniform. This matches the local randomized PIT after replacing (U) by (1-U); the local proof is self-contained.
- Hemerik and Goeman, “Exact testing with random permutations,” [§2.1 Theorem 1, §2.2, and §3.4](https://link.springer.com/article/10.1007/s11749-017-0571-1): group invariance underlies finite-group rank validity; the paper gives the upper-tail weak p-value and randomized tie-fraction result. The assigned finite-orbit proof supplies the local equal-mass and stabilizer-count arguments.
- Stark, *Statistics 240 Lecture Notes, Part 8*, [§1.3, PDF pp. 9–10](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf): finite-group transformations under an invariant null motivate the conditional orbit ranks and boundary randomization.
- Martin, *Lecture Notes on Advanced Statistical Theory*, [§2.3.1, Definition 2.2, PDF p. 33, and §2.5, PDF pp. 44–45](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf): sufficiency is expressed through a parameter-independent conditional kernel; §2.5 motivates conditioning. These passages provide context, not a substitute for the assigned proof.
- Deligiannidis, *Foundations of Statistical Inference*, [Chapter 13, Definition 13.1, PDF pp. 76–77](https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf): test functions, power, and size conventions.
- Berkeley Stat 210A, [“Conditional testing” section](https://stat210a.berkeley.edu/fall-2025/reader/testing-nuisance.html): conditional level bounds imply marginal bounds (lines 75–77); the two-binomial comparison and conditioning on the pooled total are discussed at lines 65 and 93–95.

## Edits and evidence

1. **A-page summary.** Replaced “makes their conditional law nuisance-free” with the precise claim that a common sufficiency kernel makes a test's conditional rejection probability nuisance-free. The theorem `thm-conditioning-on-a-nuisance-sufficient-statistic` proves that the same function (q(s)=\int\varphi(x)K(s,dx)) gives versions under each null law; it does not assert that the distribution of (q(S)) is the same under those laws.

2. **`lem-conditional-kernel-tail-and-atom-evaluations-are-measurable`, step 3.1.** The rational-box base argument now explicitly codes the finite rational endpoint tuples by iterating ((a,b)\mapsto2^a(2b+1)) after using the countability of ℚ. This supplies the countability premise used to identify the Euclidean Borel and finite product Borel sigma-algebras.

3. **`lem-randomized-probability-integral-transform`, Facts & Assumptions F6 and step 2.2.** F6 now states the cited least-upper-bound property accurately. Step 2.2 derives (q=\inf A_u=-\sup(-A_u)) by applying it to the nonempty upper-bounded set (-A_u), then uses the infimum property. This closes the quantile-existence inference without attributing an infimum statement to the cited definition.

4. **`lem-randomized-probability-integral-transform`, step 2.1.** The rational-rectangle base argument now explicitly shows that finite endpoint tuples are countable by the same pairing injection before using the countable-base argument.

5. **`lem-finite-multiset-randomized-rank-is-uniform`, step 2.1.** Replaced the Borel-set calculation using an undeclared Lebesgue measure with a direct CDF calculation. Conditional on each tie block, the affine transform of (U) has the stated interval CDF; the weighted contributions sum to (u) for every (u\in[0,1]).

6. **`ex-finite-permutation-orbit-with-ties-and-stabilizers`, step 3.1.** Added the explicit two-piece CDF calculation for the mixture on ([0,1/3]) and ([1/3,1]), and the explicit distribution of the inclusive rank. This makes the endpoint and superuniformity conclusions directly checkable.

For the four changed items, the batch-12 proof-contract derivations were updated; no stale `verification.judge` records were present. Each changed item was reflowed (unchanged), and its precheck passed. The final `node tools/proof-layout.mjs` run covered all four changed paths: 4 items, 15 proof steps, 0 defects.

## Defect not editable in this batch

- **`def-sufficient-statistic`**, exact location `items/def-sufficient-statistic.md:22` (`verification.precheck`): the current batch-5 draft is a definition but records `pending`. `SCHEMA.md` §Verification fields says `n/a` applies when no proof phase is applicable, including definitions. Assigned consumer: `thm-conditioning-on-a-nuisance-sufficient-statistic`. This is a nonfatal metadata/form issue; the definition's common-kernel interface was read and supports the consumer's premise. At report time the current raw item SHA-256 was `8e88a16a854c2e5e98b69f2f021b6c0b394523a0a62d89ac3e3824951162dcad`, and the current frontmatter still showed `verification.precheck: pending`. I did not edit this other-batch supplier.

## Page verdicts

- **A — Conditional and Finite-Group Exact Inference:** pass after the summary wording repair. The kernel measurability, arbitrary-law randomized PIT, conditional p-value, finite-group orbit-rank, nuisance-kernel, and conditional-to-unconditional arguments are supported by their stated hypotheses and dependencies. The only outstanding routed issue is the batch-5 supplier metadata noted above.
- **B — Conditional and Finite-Group Exact Inference — Examples:** pass. The noninvariant two-point witness, (S_3) stabilizer/tie counts, and Fisher conditional masses and endpoint cases agree with their statements and computations. No B-page prose was edited.

## Blockers and coverage limits

There is no blocker to this batch review. Published direct suppliers were checked at their exact defining or statement sections; I did not re-audit the full proofs of all published suppliers or unrelated transitive dependency branches. The literature passages above were used to verify the relevant contextual claims and conventions, not as substitutes for local proof steps.
