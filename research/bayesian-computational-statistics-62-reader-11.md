# Step 3a reader report — batch 11

Run: `bayesian-computational-statistics-62`  
Role: `reader-11`  
Verdict: both assigned pages are mathematically sound after the listed local repairs; no uneditable defect remains.

## Opened inventory

Dispatch and batch evidence opened: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/reader.md`, `research/bayesian-computational-statistics-62-batch-11.pages.json`, `research/bayesian-computational-statistics-62-batch-11.cross-batch-dependencies.json`, `research/bayesian-computational-statistics-62-batch-11.notes.md`, and `research/bayesian-computational-statistics-62-batch-11.proof-contracts.json`. The run status was recomputed from `.autopilot/bayesian-computational-statistics-62`; batch 11 is in the active 3a read stage.

Assigned pages opened:

- `library/bayesian-computational-statistics/iid-posterior-contraction.md` (A page)
- `library/bayesian-computational-statistics/iid-posterior-contraction-examples.md` (B page)

Assigned items opened in dependency order:

- Level 0: `def-hellinger-distance-between-density-laws`, `lem-iid-bounded-variance-bernstein-tail`, `lem-iid-posterior-denominator-lower-bound-from-kl-mass`
- Level 1: `lem-hellinger-distance-controls-l1-and-total-variation`
- Level 2: `lem-iid-sieve-entropy-produces-exponential-tests`
- Level 3: `thm-iid-posterior-contraction-by-entropy-and-prior-mass`
- Level 4: `ex-bernoulli-density-logarithmic-contraction-rate`, `ex-high-entropy-sieve-can-fail-without-precluding-contraction`, `ex-holder-density-rate-from-entropy-balance`

Published supplier bodies opened for the assigned proof claims: `def-probability-measure`, `def-measure-with-density`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-composition-with-borel-functions-preserves-measurability`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-integral-over-a-null-set-vanishes`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-independent-random-elements`, `def-real-exponential-function-and-e`, `cor-markov-inequality-for-random-variables`, `thm-exponential-addition-formula`, `thm-factorization-of-expectations-for-independent-variables`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-exponential-is-strictly-increasing`, `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-kullback-leibler-divergence`, `def-axiom-of-choice`, `def-identically-distributed-and-iid-random-variables`, `def-moments-variance-and-covariance`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `lem-measurable-functions-preserve-independence`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-variance-of-a-finite-sum`, `thm-jensens-integral-inequality`, `thm-holder-inequality-for-integrals`, `cor-chebyshev-inequality-for-random-variables`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `def-total-variation-distance-for-probability-laws`, `thm-minkowski-inequality-for-integrals`, `thm-grouping-independent-sigma-algebras`, `thm-derivative-of-exponential`, `lem-probability-measure-basic-identities`, `cor-mean-value-theorem`, `thm-logarithm-derivative-and-integral`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `thm-real-power-continuity-and-derivatives`, `cor-differentiable-implies-continuous`, `thm-independent-random-elements-have-product-joint-law`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, and `def-product-sigma-algebra-and-finite-product-sigma-algebras`.

The page-level prerequisite `library/bayesian-computational-statistics/posterior-consistency-and-tests.md` and its immediate items `def-hellinger-distance-for-dominated-laws`, `thm-hellinger-tv-comparison-under-library-convention`, and `thm-posterior-consistency-under-prior-mass-and-tests` were opened to inspect the declared interface. Batch 11 restates and proves the Hellinger comparisons locally and does not use that consistency theorem as a premise.

## Repairs and evidence

1. In `lem-iid-bounded-variance-bernstein-tail`, step 1.1 now handles the empty sum explicitly before fixing a summand. For `m = 0`, both `V` and `S_m` are zero, so the zero-variance conclusion holds. No hypothesis or conclusion was narrowed.

2. In `lem-iid-posterior-denominator-lower-bound-from-kl-mass`, the item now declares and cites the finite product-law result used when Tonelli is applied over the IID sampling space in step 1.3. Its proof and result were already correct; the dependency closure now names the product-law prerequisite explicitly.

3. In `lem-iid-sieve-entropy-produces-exponential-tests`, step 1.1 now establishes existence of a finite maximal shell net: attainable cardinalities are a nonempty bounded subset of ℕ and therefore have a maximum. The item also now declares the product-law, product-sigma-algebra, and measure-uniqueness suppliers and records in fact F8 the rectangle argument identifying the product density. Steps 2.1 and 3.1 cite that fact where they compute product affinities and product Hellinger distances.

4. In `thm-iid-posterior-contraction-by-entropy-and-prior-mass`, the item now declares the product-law, density-measure, product-sigma-algebra, and measure-uniqueness suppliers. Fact F8 records why the product of the one-observation densities is the density of the IID product law; step 1.3 cites it in the change-of-density calculation.

The affected proof contracts were updated with the new supplier citations and derivation inputs. The assigned batch manifest dependency mirrors were synchronized for the three items whose `deps` changed. None of the four edited items had a `verification.judge` record to remove.

## Mathematical review and page verdicts

### A page: `iid-posterior-contraction`

The page objective and summary match the current statements. The root-L2 Hellinger definition is finite because its integrand is bounded by `p + q`; the local comparison proves the full density-L1/event-supremum-TV factor `d1 = 2 TV`, and the Hellinger inequalities use the correct normalization. The Bernstein constants follow from the displayed exponential-moment expansion and the optimized Markov bound. The denominator lemma's directional KL convention, joint measurability of the local KL/log-square set, positivity argument, Jensen step, and Chebyshev probability are supported. The metric-test lemma's shell radii, local tests, block amplification, and exponential shell sum give the stated bounds for Hellinger, full density L1, and uniformly bounded density L2. The contraction theorem then combines its in-probability denominator bound, sieve tests, and prior tail with matching constants. The statement does not overclaim almost-sure contraction, minimax optimality, or an annular-testing result.

Verdict: pass after the repairs above; no uneditable defect remains.

### B page: `iid-posterior-contraction-examples`

The page objective is accurate. The Bernoulli example has `d1(p_theta,p_theta') = 2 |theta - theta'|`, a valid logarithmic global-entropy rate, and uniform local KL/log-square mass from the bounded second derivatives and log derivatives on `[a,b]` contained in `(0,1)`. The point-prior example's separated grid violates the entropy premise at the chosen rate while the posterior remains exactly at the truth. The Hölder example is conditional on its stated entropy and local-mass premises; its balance `C_H epsilon^(-1/alpha) <= n epsilon^2` yields `epsilon_n = K n^(-alpha/(2alpha+1))`. No example asserts a generic minimax or almost-sure result.

Verdict: pass; no edits or uneditable defects.

The cross-batch dependency note alleges an unqualified finite-prefix bound in `thm-posterior-consistency-under-prior-mass-and-tests`. The current item explicitly states the amplified bound for `n >= m`; I did not confirm that concern and made no change to the other-batch item.

## Source checks

- The author-hosted Kleijn manuscript, Chapter 6, Theorem 6.4.3 and its proof (§6.4.3, pp. 179–181), §6.4.4 on entropy-based tests (pp. 181–183), and Lemma 6.4.5 with proof on denominator bounds (p. 184), supports the local contraction and denominator arguments: [Bayesian Statistics for Frequentists](https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf).
- Ghosal's chapter, §2.5.2 (pp. 64–66), states the prior-mass and entropy framework, notes the L1 alternative and bounded-density L2 alternative, and §2.5.3 (pp. 66–67) discusses the Hölder rate balance and finite-dimensional logarithmic overhead: [The Dirichlet Process, Related Priors and Posterior Asymptotics](https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf).
- Tropp's Lemma 4.15 proof and Theorem 4.16 in Lecture 4, §§4.4.1–4.4.2 (printed pp. 36–37), give the bounded-summand variance-sensitive Bernstein bound: [Probability in High Dimensions](https://tropp.caltech.edu/notes/Tro21-Probability-High-LN-corr.pdf).
- The cited Ghosal–Ghosh–van der Vaart 2000 Project Euclid article was not retrievable through the browser. I used the full author-hosted Kleijn and Ghosal treatments above and the local proofs; I do not claim to have read the inaccessible article copy.

## Validation, remaining defects, and blocker

- Reflow: all four edited items reported `unchanged`.
- Precheck: all four edited items passed, one checked and zero failing each.
- Proof layout: one batched invocation over all four changed item paths reported 4 items, 24 steps, 0 defects.
- Uneditable defects: none identified in the assigned pages/items or in the immediate page-level prerequisite interface inspected.
- Blocker: none known for the assigned batch. The transitive dependency closure of the out-of-batch posterior-consistency page was not audited because Batch 11's local arguments do not depend on that theorem; the original GGV article copy was unavailable, as noted above.
