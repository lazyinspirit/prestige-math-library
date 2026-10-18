# Step 3a reader report — batch 17

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Coverage: batch `17`

## Opened inventory

**Assigned pages:** `lossy-source-coding-with-side-information` and `lossy-source-coding-with-side-information-examples`.

**Required context pages:** `rate-distortion-and-lossy-source-coding`, `distributed-source-coding`, and `cost-constrained-gaussian-and-feedback-channels`.

**Assigned items (14):**

`def-it-finite-strongly-typical-set`, `lem-it-finite-type-class-cardinality-bounds`, `lem-it-finite-codebook-covering-selection-law`, `lem-it-finite-random-bin-packing-bound`, `lem-it-finite-selected-codeword-markov-typicality`, `def-it-finite-wyner-ziv-code`, `def-it-finite-multiterminal-lossy-code`, `lem-it-wyner-ziv-auxiliary-cardinality-bound`, `lem-it-finite-wyner-ziv-function-convexity-continuity`, `thm-it-berger-tung-finite-multiterminal-inner-bound`, `thm-it-finite-alphabet-wyner-ziv-rate-distortion`, `ex-it-wyner-ziv-with-no-side-information`, `ex-it-wyner-ziv-lossless-slepian-wolf-endpoint`, and `ex-it-berger-tung-lossless-slepian-wolf-special-case`.

**Dependency items opened:**

- `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `def-it-information-units-and-logarithm-base`, `lem-it-finite-marginals-and-conditionals-are-pmfs`, `def-it-finite-conditional-entropy`, `def-it-finite-mutual-information`, `def-it-finite-conditional-mutual-information`, `def-it-finite-iid-multisource`, `def-it-single-letter-distortion-and-block-distortion`, `lem-it-finite-log-sum-inequality`, `thm-it-finite-kl-nonnegative-equality`, `thm-it-finite-conditional-mutual-information-identities-and-equality`, `thm-it-finite-entropy-chain-rule`, `lem-it-multisource-block-conditional-law-factorization`, `def-it-empirical-type-and-type-class`, `def-it-jointly-typical-multisource-blocks`, `lem-it-multisource-typicality-probability`, `thm-it-finite-markov-data-processing`, `def-it-multiterminal-lossless-code`, `lem-it-number-of-n-types-polynomial-bound`, `def-it-finite-alphabet-product-law`, `lem-it-finite-product-law-is-iid`, `lem-it-type-class-cardinality-bounds`, `lem-it-conditional-type-class-cardinality`, `lem-it-finite-relative-entropy-continuity-on-simplex`, `lem-it-finite-conditional-entropy-continuity`, `lem-it-conditional-typical-fan-cardinality`, `thm-it-slepian-wolf-rate-region`, `thm-extreme-value-metric`, and `thm-heine-borel-rn`.
- `def-it-information-rate-distortion-function`; `def-finite-alphabet-iid-source`, `def-finite-law-self-information-and-entropy`, `def-finite-source-information-density-and-typical-set`, and `lem-finite-alphabet-iid-information-aep`.
- `cor-iid-finite-variance-weak-law`, `thm-finite-jensen-inequality`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `def-natural-logarithm`, `def-convergence-in-probability`, `def-finite-probability-space-and-event`, `def-random-element-and-real-random-variable`, `def-identically-distributed-and-iid-random-variables`, `def-finite-sum-in-a-commutative-monoid`, `lem-finite-sum-reindexing-and-fubini`, `def-measurable-function-between-measurable-spaces`, `def-sigma-algebra-generated-by-a-function`, `def-independent-sigma-algebras-and-events`, `def-independent-families-of-event-classes`, `def-independent-random-elements`, `thm-factorization-of-expectations-for-independent-variables`, and `thm-chebyshev-weak-law-for-uncorrelated-arrays`.

I also read the assigned batch manifest, its proof-contract file, and the reader brief, and consulted the cited Wyner–Ziv paper’s Theorem 1 and Appendix Theorem A2. Theorem 1 states the finite decoder-only side-information formula (printed pp. 1–3); Appendix Theorem A2 states convexity, continuity on positive distortions, the `|U| ≤ |X|+1` reduction, and attainment (printed p. 9). [Wyner and Ziv, 1976](https://www.mit.edu/~6.454/www_fall_2001/kusuma/wynerziv.pdf). The local proof was checked independently, including its `D_min` endpoint argument.

## Edits and evidence

1. In `def-it-finite-wyner-ziv-code`, defined `d_n` directly on `x^n=(x_1,…,x_n)` by the sum from `t=1` to `n`. The upstream `def-it-single-letter-distortion-and-block-distortion` uses indices `0,…,n−1`, while the finite IID source and the multiterminal code use `1,…,n`. The local definition now matches the code’s declared block coordinates. Its distinction from the still-defective upstream carrier is recorded below.

2. In `lem-it-finite-wyner-ziv-function-convexity-continuity`, supplied the nonnegativity justification for conditional mutual information, justified continuity of finite entropy at zero and continuity of the channel objective used to close the endpoint feasible sets, and corrected the proof’s assertion below `D_min`: there the feasible set is empty and the defining infimum is `+∞`; the zero-rate branch applies for `D ≥ D_max`. This preserves the stated feasible-domain continuity claim.

3. Regenerated the proof-contract citation and derivation entries for `lem-it-wyner-ziv-auxiliary-cardinality-bound`, `lem-it-finite-wyner-ziv-function-convexity-continuity`, `thm-it-finite-alphabet-wyner-ziv-rate-distortion`, and `ex-it-wyner-ziv-with-no-side-information` so their quoted `def-it-finite-wyner-ziv-code` source is current. No stale `verification.judge` record was present on either changed item.

Validation after final item edits and reflow:

- `reflow.mts`: unchanged for both changed items.
- `precheck.mts`: definition item 0 checked/0 failing; continuity lemma PASS, 1 checked/0 failing.
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 4/4 affected entries checked.
- `proof-layout.mjs items/def-it-finite-wyner-ziv-code.md items/lem-it-finite-wyner-ziv-function-convexity-continuity.md`: 2 items, 4 steps, 0 defects.

## Uneditable dependency defect

`def-it-single-letter-distortion-and-block-distortion` is a draft supplier owned by batch `11`. Its `## Definition` block-distortion formula sums `i=0,…,n−1` without defining a zero-based block convention. The current run’s source and code definitions use `X^n=(X_1,…,X_n)` and sums from `1` to `n`; on that convention the formula reads `x_0` and omits `x_n`. This is an ill-formed block-distortion definition. The batch-17 consumer `def-it-finite-wyner-ziv-code` reaches it directly in its dependency closure. Its raw source SHA-256 at split is `09dc883b8631ea90b2e19a446bc083fc1a852068b965fcbc8c7cb6ebafb55ef6`.

## Page verdicts and blocker

- **A page `lossy-source-coding-with-side-information`:** page prose, model summary, and exact Wyner–Ziv versus Berger–Tung scope are accurate. The data-flow diagrams are descriptive and are not used as proof evidence. No page prose edit was needed. The upstream batch-11 distortion definition remains routed.
- **B page `lossy-source-coding-with-side-information-examples`:** page summary correctly limits the no-side-information comparison and states exactness only for the lossless Slepian–Wolf specialization. No page prose edit was needed.
- **Blocker:** none remains for the repaired batch-17 carriers. The batch-11 supplier defect remains routed to its owner.

## Coverage limitation

The assigned items, both assigned pages, three required context pages, and the information-theory suppliers and exact cited mathematical results listed above were opened. A `deps`-only traversal of the assigned items reaches 648 items through deep foundational chains. Some low-level non-domain suppliers were surfaced and opened after their consumers during closure expansion; I did not complete a single global supplier-first read of all 648 items, nor audit every lower-level set-theory, real-analysis, and measure-theory proof in that closure. The inventory above records the mathematical source sections and dependencies actually reviewed.
