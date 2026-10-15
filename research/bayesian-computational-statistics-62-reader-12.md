# Step 3a reader report — batch 12

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `12`

## Run state

The autopilot status showed the run in `3a-read`, with no worker currently in flight. Batch 12 was the assigned scope.

## Opened inventory

Assigned pages:

- A page: `library/bayesian-computational-statistics/misspecified-posterior-consistency.md`
- B page: `library/bayesian-computational-statistics/misspecified-posterior-consistency-examples.md`

Assigned items (all 15 listed in the batch manifest):

- `def-kl-projection-set-and-relative-kl-neighborhoods`
- `lem-centered-integrable-iid-random-walk-is-unbounded-above`
- `def-likelihood-tilted-measure-at-kl-projection`
- `lem-likelihood-tilted-measure-is-sigma-finite`
- `lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound`
- `lem-product-likelihood-tilt-has-product-density`
- `prop-compact-kl-projection-tests-under-fractional-moment-continuity`
- `lem-exponential-test-posterior-splitting-at-kl-projection`
- `thm-posterior-consistency-at-kl-projection`
- `ex-distant-alternatives-without-uniform-tests`
- `ex-nonunique-kl-projection-set`
- `ex-unique-kl-projection-finite-model`
- `ex-likelihood-tilt-can-have-mass-below-one`
- `ex-likelihood-tilt-can-have-mass-above-one`
- `cex-weak-tilted-tests-do-not-imply-almost-sure-consistency`

Direct dependency items opened before checking their consuming claims:

- Measure and likelihood: `def-measure`, `def-probability-measure`, `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-kullback-leibler-divergence`, `def-axiom-of-choice`, `def-measure-with-density`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `thm-fatou-lemma`, `lem-coordinate-maps-and-permutations-are-measurable-on-finite-products`, `thm-independent-random-elements-have-product-joint-law`, and `thm-bayes-formula-for-dominated-kernels`.
- Probability and testing: `def-identically-distributed-and-iid-random-variables`, `thm-kolmogorov-zero-one-law`, `thm-grouping-independent-sigma-algebras`, `thm-dominated-convergence`, `lem-basic-properties-of-characteristic-functions`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `lem-measurable-functions-preserve-independence`, `thm-kolmogorov-iid-l1-strong-law`, `def-total-variation-distance-for-probability-laws`, `cor-chebyshev-inequality-for-random-variables`, `cor-first-borel-cantelli-lemma-for-events`, `thm-finite-union-bound`, and `cor-markov-inequality-for-random-variables`.
- Metric and calculus: `def-metric-space`, `def-metric-compactness`, `def-metric-topology`, `lem-closed-subset-of-a-compact-space-is-compact`, `thm-monotone-convergence-for-the-integral`, `thm-logarithm-derivative-and-integral`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-algebra-of-derivatives`, `thm-exponential-is-strictly-increasing`, and `cor-mean-value-theorem`.

The current batch-12 proof-contract inventory was opened. Its scope contains the 15 manifested items; its derivation step labels and cited supplier IDs were compared with the current carriers. Contract claims were treated as review evidence, not as verdicts.

## Edits and evidence

- In `items/prop-compact-kl-projection-tests-under-fractional-moment-continuity.md`, corrected the source locator for Kleijn–van der Vaart, Theorem 3.2 and proof, from printed pages 368–369 to 369–370. The University of Amsterdam full-text PDF places the theorem statement on printed p. 369 and the proof continuation on p. 370. [Source PDF](https://pure.uva.nl/ws/files/1850322/114737_376240.pdf), §3, Theorem 3.2, printed pp. 369–370.
- In `items/def-likelihood-tilted-measure-at-kl-projection.md`, lowercased “Once” after the preceding comma. This corrects capitalization without changing the definition. Updated the eight verbatim contract excerpts that quote this paragraph.
- No changed item had a `verification.judge` record to remove. No proof contract claim or mathematical statement changed.

The proposition’s compact separated-set argument, fractional-moment estimate, boundary conventions, and finite-cover combination were checked against the opened metric, integration, and calculus suppliers. The denominator lemma’s measurability, common strong-law event, finite-positive evidence, and Fatou lower bound were checked against the opened measure and probability suppliers. The product-tilt identity, posterior splitting, main theorem, finite examples, and heavy-tail counterexample were checked directly from their statements and proofs.

The cited external Lemma 3.3 in Kleijn–van der Vaart was also checked at printed pp. 374–375. Its stated weak-error-to-exponential-test amplification is not valid for arbitrary sigma-finite likelihood tilts: the proof centers block statistics under (Q_\theta^N) without ensuring the required block integrals are finite. The assigned counterexample supplies (Q_j(\mathsf X)=\infty), weak test errors tending to zero, and posterior excursions with almost-sure limsup one. The current A-page theorem does not use that amplification and states the stronger test hypotheses it proves sufficient.

Validation after the edits:

- `reflow` — the definition was unchanged by reflow; the proposition was reflowed.
- `precheck` — definition: 0 checked, 0 failing; proposition: pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-likelihood-tilted-measure-at-kl-projection.md items/prop-compact-kl-projection-tests-under-fractional-moment-continuity.md` — 2 items, 6 steps, 0 defects.

## Uneditable defects

None found in the assigned items, the two assigned pages, or the opened local dependency statements. No withdrawal is proposed. The external source issue above is documented as context; there is no corresponding local published item ID to route as a finding.

## Page verdicts

- `misspecified-posterior-consistency` (A): no remaining defect found. The summary accurately describes the KL projection set, sigma-finite tilts, denominator lemma, sufficient test condition, and compact test construction.
- `misspecified-posterior-consistency-examples` (B): no defect found. The examples’ finite KL, total-variation, tilt-mass, and posterior calculations match their stated claims.

## Blocker and coverage note

No blocker. The complete assigned batch, its pages, all direct dependencies used in the arguments, and the batch contract scope/source-step maps were reviewed. Source verification focused on the Kleijn–van der Vaart article and Durrett’s random-walk section; the other bibliography entries were not treated as proof premises because the local arguments were checked directly.
