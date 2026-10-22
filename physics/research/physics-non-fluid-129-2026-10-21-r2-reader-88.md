# Step 3a reader report — batch 88

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `88`  
Role: independent reader  
Review date: 2026-10-22

## Opened inventory

Assigned pages:

- `csm-frontier-large-deviation-ensembles`
- `csm-frontier-large-deviation-ensembles-examples`

Both page carriers are frontmatter-only draft pages, as required by the fresh compact-v1 workflow. I also opened the A-page prerequisite carriers `csm-full-phase-local-equivalence`, `csm-frontier-probability-interfaces`, `method-of-types-and-finite-large-deviations`, `quantum-communication-and-fingerprinting`, and `quantum-information-measures`. The B page's A-page prerequisite was reviewed above. The current-run cross-batch row identifies `csm-frontier-probability-interfaces` as a page prerequisite from batch 85; the page is still draft and is not an item-level proof premise in these five items.

Assigned items, read in supplier order:

1. `def-csm-frontier-mean-field-ensemble`
2. `thm-csm-frontier-compact-laplace-tilt`
3. `thm-csm-frontier-mean-field-supporting-lines`
4. `thm-csm-frontier-curie-weiss-bifurcation`
5. `ex-csm-frontier-nonexposed-energy`

Mathematical suppliers opened for the assigned claims:

- Finite probability and empirical types: `def-it-empirical-type-and-type-class`, `def-it-finite-alphabet-product-law`, `lem-it-finite-product-law-is-iid`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `def-finite-probability-space-and-event`, `def-measurable-function-between-measurable-spaces`, `def-random-element-and-real-random-variable`, `def-sigma-algebra-generated-by-a-function`, `def-independent-sigma-algebras-and-events`, `def-independent-families-of-event-classes`, `def-independent-random-elements`, `def-measurable-space`, `def-probability-measure`, `def-borel-sigma-algebra`, and `def-sigma-algebra`.
- Finite-alphabet large deviations: `thm-it-finite-alphabet-sanov-theorem`, `lem-it-number-of-n-types-polynomial-bound`, `lem-it-type-class-probability-bounds`, `lem-it-n-type-approximation`, `lem-it-type-class-cardinality-bounds`, `lem-it-type-probability-identity`, `lem-it-finite-relative-entropy-continuity-on-simplex`, and `lem-it-finite-classical-kl-nonnegative-equality`.
- Compactness: `thm-heine-borel-rn`, `thm-closed-subspace-of-a-compact-space-is-compact`, and `thm-compactness-under-continuous-maps`.
- Calculus: `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-logarithm-derivative-and-integral`, `thm-chain-rule`, `cor-mean-value-theorem`, and `thm-intermediate-value`.

I also inspected the batch-88 proof-contract entries and the exact current manifest, notes, and cross-batch dependency row as navigation and evidence, not as verdicts.

## Mathematical review

The five items are mathematical model definitions and deductions; none reports an experiment or makes an empirical claim. The product law is normalized by a finite factorization. The compact-space theorem's open-set lower bound, finite-cover closed-set upper bound, log-normalizer limit, and tilted rate function follow under the stated compactness, lower-semicontinuity, LDP, and continuity hypotheses.

The mean-field theorem correctly specializes the full-support finite-alphabet Sanov bounds, proves compactness of the finite simplex in the declared topology, and uses continuity of relative entropy to obtain the required minima. The microcanonical shell limit is conditional on the stated matching open/closed infima; the conditional law is used only after the shell event has positive probability for all sufficiently large sample sizes. The concentration argument separates points outside the constrained minimizer set by a positive rate gap. The canonical-energy criterion follows from the displayed variational minima and gives the upper-supporting-line condition directly; it does not rely on an unqualified inverse Legendre transform.

The Curie–Weiss calculation has the right entropy-plus-energy objective. The derivative signs, the critical case `βJ = 1`, endpoint behavior, and uniqueness of the positive root for `βJ > 1` are established. The binary example solves the energy fiber as `q(1)=u^4`, verifies positive curvature on `(0,1/9]`, and uses a two-sided midpoint comparison to rule out every affine upper support on `(0,1/10]`.

I checked the `tikzcd` square in `thm-csm-frontier-mean-field-supporting-lines`: the vertical arrows are normalized exponential tilts, the horizontal arrows push the laws forward through `L_n`, and the square commutes by grouping finite sums over the fibers of `L_n`. The separate type-partition diagram on the opened method-of-types prerequisite page also matches its stated map and projection. The proofs do not rely on either diagram.

## Repairs and evidence

- In `def-csm-frontier-mean-field-ensemble`, I replaced the bare name “`\ell^1` topology” with its finite-alphabet metric formula and verified the metric properties. I also defined the canonical macrostate law by its Borel-set masses, the `argmin`/`argmax` sets, and conditional probability on a positive-probability event. This closes notation gaps without changing the intended model. I updated the matching `definition_interface` in `physics-non-fluid-129-2026-10-21-r2-batch-88.proof-contracts.json`.
- In `thm-csm-frontier-curie-weiss-bifurcation`, I wrote the exponential as `\exp` in the `tanh` definition and fixed-point argument, using the exact function supplied by `def-natural-logarithm`. I updated the contract derivation for step 4.1. The notation change is equivalent and the item has no current item consumers.
- The three current item consumers of the mean-field definition—`thm-csm-frontier-mean-field-supporting-lines`, `thm-csm-frontier-curie-weiss-bifurcation`, and `ex-csm-frontier-nonexposed-energy`—were checked against the clarified definitions; no consumer repair was needed. Neither edited item had a `verification.judge` record to remove.
- Reflow on both edited items reported `unchanged`. Precheck reported one proof-bearing item checked and zero failing; the definition has no proof steps and was skipped. Final proof-layout reported 2 items, 6 steps, and 0 defects.

For source context, I read selected passages from Touchette, *The large deviation approach to statistical mechanics*: §III.E.4, especially equations (59)–(60) (arXiv PDF pp. 18–19), the free-energy/entropy transform discussion (PDF p. 40), and the nonconcave-entropy/ensemble-nonequivalence discussion in §V.E (PDF pp. 51–55). Equation (60) states the logarithmic exponential-integral limit as `sup(f-I)`; the review gives the result at a heuristic level and does not supply the local compact-space proof. I read Poisat, *Introduction to Large Deviations*, §3.4, Theorem 3.8, and Exercise 19 with its Appendix C solution (PDF pp. 9–10 and 19). The theorem assumes an LDP and a continuous function bounded above; much of its proof is set as exercises. The assigned compact theorem supplies a complete proof for its stated compact-metric hypotheses, while the Curie–Weiss proof supplies the full minimizer classification. These passages support variational and ensemble-inequivalence context; no source is treated as empirical evidence or as a substitute for the local deductions.

## Page verdicts

- `csm-frontier-large-deviation-ensembles`: **pass**. Title, draft status, item inventory, and prerequisite page IDs agree with the current manifest. The empty body is correct under compact-v1.
- `csm-frontier-large-deviation-ensembles-examples`: **pass**. The example is correctly placed on the companion page, its companion link is the A page, and the empty body is correct under compact-v1.

No other page defect was identified. No unresolved or uneditable defect remains in the assigned items. No blocker remains.

## Coverage limits

I inspected the exact mathematical suppliers invoked by the assigned arguments and the listed page prerequisite carriers. I did not audit unrelated items placed on those prerequisite pages or recursively re-audit every lower-level prerequisite of each already-published supplier. For the two cited large-deviation sources, I read the sections and exercises named above, not every page of either PDF.
