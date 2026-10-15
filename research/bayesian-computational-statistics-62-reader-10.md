# Step 3a reader report — batch 10

Run: `bayesian-computational-statistics-62`  
Reader: `reader-10`  
Review date: 2026-10-15

## Run and scope

The autopilot status was `running`; `3a-read` was active and batch 10 had no result artifact at review start. The assigned batch contains one A page, one B page, four A-page items and two B-page examples. All six assigned items are current-run drafts. I reviewed current authored mathematics independently of the manifest strategy and author check.

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/posterior-consistency-and-tests.md` (A): `def-hellinger-distance-for-dominated-laws`, `thm-hellinger-tv-comparison-under-library-convention`, `thm-posterior-consistency-under-prior-mass-and-tests`, `cex-identifiability-alone-does-not-imply-posterior-consistency`.
- `library/bayesian-computational-statistics/posterior-consistency-and-tests-examples.md` (B): `ex-identifiable-finite-model`, `ex-l1-distance-convention-factor-of-two`.

Assigned items were read in dependency order: the Hellinger definition, its comparison theorem, the posterior-consistency theorem and counterexample, then the two examples. I also opened the page prerequisites named by the A-page manifest: `library/bayesian-computational-statistics/posterior-propriety-and-dominated-bayes-formula.md` and its two current-run suppliers `def-posterior-evidence-normalizer-and-fiberwise-update` and `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`; and the published pages `library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md` and `library/mathematical-statistics/symmetrization-rademacher-complexity-and-covering-entropy.md`. Those page prerequisites do not supply an additional premise used by the assigned item proofs.

I opened the definition or statement sections for every distinct item-level dependency cited by the assigned items: `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-probability-measure`, `def-axiom-of-choice`, `def-nonnegative-lebesgue-integral`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-threshold-characterisations-of-real-and-extended-real-measurability`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `def-total-variation-distance-for-probability-laws`, `thm-holder-inequality-for-integrals`, `def-finite-sigma-finite-and-semifinite-measures`, `thm-integration-against-a-density`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-kullback-leibler-divergence`, `thm-pinsker`, `thm-bayes-formula-for-dominated-kernels`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-kolmogorov-iid-l1-strong-law`, `def-identically-distributed-and-iid-random-variables`, `lem-measurable-functions-preserve-independence`, `thm-independent-random-elements-have-product-joint-law`, `lem-bounded-variable-hoeffding-mgf`, `cor-first-borel-cantelli-lemma-for-events`, `cor-markov-inequality-for-random-variables`, `thm-jensens-integral-inequality`, `thm-exponential-two-point-convexity`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-measurable-function-between-measurable-spaces`, `thm-sections-of-product-measurable-functions-are-measurable`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`, `thm-geometric-series`, and `def-identifiability-of-an-estimand`. All these cited suppliers are published; the two posterior-propriety suppliers listed above are current-run drafts and were inspected as context.

## Mathematical review and edits

### `def-hellinger-distance-for-dominated-laws`

The root-L2 formula is well-defined for the stated supplied finite-valued densities. The proof of measurability and the bound by (p+q) establish measurability and finiteness. The AC caveat correctly concerns the generic density-selection convention rather than any additional choice in the displayed formula. No edit.

### `thm-hellinger-tv-comparison-under-library-convention`

The event-supremum convention is correctly converted to one half of density (L^1); Cauchy–Schwarz gives `TV <= h`, and the pointwise square-root inequality gives `h^2 <= 2 TV`. Constructing ρ=P+Q gives the required canonical finite dominator.

**Repair:** The original step 4.1 asserted that densities transferred from a second dominator to ρ gave the same Hellinger integral, without establishing that the transferred densities agree almost everywhere with those already constructed. I added an elementary uniqueness proof for finite-measure density representatives in step 3.1 and used it in step 4.1 to compare the ρ-densities. This closes the representative and dominator invariance gap; no hypothesis or theorem statement changed. The repair is in `items/thm-hellinger-tv-comparison-under-library-convention.md`; its affected derivation entries were updated in `research/bayesian-computational-statistics-62-batch-10.proof-contracts.json`. No `verification.judge` record was present to remove.

### `thm-posterior-consistency-under-prior-mass-and-tests`

The theorem states the jointly measurable normalized density and measurable metric complements explicitly. The proof establishes product likelihood identities, integrability of KL log ratios on a positive-mass KL subset, exponential amplification of one sufficiently accurate test by independent blocks, an almost-sure denominator lower bound, and an exponentially bounded tested numerator. Markov and Borel–Cantelli then give posterior consistency on each complement. The separate Hellinger-support consequence follows with the stated constants from Pinsker and the local comparison theorem, with measurability supplied by Tonelli. No remaining defect found.

### `cex-identifiability-alone-does-not-imply-posterior-consistency`

The countable Bernoulli model is dominated, well-specified and injective. The prior is proper, excludes the truth, and gives positive mass in every KL neighborhood. The discrete metric makes every alternative metric-separated; the posterior remains on the prior support. Product-affinity bounds show the sequence of alternatives (P_n^n) approaches (P_0^n) in total variation, yielding the stated lower bound on every uniform type-II error when type-I error tends to zero. No defect found.

### `ex-identifiable-finite-model`

The finite model is identifiable, the true point gives positive mass to every KL neighborhood, and the Hoeffding bounds for the threshold test are summable. Its complements for the total-variation metric are correctly handled. No defect found.

### `ex-l1-distance-convention-factor-of-two`

The two-point densities give (L^1=2), event-supremum TV (=1), and root-L2 Hellinger distance (=\sqrt2), attaining equality in the stated upper comparison. No defect found.

## Source checks

- Bas Kleijn, Aad van der Vaart and Harry van Zanten, [*Lectures on Nonparametric Bayesian Statistics*](https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf): §8.1, equation (8.2), gives the root-L2 normalization; §9.4, Lemma 9.8(i)–(ii), gives the Hellinger/density-(L^1) comparisons; §7.3, Theorem 7.5 and its proof, states the KL-support/testing consistency result and amplifies tests on independent blocks; §7.8, Theorem 7.8 and proof, gives the denominator and tested-numerator route. The local claims are at least as qualified as these source results and include the library's event-supremum factor and explicit dominated-kernel conditions.
- Kleijn and van der Vaart, [*The Bernstein–von Mises Theorem under Misspecification*](https://pure.uva.nl/ws/files/1850322/114737_376240.pdf): §4.1, Lemma 4.1 and Corollaries 4.1–4.2 (printed pp. 376–379), support posterior exclusion from KL mass and uniform tests, including the metric-separated form. The local proof separately derives its stronger exponential tests from the summable error assumption.

## Page verdicts and unresolved issues

- `posterior-consistency-and-tests` (A): accurate after the proof repair; its summary preserves the common-dominator, joint-measurability, testability and counterexample qualifications.
- `posterior-consistency-and-tests-examples` (B): accurate; it correctly summarizes the finite-model and convention-factor computations. B-page prose was not edited.

Uneditable defects: none. Blocker: none. Coverage limitation: none for assigned items, pages, claim-relevant dependencies, or the cited source locations reviewed above.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-hellinger-tv-comparison-under-library-convention.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-hellinger-tv-comparison-under-library-convention.md` — pass (1 checked, 0 failing).
- Proof-contract JSON parse — pass.
- `node tools/proof-layout.mjs items/thm-hellinger-tv-comparison-under-library-convention.md` — 1 item, 7 steps, 0 defects.
